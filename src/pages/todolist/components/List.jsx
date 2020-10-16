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
      <View className="todo-list">
        { data.length ? <View>{data.map(item => <ListItem todo={item} key={item.id} /> )}</View> : <View className='slogan'>全部完成！！！</View>}
      </View>
    )
  }
}