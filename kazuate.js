// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let yoso = 4;
  kaisu += 1;
  
  let result = document.querySelector('p#result'); 
  let p = document.createElement("p");   
  let spankaisu = document.querySelector('span#kaisu');
  let spananswer = document.querySelector("span#answer");    
  spankaisu.textContent = kaisu;
  spananswer.textContent = yoso;
  p.insertAdjacentElement("afterend", spankaisu);
  p.insertAdjacentElement("afterend", spananswer);

  let p2 = document.createElement("p"); 
  

  if (kaisu > 3) {
    p2.textContent = "答えは" + kotae +"でした．すでにゲームは終わっています";
    result.insertAdjacentElement("afterend", p2);
  }
  else if(kaisu == 3){
    p2.textContent = "まちがい. 残念でした答えは" + kotae + "です."
    result.insertAdjacentElement("afterend", p2);
  }
  else{
    if (yoso > kotae) {
      p2.textContent = "まちがい.答えはもっと小さいですよ";
      }
    
    else if(yoso < kotae) {
      p2.textContent = "まちがい.答えはもっと大きいですよ";
      }
    
    else{
      p2.textContent = "正解です.おめでとう!";
      }
  }
  result.insertAdjacentElement("afterend", p2);
}