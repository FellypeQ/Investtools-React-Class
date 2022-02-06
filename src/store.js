import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import promise from "redux-promise"
import createLogger from "redux-logger"

import DuckProduct from "./DuckProduct"

const reducer = combineReducers({ [DuckProduct.store]: DuckProduct.reducer })

const middlewares = [thunk, promise, createLogger]

const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddlewares(reducer)

store.dispatch(DuckProduct.creators.loadWidgets())
