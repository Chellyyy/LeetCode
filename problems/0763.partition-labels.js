/**
 * Create by Chelly
 * 2020/10/22
 */

/**
 * 题目描述
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 *
 * 注意
 * S的长度在[1, 500]之间。
 * S只包含小写字母 'a' 到 'z' 。
 *
 */

/**
 * 示例1
 * 输入：S = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * 划分结果为 "ababcbaca", "defegde", "hijhklij"。
 * 每个字母最多出现在一个片段中。
 * 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  // 每拿到一个字母，就获取他在字符串中的lastIndex
  // 然后比较这个字母到lastIndex之间的字母的index值的大小取最大值
  // 比较完成后获得的值就是这个划分最大的index
  let arr = [];
  let i = 0, length = S.length,preIndex = 0,lastIndex = 0;
  while(i<length){
    let temp = S[i];
    lastIndex = S.lastIndexOf(temp);
    i++;
    while(i<=lastIndex){
      let temp = S[i];
      let now = S.lastIndexOf(temp);
      lastIndex = (now>lastIndex?now:lastIndex);
      i++;
    }
    arr.push(i-preIndex);
    preIndex = i;
  }
  return arr;
};

var partitionLabels1 = function(S) {
  // 遍历字符串，用对象或数组记录每个字母出现的最大值
  // 比较每个字母的最大值，获取划分
  let arr = {};
  let length = S.length;
  for(let i = 0; i < length; i++){
    arr[S[i]] = i;
  }
  let start = 0, end = 0;
  let result = [];
  for(let i = 0; i < length; i++){
    end = Math.max(end, arr[S[i]]);
    if(end === i){
      result.push(end - start + 1);
      start = end + 1;
    }
  }
  return result;
};