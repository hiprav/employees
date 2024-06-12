import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contact }) => { 
    return (
        <Link to={`/contacts/${contact.id}`} className="contact__item">
            <div className="contact__header">
                <div className="contact__image">
                    {contact.photoUrl ? (
                        <img src={contact.photoUrl} alt={contact.name} />
                    ) : (
                        <FontAwesomeIcon icon={faUserAlt} size="2x" />
                    )}
                </div>
                
                <div className="contact__details">
                    <p className="contact_name">{contact.name.substring(0, 15)} </p>
                    <p className="contact_title">{contact.title}</p>
                </div>
            </div>
            <br/>
            <hr/>
            <div className="contact__body">
                <p><i className="bi bi-envelope"></i> {contact.email.substring(0, 20)} </p>
                <p><i className="bi bi-geo"></i> {contact.address}</p>
                <p><i className="bi bi-telephone"></i> {contact.phone}</p>
                <p>{contact.status === 'Active' ? <i className='bi bi-check-circle'></i> :
                    <i className='bi bi-x-circle'></i>} {contact.status}</p>
            </div>
        </Link>
    )
}

export default Contact