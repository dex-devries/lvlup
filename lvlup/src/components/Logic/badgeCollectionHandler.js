import { badgeHandler } from "./badgeHandler";

const badgeCollector = (stats) => {
  let badgesObject = {};
  for (let attr in stats) {
    badgesObject[attr] = badgeHandler(stats[attr].level, attr);
  }
  return badgesObject;
};

export {badgeCollector};
