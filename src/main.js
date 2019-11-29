import React from 'react'
import { render } from 'react-dom'

import Editor from './view/editor/index'

let QUESTION_TYPE_TEXT = 0
let QUESTION_TYPE_NUMBER = 1
let QUESTION_TYPE_SINGLE_CHOICE = 2
let QUESTION_TYPE_MULTIPLE_CHOICES = 3

let survey = {
    questions: [
        {
            key: '1',
            body: 'Qual é o seu nome?',
            type: QUESTION_TYPE_TEXT
        },
        {
            key: '2',
            body: 'Qual a sua idade?',
            type: QUESTION_TYPE_NUMBER,
            range: [18,150]
        },
        {
            key: '3',
            body: 'Qual você prefere?',
            type: QUESTION_TYPE_SINGLE_CHOICE,
            choices: [
                'Opção A',
                'Opção B',
                'Nenhuma das anteriores'
            ]
        },
        {
            key: '4',
            body: 'Quais vc prefere?',
            type: QUESTION_TYPE_MULTIPLE_CHOICES,
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



