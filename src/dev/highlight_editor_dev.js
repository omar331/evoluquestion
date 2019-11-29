/**
 * Script para desenvolvimento do editor de highlights
 *
 */
import React from 'react';
import { render } from 'react-dom';

import { Row, Col } from 'react-bootstrap';

import { highlightExample } from '../initial-state'

import HighlightEditor from '../views/content-blocks/highlight/editor'

render(
    <Row>
        <Col md={12}>
            <HighlightEditor
                info = { highlightExample } onChange={ (v) => { v.then( (v1) => console.log(' v1 = %o', v1) )}}
            />
        </Col>
    </Row>,
    document.getElementById('app')
);



