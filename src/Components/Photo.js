import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function Photo(props){

  const post = props.post;
  // console.log('photo.js ', props)

  return (
    <figure className='figure'>
      <Link to={`/single/${post.id}`}> <img className='photo' src={post.imageLink} alt={post.description}/></Link>
      <figcaption><p>{ post.description }</p></figcaption>
      <div className='button-container'>
        <button className='button' onClick={ () => {
          props.startRemovingPost(props.index, post.id);
          props.history.push("/")
        }}>Remove</button>
        <Link className="comment-count" to={`single/${post.id}`}>
          <div>
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </div>
        </Link>
      </div>

    </figure>
  )
}

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  // onRemovePhoto: PropTypes.func.isRequired
}

export default Photo
