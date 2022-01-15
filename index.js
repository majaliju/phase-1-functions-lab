// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    const HQ = 42;
    let distance = Math.abs(pickupLocation - HQ);
    return distance;
}

function distanceFromHqInFeet (pickupLocation){
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    let distanceTravelled = (Math.abs(start-destination)) * 264;
    return distanceTravelled;
}

function calculatesFarePrice(start, destination){
    let fare;
    if (distanceTravelledInFeet(start, destination) > 2500){
        fare = "cannot travel that far";
    }
    else if (distanceTravelledInFeet(start, destination) > 2000){
        fare = 25;
    }
    else if (distanceTravelledInFeet(start, destination) > 400){
        let calculatedDistance = distanceTravelledInFeet(start, destination) - 400;
        fare = calculatedDistance * 0.02;
    }
    else {
        fare = 0;
    }
    return fare;
    }