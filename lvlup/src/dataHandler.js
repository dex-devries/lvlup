function parseData(dataSet) {
    const statObject = {
        agility: {level: 0, xp: 0},
        intelligence: {level: 0, xp: 0},
        strength: {level: 0, xp: 0},
        skill: {level: 0, xp: 0},
        attack: {level: 0, xp: 0},
        presence: {level: 0, xp: 0},
        alchemy: {level: 0, xp: 0},
        power: {level: 0, xp: 0}
    }

    // power xp calculated separately (all xp)
    let powerXP = 0;

    // this algorithm goes through the data and calculates xp and score for each attribute
    for (let activity of dataSet) {
        // look at count or duration, whichever is higher xp
        // xp is found in statObject, this will allow to add an already completed stat object later
        let xp = 0;
        // duration - calculates total seconds
        let duration = activity.duration.split(":");
        duration = (Number(duration[0]) * 3600) + (Number(duration[1]) * 60) + Number(duration[2]);
        // count
        let count = activity.count;
        // calculate xp and compares - formulas for xp
        let durationXP = Math.floor(duration / 15);
        let countXP = count * 2;
        xp = durationXP >= countXP ? durationXP : countXP;       
        statObject[activity.attribute].xp += xp;
        // power xp logic
        powerXP += xp;
        // console.log(powerXP);
    }
    // power xp logic
    statObject.power.xp += powerXP;

    // calculate levels after xp is done
    for (let attribute in statObject) {
        // currently 240 xp per hour, so one level per hour. Add 1 to start at level 1.
        statObject[attribute].level += 1 + Math.floor(statObject[attribute].xp / 240);
    }
 
    return statObject;
}

export { parseData };