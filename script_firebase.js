// Firebase SDK 모듈을 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-functions.js";

// Firebase 설정
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};


// Firebase 초기화
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

window.callSimpleFunction = function() {
    const resultDiv = document.getElementById('result');

    if (resultDiv) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '통신 중...';

        // Firebase Functions 호출
        const simpleFunction = httpsCallable(functions, 'simpleFunction');
        simpleFunction()
            .then((result) => {
                resultDiv.innerHTML = `
                    <h2>통신 결과</h2>
                    <pre>${JSON.stringify(result.data, null, 2)}</pre>
                `;
            })
            .catch((error) => {
                resultDiv.innerHTML = '통신 오류: ' + error.message;
                console.error("Error calling simpleFunction:", error);
            });
    } else {
        console.error('Element with ID "result" not found.');
    }
}

window.callFunctionWithVariable = function() {
    const resultDiv = document.getElementById('result');

    if (resultDiv) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = '통신 중...';

        // Firebase Functions 호출
        const functionWithVariable = httpsCallable(functions, 'functionWithVariable');
        functionWithVariable({ name: "Firebase User" })
            .then((result) => {
                resultDiv.innerHTML = `
                    <h2>통신 결과</h2>
                    <pre>${JSON.stringify(result.data, null, 2)}</pre>
                `;
            })
            .catch((error) => {
                resultDiv.innerHTML = '통신 오류: ' + error.message;
                console.error("Error calling functionWithVariable:", error);
            });
    } else {
        console.error('Element with ID "result" not found.');
    }
}
