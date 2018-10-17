var assert = require("assert")
var authController = require("../../controllers/auth.controller.js")
var expect = require("chai").expect

describe('AuthController', function () {

    describe.only('isAuthorized', function () {
        it('should return false if not authorized', function () {
            var isAuth = authController.isAuthorized(['user'],'admin')
            // assert.equal(false, isAuth)
            expect(isAuth).to.be.false
        })
        it('should return true if authorized', function () {
            // assert.equal(true, authController.isAuthorized(['user', 'admin'],'admin'))
            expect(authController.isAuthorized(['user', 'admin'],'admin')).to.be.true;
        })
    })

    describe('isAuthorizedAsync', function () {
        it('should return false if not authorized', function (done) {
            authController.isAuthorizedAsync(['user'],'admin', function (isAuth) {
                assert.equal(false, isAuth);
                done();
            })
        })
        it('should return true if authorized', function (done) {
            authController.isAuthorizedAsync(['user', 'admin'],'admin', function (isAuth) {
                assert.equal(true, isAuth);
                done();
            })
        })
    })
})
