var React = require("react");

var Results = require("./Results.jsx");
var characterStore = require("../stores/characterStore.js");


var Search = React.createClass({
	
	// <Search 
			// side="left"
			// onSearch={this.displayResults} />


	getInitialState: function () {
		return {
			searchValue : ""
		}
	},

	render: function () {
		return (
			<div>
				<input 
					ref="searchInput" 
					type="text" 
					onChange={this.onChange} 
					onKeyDown={this.onKey}
					value={this.state.searchValue} />
			</div>
		);
	},

	onChange: function () {
		this.setState({
			searchValue: this.refs.searchInput.value
		})
	},

	onKey: function (e) {
		if (e.keyCode == 13) {
			characterStore.fetch(this.refs.searchInput.value);
			this.setState({
				searchValue: ""
			})
		}
		this.props.onSearch(this.props.character);
	}
});

module.exports = Search;