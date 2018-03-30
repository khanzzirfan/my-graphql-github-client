import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./header.css";
import githubSVG from "../github.svg";


class HeaderComponent extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-offset-3 col-lg-4">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <img src={githubSVG} className="github-logo" alt="logo" />
                        </span>
                        <input type="text" className="form-control" placeholder="search github" />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Search</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderComponent.propTypes = {

};

export default HeaderComponent;