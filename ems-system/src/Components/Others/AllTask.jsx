import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

    const [UserData,setUserData]=useContext(AuthContext)
    console.log(UserData);

    if (!Array.isArray(UserData)) {
        return <div>Loading tasks...</div>; // or an appropriate loading/fallback message
    }
  
    return (
    <div className='bg-[#1C1C1C] p-5  mt-5 rounded  '>
         <div className='bg-red-400 mb-2 py-2 px-5 flex justify-between'>
            <h2 className='w-1/5text-lg font-medium'>Employee Name</h2>
            <h3 className='w-1/5text-lg font-medium'>New Task</h3>
            <h5 className='w-1/5text-lg font-medium'>Active Task</h5>
            <h5 className='w-1/5text-lg font-medium'>Completed </h5>
            <h5 className='w-1/5text-lg font-medium'>failed </h5>
            </div>
       <div className=''>
       {UserData.map(function(elem,idx){
            return <div key={idx} className=' border-2 border-emerald-400 mb-2 py-2 px-5 flex justify-between'>
            <h2 className='w-1/5 text-lg font-medium '>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-600'> {elem.taskNumber.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{elem.taskNumber.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-white'>{elem.taskNumber.completed} </h5>
            <h5 className='w-1/5 text-lg font-medium text-red-600'>{elem.taskNumber.failed} </h5>
           
        </div>
        })}
        
       </div>
    </div>
        
      
  )
}

export default AllTask