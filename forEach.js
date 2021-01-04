/**
 * 循环任何内容
 * @param list {Array}
 * @param callback
 */
function forEach(list, callback) {
    const entries = Object.entries(list);
    let i = 0;
    const len = entries.length;

    for(;i < len; i++) {
        const res = callback(entries[i][1], entries[i][0], list);

        if(res === true) break;
    }
}