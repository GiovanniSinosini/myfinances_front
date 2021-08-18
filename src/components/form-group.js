import React from 'react'

function FormGroup(props){
    return(
        <div className="form-group mt-3">
            <label className="form-label" htmlFor={props.htmlFor}>{props.label}</label> 
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default FormGroup