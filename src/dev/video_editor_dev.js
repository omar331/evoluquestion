/**
 * Script para desenvolvimento do editor de vídeo
 *
 */
import React from 'react';
import { render } from 'react-dom';

import { Row, Col } from 'react-bootstrap';
import { fromJS } from "immutable";

import VideoEditor from '../views/content-blocks/video/editor'

export const videoExample = {
    type: 'video',
    width: "100",
    url: 'https://www.youtube.com/watch?v=KIYiGA_rIls',
    autoplay: false,
    align: 'center',
    closed_captions: true,
    description: "Bla bla bla"
}



render(
    <Row>
        <Col md={12}>
            <VideoEditor
                info = { fromJS(videoExample) } onChange={ (v) => { v.then( (v1) => { console.log(" value = %o", v1.toJS() ) } )}}
            />
        </Col>
    </Row>,
    document.getElementById('app')
);



