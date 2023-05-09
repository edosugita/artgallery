import Link from "next/link";
import {useState} from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState('false')

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="side-nav">
                <div className="side-nav-inner">
                    <ul className="side-nav-menu scrollable">
                        <li className="nav-item dropdown open">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-dashboard"></i>
                                </span>
                                <span className="title">Dashboard</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li className="active">
                                    <Link href="/">Default</Link>
                                </li>
                                <li>
                                    <Link href="index-crm.html">CRM</Link>
                                </li>
                                <li>
                                    <Link href="index-e-commerce.html">E-commerce</Link>
                                </li>
                                <li>
                                    <Link href="index-projects.html">Projects</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-appstore"></i>
                                </span>
                                <span className="title">Apps</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="app-chat.html">Chat</Link>
                                </li>
                                <li>
                                    <Link href="app-file-manager.html">File Manager</Link>
                                </li>
                                <li>
                                    <Link href="app-mail.html">Mail</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link href="#">
                                        <span>Projects</span>
                                        <span className="arrow">
                                            <i className="arrow-icon"></i>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                        <li>
                                            <Link href="app-project-list.html">Project List</Link>
                                        </li>
                                        <li>
                                            <Link href="app-project-details.html">Project Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link href="#">
                                        <span>E-commerce</span>
                                        <span className="arrow">
                                            <i className="arrow-icon"></i>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                        <li>
                                            <Link href="app-e-commerce-order-list.html">Orders List</Link>
                                        </li>
                                        <li>
                                            <Link href="app-e-commerce-products.html">Products</Link>
                                        </li>
                                        <li>
                                            <Link href="app-e-commerce-products-list.html">Products List</Link>
                                        </li>
                                        <li>
                                            <Link href="app-e-commerce-products-edit.html">Products Edit</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
									<i className="anticon anticon-build"></i>
								</span>
                                <span className="title">UI Elements</span>
                                <span className="arrow">
									<i className="arrow-icon"></i>
								</span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="avatar.html">Avatar</Link>
                                </li>
                                <li>
                                    <Link href="alert.html">Alert</Link>
                                </li>
                                <li>
                                    <Link href="badge.html">Badge</Link>
                                </li>
                                <li>
                                    <Link href="buttons.html">Buttons</Link>
                                </li>
                                <li>
                                    <Link href="cards.html">Cards</Link>
                                </li>
                                <li>
                                    <Link href="icons.html">Icons</Link>
                                </li>
                                <li>
                                    <Link href="lists.html">Lists</Link>
                                </li>
                                <li>
                                    <Link href="typography.html">Typography</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-hdd"></i>
                                </span>
                                <span className="title">Components</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="accordion.html">Accordion</Link>
                                </li>
                                <li>
                                    <Link href="carousel.html">Carousel</Link>
                                </li>
                                <li>
                                    <Link href="dropdown.html">Dropdown</Link>
                                </li>
                                <li>
                                    <Link href="modals.html">Modals</Link>
                                </li>
                                <li>
                                    <Link href="toasts.html">Toasts</Link>
                                </li>
                                <li>
                                    <Link href="popover.html">Popover</Link>
                                </li>
                                <li>
                                    <Link href="slider-progress.html">Slider & Progress</Link>
                                </li>
                                <li>
                                    <Link href="tabs.html">Tabs</Link>
                                </li>
                                <li>
                                    <Link href="tooltips.html">Tooltips</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-form"></i>
                                </span>
                                <span className="title">Forms</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="form-elements.html">Form Elements</Link>
                                </li>
                                <li>
                                    <Link href="form-layouts.html">Form Layouts</Link>
                                </li>
                                <li>
                                    <Link href="form-validation.html">Form Validation</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-table"></i>
                                </span>
                                <span className="title">Tables</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="basic-table.html">Basic Table</Link>
                                </li>
                                <li>
                                    <Link href="data-table.html">Data Table</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-pie-chart"></i>
                                </span>
                                <span className="title">Charts</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="chartist.html">Chartist</Link>
                                </li>
                                <li>
                                    <Link href="chartjs.html">ChartJs</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-file"></i>
                                </span>
                                <span className="title">Pages</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="profile.html">Profile</Link>
                                </li>
                                <li>
                                    <Link href="invoice.html">Invoice</Link>
                                </li>
                                <li>
                                    <Link href="members.html">Members</Link>
                                </li>
                                <li>
                                    <Link href="pricing.html">Pricing</Link>
                                </li>
                                <li>
                                    <Link href="setting.html">Setting</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link href="#">
                                        <span>Blog</span>
                                        <span className="arrow">
                                            <i className="arrow-icon"></i>
                                        </span>
                                    </Link>
                                    <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                        <li>
                                            <Link href="blog-grid.html">Blog Grid</Link>
                                        </li>
                                        <li>
                                            <Link href="blog-list.html">Blog List</Link>
                                        </li>
                                        <li>
                                            <Link href="blog-post.html">Blog Post</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className={`dropdown-toggle ${isOpen ? 'open' : ''}`} href="javascript:void(0);" onClick={toggleDropdown}>
                                <span className="icon-holder">
                                    <i className="anticon anticon-lock"></i>
                                </span>
                                <span className="title">Authentication</span>
                                <span className="arrow">
                                    <i className="arrow-icon"></i>
                                </span>
                            </Link>
                            <ul className="dropdown-menu" style={{ display: isOpen ? "block" : "none" }}>
                                <li>
                                    <Link href="login-1.html">Login 1</Link>
                                </li>
                                <li>
                                    <Link href="login-2.html">Login 2</Link>
                                </li>
                                <li>
                                    <Link href="login-3.html">Login 3</Link>
                                </li>
                                <li>
                                    <Link href="sign-up-1.html">Sign Up 1</Link>
                                </li>
                                <li>
                                    <Link href="sign-up-2.html">Sign Up 2</Link>
                                </li>
                                <li>
                                    <Link href="sign-up-3.html">Sign Up 3</Link>
                                </li>
                                <li>
                                    <Link href="error-1.html">Error 1</Link>
                                </li>
                                <li>
                                    <Link href="error-2.html">Error 2</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}