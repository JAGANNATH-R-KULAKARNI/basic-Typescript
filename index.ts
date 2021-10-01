import axios from 'axios';

const url='https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id : number,
  title : String,
  completed : boolean
}   //using this we can prevent spelling error(simple nasty error)
 
axios.get(url).then((u)=>{
  const todo=u.data as Todo;
  const id=todo.id;
  const title=todo.title;
  const completed=todo.completed;

  logOutput(id,title,completed);
})
.catch((err)=>{
  console.log(err);
});

const logOutput = (id,title,completed) =>{
  console.log(`
     id : ${id},
     title : ${title},
     completed : ${completed}

     Okay
  `);
}