import React, {Component} from 'react';
import './main.css';
class Jeep extends Component{
    constructor (props){
        super(props);
        this.state={
            count:this.props.startingCount
        }
        this.add=this.add.bind(this);
        this.minus=this.minus.bind(this);
        this.reset=this.reset.bind(this);
    }
    add(){
        this.setState({
            count:this.state.count+1
        })

    }
    minus(){
        this.setState({
            count:this.state.count-1
        })

    }
    reset(){
        this.setState({
        count:this.props.startingCount
    })
                
    }
componentDidCatch(){
    console.log("Mounted!!");
}
componentDidUpdate(){
    console.log("Updated");
}
render(){
    return(
        <div className="main">
            <h1>
           Jeep
            </h1>
            <h1>{this.state.count} </h1>
            <button onClick={this.add}><h1>+ </h1></button>
            <button onClick={this.minus}><h1>- </h1></button>
            <button onClick={this.reset}><h1> </h1></button>

        </div>

    )
}
}

export default Jeep;