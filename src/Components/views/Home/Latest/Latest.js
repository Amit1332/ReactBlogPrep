import React from 'react'
import HeadingName from '../HeadingName'
import Card from './Card'

const Latest = () => {
  return (
    <div>
        <HeadingName name="The Latest"/>
            <div className="latest-card">
                <Card/>
                <Card/>
                <Card/>

            </div>

    </div>
  )
}

export default Latest