import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Setpro = () => {
    const local = localStorage.getItem('toke');
    const UserLogged = () => {
        if(local ==null){
            window.location.href = '/';
        }
    }
    useEffect (() => {
        UserLogged ();
    },[]);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div class="row">
                        <div class="col-4 p-3">
                            <Link className="text-dark" to="/profile"><i class="fa-solid fa-x pr-5 fa-2x"></i></Link>
                        </div>
                        <div className="col-5">
                            <big><h1>Редактировать профиль</h1></big>
                        </div>
                        <div className="col-3 d-md-flex justify-content-end p-3">
                            <i class="fa-solid fa-check fa-2x pl-4"></i>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12 d-flex justify-content-center">
                            <img class="rounded-circle" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" width="250" height="250"></img>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 d-flex justify-content-center">
                            <a className="a" href=""><big><h2>Изменить фото профиля</h2></big></a>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <big><b>Имя</b></big><br></br>
                            <input placeholder="" class="zx" type="text" name=""></input>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <big><b>Имя пользователя</b></big><br></br>
                            <input placeholder="" class="zx" type="text" name=""></input>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <big><b class="text-secondary">Биография</b></big><br></br>
                            <input placeholder="" class="zx" type="text" name=""></input>
                        </div>
                    </div><hr></hr>
                    <div class="row">
                        <div class="col-12">
                            <a className="a" href=""><big><b>Переключиться на профессиональный ак...</b></big></a>
                        </div>
                    </div><hr></hr>
                    <div class="row">
                        <div class="col-12">
                            <a className="a" href=""><big><b>Настройки личной информации</b></big></a>
                        </div>
                    </div><hr></hr>
                    <div class="row">
                        <div class="col-12">
                            <a className="a" href=""><big><b>Создать аватар</b></big></a>
                        </div>
                    </div><hr></hr>
                </div>
            </div>
        </div>
    )
}
export default Setpro;