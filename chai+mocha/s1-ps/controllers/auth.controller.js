function AuthController () {
    function isAuthorized(roles, neededRole) {
        return roles.indexOf(neededRole)>=0
    }
    function isAuthorizedAsync(roles, neededRole, cb) {
        setTimeout(cb, 10, roles.indexOf(neededRole)>=0)
    }
    return {isAuthorized, isAuthorizedAsync}
}

module.exports = AuthController()