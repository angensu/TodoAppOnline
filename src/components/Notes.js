import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";


const time = {
    paddingRight:'5px'
};
export const Notes = ({notes, onRemove}) => (
    <TransitionGroup component="ul" className="list-group list-group-flush">
        {notes.map(note =>(
            <CSSTransition
                key={note.id}
                classNames={'note'}
                timeout={800}
            >
                <li className="list-group-item note">
                    <div>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>


                    <button type="button" className="btn btn-outline-danger btn-sm"
                            onClick={()=> onRemove(note.id)}
                    >&times;</button>
                </li>
            </CSSTransition>
        ))}

    </TransitionGroup>
);