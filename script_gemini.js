document.getElementById('fetchPrice').addEventListener('click', () => {
    fetchGeminiPrice();
});

//암호화폐 거래소 
async function fetchGeminiPrice() {
    const url = 'https://api.gemini.com/v1/pubticker/btcusd';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        document.getElementById('result').innerText = `현재 BTC : $${data.last}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error fetching price: ' + error;
    }
}

document.getElementById('analyzeText').addEventListener('click', analyzeText);

async function analyzeText() {
    //const apiKey = 'YOUR_AI_GEMINI_API_KEY';  // 여기에 실제 AI Gemini API 키를 입력하세요.
    const apiUrl = 'https://api.aigemini.com/v1/analyze';  // 여기에 실제 AI Gemini API 엔드포인트를 입력하세요.
    const text = document.getElementById('inputText').value;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
}
