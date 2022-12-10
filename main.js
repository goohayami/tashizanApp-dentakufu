// 要素取得 //
// okボタン
const btn = document.getElementById("btn");
// たしざん左の数字
const leftNum = document.querySelector(".num1");
// たしざん右の数字
const rightNum = document.querySelector(".num3");
// 答え
const ansContainer = document.querySelector(".num5");
// タイマーの初期化
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
  const k = Number(ansContainer.textContent);
  const ans = Number(leftNum.textContent) + Number(rightNum.textContent);
  console.log(k);
  console.log(ans);
  if (ans === k) {
    collect++;
    let msg = `正解数は ${collect}です`;
    document.querySelector(".count").textContent = msg;
    console.log(collect);
    ansContainer.textContent = "";
    ansArray.splice(0);
    aa();
  } else if (ans !== k) {
    ansContainer.textContent = "";
    ansArray.splice(0);
  }
};

// OKボタンクリックで判定 //
// btn.addEventListener("click", () => {
//   judge();
//   // trueなら実行で一回だけタイマーを起動
//   if (startTimer !== true) {
//     timer1 = setInterval(cntDown, 1000);
//     startTimer = true;
//   }
// });

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
    // text.disabled = true;
    // 背景変更
    document.body.style.backgroundColor = "#202020";
    // フォントカラー変更
    document.body.style.color = "red";
  }
  time.textContent = cnt;
}

// 電卓風　数字ボタン UI //

const again = document.getElementById("againeBtn");
const num1 = document.querySelector(".one-three");
const num2 = document.querySelector(".fuor-six");
const num3 = document.querySelector(".seven-nine");
const num4 = document.querySelector(".zero-ac");
const numArray1 = [1, 2, 3];
const numArray2 = [4, 5, 6];
const numArray3 = [7, 8, 9];
const numArray4 = [0, "AC"];

for (let i = 0; i < numArray1.length; i++) {
  const a = document.createElement("div");
  a.classList.add(numArray1[i]);
  a.classList.add("numbers");
  a.textContent = numArray1[i];
  num1.appendChild(a);
}

for (let i = 0; i < numArray2.length; i++) {
  const a = document.createElement("div");
  a.classList.add(numArray2[i]);
  a.classList.add("numbers");
  a.textContent = numArray2[i];
  num2.appendChild(a);
}

for (let i = 0; i < numArray3.length; i++) {
  const a = document.createElement("div");
  a.classList.add(numArray3[i]);
  a.classList.add("numbers");
  a.textContent = numArray3[i];
  num3.appendChild(a);
}

// 0のボタン作成
const zeroNum = () => {
  const a = document.createElement("div");
  a.textContent = 0;
  a.classList.add("numbers");
  a.classList.add("0");
  num4.appendChild(a);
};
zeroNum();

// ACのボタン作成
const zeroAc = () => {
  const a = document.createElement("div");
  a.textContent = "ENTER/AC";
  a.classList.add("ac");
  num4.appendChild(a);
};
zeroAc();

// クリックイベント //
ansArray = [];
document.querySelector(".num-container").addEventListener("click", (e) => {
  // ACボタンを押した時の処理
  if (e.target.textContent === "ENTER/AC") {
    judge();
    // trueなら実行で一回だけタイマーを起動
    if (startTimer !== true) {
      timer1 = setInterval(cntDown, 1000);
      startTimer = true;
    }
    // ansArray.splice(0);
    // ansContainer.textContent = "";
    // それ以外なら
  } else {
    const et = e.target.textContent;
    ansArray.push(e.target.textContent);
    const joinNum = ansArray.join("");
    ansContainer.textContent = joinNum;
  }
});
