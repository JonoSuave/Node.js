import fs from 'fs'
import chalk from 'chalk'


const addNote = (title, body) => {
    const notes = loadNotes()

    let noteCheck = notes.find((note) => {
        return note.title === title
        // Only returns matching titles
    })
    debugger
    // console.log(noteCheck.length)
    if(noteCheck == undefined) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }else {
        console.log(`That title already exists, good sir`)
    }  
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(chalk.cyan.italic(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteLookup = notes.find(note => note.title == title)
    if(noteLookup) {
        console.log(`I believe this is the note you're looking for: 
        Title: ${chalk.cyan.bold(noteLookup.title)}
        Body: ${chalk.greenBright.italic(noteLookup.body)}`)
    }else {
        console.log(chalk.redBright(`Sorry mate, no note title matching your input`))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    let newNotes = notes.filter(note => {
        return note.title !== title
    })
    if(newNotes.length == notes.length) {
        console.log(chalk.white.bgRed(`No note with that title to remove found, mate.`))
    }else {
        saveNotes(newNotes)
        console.log(chalk.white.bgGreen(`You can remove this note from your conscience, now ;)`))
    }
}


const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}

const loadNotes = () => {
    try {
        const jsonBuffer = fs.readFileSync('notes.json')
        const jsonData = jsonBuffer.toString()
        const data = JSON.parse(jsonData)
        return data
    }catch(err) {
        return []
    }
}

export default {addNote, removeNote, listNotes, readNote}
