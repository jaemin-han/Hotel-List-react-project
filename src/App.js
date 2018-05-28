import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    // const people = [
    //   { name: "Jae" },
    //   { name: "Min" },
    //   { name: "Han" }
    // ]

    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts= {[
          { name: "Jae" },
          { name: "Min" },
          { name: "Han" }
        ]}/>
        <ContactList contacts= {[
          { name: "One" },
          { name: "Two" },
          { name: "Three" }
        ]}/>
        <ContactList contacts= {[
          { name: "Company" },
          { name: "Laptop" },
          { name: "Phone" }
        ]}/>
      </div>
    );
  }
}

export default App;
