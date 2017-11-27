const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; //사용할 포트

const server = http.createServer((req, res) => {
  res.statusCode = 200; //정상상태
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n'); //출력할 데이터
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); //ES6문법 `백쿼트
  //         ("Server running ad http://" + hostname + ":" + port);
});