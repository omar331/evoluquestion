/**
 * Script para desenvolvimento do editor de accordions
 *
 */
import React from 'react';
import { render } from 'react-dom';

import { Grid, Row, Col } from 'react-bootstrap';

import { rowsExample } from '../initial-state'

import Editor from '../views/editor/canvas/component-instance/editor'

import { fromJS } from 'immutable'


let page = fromJS({
     rows: rowsExample
})


let contentPosition = {
    params: {
        rowIndex: 1,
        colIndex: 0,
        contentIndex: 0
    }
}


let generalConfig = {

}


render(
    <div className="page-editor">
        <Grid>
            <Row>
                <Col md={12}>
                    <Editor page={ page }
                            generalConfig={ generalConfig }
                            {...contentPosition}
                    />
                </Col>
            </Row>
        </Grid>
    </div>,
    document.getElementById('app')
);
