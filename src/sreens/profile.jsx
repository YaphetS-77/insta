import { useEffect } from "react";
import { Link } from "react-router-dom";
import { posts, subsc, users } from "../api/api";
import Header from "../components/header";
import { Image } from 'antd';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

const Profile = () => {
    const local = localStorage.getItem('toke');
    const subs = subsc.filter(i => i.sub_id == local);
    const userDetails = users.filter(i => i.id == local);
    const userPosts = posts.filter(i => i.user_id == local);
    const userSubs = subsc.filter(i => i.user_id == local);
    const [headerShow, setHeaderShow] = useState(true);
    console.log(userPosts);
    const UserLogged = () => {
        if (local == null) {
            window.location.href = '/';
        }
    }
    useEffect(() => {
        UserLogged();
    }, [])
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
        setHeaderShow(false)
    };
    const onClose = () => {
        setOpen(false);
        setHeaderShow(true)
    };
    return (
        <div className="container-fluid height">
            <div className="row">
                <div className="col-md-12">
                    <div class="row mt-2">
                        <div class="col-6">
                            <a className="text-dark" href="#" onClick={showDrawer}><i class="fa-solid fa-lock pe-2 fa-2x"></i> <big><b class="pe-2 text">{userDetails[0].name}</b></big> <i class="fa-solid fa-angle-down pe-2 fa-2x"></i> <i class="fa-solid fa-circle text-danger fa-2x"></i></a>
                            <Drawer className="text-center" title="Добавление аккаунта" placement="bottom" onClose={onClose} open={open}>
                                <button className="ms-5 btn btn-secondary">Создать новый аккаунт</button>
                            </Drawer>
                        </div>
                        <div class="col-6 d-md-flex justify-content-end">
                            <i class="fa-regular fa-square-plus fa-3x pe-4"></i> <Link className="text-dark" to="/setting"><i class="fa-solid fa-align-justify fa-3x"></i></Link>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-4">
                            <img class="c" src={userDetails[0].avatar} width="120" height="120"></img>
                        </div>
                        <div class="col-2 pt-3">
                            <b className="text">{userPosts.length}</b><br></br>
                            <p className="text">Публика..</p>
                        </div>
                        <div class="col-3 pt-3">
                            <Link className="text-dark a" to="/follow"><big><b className="text">{subs.length}</b></big><br></br>
                                <p className="text">Подписч...</p></Link>
                        </div>
                        <div class="col-3 pt-3">
                            <Link className="text-dark a" to="/subs"> <big><b className="text">{userSubs.length}</b></big><br></br>
                                <p className="text">Подписки</p> </Link>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-10">
                            <div class="form-group">
                                <Link className="text-dark a" to="/settingprofile"><button class="form-control text-center">Редактировать профиль</button></Link>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="form-group">
                                <button class="form-control"><i class="fa-solid fa-user-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-3 ps-5">
                            <img class="z" src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" width="80" height="80"></img><br></br>
                            <small><b className="text-2">Актуальное</b></small>
                        </div>
                        <div class="col-3">
                            <img class="z" src="https://cdn.jpegmini.com/user/images/bullet-1-mobile.jpg" width="80" height="80"></img><br></br>
                            <small><b className="text-2">Актуальное</b></small>
                        </div>
                        <div class="col-3">
                            <img class="z" src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" width="80" height="80"></img><br></br>
                            <small><b className="text-2">Актуальное</b></small>
                        </div>
                        <div class="col-3 ps-5">
                            <button class="z"><i class="fa-solid fa-plus fa-5x"></i></button><br></br>
                            <small><b className="text-2">Добавить</b></small>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-6 text-center">
                            <button><i class="fa-solid fa-table-cells fa-3x"></i></button>
                        </div>
                        <div class="col-6 text-center">
                            <button><i class="fa-solid fa-id-card-clip fa-3x"></i></button>
                        </div>
                    </div>
                    <div class="row mt-2">
                        {userPosts.map((item) =>
                            <div class="col-4 p-1">
                                <a href={"/public1/" + item.id}>
                                    <Image
                                        width="100%"
                                        height={200}
                                        src={item.post_image}
                                    />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {headerShow ?
            <Header></Header>
            :<></>
}
        </div>
    )
}
export default Profile;