import Navbar from "@/components/admin/layouts/navbar";
import Sidebar from "@/components/admin/layouts/sidebar";

export default function Index() {
    return (
        <>
            <div className="app">
                <div className="layout">
                    {/*<Navbar />*/}
                    <Sidebar />
                </div>
            </div>
        </>
    )
}