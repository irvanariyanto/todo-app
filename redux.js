const redux = require('redux')
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 17
}

// Membuat reducer (Fungsi yang bisa mengupdate value di store)
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_AGE':
            return {
                ...state,
                age: state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: action.newValue
            }
        default:
            return state
    }
}

// Membuat Store (Wadah)
const store = createStore(rootReducer);
console.log(store.getState())

// Subscription
store.subscribe(() => {
    console.log('store change', store.getState())
})

// Membuat Dispatching Action
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState())

