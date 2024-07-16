import { Link, useNavigate } from 'react-router-dom';
import image from '../../../public/bg-image.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';

const Registration = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const number = form.number.value;
        const password = form.password.value;

        const passwordRegex = /^\d{5}$/;

        if (!passwordRegex.test(password)) {
            toast.error('Password have to 5 digits Number');
            return;
        }

        const allinfo = { name, email, number, password };

        try {
            const response = await axios.post('http://localhost:5000/register', allinfo);
            console.log(response.data);
            navigate('/')
            toast.success('User Created Successfully');

        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <div style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} className="hero bg-base-200 min-h-screen">
                <div className="hero-content w-full">
                    <div className="bg-[#7d66ff] w-full max-w-sm">
                        <div className="p-4">
                            <h1 className="text-5xl font-extrabold text-yellow-400">S Pay</h1>
                            <h1 className="text-4xl font-bold text-yellow-400 mt-7 text-center">Register</h1>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body bg-[#7d66ff] space-y-7">
                            <div className="form-control">
                                <input
                                    className='border-b-2 w-full text-xl p-2 text-white bg-[#7d66ff] border-black focus:outline-none placeholder-gray-200'
                                    placeholder='Your Name*'
                                    type="text"
                                    name='name'
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className='border-b-2 w-full text-xl p-2 text-white bg-[#7d66ff] border-black focus:outline-none placeholder-gray-200'
                                    placeholder='Your Email*'
                                    type="email"
                                    name='email'
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className='border-b-2 w-full text-xl p-2 text-white bg-[#7d66ff] border-black focus:outline-none placeholder-gray-200'
                                    placeholder='Phone Number*'
                                    type="number"
                                    name='number'
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className='border-b-2 w-full text-xl p-2 text-white bg-[#7d66ff] border-black focus:outline-none placeholder-gray-200'
                                    placeholder='Password 5 digit Only Number *'
                                    type="password"
                                    name='password'
                                    required
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button className="py-3 hover:bg-yellow-600 bg-yellow-500 text-black text-xl">Register</button>
                            </div>
                            <h1 className='text-xl font-bold'>Have Account <Link className='text-blue-100' to="/login">Login Now</Link></h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
