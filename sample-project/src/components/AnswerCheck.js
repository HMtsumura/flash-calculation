import React from "react";

export default class AnswerCheck extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          answer: 0,
          result:"",
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
    answerCheck(answer,sum){
        const isCorrect =  answer == sum ? "正解":"不正解";
        this.setState({result: isCorrect});
    }  

    handleChange(e){
        this.setState({answer: e.target.value});
    }

    render(){
        const numbers = this.props.numbers;
        const sum = (accumulator, currentValue) => accumulator + currentValue; 
        return(
            <div>
                <input type="number" 
                        value ={this.state.answer} 
                        onChange={(e) => this.handleChange(e)}>

                        </input>
                <button onClick={() => this.answerCheck(this.state.answer,numbers.reduce(sum))}>
                    回答
                    </button>
                <div>{this.state.result}</div>
            </div>
        );
    }
}