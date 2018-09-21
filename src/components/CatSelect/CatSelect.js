import React, { Component } from 'react';
import './CatSelect.css';

class CatSelect extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.callback(event.target.name, event.target.value);
    }

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
            <div>
                <form onChange={this.handleChange}>
                    <fieldset>
                        Image
                        {this.getCategories('image')}
                    </fieldset>
                    <fieldset>
                        Text
                        {this.getCategories('text')}
                    </fieldset>
                    <fieldset>
                        Audio
                        {this.getCategories('audio')}
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default CatSelect;