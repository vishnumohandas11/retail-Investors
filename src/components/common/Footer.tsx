import * as React from 'react';

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <footer className="iq-footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="#">Terms of Use</a></li>
                    </ul>
                </div>
                <div className="col-lg-6 text-right">
                    <span className="mr-1">
                        Copyright
                        <script>document.write(new Date().getFullYear())</script>© <a href="#" className="">GJ Team Demo</a>
                        All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>
    </footer> 
  );
}
