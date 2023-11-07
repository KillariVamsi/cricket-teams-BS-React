import logo from './logo.svg';
import './App.css';
import Header_list from './Header,List'
import {Card} from './cards'
import { useState } from 'react';


function App() {

  const [teamList, updateTeamList] = useState([
    {teamURL : "https://static.toiimg.com/thumb/msid-70112532,width-400,resizemode-4/70112532.jpg",
      teamName : "India", id : "india"},
      { teamURL : "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Southafrica_cricket_logo.svg/1200px-Southafrica_cricket_logo.svg.png",
        teamName : "South Africa", id : "SA" },
        { teamURL : "https://www.icc-cricket.com/resources/prod/v8.32.0/i/members/AUS.jpg",
        teamName : "Australia", id : "aus" },
        { teamURL : "https://upload.wikimedia.org/wikipedia/en/1/19/Logo_of_cricket_New_zealand_Team.png",
        teamName : "NewZealand", id : "newz" },
        { teamURL : "https://upload.wikimedia.org/wikipedia/commons/a/ad/Pakistan_cricket_team_logo.png",
        teamName : "Pakistan", id : "pak" },

  ])

  return (
    <>
    <Header_list />
    { teamList.map((teamList,i) => {

    return <Card Name = {teamList.teamName} Img = {teamList.teamURL} id = {teamList.id}/>

    }) }


    </>
    
  )
}

export default App;
