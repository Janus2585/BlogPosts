//action creator to fetch a list of posts from the API

import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

//root url of the API
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=redbluegreenpurple83'

export function fetchPosts() {

	//making the axios request, assigning it to the variable request
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	
	//assign request to the payload property of the action returned
	return {
		type: FETCH_POSTS
		//Because the request is being assigned to the payload property, the redux promise middleware will automatically resolve the request when it receives this action
		//By the time this action arrives at the reducer, the payload property will contain the response from axios, which will have the array of posts
		payload: request
	}
}