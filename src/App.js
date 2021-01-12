import logo from './ti-vuoi-mettere-con-me.jpg';
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      yes: false,
      no: false
     }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="hover">
        <div className="hover-left" onClick={()=>{this.yes();}}>
        {
          this.state.yes? <i className="fas fa-check"></i>: null
        }
        </div>
        <div className="hover-right" onClick={()=>{this.no();}}>
        {
          this.state.no? <i className="fas fa-times"></i>: null
        }
        </div>
        </div>
      </div>
    );
  }

    async yes () {
      let title= "Simp App";
      if (window.location.search && window.location.search.length) {
        try {
          var search = window.location.search.substring(1);
          let response = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
          if (response.n) title += ": " + response.n;
          if (response.name) title += ": " + response.name;
        } catch (e) {console.log(e.message)}
      }
    let response = await fetch(`https://sendnotify.me/v1/send/47e572f3a4678ca0871411df24fcd1a0a5d9b11c6697fd458293d2af840be35c`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: "Crush voted YES!"
      })
    });
      response.text().then(res => console.log(res));
      this.setState({
    yes: true,
    no: false
    });

  }

      async no () {
        let title= "Simp App";
      if (window.location.search && window.location.search.length) {
        try {
          var search = window.location.search.substring(1);
          let response = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
          if (response.n) title += ": " + response.n;
          if (response.name) title += ": " + response.name;
        } catch (e) {console.log(e.message)}
      }
    let response = await fetch(`https://sendnotify.me/v1/send/47e572f3a4678ca0871411df24fcd1a0a5d9b11c6697fd458293d2af840be35c`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: "mmm... sound like she doesn't deserve you."
      })
    });
      response.text().then(res => console.log(res));
      this.setState({
    yes: false,
    no: true
    });
  }


}

 
export default App;
