import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			messages: [
			'Hello, there how are you?',
			'I am super, and you?'
			]
		};
	}

	render(){
		debugger;
		var messageNodes = this.state.message.map((message)=> {
			return (
				<div>{message}</div>
			);
		});

		return (
			<div style={{'color: 'green'}}>{messageNodes}</div>
			);
	}
}

export default App;