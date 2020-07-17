import openbrewery from '../apis/openbrewery';

export const fetchBreweries = () => {
  return {
    type: 'FETCH_BREWERIES'
  }
};
