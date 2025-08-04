import React, {Component} from 'react'

export default class Button extends Component {
    showAlert(msg){
        alert(msg)
    }

    onClickBottonOK = () => {
        this.showAlert('Hello')
    }

    render() {
        return <botton onClick={this.onClickBottonOK}>OK</botton>
    }
}