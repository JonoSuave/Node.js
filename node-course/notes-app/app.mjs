import chalk from 'chalk';
import yargs from 'yargs'
import notes from './notes.mjs'

const log = console.log;

// add, remove, list, read

yargs.command({
    command: 'list',
    showInHelp: true,
    describe: 'listing stuff',
    handler() {
        console.log(chalk.blueBright.bgBlack.bold(`This is the list of the note titles:`))
        notes.listNotes()
    }
})

yargs.command(
    'add',
    'adding stuff',{
        title:{
            type: 'string',
            describe: 'title of Note',
            demandOption: true
        },
        body: {
            type: 'string',
            description: 'This is the content of the note',
            demandOption: true
        }
    },
    (argv) => {
        console.log(`"${argv.title}": ${argv.body}`)
        notes.addNote(argv.title, argv.body)
    }
)

yargs.command(
    'remove',
    'Remove a note currently saved',{
        title: {
            type: 'string',
            description: 'Title of note being removed',
            demandOption: true
        }
    },
    (argv) => {
        notes.removeNote(argv.title)
    }
)

yargs.command({
    command: `read`,
    describe: `reading is good for the soul`,
    builder: {
        title: {
            type: 'string',
            description: 'Note lookup by title',
            demandOption: true
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()