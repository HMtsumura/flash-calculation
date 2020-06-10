import React from "react";
import ReactDOM from 'react-dom'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormLabel } from 'react-bootstrap';
import { BrowserRouter} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
        const isCorrect = answer == sum ? "正解" : "不正解";
        this.setState({ result: isCorrect,
                        isAnswered: true });
    }

    handleChange(e) {
        this.setState({ answer: e.target.value });
    }

    componentDidMount() {
        let input = ReactDOM.findDOMNode(this.refs.answer);
        input && input.focus();
    }

    render() {
        const numbers = this.props.numbers;
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        return (
            <BrowserRouter> 
            <div>
            <Row className="justify-content-md-center">
            <Col md="6">
                <input type="number"
                    disabled={this.state.isAnswered}
                    value={this.state.answer}
                    onChange={(e) => this.handleChange(e)}
                    width="auto"
                    ref="answer">
                </input>
                {' '}
                <Button
                    disabled={this.state.isAnswered} 
                    onClick={() => this.answerCheck(this.state.answer, numbers.reduce(sum))}>
                    回答
                </Button>
                </Col>
                </Row>
                <FormLabel className="result">{this.state.result}</FormLabel>
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