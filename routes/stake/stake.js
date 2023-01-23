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

routes.post("/", isAuth, stake);
routes.get("/", isAuth, getStakesById);
routes.post("/unstake", isAuth, unStake);
routes.post("/return", isAuth, returnNFT);
routes.get("/return", isAuth, getReturnsById);
routes.get("/returns", isAuth, getAllReturns);
routes.get("/stakecsv", isAuth, getStakedCSV);

module.exports = routes;
