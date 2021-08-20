import React from 'react'

import axios from 'axios'

class Home extends React.Component {

    state = {
        balance: 0
    }

    componentDidMount(){
      const userLoggedString = localStorage.getItem('_user_logged')
      const userLoggedObject = JSON.parse(userLoggedString)

      axios.get(`http://localhost:8080/api/users/${userLoggedObject.id}/balance`)
          .then( response => {
            this.setState({ balance: response.data})
          }).catch( error => {
            console.log(error.response)
          });
    }

  render(){
    return(
        <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-3">Welcome!</h1>
            <p className="lead">Your balance is {this.state.balance} €</p>
            <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-primary btn-lg me-sm-2" 
                href="#/UserRegister" 
                role="button"><i className="fa fa-users"></i>  Register User</a>
                
                <a className="btn btn-danger btn-lg" 
                href="#/" 
                role="button"><i className="fa fa-users"></i>  Register Postings</a>
            </p>
         </div> 
    )
  }
}

export default Home
