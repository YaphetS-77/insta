import { useEffect } from "react";
import Header from "../components/header";

const Search = () => {
    const local = localStorage.getItem('toke');
    const UserLogged = () => {
        if (local == null) {
            window.location.href = '/';
        }
    }
    useEffect(() => {
        UserLogged();
    }, [])
    return (
        <div>
            <div className="container-fluid height">
                <div className="row">
                    <div class="col-md-12">
                        <div class="row mt-3">
                            <div class="col-12 p-4">
                                <i class="sd fa-solid fa-magnifying-glass"></i><input class="as" placeholder="Поиск" type="text" name=""></input>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 p-1">
                                <img class="mb-1" src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg" width="100%" height="200"></img>
                                <img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pitwEMgApKZgHkMYMHLl7I52GUhs8UYQo4CCIox6IxfFQt9CrGCNnRhU77pIniCMPN4&usqp=CAU" width="100%" height="200"></img>
                            </div>
                            <div class="col-8 p-0 pt-1">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" width="100%" height="405"></img>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-4 p-1">
                                <img className="" src="https://wallpapers.com/images/high/serengeti-national-park-beautiful-sunset-wye4z6rsu51zb6mo.jpg" width="100%" height="230"></img>
                            </div>
                            <div className="col-4 p-1">
                                <img className="" src="http://media.pixcove.com/K/3/6/Scenery-Set-Vacation-Travel-Africa-Sunset-Free-Ima-6390.jpg" width="100%" height="230"></img>
                            </div>
                            <div className="col-4 p-1">
                                <img className="" src="https://images.pling.com/img/00/00/50/43/77/1258860/5f4a3e86b85e6e2fdfadb6e3b83ae5e5b97e.jpg" width="100%" height="230"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Header></Header>
        </div>
    )
}
export default Search;