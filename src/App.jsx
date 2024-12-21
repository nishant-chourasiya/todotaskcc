import React, { useState } from 'react'

const App = () => {

  const [User, setUser] = useState('')
  const [Company, setCompany] = useState('')
  const [Phone, setPhone] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("hello")
  

    const newArr = [...allUsers,{User,Company,Phone}]
    
    setAllUsers(newArr)

    setUser("")
    setPhone("")
    setCompany("")
  };
  const deleteHandler = (index) => {
    const deleteData = [...allUsers]
    deleteData.splice(index,1)
    setAllUsers(deleteData)
    // const deleteContact = [...allUser];
    // copyUser.splice(index, 1);
    // setAllUser(copyUser);
  };

    
      return (
    <div className='flex'>
      <form className=' p-10 ml-6'  onSubmit={(e)=>{
        submitHandler(e)
       
        }} >
        <div className=" bg-white-600 h-[600px] w-[500px] border border-black p-5" id='card'>
          <h1 className=' text-xl font-bold'>Add Contact</h1>
          <h1 className=' text-xl mt-5 ' > Name <span className='text-red-600'>*</span> <br /> 
          <input className=' mt-2 border-gray-400 border-2 ml-3 p-3 text-3xl gap-3 rounded '
           placeholder='Enter your name '
           value={User}
           onChange={(e)=>{
            setUser(e.target.value)}}/>
          </h1>
        
          <h1 className=' text-xl mt-5 '> Company <span className='text-red-600'>*</span> <br /> 
          
           <input className=' mt-2 border-gray-400 border-2 ml-3 p-3 text-3xl gap-3 rounded '
            placeholder='Enter company'
            value={Company}
            onChange={(e)=>{
            setCompany(e.target.value)}} /></h1>


          <h1 className=' text-xl mt-5' > Phone <span className='text-red-600'>*</span> <br /> 
           <input className=' mt-2 border-gray-400 border-2 ml-3 p-3 text-3xl gap-3 rounded '
           placeholder='Enter phone number '
           value={Phone} 
           onChange={(e)=>{
           setPhone(e.target.value)}} /></h1>
          
        <button  className='p-3 mt-5 w-full text-white text-xl rounded  bg-slate-900'>Add Contact</button>
        </div>
      </form>
      <div className='h-auto w-full border-2 border-slate-800 m-10 bg-slate-50 '>
      <div className ='w-full h-auto  m-3'><h1 className='text-3xl '>Contact List</h1>
        <h3 className='mt-3'>No contact added yet.</h3>
      </div>

              
        {
          allUsers.map(function(elem,index){
            return <div className =' bg-gray-600  relative p-1 m-2 rounded'>
             {/* <div className='w-auto h-auto bg-emerald-300 p-3'> */}
             
             <h1 className='text-xl  text-white font-semibold'> Name-  {elem.User} </h1>
             
             <h1 className='text-sm mt-1 text-white font-semibold'> Company-{elem.Company}</h1>
             {/* <h1 className='text-sm  text-white font-semibold'> Phone- {elem.Phone} </h1>  */}
             <h1 className="text-sm mt-1 flex justify-between items-center text-white font-semibold">
  <span>Phone: {elem.Phone}</span>
  <button
    className="bg-red-600 text-white px-5 mr-2 mb-1 py-1 rounded"
    onClick={() => deleteHandler(index)}
  >
    Delete
  </button>
</h1>

             
            
            
            {/* <div className='flex-row-reverse mr-[95%] mr-96 mb-[12%] absolute w-20  bg-rose-400 '> <button
              className="bg-red-600 text-white p-1 m-3 rounded"
              onClick={() => deleteHandler(index)} >
              Delete
            </button>
            </div> */}
          
             </div>
            // </div>
            
          })
        }

      </div>
    </div>
  )
}


export default App