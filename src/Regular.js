import React, { Component } from 'react';

class Regular extends Component {
    constructor(props){
        super(props)
    }
   
    render() {
        return (
            <div>
                Regular {this.props.name}
            </div>
        );
    }
}

export default Regular;