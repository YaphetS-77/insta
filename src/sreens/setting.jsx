import { useEffect } from "react";
import { Link } from "react-router-dom";

const Setting = () => {
    const local = localStorage.getItem('toke');
    const UserLogged = () =>{
        if(local == null){
            window.location.href = '/';
        }
    }
    const Logout = () => {
        localStorage.removeItem('toke');
        window.location.href = '/';
        UserLogged();
    }
    useEffect (() =>{
        UserLogged();
    },[]);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div class="row">
                        <div class="col-2">
                            <Link className="text-dark" to="/profile"><i class="fa-solid fa-arrow-left-long fa-3x ps-3"></i></Link>
                        </div>
                        <div class="col-10">
                            <h2>Настройки</h2>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 p-4">
                            <i class="sd fa-solid fa-magnifying-glass"></i><input class="as" placeholder="Поиск" type="text" name=""></input>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-user-plus fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Подписки и приглашение</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-bell fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Уведомление</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-lock fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Конфиденциальность</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-shield fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Безопастность</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-bullhorn fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Реклама</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-circle-user fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Аккаунт</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-circle-radiation fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Справка</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-circle-info fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Информация</h2></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-1">
                            <a class="text-dark ps-3 a" href=""><i class="fa-solid fa-palette fa-2x"></i></a>
                        </div>
                        <div className="col-11">
                            <b><h2 className="ps-2">Тема</h2></b>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-11">
                            <i class="fa-solid fa-infinity fa-2x"></i> <b className="text"><big>Мета</big></b>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <a href=""><big><b className="text">Центр аккаунтов</b></big></a>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12">
                            <b className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est, natus aut sunt, nulla ea consequatur corrupti incidunt vitae illo corporis, obcaecati recusandae neque itaque temporibus beatae illum quia facilis.</b>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12">
                            <b className="text"><big>Входы</big></b>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12">
                            <a className="a" href=""><b className="text"><big>Добавить или переключить аккаунты</big></b></a>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12">
                            <a className="a" href="#" onClick={Logout}><b className="text"><big>Выйти из аккаунта</big></b></a>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12">
                            <a className="a" href=""><b className="text"><big>Выйти из всех аккаунтов</big></b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Setting;