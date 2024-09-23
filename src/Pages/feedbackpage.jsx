import React from "react";
import '../Stylesheets/feedbackpage.css'
import { FaComments } from "react-icons/fa";


const FeedbackPage =()=>{
    return(
        <>
                <div className="feedbackContainer">
                    <div className="feedbackBox">
                        <div className="feedbackTop">
                            <div className="feedback">
                                <FaComments className="Fac"/>
                                <p>Feedback</p>
                            </div>
                        </div>
                        <div className="feedbackMain">
                            <h2>How are you feeling?</h2>
                            <p>Your feedback is an invaluable asset in helping us understand your taste and tailor our services to give the best </p>
                            <div className="emoji">
                                <div className="emojiOne">😌
                                    <p className="textt">Very Bad</p>
                                </div>
                                <div className="emojiTwo">🙁
                                <p className="textt">Bad</p>
                                </div>
                                <div className="emojiThree">😍
                                <p className="textt">Good</p>
                                </div>
                                <div className="emojiFour">😊
                                <p className="textt">Very Good</p>
                                </div>
                                <div className="emojiFive">🤩
                                <p className="textt">Awesome</p>
                                </div>
                            </div>
                            <div className="messages">
                                <textarea name="" id="textarea" placeholder="Comments" ></textarea>
                            </div>
                            <button type="submit" className="submit">Submit</button>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default FeedbackPage;