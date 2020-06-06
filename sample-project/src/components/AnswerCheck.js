import React from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
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
        this.backTOMain = this.backTOMain.bind(this)
    }

    answerCheck(answer, sum) {
        const isCorrect = answer == sum ? "正解" : "不正解";
        this.setState({ result: isCorrect,
                        isAnswered: true });
    }

    handleChange(e) {
        this.setState({ answer: e.target.value });
    }

    backTOMain(){
        this.props.history.push('/');
    }

    render() {
        const numbers = this.props.numbers;
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        return (
            <div>
                <input type="number"
                    disabled={this.state.isAnswered}
                    value={this.state.answer}
                    onChange={(e) => this.handleChange(e)}>

                </input>
                <Button
                    disabled={this.state.isAnswered} 
                    onClick={() => this.answerCheck(this.state.answer, numbers.reduce(sum))}
                    >
                    回答
                </Button>
                <div>{this.state.result}</div>
                {this.state.isAnswered?
                    <div><Button 
                            size="sm"
                            variant="outline-primary">
                                もう一回
                                </Button>
                                {' '}
                        <Button 
                            size="sm"
                            variant="outline-primary"
                            onClick={this.backTOMain}>
                            終わる</Button>
                    </div>:null}
            </div>
        );
    }
}