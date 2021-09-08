import React from "react";
import { withRouter } from "react-router-dom";

class LandingPage extends React.Component {

    goToHomePage = () => {
        this.props.history.push("/home")
    }

    render(){
        return(
            <div className="container text-center">
                <h2>Welcome to the My Finances system</h2>
                This is your system for controlling your finances. Click on the button below to access the system: <br/><br/>
            
                <div className="offset-md-4 col-md-4">
                    <button style={{width: '100%'}} 
                    className="btn btn-success"
                    onClick={this.goToHomePage}>
                        <i className="pi pi-sign-in"></i>Enter
                    </button>
                </div>
            </div>

            

        )
    }
}

export default withRouter(LandingPage)