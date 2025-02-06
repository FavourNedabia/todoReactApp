// import "./App.css";
// import Form from "./components/Form";
// import FilterButton from "./components/FilterButton";
// import Todo from "./components/Todo";
// import React, { useState } from "react";
// import { nanoid } from "nanoid";



// function App(props) { 
//   const [isEditing, setEditing] = useState(false);
//   const [tasks, setTasks] = useState(props.tasks);
//   const [filter, setFilter] = useState("All");
//   const FILTER_MAP = {
//     All: () => true,
//     Active: (task) => !task.completed,
//     Completed: (task) => task.completed,
//   };  

//   const FILTER_NAMES = Object.keys(FILTER_MAP);
//   const filterList = FILTER_NAMES.map((name) => (
//     <FilterButton
//       key={name}
//       name={name}
//       isPressed={name === filter}
//       setFilter={setFilter}
//     />
//   ));
  
//   // const taskList = props.tasks?.map((task) => (
//   const taskList = tasks
//     .filter(FILTER_MAP[filter])
//     .map((task) => (
//       <Todo
//         id={task.id}
//         name={task.name}
//         completed={task.completed}
//         key={task.id}
//         toggleTaskCompleted={toggleTaskCompleted}
//         deleteTask={deleteTask}
//         editTask={editTask}
//       />
//   ));

//   const tasksWord = tasks.length === 1? "taches restatntes" : "taches restatnates";
//   const headingText = `${tasks.length} ${tasksWord}`;
  
//   function toogleTaskCompleted(id){
//     console.log(task[0]);
//     const updatedTasks = tasks.map((task) => {
//       //si cette tache posse le meme identifiant que la tache dedié
//       if(task.id === id){
//         //on utilise la decomposition objet afin de contruire un nouvel objet
//         //propieté 'complet' est l'inverse
//         return {...task, completed:!task.completed};
//       }
//       return task; 
//     });
//     setTasks(updatedTasks);   
//   }

//   function deleteTask(id){
//     console.log(id);
//     const remainingTasks = tasks.filter(task => id !== task.id);
//     setTasks(remainingTasks);
//   }

//   function editTask(id, newName){
//     const editedTaskList = tasks.map((task) => {
//       if(id === task.id){
//         return {...task, name: newName};
//       }
//       return task;
//     });
//     setTasks(editedTaskList);
//   }



//   return (
//     <div className="todoapp stack-large">
//       <title><h1>TodoMatic</h1></title>
//       <form>
//         <h2 className="label-wrapper">
//           <label htmlFor="new-todo-input" className="label__lg">
//             What needs to be done?
//           </label>
//         </h2>
//         <input
//           type="text"
//           id="new-todo-input"
//           className="input input__lg"
//           name="text"
//           autoComplete="off"
//         />
//         <button type="submit" className="btn btn__primary btn__lg">
//           Add
//         </button>
//       </form>
//       <div className="filters btn-group stack-exception">
//         <button type="button" className="btn toggle-btn" aria-pressed="true">
//           <span className="visually-hidden">Show </span>
//           <span>all</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Active</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//         <button type="button" className="btn toggle-btn" aria-pressed="false">
//           <span className="visually-hidden">Show </span>
//           <span>Completed</span>
//           <span className="visually-hidden"> tasks</span>
//         </button>
//       </div>
//       <h2 id="list-heading">{headingText}</h2>
//       {/* <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading">
//         <li className="todo stack-small">
//           <div className="c-cb">
//             <input id="todo-0" type="checkbox" defaultChecked />
//             <label className="todo-label" htmlFor="todo-0">
//               Eat
//             </label>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn">
//               Edit <span className="visually-hidden">Eat</span>
//             </button>
//             <button type="button" className="btn btn__danger">
//               Delete <span className="visually-hidden">Eat</span>
//             </button>
//           </div>
//         </li>
//         <li className="todo stack-small">
//           <div className="c-cb">
//             <input id="todo-1" type="checkbox" />
//             <label className="todo-label" htmlFor="todo-1">
//               Sleep
//             </label>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn">
//               Edit <span className="visually-hidden">Sleep</span>
//             </button>
//             <button type="button" className="btn btn__danger">
//               Delete <span className="visually-hidden">Sleep</span>
//             </button>
//           </div>
//         </li>
//         <li className="todo stack-small">
//           <div className="c-cb">
//             <input id="todo-2" type="checkbox" />
//             <label className="todo-label" htmlFor="todo-2">
//               Repeat
//             </label>
//           </div>
//           <div className="btn-group">
//             <button type="button" className="btn">
//               Edit <span className="visually-hidden">Repeat</span>
//             </button>
//             <button type="button" className="btn btn__danger">
//               Delete <span className="visually-hidden">Repeat</span>
//             </button>
//           </div>
//         </li>
//       </ul> */}
//       {/* <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading">
//         <Todo name="Eat" id="todo-0" completed />
//         <Todo name="Sleep" id="todo-1" />
//         <Todo name="Repeat" id="todo-2" />
//       </ul> */}
//       <ul
//         role="list"
//         className="todo-list stack-large stack-exception"
//         aria-labelledby="list-heading">
//         {taskList}
//       </ul>

//     </div>
//   );

//   function addTask(name) {
//     alert(name);
//     const newTask = { id: `todo-${nanoid()}`, name, completed: false };
//     setTasks([...tasks, newTask]);
//   }
  
// }

// export default App;


import "./App.css";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [isEditing, setEditing] = useState(false);
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
  
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);
  
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const tasksWord =
    tasks.length === 1 ? "tâche restante" : "tâches restantes"; // Correction de l'orthographe et du pluriel
  const headingText = `${tasks.length} ${tasksWord}`;

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // Si cette tâche possède le même identifiant que celui spécifié
      if (task.id === id) {
        // Utilisation de la décomposition d'objet pour créer un nouvel objet
        // La propriété 'completed' est inversée
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function addTask(name) {
    alert(name);
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <title>
        <h1>TodoMatic</h1>
      </title>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
      {/* <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul> */}
      {/* <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <Todo name="Eat" id="todo-0" completed />
        <Todo name="Sleep" id="todo-1" />
        <Todo name="Repeat" id="todo-2" />
      </ul> */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
