
//Add your columns here:

var columns = ['column1', 'column2', 'column3', 'column4'];






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
    return code
}

document.getElementById('SQL').innerHTML = updateSQLCode(document.getElementById('SQL').innerHTML)