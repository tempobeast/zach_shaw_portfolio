import React, {useState, useEffect} from "react";
import {intervalToDuration} from 'date-fns';
import celebDetails from '../celebrityAgeData.js'

function AgeGuesser({ top100, setTop100 }) {

    const [actorObj, setActorObj] = useState('')
    const [showBio, setShowBio] = useState(true)
    const [guess, setGuess] = useState('')
    const [guessResults, setGuessResults] = useState([])
    const [guessedRight, setGuessedRight] = useState(false)
    const [next, setNext] = useState(false)

    console.log(celebDetails.length)

    useEffect(() => {
        getActor()
    }, [])

    function getActor() {
        setGuess("")
        setNext(false)
        setGuessResults([])
        let randomActor = celebDetails[Math.floor(Math.random() * celebDetails.length)]
        const bioWithoutYears = randomActor.miniBios[0].text.replace(/[0-9]{4}/g, "****");
        const age = intervalToDuration({start: new Date(randomActor.birthDate), end: new Date()});
        setActorObj({
            ...randomActor, 
            miniBios: bioWithoutYears, 
            age: age.years});
        // setTop100([...top100.slice(0, randomNumber), ...top100.slice(randomNumber + 1)])
    }

    function handleSubmit(e) {
        e.preventDefault();
        let result = '';
        let parsedGuess = parseInt(guess)
        if (parsedGuess === actorObj.age) {
            result = `That's right! ${actorObj.name} is ${guess}`
            setGuessedRight(true)
        } else if (parsedGuess < actorObj.age) {
            result = `Nope, ${actorObj.name} is older than ${guess}`
        } else if (parsedGuess > actorObj.age) {
            result = `Wrong, ${actorObj.name} is younger than ${guess}`
        } else if (guess !== Number) {
            result = "** Must be a Number **"
        }
        setGuessResults([...guessResults, result])
    }
    
    return (
        <div>
            <h2>What's My Age Again?</h2>
            <h4>Age is only a number...Can you guess it?</h4>
            {actorObj
                ? <div>
                    <img className="actor-image" alt={actorObj.name} src={actorObj.image.url}/>
                    <h3>{actorObj.name}</h3>
                    <button onClick={() => (setShowBio(!showBio))}>{showBio ? "Show Bio" : "Hide Bio"}</button>
                    {showBio ? null : <p className="actor-bio">{actorObj.miniBios}</p>}
                    <form onSubmit={handleSubmit}>
                        <input onChange={(e) => setGuess(e.target.value)}type="number" placeholder="guess age"></input>
                        <button type="submit">Guess</button>
                    </form>
                    {guessResults ? guessResults.map((result) => <p key={result}>{result}</p>) : null}
                </div>
                : null
            }   
            {guessedRight ? <button onClick={() => getActor()}>Next</button> : null}
        </div>
    )
}
export default AgeGuesser