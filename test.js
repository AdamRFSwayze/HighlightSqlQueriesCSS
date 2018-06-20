function updateSQLCode(code){
    var myKeyWords = ['SELECT', 'FROM', 'WHERE', 'WITH', 'AND', 'OR', 'GROUP BY', ''];
    myKeyWords.map((word) => {
        code = code.replace(word, '<span class="keyWord">' + word + '</span>')
    })
    var SQLfunctions = ['MAX', 'MIN', 'COUNT']
    SQLfunctions.map((word) => {
        code = code.replace(word, '<span class="SQLfunctions">' + word + '</span>')
    })
    return code
}

document.getElementById('SQL').innerHTML = updateSQLCode(document.getElementById('SQL').innerHTML)