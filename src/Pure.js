import React, { Component } from 'react';

class Pure extends Component {
  constructor(props){
      super(props)

  }
    render() {
        return (
            <div>
                Pure component {this.props.name}
            </div>
        );
    }
}

export default Pure;