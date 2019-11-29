import React from 'react'

import Questions from './questions'

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
            <h2>Evoluquestionnnnx</h2>

            <Questions questions={ questions } />
        </div>
    }



}


