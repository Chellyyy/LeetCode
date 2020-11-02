/**
 * Create by Chelly
 * 2020/11/2
 */

/**
 * 题目描述
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
 * 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
 *
 */

/**
 * 示例1
 * 输入:
 * [[0,1,0,0],
 *  [1,1,1,0],
 *  [0,1,0,0],
 *  [1,1,0,0]]
 * 输出: 16
 *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let result = 0;
  for(let i = 0;i<grid.length; i++) {
    let items = grid[i];
    for(let j = 0; j<items.length; j++){
      let item = items[j];
      if(item===1){
        result+=4;
        grid[i+1] ? grid[i+1][j] ? --result : "" : ""
        grid[i-1] ? grid[i-1][j] ? --result : "" : ""
        grid[i][j-1] ? --result : ""
        grid[i][j+1] ? --result : ""
      }
    }
  }
  return result;
};