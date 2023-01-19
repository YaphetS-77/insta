import { message } from "antd";
import { useEffect, useState } from "react";

const Regis = () => {
    const local = localStorage.getItem('toke');
    const [value,setValue] = useState("");
    const Login = () => {
        if (value != "") {
            window.location.href = "/registrationp";
        }
        else {
            message.warning("Заполните поля!");
        }
};
    return (
        <div className="container-fluid height">
            <div className="row">
                <div className="col-md-12 text-center">
                    <big className="text"><b>Выберите имя<br></br>
                     пользователя</b></big>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <big className="text-secondary"><b>Вы всегда можете изменить его.</b></big>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">

                </div>
                <div className="col-6 form-group">
                    <input onChange={(e) => {setValue(e.target.value) }} className="form-control" placeholder="Имя пользователя"></input>
                </div>
                <div className="col-3">

                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">

                </div>
                <div className="col-6 form-group">
                    <button onClick={Login} className="form-control btn btn-primary">Далее</button>
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}

export default Regis;