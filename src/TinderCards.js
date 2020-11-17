import { SwipeableDrawer } from '@material-ui/core';
import React,{useState} from 'react'
import './TinderCards.css'
import TinderCard from  'react-tinder-card'


function TinderCards() {
    const [people, setPeople] = useState([
    {
        name:'John Moe',
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {

        name:'John Joe',
        url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
  ]);
    
    const swiped = (direction,nameToDelete)=>{
        console.log("removing")
    };

    const outOfFrame = (name)=>{
        console.log("left the screen")
    }

    return (
        <div className="tinderCards">
            <div className='tinderCards-cardContainer'>
            {people.map((person)=>
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=>swiped(dir,person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}


            >
            <div style={{backgroundImage:"url("+person.url+")"}}
            className="card">
            <h3>{person.name}</h3>
            
            </div>
            
            </TinderCard>
             
        )}
            </div>
            
        </div>
    );
}

export default TinderCards;
