import React, {Component} from 'react'

class A extends Component{
    render(){
        return <a>{this.props.userinfo.userid}</a>
    }
}

export default A