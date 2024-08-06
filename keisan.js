function generateMathQuestion(grade) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let question, answer;

    switch (grade) {
        case 1:
            // 小学1年生: 100までの足し算と引き算
            let a1 = getRandomInt(0, 100);
            let b1 = getRandomInt(0, 100 - a1); // マイナスにならないように
            let operator1 = Math.random() < 0.5 ? '+' : '-';
            question = `${a1} ${operator1} ${operator1 === '+' ? b1 : a1 - b1}`;
            answer = operator1 === '+' ? a1 + b1 : a1 - (a1 - b1);
            break;
        case 2:
            // 小学2年生: 1000までの足し算と引き算、簡単な掛け算
            let a2 = getRandomInt(0, 1000);
            let b2 = getRandomInt(0, 1000 - a2);
            let operator2 = Math.random() < 0.5 ? '+' : '-';
            if (Math.random() < 0.5) {
                operator2 = '*';
                b2 = getRandomInt(0, 10);
            }
            question = `${a2} ${operator2} ${b2}`;
            answer = operator2 === '+' ? a2 + b2 : operator2 === '-' ? a2 - b2 : a2 * b2;
            break;
        case 3:
            // 小学3年生: 1000までの掛け算と割り算
            let a3 = getRandomInt(0, 1000);
            let b3 = getRandomInt(1, 10);
            let operator3 = Math.random() < 0.5 ? '*' : '/';
            question = `${a3} ${operator3} ${b3}`;
            answer = operator3 === '*' ? a3 * b3 : (a3 / b3).toFixed(2);
            break;
        case 4:
            // 小学4年生: 小数、分数を含む計算
            let a4 = getRandomInt(0, 100);
            let b4 = getRandomInt(1, 100);
            let operator4 = Math.random() < 0.5 ? '+' : '-';
            question = `${a4}.${getRandomInt(0, 9)} ${operator4} ${b4}.${getRandomInt(0, 9)}`;
            answer = operator4 === '+' ? (parseFloat(question.split(" ")[0]) + parseFloat(question.split(" ")[2])).toFixed(2)
                    : (parseFloat(question.split(" ")[0]) - parseFloat(question.split(" ")[2])).toFixed(2);
            break;
        case 5:
            // 小学5年生: 分数の足し算と引き算
            let numerator5_1 = getRandomInt(1, 10);
            let denominator5_1 = getRandomInt(1, 10);
            let numerator5_2 = getRandomInt(1, 10);
            let denominator5_2 = getRandomInt(1, 10);
            let operator5 = Math.random() < 0.5 ? '+' : '-';
            question = `${numerator5_1}/${denominator5_1} ${operator5} ${numerator5_2}/${denominator5_2}`;
            answer = operator5 === '+' ? 
                (numerator5_1 * denominator5_2 + numerator5_2 * denominator5_1) + "/" + (denominator5_1 * denominator5_2) : 
                (numerator5_1 * denominator5_2 - numerator5_2 * denominator5_1) + "/" + (denominator5_1 * denominator5_2);
            break;
        case 6:
            // 小学6年生: 小数、分数の計算
            let a6 = getRandomInt(1, 100);
            let b6 = getRandomInt(1, 100);
            question = `${a6}.${getRandomInt(0, 9)} * ${b6}.${getRandomInt(0, 9)}`;
            answer = (parseFloat(question.split(" ")[0]) * parseFloat(question.split(" ")[2])).toFixed(2);
            break;
        case 7:
            // 中学1年生: 基本的な方程式
            let a7 = getRandomInt(1, 10);
            let b7 = getRandomInt(1, 10);
            question = `${a7}x + ${b7} = 0`;
            answer = `x = ${(-b7 / a7).toFixed(2)}`;
            break;
        case 8:
            // 中学2年生: 二次方程式
            let a8 = getRandomInt(1, 10);
            let b8 = getRandomInt(1, 10);
            let c8 = getRandomInt(1, 10);
            question = `${a8}x^2 + ${b8}x + ${c8} = 0`;
            let discriminant8 = b8 * b8 - 4 * a8 * c8;
            if (discriminant8 >= 0) {
                let root18 = ((-b8 + Math.sqrt(discriminant8)) / (2 * a8)).toFixed(2);
                let root28 = ((-b8 - Math.sqrt(discriminant8)) / (2 * a8)).toFixed(2);
                answer = `x = ${root18}, ${root28}`;
            } else {
                answer = "解なし";
            }
            break;
        case 9:
            // 中学3年生: 三次方程式
            let a9 = getRandomInt(1, 5);
            let b9 = getRandomInt(1, 5);
            let c9 = getRandomInt(1, 5);
            let d9 = getRandomInt(1, 5);
            question = `${a9}x^3 + ${b9}x^2 + ${c9}x + ${d9} = 0`;
            answer = "解なし（または実際に計算する）";
            break;
        case 10:
            // 高校1年生: 二次関数とそのグラフ
            let a10 = getRandomInt(1, 10);
            let b10 = getRandomInt(1, 10);
            let c10 = getRandomInt(1, 10);
            question = `y = ${a10}x^2 + ${b10}x + ${c10} の頂点の座標`;
            answer = `(${(-b10 / (2 * a10)).toFixed(2)}, ${(-c10 + (b10 * b10 / (4 * a10))).toFixed(2)})`;
            break;
        case 11:
            // 高校2年生: 三角関数
            let angle11 = getRandomInt(0, 360);
            question = `sin(${angle11}°)`;
            answer = Math.sin((angle11 * Math.PI) / 180).toFixed(2);
            break;
        case 12:
            // 高校3年生: 微分積分
            let a12 = getRandomInt(1, 10);
            let b12 = getRandomInt(1, 10);
            question = `f(x) = ${a12}x^2 + ${b12}x の導関数`;
            answer = `${2 * a12}x + ${b12}`;
            break;
        default:
            question = "1 + 1";
            answer = 2;
            break;
    }

    return { question: `${question} は？`, answer: answer };
}
