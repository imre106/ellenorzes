import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UjVevo() {
    const navigate = useNavigate();
    const felvetel = () => {
        fetch("http://localhost:8000/vevok", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
    }

    let formObj = {
        nev: "",
        iranyitoszam: "",
        telepules: "",
        utcahazszam: ""
    }

    const [formData, setFormData] = useState(formObj)

    const onSubmit = (e) => {
        e.preventDefault();
        felvetel();
        navigate('/');
    }

    const writeFormData = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Új vevő felvitele
                    </h2>

                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form method="POST" onSubmit={onSubmit}>
                            <div>
                                <label for="mezo" className="block text-sm font-medium leading-5  text-gray-700">Név</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="nev" name="nev" type="text" required value={formData.nev} onChange={writeFormData} className=" input input-bordered input-info appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>


                            <div className="mt-6">
                                <label for="mezo2" className="block text-sm font-medium leading-5  text-gray-700">
                                    Irányítószám
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="iranytoszam" name="iranyitoszam" type="text" required value={formData.iranytoszam} onChange={writeFormData} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                </div>
                            </div>

                            <div className="mt-6">
                                <label for="mezo2" className="block text-sm font-medium leading-5  text-gray-700">
                                    Település
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="telepules" name="telepules" type="text" required value={formData.telepules} onChange={writeFormData} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                </div>
                            </div>

                            <div className="mt-6">
                                <label for="mezo2" className="block text-sm font-medium leading-5  text-gray-700">
                                    Utca, házszám
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input id="utcahazszam" name="utcahazszam" type="text" required value={formData.utcahazszam} onChange={writeFormData} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />

                                </div>
                            </div>

                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        Új felhasználó rögzítése
                                    </button>
                                </span>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UjVevo