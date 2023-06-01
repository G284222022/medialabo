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

let button2 = document.querySelector('#print');
button2.addEventListener('click', kensaku);



function kensaku(){
  let i = document.querySelector('input[name="target"]');
  let target = i.value;       // ユーザが記入した文字列
}

function searchs(){
  for (let n of id_list){
    sendRequest(n.id)
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
  // サーバから送られてきたデータを出力
  let data = resp.data;
  
  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  
  // data をコンソールに出力
  console.log(data);
  
  // data.x を出力
  console.log(data.x);
}
  
// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}	
  
// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

function result(data){
  let we = document.querySelector('h3#weather'); 
  let p = document.createElement("h3");   
  text = "都市名:" + data.name + "   最高気温:" + data.main.temp_max + "   最低気温:" + data.main.temp_min; 
  p.textContent = text;
  we.insertAdjacentElement("afterend", p);
}
