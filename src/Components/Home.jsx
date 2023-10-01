import React,{useState,useEffect} from "react";
const Task = ({title,description,deleteTask,index}) => {
  return(<div className="task">
  <div>
  <p>{title}</p>
    <span>{description}</span>
  </div>
  <button onClick={() => deleteTask(index)}>-</button>
  </div>);
}
const Home = () => {
  const initialArray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
const[tasks,setTask]= useState(initialArray);
const[title,setTitle]=useState("");
const [description,setDescription]=useState("");
const submitHandler=(e)=>{
  e.preventDefault();
  setTask([...tasks, {title,description}]);
  setTitle("");
  setDescription("");
};
const deleteTask=(index) => {
const filteredArr = tasks.filter((val,i) => {
  return i != index;
});
setTask(filteredArr);
};
useEffect(()=> {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (<div className="container">
  <h1> DAILY GOALS </h1>
  <form onSubmit={submitHandler}><input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
  <textarea placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
  <button type="submit">ADD</button>

  </form>
  {tasks.map((item, index) =>
  (
    <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
))}
</div>
);
};
export default Home;
