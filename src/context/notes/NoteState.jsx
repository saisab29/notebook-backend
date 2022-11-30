

import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6380f701214d1ccd5941f063",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f065",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.638Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f063",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f063",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f063",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
        {
            "_id": "6380f701214d1ccd5941f063",
            "user": "637e0c8d60db284c50d4dc8b",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-11-25T17:10:25.255Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)



    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}



export default NoteState