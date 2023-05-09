import DeleteProduct from "@/components/users/DeleteProduct"
import style from '@/styles/Cart.module.css'
import Navbar from "@/components/users/Navbar"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react"

export default function Cart() {
  useEffect(() => {
    document.title = 'Art Galery'
  })

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="vh-100">
        <div className="container p-5">
          <h5 className="notif">Cart</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </th>
                <th scope="col">Nama Art</th>
                <th scope="col">Harga</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>From in Space</td>
                <td>Rp 200.000</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button className="btn badge" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>From in Space</td>
                <td>Rp 200.000</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button className="btn badge" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>From in Space</td>
                <td>Rp 200.000</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button className="btn badge" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  </div>
                </td>
                <td>From in Space</td>
                <td>Rp 200.000</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button className="btn badge" data-bs-toggle="modal" data-bs-target="#deleteProduct">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <div className="container pe-5 ps-5 fixed-bottom">
          <div className={style.checkout}>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Pilih Semua
                  </label>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="d-flex justify-content-end align-items-center gap-3">
                  <h5 className={style.h5}>Total Harga : <span>RP 2.000.000</span></h5>
                  <button className={`btn btn-danger ${style.btn}`}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <DeleteProduct />
    </>
  )
}