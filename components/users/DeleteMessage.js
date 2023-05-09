import style from '@/styles/Modal.module.css'

export default function DeleteMessage() {
  return (
    <>
        <div className="modal fade" id="deleteMessage" tabIndex="-1" aria-labelledby="deleteMessageLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h1 className="modal-title fs-5" id="deleteMessageLabel">Hapus Pesan</h1>
                        <button type="button" className={style.btn_close} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={`modal-body ${style.modal_body}`}>
                        Apakah anda yakin menghapus pesan ini
                    </div>
                    <div className={style.modal_footer}>
                        <button type="button" className="btn btn-danger w-100">Hapus</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
