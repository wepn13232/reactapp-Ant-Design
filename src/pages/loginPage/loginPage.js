import React, {Component} from 'react';
import {message} from 'antd';
import './loginPage.scss';
import PixDialog from "../../components/pixDialog/pixDialog";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //表单
            formValue: {
                name: "",
                password: ""
            },
            showDialog: false,
        }
    }


    //Methods============
    //登录
    login() {
        console.log(this.state.formValue.name, this.state.formValue.password)
        if (this.state.formValue.name === 'linqy' && this.state.formValue.password === '131898') {
            message.success("登录成功~！");
        } else {
            message.warning("请检查账号密码是否正确~！");
        }
    }

    //注册
    register() {
        this.changeFlag(true);
    }

    //改变弹窗显示
    changeFlag(flagVal) {
        this.setState({
            showDialog: flagVal,
        })
    }

    //显示弹窗
    showDialogFlag() {
        const showValue = {
            tips: "提示！",
            content: "暂时不提供注册哦~！"
        }
        return (
            this.state.showDialog ? (
                <PixDialog changeFlag={(flagVal) => this.changeFlag(flagVal)} showValue={showValue}/>
            ) : null
        )
    }

    //表单名字填写
    changeFormNameValue(e) {
        this.setState({
            formValue: {
                ...this.state.formValue,
                name: e.target.value,
            }
        });
    }

    //表单密码填写
    changeFormPwdValue(e) {
        this.setState({
            formValue: {
                ...this.state.formValue,
                password: e.target.value,
            }
        })
    }


    //Methods__end===========


    render() {
        return (
            //登录主页
            <div className="loginPage">
                {/*登录表单*/}
                <div className="loginForm">
                    <h1 className="titleLogo">Sev3n像素风</h1>
                    {/*像素表单*/}
                    {/*用户名*/}
                    <div className="nes-field formItem">
                        <label htmlFor="name_field">用户名</label>
                        <input type="text" id="name_field" className="nes-input"
                               onChange={(e) => this.changeFormNameValue(e)}/>
                    </div>
                    {/*密码*/}
                    <div className="nes-field formItem">
                        <label htmlFor="name_field">密码</label>
                        <input type="password" id="pwd_field" className="nes-input"
                               onChange={(e) => this.changeFormPwdValue(e)}/>
                    </div>

                    <button type="button" className="nes-btn is-primary mr20" onClick={() => this.login()}>登录</button>
                    <button type="button" className="nes-btn" onClick={() => this.register()}>注册</button>
                </div>
                {/*弹窗显示*/}
                {this.showDialogFlag()}
            </div>
        );
    }
}

export default LoginPage;
