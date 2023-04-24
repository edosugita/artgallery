import Filters from "@/components/users/gallery/Filters";
import Footer from "@/components/users/Footer";
import Navbar from "@/components/users/Navbar";
import style from '@/styles/Gallery.module.css'
import Auction from "@/components/users/auction/Auction";
import { useEffect } from "react";

export default function Auctions() {
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
          <div className={`row ${style.row}`}>
            <div className="col-md-9 col-12 mb-4">
              <Auction />
              <nav aria-label="Page navigation example">
                <ul class="pagination pagination-sm justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-3 col-12 mb-4">
              <Filters />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
