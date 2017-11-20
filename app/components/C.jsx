import React, {Component} from 'react'

class C extends Component{
    render(){
        return <button onClick= {this.changeUserInfo.bind(this)}>xiugai</button>
    }
    changeUserInfo(){
        const actions = this.props.actions
        actions.login({
            userid: '123',
            city:'sz'
        })
    }
}

export default C