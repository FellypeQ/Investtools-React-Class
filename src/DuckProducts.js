import Duck from "extensible-duck";
import DuckProducts from './DuckProducts'

export default new Duck({
    namespace: 'my-app', store: 'products',
    initialState: {
        list: [
            { name: "Rubber Duck", price: 35, quantity: 0 },
            { name: "Beach Towel", price: 12.5, quantity: 0 },
        ],
        total: 0
    },
    types: ['TOTAL', 'PRODUCTS', 'QUANTITY', 'REMOVE', 'ADD'],
    reducer: (state, { type, payload }, duck) => {
        switch (type) {
            case duck.types.TOTAL:
                return { ...state, total: payload }
            case duck.types.QUANTITY:
                const obj = { ...state.list[payload.index], quantity: payload.value }
                return {
                    ...state, list: state.list.map((e, i) => {
                        if (i === payload.index) {
                            return obj
                        }
                        return e
                    })
                }
            case duck.types.REMOVE:
                let list = [...state.list]
                list.splice(payload.index, 1)
                return { ...state, list }
            case duck.types.ADD:
                return { ...state, list: [...state.list, payload] }
            default: return state
        }
    },
    creators: (duck) => ({
        calcTotal: (newList) => (dispatch, getState) => {
            let list = getState()['products'].list

            let payload = 0

            if (newList) {
                payload = newList.reduce((acc, cv) => acc + cv.price * cv.quantity, 0)
            } else {
                payload = list.reduce((acc, cv) => acc + cv.price * cv.quantity, 0)
            }

            return dispatch({ type: duck.types.TOTAL, payload })
        },
        manipulate: (type, index, value) => (dispatch, getState) => {
            switch (type) {
                case "quantity":
                    dispatch({ type: duck.types.QUANTITY, payload: { index, value } })
                    break
                case "remove":
                    dispatch({ type: duck.types.REMOVE, payload: { index } })
                    dispatch(DuckProducts.creators.calcTotal())
                    break
                case "add":
                    dispatch({ type: duck.types.ADD, payload: value })
                    break
                default:
                    break;
            }
        }
    })
})