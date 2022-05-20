import React , {useState,useEffect} from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

import useStyles from './styles.js';

const alanKey = '03df53878c57c0ad13a338c9175affcc2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    const [newsArticles,setNewsArticles] = useState([]);

    const classes = useStyles();

useEffect(()=>{
    alanBtn({
        key : alanKey,
        onCommand : ({command,articles})=>{
            if (command === 'newHeadlines'){
                setNewsArticles(articles);
            }
        }
    })
},[])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src='https://itchronicles.com/wp-content/uploads/2020/11/AI-Virtual-Assistant-Siri-1024x548.jpg.webp'
                 className={classes.alanLogo} alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;