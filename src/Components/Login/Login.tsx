import React from "react"
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {AuthLoginType} from "../../types/entities";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {StateType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validators";
import {FormsInput} from "../common/FormsControls";
import s from "./Login.module.css";


function LoginForm(props: InjectedFormProps<AuthLoginType>) {
    return <form onSubmit={props.handleSubmit} className={s.form}>
        <Field
            placeholder={"email"} name={"email"}
            validate={[required]} component={FormsInput}/>
        <Field
            placeholder={"password"} name={"password"}
            validate={[required]} component={FormsInput} type={"password"}/>
        <label><Field name={"rememberMe"} type={"checkbox"} component={"input"}/>remember me</label>
        <button>login</button>
    </form>;
}

const LoginReduxForm = reduxForm<AuthLoginType>({form: "login"})(LoginForm)

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<StateType, boolean>(state => state.auth.isAuth)
    const userId = useSelector<StateType, number>(state => state.auth.id)
    const onSubmit = (formData: AuthLoginType) => {
        dispatch(login(formData))
    }
    if (isAuth)
        return <Redirect to={`/profile/${userId}`}/>
    else
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}

