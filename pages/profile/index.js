import Footer from "@/components/users/Footer"
import Navbar from "@/components/users/Navbar"
import { useEffect } from "react"

export default function Profile() {
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
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}