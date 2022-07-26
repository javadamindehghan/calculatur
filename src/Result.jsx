import React, { useEffect, useState } from 'react'
import './css/style.css'
export default function Result({action,handelerroe,error,handelerrorf}) {
    const testarray=['++','+-','+*','+/','-+','-*','-/','--','*-','*/','*+','**','//','/*','/-','/+' ,'..']
   
    const [javab, setjavab] = useState('0')
    const lastchar=action[action.length-1]
    const towlastchar=action.slice(-2)
    
useEffect(() => {
    if (testarray.includes(towlastchar)) {
        handelerroe() 
    }

  
   else if (lastchar=='+' ||lastchar=='-' || lastchar=='*' ||lastchar=='/'  ) {
        
        setjavab(action.slice(0,action.length-1))
        handelerrorf()
    }
   
    
  
    else{
        setjavab(action)
        handelerrorf()
    }
   
}, [action])
  

    return (
        <div className='result'>
           <div className='action'>{action}</div>
           <div className='resonse'>{(error)?'error':eval(javab)}</div>
        </div>
    )
}
