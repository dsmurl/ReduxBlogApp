import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsList from './components/posts_list';
import PostsNew from './components/posts_new';
// import PostsShow from './components/posts_show';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsList}/>
        <Route path="posts/new" component={PostsNew}/>
        {/*<Route path="posts/:id" component={PostsShow}/>*/}
    </Route>
);