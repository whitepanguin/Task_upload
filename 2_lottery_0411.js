// 로또 번호 생성기
// 1 ~ 45까지 숫자 중 중복 없이 6개를 추출
// 작은 수를 앞으로 정렬(오름차순)

const basket = Array(6);
let i = 0;
console.log(basket);
for (let ball = 0; ball < basket.length; ball++) {
  const randomBall = Math.floor(Math.random() * 45) + 1;
  while (i < ball) {
    if (basket[i] == randomBall) {
      console.log("중복 발생");
      ball--;
    }
    i++;
  }
  basket[ball] = randomBall;
  console.log(basket);
}
const arrang = basket.sort();
console.log(`당신의 행운 번호는: ${arrang}`);
