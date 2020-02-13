import React, { Component, useState } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {


  state = {
    fiveContacts: contacts.slice(0, 5)
  }

  showFiveContacts = () => {
    // console.log(this.state.fiveContacts)
    return this.state.fiveContacts.map((eachContact, index) => {
      return (
        <tr key={index}>
          <th><img src={eachContact.pictureUrl} alt={eachContact.name}/></th>
          <th>{eachContact.name}</th>
          <th>{eachContact.popularity}</th>
          <th><button onClick={() => this.deleteContact(index)}>Delete</button></th>
        </tr>
      )
  })
  }

  deleteContact = (index) => {
    let contactCopy = this.state.fiveContacts;
    contactCopy.splice(index, 1)
    this.setState(
      this.state.fiveContacts = contactCopy
    )  }

  addNew = () => {
    let contactCopy = this.state.fiveContacts;
    contactCopy.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState(
      this.state.fiveContacts = contactCopy
    )
  }

  sortName = () => {
    let contactCopy = this.state.fiveContacts;
    contactCopy.sort((a,b)=> a.name.localeCompare(b.name))
    this.setState(
      this.state.fiveContacts = contactCopy
    )
  }

  sortPopularity = () => {
    let contactCopy = this.state.fiveContacts;
    contactCopy.sort((b,a)=> a.popularity - b.popularity)
    this.setState(
      this.state.fiveContacts = contactCopy
    )
  }  

  
  render() {
    console.log("Render App.js")
    console.log(this.state.fiveContacts)
    return (
      <div className="App">
        <br/>
        <h1>Table</h1>
        <button onClick={this.addNew}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.showFiveContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

// function App(){
//   let [fiveContacts, setContacts] = useState(contacts.slice(0,5))

  
// }

// export default App