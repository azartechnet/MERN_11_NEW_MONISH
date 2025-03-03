import  c1  from './images/c1.jpeg';
const Home=()=>{
    return(
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={c1} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/1200x400/aaa/fff" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/1200x400/555/fff" className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            {/* Previous Button */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            {/* Next Button */}
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
   
export default Home;