import { Link } from "react-router-dom";
import "./Emprunt.css"


function Emprunt() {
    const pictures = [
        { title: 'Perceuse', url: 'https://cdn.toolstation.fr/images/141021-FR/250/16045.jpg' },
        { title: 'Perceuse 2', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19793.jpg' },
        { title: 'Perceuse 3', url: 'https://cdn.toolstation.fr/images/141021-FR/250/87199.jpg' },
        { title: 'Perceuse 4', url: 'https://cdn.toolstation.fr/images/141021-FR/250/24035.jpg' },
        { title: 'Perceuse 5', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 6', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 7', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 8', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 9', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 10', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 11', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 12', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },
        { title: 'Perceuse 13', url: 'https://cdn.toolstation.fr/images/141021-FR/250/19794.jpg' },

    ]

    return (
        <>
            <header>
                <h1> Emprunt d'outils </h1>
            </header>
            <div id="wrapper">
                {pictures.map((picture, index) => (
                    <div key={index} className="card" >
                        <img src={picture.url} alt={picture.title} />
                        {/* <quote>Stock:</quote> */}
                        <>{picture.title}</>

                        {/* <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                            <span class="button-text">Emprunter</span>
                        </button> */}
                    </div>
                ))}

            </div>
        </>
    )
}

export default Emprunt;