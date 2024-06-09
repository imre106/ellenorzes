const express = require('express');
const router = express.Router();

const {getActornevek,getActorsFilm} = require('../Controllers/actorController');
const {getCategoryName,postCategory,patchCategoryNev} = require('../Controllers/categoryController');
const {getFilmTitle,getFilmÉv} = require('../Controllers/filmController');

router.get('/ACTOR/:first_name/:last_name',getActornevek);
router.get('/CATEGORY/:name',getCategoryName);
router.get('/FILM/:title',getFilmTitle);
router.get('/FILM/RELEASE/:release_year',getFilmÉv)
router.get('/ACTORS/:film_id',getActorsFilm)

router.patch('/CATEGORY/:category_id',patchCategoryNev)

router.post('/CATEGORY',postCategory);


module.exports = router;