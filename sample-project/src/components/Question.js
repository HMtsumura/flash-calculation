import React from "react";

export default class Question extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          appearingNumber: 0,
        };
      }
    render(){
        const numbers = this.props.numbers; 
        const changeNum = (number)=>{
            this.setState({appearingNumber: number});
        }
        let time = 0;
        let timer = setInterval(() => {
            
        }, "showNum()",2000);    

        
        const showNum = ()=>{
            time ++;
            console.log(timer);
            if(time > 3){
                clearInterval(timer);
            }
        }
        //     changeNum(num);
        //     timer ++;
        //     console.log(timer);
        //     if(timer > 4){
        //         clearTimeout(showNum);
        //     }
        // }, 2000,timer,numbers);
        // setTimeout((num) => {
        //     changeNum(num);
        //     console.log(num);
        // }, 2000, 1);    
        
        return(
            
            <div>{this.state.appearingNumber}</div>
        );
    }
}