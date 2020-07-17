import openbrewery from '../apis/openbrewery';

export const fetchBreweries = () => {
  return async (dispatch) => {
    const response = await openbrewery.get('/');

    dispatch({
      type: 'FETCH_BREWERIES',
      payload: response
    });
  }
};
