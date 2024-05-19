import * as React from 'react';

export interface IChatModalProps {
}

export function ChatModal(props: IChatModalProps) {
    return (
        <div>
            <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">You can ask any question related to invensents</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="chat-box">
                                <div className="box">
                                    <div className="item">
                                        
                                        <div className="msg">
                                            <p>Hello, I am AI-Bot. Ask me anything</p>
                                        </div>
                                    </div>
                                    <br style={{ clear: 'both' }} />

                                    <div className="item right">
                                        <div className="msg">
                                            <p>testing chat bot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="input-group mb-4">
                                <input type="text" className="form-control" placeholder="Write your message here"
                                    aria-label="Message" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
