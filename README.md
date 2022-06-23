# Cors(Cross Origin Resource Sharing)

### Client 실행
```Typescript 
node ./src/clinet/client.js
```

### Server 실행
```Typescript 
node ./src/server/server.js
```

### 실행 방법
1. chrome에서 http://localhost:5052 실행. CORS 발생 
![발생 전](https://user-images.githubusercontent.com/71746295/175274859-fb5ad706-68ca-4382-9c65-622809aa6add.PNG)
2. 조치 방법으로 서버 응답 시, `res.header("Access-Control-Allow-Origin", "http://localhost:5502")` 추가
![조치 후](https://user-images.githubusercontent.com/71746295/175275093-b5ffaef8-eedb-4df8-899f-0370f3935d9d.PNG)

### 브라우저(Jvascript)가 SOP정책을 따르는 이유
기본적으로 자바 스크립트는 자신이 실행된 문서의 서버의 내용만 읽을 수 있다.
만약 다른 서버의 내용까지 읽을 수 있게된다면, 사용자의 키보드 입력을 가로채는 스크립트를 다른 페이지에 심을 수도 있을 것이다.  
이처럼 보안상의 이슈로 자바스크립트 엔진 표준 스펙에는 동일 출처 정책이 포함되게 되었다

### 참조 
[CORS](https://gnaseel.tistory.com/26)
