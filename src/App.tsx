import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import LoadFromExternal from 'ext-loader';
import './App.css';


function App(props:any) {
  let [v,setV] = useState('');
  let [s,setS]  = useState('');
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <table>
        <tbody>
        <tr>
          <td>
            <AddTodo {...props}/>
            <TodoList/>
          </td>
          <td>
            <div><input type="text" value={v} onChange={(arg)=>{setV(arg.target.value); }}/>
            <button onClick={()=>{setS(v);}}>Set prefix</button></div>
            {
              (s!=''?(<div>
                <hr/>
                <div className="col2"><LoadFromExternal appName="app1" comName="AddTodo" comProps={{prefix:s}} key={s} /></div>
                <div className="col2"><LoadFromExternal appName="app1" comName="TodoList"  /></div>
                
                
                </div>
              ):(null))
            }            
            
          </td>
        </tr>
        </tbody>
      </table>
      <span>learn react</span>
      
      
    </div>
  );
}

export default App;
