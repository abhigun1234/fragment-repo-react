import React, { Component, PureComponent } from 'react';
import Regular  from './Regular';
class Parent extends Component {
    constructor(props){
        super(props)
    this.state={ name:'abhi'}

    
    }
    componentDidMount(){
        setInterval(()=>{

            this.setState({name:'Abhishek'})
        },2000)
    }
    render() {
        return (
            <div>
                <Regular name={this.state.name}></Regular>
                <PureComponent name={this.state.name}></PureComponent>
            </div>
        );
    }
}

export default Parent;