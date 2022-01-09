## 🎁 쇼핑몰 프로젝트 Backend Server

#### 프로젝트 설명

-   REST API를 이용한 쇼핑몰 연습을 위해 제작한 Node.js Backend Server
-   node.js를 이용하여 기본적인 server 설계부터 mysql을 이용하여 데이터 CURD 연습을 위해 제작
-   bcrypt를 이용한 암호화 기능 구현

##### 사용 언어

-   node.js, express, mysql

---

### 구현한 기능

##### [ 기본 서버 설정 ]

1.  package.json 파일 생성

        - 프로젝트 구현을 위한 기본 설정
            - npm init을 이용하여 생성
        - 프로젝트에 사용될 라이브러리 설치
            - devTool : nodemon
            - bcrypt, cookie-parser, cors, dotenv, express, express-session, morgan, mysql2
        - 설치한 라이브러리를 이용하여 서버 구현
            - package.json에 있는 scripts 부분에 "start": "nodemon app.js" 입력 후 저장
            - app.js 파일 생성후 express를 이용하여 서버 실행
            ```javascript
            const express = require('express');
            const cors = require('cors');
            const router = require('./router');
            const authRouter = require('./router/auth');

            const app = express();

            app.use(express.urlencoded({ extended: false }));
            app.use(express.json());
            app.use(cors());

            app.use('/', router);
            app.use('/auth', authRouter);

            app.listen(3001, () => {
            console.log('Listening on 3001');
            });

        ```

1.  로그인 및 회원가입
    [ ] 로그인
    [ x ] 회원가입
