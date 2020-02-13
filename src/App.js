import React, { Component } from 'react';
import NaviagationBar from './searchbar';
import TableList from './TableList';
import SearchBar from './autocomplete';

export default class App extends Component {

	constructor(props){
		super(props)
		this.fetchData = this.fetchData.bind(this);
		this.handleFill = this.handleFill.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
		this.state = {
			value: "",
			apiData: [],
			error: false,
		};
	}

	componentDidUpdate(){
		this.fetchData();
	}

	fetchData() {
		if (this.state.value.length >= 1) {
			fetch(`https://api.freightera.com/api/geolocation/${this.state.value}`)
				.then((response) => response.json())
				.then((data) => {
					if (data) {
						// Used to remove the Warning Alert when data isn't false
						if (this.state.apiData.length === 0 || this.state.error === true) {
							this.setState({ apiData: data, error: false });
						}
						// used to update apidata if state data is different from fetched data
						else if (JSON.stringify(this.state.apiData) !== JSON.stringify(data)) {
							this.setState({ apiData: data, error: false });
						}
					}
					// switches alert from warning to no location selected
					else if (!data && this.state.apiData.length !== 0) {
						this.setState({ apiData: [], error: true });
					}

				})
		}
		else if(this.state.error){
			this.setState({error: false});
		}
	}

	handleFill(fillValue) {
		this.setState({value: fillValue});
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

    render(){
      return(
        <div>
			<NaviagationBar>
				<SearchBar 
					value = {this.state.value}
					data = {this.state.apiData}
					changeHandler = {this.handleChange}
					fillHandler = {this.handleFill}
				/>
			</NaviagationBar>
			<TableList 
				value={this.state.value}
				apiData={this.state.apiData}
				error={this.state.error}  
				/>
        </div>
      )
    }
}