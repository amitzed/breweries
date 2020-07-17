import openbrewery from '../apis/openbrewery';

export const fetchBreweries = () => async (dispatch) => {
    const response = await openbrewery.get('/');

    dispatch({
      type: 'FETCH_BREWERIES',
      payload: response.data
    });
  }
