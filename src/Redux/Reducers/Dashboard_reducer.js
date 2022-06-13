import { Auth_types } from '../../Redux/Actiontypes/Auth_types';
import { Dashboard_types } from '../../Redux/Actiontypes/Dashboard_types';
const initialState = {
  UserDataRequests: [],
};

export default function DashboardReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  console.log("state_initialstate", state.UserDataRequests);
  switch (action.type) {
    case Dashboard_types.USER_DATA_REQUEST_SUCCESS: {

      return {
        ...state,
        UserDataRequests: action.data
      };
    }
    case Auth_types.POST_SUCCESS: {
      state.UserDataRequests.push(action.data)
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}