const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUser, updateAvatar, updateUser, getCurrentUser, // createUser,
} = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.get('/users/me', getCurrentUser);
// userRouter.post('/users', createUser);

userRouter.get('/users/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
}), getUser);
userRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
}), updateUser);
userRouter.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(/^((http|https)?:\/\/)(w{3}\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.)+[A-Za-zА-Яа-я0-9-]{2,8}(([\w\-._~:/?#[\]@!$&'()*+,;=])*)?\/?#?/),
  }),
}), updateAvatar);

module.exports = userRouter;
