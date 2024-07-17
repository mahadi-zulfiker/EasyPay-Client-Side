import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <section className="grid place-items-center p-6 bg-[url('/loginbg.jpg')] bg-cover h-screen">
            <div className="absolute z-10 bg-black w-full h-screen bg-opacity-30"></div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl  border  bg-white relative z-20">
                <h1 className="text-3xl font-bold text-center">Login</h1>
                <form action="" className="space-y-6">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" name="email" id="email" placeholder="user@domain.com" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                    </div>
                    <div className="space-y-1 relative">
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            type={showPass ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full px-4 py-3 border rounded-md border-gray-400" />
                        <span onClick={() => setShowPass(!showPass)} className="absolute right-2 top-[40%]">
                            {
                                showPass ? <FaEyeSlash className="w-5 h-5" />
                                    : <FaEye className="w-5 h-5" />
                            }
                        </span>

                        <div className="flex justify-end text-sm ">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-xl font-semibold text-center rounded-md text-gray-50 bg-blue-600">Login</button>
                </form>
                {/* redirect to register */}
                <p className="text-center sm:px-6">Don&apos;t have an account?
                    <Link to='/register' className="underline text-blue-600"> Register</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;