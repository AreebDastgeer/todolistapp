import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { SlSocialGoogle } from "react-icons/sl";
import { FiEye, FiEyeOff } from 'react-icons/fi';


export default function SignUp() {

    const redirectToLoginPage = () => {
        router.push('/login'); // Replace 'login' with the actual route to the login page
    };
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form validation and API call to handle sign-up here
        console.log('Form data:', formData);

        // Redirect to the homepage after form submission
        router.push('/homepage');
    };
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className='text-desert'>
            <Head >
                <title >Sign Up</title>
            </Head>
            <h1 className=" flex justify-center m-4 font-extrabold text-2xl">Sign Up</h1>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="m-2 md:m-0 mb-4">
                    <label className="block mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-coral rounded-lg outline-desert"
                    />
                </div>
                <div className="m-2 md:m-0 mb-4 relative">
                    <label className="block mb-2 font-semibold">Password  (6 min characters) </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-coral rounded-lg outline-desert"
                    />
                    <span
                        className="absolute right-4 top-1/2 m-4 mr-2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                    </span>
                </div>
                <div className="m-2 md:m-0 mb-4">
                    <label className="block mb-2 font-semibold">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-coral rounded-lg outline-desert"
                    />
                </div>
                <button type="submit" className=" text-center w-80 p-2 border border-coral text-desert bg-cream rounded-full hover:bg-desert hover:text-cream m-4 drop-shadow-lg hover:drop-shadow-2xl">
                    Sign Up
                </button>
                <div className='divide-y divide-desert'>
                    <hr />
                    <h4 className='text-center'>or</h4>
                    <hr />
                </div>

                <button type="submit" className=" flex flex-row gap-2 justify-center text-center w-80 p-3 border border-coral text-desert bg-cream rounded-full hover:bg-desert hover:text-cream m-4 drop-shadow-lg hover:drop-shadow-2xl">
                    Sign up with Google
                    <SlSocialGoogle size={25} />
                </button>

                <div className='flex-flex-row gap-2 text-center'>
                    Already have an account?

                    <button type="submit" className="  text-sm w-20 h-7  text-center font-semibold p-1 border border-coral text-desert bg-cream rounded-full hover:bg-desert hover:text-cream m-4 drop-shadow-lg hover:drop-shadow-2xl" onClick={redirectToLoginPage}>
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
}
