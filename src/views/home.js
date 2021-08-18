import React from 'react'

class Home extends React.Component {

    state = {
        balance: 0
    }

  render(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Welcome!</h1>
            <p className="lead">Your balance is {this.state.balance} €</p>
            <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-primary btn-lg" 
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
