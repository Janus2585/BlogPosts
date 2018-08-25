import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	//this is a lifecyle method. It will be automatically called by React immediately after the component is visible in the DOM
	//the fetchPosts action creator is triggered here
	componentDidMount(){
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				Posts Index
			</div>
		);
	}
}

//This is a shortcut instead of using mapStateToProps. The mapStateToProps argument is null because it is not used.
//Instead of passing in mapStateToProps, the action creator fetchPosts is passed inside of an object (which is why the {} are there). 
export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);