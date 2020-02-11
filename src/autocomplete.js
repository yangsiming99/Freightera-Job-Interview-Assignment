import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';

export default class AutoComplete extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			apiList: [],
		}
	}

	componentDidUpdate(){
		if(this.props.data.length !== 0){
			let autocompleteList = [];
			for(let i = 0; i < this.props.data.length; i++){
				autocompleteList.push({
					id: `${this.props.data[i].CityName}, ${this.props.data[i].province}`,
					label: `${this.props.data[i].CityName}, ${this.props.data[i].province}`,
				});
			}
			if(JSON.stringify(autocompleteList) !== JSON.stringify(this.state.apiList)){
				this.setState({apiList: autocompleteList});
			}
		}
	}

	render() {
		let menuStyleSheet;
		if(this.props.data.length === 0){
			menuStyleSheet = {display: "none"};
		}
		else{
			menuStyleSheet = {
				borderRadius: '3px',
				boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
				background: 'rgba(255, 255, 255, 1)',
				padding: '2px 0',
				fontSize: '100%',
				position: 'fixed',
				overflow: 'auto',
				maxHeight: '50%',
				zIndex: '2',
				paddingLeft: "10px",
				paddingRight:"10px",
			  };
		}
		return (
			<div style={{ width: "100%" }}>
				<ReactAutocomplete
					items={this.state.apiList}
					shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
					getItemValue={item => item.label}
					renderItem={(item, highlighted) =>
						<div
							key={item.id}
							style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
						>
							{item.label}
						</div>
					}
					renderInput={(props) => {
						return (
								<input className="form-control"
									placeholder="Enter a location"
									style={{ width: "100%" }} {...props} 
								/>
							)
					}}
					wrapperStyle={
						{
							display: 'inline-block',
							width: "100%",
							padding: "5px"
						}
					}
					menuStyle={menuStyleSheet}
					value={this.props.value}
					onChange={this.props.changeHandler}
					onSelect={value => this.props.fillHandler(value)}
				/>
			</div>
		)
	}
}