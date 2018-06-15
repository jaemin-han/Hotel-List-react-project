import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalAbout extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        show: PropTypes.bool,
        children: PropTypes.node
    }

    render() {

        // Render nothing if the `show` prop is false
        if(!this.props.show) {
            return null;
        }



        return(
            <div className="modal-backdrop">
                <div className="modal-body">
                    {this.props.chilren}
                    <button onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        )
    }
}

export default ModalAbout; 