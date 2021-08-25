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
                    <button type="button" 
                            className="btn btn-primary me-sm-2" 
                            onClick={ e => props.edit(posting.id)}>
                            Edit
                    </button>
                    <button type="button" 
                            className="btn btn-danger" 
                            onClick={ e => props.delete(posting.id)}>
                                Delete
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

