let id_list = [
  {city:"カイロ",        id:360630},
  {city:"モスクワ",       id:524901},
  {city:"ヨハネスブルク",  id:993800},
  {city:"北京",  id:1816670},
  {city:"東京",  id:1850147},
  {city:"シンガポール",  id:1880252},
  {city:"シドニー",  id:2147714},
  {city:"ロンドン",  id:2643743},
  {city:"パリ",  id:2968815},
  {city:"リオデジャネイロ",  id:3451189},
  {city:"ニューヨーク",  id:5128581},
  {city:"ロサンゼルス",  id:5368361}
]

////////// 課題3-2 ここからプログラムを書こう
let button1 = document.querySelector('#search');
button1.addEventListener('click', searchs);

let button2 = document.querySelector('#filter');
button2.addEventListener('click', checkers)

let checkbox0 = document.getElementById('kairo');
let checkbox1 = document.getElementById('mosukuwa');
let checkbox2 = document.getElementById('yohane');
let checkbox3 = document.getElementById('pekin');
let checkbox4 = document.getElementById('Tokyo');
let checkbox5 = document.getElementById('Singa');
let checkbox6 = document.getElementById('Sydney');
let checkbox7 = document.getElementById('ron');
let checkbox8 = document.getElementById('pari');
let checkbox9 = document.getElementById('rio');
let checkbox10 = document.getElementById('new');
let checkbox11 = document.getElementById('ros');


function searchs(){
  h3reset();
  for (let n of id_list){
    sendRequest(n.id)
  }
}

function checkers(){
  let checkboxlist = [
    checkbox0, checkbox1, checkbox2, checkbox3,checkbox4,  checkbox5,
    checkbox6, checkbox7, checkbox8, checkbox9, checkbox10, checkbox11
  ];
  h3reset();
  let n  = 0;
  for (i of checkboxlist){
    if (i.checked){
      sendRequest(id_list[n].id)
    }
    n += 1
  }
}

function h3reset(){
  let div = document.querySelectorAll('div#weather > h3');
  for (n of div){
    n.remove()
  }
}

function sendRequest(id) {
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';
  
  // 通信開始
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
  }

function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  result(data);
}
  
// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}	
  
// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

function result(datas){
  let div = document.querySelector('div#weather');
  let p = document.createElement("h3");   
  text = "都市名:" + datas.name + "   最高気温:" + datas.main.temp_max + "   最低気温:" + datas.main.temp_min; 
  p.textContent = text;
  div.insertAdjacentElement("beforeend", p);
}


