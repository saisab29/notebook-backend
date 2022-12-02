

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6380f701214d1ccd5941f0636",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f0655",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.638Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f0634",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f0633",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f0632",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f0631",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    //Add a note
    const addNote = (title, description, tag) => {
        //TODO: API CALL
        console.log("Adding a new note");
        const note =
        {
            "_id": "6380f701214d1ccd5941f0632",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        }

        setNotes(notes.concat(note))

    }
    //Delete a note
    const deleteNote = (id) => {
        //TODO: API call
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    //Edit a note
    const editNote = (id, title, description, tag) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )

}



export default NoteState