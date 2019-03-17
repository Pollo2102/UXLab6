import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [{id: 1, description: 'Indigo'}, 
          {id: 2, description: 'Prince'}, 
          {id: 3, description: 'Cardigan'}, 
          {id: 4, description: 'Missile'}, 
          {id: 5, description: 'Scorpion'}, 
          {id: 6, description: 'Cricket'}, 
          {id: 7, description: 'Parachute'}, 
          {id: 8, description: 'Paradise'}, 
          {id: 9, description: 'Parmesan'}, 
          {id: 10, description: 'Silicon'}]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;