import axios from 'axios';

export class APIClient {
  #URL_EXERCISES = 'exercises';
  #URL_FILTERS = 'filters';
  #URL_QOUTE = 'quote';

  constructor() {
    axios.defaults.baseURL = 'https://your-energy.b.goit.study/api/';
  }

  async fetchFiltersOfExercises(page = 1, filter = 'Muscles', limit = 12) {
    const params = new URLSearchParams({ filter, page, limit });

    const response = await axios.get(`${this.#URL_FILTERS}?${params}`);
    return response;
  }

  async fetchQuote() {
    const response = await axios.get(`${this.#URL_QOUTE}`);
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

    const response = await axios.get(`${this.#URL_EXERCISES}?${params}`);
    return response;
  }

  async fetchExerciseByID(id) {
    const response = await axios.get(`${this.#URL_EXERCISES}/${id}`);
    return response;
  }
}
