import apiManager from '../service/apiManager';

export function loadQuote() {
  const storedQuote = localStorage.getItem('dailyQuote');
  const storedDate = localStorage.getItem('quoteDate');
  const today = new Date().toDateString();

  if (storedQuote && storedDate === today) {
    try {
      const quoteData = JSON.parse(storedQuote);
      displayQuote(quoteData);
    } catch (error) {
      console.error('Error parsing stored quote:', error);
      fetchQuote();
    }
  } else {
    fetchQuote();
  }
}

function fetchQuote() {
  apiManager
    .getQuote()
    .then(data => {
      saveAndDisplayQuote(data);
    })
    .catch(error => console.error('Error fetching quote:', error));
}

function saveAndDisplayQuote(quoteData) {
  const today = new Date().toDateString();
  localStorage.setItem('dailyQuote', JSON.stringify(quoteData));
  localStorage.setItem('quoteDate', today);
  displayQuote(quoteData);
}

function displayQuote(quoteData) {
  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.name-text');

  quoteTextElement.textContent = quoteData.quote;
  quoteAuthorElement.textContent = quoteData.author;
}

loadQuote();
