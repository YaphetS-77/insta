import { useEffect } from "react";
import { Link } from "react-router-dom";

const Chat = () => {
    const local = localStorage.getItem('toke');
    const UserLogged = () => {
        if(local ==null){
            window.location.href = '/';
        }
    }
    useEffect (() => {
        UserLogged ();
    },[])
    return (
        <div container-fluid>
            <div className="row">
                <div className="col-md-12">
                    <div class="row">
                        <div class="col-6">
                            <a className="text-dark" href="/lenta"><i class="fa-solid fa-arrow-left-long fa-3x"></i></a> <big><b class="ps-4 text">Nursultan</b></big> <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <div class="col-6 d-md-flex justify-content-end">
                            <i class="fa-solid fa-video fa-3x pe-4"></i> <i class="fa-solid fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <div class="row mt-3 ps-3">
                        <div class="col-md-12">
                            <i class="r fa-solid fa-magnifying-glass"></i><input class="e" placeholder="Поиск" type="text" name=""></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                        <div className="col-md-1">
                            <img class="q" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img><br></br>
                            <small class="m">Nursultan</small>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <b class="text ps-2"><big>Сообщения</big></b>
                        </div>
                        <div className="col-md-6">
                            <a class="d-md-flex justify-content-end a text pe-2" href=""><big><b>Запросы</b></big></a>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-1">
                            <img class="rounded-circle float-left me-3" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" width="70" height="70"></img>
                        </div>
                        <div className="col-md-10">
                            <Link className="text-dark a" to="/chats"><p class="text"><b>Nursultan</b><br></br>
                                <small>В сети 5ч. назад</small></p></Link>
                        </div>
                        <div className="col-md-1">
                            <i class="fa-solid fa-camera d-md-flex justify-content-end fa-3x pt-4"></i>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-1">
                            <img class="rounded-circle float-left me-3" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" width="70" height="70"></img>
                        </div>
                        <div className="col-md-10">
                            <p class="text"><b>Nursultan</b><br></br>
                                <small>В сети 5ч. назад</small></p>
                        </div>
                        <div className="col-md-1">
                            <i class="fa-solid fa-camera d-md-flex justify-content-end fa-3x pt-4"></i>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-1">
                            <img class="rounded-circle float-left me-3" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" width="70" height="70"></img>
                        </div>
                        <div className="col-md-10">
                            <p class="text"><b>Nursultan</b><br></br>
                                <small>В сети 5ч. назад</small></p>
                        </div>
                        <div className="col-md-1">
                            <i class="fa-solid fa-camera d-md-flex justify-content-end fa-3x pt-4"></i>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-1">
                            <img class="rounded-circle float-left me-3" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" width="70" height="70"></img>
                        </div>
                        <div className="col-md-10">
                            <p class="text"><b>Nursultan</b><br></br>
                                <small>В сети 5ч. назад</small></p>
                        </div>
                        <div className="col-md-1">
                            <i class="fa-solid fa-camera d-md-flex justify-content-end fa-3x pt-4"></i>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-1">
                            <img class="rounded-circle float-left me-3" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" width="70" height="70"></img>
                        </div>
                        <div className="col-md-10">
                            <p class="text"><b>Nursultan</b><br></br>
                                <small>В сети 5ч. назад</small></p>
                        </div>
                        <div className="col-md-1">
                            <i class="fa-solid fa-camera d-md-flex justify-content-end fa-3x pt-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chat;