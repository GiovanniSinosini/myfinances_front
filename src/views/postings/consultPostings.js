import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../selectMenu';
import PostingsTable from './postingsTable';

class ConsultPostings extends React.Component{

    state = {
        year: '',
        month: '',
        type: ''
    }

    search = () => {
        console.log(this.state)
    }

  render(){
  const months = [
    { label: 'Select...', value: ''},
    { label: 'January', value: 1},
    { label: 'February', value: 2},
    { label: 'March', value: 3},
    { label: 'April', value: 4},
    { label: 'May', value: 5},
    { label: 'June', value: 6},
    { label: 'July', value: 7},
    { label: 'August', value: 8},
    { label: 'September', value: 9},
    { label: 'October', value: 10},
    { label: 'November', value: 11},
    { label: 'December', value: 12},
  ]

  const types = [
    { label: 'Select...', value: ''},
    { label: 'Payments', value: 'PAYMENTS'},
    { label: 'Receipts', value: 'RECEIPTS'}
  ]

  const postings = [
    { id: 1, description: 'Salary', value: 5000, month: 1, type: 'Receipts', status: 'Effective'}
  ]
 
  return( 
    <Card title="Search Postings">
        <div className="row">
            <div className="col-md-6">
                <div className="bs-component">
                    <FormGroup htmlFor="inputYear" label="Year: *">
                        <input type="text" 
                        className="form-control" 
                        id="inputYear" 
                        value={this.state.year}
                        onChange={e => this.setState( {year: e.target.value} )}
                        placeholder="Enter year"/>
                    </FormGroup>
                    <FormGroup htmlFor="inputMonth" label="Month: ">
                        <SelectMenu id="inputMonth" 
                                    className="form-select" 
                                    list={months}
                                    value={this.state.month}
                                    onChange={e => this.setState( {month: e.target.value} )} />
                    </FormGroup>
                    <FormGroup htmlFor="inputType" label="Type Posting: ">
                        <SelectMenu id="inputType" 
                                    className="form-select" 
                                    list={types} 
                                    value={this.state.type}
                                    onChange={e => this.setState( {type: e.target.value} )}/>
                    </FormGroup>
                    <div className="btn-toolbar mt-3 ">
                        <button onClick={this.search} className="btn btn-success me-sm-2">Search</button>
                        <button className="btn btn-danger">Register</button>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-md-12">
                <div className="bs-component">
                    <PostingsTable postings={postings}/>
                </div>
            </div>
        </div>
    </Card>
  )}
}

export default withRouter( ConsultPostings );