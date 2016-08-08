import React, { Component } from 'react';
import { Link } from 'react-router';


class PostsNew extends Component {
    render() {
        return (

            <div>
                <div>Create Post</div>
                <div className="text-xs-right">
                    <Link to="/" className='btn btn-primary'>
                        Save Post
                    </Link>
                    <Link to="/" className='btn btn-cancel'>
                        Cancel
                    </Link>
                </div>
            </div>
        );
    }
}

export default PostsNew;