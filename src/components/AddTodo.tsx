import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { ReduxStoreItem, ToDoInfo } from "../redux/defs";

interface CP{
    reduxAddTodo?: (v:string) => ReduxStoreItem<ToDoInfo>
}
interface CS{
    input: string
}
class AddTodo extends React.Component<CP,CS> {
  state = {
    input: ""
  }
  constructor(p: CP){
      super(p);
      
  }
  updateInput = (input: string) => {
    
    this.setState({ input });
  };

  handleAddTodo = () => {
    if(this.props.reduxAddTodo!=null) this.props.reduxAddTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)} value={this.state.input}
          
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}


export default connect(null,{ reduxAddTodo: addTodo })(AddTodo);
// export default AddTodo;
