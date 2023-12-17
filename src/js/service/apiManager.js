import { APIClient } from './apiClient';
import { Messages } from './messages';
import proxy from '../proxy/proxy.js';
import { Loader } from './loader.js';

class APIManager {
  constructor() {
    this.apiClient = new APIClient();
    this.page = proxy.DEFAULT_PAGE_NUMBER;
  }

  async getFiltersOfExercises(filter) {
    // EXAMPLE
    //apiManager.getFiltersOfExercises('Body part',)
    //pull - input query
    //bodypart - data-filterRequset of button

    Loader.show();
    try {
      const { data } = await this.apiClient.fetchFiltersOfExercises(
        filter,
        this.page
      );

      return data;
    } catch (error) {
      Messages.error(error.message);
    } finally {
      Loader.hide();
    }
  }

  async getQuote() {
    try {
      const { data } = await this.apiClient.fetchQuote();
      return data;
    } catch (error) {
      Messages.error(error.message);
    }
  }

  async getExercisesByFilters(keyword, filterQuery, filter) {
    // EXAMPLE
    //apiManager.getExercisesByFilters('pull','waist','bodypart')
    //pull - input query
    //bodypart - data-filterDetailedRequset of button
    //value of btn.filter__query  in filter.html
    Loader.show();
    try {
      const { data } = await this.apiClient.fetchExercisesByFilters(
        keyword,
        filterQuery,
        filter,
        this.page
      );
      return data;
    } catch (error) {
      Messages.error(error.message);
    } finally {
      Loader.hide();
    }
  }

  async getExercisesByID(id) {
    const formatedID = id.toString();
    try {
      const { data } = await this.apiClient.fetchExerciseByID(formatedID);
      return data;
    } catch (error) {
      Messages.error(error.message);
    }
  }

  async subscribe(email) {
    try {
      const { data } = await this.apiClient.postSubscription(email);
      Messages.success(data.message);
    } catch (error) {
      Messages.error(error.message);
    }
  }

  async sendRating(data) {
    try {
      const response = await this.apiClient.patchExerciseRating(data);
      return response;
    } catch (error) {
      Messages.error(error.message);
    }
  }

  patchExerciseRating;

  incrementPage() {
    this.page += 1;
  }

  updatePage() {
    this.page = proxy.currentPage;
  }

  decrementPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = proxy.DEFAULT_PAGE_NUMBER;
  }

  set setCurrentPage(pageValue) {
    this.page = Number(pageValue);
  }
}

const apiManager = new APIManager();
export default apiManager;
