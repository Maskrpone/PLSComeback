import React,{ useState } from 'react';
import "./../App.css";
import {Link} from "react-router-dom";

const Page_emprunt=()=>{
    const [searchTerm, setSearchTerm] = useState('');


    const [users, setUsers] = useState([
        new User("Raspberry", "1", "20/05/2023", "21/05/2023"),
        new User("Microcontroleur", "2", "26/08/2023", "26/08/2023"),
        new User("Perceuse", "3", "07/11/2023", "13/11/2023")
    ]);


    const filteredUsers = users.filter(user =>
        user.ID.includes(searchTerm)
        + user.nom_objet.toLowerCase().includes(searchTerm.toLowerCase())
        + user.date_prevu.includes(searchTerm)
    );


    return (
        <div className="App">
            <header className="App-header">
                <Link to="/"> home</Link>
                <br/><br/>
                <div className="w-96 mb-3 xl:w-96">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-200 outline-none transition duration-300 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {/* <!--Search icon--> */}
                        <span
                            className=" input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-300 dark:text-neutral-300"
                            id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"/>
                  </svg>
              </span>
                    </div>
                </div>
                <div className="lg:w-3/4">
                    <table
                        className="min-w-96 lg:w-full mx-auto w-16 md:w-32 border-amber-100 border-solid border-2 rounded-xl overflow-auto">
                        <thead className="min-w-80 outline outline-amber-100">
                        <tr className="flex  center mb-4 ml-12 mr-10 lg:flex-none">

                            <th className="flex float-left lg:w-1/3 lg:float-none lg:flex">Product name</th>

                            <div className="flex  w-full float-right pl-36 lg:w-9/12 lg:pl-0 lg:flex-none lg:justify-start">

                                <th className="flex float-right lg:w-1/3 lg:justify-center lg:float-none lg:flex-auto">ID</th>
                                <th className="lg:hidden">/</th>
                                <th className="flex float-right lg:w-1/3 lg:float-none lg:justify-end lg:flex-auto">Return date</th>

                            </div>

                        </tr>
                        </thead>
                        <tbody>
                        {filteredUsers.length === 0 ? (
                            <tr>
                                <td colSpan="3">No result</td>
                            </tr>
                        ) : (
                            filteredUsers.map((user, index) => (
                                <tr key={index} className="block mb-4 lg:flex lg:w-full">
                                    <td className="block float-left text-left pl-10 lg:flex-auto lg:w-1/3">
                                        <p className="min-w-96 mr-5 lg:min-w-0 lg:mr-0 ">
                                            {user.nom_objet}
                                        </p>
                                    </td>
                                    <td className="block text-right lg:flex-auto lg:text-center lg:w-1/3">
                                        <p className="min-w-96 mr-5 lg:min-w-0 lg:mr-0 ">
                                            {user.ID}
                                        </p>
                                    </td>
                                    <td className="lg:justify-center block text-right lg:flex-auto lg:w-1/3">
                                        {user.date_reelle > user.date_prevu ?
                                            (
                                                <p className="min-w-96 lg:min-w-0 lg:pr-8 text-red-600">
                                                    {user.date_reelle} ({user.date_prevu})
                                                </p>
                                            ): (
                                                <p className="min-w-96 lg:min-w-0 lg:pr-8">
                                                    {user.date_reelle}
                                                </p>
                                            )
                                        }


                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
                <br/><br/>
            </header>
        </div>
    );
}

function User(nom_objet, ID, date_prevu, date_reelle) {
    this.nom_objet = nom_objet;
    this.ID = ID;
    this.date_prevu = date_prevu;
    this.date_reelle = date_reelle;
}

export default Page_emprunt