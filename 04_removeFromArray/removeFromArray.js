const removeFromArray = function(arr, ...toRemove) {
    const ans = [...arr];
    for(let i=0;i<toRemove.length;i++){
        const elem = toRemove[i];
        let index = ans.indexOf(elem);
        if(index > -1){
            ans.splice(index, 1);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
