import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { RInvestorContext } from '../../state/context';
import { ActionType } from '../../state/actions';

export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    const navigate = useNavigate();
    const { dispatch } = React.useContext(RInvestorContext);

    function onUserMenuClick(targetName: string) {
		switch (targetName) {
			case "UserProfile":
				navigate('/user-profile');
				break;
			case "UserEdit":
				navigate('/user-edit');
				break;
			case "PrivacySetting":
				navigate('/privacySetting');
				break;
			case "Logout":
                dispatch({
                    type: ActionType.SetUserLoggedIn,
                    payload: {isLoggedIn: false}
                 });
				navigate('/');
				break;
			

			default:
				break;
		}
	}

    return (
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="side-menu-bt-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary wrapper-menu" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" width="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                <li className="nav-item nav-icon dropdown">
                                    <a href="#" className="search-toggle dropdown-toggle" id="notification-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span className="bg-primary"></span>
                                    </a>
                                    <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="notification-dropdown">
                                        <div className="card shadow-none m-0 border-0">
                                            <div className="p-3 card-header-border">
                                                <h6 className="text-center">
                                                    Notifications
                                                </h6>
                                            </div>
                                            <div className="card-body overflow-auto card-header-border p-0 card-body-list" style={{ maxHeight: '500px' }}>
                                                <ul className="dropdown-menu-1 overflow-auto list-style-1 mb-0">
                                                    <li className="dropdown-item-1 float-none p-3">
                                                        <div className="list-item d-flex justify-content-start align-items-start">
                                                            <div className="avatar">
                                                                <div className="avatar-img avatar-danger avatar-20">
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="list-style-detail ml-2 mr-2">
                                                                <h6 className="font-weight-bold">Digital Gold Rate Increased </h6>
                                                                <p className="m-0">
                                                                    <small className="text-secondary">Invest to digital gold</small>
                                                                </p>
                                                                <p className="m-0">
                                                                    <small className="text-secondary">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mr-1" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                        3 hours ago</small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="dropdown-item-1 float-none p-3">
                                                        <div className="list-item d-flex justify-content-start align-items-start">
                                                            <div className="avatar">
                                                                <div className="avatar-img avatar-success avatar-20">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                                                    </svg> </div>
                                                            </div>
                                                            <div className="list-style-detail ml-2 mr-2">
                                                                <h6 className="font-weight-bold">New message form advisor</h6>
                                                                <p className="m-0">
                                                                    <small className="text-secondary">You have 3 unreded messages</small>
                                                                </p>
                                                                <p className="m-0">
                                                                    <small className="text-secondary">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary mr-1" width="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>
                                                                        5 hours ago</small>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="card-footer text-muted p-3">
                                                <p className="mb-0 text-primary text-center font-weight-bold">Show all notifications</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon dropdown">
                                    <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="../assets/images/Flag/flag001.png" className="img-fluid rounded-circle" alt="user" style={{ height: '30px', minWidth: '30px', width: '30px' }} />
                                        <span className="bg-primary"></span>
                                    </a>
                                    <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <div className="card shadow-none m-0 border-0">
                                            <div className=" p-0 ">
                                                <ul className="dropdown-menu-1 list-group list-group-flush">
                                                    <li className="dropdown-item-1 list-group-item  px-2"><a className="p-0" href="#"><img src="../assets/images/Flag/Flag_of_Sweden.png" alt="img-flaf" className="img-fluid mr-2" style={{ width: '15px', height: '15px', minWidth: '15px' }} />Swedish</a></li>
                                                    <li className="dropdown-item-1 list-group-item  px-2"><a className="p-0" href="#"><img src="../assets/images/Flag/Flag_of_Norway.png" alt="img-flaf" className="img-fluid mr-2" style={{ width: '15px', height: '15px', minWidth: '15px' }} />Norwegian</a></li>
                                                    <li className="dropdown-item-1 list-group-item  px-2"><a className="p-0" href="#"><img src="../assets/images/Flag/flag001.png" alt="img-flaf" className="img-fluid mr-2" style={{ width: '15px', height: '15px', minWidth: '15px' }} />English</a></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon search-content">
                                    <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <svg className="svg-icon text-secondary" id="h-suns" height="25" width="25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </a>
                                    <div className="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                                        <form action="#" className="searchbox p-2">
                                            <div className="form-group mb-0 position-relative">
                                                <input type="text" className="text search-input font-size-12" placeholder="type here to search..." />
                                                <a href="#" className="search-link">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon dropdown">
                                    <a href="#" className="nav-item nav-icon dropdown-toggle pr-0 search-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                        <img src="../assets/images/user/1.jpg" className="img-fluid avatar-rounded" alt="user" />
                                        <span className="mb-0 ml-2 user-name">Vishnu Das</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                        <li className="dropdown-item d-flex svg-icon">
                                            <svg className="svg-icon mr-0 text-secondary" id="h-01-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <a href="#" onClick={(event) => onUserMenuClick("UserProfile")}>My Profile</a>
                                        </li>
                                        <li className="dropdown-item d-flex svg-icon">
                                            <svg className="svg-icon mr-0 text-secondary" id="h-02-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            <a href="#" onClick={(event) => onUserMenuClick("UserEdit")}>Edit Profile</a>
                                        </li>
                                        
                                        <li className="dropdown-item d-flex svg-icon">
                                            <svg className="svg-icon mr-0 text-secondary" id="h-04-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                            <a href="#" onClick={(event) => onUserMenuClick("PrivacySetting")}>Privacy Settings</a>
                                        </li>
                                        <li className="dropdown-item  d-flex svg-icon border-top">
                                            <svg className="svg-icon mr-0 text-secondary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <a href="#" onClick={(event) => onUserMenuClick("Logout")}>Logout</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
