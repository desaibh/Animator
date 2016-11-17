const AnimationDAO = require('../services/AnimationDAO');

class AnimationController {
  static getAllOfCurrentUser(req, res) {
    AnimationDAO.searchBy({ user_id: req.session.currentUser.id }).then((animations) => {
      res.status(200).json(animations);
    });
  }
  static create(req, res) {
    const animationData = {
      body: req.body.body,
      user_id: req.session.currentUser.id,
    };
    AnimationDAO.create(animationData)
           .then((animation) => res.status(200).json(animation));
  }
  static delete(req, res) {
    AnimationDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = AnimationController;
