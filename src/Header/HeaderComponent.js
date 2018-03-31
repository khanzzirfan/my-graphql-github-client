import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./header.css";
import githubSVG from "../github.svg";


const HeaderComponent = ({

}) => {
    return (
        <div className="row justify-content-center">
            <div className="row ml-4 justify-content-end">
                <div className="col-lg-12">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <img src={githubSVG} className="github-logo" alt="logo" />
                        </span>
                        <input type="text" className="form-control" placeholder="search github" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mx-2">
                    <div className="input-group mx-2">
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Profile</button>
                        </span>
                    </div>
                </div>
                <div className="col-lg-5 mx-2">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Organization</button>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HeaderComponent;