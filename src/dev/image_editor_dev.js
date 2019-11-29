/**
 * Script para desenvolvimento do editor de highlights
 *
 */
import React from 'react';
import { render } from 'react-dom';

import { Row, Col } from 'react-bootstrap';
import { fromJS } from "immutable";

import ImageEditor from '../views/content-blocks/image/editor/index'


// let imageExample1 = {
//     type: 'image',
//     url: 'http://www.retroland.com/wp-content/uploads/2012/05/Donna-Summer.jpg',
//     title: 'Dona Summer faz sucesso, mesmo no inverno',
//     caption: 'In the royal court of disco, there was never really any mistaking that Donna Summer was the Queen. Many have tried to copy her passionate vocal abilities but few ever came close. With style and grace, and plenty of hard work, she adopted the genre as her own and left her mark with a catalog of endearing hits beloved by her many fans.'
// }
let imageExample1 = {
    type: 'image',
    url: 'http://www.retroland.com/wp-content/uploads/2012/05/Donna-Summer.jpg',
    title: 'De ces populations d\'analphabètes, il y en a beaucoup qui parlent un français plus ou moins compréhensible, surtout quand ils vivent dans un milieu urbain. Mais il demeure des millions pour qui le français est quasiment une langue étrangère.',
    caption: '',
    width: "60",
    align: "center"
}

render(
    <Row>
        <Col md={12}>
            <ImageEditor
                info = { fromJS(imageExample1) }
                onChange={ (v) => { v.then( (v1) => console.log(' v1 = %o', v1) )}}
                onLoadedFile={ (v) => { console.log( "este eh o valor do V: %o", v )}}
            />
        </Col>
    </Row>,
    document.getElementById('app')
);



