import React , {useState,useEffect} from "react";

import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

import useStyles from './styles.js';

import wordsToNumbers from "words-to-numbers";

const alanKey = '03df53878c57c0ad13a338c9175affcc2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

    const [newsArticles,setNewsArticles] = useState([]);

    const classes = useStyles();

    const [activeArticle, setActiveArticles] = useState(-1); 

useEffect(()=>{
    alanBtn({
        key : alanKey,
        onCommand : ({command,articles , number})=>{
            if (command === 'newHeadlines'){
                setNewsArticles(articles);
                setActiveArticles(-1);
            } else if (command === 'highlight') {
                setActiveArticles((prevActiveArticle) => prevActiveArticle + 1); 
            } else if(command === 'open'){
                console.log(number);
                
                const parsedNumber = number.length > 2 ? wordsToNumbers(number,{fuzzy : true}) : number;
                
                const article = articles[parsedNumber-1];

                
                if(parsedNumber > articles.length){
                    alanBtn().playText('try it again');
                }else if (article){
                    window.open(article.url, '_blank');
                    alert(`opening article No ${parsedNumber}`);
                }
            }
        },
    })
},[])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src='https://itchronicles.com/wp-content/uploads/2020/11/AI-Virtual-Assistant-Siri-1024x548.jpg.webp'
                 className={classes.alanLogo} alt="alan logo"/>
            </div>
            <NewsCards articles={newsArticles} activeArticle = {activeArticle} />
        </div>
    );
}

export default App;