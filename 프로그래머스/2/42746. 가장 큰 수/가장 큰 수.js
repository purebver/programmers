function solution(numbers) {
    let answer = numbers.sort((a, b) => {
        const ab = `${a}${b}`
        const ba = `${b}${a}`
        return ba - ab
    });
    const result = answer.join('');
    return result[0] === '0' ? '0' : result;
}