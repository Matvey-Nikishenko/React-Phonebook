import React from 'react';
import { TransitionGroup ,CSSTransition } from 'react-transition-group';
import popTransition from '../pop.module.css';


const  ContactList = ({visibleContacts, onDeleted}) =>  (
    <TransitionGroup component="ul" className="list">
                {visibleContacts.map(contact => (
                    <CSSTransition key={contact.id} timeout={200} classNames={popTransition}>
                        <li  className="contact-item">
                            <span className="contact-name">{contact.name}:</span>
                            <span className="contact-number">{contact.number}</span>
                            <button type="button" className="delete-btn" onClick={() => onDeleted(contact.id)}>Delete</button>
                        </li>
                    </CSSTransition>    
                ))
                } 
    </TransitionGroup>               
);

export default ContactList;