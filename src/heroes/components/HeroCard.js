import { Link } from "react-router-dom"


export const HeroCard = ({ id_name, superhero, publisher, alter_ego, first_appearance, characters }) => {
    const imagepath = `../images/imagesheroesandvil/${id_name}.jpg`

    return (
        <div className="col col-sm-12 herocardresponsive">
            <div className="card cardatt">
                <div className="row no-gutters h-100">
                    <div className="col-5 ">
                        <img className="card-img-top h-100 imgatt" alt={superhero} src={imagepath} />
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <p>{superhero}</p>
                            <p>{publisher}</p>
                            <Link to={`/hero/${id_name}`}>
                                Más..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
