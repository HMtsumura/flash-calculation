import React from "react";
import AnswerCheck from "./AnswerCheck";
import Question from "./Question";
import { BrowserRouter, Route, Link, RouteComponentProps } from 'react-router-dom';

export default class Main extends React.Component{
    render(){
        //Main.jsでは、フラッシュ暗算をする前の桁・スピード・出力回数等を設定できるようにする。
        //Componetを作って、その下の階層に設定値を渡して、計算まで持ってく。
        //背景、文字の色、レイアウト等考える。
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
                    <Question numbers={numbers}/>
                    <AnswerCheck numbers={numbers}/>        
                    <Route path='/question' 
                            render= {() => <Question numbers={numbers}/>}   /> 
                    {/* <Route path='/friends' component={Friends} /> */}
                </div>
            </BrowserRouter>
        );
    }
}