import React from 'react'
import '../App.css'
const ShowData = ({ele,deleteData,editData}) => {
  return (
    

        <div className='parent'>
        <div className='card'>
            <span> {ele.data}</span>
            <div className='temp'>
            <button id="check1" onClick={()=>
                {
                    deleteData(ele.id);
                }
            } ><i class="fa-solid fa-trash"></i></button>  
            <button id="check2" onClick={()=>
            {
                editData(ele.id)
            }
            }>
            <i className="fa-solid fa-pen-to-square" ></i>
            </button>  
            </div>
        </div>
    </div>
  )
}

export default ShowData
