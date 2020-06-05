import React from "react";
import { BrowserRouter} from 'react-router-dom';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormLabel } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            speed: 5,
            digits: 2,
            numbers: 5,
        };
    }

    handleClick() {
        //出力される数字を設定
        const appearingNumbers = []
        for (let i = 1; i <= this.state.numbers; i++) {
            const random = Math.random();
            const randomNum = Math.floor(random * Math.pow(10,this.state.digits));
            appearingNumbers.push(randomNum);
        }
        //問題出力ページに遷移
        this.props.history.push({
            pathname: '/question',
            state: { speed: this.state.speed,
                     digits: this.state.digits,
                     numbers:　appearingNumbers,
                    }
        })
    }

    setSpeed(newSpeed){
        this.setState({speed: newSpeed});
    }

    setDigits(newDigits){
        this.setState({digits: newDigits});
    }

    setNumbers(newNumbers){
        this.setState({numbers: newNumbers});
    }

    render() {
        //Main.jsでは、フラッシュ暗算をする前の桁・スピード・出力回数等を設定し
        //スタートボタンを押すと、画面が遷移し、計算が始まる。
        /*TODO
            要素を中央寄せにする
            スピードの調整の仕方,どれくらいのレンジにするか、小さい方が速いのか遅いのか
            速さ・桁数・数の文言
            マイナスも出力するようにするのか
            2桁にしても、他の小さい桁も混ざるようにするのか
            回答が終わってから、終了・もう一回
        */

        return (
            <BrowserRouter>
                <div>
                    <Form>
                        <Form.Group>
                            <Col xs="3">
                                <FormLabel>速さ {this.state.speed}</FormLabel>
                                <RangeSlider
                                    value={this.state.speed}
                                    min={1}
                                    max={10}
                                    tooltip='auto'
                                    size='sm'
                                    tooltipPlacement='top'
                                    onChange={e => this.setSpeed(Number(e.target.value))}
                                    variant='primary'
                                />
                            </Col>
                            <Col xs="3">
                                <Form.Label>桁数 {this.state.digits}</Form.Label>
                                <RangeSlider
                                    value={this.state.digits}
                                    min={1}
                                    max={4}
                                    size='sm'
                                    onChange={e => this.setDigits(Number(e.target.value))}
                                    variant='danger'
                                />
                            </Col>
                            <Col xs="3">
                                <Form.Label>数 {this.state.numbers}</Form.Label>
                                <RangeSlider
                                    value={this.state.numbers}
                                    min={1}
                                    max={10}
                                    size='sm'
                                    onChange={e => this.setNumbers(Number(e.target.value))}
                                    variant='warning'
                                />
                            </Col>
                        </Form.Group>
                        <Button
                            variant="outline-primary"
                            color="primary"
                            type="button"
                            onClick={this.handleClick}>
                            スタート
                    </Button>
                    </Form>
                </div>
            </BrowserRouter>
        );
    }
}