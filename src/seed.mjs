import {actorUsernames, celebDetails} from './celebrityAgeData';

actorUsernames.forEach((actor) => {
    let searchableName = actor.slice(6);
    console.log(searchableName)
    fetch(`https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=${searchableName}`, {
        method: "GET",
        headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "81d20ea06amshed92649c171b220p11b13ajsn58d3b65a5bfc",
        }
    })
    .then((data) => data.json())
    .then((actor) => celebDetails.push(actor))
})