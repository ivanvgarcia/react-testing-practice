import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data
        .map(comment => comment.name)
        .slice(490);
      return [...state, ...comments];
    default:
      return state;
  }
}
