import React from 'react';
import './Content.css';

const Image = ({image}) => (    
    <div dangerouslySetInnerHTML={{__html: image}} />
);

const Text = ({text}) => (
    <p>{text ? text.body : ''}</p>
);

const Audio = ({audio}) => (
    <audio src={audio} controls />
);

const Content = ({image, text, audio}) => (
    <div>
        <Image image={image} />
        <Text text={text} />
        <Audio audio={audio} />
    </div>
);

export default Content;