class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(hanlder) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      hanlder();
    });
  }
}

export default new SearchView();
