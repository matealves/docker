import authService from "../services/authService.js";

async function health(req, res) {
  try {
    return res.status(200).json({ status: true });
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

async function signup(req, res) {
  const body = req.body;

  try {
    const resService = await authService.signup(body);
    return res.status(201).send(resService);
  } catch (err) {
    return res.status(409).send(err.message);
  }
}

async function signin(req, res) {
  const body = req.body;

  try {
    const token = await authService.signin(body);
    return res.send(token);
  } catch (err) {
    return res.status(401).send(err.message);
  }
}

async function userLogged(req, res) {
  const { _id: id } = res.locals.user;

  try {
    const user = await authService.userLogged(id);
    return res.send(user);
  } catch (err) {
    return res.status(404).send(err.message);
  }
}

export default { health, signup, signin, userLogged };
