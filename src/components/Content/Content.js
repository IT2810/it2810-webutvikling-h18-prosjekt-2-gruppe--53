import React, { Component } from 'react';
import './Content.css';

const Image = ({image}) => (    
    <div dangerouslySetInnerHTML={{__html: image}} />
);

const Text = ({text}) => (
    <p>{text}</p>
);

const Audio = ({audio}) => (
    <audio src={audio} controls />
);

class Content extends Component {
    render() {
        return (
            <div>
                <Image image={this.props.image} />
                <Text text={this.props.text} />
                <Audio audio={this.props.audio} />
            </div>
        );
    }
}

export default Content;