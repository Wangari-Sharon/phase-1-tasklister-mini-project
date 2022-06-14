document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e)=> { 
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
    form.reset()
  })
});

function buildToDo(todo){
  let p = document.createElement('p') 
  let btn = document.createElement('button')
  let date = document.createElement('date')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x' 
  date.textContent = `${date} `
  p.textContent = `${todo} ` 
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

// Deletes tasks
function handleDelete(e){
e.target.parentNode.remove()
}