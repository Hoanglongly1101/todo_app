import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const ToDoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');
    const [userDue, setUserDue] = useState('');
    const handleChangeTask = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleChangeDate = (e) => {
        setUserDue(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput && userDue){
            addTask(userInput,userDue);
            setUserDue("")
            setUserInput("");
        }else{
            confirmAlert({
                title: 'Caution!!',
                message: 'Let we know your task (⌐■_■)',
                buttons: [
                    {
                    label: 'Yes',
                    onClick: () => {return;}
                    },
                ]
            });
        }
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <button>Add</button>
            <div class="form-group">
                <label for="task">What need to be done? </label>
                <input value={userInput} type="text" onChange={handleChangeTask} required name="task" 
                    placeholder="type here..." className="input" id="task" style={{fontFamily:'monospace'}}/>
            </div>
            <div class="form-group">
                <label for="due">Due day: </label>
                <input type="datetime-local" value={userDue} onChange={handleChangeDate} name="due"
                className="input" id="due" style={{fontFamily:'monospace'}} required/>
            </div>
        </form>
    );
};
export default ToDoForm;
