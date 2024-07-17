import {  useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const [showPass, setShowPass] = useState(false);
    const { setUser, setLoading } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const mobileNum = form.mobileNum.value;
        const password = form.password.value;

        const userData = {
            name,
            email,
            mobileNum,
        }
        console.log(userData);

        axiosPublic.post('/user/add', { ...userData, password })
            .then(({ data }) => {
                if (data.insertedId) {
                    toast.success("User Added");
                    axiosPublic.post('/jwt', userData)
                        .then(({ data }) => {
                            setUser(data.user);
                            setLoading(false)
                            console.log(data.user);
                            navigate('/')
                        })
                }
            });

    }

    return (
        <section className="grid place-items-center p-6 bg-[url('/loginbg.jpg')] bg-cover h-screen">
            <div className="absolute z-10 bg-black w-full h-screen bg-opacity-30"></div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl  border  bg-white relative z-20">
                <h1 className="text-3xl font-bold text-center">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                        <label htmlFor="name" className="block">Name</label>
                        <input type="text" name="name" id="name" placeholder="Mahadi Zulfiker" className="w-full px-4 py-3 border rounded-md border-gray-400" required />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" name="email" id="email" placeholder="user@domain.com" className="w-full px-4 py-3 border rounded-md border-gray-400" required />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="mobileNum" className="block">Mobile Number</label>
                        <input type="number" name="mobileNum" id="mobileNum" placeholder="01234567891" className="w-full px-4 py-3 border rounded-md border-gray-400" required />
                    </div>
                    <div className="space-y-1 relative">
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            type={showPass ? "number" : "password"}
                            name="password"
                            id="password"
                            placeholder="5-digit PIN"
                            className="w-full px-4 py-3 border rounded-md border-gray-400"
                            required
                            pattern="[0-9]{5}" title="Please enter a 5-digit number (0-9)."
                        />

                        <span onClick={() => setShowPass(!showPass)} className="absolute right-2 top-[50%]">
                            {
                                showPass ? <FaEyeSlash className="w-5 h-5" />
                                    : <FaEye className="w-5 h-5" />
                            }
                        </span>
                    </div>
                    <button className="block w-full p-3 text-xl font-semibold text-center rounded-md text-gray-50 bg-blue-600">Register</button>
                </form>
                {/* redirect to register */}
                <p className="text-center sm:px-6">Already have an account?
                    <Link to='/login' className="underline text-blue-600">Login</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;