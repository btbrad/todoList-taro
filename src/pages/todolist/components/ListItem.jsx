import React, { Component } from 'react' 
import { View } from '@tarojs/components'

export default class List extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let { todo } = this.props
    return (
      <View>{todo}</View>
    )
  }
}