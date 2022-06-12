import banner from "../img/banner-mundial2.png"

const Banner = () => {
    return (
        <div className="bg__event container-fluid">
            <img className=" img-fluid rounded mx-auto d-block banner__img pt-2" src={banner} alt="banner-mundial"/>
        </div>
    )
}

export default Banner