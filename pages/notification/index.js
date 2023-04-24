import DeleteMessage from "@/components/users/DeleteMessage"
import Footer from "@/components/users/Footer"
import Navbar from "@/components/users/Navbar"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from "react"

export default function Notification() {
  useEffect(() => {
    document.title = 'Art Galery'
  })

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="container p-5">
          <h5 className="notif">Notification</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Pesan</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Congratulations on winning the bid for my artwork! Your appreciation for the piece and support for my artistic endeavors means a lot to me. I hope the painting brings you as much joy and inspiration as it brought me while creating it. Thank you for your patronage and I hope to have the opportunity to share more of my art with you in the future.</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button class="btn badge" data-bs-toggle="modal" data-bs-target="#deleteMessage">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Congratulations on winning the bid for my artwork! Your appreciation for the piece and support for my artistic endeavors means a lot to me. I hope the painting brings you as much joy and inspiration as it brought me while creating it. Thank you for your patronage and I hope to have the opportunity to share more of my art with you in the future.</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button class="btn badge" data-bs-toggle="modal" data-bs-target="#deleteMessage">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Congratulations on winning the bid for my artwork! Your appreciation for the piece and support for my artistic endeavors means a lot to me. I hope the painting brings you as much joy and inspiration as it brought me while creating it. Thank you for your patronage and I hope to have the opportunity to share more of my art with you in the future.</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button class="btn badge" data-bs-toggle="modal" data-bs-target="#deleteMessage">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Congratulations on winning the bid for my artwork! Your appreciation for the piece and support for my artistic endeavors means a lot to me. I hope the painting brings you as much joy and inspiration as it brought me while creating it. Thank you for your patronage and I hope to have the opportunity to share more of my art with you in the future.</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button class="btn badge" data-bs-toggle="modal" data-bs-target="#deleteMessage">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Congratulations on winning the bid for my artwork! Your appreciation for the piece and support for my artistic endeavors means a lot to me. I hope the painting brings you as much joy and inspiration as it brought me while creating it. Thank you for your patronage and I hope to have the opportunity to share more of my art with you in the future.</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button class="btn badge" data-bs-toggle="modal" data-bs-target="#deleteMessage">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Congratulations on winning the bid for my artwork! Your appreciation for the piece and support for my artistic endeavors means a lot to me. I hope the painting brings you as much joy and inspiration as it brought me while creating it. Thank you for your patronage and I hope to have the opportunity to share more of my art with you in the future.</td>
                <td>
                  <div className="d-flex align-items-center h-100">
                    <button class="btn badge" data-bs-toggle="modal" data-bs-target="#deleteMessage">
                      <FontAwesomeIcon icon={faTrash} color='white' className="me-2" />
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>

      <DeleteMessage />
    </>
  )
}