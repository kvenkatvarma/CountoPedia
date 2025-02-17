import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component{

    constructor(props)
    {
       super(props);
           this.state = {
           count:0,
           gamestatus: "",
           lastPlay: ""
       }
    }
     
    handleAttack=()=>{
      
        this.setState((prevstate)=>{
            let newCount = prevstate.count + Math.round(Math.random() * 10);
            return {
              count:newCount,
              gamestatus : newCount > 10 ? "You Won" :  prevstate.gamestatus,lastPlay : "Attack"
            };
      });      
    }

    handleDefence=()=>{
        this.setState((prevstate)=>{
            let newCount = prevstate.count - Math.round(Math.random() * 10);

            return {
              count:newCount,
              gamestatus : newCount < -10 ? "You Lost" : prevstate.gamestatus,lastPlay : "Defence"
            };
      });

    }


    handleReset=()=>{
        this.setState(()=>{           
            return {
              count:0,
              gamestatus: "",lastPlay : ""
            };
      });

    }

    handleRandomPlay=()=>{
       let playMode = Math.round(Math.random());
        if(playMode == 0)
        {
            this.handleAttack();
        }
        else{
            this.handleDefence();
        }
    }
    render(){
        return (
            <div className="row text-white text-center">
              <h1>Game Score: {this.state.count}</h1>
              <p>You win at +10 points and lose at -10 points!</p>
              <p>Last Play: {this.state.lastPlay}</p>
              <h3>Game Status : {this.state.gamestatus} </h3>
              <div className="col-6 col-md-3 offset-md-3">
                    <img
                    style={{
                    width: "100%",
                    cursor: "pointer",
                    border: "1px solid green",
                    }}
                    className="p-4 rounded"
                    src={attack} onClick={this.handleAttack}
                   
                />
              </div>
              <div className="col-6 col-md-3 offset-md-3">
                    <img
                    style={{
                    width: "100%",
                    cursor: "pointer",
                    border: "1px solid red",
                    }}
                    className="p-4 rounded"
                    src={defend} onClick={this.handleDefence}
                   
                />
              </div>
               <div className="col-12 col-md-4 offset-md-4">
                  <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
                  <br/>
                  <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset</button>
               </div>
            </div>
        );
    }
}