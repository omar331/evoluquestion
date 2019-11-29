import React from 'react';
import { render } from 'react-dom';

import { Row, Col } from 'react-bootstrap';
import { fromJS } from "immutable";

import TextEditor from '../views/content-blocks/text/editor/index'


let example1 = {
    type: 'text',
    content: 'Donec ultricies molestie dapibus. Nunc viverra malesuada justo, nec dapibus magna laoreet eget. Nulla ex mauris, euismod quis laoreet in, elementum ut augue. Nulla ante mi, eleifend et varius nec, egestas non odio. Donec tellus nisl, fringilla in vestibulum ac, laoreet et metus. Suspendisse potenti. Donec in risus vitae lacus laoreet posuere a non nunc. Etiam maximus tellus ut lectus rutrum, nec ultricies ante rutrum. Maecenas bibendum maximus tellus. Etiam ultrices purus at libero bibendum accumsan. In aliquam nec nisl ut fringilla. Aliquam a quam porttitor, bibendum est vitae, sagittis tellus. Quisque in arcu tincidunt, sodales nisi non, sagittis mauris. Nunc volutpat arcu a massa suscipit, et dictum massa sollicitudin.',
    boxed: true,
    width: 75,
    align: "center"
}


const handleChange = (promisseValues) => {
    promisseValues.then( (values) => {

        console.log('  values = %o', values.toJS() )
    }  )
}

render(
    <Row>
        <Col md={12}>
            <TextEditor
                generalConfig={ window.evolupageConfig }
                info = { fromJS(example1) } onChange={ handleChange }
            />
        </Col>
    </Row>,
    document.getElementById('app')
);



