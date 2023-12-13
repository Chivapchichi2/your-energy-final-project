import axios from 'axios';

class APIClient {
  #BASE_URL = 'https://your-energy.b.goit.study/api/';
  #URL_EXERCISES = 'exercises';
  #URL_FILTERS = 'filters';
  #URL_QOUTE = 'quote';

  async fetchFiltersOfExercises(filter = 'Muscles', page = 1, limit = 12) {
    const params = new URLSearchParams({ filter, page, limit });

    const response = await axios.get(
      `${this.#BASE_URL}${this.#URL_FILTERS}?${params}`
    );
    return response;
  }

  async fetchQuote() {
    const response = await axios.get(`${this.#BASE_URL}${this.#URL_QOUTE}`);
    return response;
  }

  async fetchExercisesByFilters(
    keyword = '',
    filterQuery = '',
    filter = 'Muscles',
    page = 1,
    limit = 10
  ) {
    const params = new URLSearchParams({
      [filter]: filterQuery,
      keyword,
      page,
      limit,
    });

    const response = await axios.get(
      `${this.#BASE_URL}${this.#URL_EXERCISES}?${params}`
    );
    return response;
  }

  async fetchExerciseByID(id) {
    const response = await axios.get(
      `${this.#BASE_URL}${this.#URL_EXERCISES}/${id}`
    );
    return response;
  }
}

const apiClient = new APIClient();

export default apiClient;
