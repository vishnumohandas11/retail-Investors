import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Portfolio } from './components/Portfolio';
import { Sidebar } from './components/common/Sidebar';
import { RInvestorContext } from './state/context';
import { RInvestorReducer } from './state/reducer';
import { Questions, initialState } from './state/state';
import { UserProfileEdit } from './components/user/UserProfileEdit';
import { UserProfile } from './components/user/UserProfile';
import { ChatModal } from './components/ChatModal';
import { Calculator } from './components/calculator/Calculator';
import { FAQ } from './components/Faq';
import { Questionspage } from './components/Questionaire/Questionspage';
import { Playgrond } from './components/playground/Playground';
import questionsData from './mock/questions.json';
import { ActionType } from './state/actions';

function App() {
  const [state, dispatch] = useReducer(RInvestorReducer, initialState);

  useEffect(() => {
    const mockquestions: Questions = questionsData;
    dispatch({
      type: ActionType.SetQuestions,
      payload: mockquestions 
   });
  }, []);

  return (
    <RInvestorContext.Provider value={{ state, dispatch }}>
      <div className="wrapper">
        {!state.isLoggedIn?.loginStatus ? (<Router>
          <Sidebar />
          <Header />
          {/*<!-- Sections -->*/}
          <div className="content-page" style={{ position: 'relative' }}>
            <div className="container-fluid" style={{ width: 'auto', height: 'auto' }}>
              <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/questions" element={<Questionspage />} />
                <Route path="/user-edit" element={<UserProfileEdit />} />
                <Route path="/user-profile" element={<UserProfile />} />
                {/* <Route path="/calculator" element={<Calculator />} /> */}
                <Route path="/playground" element={<Playgrond />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
              {/* <div className='chat-button iq-icons-list'><button type="button" className="btn btn-primary mt-2 btn-with-icon" data-toggle="modal" data-target=".bd-example-modal-lg"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>AI Chatbot</button></div>
              <ChatModal />*/}
            </div> 
          </div>
          <Footer />
        </Router>) :
          <Login />
        }
      </div>
    </RInvestorContext.Provider>
  );
}

export default App;
