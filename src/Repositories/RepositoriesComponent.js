import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepositoryListComponent from "./RepositoryListComponent";
import s from "./Repositories.css";

class RepositoriesComponent extends Component {

    render() {
        const { repositories } = this.props;

        return (
            <div className="container">
                <h1 className="my-4">Found
                    <small>{repositories.edges.length || 0} repositories</small>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam
                    laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?
                </p>

                <div className="row">
                    <RepositoryListComponent
                        repositories={repositories} />
                </div>

            </div>
        );
    }
}

RepositoriesComponent.propTypes = {
    repositories: PropTypes.object
};

export default RepositoriesComponent;