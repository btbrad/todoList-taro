import React, { Component } from 'react' 
import { View, Checkbox } from '@tarojs/components'

export default class List extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let { todo: {name, done} } = this.props
    return (
      <View>
        <Checkbox checked={done}>{name}</Checkbox>
      </View>
    )
  }
}