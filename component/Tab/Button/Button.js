import React , { Component } from 'react'
import {Button} from 'styles/Tab/styles'

export class Butn extends Component {
  render() {
    return <Button key = {this.key} inputColor = {this.props.inputColor} onClick = {this.props.onClick}
    >
    {this.props.title}</Button>;
  }
}
