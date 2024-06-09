import { useState, useEffect } from "react";
import Jarat from "./Jarat";

function Jaratok() {
    const [jaratok, setJaratok] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/jaratok')
        .then(res => res.json())
        .then(jaratok => setJaratok(jaratok))
        .catch(err => alert(err));
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold bg-red-100 text-red-900 text-center p-4">Jelenlegi járatok</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-red-100">
                {jaratok.map((jarat, index) => (<Jarat key={index} jarat={jarat} />))}
            </div>
        </div>
    );
}

export default Jaratok;
