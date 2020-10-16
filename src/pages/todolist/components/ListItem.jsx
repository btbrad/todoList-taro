import React, { Component } from 'react' 
import { View, Checkbox, CheckboxGroup, Button } from '@tarojs/components'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class List extends Component {

  constructor(props) {
    super(props)
  }

  handleChange = (id) => {
    const { todoStore } = this.props.store
    todoStore.changeTodoStatus(id)
  }

  handleDelete = (id) => {
    let { todo: {name} } = this.props
    const { todoStore } = this.props.store

    wx.showModal({
      title: '提示',
      content: `确定删除${name}吗？`,
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          todoStore.deleteTodo(id)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  }

  render() {
    let { todo: {name, done, id} } = this.props

    return (
      <View className='list-item'>
        <CheckboxGroup onChange={() => this.handleChange(id)}>
          <Checkbox checked={done} className={done ? 'done' : '' }>{name}</Checkbox>
        </CheckboxGroup>
        <Button type="warn" size="mini" onClick={() => this.handleDelete(id)}>DELETE</Button>
      </View>
    )
  }
}