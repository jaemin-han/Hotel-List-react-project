import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListContacts extends Component {
  // Adding propTypes property
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }

  // State property to the class - value is an object
  // Each key in the object represents a distinct piece of state in the component
  // IMPORTANT: Having state outside the constructor() means it is a class field, which is a proposal for a new change to the language. 
  // It currently is not supported by JS, but babel's transpiling - we can do it

  // Adding state property
  state = {
    query: ''
  }

  // Updating the state (value) below 
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  render() {
    // Destructuring State and Props
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props

    const showingContacts = query === ''
      // If no input detacted, show all contact hotels
      ? contacts
      // But not empty string, then filter
      : contacts.filter((c) => (
          c.name.toLowerCase().includes(query.toLowerCase())

          // Need to figure out a way to only filter based on (capitalized) first character
          // c.name.toUpperCase().includes(query.toUpperCase(0))
          

        ))

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Hotels'

            // Value is whatever
            value={query}
            // Invoking the arrow function passing the event passing 'updateQuery'
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to='/create'
            className='add-contact'
          >Add Contact</Link>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className='contact-list'>
          {showingContacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-name'>
                <p><b>Hotel:</b>&nbsp;{contact.name}</p>
                <button
                  // Whenever the button is being clicked on, go ahead and invoke the arrow function below.
                  // Remove contact that we are mapping over
                  onClick={() => onDeleteContact(contact)}
                  className='contact-remove'>
                    Remove
                </button>
              </div>


              <div
                className='contact-avatar'
                // Go into JavaScript and second curly gives it an object
                // Object and each property on that object is being specific css property
                style={{
                  // Back ticks - ES6 template strings
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              ></div>
              <div className='contact-details'>
                <p><b>Website:</b>&nbsp;<span className='contact-website'>{contact.handle}</span></p>
                <p>Description Placeholder</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts