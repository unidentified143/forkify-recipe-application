import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  _curPage;

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    this._curPage = this._data.page;

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //Page 1, and there are other pages
    if (this._curPage === 1 && numPages > 1) {
      return this._generateMarkupNext();
    }

    //Last page
    if (this._curPage === numPages && numPages > 1) {
      return this._generateMarkupPrevious();
    }

    //Other page
    if (this._curPage < numPages) {
      return this._generateMarkupPrevious() + this._generateMarkupNext();
    }

    //Page 1, and there are no other pages
    return '';
  }

  _generateMarkupPrevious() {
    return `
      <button data-goto="${
        this._curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._curPage - 1}</span>
      </button>
    `;
  }

  _generateMarkupNext() {
    return `
      <button data-goto="${
        this._curPage + 1
      }"  class="btn--inline pagination__btn--next">
        <span>Page ${this._curPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;
  }
}

export default new PaginationView();
