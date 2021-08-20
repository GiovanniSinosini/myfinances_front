import React from 'react'

import UserService from '../app/service/userService'

class Home extends React.Component {

    state = {
        balance: 0
    }

    constructor(){
      super()
      this.userService = new UserService();
    }

    componentDidMount(){
      const userLoggedString = localStorage.getItem('_user_logged')
      const userLoggedObject = JSON.parse(userLoggedString)

      this.userService
          .getBalance(userLoggedObject.id)
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
