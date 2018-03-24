import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./header.css";
import githubSVG from "../github.svg";


class HeaderComponent extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-md-3">
                </div>
                <div className="col-md-5">
                    <div className="input-group mb-2 mr-sm-2">
                        <span className="input-group-addon" id="basic-addon3">
                            <img src={githubSVG} alt="logo"  className={"github-logo mr-1"} />        
                        </span>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        <button type="submit" className="btn btn-primary mb-2 ml-2">Submit</button>
                    </div>
                </div>
                <div className="col-md-2">
                    
                </div>

            </div>
        );
    }
}

HeaderComponent.propTypes = {

};

export default HeaderComponent;