import * as React from 'react';

export interface IUserProfileProps {
}

export function UserProfile (props: IUserProfileProps) {
  return (
    <div className="row">
      <div className="col-lg-4">
         <div className="card card-block p-card">
            <div className="profile-box">
               <div className="profile-card rounded">
                  <img src="../assets/images/user/1.jpg" alt="profile-bg"
                     className="avatar-100 rounded d-block mx-auto img-fluid mb-3"/>
                  <h3 className="font-600 text-white text-center mb-0">Vishnu Das</h3>
                  <p className="text-white text-center mb-5">Stockholm, Sweden</p>
               </div>
               <div className="pro-content rounded">
                  <div className="d-flex align-items-center mb-3">
                     <div className="p-icon mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                     </div>
                     <p className="mb-0 eml">vishnudas@gmail.com</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                     <div className="p-icon mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                     </div>
                     <p className="mb-0">(123) 123 1234</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                     <div className="p-icon mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                     </div>
                     <p className="mb-0">Sweden</p>
                  </div>
                  
               </div>
            </div>
         </div>
       
      </div>
      <div className="col-lg-8">
         <div className="card card-block">
            <div className="card-header d-flex justify-content-between pb-0">
               <div className="header-title">
                  <h4 className="card-title mb-0">About Me</h4>
               </div>
            </div>
            <div className="card-body">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more
                  recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
               <h5 className="mb-2 mt-4">Address Details</h5>
               <ul className="list-unstyled mb-0">
                  <li className="mb-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit.</li>
                  <li className="mb-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     Aliquam ultrices tellus in
                     auctor blandit.</li>
                  <li className="mb-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     Etiam tincidunt erat non
                     ante sagittis bibendum.</li>
                  <li className="mb-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     Nunc malesuada massa ut
                     nisl sollicitudin semper.</li>
                  <li>
                     <svg xmlns="http://www.w3.org/2000/svg" className="text-primary mr-2" width="20" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                     </svg>
                     Fusce et arcu in dui feugiat finibus.
                  </li>
               </ul>
            </div>
         </div>
         
      </div>
   </div>
  );
}
