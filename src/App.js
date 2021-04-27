import data from "./data.json";
import Jobs from "./components/Jobs"
import Header from "./components/Header"
import { useState } from "react";

function App() {

  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if(!filterKeywords.includes(data)){
      setfilterKeywords([...filterKeywords, data])
    }
  }

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter(key => key !== data);
    setfilterKeywords(newKeywords);
  }

  const clearAll = () => {
    setfilterKeywords([]);
  }


  return (
    <div>
      <div className="header"></div>
      {
        filterKeywords.length > 0 && <Header keywords={filterKeywords} removeKeywords={deleteKeyword} clearAll={clearAll}></Header>
      }
      <Jobs data={data} setKeywords={addFilterKeywords} keywords={filterKeywords}></Jobs>
    </div>
  );
}

export default App;
