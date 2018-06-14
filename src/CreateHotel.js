import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

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
                    {/* Whenever the input field is changed, pass the handleSubmit method into onSubmit attribute */}
                    <form onSubmit={this.handleSubmit} className="create-contact-form">
                        <div className="create-contact-details">
                            <input type="text" name="name" placeholder="Name"/>
                            <input type="text" name="website" placeholder="Hotel Website"/>
                            <input type="date" name="date" placeholder="Date" />
                            <input type="text" name="description" placeholder="Description"/> 
                            <ImageInput
                                className="create-contact-avatar-input"
                                name="avatarURL"
                                maxHeight={64}
                            />
                            <button className="search-contacts-upload">Add Hotel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateContact