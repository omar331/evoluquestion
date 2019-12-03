import React from 'react'

import { QUESTION_TYPES_ORDERED, QUESTION_TYPE_INFOS } from '../../constants'

import { Row, Col, FormControl, ControlLabel, FormGroup } from 'react-bootstrap'

import Choices from './choices'


export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            question: props.question,
            editing: false
        }
    }

    handleSelectQuestionType(e) {
        console.log( e.target.value )
    }

    handleSwitchEditing(e) {
        this.setState( {
            editing: ! this.state.editing
        })
    }

    render() {
        const { question, editing } = this.state
        const { type } = this.state.question


        let questionEditingClass = editing ? "question-editing" : ""

        return <Row className={"question " + questionEditingClass } onClick={ this.handleSwitchEditing.bind(this) }>
                    <Col md={1}>

                    </Col>
                    <Col md={6}>
                            <div className={"body"}>
                                { question.body }
                            </div>
                            <div className={"type_description"}>
                                { QUESTION_TYPE_INFOS[type].description}
                            </div>

                        { this.renderChoices() }
                    </Col>
                    <Col md={2}>
                            { this.renderQuestionType() }
                    </Col>
            </Row>
    }

    renderQuestionType() {
        const { question, editing } = this.state
        const { type } = this.state.question

        if ( ! editing ) {
            return <div>
                { QUESTION_TYPE_INFOS[ type ].answer_type }
            </div>
        }

        return <FormGroup >
                    <select value={ type }  onChange={ this.handleSelectQuestionType.bind(this) }>
                        { QUESTION_TYPES_ORDERED.map( questionType => {
                            let qtInfo = QUESTION_TYPE_INFOS[ questionType ]
                            return <option value={ questionType }>{ qtInfo.answer_type }</option>
                        })}
                    </select>
        </FormGroup>
    }

    renderChoices() {
        const { type, choices } = this.state.question

        let qtInfo = QUESTION_TYPE_INFOS[ type ]

        if ( ! qtInfo.allow_choices ) return null
        return <div>
            <Choices choices={choices}/>

        </div>
    }
}