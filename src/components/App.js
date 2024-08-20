// create your App component here
import { useState, useEffect } from "react";


function App (){
    const[imageUrl, setImageUrl] = useState('');
    const[isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(reponse => reponse.json())
        .then(data => {
            setImageUrl(data.message);
            setIsLoaded(false);
        })
}, [])

    return (
        <div>
            {isLoaded ? (<p>Loading ...</p>) : (
                <img src={imageUrl} alt="A Random Dog" />)
            }
        </div>
    )
}

export default App
