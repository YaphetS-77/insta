
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../api/api";
import Header from "../components/header";

const Public1 = () => {
    const params = useParams();
    const id = params.id;
    const post = posts.filter(i => i.id == id);
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
        <div className="container-fluid height">
            <div className="row">
                <div className="col-12">
                    <div className="col-12 shadow-sm">
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <img class="w" src={post[0].avatar}></img>
                                <big><b class="ps-3">{post[0].name}</b></big>
                            </div>
                            <div class="col-6 d-md-flex justify-content-end">
                                <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <img width="100%" height="800" src={post[0].post_image}></img>
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
                                <big><b>Нравиться 0</b><br></br>
                                     ...<b><small>еще</small></b></big>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Header></Header>
        </div>
    )
}
export default Public1;