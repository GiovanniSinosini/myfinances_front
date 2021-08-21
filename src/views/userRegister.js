import React from 'react'

import { withRouter } from 'react-router-dom'

import Card from '../components/card'
import FormGroup from '../components/form-group'
import {errorMessage, successMessage} from '../components/toastr'

import UserService from '../app/service/userService'

class UserRegister extends React.Component{

  state = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }

  constructor(){
    super();
    this.userService = new UserService();
  }

  validate(){
    const msgs = []

    if(!this.state.name){
      msgs.push('The NAME FIELD is required.')
    }
    if(!this.state.email){
      msgs.push('The EMAIL FIELD is required.')
    } else if (!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ){
      msgs.push('Email invalid. Try again.')
    }

    if(!this.state.password || !this.state.passwordRepeat){
      msgs.push('The PASSWORD FIELD is required.')
    } else if (this.state.password !== this.state.passwordRepeat) {
      msgs.push('The passwords are different. Try again.')
    }
    return msgs
  }

  register = () => {

    const msgs = this.validate();

    if(msgs && msgs.length > 0){
      msgs.forEach( (msg, index) => {
        errorMessage (msg)
      })
      return false;
    }

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    this.userService.saveUser(user)
      .then( response => {
        successMessage('Successfully registered user. Login to access the system.')
        this.props.history.push('/login')
      }).catch( error => {
        errorMessage(error.response.data)
      })
  }

  cancel = () => {
    this.props.history.push('/login')
  }

  render(){
    return(
      <Card title="Register User">
        <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Name: *" htmlFor="inputName">
                  <input 
                    type="text" 
                    className="form-control"
                    id="inputName" 
                    name="name"
                    onChange={ e => this.setState({name: e.target.value}) } />
                </FormGroup>

                <FormGroup label="Email *" hrmlfor= "inputEmail">
                  <input  type="email"
                      className="form-control"
                      id="inputEmail" 
                      name="name"
                      onChange={ e => this.setState({email: e.target.value}) }/>  
                </FormGroup>

                <FormGroup label="Password *" hrmlfor= "inputPassword">
                  <input  type="password"
                      className="form-control"
                      id="inputPassword" 
                      name="password"
                      onChange={ e => this.setState({password: e.target.value}) }/>  
                </FormGroup>

                <FormGroup label="Repeat the password *" hrmlfor= "inputPasswordRep">
                  <input  type="password"
                      className="form-control"
                      id="inputPasswordRep" 
                      name="passwordRep"
                      onChange={ e => this.setState({passwordRepeat: e.target.value}) }/>  
                </FormGroup>

                <div className="btn-toolbar mt-3 ">
                  <button onClick={this.register} className="btn btn-success me-sm-2 ">Enter</button>
                  <button onClick={this.cancel} className="btn btn-danger">Cancel</button>
                </div>
              </div>
            </div>
          </div>
      </Card>
    )
  }
}

export default withRouter ( UserRegister )