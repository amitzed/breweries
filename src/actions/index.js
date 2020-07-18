import openbrewery from '../apis/openbrewery';

export const fetchBreweries = () => async (dispatch) => {
    const response = await openbrewery.get('?per_page=50&by_type=micro&by_state=new_york&sort=+name');

    dispatch({
      type: 'FETCH_BREWERIES',
      payload: response.data
    });
  }
