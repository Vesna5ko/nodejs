const randomize = function(arr){

    let copyArr = [].concat(arr);
    let arrForExport = [];

    for(let i = 0; i < arr.length; i++){;
        let rand = Math.floor(Math.random() * copyArr.length);
        arrForExport.push(copyArr[rand]);
        copyArr.splice(rand,1);
    }
    return arrForExport;
}
module.exports = randomize;