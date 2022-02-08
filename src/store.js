import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise"
import createLogger from "redux-logger"

import DuckWidgets from "./DuckWidgets"
import DuckProducts from "./DuckProducts"

const reducer = combineReducers({
    [DuckWidgets.store]: DuckWidgets.reducer,
    [DuckProducts.store]: DuckProducts.reducer
})

const middlewares = [thunk, promise, createLogger]

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddlewares(reducer)

store.dispatch(DuckWidgets.creators.loadWidgets())
