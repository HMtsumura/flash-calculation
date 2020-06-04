import React from "react";
import AnswerCheck from "./AnswerCheck";
import Question from "./Question";
import { BrowserRouter, Route } from 'react-router-dom';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            digits: 50,
            speed: 50,
            numbers: 50,
        };
    }
    setValue(num, type){
        if(type === "digits"){
            this.setState({digits: num})
        }else if(type === "speed"){
            this.setState({speed: num})
        }else{
            this.setState({numbers: num})
        }
        
    }
    render(){
        //Main.jsでは、フラッシュ暗算をする前の桁・スピード・出力回数等を設定できるようにする。
        //Componetを作って、その下の階層に設定値を渡して、計算まで持ってく。
        //背景、文字の色、レイアウト等考える。=>React Bootstrap使う？
        const min = 1;
        const max = 9;
        const numbers = []
    
        for(let i = 0; i<=5; i++){
            const randomNum = Math.floor(Math.random()*(max + 1 - min) + min);
            numbers.push(randomNum);
        }
        
        return(
            <BrowserRouter>
                <div>
                <div>速さ</div>
                <RangeSlider
                value={this.props.value}
                onChange={e => this.setValue(e.target.value, "speed")}
                variant='primary'
                />
                <div>桁数</div>
                <RangeSlider
                value={this.props.value}
                onChange={e => this.setValue(e.target.value, "digits")}
                variant='danger'
                />
                <div>数</div>
                <RangeSlider
                value={this.props.value}
                onChange={e => this.setValue(e.target.value, "numbers")}
                variant='success'
                />
                    <Question numbers={numbers}/>
                    <AnswerCheck numbers={numbers}/>        
                    <Route path='/question' 
                            render= {() => <Question numbers={numbers}/>}/> 
                    {/* <Route path='/friends' component={Friends} /> */}
                </div>
            </BrowserRouter>
        );
    }
}