import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			messages: [
			'Hi, there how are you?',
			'I am super, and you?'
			]
		};
	}

	render(){
		var messageNodes = this.state.message.map((message)=> {
			return (
				<div>{message}</div>
			);
		});

		return (
			<div>{messageNodes}</div>
			);
	}
}

export default App;