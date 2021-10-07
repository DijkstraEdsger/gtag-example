import React, { Component } from "react";

import Posts from "../../containers/Blog/Posts/Posts";
import classes from "./Blog.module.css";
import { Route, NavLink, Switch } from "react-router-dom";
import NewPost from "../Blog/NewPost/NewPost";
import FullPost from "../Blog/FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
