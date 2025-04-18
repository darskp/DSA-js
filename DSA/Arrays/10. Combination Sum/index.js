// Combination Sum

var combinationSum = function (candidates, target) {
  let result = [];

  function dfs(index, curVal, arr) {
    if (curVal < 0) {
      return;
    }
    if (curVal == 0) {
      result.push([...arr]);
    }
    for(let i=index;i<candidates.length;i++){
        arr.push(candidates[i]);
        dfs(i,curVal-candidates[i],arr)
        arr.pop()
    }
  }

  dfs(0, target, []);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
