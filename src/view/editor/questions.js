import React from 'react'

import Question from './question'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: props.questions
        }
    }

    render() {
        const { questions } = this.state

        return <div className={'evq__questions'}>
            { questions.map(question => {
                    return <Question question={question} />
                } )
            }
        </div>
    }



}