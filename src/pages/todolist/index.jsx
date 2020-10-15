import React, { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import List from './components/List'
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class TodoList extends Component {

  state = {
    newTodo: ''
  }

  componentDidMount() {
    console.log('组件挂载了')
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  render () {

    const { newTodo } = this.state
    const { todoStore: { list } } = this.props.store
    return (
      <View>
        <Text>New Todo</Text>
        <Input type="text" placeholder="Please Enter" value={newTodo} onChange={this.handleChange}></Input>
        <List data={list} />
      </View>
    )
  }

}
export default TodoList