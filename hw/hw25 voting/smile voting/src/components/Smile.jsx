import React from "react";


export class Smile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: +localStorage.getItem(`${props.id}`) || 0
        }
    }

    progresCount =()=>{
        
        this.setState(prevState=> ({
            count: prevState.count + 1,
        }));
    }
    componentDidUpdate () {
        localStorage.setItem(this.props.id, this.state.count);
    }
    
    render(){
        const {src, id} = this.props;
        
        return (
            <div className="smile-item" onClick={this.progresCount}>
                <img src={src} alt={`${id} smile img`}></img>
                <p className="item-progres">
                    {id !== 'crown' ? this.state.count : ''}
                </p>
            </div>
        );
    }
}