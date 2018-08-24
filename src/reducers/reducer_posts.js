//The purpose of this reducer is to return an object that contains the id of every post as the keys and the value will be the other post info

//Import the action type FETCH_POSTS from the actions 
import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

//We want the state to be stored inside of an object. To do this, set state = {} to initialize it as an object type
export default function(state = {}, action) {
	switch (action.type) {
	case FETCH_POSTS:
		return _.mapKeys(action.payload.data, 'id')
	default:
		return state;
	}
}

