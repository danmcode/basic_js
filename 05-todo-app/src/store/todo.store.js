import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
};

const state = {
    todos: [
        new Todo('Piedra del Infinito'),
        new Todo('Piedra del Alma'),
        new Todo('Piedra del Tiempo'),
    ]
};

const initStore = () =>{
    console.log(state)
    console.log('InitStore 🥑')
};

export default {
    initStore,
}