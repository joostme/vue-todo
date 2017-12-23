export const ActionType = {
    Add_Todo: 'ADD_TODO',
    Toggle_Todo: 'TOGGLE_TODO',
    Load_Todos: 'LOAD_TODOS',
    Select_Todo: 'SELECT_TODO'
}

export const MutationType = {
    Todos_Loaded: 'TODOS_LOADED',
    Add_Todo: 'ADD_TODO',
    Toggle_Todo: 'TOGGLE_TODO',
    Select_Todo: 'SELECT_TODO'
}

export const GetterType = {
    GetOpenTodos: 'getOpenTodos',
    GetDoneTodos: 'getDoneTodos',
    GetSelectedTodo: 'getSelectedTodo'
}

export default {
    ActionType,
    MutationType,
    GetterType
}