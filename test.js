
//Add your columns here:

var columns = ['column1', 'column2', 'column3', 'column4'];


var schemas = [];





function updateSQLCode(code){

    var myKeyWords = ['SELECT', 'FROM', 'WHERE', 'WITH', 'AND', 'OR', 'GROUP BY', 'DISTINCT'];
    myKeyWords.map((word) => {
        code = code.replace(new RegExp(word, 'g'), '<span class="keyWord">' + word + '</span>')
    })
    var SQLfunctions = ['MAX', 'MIN', 'COUNT']
    SQLfunctions.map((word) => {
        code = code.replace(new RegExp(word, 'g'), '<span class="SQLfunctions">' + word + '</span>')
    })

    columns.map((word) => {
        code = code.replace(new RegExp(word, 'g'), '<span class="tableColumns">' + word + '</span>')
    })

    var stringIdentifierIndices = [];

    for (var i=0 ; i < code.length; i++){
        if (code[i] === '\''){
            stringIdentifierIndices.push(i)
        } 
    }

    for(var i=0; i < stringIdentifierIndices.length;i++){
        if(i % 2 === 0){
            code = code.slice(0, stringIdentifierIndices[i]) + '<span class="String">\'' + code.slice( stringIdentifierIndices[i]+1)
        }
        if(i % 2 === 1){
            code = code.slice(0, stringIdentifierIndices[i]) + '</span> + code.slice( stringIdentifierIndices[i]+1)
        }

    } 
    console.log(code);
    return code
}

document.getElementById('SQL').innerHTML = updateSQLCode(document.getElementById('SQL').innerHTML)