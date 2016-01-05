import alt from '../alt';
import Firebase from 'firebase';

class Actions {
	login(args){
		return (dispatach)=> {
			var firebaseRef = new Firebase('https://reactmsg.firebaseio.com/messages');
			firebaseRef.authWithOAuthPopup("google",(error, user)=> {
				if(error){
					return;
				}

				dispatch(user);
			});
		}
	}

}

export default alt.createActions(Actions);