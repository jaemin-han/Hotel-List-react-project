import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContact extends Component {
    // HandleSubmit Method* 
    handleSubmit = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })
        // console.log('values', values)

        if (this.props.onCreateContact) {
            this.props.onCreateContact(values)
        }
    };
    render() {
        return (
            <div className="create-modal_container">
                <div className="create-modal_child">
                    <Link className="close-create-contact" to="/">
                        Close
                    </Link>
                    {/* Instead of React Router, I will try to attempt a modal */}
                    {/* Whenever the input field is changed, pass the handleSubmit method into onSubmit attribute */}
                    <form onSubmit={this.handleSubmit} className="create-contact-form">
                        <ImageInput
                            className="create-contact-avatar-input"
                            name="avatarURL"
                            maxHeight={64}
                        />
                        <div className="create-contact-details">
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="text" name="website" placeholder="Hotel Website"/>
                            <input type="date" name="date" placeholder="Date" />
                            <input type="text" name="description" placeholder="Description"/> 

                            
                        </div>
                        <button className="">Add Hotel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateContact