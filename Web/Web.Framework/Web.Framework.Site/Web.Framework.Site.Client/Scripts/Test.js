/**
* x만큼 간격이 있는 n개의 숫자
* @param {number} x -10000000 <= x <= 10000000 
* @param {number} n 0 <= n <= 1000
* @returns {object} answer
*/
const lv1_n_numbers_spaced_by_x = (x, n) => {
    var answer = Array(n).fill(x).map((m, i) => (i + 1) * m);

    return answer;
}