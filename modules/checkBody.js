
function checkBody(body, champRequis) {
   for (champ of champRequis) {
        if(!body[champ] || body[champ] === '') {
        return false
        }
    }
    return true
}

module.exports = {checkBody}