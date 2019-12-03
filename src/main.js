import React from 'react'
import { render } from 'react-dom'

import Editor from './view/editor/index'

import * as Consts from './constants'

let survey = {
    questions: [
        {
            key: '1',
            body: 'Qual é o seu nome?',
            type: Consts.QUESTION_TYPE_TEXT
        },
        {
            key: '2',
            body: 'Qual a sua idade?',
            type: Consts.QUESTION_TYPE_NUMBER,
            range: [18,150]
        },
        {
            key: '3',
            body: 'Qual você prefere?',
            type: Consts.QUESTION_TYPE_SINGLE_CHOICE,
            choices: [
                'Opção A',
                'Opção B',
                'Nenhuma das anteriores'
            ]
        },
        {
            key: '4',
            body: 'Quais vc prefere?',
            type: Consts.QUESTION_TYPE_MULTIPLE_CHOICES,
            choices: [
                'Opção A',
                'Opção B',
                'Nenhuma das anteriores'
            ]
        },
    ]

}


render(
    <div>
        <Editor survey={ survey }/>
    </div>,
    document.getElementById('app')
);



