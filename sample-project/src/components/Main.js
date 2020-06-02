import React from "react";
import AnswerCheck from "./AnswerCheck";
import Question from "./Question";

export default class Main extends React.Component{
    render(){
        //Main.jsでは、フラッシュ暗算をする前の桁・スピード・出力回数等を設定できるようにする。
        //Componetを作って、その下の階層に設定値を渡して、計算まで持ってく。
        const min = 1;
        const max = 9;
        const numbers = []
    
        for(let i = 0; i<=5; i++){
            const randomNum = Math.floor(Math.random()*(max + 1 - min) + min);
            numbers.push(randomNum);
        }

        return(
            <div>                
                {/* {numbers.join("+")+"=?"} */}
                <Question numbers={numbers}/>
                <AnswerCheck numbers={numbers}/>
            </div>
        );
    }
}