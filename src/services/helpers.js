export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
};

export function generateGuessColor(array) {
    const colorsArray = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
    const numbersArray = [1, 2, 3, 4, 5, 6];
    return {
        colors: shuffle(colorsArray),
        numbers: shuffle(numbersArray),
        indexQuestions: [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)],
        correctAnswer: numbersArray[numbersArray.length - 1]
    }
};

export function getCurrentMemberType(members, device_id) {
    ;
    const member = members.find((value) => value.device_id === device_id)
    return member.type
};

export function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        // dist to kilometers
        dist = dist * 1.609344;
        // dist to meters
        dist = dist * 1000;
        return dist;
    }
};

export function newTakenElementMessage(name) {
    return {
        message: `Deine Freunde haben das Element "${name.toUpperCase()}" genommen`,
        type: "info",
        duration: 5000
    }
}

