const Home = ()=>{
    return <div className="main-banner img-container dark-color">
                <div className="ed-grid lg-grid-6">
                    <div className="lg-cols-4 lg-x-2">
                        <img 
                            className="main-banner__img" 
                            src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&amp;h=750&amp;auto=compress&amp;cs=tinysrgb"
                            alt="Banner EDTeam"
                        />
                        <div className="main-banner__data s-center">
                        <p className="s-mb-0 t2">Cupcakes</p>
                        <p>Los mejores Cupcakes</p>
                        <a className="button" href="/">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
}

export default Home;