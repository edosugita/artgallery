import style from '@/styles/Modal.module.css'

export default function EditEmail() {
  return (
    <>
        <div className="modal fade" id="editEmail" tabindex="-1" aria-labelledby="editEmailLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h1 className="modal-title fs-5" id="editEmailLabel">Edit Email</h1>
                        <button type="button" className={style.btn_close} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className={`modal-body ${style.modal_body}`}>
                            <label for="email" className="form-label">NEW EMAIL</label>
                            <input type="email" className={style.form_control} name='email' id="email" placeholder="CreativeMuse@email.com" />
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
