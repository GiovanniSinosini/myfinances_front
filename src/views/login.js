import React from 'react'

import  {withRouter} from 'react-router-dom'

import UserService from '../app/service/userService'
import LocalStorageService from '../app/service/localStorageService'
import { errorMessage } from '../components/toastr'

import Card from '../components/card'
import FormGroup from '../components/form-group'


class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  constructor(){
    super();
    this.userService = new UserService();
  }

  enter = () => {
    this.userService.authenticate({
      email: this.state.email,
      password: this.state.password
    }).then ( response =>{
        LocalStorageService.addItem('_user_logged', response.data)
        this.props.history.push('/home')
    }).catch ( error => {
         errorMessage(error.response.data)
    })
  }

  prepareToRegister = () => {
    this.props.history.push('/userRegister')
  }

  render(){           
    return(
        <div className="row">
          <div className="col-md-6" style={ {position:'relative', left: '300px'}}>
            <div className="bs-docs-section">
              <Card title="Login">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-Component">
                      <fieldset>
                         <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                          <input type="email" 
                          value={this.state.email}
                          onChange = {e => this.setState({email: e.target.value}) } 
                          className="form-control"         
                          id="exampleInputEmail1" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter the email"/>
                         </FormGroup>

                         <FormGroup label="Password *" htmlFor="exampleInputPassword1">
                          <input type="password" 
                          value={this.state.password}
                          onChange = {e => this.setState ({password: e.target.value})}
                          className="form-control" 
                          id="exampleInputPassword1" 
                          placeholder="Password"/>
                         </FormGroup>
                        
                         <div className="btn-toolbar mt-3 ">
                        <button onClick={this.enter} 
                                className="btn btn-success me-sm-2">
                                <i className="pi pi-sign-in"/> Enter</button>
                        <button onClick={this.prepareToRegister} 
                                className="btn btn-danger">
                                <i className="pi pi-plus"/> Register</button>
                         </div>

                      </fieldset>
                    </div>
                  </div>
                </div> 
              </Card>
            </div>
          </div>
        </div>
    )    
  }
}

export default withRouter ( Login )