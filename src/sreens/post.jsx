import { useEffect } from "react";
import { Link } from "react-router-dom"

const Post = () => {
    const local = localStorage.getItem('toke');
    const UserLogged = () => {
        if(local ==null){
            window.location.href = '/';
        }
    }
    useEffect (() => {
        UserLogged ();
    },[])
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 ps-4 p-3">
                            <Link className="text-dark" to="/lenta"><i class="fa-solid fa-x fa-3x"></i></Link>
                        </div>
                        <div className="col-md-4 p-3">
                            <h1><b>Новая публикация</b></h1>
                        </div>
                        <div className="col-md-4 p-3 d-md-flex justify-content-end">
                         <Link className="text-dark" to="/lenta"><i class="fa-solid fa-arrow-right fa-3x"></i></Link>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 form-group p-3">
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 form-group p-3">
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 form-group p-3">
                            <input className="form-control"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;