// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu += 1;

  let i = document.querySelector('input[name="yoso"]');
  let yoso = i.value;       // ユーザが記入した文字列

  let result = document.querySelector('p#result'); 
  let p = document.createElement("p");   
  let spankaisu = document.querySelector('span#kaisu');
  let spananswer = document.querySelector("span#answer");    
  spankaisu.textContent = kaisu;
  spananswer.textContent = yoso;

  if (kaisu > 3) {
    result.textContent = "答えは" + kotae +"でした．すでにゲームは終わっています";
  }
  else if(kaisu == 4){
    result.textContent = "まちがい. 残念でした答えは" + kotae + "です."
  }
  else{
    if (yoso > kotae) {
      result.textContent = "まちがい.答えはもっと小さいですよ";
      }
    
    else if(yoso < kotae) {
      result.textContent = "まちがい.答えはもっと大きいですよ";
      }
    
    else{
      result.textContent = "正解です.おめでとう!";
      }
  }

}