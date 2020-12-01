/**
 * 题目描述
 * 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
 * 若可行，输出任意可行的结果。若不可行，返回空字符串。
 *
 * 注意
 * S 只包含小写字母并且长度在[1, 500]区间内。
 *
 */

/**
 * 示例1
 * 输入：
 * 输入: S = "aab"
 * 输出: "aba"
 *
 * 示例2
 * 输入: S = "aaab"
 * 输出: ""
 */

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    if(S.length<2){return S}
    // 收集各个字母的个数
    const map = new Map();
    for(let i of S){
        let v = map.get(i);
        v ? map.set(i, v+1) : map.set(i, 1)
    }
    let arrObj = Array.from(map).sort((a,b)=>{return b[1] - a[1]});
    let str = [];
    const max = arrObj[0][1];
    const length = arrObj.length;
    // aabbaac -> [a,a,a,a],[b,b],[c]
    // a,b,c
    // a,b,a,c
    // a,b,a,b,c
    // a,b,a,b,a,c
    // a,b,a,b,a,c,a
    for(let i = 0,len = max*length;i<len;i++){
        let x = i%length;
        const idx = str.lastIndexOf(arrObj[x][0]);
        if(idx===-1){
            str.push(arrObj[x][0]);
            arrObj[x][1]--
        }else{
            if(idx!==str.length-1){
                if(arrObj[x][1]){
                    str.splice(idx+2, 0, arrObj[x][0]);
                    arrObj[x][1]--
                }

            }
        }
    }
    return str.length===S.length ? str.join("") : ""
};
