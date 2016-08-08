import React, { Component } from 'react';
import { Link } from 'react-router';

class PostsList extends Component {
    render() {
        return (
            <div>
                <div>Post List</div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className='btn btn-primary'>
                        Add A Post
                    </Link>
                </div>
            </div>
        );
    }
}

export default PostsList;