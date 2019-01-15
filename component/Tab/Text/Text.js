import React , { Component } from 'react'
import {Text} from 'styles/Tab/styles'

export class Welcome extends Component {
  render() {
    return <Text>You click and {this.props.name}</Text>;
  }
}
