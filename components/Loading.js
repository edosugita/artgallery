export default function Loading() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}