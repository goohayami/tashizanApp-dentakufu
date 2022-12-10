// 要素取得 //
const btn = document.getElementById("btn");
const text = document.querySelector(".input");
const leftNum = document.querySelector(".num1");
const rightNum = document.querySelector(".num3");
const time = document.getElementById("timer");
let collect = 0;

// タイマー起動するための設定 ///
let startTimer;

// 問題設置の処理 //
const aa = () => {
  const makeRandomLeft = Math.floor(Math.random() * 20);
  const makeRandomRight = Math.floor(Math.random() * 20);
  leftNum.textContent = makeRandomLeft;
  rightNum.textContent = makeRandomRight;
};
aa();

// 正誤判定処理 //
const judge = () => {
  const ans = Number(leftNum.textContent) + Number(rightNum.textContent);
  if (Number(text.value) === ans) {
    collect++;
    let msg = `正解数は ${collect}です`;
    document.querySelector(".count").textContent = msg;
    console.log(collect);
    text.value = "";
    aa();
  } else if (Number(text.value) !== ans) {
    // alert("残念もういちど");
    text.value = "";
  }
};

// ボタンクリックで判定 //
btn.addEventListener("click", () => {
  judge();
  // trueなら実行で一回だけタイマーを起動
  if (startTimer !== true) {
    timer1 = setInterval(cntDown, 1000);
    startTimer = true;
  }
});

// エンターキーで判定 //
window.document.onkeydown = function (event) {
  if (event.key === "Enter") {
    judge();
    // trueなら実行で一回だけタイマーを起動
    if (startTimer !== true) {
      timer1 = setInterval(cntDown, 1000);
      startTimer = true;
    }
  }
};

// ここからタイマー設定 //
const startBtn = document.getElementById("start");
const startTime = document.querySelector(".start");

let timer1 = null;
let cnt = 11;

function cntDown() {
  cnt--;
  if (cnt < 0 && timer1 != null) {
    clearInterval(timer1);
    // カウントが0になった時の処理
  } else if (cnt === 0) {
    clearInterval(timer1);
    startTime.textContent = "おわりだよ";
    // インプットテキストボックス無効
    text.disabled = true;
    // 背景変更
    document.body.style.backgroundColor = "#202020";
    // フォントカラー変更
    document.body.style.color = "red";
  }
  time.textContent = cnt;
}
