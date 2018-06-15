import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class ModalAbout extends Component {
  render() {
    // Show nothing if `show` is false
    if(!this.props.show) {
      return null;
    }


    // The gray background
    const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
      };
  
      // The modal "window"
      const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30
      };


    return (
      <div className="modal-container" style={backdropStyle}>
        <div className="modal-body" style={modalStyle}>
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ModalAbout.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default ModalAbout;
