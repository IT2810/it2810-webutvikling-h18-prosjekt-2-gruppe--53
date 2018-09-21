import React, { Component } from 'react';
import './CatSelect.css';

class CatSelect extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // Report back to App component on category change
    handleChange(event) {
        this.props.callback(event.target.name, event.target.value);
    }

    // Get categories for the given media
    getCategories(media) {
        if (this.props.categories[media]) {
            let categories = this.props.categories[media];
            let elements = [];
            for (let key in categories) {
                elements.push(
                    <div key={key}>
                        <label>{categories[key]}</label>
                        <input type='radio' value={key} name={media}></input>
                    </div>
                );
            }
            return elements;
        }
        return false;
    }

    render() {
        return (
            <div className='categories'>
                <form onChange={this.handleChange}>
                    <fieldset>
                        <b>Image</b>
                        {this.getCategories('image')}
                    </fieldset>
                    <fieldset>
                        <b>Text</b>
                        {this.getCategories('text')}
                    </fieldset>
                    <fieldset>
                        <b>Audio</b>
                        {this.getCategories('audio')}
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default CatSelect;