import * as React from 'react';
import { RInvestorContext } from '../../state/context';
import { ActionType, SetUserLoggedIn } from '../../state/actions';

export interface ILoginProps {
}

export function Login(props: ILoginProps) {
   const { dispatch } = React.useContext(RInvestorContext);
   const signIn = () => {
      dispatch({
         type: ActionType.SetUserLoggedIn,
         payload: {isLoggedIn: true}
      });
   };

   return (
      <div>
         <section className="login-content">
            <div className="container h-100">
               <div className="row align-items-center justify-content-center h-100">
                  <div className="col-md-5">
                     <div className="card">
                        <div className="card-body">
                           <div className="auth-logo">
                              <img src="../assets/images/earning.png" className="img-fluid rounded-normal" alt="logo" />
                           </div>
                           <h2 className="mb-2 text-center">Sign In</h2>
                           <p className="text-center">To Keep connected with us please login with your personal info.</p>
                           <form>
                              <div className="row">
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>Email</label>
                                       <input className="form-control" type="email" placeholder="user@gmail.com" />
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="form-group">
                                       <label>Password</label>
                                       <input className="form-control" type="password" placeholder="********" />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="custom-control custom-checkbox mb-3">
                                       <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                       <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <a href="#" className="text-primary float-right">Forgot Password?</a>
                                 </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                 <span>Create an Account <a href="#" className="text-primary">Sign Up</a></span>
                                 <button type="submit" className="btn btn-primary" onClick={signIn}>Sign In</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
