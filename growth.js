export const maxCapacity = newArea/plantSpace


export function overGrown(weeks){
    const plantCount = plant * Math.pow(2, weeks);
    if (plantCount > maxCapacity *.8){
        console.log(`Week ${weeks}: Prune the plants. Too many`)
    } else if (
        plantCount >= maxCapacity * .5 &&
        plantCount <= maxCapacity * .8
    ){
        console.log(
            `Week ${weeks}: Monitor the plants. Growing within capacity.`
        );
     } else {
       console.log(`Week ${weeks}: Plant more. Has room.`)
     }
    }