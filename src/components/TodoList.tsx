import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/actions";
import { ToDoInfo } from "../redux/defs";

interface CP{
    list: ToDoInfo[]
}
interface CS{
}
class TodoList extends React.Component<CP,CS> {
  constructor(p: CP){
      super(p);
      
      
  }
  
  render() {

    console.log('Comp 2 render');
    console.log(this.props.list);
    
    if(this.props.list!=null&&this.props.list.length>0){
      console.log(this.props.list.length);
      return (
        <div>
          <div>App 2 todo list</div>
        <ul>
          {this.props.list.map((item, index)=>{
            return <li key={'todos'+index}>{item.content}</li>
          })}
        </ul>
        </div>
      );
    }
    else{
      return <div>App 2 todo list</div>;
    }
    
  }
}

export default connect(getTodos)(TodoList);