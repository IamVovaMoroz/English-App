import React from 'react'
import Checkbox from '@mui/material/Checkbox';


export const WordList = ({words}) => {
  return (
    <div>
{words.map((item, index) =>{
return <li key={item.id}>

<Checkbox  />
{/* Делаем номер по списку, для этого используя индекс map+1 , чтобы с нуля не начинался. Нано id будем использовать */}
<p className='numberWord'>{index+1}</p>
<p className="ukrWord">{item.uaWord} </p>
<p className="enWord">{item.enWord} </p>
<button>Delete</button>
<button>Edit</button>


</li>

})}

    </div>
  )
}
