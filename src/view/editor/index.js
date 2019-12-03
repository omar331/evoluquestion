import React from 'react'

import Questions from './questions'
import './styles.css'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            survey: props.survey
        }
    }
    render() {
        const { questions } = this.state.survey

        return <div>
            <h2>Evoluquestion</h2>
            <h3>Create, edit & publish your questionaires!</h3>

            <Questions questions={ questions } />
        </div>
    }



}


