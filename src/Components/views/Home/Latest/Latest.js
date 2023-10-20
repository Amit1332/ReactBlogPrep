import React, { useContext } from 'react'
import HeadingName from '../../../helper/partial/HeadingName'
import Card from './Card'
import { store } from '../../../../ContextApi/Store'

const Latest = () => {
  const data  = useContext(store)

  return (
    <div>
        <HeadingName name="The Latest"/>
          
              <Card data ={data}/>
            

    </div>
  )
}

export default Latest