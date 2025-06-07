import React from "react";
export class SayHi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'blue',
            count: 0,
        }
    };
    changeColor(){
        this.setState({
            color: 'green',
        });
        this.setState(prevState=> ({
            count: prevState.count + 1,
        }))
    }
    
    render(){
        let {msg, children} = this.props;
        return (
            <div>
                <h1 style={{color: this.state.color}}>
                    {msg || children}
                </h1>
                <button onClick={this.changeColor.bind(this)}>
                    Change color <br />
                    {this.state.count} times
                </button>
            </div>
        )
    }
}