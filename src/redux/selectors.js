// const inputTextSelector = (state) => state.inputText;
// const listDataSelector = (state) => state.listData;
// export default { inputTextSelector, listDataSelector };

export const selectTodos = (store) => store.todoState.todos;
export const selectSearch = (store) => store.todoState.searchText;
export const selectSearchData = (store) => store.todoState.searchData;
export const selectFilter = (store) => store.filterState.filter;