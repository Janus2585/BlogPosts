import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
	//this is a lifecyle method. It will be automatically called by React immediately after the component is visible in the DOM
	//the fetchPosts action creator is triggered here
	componentDidMount(){
		this.props.fetchPosts();
	}

	//helper function to render the posts received from the api
	renderPosts() {
		return _.map(this.props.posts, post => {
			return(
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		});
	}

	render() {
		console.log(this.props.posts);
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

//whenever application level state is used, always use mapStateToProps
function mapStateToProps (state) {
	return { posts: state.posts };
}

//This is a shortcut instead of using mapStateToProps. The mapStateToProps argument is null because it is not used.
//Instead of passing in mapStateToProps, the action creator fetchPosts is passed inside of an object (which is why the {} are there). 
export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);