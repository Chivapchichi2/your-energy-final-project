import { APIClient } from './apiClient';
import { Messages } from './messages';

class APIManager {
  constructor() {
    this.apiClient = new APIClient();
  }

  async getFiltersOfExercises(filter) {
    // EXAMPLE
    //apiManager.getFiltersOfExercises('Body part',)
    //pull - input query
    //bodypart - data-filterRequset of button

    try {
      const { data } = await this.apiClient.fetchFiltersOfExercises(filter);

      return data;
    } catch (error) {
      Messages.error(error.message);
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
    //apiManager.getExercisesByFilters('pull','bodypart','waist',)
    //pull - input query
    //bodypart - data-filterDetailedRequset of button
    //value of btn.filter__query  in filter.html
    try {
      const { data } = await this.apiClient.fetchExercisesByFilters(
        keyword,
        filterQuery,
        filter
      );
      return data;
    } catch (error) {
      Messages.error(error.message);
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
}

const apiManager = new APIManager();
export default apiManager;
