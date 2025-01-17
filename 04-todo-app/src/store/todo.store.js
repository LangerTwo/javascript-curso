import { Todo } from "../todos/models/todo.model";

export const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del espacio'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del poder'),
        new Todo('Piedra del realidad'),
    ],
    filter: Filter.All,
}

const initStore = () => {
    loadStore();
    console.log('InitStore 🥑')
}

const loadStore = () => {
    if ( !localStorage.getItem('state') ) return;
    const { todos = [], filter = Filter.All } = JSON.parse( localStorage.getItem('state') );
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

const getTodos = ( filter = Filter.All ) => {
    switch (filter) {
        case Filter.All:
            return [...state.todos];
        
        case Filter.Completed:
            return state.todos.filter( todo => todo.done );
        
        case Filter.Pending:
            return state.todos.filter( todo => !todo.done );
        
        default:
            throw new Error(`Option ${ filter } is not valid`)
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if( !description ) throw new Error('Description is required')
    state.todos.push( new Todo(description) );
    saveStateToLocalStorage();
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done );
    saveStateToLocalStorage();
}

/**
 * 
 * @param {Filter} newFilter 
 */
const setFilter = ( newFilter = Filter.All ) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
};