import React from 'react'

import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'

import PostingsService from '../../app/service/postingsService'

import { withRouter } from 'react-router-dom'

class RegisterPosting extends React.Component {

    state = {
        id: null,
        description: '',
        value: '',
        month: '',
        year: '',
        type: '',
        status: ''
    }

    constructor(){
        super();
        this.postingsService = new PostingsService();
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        
        this.setState({ [name]: value});
    }

    submit = () => {
        console.log(this.state)
    }

    render(){

        const types = this.postingsService.getTypes();
        const months = this.postingsService.getListMonths();

        return(
            <Card title="Register Posting">
                <div className="row">
                    <div className="col-md-12">
                    <FormGroup id="inputDescription" label="Description: *">
                            <input  
                                   type="text" 
                                   className="form-control"
                                   name="description"
                                   value={this.state.description}
                                   onChange={this.handleChange}/>
                    </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <FormGroup htmlfor="inputYear" label="Year: *">
                            <input id="inputYear" 
                                   type="text" 
                                   className="form-control"
                                   name="year"
                                   value={this.state.year}
                                   onChange={this.handleChange}/>
                    </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup htmlfor="inputMonth" label="Month: *">
                            <SelectMenu id="inputMonth" 
                                        list={months} 
                                        className="form-select"
                                        name="month"
                                        value={this.state.month}
                                        onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup htmlfor="inputValue" label="Value: *">
                                <input id="inputValue" 
                                       type="text" 
                                       className="form-control"
                                       name="value"
                                       value={this.state.value}
                                       onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup htmlfor="inputType" label="Type: *">
                                <SelectMenu id="inputType" 
                                            list={types} 
                                            className="form-select"
                                            name="type"
                                            value={this.state.type}
                                            onChange={this.handleChange}/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup htmlfor="inputStatus" label="Status: ">
                            <input id="inputStatus"  
                                   type="text" 
                                   className="form-control" 
                                   disabled
                                   name="status"
                                   value={this.state.status}
                                   />
                        </FormGroup>
                    </div>
                    <div className="btn-toolbar mt-3 ">
                        <button onClick={this.submit} className="btn btn-success me-sm-2 ">Save</button>
                        <button onClick={this.cancel} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter (RegisterPosting)