/* eslint-disable no-sequences */
import { VerticalTimeline,VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@mui/icons-material/Done';

const ToDoList = ({toDoList,handleToggle,handleFilter,handleDelete,startUpdate,endUpdate}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.dataset.id)
    }
    const handleClickDelete = (e)=> {
        e.preventDefault();
        confirmAlert({
            title: 'Caution!!!',
            message: 'This action cannot restore. Are you sure you want to delete this task?',
            buttons: [
                {
                label: 'Yes',
                onClick: () => handleDelete(e.target.dataset.id)
                },
                {
                label: 'No',
                }
            ]
        });
    }
    const day = new Date().toJSON();
    return (
        <div className="contains-list">
            <div className="btn">
                <button onClick={handleFilter}>Delete all completed tasks</button>
            </div>
            <VerticalTimeline>
                {
                    toDoList.map((todo,index) => {
                        const myClass = todo.complete ? "strick" : "nostrick" && day > todo.dateOf ? 'strickDate' : 'nostrick';
                        const faildDate = todo.complete ? '' : '' || day > todo.dateOf ? 'U late (_　_)。゜zｚＺ' : '';
                        const Icon = todo.complete ? <DoneIcon /> : <WorkIcon />
                        const title = todo.complete ? "Completed!!! ༼ つ ◕_◕ ༽つ" : "Almost done (*/ω＼*) ";
                        const btnTitle = todo.complete ? 'Continue?' : 'Finish';
                        const btnClass = todo.complete ? 'btn_Accomplished' : 'btn_complete';
                        const btnDelete = todo.complete ? 'btn_del_Accomplished' : 'btn_del_complete';
                        const btnUpdate = todo.complete ? 'btn_update_Accomplished' : 'btn_update_complete';
                        const hd = todo.complete ? '' : '(Keep working!!! (*￣3￣)╭)';
                        return (
                            <VerticalTimelineElement key={index} title={title} className={myClass} style={{fontFamily:'monospace'}}
                                    contentStyle={{background: 'rgb(6 31 50)', color: 'white' , height:'400px'}}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(6 31 50)' }}
                                    date={"Due at: " + todo.dateOf} id={String(todo.id)} icon={Icon}
                                    iconStyle={{ background: 'rgb(6 31 50)', color: '#fff' }}>
                                        <p style={{fontSize: "25px", fontWeight:"bold", textAlign:"center"}} onClick={()=>startUpdate(todo)}>
                                            Task: {todo.task}
                                        </p>
                                        <p class="faild">{faildDate}</p>
                                        <p style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>{hd}</p>
                                        <button onClick={handleClick} data-id={String(todo.id)}
                                        className={btnClass}>{btnTitle}</button>
                                        <button style={{marginLeft: "15px"}} data-id={String(todo.id)} 
                                        onClick={handleClickDelete} className={btnDelete}>Delete</button>
                                        <button style={{marginLeft: "15px"}} data-id={String(todo.id)} 
                                        onClick={()=>endUpdate(todo,index)} className={btnUpdate}>Update</button>
                                        <h5 className="vertical-timeline-element-title">{title}</h5>
                                </VerticalTimelineElement>
                        )
                    })
                }
                <VerticalTimelineElement icon={<StarIcon/>}
                    iconStyle={{ background: 'rgba(28 32 28 / 95%)', color: '#fff' }}>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
export default ToDoList;
