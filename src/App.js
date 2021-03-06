import React, { Component } from 'react';
import ListHotels from './ListHotels';
import * as HotelsAPI from './utils/HotelsAPI';
import CreateHotel from './CreateHotel';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    contacts: []
  }
  
  componentDidMount() {
    HotelsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({ contacts }))
      });
  }

  // method (removeContact) living in app and not in ListHotels is because the data lives in the componentDidMount
  removeContact = (contact) => {
    // Passing in a function and returning an object. Object that is returned is going to merge with the currentState.
    // First argument to the function - pass current state.
    // If not updating the state of the component based on the currentstate, then use the object setState.
    // Always just use functional setState
    // passes the currentState of your component - use functional setState
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    HotelsAPI.remove(contact)
  }

  createHotel = (contact) => {
    HotelsAPI.create(contact)
      .then((contact) => {
        this.setState((currentState) => ({ contacts: currentState.contacts.concat([contact]) }))
      })
  }

  // While a component can set its state when it initializes, we expect that state to change over time, usually due to user input.
  // The component is able to change its own internal state using this.setState(). Each time state is changed, React knows and will call 'render()'
  // to re-render the component. This allows for fast, efficient updates to app's UI

  render() {

    // Get all state and prop perperties
    const { contacts } = this.state

    return (
      <div>
        {/* Creating different Routes */}
        <Route exact path='/' render={() => (
          <ListHotels
            // function invocation
            // Pass data as argument when invoking the function 
            // Data to a component - pass data as 'prop'
            // Pass 'contacts' state data from the HotelsAPI
            contacts={contacts}
            // Pass function down to invoke later on
            // onDeleteContact property that will reference removeContact method
            // Inside ListHotels component, invoke this onDeleteContact property
            onDeleteContact={this.removeContact}
          />
          
        )} />


        {/* <Modal> */}
          <Route path='/newhotel' render={({ history }) => (
            <CreateHotel
              onCreateContact={(contact) => {
                this.createHotel(contact)
                history.push('/')
              }}
            />
          )} />
        {/* </Modal> */}

      </div>
    )
  }
}

export default App

// This is FIXBUTTON Branch

// React compares the previous output and new output, determines what has changed, and makes these decisions for us. 
// This process of determining what has changed in the previous and new outputs is called Reconciliation