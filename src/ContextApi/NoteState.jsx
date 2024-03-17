import { useEffect, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {



    const [apidata, setApiData] = useState();

    useEffect(() => {
      fetchData();
  }, []);
  
  const fetchData = async () => {
    const res= await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
    const data= await res.json()
    setApiData(data)
    
    
  };
  //console.log(apidata);

 
    return (
        <NoteContext.Provider value={{apidata}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState
