import { useEffect, useState } from "react";

export default function Joker() {
    const URL = "https://officials-joke-api.appspot.com/random_joke";




    const getNewJoke = async () => {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();

        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline })
    }

    useEffect(()=>{async function getFirstJoke() {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        console.log(jsonResponse);
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline })
    }
    getFirstJoke();
    }, [])

    let [joke, setJoke] = useState({});

    return (
        <div>
            <h3>Joker</h3>
            <h2>{Joker.setup}</h2>
            <h2>{Joker.punchline}</h2>

            <button onClick={getNewJoke}>New Joke!</button>
        </div>
    )
}