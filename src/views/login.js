import React from 'react'

import  {withRouter} from 'react-router-dom'
import { ProgressSpinner } from 'primereact/progressspinner'

import UserService from '../app/service/userService'
import { errorMessage } from '../components/toastr'
import { AuthContext } from '../main/authenticationProvider'

import Card from '../components/card'
import FormGroup from '../components/form-group'
import {Password} from 'primereact/password';
import '../../src/custom.css';


class Login extends React.Component {

  state = {
    email: '',
    password: '',
    spinner: false
  }
  
  constructor(){
    super();
    this.userService = new UserService();
  }

  enter = () => {
    this.setState( {spinner: true} );
    this.userService.authenticate({
      email: this.state.email,
      password: this.state.password
    }).then ( response =>{
        this.setState( {spinner: false} )
        this.context.startSession(response.data)
        this.props.history.push('/home')
    }).catch ( error => {
        this.setState( {spinner: false} )
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
                          className="p-password2"         
                          id="exampleInputEmail1" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter the email"/>
                         </FormGroup>

                         <FormGroup label="Password *" htmlFor="exampleInputPassword1">
                          <Password type="password" 
                          value={this.state.password}
                          onChange = {e => this.setState ({password: e.target.value})}
                          id="exampleInputPassword1" 
                          placeholder="Password"
                          toggleMask='true'
                          inputClassName='p-password2'
                          />
                         </FormGroup>
                       
                         <div className="btn-toolbar mt-3 ">
                        <button onClick={this.enter} 
                                className="btn btn-success me-sm-2">
                                <i className="pi pi-sign-in"/> Enter</button>
                                
                        <button onClick={this.prepareToRegister} 
                                className="btn btn-danger">
                                <i className="pi pi-plus"/> Register</button>
                         </div>
                         <div className="btn-toolbar mt-3 " >
                           <br/>
                           {this.state.spinner ? <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/> : false }
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

Login.contextType = AuthContext

export default withRouter ( Login )