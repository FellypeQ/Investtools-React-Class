import Duck from "extensible-duck";

export default new Duck({
    namespace: 'my-app', store: 'adress',
    initialState: {
        obj: {
            fullAddress: "",
            number: "",
            complement: ""
        },
        outro: ""
    },
    types: ['UPDATE'],
    reducer: (state, { type, payload }, duck) => {
        switch (type) {
            case duck.types.UPDATE:
                //=>{  outro: "", obj: { ...state.obj, ...payload } }
                //=>{  outro: "", obj: { fullAddress: "", complement: "", ...payload } }
                //=>{  outro: "", obj: { fullAddress: "", complement: "", number: 15 } }
                return { ...state, obj: { ...state.obj, ...payload } }
            default: return state
        }
    },
    creators: (duck) => ({
        update: (field) => (dispatch, getState) => {
            return dispatch({ type: duck.types.UPDATE, payload: field })//field => { key: value } => { number: 15 }
        }
    })
})