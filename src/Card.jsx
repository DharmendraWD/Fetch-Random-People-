import React, {useState, useEffect} from 'react'

export function Card() {

const [nameOfE, setName] = useState({
    name:"",
    dob:"",
    pic:"",
    cell:"",
    location:"",
    email:"",
    gender:"",
})


const handleChange=()=>{
        fetch `https://randomuser.me/api`
        .then(blob=> blob.json())
        .then((res)=> {
            setName({
                name:res.results[0].name.title+" "+res.results[0].name.first+" "+res.results[0].name.last,
                dob:res.results[0].dob.age,
                pic:res.results[0].picture.large,
                cell:res.results[0].cell,
                email:res.results[0].email,
                gender:res.results[0].gender,
                location:res.results[0].location.city,
        
            })
           })   
}
useEffect(() => {
handleChange()
}, [])


  return (
    <>
    <div className="heading flex justify-center m-[22px 0 12px 0]">
<h1 className='text-[20px]'>Random People</h1>
    </div>
    <div className="card bg-red-400 flex justify-center">
    <div className="relative h-[400px] w-[300px] rounded-md mt-[70px]">
      <img
        src={nameOfE.pic}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 text-left">
        <h1 className="text-lg font-semibold text-white text-center">{nameOfE.name}</h1>
     <div className="sec1 flex justify-evenly ">
        <p>Gender: {nameOfE.gender}</p>
        <p>Age: {nameOfE.dob}</p>
     </div>
     <div className="sec2 flex justify-evenly">
            <p>Cell: {nameOfE.cell}</p>
            <p>City: {nameOfE.location}</p>
        </div>
        <p className="mt-2 ml-[4px] text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>

<div className="btn flex justify-center">
<button onClick={handleChange} className="mt-2 text-[17px] inline-flex cursor-pointer items-center text-sm font-semibold text-red-300">
          Next &rarr;
        </button>
</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Card