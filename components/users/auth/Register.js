import style from '@/styles/Modal.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { csrfToken } from 'next-auth/react'
import { faEye, faEyeSlash, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleTogglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }

    return (
        <>
            <div className="modal fade" id="Register" tabindex="-1" aria-labelledby="RegisterLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className={style.modal_content}>
                        <div className={style.modal_header}>
                            <h1 className="modal-title fs-5" id="RegisterLabel">Register</h1>
                            <button type="button" className={style.btn_close} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            {errorMessage && <>
                                <div class="alert alert-danger text-center" role="alert">{errorMessage}</div>
                            </>}
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            <div className={`modal-body ${style.modal_body}`}>
                                <label for="surname" className="form-label">NAME</label>
                                <input type="text" className={style.form_control} name='surname' id="surname" placeholder="type your name here ..." value={name} onChange={(event) => setName(event.target.value)} required />
                            </div>
                            <div className={`modal-body ${style.modal_body}`}>
                                <label for="surname" className="form-label">USERNAME</label>
                                <input type="text" className={style.form_control} name='surname' id="surname" placeholder="type your username here ..." value={username} onChange={(event) => setName(event.target.value)} required />
                            </div>
                            <div className={`modal-body ${style.modal_body}`}>
                                <label for="email" className="form-label">EMAIL</label>
                                <input type="email" className={style.form_control} name='email' id="email" placeholder="type your email here ..." value={email} onChange={(event) => setEmail(event.target.value)} required />
                            </div>
                            <div className={`modal-body ${style.modal_body}`}>
                                <label for="password" className="form-label">PASSWORD</label>
                                <div className={style.passw}>
                                    <input type={showPassword ? 'text' : 'password'} className={style.form_control} name='password' id="password" placeholder="**********" value={password} required />
                                    <FontAwesomeIcon onClick={handleTogglePassword} className={style.icon_passw} icon={showPassword ? faEyeSlash : faEye} color='grey' />
                                </div>
                            </div>
                            <div className={`modal-body ${style.modal_body}`}>
                                <label for="cpassword" className="form-label">RE-WRITE PASSWORD</label>
                                <div className={style.passw}>
                                    <input type={showPassword ? 'text' : 'password'} className={style.form_control} name='cpassword' id="cpassword" placeholder="**********" />
                                    <FontAwesomeIcon onClick={handleTogglePassword} className={style.icon_passw} icon={showPassword ? faEyeSlash : faEye} color='grey' />
                                </div>
                            </div>
                            <div className={`modal-body ${style.modal_body}`}>
                                <label for="phone" className="form-label">NEW PHONE NUMBER</label>
                                <input type="tel" className={style.form_control} name='phone' id="phone" placeholder="+62" />
                            </div>
                            <div className={style.modal_footer}>
                                <button type="submit" className="btn btn-danger w-100 rounded-3">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
