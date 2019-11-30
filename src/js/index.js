import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

const state = {};

const controlSearch = async () => {
  // 1. Get the query from the view
  const query = searchView.getInput();

  if (query) {
    // 2. New search object and add it to state
    state.search = new Search(query);
    await state.search.getResults();
    searchView.renderResults(state.search.result);
  }
  // 3. Prepare UI for the results
  // 4. Search for re
  // 5. Render results on UI
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
