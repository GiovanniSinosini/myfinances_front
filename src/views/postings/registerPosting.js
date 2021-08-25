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
            <Card>
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
                            <SelectMenu id="inputMonth" list={months}/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputValue" label="Value: *">
                                <input htmlfor="inputValue" type="text" className="form-control"/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputType" label="Type: *">
                            <SelectMenu id="inputType" list={types}/>
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                            <SelectMenu/>
                        </FormGroup>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter (RegisterPosting)