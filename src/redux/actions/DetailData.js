import axios from "axios";

const detailAction = (id) => async (dispatch) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {part: 'contentDetails,snippet,statistics', id: '7ghhRHRP6t4'},
        headers: {
          'X-RapidAPI-Key': 'Burada Api key var.',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      await axios.request(options).then(function (response) {
          dispatch({type: 'GET_VIDEO', payload: response.data})
      }).catch(function (error) {
          console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
};
export default detailAction;
