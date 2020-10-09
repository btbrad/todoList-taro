import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

class TodoList extends Component {

  state = {
    list: [
      {
        id: 1,
        todo: 'coding'
      },
      {
        id: 2,
        todo: 'fishing'
      },
      {
        id: 3,
        todo: 'hiking'
      }
    ]
  }

  render () {

    const { list } = this.state

    return (
      <View>
        {
          list.map(({todo, id}) => (
            <View key={id}>{todo}</View>
          ))
        }
      </View>
    )
  }

}
export default TodoList