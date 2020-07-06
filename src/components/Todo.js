import React, { Component } from 'react';
import Display from './Display.js';
class Todo extends Component {
    constructor()
    {
        super();
        this.addTodo= this.addTodo.bind(this);
        this.isComplete= this.isComplete.bind(this);
        this.filterList= this.filterList.bind(this);
        this.deleteTodo= this.deleteTodo.bind(this);
        this.state={
            todos:[
            {
                id: "0",
                work: "Do this",
                status: "active"
            },
            {
                id: "1",
                work: "Do that",
                status: "active"
            },
            {
                id: "2",
                work: "Do love",
                status: "completed"
            }
        ],
        filterTodos: [],
        change:false
        }
    }
    addTodo(val){
        let len= this.state.todos.length;
        let todos1= [...this.state.todos];
        todos1.push({
            work:val,
            status:"active",
            id:len
        })
        this.setState({
            todos:todos1,
           change:false
        })
    }
    isComplete(id){
       let todo1= [...this.state.todos]
       todo1[id]={...todo1[id], status:"completed"}
       this.setState({
           todos:todo1
       })
    }
    deleteTodo(todo){
        console.log(todo);
        let todos1 = [...this.state.todos]; 
        let index = todos1.indexOf(todo)
        console.log(index);
        if (index !== -1) {
          todos1.splice(index, 1);
          this.setState({todos: todos1, change:false});
        }
    }
    filterList(filter)
    {
        
        if(filter==="")
        this.setState({
           filterTodos:this.state.todos,
           change:true
        })
        else{
        let todos1= this.state.todos.filter(todo=>{
           return todo.status===filter
        })
        this.setState({
            filterTodos:todos1,
            change:true
        })
    }
    }
    render() {
        return (
            <div>
              {!this.state.change?<Display action={this.addTodo} todos={this.state.todos} action2={this.isComplete} action3={this.filterList} action4={this.deleteTodo} /> : <Display action={this.addTodo} todos={this.state.filterTodos} action2={this.isComplete} action3={this.filterList} action4={this.deleteTodo}  />}  
            </div>
        );
    }
}

export default Todo;