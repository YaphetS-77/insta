import Item from "antd/lib/list/Item";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { subsc, users } from "../api/api";
import Header from "../components/header";

const Subs = () => {
    const local = localStorage.getItem('toke');
    const params = useParams();
    const id = params.id;
    const subs = subsc.filter(i => i.user_id == local);
    console.table(subs)
    const UserLogged = () => {
        if (local == null) {
            window.location.href = '/';
        }
    }
    useEffect(() => {
        UserLogged();
    }, []);
    return (
        <div className="container-fluid height">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <a className="text-dark" href="/profile"><i class="fa-solid fa-arrow-left-long fa-3x"></i></a> <big><b class="ps-4 text">Nursultan</b></big>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 p-4">
                            <i class="sd fa-solid fa-magnifying-glass"></i><input class="as" placeholder="Поиск" type="text" name=""></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <big><b className="text">Категории</b></big>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 ps-5">
                            <img className="q" src="https://html5css.ru/css/img_fjords.jpg"></img>
                        </div>
                        <div className="col-md-10">
                            <big><b>Меньше всего взаимодействий</b></big><br></br>
                            <big><b className="text-secondary">Aibek и еще 3</b></big><br></br>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 ps-5">
                            <img className="q" src="https://html5css.ru/css/img_fjords.jpg"></img>
                        </div>
                        <div className="col-md-10">
                            <big><b>Чаще всего показываются в ленте</b></big><br></br>
                            <big><b className="text-secondary">realmadrid и еще 10</b></big><br></br>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 ps-5">
                            <img className="q" src="https://html5css.ru/css/img_fjords.jpg"></img>
                        </div>
                        <div className="col-md-10">
                            <big><b>Хэштеги, авторы и компании</b></big><br></br>
                            <big><b className="text-secondary"></b></big><br></br>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6">
                            <big><b className="text">Сортировка: По умолчанию</b></big>
                        </div>
                        <div className="col-6 d-md-flex justify-content-end">
                            <a className="text-dark" href="/lenta"><i class="fa-solid fa-arrow-down-up-across-line fa-2x"></i></a>
                        </div>
                    </div>
                    {subs != null || subs?.length > 0 ?
                        <>
                            {subs.map((item) =>
                                <div className="row mt-4">
                                    <div className="col-md-2 ps-5">
                                        <Link to={"/userprofile/" + item.sub_id}><img className="q" src={item.follower_avatar}></img></Link>
                                    </div>
                                    <div className="col-md-7 pt-1">
                                    <Link className="text-dark" to={"/userprofile/" + item.sub_id}> <big><b>{item.follower_name}</b></big><br></br>
                                        <big><b className="text-secondary">{item.follower_name}</b></big></Link>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-secondary p-1 ps-4 pe-4 mt-2 ms-4"><big><b>Подписки</b></big></button>
                                    </div>
                                    <div className="col-1 d-md-flex justify-content-end pt-2">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                    </div>
                                </div>
                            )}
                        </>
                        : <>Нет публикаций</>
                    }
                </div>
            </div>
        </div>
    )
}
export default Subs;