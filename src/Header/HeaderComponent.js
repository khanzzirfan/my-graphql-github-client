import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./header.css";
import githubLogo from "../github1.svg";

const HeaderComponent = ({
    onProfileClicked,
    onOrganizationClicked,
    isProfileSelected
}) => {

    return (
        <div className="row justify-content-center">
            <div className="row ml-4 justify-content-end">
                <div className="col-lg-12">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <img src={githubLogo} className="github-logo" alt="logo" />
                        </span>
                        <input type="text" className="form-control" placeholder="search github" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mx-2">
                    <div className="input-group mx-2">
                        <span className="input-group-btn">
                            <button className={`btn ${isProfileSelected == true ? "btn-primary" : "btn-secondary"}`} type="button" onClick={onProfileClicked}>Profile</button>
                        </span>
                    </div>
                </div>
                <div className="col-lg-5 mx-2">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button className={`btn ${isProfileSelected == false ? "btn-primary" : "btn-secondary"}`} type="button" onClick={onOrganizationClicked}>Organization</button>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HeaderComponent;