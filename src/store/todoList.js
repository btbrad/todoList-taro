import { observable } from 'mobx'

const todoStore = observable({
  list: [
    {
      id: 1,
      name: 'coding',
      done: false
    },
    {
      id: 2,
      name: 'fishing',
      done: true
    },
    {
      id: 3,
      name: 'hiking',
      done: false
    }
  ],
  counterStore() {
    this.counter++
  },
  addTodo(todoObj) {
    this.list = [...this.list, todoObj]
  },
  deleteTodo(id) {
    this.list = this.list.filter(item => item.id !== id)
  },
  changeTodoStatus(id) {
    this.list.forEach(item => {
      if (item.id === id) {
        item.done = !item.done
      }
    })
    console.log(this.list)
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
})

export default todoStore