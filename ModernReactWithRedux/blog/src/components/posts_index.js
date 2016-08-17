import React, { Component } from 'react';
import { connect } from 'react-redux';
// #1 import the function
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount(){
    // #4 fetchPosts is on props now
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts.all };
}

// #3 connect this Component with dispatch
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
