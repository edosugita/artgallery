import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <div className="header">
                <div className="logo logo-dark">
                    <Link href="/">
                        <Image src="/admin/images/logo/logo.png" alt="Logo" width={20} height={20} />
                        <Image className="logo-fold" src="/admin/images/logo/logo-fold.png" alt="Logo" width={20} height={20} />
                    </Link>
                </div>
                <div className="logo logo-white">
                    <Link href="/">
                        <Image src="/admin/images/logo/logo-white.png" alt="Logo" width={20} height={20} />
                        <Image className="logo-fold" src="/admin/images/logo/logo-fold-white.png" alt="Logo" width={20} height={20} />
                    </Link>
                </div>
                <div className="nav-wrap">
                    <ul className="nav-left">
                        <li className="desktop-toggle">
                            <Link href="#">
                                <i className="anticon"></i>
                            </Link>
                        </li>
                        <li className="mobile-toggle">
                            <Link href="#">
                                <i className="anticon"></i>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" data-toggle="modal" data-target="#search-drawer">
                                <i className="anticon anticon-search"></i>
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav-right">
                        <li className="dropdown dropdown-animated scale-left">
                            <Link href="#" data-toggle="dropdown">
                                <i className="anticon anticon-bell notification-badge"></i>
                            </Link>
                            <div className="dropdown-menu pop-notification">
                                <div
                                    className="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
                                    <p className="text-dark font-weight-semibold m-b-0">
                                        <i className="anticon anticon-bell"></i>
                                        <span className="m-l-10">Notification</span>
                                    </p>
                                    <Link className="btn-sm btn-default btn" href="#">
                                        <small>View All</small>
                                    </Link>
                                </div>
                                <div className="relative">
                                    <div className="overflow-y-auto relative scrollable" style="max-height: 300px">
                                        <Link href="#"
                                           className="dropdown-item d-block p-15 border-bottom">
                                            <div className="d-flex">
                                                <div className="avatar avatar-blue avatar-icon">
                                                    <i className="anticon anticon-mail"></i>
                                                </div>
                                                <div className="m-l-15">
                                                    <p className="m-b-0 text-dark">You received a new message</p>
                                                    <p className="m-b-0"><small>8 min ago</small></p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="#"
                                           className="dropdown-item d-block p-15 border-bottom">
                                            <div className="d-flex">
                                                <div className="avatar avatar-cyan avatar-icon">
                                                    <i className="anticon anticon-user-add"></i>
                                                </div>
                                                <div className="m-l-15">
                                                    <p className="m-b-0 text-dark">New user registered</p>
                                                    <p className="m-b-0"><small>7 hours ago</small></p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="#"
                                           className="dropdown-item d-block p-15 border-bottom">
                                            <div className="d-flex">
                                                <div className="avatar avatar-red avatar-icon">
                                                    <i className="anticon anticon-user-add"></i>
                                                </div>
                                                <div className="m-l-15">
                                                    <p className="m-b-0 text-dark">System Alert</p>
                                                    <p className="m-b-0"><small>8 hours ago</small></p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link href="#" className="dropdown-item d-block p-15 ">
                                            <div className="d-flex">
                                                <div className="avatar avatar-gold avatar-icon">
                                                    <i className="anticon anticon-user-add"></i>
                                                </div>
                                                <div className="m-l-15">
                                                    <p className="m-b-0 text-dark">You have a new update</p>
                                                    <p className="m-b-0"><small>2 days ago</small></p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown dropdown-animated scale-left">
                            <div className="pointer" data-toggle="dropdown">
                                <div className="avatar avatar-image  m-h-10 m-r-15">
                                    {/*<img src="assets/images/avatars/thumb-3.jpg" alt="">*/}
                                </div>
                            </div>
                            <div className="p-b-15 p-t-20 dropdown-menu pop-profile">
                                <div className="p-h-20 p-b-15 m-b-10 border-bottom">
                                    <div className="d-flex m-r-50">
                                        <div className="avatar avatar-lg avatar-image">
                                            {/*<img src="assets/images/avatars/thumb-3.jpg" alt="">*/}
                                        </div>
                                        <div className="m-l-10">
                                            <p className="m-b-0 text-dark font-weight-semibold">Marshall Nichols</p>
                                            <p className="m-b-0 opacity-07">UI/UX Desinger</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#" className="dropdown-item d-block p-h-15 p-v-10">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i className="anticon opacity-04 font-size-16 anticon-user"></i>
                                            <span className="m-l-10">Edit Profile</span>
                                        </div>
                                        <i className="anticon font-size-10 anticon-right"></i>
                                    </div>
                                </Link>
                                <Link href="#" className="dropdown-item d-block p-h-15 p-v-10">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i className="anticon opacity-04 font-size-16 anticon-lock"></i>
                                            <span className="m-l-10">Account Setting</span>
                                        </div>
                                        <i className="anticon font-size-10 anticon-right"></i>
                                    </div>
                                </Link>
                                <Link href="#" className="dropdown-item d-block p-h-15 p-v-10">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i className="anticon opacity-04 font-size-16 anticon-project"></i>
                                            <span className="m-l-10">Projects</span>
                                        </div>
                                        <i className="anticon font-size-10 anticon-right"></i>
                                    </div>
                                </Link>
                                <Link href="#" className="dropdown-item d-block p-h-15 p-v-10">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <i className="anticon opacity-04 font-size-16 anticon-logout"></i>
                                            <span className="m-l-10">Logout</span>
                                        </div>
                                        <i className="anticon font-size-10 anticon-right"></i>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <Link href="#" data-toggle="modal" data-target="#quick-view">
                                <i className="anticon anticon-appstore"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}