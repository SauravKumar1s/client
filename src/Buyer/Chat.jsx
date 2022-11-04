import React from 'react'
import demo from "../Assests/cardImg.svg"

import "../css/Chat.css"

const Chat = () => {
    return (
        <>


            <div className="card__container">
                <div className="cardLeft__container">
                    <h3 className='cardLeft__p_first'>You</h3>
                    <div className="cardLeft__p">
                        <p>hey</p>
                    </div>
                    <h3 className='cardLeft__p_first'>Robert</h3>
                    <div className="cardLeft__p">
                        <p>hello i need help with my construction project</p>
                    </div>
                    <div className="cardLeft__first_disable">
                        <div className="cardLeft__first_disable_date">
                            <p>30 Oct</p>
                            <div className="date_flex">
                                <h4><b>Robert</b></h4>
                                <h4> Added revison</h4>
                            </div>
                        </div>
                        <div className="button__logo">
                            <button style={{ color: "#FD4100" }}><i class="fa-solid fa-recycle"></i></button>
                        </div>
                    </div>
                    <div className="cardLeft__first_enable">
                        <div className="cardLeft__first_enable_date" style={{ borderColor: "00A711" }}>
                            <p>30 Oct</p>
                            <div className="date_flex">
                                <h4 className='green_heading_h4' style={{ color: "#00A711" }}><b>Robert</b></h4>
                                <h4> delevered the files</h4>
                            </div>
                        </div>
                        <div className="button__logo">
                            <button><i class="fa-solid fa-box-open"></i></button>
                        </div>
                    </div>
                    <div className="cardLeft__first_disable">
                        <div className="cardLeft__first_disable_date">
                            <p>30 Oct</p>
                            <div className="date_flex">
                                <h4><b>Robert</b></h4>
                                <h4> Mark the order as completed</h4>
                            </div>
                        </div>
                        <div className="button__logo">
                            <button><i class="fa-solid fa-circle-check"></i></button>
                        </div>
                    </div>
                    <div className="cardLeft__first_enter_text">
                        <textarea className='cardLeft__first_enter_text_textarea' placeholder='Enter Text' id="textarea" name="textarea" rows="3" cols="20"></textarea>
                        <div className="cardLeft__first_enter_copyButton">
                            <button className='clipButton'><i class="fa-sharp fa-solid fa-paperclip"></i></button>
                            <button className='button_send'>Send</button>
                        </div>
                    </div>
                </div>
                <div className="cardRight__container">
                    <div className="cardRight__time_container">
                        <h4>Timer</h4>
                        <h4><b>4 days : 35 min : 43 sec</b></h4>
                    </div>
                    <div className="card_border_div">
                    <div className="cardRight__img">
                        <img src={demo} alt="img__card" />
                        <div className="cardRight__avtarImg">
                            <img src="" alt="avtar" />
                            <div className="avatar_desc">
                                <p><b>Avataer</b></p>
                                <p>Construction Manager</p>
                            </div>
                        </div>
                    </div>

                    <div className="cardRight__orderStatus">
                        <div className="orderStatus__orderedBy">
                            <h5 className="orderStatus">Order by</h5>
                            <h5 className="orderStatus_result">Robert</h5>
                        </div>
                        <div className="orderStatus__ordereDate">
                            <h5 className="orderStatus">Delevery Date</h5>
                            <h5 className="orderStatus_result">1 Nov</h5>
                        </div>
                        <div className="orderStatus__orderPrice">
                            <h5 className="orderStatus">Total Price</h5>
                            <h5 className="orderStatus_result">$439</h5>
                        </div>
                        <div className="orderStatus__orderStatus">
                            <h5 className="orderStatus">Status</h5>
                            <h5 className="orderStatus_result_green">Delivered</h5>
                        </div>
                    </div>

                    </div>
                    <div className="deliverNow__button">
                        <button className="deliver__button">DELIVER NOW</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Chat
