import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from './../../actions';

class PostDetail extends PureComponent {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onDeleteClick = () => {
    this.props.deletePost(this.props.match.params.id);
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id]
});

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(PostDetail);
