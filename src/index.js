import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    constructor () {
        super();
        
        this.state = {
          path: '',
          pattern: ''
        };

        this.handlepathChange = this.handlepathChange.bind(this);
        this.handlepatternChange = this.handlepatternChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        ///Users/bcircle/src/SearchApi
        //*.json
  }

 
  handlepathChange (evt) {
    let self = this ;
    self.setState({ path: evt.target.value });
  }
  
  handlepatternChange (evt) {
    let self = this ;
    self.setState({ pattern: evt.target.value });
  }

  handleSubmit (evt) {
    console.log(this.state);
    evt.preventDefault();


    axios.post('http://localhost:5002/api/search/searchFile', {
    path: this.state.path, 
    pattern: this.state.pattern,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
      
      }
    
      })
      .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log("AXIOS ERROR: ", error)
    })
    }
  

    render() {
        return (
            <div>
                <h1>Search File</h1>
                {/* <form id="search" onSubmit={this.handleSubmit}> */}
                <div className="text">
                    <label>Path :   </label>
                    <input type="text" name="path" placeholder="Todo Path ..." onChange={this.handlepathChange}></input>
                    
                </div>
                <br></br>
                <div className="text">
                    <label>Pattern :    </label>
                    <input type="text" name="pattern"  placeholder="Todo Pattern ..." onChange={this.handlepatternChange}></input>
                
                </div>
                <br></br>
                <div>
                    <button onClick={this.handleSubmit} type="submit">Search</button>
                </div>
                {/* </form> */}
            </div>
        )
    }
}
            
    
    var root = document.getElementById("root")
    ReactDOM.render(<App />, root)
