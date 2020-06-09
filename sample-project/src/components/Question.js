import React from "react";
import AnswerCheck from "./AnswerCheck";
import { FormLabel } from 'react-bootstrap';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.showNumber = this.showNumber.bind(this);

        //出力される数字を設定
        const appearingNumbers = []
        for (let i = 1; i <= this.props.location.state.numbers; i++) {
            const random = Math.random();
            const randomNum = Math.floor(random * Math.pow(10,this.props.location.state.digits));
            appearingNumbers.push(randomNum);
        }
        this.state = {
            appearingNumber: "Ready?",
            count: 0,
            appearedAllTheNumbers: false,
            numbersForAnswerCheck: appearingNumbers,
        };
    }

    showNumber() {
        //appearingNumbersに格納されている数字を1つずつ取り出し、
        //最後まで出力した場合は回答へ移る
        if (this.state.numbersForAnswerCheck.length - 1 >= this.state.count) {
            this.setState({
                appearingNumber: this.state.numbersForAnswerCheck[this.state.count],
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
        this.interval = setInterval(this.showNumber, 500*this.props.location.state.speed);
    }
    render() {       
        return (
            <div className="main">
                <FormLabel className="appearing-number">
                    {this.state.appearingNumber}
                </FormLabel>
                {this.state.appearedAllTheNumbers ? <AnswerCheck numbers={this.state.numbersForAnswerCheck}/>: null}
            </div>
        );
    }
}