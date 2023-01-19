import { useEffect } from "react";
import { users } from "../api/api";

const Chats = () => {
    const local = localStorage.getItem('toke');
    const userDetails = users.filter(i => i.id == local);
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
                        <div class="col-1">
                            <a className="text-dark" href="/chat"><i class="fa-solid fa-arrow-left-long fa-3x"></i></a>
                        </div>
                        <div className="col-md-1">
                            <img className="q" src={userDetails[0].avatar}></img>
                        </div>
                        <div className="col-md-5 pt-1">
                            <big><b>{userDetails[0].name}</b></big><br></br>
                            <big><b className="text-secondary">{userDetails[0].name}</b></big>
                        </div>
                        <div className="col-5 d-md-flex justify-content-end">
                            <i class="fa-solid fa-phone fa-3x pe-5"></i>
                            <i class="fa-solid fa-video fa-3x pe-3 ps-2"></i>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 d-md-flex justify-content-start text-light">
                            <p className="bg-primary border p-2">
                                adadsdasdasddsa
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-12 d-md-flex justify-content-end text-light">
                            <p className="bg-success border p-2">dfgdfgdfgdfgdf<br></br>
                            asddsadsadasd</p>
                        </div>
                    </div>
                    <div className="row fixed-bottom mb-4">
                        <div className="col-12">
                            <b className="bg-secondary pt-3 pb-3 mus"><i class="fa-solid fa-camera fa-2x text-dark ps-3 pe-3 pt-2"></i></b>
                            <input placeholder="Отправить сообщение" className="inpu ps-3 text-dark"></input>
                            <i class="fa-solid fa-microphone ps-4 text-dark fa-2x"></i>
                            <i class="fa-solid fa-image fa-2x ps-4"></i>
                            <i class="fa-solid fa-masks-theater fa-2x ps-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chats;