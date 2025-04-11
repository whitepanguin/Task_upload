// 랜덤 가위바위보 게임 만들기
// 사용자용 변수에 "가위, 바위, 보" 중 하나를 입력하면
// 컴퓨터는 Math.random()을 이용해서 하나를 랜덤 선택
// 둘을 비교해서 승/패/무 결과를 출력

const userHand = "가위";

const hand = ["가위", "바위", "보"];
const randomNum = Math.floor(Math.random() * hand.length); //0 ~ 3
const randomHand = hand[randomNum];
console.log(
  `가위! 바위! 보!, 컴퓨터의 선택: ${randomHand} vs 나의 선택: ${userHand}`
);
if (randomHand == "가위") {
  if (userHand == "가위") console.log("무");
  if (userHand == "바위") console.log("승");
  if (userHand == "보") console.log("패");
} else if (randomHand == "바위") {
  if (userHand == "가위") console.log("패");
  if (userHand == "바위") console.log("무");
  if (userHand == "보") console.log("승");
} else {
  if (userHand == "가위") console.log("승");
  if (userHand == "바위") console.log("패");
  if (userHand == "보") console.log("무");
}
