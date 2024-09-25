import { useEffect, useState } from 'react'
import './App.css'
//import { Ducks } from './demo'
//import DuckItem from './duckitem'
import axios from 'axios'
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/activities')
            .then(response => {
                setActivities(response.data);
            })
    },[]);


    return (
      <div>
            <Header as="h2" icon="users" content="Reactivities" />
            <List>
                {activities.map((activity: any) => (
                    <ListItem key={activity.id}>{activity.title}</ListItem>
                ))}
                </List>
            {/*{Ducks.map(duck => (*/}
            {/*    <DuckItem key={duck.name} duck={duck}/>*/}
            {/*))} */}

      </div>
    
  )
}

export default App
