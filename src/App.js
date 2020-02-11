import React, { Component } from 'react';
import SearchBar from './searchbar';
import TableList from './TableList';

export default class App extends Component {

	constructor(props){
		super(props)
		this.fetchData = this.fetchData.bind(this);
		this.handleFill = this.handleFill.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
		this.state = {
			value: "",
			apiData: [],
			error: false,
		};
	}

	componentDidUpdate(){
		this.fetchData()
	}

	fetchData() {
		if (this.state.value.length >= 1) {
			fetch(`https://api.freightera.com/api/geolocation/${this.state.value}`)
				.then((response) => response.json())
				.then((data) => {
					if (data) {
						// Used to remove the Warning Alert if an Warning Alert happened
						if (this.state.apiData.length === 0 || this.state.error === true) {
							this.setState({ apiData: data, error: false })
						}
						else if (JSON.stringify(this.state.apiData) !== JSON.stringify(data)) {
							this.setState({ apiData: data, error: false })
						}
					}
					else if (!data && this.state.apiData.length !== 0) {
						this.setState({ apiData: [], error: true })
					}

				})
		}
		else if(this.state.error){
			console.log("hi")
			this.setState({error: false})
		}
	}

	handleFill(fillValue) {
		this.setState({value: fillValue});
	}

	handleClick(e) {
		e.preventDefault();
		this.fetchData();
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

    render(){
      return(
        <div>
			<SearchBar 
				value = {this.state.value}
				data = {this.state.apiData} 
				changeHandler = {this.handleChange} 
				clickHandler = {this.handleClick} 
				fillHandler = {this.handleFill}
				/>
			<TableList 
				value={this.state.value}
				apiData={this.state.apiData}
				error={this.state.error}  
				/>
        </div>
      )
    }
}