import Item from "antd/lib/list/Item";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { history, posts, subsc, users } from "../api/api";
import { Image } from 'antd';

const Story = () => {
    const local = localStorage.getItem('toke');
    const params = useParams();
    const id = params.id;
    const userDetails = history.filter(i => i.user_id == id);
    const UserLogged = () => {
        if(local ==null){
            window.location.href = '/';
        }
    }
    useEffect (() => {
        UserLogged ();
    },[]);
    return (
        <div style={{backgroundImage : "url("+userDetails[0].avatar+")",backgroundSize:"cover"} } className="img">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="col-6 p-3">
                            <img class="rounded-circle" src= {userDetails[0].avatar} width="40" height="40"></img>
                            <b className="text-white ps-3"><small>{userDetails[0].name}</small></b> <small className="text-secondary ps-3"><b>6 ч.</b></small>
                        </div>
                        <div className="col-6 d-md-flex justify-content-end p-3 pe-3">
                            <i class="fa-solid fa-ellipsis-vertical text-white"></i>
                        </div>
                    </div>
                    <div className="row ow">
                        <div className="col-12">
                            <input placeholder="Отправить сообщение" className="inp ps-3 text-light"></input>
                            <i class="a fa-regular fa-heart fa-2x ps-4 text-white ps-3"></i>
                            <i class="a fa-regular fa-paper-plane fa-2x ps-4 text-white ps-3"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Story;