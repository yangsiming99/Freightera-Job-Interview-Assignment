import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

import AutoComplete from './autocomplete';

export default class SearchBar extends Component {

    render(){
        return(
                <Navbar style={{
                    justifyContent:"center",
                    backgroundColor: "#0066a4"
                    }}>
                    <h3 style={{color:"white"}}><b>Freightera API Assignment</b></h3>
                    <AutoComplete 
                        value = {this.props.value}
                        data = {this.props.data}
                        changeHandler = {this.props.changeHandler}
                        fillHandler = {this.props.fillHandler}
                        />
                </Navbar>
        )
    }
}