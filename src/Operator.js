import  Grid  from '@mui/material/Grid'
import  Button  from '@mui/material/Button'
import  { useState } from 'react'

export default function Operator({handdelback,handelaction ,clearaction,handelresult}){
   
    return (
        
           <Grid container>
               <Grid xs={12}>
                  <div className='parent-operator'>
                  <Button  onClick={()=>handelresult()} className='result1' variant="outlined" color="error">=</Button>
                  <Button onClick={handdelback}   className='back' variant="outlined" color="error">back</Button>
                  <Button onClick={clearaction}  className='clear' variant="outlined" color="error">c</Button>
                  <Button onClick={()=>handelaction('7')} className='item7' variant="outlined" size='small'>7</Button>
                  <Button  onClick={()=>handelaction('8')} className='item8' variant="outlined">8</Button>
                  <Button  onClick={()=>handelaction('9')} className='item9' variant="outlined">9</Button>
                  <Button  onClick={()=>handelaction('/')} className='item/' variant="outlined"  color="success">/</Button>
                  
                  <Button  onClick={()=>handelaction('4')} className='item4' variant="outlined">4</Button>
                  <Button  onClick={()=>handelaction('5')} className='item5' variant="outlined">5</Button>
                  <Button  onClick={()=>handelaction('6')} className='item6' variant="outlined">6</Button>
                  <Button  onClick={()=>handelaction('*')} className='item*' variant="outlined"  color="success">*</Button>
                  
                  <Button  onClick={()=>handelaction('1')} className='item1' variant="outlined">1</Button>
                  <Button  onClick={()=>handelaction('2')} className='item2' variant="outlined">2</Button>
                  <Button  onClick={()=>handelaction('3')} className='item3' variant="outlined">3</Button>
                  <Button  onClick={()=>handelaction('-')} className='item-' variant="outlined"  color="success">-</Button>
                  

                  <Button  onClick={()=>handelaction('0')} className='item0' variant="outlined">0</Button>
                  <Button onClick={()=>handelaction('.')} className='item.' variant="outlined">.</Button>
                  <Button  onClick={()=>handelaction('+')} className='item+' variant="outlined"  color="success">+</Button>
                  
                  </div>
               </Grid>

           </Grid>
       
    )
}
