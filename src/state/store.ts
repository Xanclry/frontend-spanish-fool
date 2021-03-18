import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    // counter: counterReducer
    // The key names in the object will define the keys in our final state value.
    // When we pass in an object like {counter: counterReducer},
    // that says that we want to have a state.counter section of our Redux state object,
    // and that we want the counterReducer function to be in charge of
    // deciding if and how to update the state.counter section whenever an action is dispatched.
  },
})

// const rootReducer = combineReducers({
//   users: usersReducer,
//   posts: postsReducer,
//   comments: commentsReducer
// })

// const store = configureStore({
//   reducer: rootReducer
// })

//
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );
