//mbti 검사해주는 서버 만들기
// 1. 서버 모듈 가져오기
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { response } = require('express');
const { request } = require('http');
const { resolve } = require('path');
const { rejects } = require('assert');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');
const { json } = require('body-parser');
const { resolveSoa } = require('dns');

// 2. 서버 설정
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3. 서버 라우팅
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/mbti', (req, res) => {
    
