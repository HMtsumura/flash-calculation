import React from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav } from 'react-bootstrap';
import { BrowserRouter} from 'react-router-dom';

export default class AnswerCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: "",
            result: "",
            isAnswered: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    answerCheck(answer, sum) {
        console.log(sum);
        const isCorrect = answer == sum ? "正解" : "不正解";
        this.setState({ result: isCorrect,
                        isAnswered: true });
    }

    handleChange(e) {
        this.setState({ answer: e.target.value });
    }

    render() {
        const numbers = this.props.numbers;
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        return (
            <BrowserRouter> 
            <div>
                <input type="number"
                    disabled={this.state.isAnswered}
                    value={this.state.answer}
                    onChange={(e) => this.handleChange(e)}>
                </input>
                <Button
                    disabled={this.state.isAnswered} 
                    onClick={() => this.answerCheck(this.state.answer, numbers.reduce(sum))}>
                    回答
                </Button>
                <div>{this.state.result}</div>
                {this.state.isAnswered?
                    <div><Button 
                            size="sm"
                            variant="outline-primary"
                            href="/question">
                                もう一回
                                </Button>
                                {' '}
                        <Button 
                            size="sm"
                            variant="outline-primary"
                            href="/">
                            終わる</Button>
                    </div>:null}
            </div>
            </BrowserRouter>
        );
    }
}