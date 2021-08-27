import React from 'react'
import currencyFormatter from 'currency-formatter'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.postings.map ( posting => {
        return(
            <tr key={posting.id}>
                <td>{posting.description}</td>
                <td>{currencyFormatter.format(posting.value, { code: 'EUR' })}</td>
                <td>{posting.type}</td>
                <td>{posting.month}</td>
                <td>{posting.status}</td>
                <td>
                    <button type="button" title="Effective" 
                            disabled={ posting.status !== 'PENDING'}
                            className="btn btn-success me-sm-2" 
                            onClick={ e => props.updateStatus (posting, 'EFFECTIVE')}>
                            <i className="pi pi-check"></i>
                    </button>
                    <button type="button" title="Cancel"
                            disabled={ posting.status !== 'PENDING'}
                            className="btn btn-warning me-sm-2" 
                            onClick={ e => props.updateStatus (posting, 'CANCELED')}>
                            <i className="pi pi-times"></i>
                    </button>
                    <button type="button" title="Edit"
                            className="btn btn-primary me-sm-2" 
                            onClick={ e => props.edit(posting.id)}>
                            <i className="pi pi-pencil"></i>
                    </button>
                    <button type="button" title="Delete"
                            className="btn btn-danger" 
                            onClick={ e => props.delete(posting)}>
                            <i className="pi pi-trash"></i>
                    </button>   
                </td>
            </tr>
        )
    })
    return (
            <table className="table table-hover">
            <thead>
                <tr className="table-active">
                    <th scope="col">Description</th>
                    <th scope="col">Value</th>
                    <th scope="col">Type</th>
                    <th scope="col">Month</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>

        </table>
    )
}

