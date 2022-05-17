import React , {useEffect} from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey = '03df53878c57c0ad13a338c9175affcc2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

useEffect(()=>{
    alanBtn({
        key : alanKey,
        onCommand : ({command,articals})=>{
            if(command === 'newHeadlines'){
                console.log(articals);
            }
        }
    })
},[])

    return (
        <div>
            <h1>Alan AI News Webside</h1>
        </div>
    );
}

export default App;