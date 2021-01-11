import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Convert = ({language,text}) =>{

    const [converted,setConverted]= useState('');
    
    const [deBouncetext,setDeBouncetext]= useState(text);

    useEffect(()=>{
        const debouncetimer = setTimeout(() => {
            setDeBouncetext(text);
        }, 500);

        return () =>{
            clearTimeout(debouncetimer);   
        }
    },[text]);


    useEffect(()=>{

        const doTranslate = async () =>{
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                    params:{
                        q:deBouncetext,
                        target:language.value,
                        key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
        
                    }
                }             
            );
            setConverted(data.data.translations[0].translatedText)
        };
        doTranslate();
        
    },[language,deBouncetext]);

    return <div><h1>{converted}</h1></div>;
}
export default Convert;