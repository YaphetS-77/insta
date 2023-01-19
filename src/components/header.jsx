import { useEffect } from "react";
import { Link } from "react-router-dom";
import { users } from "../api/api";
const Header = () => {
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
        <div className="container fixed-bottom ps-4 pe-4">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="row bg-dark p-3">
                        <div className="col-md-2 d-md-flex justify-content-end ">
                            <Link className="text-light" to="/lenta"><i class="fa-solid fa-house fa-3x"></i></Link>
                        </div>
                        <div className="col-md-2 d-md-flex justify-content-end ">
                            <Link className="text-light" to="/search"><i class="fa-solid fa-magnifying-glass fa-3x"></i></Link>
                        </div>
                        <div className="col-md-2 d-md-flex justify-content-end ">
                            <Link className="text-light" to="/post"><i class="fa-solid fa-square-plus fa-3x"></i></Link>
                        </div>
                        <div className="col-md-2 d-md-flex justify-content-end ">
                            <Link className="text-light" to="/notif"><i class="fa-solid fa-heart fa-3x"></i></Link>
                        </div>
                        <div className="col-md-2 d-md-flex justify-content-end ">
                            <Link className="text-dark" to="/profile"><img class="c" src={userDetails[0].avatar} width="55" height="55"></img></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
export default Header;