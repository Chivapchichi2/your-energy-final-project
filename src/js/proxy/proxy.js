class ProxySingleton {
  constructor() {
    if (ProxySingleton.instance) {
      return ProxySingleton.instance;
    }
    ProxySingleton.instance = this;
  }
  DEFAULT_PAGE_NUMBER = 1;
  debounceDelay = 300;
  activeFilter = 'muscles';
  filterQuery = '';
  query = '';
  currentPage = 1;
  totalPages = 0;
}

const proxy = new ProxySingleton();

export default proxy;
