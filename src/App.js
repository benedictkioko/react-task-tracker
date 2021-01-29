import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task) =>
        task.id ===id ? {...task, reminder: !task.reminder}:task
      )
    )
  }

  return (
    <div className="container">
      < Header/>
      <AddTask />
      { tasks.length > 0 ?(
        < Tasks tasks = { tasks } onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ):(
        'No Tasks Available'
      )}
    </div>
  );
}

export default App;
