import React from 'react';
import './Content.css';

const Image = ({image}) => (    
    <div className='image' dangerouslySetInnerHTML={{__html: image}} />
);

const Text = ({text}) => (
    <div className='text'>
        <h1>{text ? text.title : ''}</h1>
        {text ? text.body : ''}
    </div>
);

const Audio = ({audio}) => (
    <div className='audio'>
        <audio src={audio} controls />
    </div>
);

const Content = ({image, text, audio}) => (
    <div className='content'>
        <Image image={image} />
        <Text text={text} />
        <Audio audio={audio} />
    </div>
);

export default Content;