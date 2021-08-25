import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/card';
import FormGroup from '../../components/form-group';
import SelectMenu from '../../components/selectMenu';
import PostingsTable from './postingsTable';
import * as messages from '../../components/toastr';
import { confirmDialog } from 'primereact/confirmdialog';

import PostingsService from '../../app/service/postingsService';
import LocalStorageService from '../../app/service/localStorageService';



class ConsultPostings extends React.Component{

    state = {
        year: '',
        month: '',
        type: '',
        description: '',
        status: '',
        visible: false,
        postings: []
    }

    constructor(){
        super();
        this.postingService = new PostingsService();
    }

    search = () => {
        if(!this.state.year){
            messages.errorMessage('The year field is required')
            return false;
        }

        const userLogged = LocalStorageService.getItem('_user_logged')
        
        const postingFilter = {
            year: this.state.year,
            month: this.state.month,
            type: this.state.type,
            description: this.state.description,
            status: this.state.status,
            user: userLogged.id
        }
            this.postingService
            .search(postingFilter)
            .then ( response => {
                this.setState ( {postings: response.data} )
            }).catch ( error => {
                console.log(error)
            })
    }
    edit = (id) => {
        console.log('editing posting', id)
    }

    delete = ( posting ) => {
        this.postingService
            .deletePosting(posting.id)
            .then ( response => {
                const postings = this.state.postings
                const index = postings.indexOf(posting)
                postings.splice(index, 1)
                this.setState(postings)
                messages.successMessage('Posting deleted successfully.')
            }).catch (error => {
                messages.errorMessage('Error when deleting.')
            })
    }
    returnConsult = () => {
        this.props.history.push('/consultPostings')
      }

    confirm = (posting) => {
        confirmDialog({
            message: 'Are you sure you want to delete?',
            header: 'Delete Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptClassName: 'p-button-danger',
            accept: () => this.delete(posting),
            reject: () => this.returnConsult()
        });
    }

  render(){
  
    const months = this.postingService.getListMonths();
    const types = this.postingService.getTypes();
    const status = this.postingService.getStatus();

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
                        <FormGroup htmlFor="inputDescription" label="Description: ">
                            <input type="text" 
                            className="form-control" 
                            id="inputDescription" 
                            value={this.state.description}
                            onChange={e => this.setState( {description: e.target.value} )}
                            placeholder="Enter description"/>
                        </FormGroup>
                        <FormGroup htmlFor="inputType" label="Type Posting: ">
                            <SelectMenu id="inputType" 
                                        className="form-select" 
                                        list={types} 
                                        value={this.state.type}
                                        onChange={e => this.setState( {type: e.target.value} )}/>
                        </FormGroup>
                        <FormGroup htmlFor="inputStatus" label="Status: ">
                            <SelectMenu id="inputStatus" 
                                        className="form-select" 
                                        list={status}
                                        value={this.state.status}
                                        onChange={e => this.setState( {status: e.target.value} )} />
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
                        <PostingsTable postings={this.state.postings}
                                    delete={this.confirm}
                                    edit={this.edit} />
                    </div>
                </div>
            </div>
        </Card>
  )}
}

export default withRouter( ConsultPostings );