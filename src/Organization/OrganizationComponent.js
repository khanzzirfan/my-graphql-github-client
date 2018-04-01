import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {graphql, compose} from "react-apollo";
import gql from "graphql-tag";
import REPOSITORY_FRAGMENT from "../Repositories/constants";

import RepositoriesComponent from "../Repositories/RepositoriesComponent";


class OrganizationComponent extends Component {
    render() {
        const { data, organization } = this.props;
        // 1
        if (this.props.data && this.props.data.loading) {
            return <div>Loading</div>
        }
        return (
            <RepositoriesComponent repositories={data.organization.repositories} />
        );
    }
}

OrganizationComponent.propTypes = {

};

const REPOSITORIES_OF_ORGANIZATION = gql`
  query ($organization: String!, $cursor: String) {
    organization(login: $organization) {
      name
      login
      url
      repositories(first: 5, after: $cursor) {
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

const REPOSITORIES_OF_ORGANIZATION_CONFIG = {
  options: ({ organization }) => ({
    variables: {
      organization,
      cursor: null,
    },
    skip: organization === '',
    notifyOnNetworkStatusChange: true,
  }),
};

export default graphql(
  REPOSITORIES_OF_ORGANIZATION,
  REPOSITORIES_OF_ORGANIZATION_CONFIG
)(OrganizationComponent);

