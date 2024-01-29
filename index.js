function distanceFromHqInBlocks(someValue) {
    let hqDistance = someValue - 42;
    return Math.abs(hqDistance);
}

function distanceFromHqInFeet(someValue) {
    let hQInFeet = distanceFromHqInBlocks(someValue) * 264
    return hQInFeet;
}

function distanceTravelledInFeet(start, destination) {
    let travelledInFeet = Math.abs(destination - start) * 264
    return travelledInFeet;
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400)
        return 0;
    if  (distanceInFeet > 400 && distanceInFeet < 2000)
        return (distanceInFeet - 400) * 0.02
    if (distanceInFeet > 2000 && distanceInFeet < 2500)
        return 25
    if (distanceInFeet > 2500)
        return "cannot travel that far"
}
