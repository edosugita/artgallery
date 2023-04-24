import style from '@/styles/Modal.module.css'

export default function EditUsername() {
  return (
    <>
        <div className="modal fade" id="editUsername" tabindex="-1" aria-labelledby="editUsernameLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h1 className="modal-title fs-5" id="editUsernameLabel">Edit Username</h1>
                        <button type="button" className={style.btn_close} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className={`modal-body ${style.modal_body}`}>
                            <label for="surname" className="form-label">NEW USERNAME</label>
                            <input type="text" className={style.form_control} name='surname' id="surname" placeholder="CreativeMuse" />
                        </div>
                        <div className={style.modal_footer}>
                            <button type="submit" className="btn btn-danger">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
