import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { history, posts, users } from "../api/api";
import Header from "../components/header";

const Lenta = () => {
    const local = localStorage.getItem('toke');
    const params = useParams();
    const id = params.id;
    const userDetails = users.filter(i => i.id == local);
    const post = posts;
    const UserLogged = () => {
        if(local ==null){
            window.location.href = '/';
        }
    }
    useEffect (() => {
        UserLogged ();
    },[])
    return (
        <div className="container-fluid height">
            <div className="row">
                <div className="col-12">
                    <div className="row mt-3">
                        <div class="col-md-6">
                            <img width="150" height="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"></img> <i class="fa-solid fa-angle-down"></i>
                        </div>
                        <div class="col-md-6 d-md-flex justify-content-end pe-3">
                            <a className="text-dark" href="/chat"><i class="fa-regular fa-paper-plane fa-2x"></i></a>
                        </div>
                    </div>

                    <div class="col-12 d-flex mt-3 p-2 over">
                        <div className="div">
                            <img class="q" src={userDetails[0].avatar}></img><br></br>
                            <small class="m">Ваша ис...</small>
                        </div>
                        {history != null || history?.length > 0 ?
                            <>
                                {history.map((item) =>
                                    <div className="div">
                                        <Link to={"/story/"+item.id}><img class="q" src={item.avatar}></img><br></br></Link>
                                        <small class="m">{item.name}</small>
                                    </div>
                                )}
                            </>
                            : <>Нет публикаций</>
                        }
                    </div>
                    {post != null || post?.length > 0 ?
                        <>
                            {post.map((item) =>
                                <div className="col-12 shadow-sm">
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <img class="w" src={item.avatar}></img>
                                            <Link className="text-dark a" to={"/userprofile/"+item.user_id}><big><b class="ps-3">{item.name}</b></big></Link>
                                        </div>
                                        <div class="col-6 d-md-flex justify-content-end">
                                            <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12">
                                            <img width="100%" height="700" src={item.post_image}></img>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <i class="a fa-regular fa-heart fa-2x ps-4"></i>
                                            <i class="a fa-regular fa-comment fa-2x ps-4"></i>
                                            <i class="a fa-regular fa-paper-plane fa-2x ps-4"></i>
                                        </div>
                                        <div class="col-md-6 d-md-flex justify-content-end">
                                            <i class="fa-regular fa-bookmark fa-2x"></i>
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-12">
                                            <big><b>Нравиться 210 902</b><br></br>
                                                {item.image} ...<b><small>еще</small></b></big>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                        : <>Нет публикаций</>
                    }
                </div>
            </div>
            <Header></Header>
        </div>
    )
}
export default Lenta;