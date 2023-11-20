import React from 'react';
import PropTypes from 'prop-types';
import '../css/SwitchFiltro.css';
const Switch = ({ name }) => {
    return (
        <div className="switchComp">
            <h6>
                {name}
            </h6>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>

    );
};

Switch.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Switch;
