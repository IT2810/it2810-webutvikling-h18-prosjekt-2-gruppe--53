import React, { Component } from 'react';
import './TabSelect.css';

class TabSelect extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        this.props.callback(index);
    }

    render() {

        let tabs = [];
        for (let i = 0; i < 4; i++) {
            const isActive = this.props.selected === i;
            tabs.push(
                <div onClick={() => this.handleClick(i)} className={['tab', isActive ? 'tab-active' : ''].join(' ')} key={i}>{'Tab '+(i+1)}</div>
            );
        }

        return (
            <div className='tabs'>
                {tabs}
            </div>
        );
    }
}

export default TabSelect;