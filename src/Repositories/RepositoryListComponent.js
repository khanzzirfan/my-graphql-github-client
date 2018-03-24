import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepositoryItemComponent from "./RepositoryItemComponent";

class RepositoryListComponent extends Component {
    render() {
        const { repositories } = this.props;

        var repositoryItems = repositories.edges.map(repo => {
            return <RepositoryItemComponent key={repo.node.id} name={repo.node.name} description={repo.node.description}/>
        });

        return (repositoryItems
           
        );
    }
}

RepositoryListComponent.propTypes = {
    repositories: PropTypes.object
};

export default RepositoryListComponent;