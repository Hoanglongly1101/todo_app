import React, { useState}  from 'react'
import 'react-confirm-alert/src/react-confirm-alert.css'; //Import CSS
import ToDoList from "../TodoList";
import ToDoForm from "../TodoForm";
import storage from '../util/storage';
import { confirmAlert } from 'react-confirm-alert'; // Import lib
const Home = () => {
    const [toDoList, setToDoList] = useState(storage.get());
    // Xử lý công việc đã hoàn thành
    const handleToggle = (id) => {
      let mapper = toDoList.map((task) => {
        return task.id === Number(id)
          ? { ...task, complete: !task.complete }
          : { ...task };
      });
      setToDoList(mapper);
      storage.set(mapper);
    };
    // Lọc ra để xóa những công việc đã hoàn thành
    const handleFilter = () => {
      let notComplete = [];
      toDoList.filter((task) => {
        if(task.complete){
          notComplete.push(task.complete);
        }
        return false;
      })
      if(notComplete.length > 0){
        confirmAlert({
          title: 'Caution!!',
          message: 'This action cannot restore. Are you sure you want to delete all completed task?',
          buttons: [
              {
              label: 'Yes',
              onClick: () => {
                  let filtered = toDoList.filter((task) => {
                    return !task.complete;
                  });
                  setToDoList(filtered);
                  storage.set(filtered);
                }
              },
              {
              label: 'No',
              }]
        });
      }else{
        confirmAlert({
          title: 'Caution!!',
          message: 'No tasks completed yet!! ',
          buttons: [
              {
              label: 'Yes',
              onClick: () => {return;}
              },]
        });
      }
    };
    // Thêm công việc
    const 
    addTask = (userInput, due) => {
      let copy = [...toDoList];
      copy = [
        ...copy,
        { id: toDoList.length + 1, task: userInput, complete: false, dateOf: due },
      ];
      setToDoList(copy);
      storage.set(copy);
    };
    // Xóa task item
    const handleDelete = (id)=>{
      let del = toDoList.filter(todo => !id ); // eslint-disable-next-line
      setToDoList(del);
      storage.set(del);
    }
    const startUpdate = (todo) => {
      document.getElementById("task").value = todo.task;
      document.getElementById("due").value = todo.dateOf;
    }
    // Chỉnh sửa task item
    const endUpdate = (todo,id) => {
        let task = document.getElementById("task").value;
        let due = document.getElementById("due").value;
        if(task && due && todo.id === id + 1){
          let copy = [...toDoList]
          todo.task = task;
          todo.dateOf = due;
          setToDoList(copy);
          storage.set(copy);
        }else{
          confirmAlert({
            title: 'Caution!!',
            message: 'Please check the data has been selected or not. Make sure the infomation is completely filled',
            buttons: [
                {
                label: 'Yes',
                onClick: () => {return;}
                },
            ]
        });
        }
    }
    return(
        <div>
          <ToDoForm addTask={addTask} />
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            handleDelete={handleDelete}
            startUpdate={startUpdate}
            endUpdate={endUpdate}
          />
        </div>
    )
}
export default Home