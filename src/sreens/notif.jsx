import { useEffect } from "react";
import Header from "../components/header";

const Notif = () => {
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <b className="text ps-3">Уведомления</b>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"></img>
                        </div>
                        <div className="col-md-10">
                            <big><b>Запросы на подписку</b></big><br></br>
                            <big><b className="text-secondary">Подтвердить или игнорировать</b></big>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <big className="text ps-3"><b>В этом месяце</b></big>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://html5css.ru/css/img_fjords.jpg"></img>
                        </div>
                        <div className="col-md-6">
                            <big><b>aweaweawe</b></big><br></br>
                            <big><b className="text-secondary">хочет подписаться</b></big><br></br>
                            <big><b className="text-secondary">на вас</b></big>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2 ms-4"><big><b>Подтв...</b></big></button> <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Удали...</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"></img>
                        </div>
                        <div className="col-md-6">
                            <big><b>Nurs</b></big><br></br>
                            <big><b className="text-secondary">хочет подписаться</b></big><br></br>
                            <big><b className="text-secondary">на вас</b></big>
                        </div>
                        <div className="col-md-4 ps-3">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2 ms-4"><big><b>Подтв...</b></big></button> <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Удали...</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <big className="text ps-3"><b>Ранее</b></big>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"></img>
                        </div>
                        <div className="col-md-8">
                            <big><b>Aibek</b></big><br></br>
                            <big><b className="text-secondary">подписалься(-ась) на</b></big><br></br>
                            <big><b className="text-secondary">ваши обновления</b></big>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-secondary p-1 ps-4 pe-4 mt-2 ms-4"><big><b>Подписки</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <big className="text ps-3"><b>Рекомендации для вас</b></big>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"></img>
                        </div>
                        <div className="col-md-8">
                            <big><b>asdasda</b></big><br></br>
                            <big><b className="text-secondary">подписан(-а) на Aib...</b></big><br></br>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Подписаться</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"></img>
                        </div>
                        <div className="col-md-8">
                            <big><b>asdasda</b></big><br></br>
                            <big><b className="text-secondary">подписан(-а) на Aib...</b></big><br></br>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Подписаться</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"></img>
                        </div>
                        <div className="col-md-8">
                            <big><b>asdasda</b></big><br></br>
                            <big><b className="text-secondary">подписан(-а) на Aib...</b></big><br></br>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Подписаться</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"></img>
                        </div>
                        <div className="col-md-8">
                            <big><b>asdasda</b></big><br></br>
                            <big><b className="text-secondary">подписан(-а) на Aib...</b></big><br></br>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Подписаться</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"></img>
                        </div>
                        <div className="col-md-8">
                            <big><b>asdasda</b></big><br></br>
                            <big><b className="text-secondary">подписан(-а) на Aib...</b></big><br></br>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Подписаться</b></big></button>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <img className="q" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"></img>
                        </div>
                        <div className="col-md-8">
                            <big><b>asdasda</b></big><br></br>
                            <big><b className="text-secondary">подписан(-а) на Aib...</b></big><br></br>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary p-1 ps-4 pe-4 mt-2"><big><b>Подписаться</b></big></button>
                        </div>
                    </div>
                </div>
            </div>
            <Header></Header>
        </div>
    )
}
export default Notif;