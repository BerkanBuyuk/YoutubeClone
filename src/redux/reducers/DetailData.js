
const detailReducer = (state = { getVideos: {} }, action) => {
  switch (action.type) {
    case "GET_VIDEO":
      return {
        ...state,
        getVideo: action.payload,
      };

    default:
      return state;
  }
};

export default detailReducer;
