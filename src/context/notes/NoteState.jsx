

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
        //API call
        // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZTBjOGQ2MGRiMjg0YzUwZDRkYzhiIn0sImlhdCI6MTY2OTI5MzYzMX0.IV1tc5zO7gjftcekQdMRGJbXT0Jvq9uCEtjXiLMKMtQ"

        //     },
        //     body: JSON.stringify(data)
        // });
        // const json = response.json();
        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZTBjOGQ2MGRiMjg0YzUwZDRkYzhiIn0sImlhdCI6MTY2OTI5MzYzMX0.IV1tc5zO7gjftcekQdMRGJbXT0Jvq9uCEtjXiLMKMtQ"

            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();


        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}



export default NoteState