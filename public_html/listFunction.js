/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getAverage(a, b, c) {
    var total = a;
    var count = 1;
    total += b;
    count++;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var average = total / count;
    return 'The average is ' + average;
}
var result = getAverage(4, 6);
function concatenate(items, separator, beginAt, endAt) {
    if (separator === void 0) { separator = ','; }
    if (beginAt === void 0) { beginAt = 0; }
    if (endAt === void 0) { endAt = items.length; }
    var result = '';
    for (var i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separator;
        }
    }
    return result;
}
var items = ['A', 'B', 'C'];
var result = concatenate(items);
var partialResult = concatenate(items, '-', 1);
