import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Header from './Header'
import Button from 'react-bootstrap/Button'
import './Display.css';
import Form from 'react-bootstrap/Form'
class Display extends Component {
    constructor(props)
    {
        super(props);
       this.keyPress= this.keyPress.bind(this);
        this.handleChanges= this.handleChanges.bind(this);
        this.state={
            value:""
        }
    }
    handleChanges(e){
        this.setState({
            value:e.target.value
        })
        console.log(this.state.value);
    }
    keyPress(e, action){
        if(e.keyCode == 13){
            this.setState({
                value:''
            })
            action(e.target.value);
        }
     }
    render() {
        const {todos, action, action2, action3, action4}= this.props;
        
        return (
            <div className= "container" id="outerContainer">
                <Header />
                 <ListGroup className="list-group">
                 <Form.Control size="lg" type="text"  value={this.state.value} onKeyDown={(e)=>this.keyPress(e,action)} onChange={(e)=>this.handleChanges(e)} placeholder="What needs to be done?" />
                 </ListGroup>
            <ListGroup className="list-group">
                {todos.map(todo =>{
                    return (
                        <ListGroup.Item class="list-container">
                <Form.Check className="list-item"
                    type="checkbox" onClick={()=>action2(todo.id)}
                /><p className="list-item" style={{textDecoration: todo.status==="completed"?"line-through":"none"}}>{todo.work}<span class="close" onClick={()=>action4(todo)} >x</span></p>
                </ListGroup.Item>
                    )
                })}
                 </ListGroup>
                <ListGroup className="list-group" >
                    <div style={{display:"inline-block"}}>
                <Button className="btn" variant="outline-secondary" onClick={()=>action3("")}>All</Button>{'  '}
                <Button className="btn" variant="outline-secondary" onClick={()=>action3("active")}>Active</Button>{'  '} 
                <Button className="btn" variant="outline-secondary" onClick={()=>action3("completed")}>Completed</Button>{'  '}
                </div>
                 </ListGroup>
             
            </div>
        );
    }
}

export default Display;