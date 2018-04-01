import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./header.css";
import githubLogo from "../github1.svg";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleDropDown= () => {
        this.setState({show: true});
    }

    componentWillReceiveProps(nextProps){
        this.setState({show: false});
    }

    render() {
        const { onProfileClicked,
            onOrganizationClicked,
            isProfileSelected } = this.props;

        let dropdownText = isProfileSelected === true ? "Profile" : "Organization";
        return (
            <div className="row justify-content-center">
                <div className="row ml-4 justify-content-end">
                    <div className="col-lg-12">
                        <div className="input-group">
                            <span className="input-group-btn">
                                <img src={githubLogo} className="github-logo" alt="logo" />
                            </span>
                            <input type="text" className="form-control" placeholder="search github" />
                            <div className={`input-group-append ${this.state.show ? "show": ""}`}>
                                <button type="button" className="btn bg-white btn-outline-secondary selected-dropdown">{dropdownText}</button>
                                <button type="button" className="btn bg-white btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={this.handleDropDown}>
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className={`dropdown-menu ${this.state.show? "show": ""}`}>
                                    <a className="dropdown-item" href="javascript:void(0)" onClick={onProfileClicked}>Profile</a>
                                    <a className="dropdown-item" href="javascript:void(0)" onClick={onOrganizationClicked}>Organization</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderComponent.propTypes = {

};

export default HeaderComponent;