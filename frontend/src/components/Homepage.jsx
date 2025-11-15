import react from 'react'; 
import { useState } from 'react'; 


export default function Home() {   

    // set up the usestate stuff here as such 
    const [message, newMessage] = useState(''); 




    return( 
        <> 
            <h1>Welcome to Relief.Io your personal therapy!</h1>  
            <p></p> 
            <button>Learn More</button>
            <button>Choose Your therapist!</button>
        </>
    )
}