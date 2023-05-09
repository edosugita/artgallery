import style from '@/styles/Modal.module.css'

export default function PlaceBid() {
  return (
    <>
        <div className="modal fade" id="placeBid" tabIndex="-1" aria-labelledby="placeBidLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className={style.modal_content}>
                    <div className={style.modal_header}>
                        <h1 className="modal-title fs-5" id="placeBidLabel">Place Bid</h1>
                        <button type="button" className={style.btn_close} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className={`modal-body ${style.modal_body}`}>
                            <label htmlFor="bid" className="form-label">Place your bid more than the latest best bid!</label>
                            <input type="text" className={style.form_control} name='bid' id="bid" placeholder="Place your bid here ..." />
                        </div>
                        <div className={style.modal_footer}>
                            <button type="submit" className="btn btn-danger w-100">Place Bid</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
