import * as actions from './action';

export default function (state = {}, action) {
  switch (action.type) {
    case actions.HOME_PAGE_SUCCESS:
      return {
        ...state,
        homePageResult: action.payload
      };
    default:
      return state;
  }
}
