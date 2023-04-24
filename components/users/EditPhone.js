import style from '@/styles/Modal.module.css'

export default function EditPhone() {
  return (
    <>
        <div className="modal fade" id="editPhone" tabindex="-1" aria-labelledby="editPhoneLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h1 className="modal-title fs-5" id="editPhoneLabel">Edit Phone Number</h1>
                        <button type="button" className={style.btn_close} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className={`modal-body ${style.modal_body}`}>
                            <label for="telp" className="form-label">NEW PHONE NUMBER</label>
                            <input type="telp" className={style.form_control} name='telp' id="telp" placeholder="+628123123123" />
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
