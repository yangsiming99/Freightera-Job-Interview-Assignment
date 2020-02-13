import React, { Component } from 'react';
import { Navbar } from 'reactstrap';



export default class NaviagationBar extends Component {

    render(){
        return(
                <Navbar style={{
                    justifyContent:"center",
                    backgroundColor: "#0066a4"
                    }}>
                    <h3 style={{color:"white"}}><b>Freightera API Assignment</b></h3>
                    {this.props.children}
                </Navbar>
        )
    }
}