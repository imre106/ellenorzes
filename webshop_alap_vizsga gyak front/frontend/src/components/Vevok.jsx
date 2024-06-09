import { useState,useEffect } from "react";
import Vevo from "./Vevo";

function Vevok() {
    const [vevok,setVevok] = useState([]);
    const[refresh,setRefresh]=useState(false);

  const update=()=>{
    setRefresh(prev=>!prev);
  }

    useEffect(()=>{
        fetch("http://localhost:8000/vevok")
        .then(res=>res.json())
        .then(vevok=>setVevok(vevok))
        .catch(err=>alert(err));
    },[refresh]);

    return (
        <div>
            <h1 className="text-3xl m-5 font-bold text-center text-indigo-500">A webshop eddigi vevői:</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
                {
                    vevok.map((vevo,i)=><Vevo key={i} vevo={vevo} update={update}/>)
                }
            </div>
        </div>
    )
}

export default Vevok