import { badgeHandler } from "./badgeHandler";
import { attributes } from "./attributesList";

const badgeCollector = (stats) => {
  let badgesObject = {};
  for (let attr of stats) {
    badgesObject[attr] = badgeHandler(stats[attr].level, attr);
  }
};

export {badgeCollector};
