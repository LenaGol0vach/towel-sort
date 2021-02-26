// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (matrix === undefined) {
        return arr;
    }
    let value = matrix.map((item, index) =>
        index % 2 === 0 ? item : item.reverse()
    );
    for (let i = 0; i < value.length; i++) {
        for (let j = 0; j < value[i].length; j++) {
            arr.push(value[i][j]);
        }
    }
    return arr;
};
