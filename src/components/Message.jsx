import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<ListItem
			leftAvatar = {<Avatar src="https://www.google.co.jp/?gfe_rd=cr&ei=hjWGVtLgIcuk8we3hbqAAQ" />} 
			>{this.props.message}</ListItem>
		);
	}
}

export default Message;