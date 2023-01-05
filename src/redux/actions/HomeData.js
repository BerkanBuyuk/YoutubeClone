import axios from "axios";

const homeAction = (data) => async (dispatch) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            part: 'snippet', 
            maxResults: '50',
            q: data
        },
        headers: {
          'X-RapidAPI-Key': 'Burada api key var.',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      await axios.request(options).then(function (response) {
          dispatch({type: 'GET_VIDEOS', payload: response.data})
      }).catch(function (error) {
          console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
};
export default homeAction;
