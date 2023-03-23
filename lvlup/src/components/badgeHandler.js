import { badges } from "../assets/icons/badgeMap";

const badgeHandler = (level, attribute) => {
  const images = require.context("../assets/icons/badges", true);
  let collectedBadges = [["./targeting.png", "TARGET ACQUIRED"]];

  // logic to go through badgeMap and collect all badges

  let i = 2;
  while (i <= level) {
    if (badges[attribute][i] !== undefined && badges[attribute][i].length === 2) {
      //console.log(badges[attribute][i]);
      collectedBadges.push(badges[attribute][i]);
    }
    i++;
  }

  // console.log(collectedBadges);
  // console.log(images);
  // most recent (highest level) badge from the end of collectedB array
  // [0] index at the end gets path, [1] would get badge name
  const badgeImgSrc = collectedBadges[collectedBadges.length - 1][0];
  const badgeTitle = collectedBadges[collectedBadges.length - 1][1];
  //imgSrc = collectedBadges[0][0];

  return [images(badgeImgSrc), badgeTitle];
};

export { badgeHandler };
