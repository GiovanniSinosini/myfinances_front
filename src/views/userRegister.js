import React from 'react'

import { withRouter } from 'react-router-dom'

import Card from '../components/card'
import FormGroup from '../components/form-group'

class UserRegister extends React.Component{

  state = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }

  register = () => {
    console.log(this.state)
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