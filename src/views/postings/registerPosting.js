import React from 'react'

import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'

import PostingsService from '../../app/service/postingsService'

import { withRouter } from 'react-router-dom'

class RegisterPosting extends React.Component {

    constructor(){
        super();
        this.postingsService = new PostingsService();
    }

    render(){

        const types = this.postingsService.getTypes();
        const months = this.postingsService.getListMonths();

        return(
            <Card title="Register Posting">
                <div className="row">
                    <div className="col-md-12">
                    <FormGroup id="inputDescription" label="Description: *">
                            <input htmlfor="inputDescription" type="text" className="form-control"/>
                    </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <FormGroup id="inputYear" label="Year: *">
                            <input htmlfor="inputYear" type="text" className="form-control"/>
                    </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMonth" label="Month: *">
                            <SelectMenu id="inputMonth" list={months} className="form-select"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputValue" label="Value: *">
                                <input htmlfor="inputValue" type="text" className="form-control"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputType" label="Type: *">
                                <SelectMenu id="inputType" list={types} className="form-select"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                        <input type="text" className="form-control" disabled/>
                        </FormGroup>
                    </div>
                    <div className="btn-toolbar mt-3 ">
                        <button className="btn btn-success me-sm-2 ">Save</button>
                        <button onClick={this.cancel} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter (RegisterPosting)