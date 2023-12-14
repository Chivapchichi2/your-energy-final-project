import axios from 'axios';

export class APIClient {
  #URL_EXERCISES = 'exercises';
  #URL_FILTERS = 'filters';
  #URL_QOUTE = 'quote';
  #URL_SUBSCRIPTION = 'subscription';
  #URL_RATING = 'rating';

  constructor() {
    axios.defaults.baseURL = 'https://your-energy.b.goit.study/api/';
  }

  async fetchFiltersOfExercises(filter = 'Muscles', page = 1, limit = 12) {
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
    filter = '',
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

  async postSubscription(email) {
    const params = { email };
    const response = await axios.post(`${this.#URL_SUBSCRIPTION}`, params);
    return response;
  }

  async patchExerciseRating(id, rate, email, review) {
    const params = {
      rate,
      email,
      review,
    };
    const response = await axios.patch(
      `${this.#URL_EXERCISES}/${id}/${this.#URL_RATING}`,
      params
    );
  }
}
