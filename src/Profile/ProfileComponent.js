import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from "react-apollo";
import gql from 'graphql-tag'
import REPOSITORY_FRAGMENT from "../Repositories/constants";

import RepositoriesComponent from "../Repositories/RepositoriesComponent";

class ProfileComponent extends Component {
    
    render() {
        const { data, searchText } = this.props;
        // 1
        if (this.props.data && this.props.data.loading) {
            return <div>Loading</div>
        }

        return (
            <RepositoriesComponent repositories={data.viewer.repositories} />
        );
    }
}

ProfileComponent.propTypes = {

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
) (ProfileComponent);
