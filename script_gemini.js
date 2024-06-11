document.getElementById('fetchPrice').addEventListener('click', () => {
    fetchGeminiPrice();
});

async function fetchGeminiPrice() {
    const url = 'https://api.gemini.com/v1/pubticker/btcusd';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        document.getElementById('price').innerText = `Current BTC Price: $${data.last}`;
    } catch (error) {
        document.getElementById('price').innerText = 'Error fetching price: ' + error;
    }
}