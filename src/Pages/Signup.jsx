import "../Stylesheets/Login.css"
import { Link, NavLink } from "react-router-dom";
import image from "../assets/goggle-logo.png"
import apple from "../assets/apple.png"


const Signup =()=>{
    return(
        <>

            <div class="login-container">
            
                <Link to='/'>
                    <p className="logoText">Home Styler</p>
                </Link>

                <div class="login-right">
                
                        <div class="login-create">
                            <h1>Welcome</h1>

                            <div className="w-full flex gap-2 items-center justify-center ">
                                <p className="text-white">Already have an account?</p>
                                <Link to={'/login'}
                                    className="text-[#BFA181] hover:text-red-400">
                                    Log in
                                </Link>
                            </div>
                        </div>


                        <form>

                            <div class="login-inp-placeholder">
                                <label htmlFor="">First name</label>
                                <input type="text" />
                            </div>
                            <div class="login-inp-placeholder">
                                <label htmlFor="">Last name</label>
                                <input type="text" />
                            </div>
                            <div class="login-inp-placeholder">
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div class="login-inp-placeholder">
                                <label htmlFor="">Password</label>
                                <input type="password" />
                            </div>
                            <div class="login-inp-placeholder">
                                <button id='login-dash'>Create account</button>
                            </div>


                            <div class="login-different">

                                <div class="login-border"></div>

                                <p className="text-white">Or register with  </p>

                                <div class="login-border"></div>

                            </div>


                            <div class="login-inp-placeholder">

                                <div class="w-[50%] h-full flex items-center justify-center bg-white cursor-pointer">
                                    <img 
                                        className="w-[25px] "
                                        src={image}
                                        alt=""
                                    />
                                    <p className="text-sm font-semibold">Google</p>
                                </div>

                                <div class="w-[50%] h-full flex items-center justify-center bg-white cursor-pointer">
                                    <img 
                                        className="w-[25px] "
                                        src={apple}
                                        alt=""
                                    />
                                    <p className="text-sm font-semibold">Apple</p>
                                </div>

                            </div>

                        </form>
                    
                </div>
            </div>
        
        </>
    )
}
export default Signup;
