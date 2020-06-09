import React from "react";
import { BrowserRouter} from 'react-router-dom';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormLabel } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 3,
            digits: 2,
            numbers: 5,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //問題出力ページに遷移
        this.props.history.push({
            pathname: '/question',
            state: { speed: this.state.speed,
                     digits: this.state.digits,
                     numbers:　this.state.numbers,
                    }
        })
    }

    //出力内容の設定値を変更
    handleSettingChenge(newValue,name){
        this.setState({[name]: newValue});
    }

    render() {
        //概要:Main.jsでは、フラッシュ暗算をする前の桁・スピード・出力回数等を設定し
        //スタートボタンを押すと、画面が遷移し、計算が始まる。
        /*TODO
            要素を中央寄せにする
            スピードの調整の仕方,どれくらいのレンジにするか、小さい方が速いのか遅いのか
            マイナスも出力するようにするのか
            2桁にしても、他の小さい桁も混ざるようにするのか
        */

        return (
            <BrowserRouter>
                <div className="main">
                    <Form>
                        <Form.Group>
                        <Row className="justify-content-md-center">
                            <Col md="2">
                                <FormLabel>速さ {this.state.speed}</FormLabel>
                                <RangeSlider
                                    value={this.state.speed}
                                    name="speed"
                                    min={1}
                                    max={5}
                                    tooltip='auto'
                                    size='sm'
                                    // tooltipPlacement='left'
                                    onChange={e => this.handleSettingChenge(Number(e.target.value),"speed")}
                                    variant='primary'
                                />
                            </Col>
                            </Row>
                        <Row className="justify-content-md-center">
                            <Col md="2">
                                <Form.Label>桁数 {this.state.digits}</Form.Label>
                                <RangeSlider
                                    value={this.state.digits}
                                    min={1}
                                    max={3}
                                    size='sm'
                                    onChange={e => this.handleSettingChenge(Number(e.target.value), "digits")}
                                    variant='danger'
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col md="2">
                                <Form.Label>数 {this.state.numbers}</Form.Label>
                                <RangeSlider
                                    value={this.state.numbers}
                                    name="numbers"
                                    min={1}
                                    max={9}
                                    size='sm'
                                    onChange={e => this.handleSettingChenge(Number(e.target.value), "numbers")}
                                    variant='warning'
                                />
                            </Col>
                        </Row>
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