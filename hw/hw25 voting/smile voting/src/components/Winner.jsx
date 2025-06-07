import React from "react";
import { Smile } from "./Smile";
import { imageMap } from "../App";
let storage = [];


export class Winner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: 'crown',
            value: 0
        }
    }

    clickHandler = () => {
        storage = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); 
            const value = localStorage.getItem(key); 
            storage.push({
                [key]: +value
            });
        };
        
        storage.forEach(el=>{
            const key = Object.keys(el)[0];
            const value = Object.values(el)[0];
            if (value>this.state.value) {
                this.setState({
                    id: key,
                    value: value,
                })
            }
        })
    }
    render(){
        const {id} = this.props;
        return (
            <>
                <button className="btn" onClick={this.clickHandler}>
                    show results
                </button>
                <div className="winner-wrapper">
                    <h2>Vote result:</h2>
                    <h3>winner</h3>
                    <Smile src={imageMap[this.state.id]} id={id}></Smile>
                    <p className="vote-num">number of votes: {this.state.value}</p>
                </div>
            </>
        )
    }
}