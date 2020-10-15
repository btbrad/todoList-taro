import React, { Component } from 'react' 
import { View } from '@tarojs/components'
import ListItem from './ListItem'

export default class List extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let { data } = this.props

    return (
      <View>
        { data.map(item => <ListItem todo={item.todo} key={item.id} /> )}
      </View>
    )
  }
}