
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();
/* const tarea = new Todo('Aprender JavaScript!!');

todoList.nuevoTodo(tarea);


console.log(todoList);

crearTodoHtml(tarea);


localStorage.setItem('mi-key','ABCD123');
sessionStorage.setItem('mi-key','ABCD123');
 */
/* setTimeout( () => {
    localStorage.removeItem('mi-key')
}, 1500);

 */
// Los tengo todos, falta reconstruirlos en el HTML
//  console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));

const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
todoList.todos[0].imprimirClase();
//newTodo.imprimirClase();

console.log('todo ', todoList.todos);