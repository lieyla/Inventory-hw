import React, {Component} from 'react';
import './main.css';

class Honda extends Component{
    constructor(props){
        super(props);
        this.state={
            count:this.props.startingCount
        }
    this.add=this.add.bind(this);
    this.minus=this.minus.bind(this);
    this.reset=this.reset.bind(this);

    }
    add(){
        this.setstate=({
            count:this.state.count+1
        })
    }
    minus(){
        this.setstate=({
            count:this.state.count-1
        })
    }
    reset(){
this.setstate=({
count:this.state.count
})

    }
    componentDidMount(){
      console.log("Mount");    }
            componentDidUpdated(){
                console.log("Updated"); 
                 }
    render(){
    return(
<div className="main" >
    <h1>Honda:</h1>
<h1>{this.state.count}</h1>
<button onClick={this.add}><h1>+</h1></button>
<button onClick={this.minus}><h1>-</h1></button>
<button onClick={this.reset}><h1>0</h1></button>
 <Honda/>
</div>


    )
}
}export default Honda;