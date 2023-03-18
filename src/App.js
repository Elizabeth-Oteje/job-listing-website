import React from 'react';
import data from './data.json'
import Jobs from './components/Jobs'
import Header from './components/Header';
import {useState} from 'react'

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if(!filterKeywords.includes(data)){
      setfilterKeywords([...filterKeywords, data]);
    }
  }
  return (
    <div>
      <div className='header'>
      </div>
      {filterKeywords.length > 0 && <Header keywords={filterKeywords}/>
      }
      <Jobs data={data} setKeywords={addFilterKeywords} />
    </div>
  );
}

export default App;
