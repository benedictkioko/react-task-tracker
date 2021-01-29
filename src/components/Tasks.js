import { useState } from 'react'

const Tasks = () => {
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
        <>
          {tasks.map((task) => (
              <h3 key={task.id}>{task.text}</h3>
            ))}  
        </>
    )
}

export default Tasks
