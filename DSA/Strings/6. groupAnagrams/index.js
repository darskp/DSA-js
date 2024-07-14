//groupAnagrams
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let op = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

function groupAnagrams(strs){
    let map=new Map();
    let output=[]
    for(let i=0;i<strs.length;i++){
        const sortedStr=strs[i].split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr,[strs[i]]);
        } else {
          map.get(sortedStr).push(strs[i]);
        }
    }
    map.forEach((arr) => output.push(arr));
    return output
}

console.log(groupAnagrams(strs));