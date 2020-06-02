import React from "react";

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            appearingNumber: "Ready?",
            count: 0,
        };
    }

    tick() {
        const numbers = this.props.numbers;
        if (numbers.length - 1 >= this.state.count) {
            this.setState({
                appearingNumber: numbers[this.state.count],
                count: this.state.count + 1
            });
        } else {
            this.setState({
                appearingNumber: "What's the answer?"
            })
            clearInterval(this.interval);
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    render() {
        // const numbers = this.props.numbers;         
        return (

            <div>{this.state.appearingNumber}</div>
        );
    }
}