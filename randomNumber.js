/**
 * 带有范围的随机数生成器
 * @param max {number}
 * @param min {number}
 * @returns {number}
 */
function randomNumber(max = 1, min = 0) {
    if(min >= max) {
        return max;
    }

    return Math.floor(Math.random() * (max - min) + min);
}