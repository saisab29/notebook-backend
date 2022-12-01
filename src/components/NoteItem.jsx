import React from 'react'

export const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>

            <div class="card my-3" >

                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} </p>
                    <i class="fa-sharp fa-solid fa-trash"></i>
                    <i class="fa-light fa-calendar-lines-pen mx-2"></i>
                    <i class="fa-solid fa-pen-to-square mx-2"></i>

                </div>
            </div>
        </div>
    )
}
