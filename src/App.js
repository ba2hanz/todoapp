import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import { MdDelete, MdDone, MdEdit } from "react-icons/md";

function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState('');
  const [newDescription,setNewDescription] = useState('');
  const [completedTodos,setCompletedTodos] = useState([]);
  const [currentEdit,setCurrentEdit] = useState(null);
  const [currentEditedItem,setCurrentEditedItem] = useState({});

  {/*Formdan gelen title ve description değerleriyle yeni bir todo nesnesi oluşturulur.*/}
  const handleAddTodo = () => {
    let newTodoItem = {
      title:newTitle,
      description:newDescription,
    };
    {/*Mevcut görev listesi kopyalanır ve yeni görev bu dizinin sonuna eklenir*/}
    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
  {/*Güncellenmiş görev listesi tarayıcının localStorageına kaydedilir.*/}
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr));
    setNewTitle('');
    setNewDescription('');
  };

  const handleDeleteTodo = (index) => {
    let reducedTodoArr = [...allTodos];
    reducedTodoArr.splice(index,1);

    setTodos(reducedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(reducedTodoArr));
  };
  const handleCompleteTodo = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let date = dd + '/' + mm + '/' + yyyy + ' ' + "at" + ' ' + h + ':' + m + ':' + s;

    let filteredItem = {
      ...allTodos[index],
      completed:date,
    }
    let updateCompletedTodoArr = [...completedTodos];
    updateCompletedTodoArr.push(filteredItem);
    setCompletedTodos(updateCompletedTodoArr);
    handleDeleteTodo(index);
    localStorage.setItem('completedTodos',JSON.stringify(updateCompletedTodoArr));
  }
  const handleDeleteCompletedTodo = (index) => {
    let reducedCompletedTodoArr = [...completedTodos];
    reducedCompletedTodoArr.splice(index,1);
    setCompletedTodos(reducedCompletedTodoArr);
    localStorage.setItem('completedTodos',JSON.stringify(reducedCompletedTodoArr));
  }
  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  }
  const handleUpdateTitle = (value) => {
    let updatedTodoArr = [...allTodos];
    updatedTodoArr[currentEdit].title = value;
    setTodos(updatedTodoArr);
  }
  const handleUpdateDescription = (value) => {
    let updatedTodoArr = [...allTodos];
    updatedTodoArr[currentEdit].description = value;
    setTodos(updatedTodoArr);
  }
  const handleUpdateTodo = (index) => {
    setCurrentEdit(null);
    setCurrentEditedItem({});
    localStorage.setItem('todolist',JSON.stringify(allTodos));
  }
  const handleCancelEdit = () => {
    setCurrentEdit(null);
    setCurrentEditedItem({});
  }

{/*Sayfa İlk Yüklendiğinde Kaydedilen Görevleri Geri Getirme*/}
  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if(savedTodo){
      setTodos(savedTodo);
    }
    if(savedCompletedTodo){
      setCompletedTodos(savedCompletedTodo);
    }
  },[]);
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div className="todo-wrapper">
      <div className="todo-input">
        <div className="todo-input-item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="What's the task title" />
        </div>
        <div className="todo-input-item">
            <label>Description</label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="What's the task description" />
        </div>
        <div className="todo-input-item">
            <button type="button" onClick={handleAddTodo} class="primaryBtn">Add</button>
        </div>
      </div>
        <div className="btn-area">
{/*Burada yapıldı veya yapılacak butonunun durumuna göre görev aktifse ve yapılmamaışsa ToDo yapılmışsa Completed butonu renkli olur. */}
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} 
          onClick={()=>setIsCompleteScreen(false)}>ToDo</button>

          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} 
          onClick={()=>setIsCompleteScreen(true)}>Completed</button>

        </div>
        <div className="todo-list" >
          {isCompleteScreen===false && allTodos.map((item,index)=>{
            if(currentEdit===index){
              return(
                <div className='edit-input' key={index}>

                  <input type='text' 
                  value={currentEditedItem.title} 
                  onChange={(e)=>handleUpdateTitle(e.target.value)}/>

                  <input type='text' 
                  value={currentEditedItem.description} 
                  onChange={(e)=>handleUpdateDescription(e.target.value)}/>

                  <button type='button' onClick={()=>handleUpdateTodo(index)}>Update</button>
                  <button type='button' onClick={handleCancelEdit}>Cancel</button>

                </div>
              );
            } else {
              return(
                <div className="todo-list-item" key={index}>
                  <div className='todo-list-text'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <MdDelete className='icon' 
                    onClick={()=>handleDeleteTodo(index)} 
                    title='Delete?'/>

                    <MdDone className='check-icon' 
                    onClick={()=>handleCompleteTodo(index)} 
                    title='Completed?'/>

                    <MdEdit className='edit-icon' 
                    onClick={()=>handleEdit(index, item)} 
                    title='Edit?'/>
                  </div>
                </div>
              );
            }
          })}

          {isCompleteScreen===true && completedTodos.map((item,index)=>{
            return(
             <div className="todo-list-item" key={index}>
              <div className='todo-list-text'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p><small>Completed on: {item.completed}</small></p>
              </div>
             <div>
              <MdDelete className='icon' 
              onClick={()=>handleDeleteCompletedTodo(index)} 
              title='Delete?'/>
        
             </div>
            </div>
            )
          })}
        </div>

      </div>
    </div>
  );
}

export default App;
