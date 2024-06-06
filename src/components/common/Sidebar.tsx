import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export interface ISidebarProps {
}

export function Sidebar(props: ISidebarProps) {
    const navigate = useNavigate();

    function onUserMenuClick(targetName: string) {
        switch (targetName) {
            case "Portfolio":
                navigate('/');
                break;
            case "UserProfile":
                navigate('/user-profile');
                break;
            case "PrivacySetting":
                navigate('/privacySetting');
                break;
            case "faq":
                navigate('/faq');
                break;
            case "calculator":
                navigate('/calculator');
                break;
            case "Questions":
                navigate('/questions');
                break;
            case "playground":
                navigate('/playground');
                break;
            case "Logout":
                navigate('/');
                break;


            default:
                break;
        }
    }

    return (
        <div>
            <div className="iq-sidebar  sidebar-default  ">
                <div className="iq-sidebar-logo d-flex align-items-end justify-content-between">
                    <a href="/" className="header-logo">
                        <img src="../assets/images/investment-64.png" className="img-fluid rounded-normal light-logo" alt="logo" />
                        <img src="../assets/images/investment-64.png" className="img-fluid rounded-normal d-none sidebar-light-img" alt="logo" />
                        <span>Investment</span>
                    </a>
                    <div className="side-menu-bt-sidebar-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-light wrapper-menu" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className="data-scrollbar" data-scroll="1">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="side-menu">
                            <li className="active sidebar-layout">
                                <a href="#" className="svg-icon" onClick={(event) => onUserMenuClick("Portfolio")}>
                                    <i className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </i>
                                    <span className="ml-2">Portfolio</span>
                                    <p className="mb-0 w-10 badge badge-pill badge-primary">6</p>
                                </a>
                            </li>
                            <li className="px-3 pt-3 pb-2">
                                <span className="text-uppercase small font-weight-bold">Pages</span>
                            </li>
                            <li className=" sidebar-layout">
                                <a href="#" className="svg-icon" onClick={(event) => onUserMenuClick("Questions")}>
                                    <i className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </i><span className="ml-2">Questions</span>
                                </a>
                            </li>

                            {/* <li className=" sidebar-layout">
                                <a href="#" className="svg-icon" onClick={(event) => onUserMenuClick("calculator")}>
                                    <i className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </i><span className="ml-2">Calculator</span>
                                </a>
                            </li> */}
                            <li className=" sidebar-layout">
                                <a href="#" className="svg-icon" onClick={(event) => onUserMenuClick("playground")}>
                                    <i className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" height="22" width="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </i><span className="ml-2">Playground</span>
                                </a>
                            </li>
                            <li className=" sidebar-layout">
                                <a href="#" className="svg-icon" onClick={(event) => onUserMenuClick("UserProfile")}>
                                    <i className="">
                                        <svg className="svg-icon" id="iq-user-1-1" xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </i><span className="ml-2">User Profile</span>
                                </a>
                            </li>
                            <li className=" sidebar-layout">
                                <a href="#" className="svg-icon" onClick={(event) => onUserMenuClick("faq")}>
                                    <i className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                    </i><span className="ml-2">Faq</span>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    <div className="pt-5 pb-5"></div>
                </div>
            </div>
        </div>
    );
}
