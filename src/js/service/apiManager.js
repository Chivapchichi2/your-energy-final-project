import apiClient from './apiClient';

class APIManager {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getFiltersOfExercises(filter) {
    try {
      const { data } = await this.apiClient.fetchFiltersOfExercises(filter);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getQuote() {
    try {
      const { data } = await this.apiClient.fetchQuote();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getExercisesByFilters(keyword, filter) {
    try {
      const { data } = await this.apiClient.fetchExercisesByFilters(
        filter,
        keyword
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getExercisesByID(id) {
    const formatedID = id.toString();

    try {
      const { data } = await this.apiClient.fetchExerciseByID(formatedID);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

const apiManager = new APIManager(apiClient);
export default apiManager;
