import Item from "antd/lib/list/Item";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { posts, subsc, users } from "../api/api";

const Follow = () => {
    const local = localStorage.getItem('toke');
    const userDetails = users.filter(i => i.id == local);
    const subs = subsc.filter(i => i.sub_id == local);
    console.table(subs)
    const UserLogged = () => {
        if (local == null) {
            window.location.href = '/';
        }
    }
    useEffect(() => {
        UserLogged();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <a className="text-dark" href={"/profile"}><i class="fa-solid fa-arrow-left-long fa-3x"></i></a> <big><b class="ps-4 text">{userDetails[0].name}</b></big>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12 p-4">
                            <i class="sd fa-solid fa-magnifying-glass"></i><input class="as" placeholder="Поиск" type="text" name=""></input>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 ps-5 pt-2">
                            <img className="q" src="https://html5css.ru/css/img_fjords.jpg"></img>
                        </div>
                        <div className="col-md-10">
                            <big><b>Запросы на подписку</b></big><br></br>
                            <big><b className="text-secondary">Подтвердить или игнорировать<br></br>запросы</b></big>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <big><b className="text">Категории</b></big>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 ps-5">
                            <img className="q" src="https://static.vecteezy.com/packs/media/photos/term-bg-1-c9813571.jpg"></img>
                        </div>
                        <div className="col-md-10">
                            <big><b>Аккаунты, на которые вы не<br></br>
                                подписались в ответ</b></big><br></br>
                            <big><b className="text-secondary">Nurbolot и еще 2</b></big><br></br>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 ps-5">
                            <img className="q" src="https://media.istockphoto.com/photos/jack-olanterns-line-a-dirt-path-in-a-spooky-forest-picture-id1413465758?b=1&k=20&m=1413465758&s=170667a&w=0&h=AR5TWCXZHacnQfR2lVh8iDREkKitU-NskzbjotbyWhU="></img>
                        </div>
                        <div className="col-md-10">
                            <big><b>Меньше всего взаимодействий</b></big><br></br>
                            <big><b className="text-secondary">realmadrid и еще 10</b></big><br></br>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <big><b className="text">Все подписчики</b></big>
                        </div>
                    </div>
                    {subs != null || subs?.length > 0 ?
                        <>
                            {subs.map((item) =>
                                <div className="row mt-4">
                                    <div className="col-md-2 ps-5">
                                        <Link to={"/userprofile/" + item.user_id}><img className="q" src={item.avatar}></img></Link>
                                    </div>
                                    <div className="col-md-7 pt-1">
                                    <Link className="text-dark" to={"/userprofile/" + item.user_id}> <big><b>{item.name}</b></big><br></br>
                                        <big><b className="text-secondary">{item.name}</b></big></Link>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-secondary p-1 ps-4 pe-4 mt-2 ms-4"><big><b>Удалить</b></big></button>
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
export default Follow;