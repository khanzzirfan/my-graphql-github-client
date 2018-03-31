import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepositoryListComponent from "./RepositoryListComponent";

import s from "./Repositories.css";
import { graphql, compose } from "react-apollo";
import gql from 'graphql-tag'
import REPOSITORY_FRAGMENT from "./constants";

class RepositoriesComponent extends Component {

    render() {
        const { data } = this.props;
        // 1
        if (this.props.data && this.props.data.loading) {
            return <div>Loading</div>
        }

        return (
            <div className="container">
                <h1 className="my-4">Found
                    <small>{data.viewer.repositories.edges.length || 0} repositories</small>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam
                    laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?
                </p>

                <div className="row">
                    <RepositoryListComponent 
                        repositories= {data.viewer.repositories} />
                </div>

            </div>
        );
    }
}

RepositoriesComponent.propTypes = {
    searchText: PropTypes.string
};


const REPOSITORIES_OF_CURRENT_USER = gql`
query ($cursor: String) {
    viewer {
      login
      name
      avatarUrl
      repositories(first: 5, orderBy: {direction: DESC, field: STARGAZERS}, after: $cursor) {
        edges {
          node {
            ...repository
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
 ${REPOSITORY_FRAGMENT}
`
const REPOSITORIES_OF_CURRENT_USER_CONFIG = {
    options: ({ organization }) => ({
        variables: {
            cursor: null,
        },
        notifyOnNetworkStatusChange: true,
    }),
};

export default graphql( 
    REPOSITORIES_OF_CURRENT_USER,
    REPOSITORIES_OF_CURRENT_USER_CONFIG
)(RepositoriesComponent);