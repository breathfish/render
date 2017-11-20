import React, {Component} from 'react'

class B extends Component{
    render(){
        return <a>{this.props.userinfo.city}</a>
    }
}

export default B