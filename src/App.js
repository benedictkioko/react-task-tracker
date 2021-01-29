import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Project Sync',
        day: 'Feb 5th at 10:30 am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Meeting at work',
        day: 'Feb 7th at 2:30 pm',
        reminder: false,
    }
  ])

  return (
    <div className="container">
      < Header/>
      < Tasks tasks = { tasks }/>
    </div>
  );
}

export default App;
