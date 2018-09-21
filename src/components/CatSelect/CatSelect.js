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

    render() {
        return (
            <div>
                <form onChange={this.handleChange}>
                    <fieldset>
                        <label>Image</label>
                        <input type='radio' value='cat0' name='image'></input>
                        <input type='radio' value='cat1' name='image'></input>
                        <input type='radio' value='cat2' name='image'></input>
                    </fieldset>
                    <fieldset>
                        <label>Text</label>
                        <input type='radio' value='cat0' name='text'></input>
                        <input type='radio' value='cat1' name='text'></input>
                        <input type='radio' value='cat2' name='text'></input>
                    </fieldset>
                    <fieldset>
                        <label>Audio</label>
                        <input type='radio' value='animals' name='audio'></input>
                        <input type='radio' value='tools' name='audio'></input>
                        <input type='radio' value='vehicles' name='audio'></input>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default CatSelect;