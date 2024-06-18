import { useEffect, useRef, useState } from "react"
import './weather.css'

function Weatherapi(){

let [city,setcity] = useState('')
let [temperature,settemp] = useState([])
let [weather,setweather]= useState([])
let inputref =useRef()
let cardref=useRef()
let messageref=useRef()
let buttonref= useRef()
let headref= useRef()

let hour=new Date().getHours()
let min=new Date().getMinutes()
console.log(hour);
console.log(min);

setTimeout(()=>{
       messageref.current.className = 'reverse'
       inputref.current.style.display = 'block'
       buttonref.current.style.display = 'block'
      headref.current.style.display= 'block'

},3500)




function search(){


let cityname= inputref.current.value 
cardref.current.className='remove';

if(cityname!==0){
    fetchhapi()
}

   async function fetchhapi(){
   

        let apiKey= "c6fa1367426a8fc91161e470307d7011"
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`
    
        try {
            let response=await fetch(apiUrl)
            console.log(response);
            let data=await response.json()
            console.log(data);  
            if(data.cod==200){
                setcity(data.name)
                settemp(data.main.temp)
                setweather(data.weather[0].description)
                cardref.current.style.display='inline'
                cardref.current.className = 'anime'
                 }
          } catch (error) {   
                    alert("Please enter the City name")
           } } 
        }


    return (
        <div>
        <div id='full' >
           <b>  <h1 id='message'  ref={messageref}      className="typewriter">Hii I am Weather Forecaster</h1> </b> 
            <div id='search'>
            <input type="text" ref={inputref} id="input" placeholder="Enter City name"  style={{display:'none'}} />
            <button onClick={search} id='button' ref={buttonref}   style={{display:'none'}}>Get Weather</button>
            </div >
            
            <div id='card'  ref={cardref} style={{display:'none'}}>
            <h1   id='title'>City : {city}</h1> <br />
            <h2 id='temp'>Time : {hour}:{min}</h2>
            <h2   id='temp'> Temperature : {temperature} <span id='degree'><sup>o</sup>C</span></h2> <br />
            <h3   id='desc'>Weather : {weather}</h3>

            </div> 
            <h1 id='head' ref={headref} style={{display:'none'}}>Weather Forecaster</h1>

           
        </div>
            </div>

    )
}
export default Weatherapi;