import style from '@/styles/Modal.module.css'

export default function DeleteProduct() {
  return (
    <>
        <div className="modal fade" id="deleteProduct" tabindex="-1" aria-labelledby="deleteProductLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h1 className="modal-title fs-5" id="deleteProductLabel">Hapus Produk</h1>
                        <button type="button" className={style.btn_close} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={`modal-body ${style.modal_body}`}>
                        Apakah anda yakin menghapus produk
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
