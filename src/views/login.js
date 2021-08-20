import React from 'react'

import  {withRouter} from 'react-router-dom'
import axios from 'axios'

import Card from '../components/card'
import FormGroup from '../components/form-group'


class Login extends React.Component {

  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  enter = () => {
    axios
      .post('http://localhost:8080/api/users/authentication', {
        email: this.state.email,
        password: this.state.password
    }).then ( response =>{
        localStorage.setItem('_user_logged', JSON.stringify(response.data) )
        this.props.history.push('/home')
    }).catch ( error => {
        this.setState( {errorMessage: error.response.data} )
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
                <div>
                  <span color="red">{this.state.errorMessage}</span>
                </div>
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
                        <button onClick={this.enter} className="btn btn-success me-sm-2">Enter</button>
                        <button onClick={this.prepareToRegister} className="btn btn-danger">Register</button>
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