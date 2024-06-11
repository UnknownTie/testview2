// Firebase SDK 모듈을 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-functions.js";


const firebaseConfig = {
    apiKey: "AIzaSyCfmGQMExLcWn97vtECZqEO1MX_Rjemhzo",
    authDomain: "tesetfirebase.firebaseapp.com",
    projectId: "tesetfirebase",
    storageBucket: "tesetfirebase.appspot.com",
    messagingSenderId: "379651260846",
    appId: "1:379651260846:web:5c0247479c0fac9daf883f"
  };


// Firebase 초기화
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

window.sendRequest = function() {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '통신 중...';

    // Firebase Functions 호출
    const helloWorld = httpsCallable(functions, 'hello');
    helloWorld()
        .then((result) => {
            resultDiv.innerHTML = `
                <h2>통신 결과</h2>
                <pre>${JSON.stringify(result.data, null, 2)}</pre>
            `;
        })
        .catch((error) => {
            resultDiv.innerHTML = '통신 오류: ' + error.message;
        });
}
