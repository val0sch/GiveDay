const express = require("express");

const {
  AuthController,
  EventController,
  CadeauController,
  UserController,
  ArticleController,
  ResetController,
} = require("./controllers");

const router = express.Router();

/**
 * @desc Auth routes
 *
 * @api {post} /auth/register Register a new user
 * @api {post} /auth/login Login a user
 * @api {get} /auth/logout Logout a user
 */

router.post("/api/auth/register", AuthController.register);
router.post("/api/auth/login", AuthController.login);
router.get("/api/auth/logout", AuthController.logout);

/**
 * @desc Events routes
 *
 * @api {post}
 * @api {post}
 * @api {get}
 */
router.get("/api/events", EventController.browse);
router.get("/api/events/:id", EventController.read);
router.put("/api/events/:id", EventController.edit);
router.post("/api/events", EventController.add);
router.delete("/api/events/:id", EventController.delete);

/**
 * @desc Cadeau routes
 *
 * @api {post}
 * @api {post}
 * @api {get}
 */
router.get("/api/cadeaux", CadeauController.browse);
router.get("/api/cadeaux/:id", CadeauController.read);
router.put("/api/cadeaux/:id", CadeauController.edit);
router.post("/api/cadeaux", CadeauController.add);
router.delete("/api/cadeaux/:id", CadeauController.delete);

/**
 * @desc Article routes
 *
 * @api {get} /api/article   Récupérer tous les articles de la base de données (table article)
 * @api {get} /api/new-article   Récupérer le dernier article ?????
 * @api {delete} /api/article/delete/:id    Supprimer un article
 */
router.get("/api/articles", ArticleController.browse);
router.get("/api/articles/:id", ArticleController.read);
router.get("/Blog/articleDetail/:id", ArticleController.read);
router.get("/api/tag", ArticleController.tag);
router.get("/api/tag/:id", ArticleController.readTag);
router.get("/api/new-article", ArticleController.newArticle);

router.get("/api/reset/isemailexists/:id", ResetController.isEmailExists);
router.get("/api/resetpassword-change/:id", ResetController.compareToken);

// router.put("/api/article/:id", ArticleController.edit);
// router.post("/api/article", ArticleController.add);
router.delete("/api/article/delete/:id", ArticleController.delete);

/**
 * @desc Users routes
 *
 * @api {get} /api/users Récupère tous les utilisateurs
 * @api {get} /api/users/:id Récupère un utilisateur
 * @api {put} /api/users/update/:id Update l'utilisateur (pour le moment juste le role)
 * @api {delete} /api/users/delete/:id Supprime un utilisateur de la base de données
 * @api {get} /api/users/count Récupère le nombre total d'utilisateurs
 
 */
router.get("/api/users", UserController.browse);
router.get("/api/users/:id", UserController.read);
router.put("/api/users/update/:id", UserController.edit);
router.delete("/api/users/delete/:id", UserController.delete);
router.get("/api/count", UserController.count);

module.exports = router;
