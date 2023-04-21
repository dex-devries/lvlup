import { badges } from "../../assets/icons/badgeMap";

const badgeHandler = (level, attribute) => {
  let collectedBadges = [["./targeting.png", "TARGET ACQUIRED"]];

  // logic to go through badgeMap and collect all badges
  // start at i = 2, level 1 is targeting.png for all attrs
  let i = 2;
  while (i <= level) {
    if (badges[attribute][i] !== undefined && badges[attribute][i].length === 2) {
      //console.log(badges[attribute][i]);
      // all badges pushed to collectedBadges
      collectedBadges.push(badges[attribute][i]);
    }
    i++;
  }

  // TESTING
  // console.log(collectedBadges);
  // console.log(images);

  // NOTE: This logic now in Attribute.js with images require.context
  // most recent (highest level) badge from the end of collectedBadges array
  // [0] index at the end gets path, [1] would get badge name
  // const badgeImgSrc = collectedBadges[collectedBadges.length - 1][0];
  // const badgeTitle = collectedBadges[collectedBadges.length - 1][1];

  // return [images(badgeImgSrc), badgeTitle];
  collectedBadges.reverse();
  return collectedBadges;
};

export { badgeHandler };
