import React from 'react'
import Job from './Job'

const Jobs = ({data,setKeywords}) => {
  return (
    <div className='jobs'>
      {data.map((d) => {
        return <Job data={d} setKeywords={setKeywords}/>
      })}
    </div>
  )
}

export default Jobs
