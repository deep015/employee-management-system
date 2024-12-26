import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {
  const [UserData,setUserData]=useContext(AuthContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
   
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
    const data=UserData;
    console.log(data)

   
    data.forEach(function(elem) {
      
      if(assignTo==elem.firstName){
       elem.tasks.push(newTask)
       elem.taskNumber.newTask=elem.taskNumber.newTask+1
      }
    });
    setUserData(data);
    console.log(data);

    settaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    settaskDescription('')
   

  }
  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }} 
    
    action="" 
    className=' flex items-start justify-between'>
      <div className='w-1/2'>
       <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
              settaskTitle(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
            type="text" placeholder='Make a UI Design' />
       </div>
        <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                value={taskDate}
                onChange={(e)=>{
                  setTaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    type="date" />
       </div>
        <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                <input
                value={assignTo}
                onChange={(e)=>{
                  setAssignTo(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                type="text" placeholder='employee Name ' />
        </div>
       <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input 
                value={category}
                onChange={(e)=>{
                 setCategory(e.target.value)
                }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
                type="text" placeholder='design,dev,etc' />
       </div>
     </div>

      <div className='w-2/5 flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea
        value={taskDescription}
        onChange={(e)=>{
          settaskDescription(e.target.value)
        }}
        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
        name="" id="" rows="10" cols="40" placeholder='Write something....'> </textarea>
        <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full'>Create Task</button>
        </div>
      
      
        
        
    </form>
</div>
  )
}

export default CreateTask