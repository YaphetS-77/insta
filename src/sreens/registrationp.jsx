import { message } from "antd";
import { useEffect, useState } from "react";

const Regist = () => {
    const local = localStorage.getItem('toke');
    const [password,setPassword] = useState("");
    const Log = () => {
        if (password != "") {
            if (password.length >6 ) {
                window.location.href = "/lenta";
            }
            else {
                message.warning ("Пароль должен состоять из более 6 символов!");
            }
        }
        else {
            message.warning("Заполните поля!");
        }
};
    return (
        <div className="container-fluid height">
            <div className="row">
                <div className="col-md-12 text-center">
                    <big className="text"><b>Придумайте пароль</b></big>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <big className="text-secondary"><b>В целях безопасности ваш пароль должен
                        состоять из 6 или более символов.<br></br></b></big>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">

                </div>
                <div className="col-6 form-group">
                    <input onChange={ (e) => {setPassword(e.target.value) }} className="form-control" placeholder="Пароль"></input>
                </div>
                <div className="col-3">

                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">

                </div>
                <div className="col-6 form-group">
                    <button onClick={Log} className="form-control btn btn-primary">Далее</button>
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}
export default Regist;