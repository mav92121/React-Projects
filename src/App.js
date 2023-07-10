import React, { useEffect, useState } from 'react'
import ShowData from './components/showData'
import './App.css'
const getLocalData=()=>
{
  const lists=localStorage.getItem("MyData");
  if(lists!=[])
  {
    return JSON.parse(lists);
  }
  else return []
}
const App = () => 
{
  const [idUtil,setIdUtil]=useState(0);
  const [data,setData]=useState(getLocalData());
  const [currData,setCurrData]=useState("");
  const [editElement,setEditElement]=useState("");
  const [toggleButton,setToggleButton]=useState(false);

  const deleteData=(id)=>
  {
    const temp=data.filter((ele)=>(
      ele.id!==id
    ))
    setData(temp);
  }
  const editData=(id)=>
  {
    const ansElement=data.find((ele)=>
    {
      return ele.id==id;
    })
    setEditElement(id)
    setCurrData(ansElement.data) ;
    setToggleButton(true);
  }
  // storing the data on local storage
  useEffect(()=>
  {
    localStorage.setItem("MyData",JSON.stringify(data));
  },[data])

  return (
    <div className='container'>
    <h1 className='heading'>Add you tasks</h1>
      <input type="text" value={currData} placeholder='Add a task ' onChange={(event)=>
      {
        setCurrData(event.target.value)
      }}/>
      <button className="Add" onClick={()=>
      {
        const currElement={
          id:idUtil,
          data:currData,
        }
        if(currElement.data!="" && toggleButton)
        {
          var findEle=data.map((ele)=>
          {
            if(ele.id==editElement)
            {
              ele.data=currData;
            }
          })
          setCurrData("");
        }
        else if(currElement.data!="")
        {
          setData([...data,currElement]);
          setCurrData("");
          setIdUtil(idUtil+1);
        }

        setToggleButton(false);
      }}>
      {toggleButton ? (<i class="fa-sharp fa-solid fa-pen-to-square fa-xl"></i>) : (<i class="fa-sharp fa-solid fa-plus fa-2xl"></i>)}
      </button>
      {data.map((ele)=>
      (
        <ShowData ele={ele} deleteData={deleteData} editData={editData}/>
      ))}
    </div>
  )
}

export default App
/*

adding -> <i className="fa-solid fa-plus"></i>

editing-> fa-solid fa-pen-to-square

*/