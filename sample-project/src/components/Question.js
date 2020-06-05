import React from "react";
import AnswerCheck from "./AnswerCheck";

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {
            appearingNumber: "Ready?",
            count: 0,
            appearedAllTheNumbers: false,
        };
    }

    tick() {
        const numbers = this.props.location.state.numbers;
        if (numbers.length - 1 >= this.state.count) {
            this.setState({
                appearingNumber: numbers[this.state.count],
                count: this.state.count + 1
            });
        } else {
            this.setState({
                appearingNumber: "What's the answer?",
                appearedAllTheNumbers: true
            })
            clearInterval(this.interval);
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 500*this.props.location.state.speed);
    }
    render() {       
        return (
            
            <div>
                <div>
                    {this.state.appearingNumber}
                </div>
                {this.state.appearedAllTheNumbers ? <AnswerCheck numbers={this.props.location.state.numbers}/>: null}
            </div>
        );
    }
}