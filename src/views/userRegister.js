import React from 'react'

import { withRouter } from 'react-router-dom'

import Card from '../components/card'
import FormGroup from '../components/form-group'
import * as messages from '../components/toastr'

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

  register = () => {
    
    const { name, email, password, passwordRepeat } = this.state
    const user = { name, email, password, passwordRepeat }

    try {
      this.userService.validationFormUser(user)
    } catch (error) {
        const msgErrors = error.messages
        msgErrors.forEach(msg => messages.errorMessage(msg))
        return false
    }

    this.userService.saveUser(user)
      .then( response => {
        messages.successMessage('Successfully registered user. Login to access the system.')
        this.props.history.push('/login')
      }).catch( error => {
        messages.errorMessage(error.response.data)
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
                  <button onClick={this.register} 
                          className="btn btn-success me-sm-2 ">
                          <i className="pi pi-save"/> Save</button>
                  <button onClick={this.cancel} 
                          className="btn btn-danger">
                          <i className="pi pi-times"/> Cancel</button>
                </div>
              </div>
            </div>
          </div>
      </Card>
    )
  }
}

export default withRouter ( UserRegister )