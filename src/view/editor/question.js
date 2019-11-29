import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            question: props.question
        }
    }

    render() {
        const { question } = this.state

        return <div className={'question'}>
            <div className={'body'}>
                { question.body }
            </div>
            <div className={'type'}>
                { this.renderSelectType() }
            </div>
        </div>
    }

    renderSelectType() {
        return <div>*select type*</div>
    }
}