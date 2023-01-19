import { useEffect } from "react";
import { useState } from "react";
import { users } from "../api/api";
import Header from "../components/header";
import { Button, Checkbox, Form, Input } from 'antd';
import { message, Space } from 'antd';

const Main = () => {
    const local = localStorage.getItem('toke');
    const UserLogged = () => {
        if (local != null) {
            window.location.href = '/lenta';
        }
    }
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const Login = () => {
        if (login != "" && password != "") {
            const user = users.filter(i => i.login == login && i.password == password);
            if (user.length > 0) {
                localStorage.setItem('toke', user[0].id);
                window.location.href = "/lenta";
            } else {
                message.error('Логин или пароль неверный!');
            }
        }
        else {
            message.warning("Заполните поля!");
        }
    }
    useEffect(() => {
        UserLogged();
    }, [])
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="row">
            <div className="col-md-5 Main">
                <div className="row">
                    <div className="col-md-12 mt-3">
                        <img className="Photo" width="110" height="35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"></img>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 form-group">
                        <Form
                            name="basic"
                        labelCol={{
                            span: 0,
                        }}
                        wrapperCol={{
                            span: 0,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Телефон, имя пользователя или эл.адрес',
                                },
                            ]}
                        >
                            <Input onChange={(e) => { setLogin(e.target.value) }} className="form-control" />
                        </Form.Item>
                            </Form>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 form-group">
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Введите паполь!',
                                },
                            ]}
                        >
                            <Input.Password className="form-control" onChange={(e) => { setPassword(e.target.value) }} />
                        </Form.Item>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 d-md-flex justify-content-end">
                        <a className="a" href="">Забыли пароль?</a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 form-group">
                        <Form.Item
                            wrapperCol={{
                                offset: 0,
                                span: 0,
                            }}
                        >
                            <Button onClick={Login} type="primary form-control" htmlType="submit">
                                Войти
                            </Button>
                        </Form.Item>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <h5>Или</h5>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12 text-primary text-center">
                        <i class="fa-brands fa-facebook-square"></i> <a className="a" href=""><b><big>Войти через facebook</big></b></a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 text-center">
                        У вас нет аккаунта? <a className="a" href="/registration">Зарегистрируйся</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;