import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";

export default class Counter extends React.Component{

    constructor(props)
    {
       super(props);
       this.handleAttack = this.handleAttack.bind(this);
       this.handleDefence = this.handleDefence.bind(this);

       this.state = {
           count:0
       }
    }
     
    handleAttack(){
      
        this.setState((prevstate)=>{
            return {
              count:prevstate.count + 1,
            };
      });      
    }

    handleDefence(){
        this.setState((prevstate)=>{
            return {
              count:prevstate.count - 1,
            };
      });

    }

    render(){
        return (
            <div className="row text-white text-center">
              <h1>Game Score: {this.state.count}</h1>
              <p>You win at +10 points and lose at -10 points!</p>
              <p>Last Play:</p>
              <h3>Game Status : </h3>
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
                  <button className="btn btn-secondary w-100 mt-2">Random Play</button>
                  <br/>
                  <button className="btn btn-warning w-100 mt-2">Reset</button>
               </div>
            </div>
        );
    }
}