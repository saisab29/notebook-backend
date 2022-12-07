

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)
    //GET all notes
    const getNotes = async (title, description, tag) => {
        //API CALL
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZTBjOGQ2MGRiMjg0YzUwZDRkYzhiIn0sImlhdCI6MTY2OTI5MzYzMX0.IV1tc5zO7gjftcekQdMRGJbXT0Jvq9uCEtjXiLMKMtQ"

            }

        });
        const json = await response.json()
        console.log(json)
        setNotes(json)



    }

    //Add a note
    const addNote = async (title, description, tag) => {
        //API CALL
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZTBjOGQ2MGRiMjg0YzUwZDRkYzhiIn0sImlhdCI6MTY2OTI5MzYzMX0.IV1tc5zO7gjftcekQdMRGJbXT0Jvq9uCEtjXiLMKMtQ"

            },
            body: JSON.stringify({ title, description, tag })
        });


        const json = await response.json();
        console.log(json)

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
    const deleteNote = async (id) => {
        //TODO: API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZTBjOGQ2MGRiMjg0YzUwZDRkYzhiIn0sImlhdCI6MTY2OTI5MzYzMX0.IV1tc5zO7gjftcekQdMRGJbXT0Jvq9uCEtjXiLMKMtQ"

            },

        });
        const json = response.json();
        console.log(json)
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZTBjOGQ2MGRiMjg0YzUwZDRkYzhiIn0sImlhdCI6MTY2OTI5MzYzMX0.IV1tc5zO7gjftcekQdMRGJbXT0Jvq9uCEtjXiLMKMtQ"

            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes))
        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }
        setNotes(newNotes);

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}



export default NoteState