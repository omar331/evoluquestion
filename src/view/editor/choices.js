import React from 'react'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            choices: props.choices
        }
    }

    render() {
        const { choices } = this.state
        return <div className={"choices"}>
            { choices.map( choice => {
                return <div>
                    { choice }
                </div>
            })}
        </div>
    }
}
