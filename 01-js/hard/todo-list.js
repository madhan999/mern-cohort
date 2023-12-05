/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.toDoList = []
  }

  add(todo) {
    this.toDoList.push(todo)
    return this.toDoList
  }

  remove(indexOfTodo) {
    this.toDoList.splice(indexOfTodo,1)
    return this.toDoList
  }

  update(index, updatedTodo) {
    if (index >= this.toDoList.length || updatedTodo < 0) {
      return this.toDoList
    }
    this.toDoList[index] = updatedTodo
    return this.toDoList
  }

  getAll() {
    return this.toDoList
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.toDoList.length || indexOfTodo < 0) {
      return null
    }
    return this.toDoList[indexOfTodo]
  }

  clear() {
    return this.toDoList = []
  }
}

module.exports = Todo;
