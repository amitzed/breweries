import openbrewery from '../apis/openbrewery';

export const fetchBreweries = async () => {
  const response = await openbrewery.get('/');

  return {
    type: 'FETCH_BREWERIES',
    payload: response
  }
};
