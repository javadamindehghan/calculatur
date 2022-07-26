import  Grid from '@mui/material/Grid'
import  { useEffect, useState } from 'react'
import Operator from './Operator'
import Result from './Result'

export default function Calculate() {
    const [action, setaction] = useState('0')
    const [equal, setequal] = useState('0')
    const [error, seterror] = useState(false)
    const handelaction=(i)=>{
        if (i==='.' &&action=='0' ) {
            i='0.'
        }
        else if (i==='.' && ['+','-','*','/'].includes(action[action.length-1])) {
            i='0.'
        }
      
        
        setaction(c=>(c==='0')?i:c+i)
       
    }
  
  
    
    const handelerrorf=()=>{
        seterror(false)
    }
    const handelerroe=()=>{
        seterror(true)
    }
    const clearaction=()=>{
        setaction('0')
        seterror(false)
    }
    const handelresult=()=>{
        console.log(action);
       setaction((error)?'error':String(eval(action)))
    }
    const handdelback=()=>{
        if (action.length>1) {
            setaction(action.slice(0,action.length-1))
        }
        else if (action.length==1) {
            setaction('0')
        }
    }
    return (
        <div className='r' >
       <Grid container
       justifyContent="center"
   alignItems="center"
       >
           <Grid xs={12}>
                <Result handelerrorf={handelerrorf} error={error} handelerroe={handelerroe} equal={equal} action={action}/>
           </Grid>
           <Grid xs={12}>
            <Operator handdelback={handdelback} handelresult={handelresult} clearaction={clearaction} handelaction={handelaction}/>
           </Grid>
       </Grid>
       </div>
    )
}
