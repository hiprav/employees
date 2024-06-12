import React from 'react'

const Header = ({ toggleModal, nbOfContacts }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3 className='count_list'>Employees ({nbOfContacts})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i> Add New Contact
            </button>
        </div>
    </header>
  )
}

export default Header