import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../github.svg';

class RepositoryItemComponent extends Component {
    render() {
        const { name, login, avatarUrl,description } = this.props;
        return (
            <div className="col-lg-4 col-sm-6 text-center mb-4">
                <img className="rounded-circle img-fluid d-block mx-auto" height={150} width={150} src={logo} alt="" />
                <h3>{name}
                    <small>Repo Title</small>
                </h3>
                <p>{description || "No description provided"}</p>
            </div>
        );
    }
}

RepositoryItemComponent.propTypes = {
    name: PropTypes.string,
    login: PropTypes.string,
    avatarUrl: PropTypes.string,
    description: PropTypes.string,
};

export default RepositoryItemComponent;