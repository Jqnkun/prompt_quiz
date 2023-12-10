let maxinum = parseInt(prompt('数字を入力してください'));
while(!maxinum){
    maxinum = parseInt(prompt('エラーが起きました。有効な数字を入力してください。'))
}

const targetNum = Math.floor(Math.random() * maxinum) + 1;
// console.log(targetNum);

let guess = prompt('数字を当ててください。');
let count = 1;
while(parseInt(guess) !== targetNum){
    if (guess === 'q') break;
    count++;
    if(guess > targetNum){
        guess = parseInt(prompt('その数字より小さい。もう一度'));
    }else {
        guess = parseInt(prompt('その数字より大きい。もう一度'));
    }
}

if(guess === 'q'){
    console.log('終了');
} else {
    console.log(`${count}回で正解`);
}