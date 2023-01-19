import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { posts, subsc, users } from "../api/api";
import Header from "../components/header";

const Userprofile = () => {
    const params = useParams();
    const id = params.id;
    const history = useNavigate();
    const local = localStorage.getItem('toke');   
    const UserLogged = () => {
        if(local == id){
            history('/profile');
        }
        if(local == null){
            window.location.href = '/';
        }
    };
    useEffect (() => {
        UserLogged ();
    },[]);
    const userDetails = users.filter(i => i.id == id);
    const subs = subsc.filter(i => i.sub_id == id);
    const userPosts = posts.filter(i => i.user_id == id);
    const userSubs = subsc.filter(i => i.user_id == id);
    return (
        <div className="container-fluid height">
            <div className="row">
                <div className="col-md-12">
                    <div class="row mt-2">
                        <div class="col-6">
                            <i class="fa-solid fa-lock pe-2 fa-2x"></i> <big><b class="pe-2 text">{userDetails[0].name}</b></big> <i class="fa-solid fa-angle-down pe-2 fa-2x"></i> <i class="fa-solid fa-circle text-danger fa-2x"></i>
                        </div>
                        <div class="col-6 d-md-flex justify-content-end">
                            <i class="fa-regular fa-square-plus fa-3x pe-4"></i> <Link className="text-dark" to="/setting"><i class="fa-solid fa-align-justify fa-3x"></i></Link>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-4">
                            <img class="c" src={userDetails[0].avatar} width="120" height="120"></img><br></br>
                            <b>{userDetails[0].name}</b>
                        </div>
                        <div class="col-2 pt-3">
                            <b className="text">{userPosts.length}</b><br></br>
                            <p className="text">Публика..</p>
                        </div>
                        <div class="col-3 pt-3">
                        <Link className="a text-dark" to={"/userfollow/"+id}><big><b className="text">{subs.length}</b></big><br></br>
                            <p className="text">Подписч...</p></Link>
                        </div>
                       <div class="col-3 pt-3">
                       <Link className="a text-dark" to={"/usersub/" + id}><big><b className="text">{userSubs.length}</b></big><br></br>
                            <p className="text">Подписки</p></Link>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-5">
                            <div class="form-group">
                                <Link className="text-dark a" to=""><button class="form-control text-center btn btn-primary">Подписаться</button></Link>
                            </div>
                        </div>
                        <div className="col-5">
                            <Link className="form-control text-center btn btn-secondary" to="">Сообщение</Link> 
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
                            <a href={"/public1/"+item.id}>
                            <img src={item.post_image} width="100%" height="200"></img>
                            </a>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <Header></Header>
        </div>
    )
}
export default Userprofile;