import React, { Component }from 'react';
import axios from 'axios';
import User from './User';
import app from './App.css'


class App extends Component {

  state = {
    users: [],
    searchText: ''
  }

componentDidMount(){

  axios.get('https://reqres.in/api/users')
  .then(response => {
    this.setState({users: response.data.data})
  });
}
  
  render(){   

   const firstNames = [];

   const userComponents = this.state.users.map(user => {

      firstNames.push(user.first_name)
      
      return ( <User 
      key = {user.id}
      name = {user.first_name} />
      )
    });


    return (
        <div className = 'App'>
          <input 
            type="text" 
            value = {this.state.searchText} 
            onChange = {(e) => this.setState({searchText: e.target.value})}/>
          
            {this.state.searchText === '' ? 
              <div>{userComponents}</div> :
                <div>
                  {firstNames.filter(name => name.includes(this.state.searchText)).map( filteredName => (
                  <li>
                    {filteredName}
                  </li>
                  ))}
                </div>
            }
        </div>
      );

  }
  
}

export default App;
