import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState(""); // Correctement déplacé à l'intérieur du composant

  function handleChange(e) {
    setName(e.target.value); // Met à jour l'état avec la valeur saisie
  }

  // function handleSubmit(event) {
//     event.preventDefault();
//     // alert("Hello, world!");
//     props.onSubmit("Say hello!");
    
  //   }
  

  function handleSubmit(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    props.addTask(name); // Appelle la fonction `addTask` passée via les props
    setName(""); // Réinitialise le champ après soumission
  }

  return (
    <form onSubmit={handleSubmit}>
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
        value={name} // Relie la valeur de l'input à l'état `name`
        onChange={handleChange} // Met à jour l'état lors de la saisie
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
