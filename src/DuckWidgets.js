import Duck from "extensible-duck";

export default new Duck({
    namespace: 'my-app', store: 'widgets',
    initialState: {},
    types: ['LOAD', 'CREATE', 'UPDATE', 'REMOVE'],
    reducer: (state, action, duck) => {
        switch (action.type) {
            case duck.types.LOAD:
                return { ...state, load: true }
            default: return state
        }
    },
    creators: (duck) => ({
        loadWidgets: () => ({ type: duck.types.LOAD }),
        createWidget: widget => ({ type: duck.types.CREATE, widget }),
        updateWidget: widget => ({ type: duck.types.UPDATE, widget }),
        removeWidget: widget => ({ type: duck.types.REMOVE, widget })
    })
})