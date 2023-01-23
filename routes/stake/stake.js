const {
  stake,
  getStakesById,
  unStake,
  returnNFT,
  getReturnsById,
  getAllReturns,
  getStakedCSV
} = require("../../controller/stake/stake");

const routes = require("express").Router();

const isAuth = require("../../middlewares/isAuth/isauth");
const isAdmin = require("../../middlewares/isAdmin/isadmin");

routes.post("/", isAuth, stake);
routes.get("/", isAuth, getStakesById);
routes.post("/unstake", isAuth, unStake);
routes.post("/return", isAuth, returnNFT);
routes.get("/return", isAuth, getReturnsById);
routes.get("/returns", isAuth, getAllReturns);
routes.get("/stakecsv", isAuth, isAdmin, getStakedCSV);

module.exports = routes;
