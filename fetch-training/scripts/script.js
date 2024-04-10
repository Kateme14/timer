'use strict'
function getTodos() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed');
          }
          return response.json();
        })
        .then(data => {
          resolve(data); 
        })
        .catch(error => {
          reject(error); 
        });
    });
  }
  
  function printTodos(todos) {
    const ul = document.getElementById('todos');
    ul.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = `ID: ${todo.id} - Title: ${todo.title}`;
      ul.appendChild(li);
    });
  }
  getTodos()
    .then(data => {
      printTodos(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });