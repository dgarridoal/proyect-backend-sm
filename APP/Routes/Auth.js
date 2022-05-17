const express = require("express");
const router = express.Router();

/**
 * @api {post} /auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion  1.0.0
 * @apiDescription Login
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 */
router.post("/login", (req, res) => {
  res.json("Auth login");
});

/**
 * @api {post} /auth/register Register
 * @apiName Register
 * @apiGroup Auth
 * @apiVersion  1.0.0
 * @apiDescription Register
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 */
router.post("/register", (req, res) => {
  res.json("Auth register");
});

/**
 * @api {post} /auth/change-password Change Password
 * @apiName ChagePassword
 * @apiGroup Auth
 * @apiVersion  1.0.0
 * @apiDescription Change Password
 * @apiParam {String} email Email
 * @apiParam {String} password Password
 * @apiParam {String} new-password Password
 */
router.post("/change-password", (req, res) => {
  res.json("Auth change password");
});

module.exports = router;
