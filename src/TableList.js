import React, { Component } from 'react';
import { Table, Alert } from 'reactstrap';

export default class TableList extends Component {

    render(){
        let alert;
        if(this.props.apiData.length === 0 && this.props.error === false){
            alert = (
            <Alert style={{margin:"10px", backgroundColor:"#6fbc2e"}}>
                No Location Selected
            </Alert>)
        }
        else if(this.props.error === true){
            alert = (
            <Alert style={{margin:"10px"}} color="danger">
                No Locations Found
            </Alert>)
        }
        
        return(
            <div style={{textAlign:"center"}}>
                <Table responsive={true}>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>State/province</th>
                            <th>Country</th>
                            <th>Country Full</th>
                            <th>Popularity</th>
                            <th>TimeZone</th>
                            <th>Postalcode</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Dif</th>
                            <th>Per Dif</th>
                            <th>Soundex</th>
                            <th>Scale</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.apiData.map((location, index) =>(
                            <tr key={index}>
                                <td><a target="_blank" rel="noopener noreferrer" href={`http://www.google.com/search?q=${location.CityName},+${location.province}`}>{location.CityName}</a></td>
                                <td>{location.province}</td>
                                <td>{location.country}</td>
                                <td>{location.country_full}</td>
                                <td>{location.popular}</td>
                                <td>{location.timezone}</td>
                                <td>{location.postalcode}</td>
                                <td>{location.latitude}</td>
                                <td>{location.longitude}</td>
                                <td>{location.dif}</td>
                                <td>{location.per_dif}</td>
                                <td>{location.soundex}</td>
                                <td>{JSON.stringify(location.scale)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {alert}
            </div>
        )
    }
}