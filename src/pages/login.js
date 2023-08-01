// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Checkbox } from '@/components/checkbox';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and API call to handle login here
    console.log('Form data:', formData);

    // Redirect to the dashboard or user's homepage after login
    router.push('/homepage'); // Replace 'dashboard' with the actual route for the user's dashboard/homepage
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center text-desert bg-cream min-h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="max-w-md w-full h-96  bg-peach p-6 md:rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold outline-desert">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-peach outline-desert rounded-lg"
            />
          </div>
          <div className="relative mb-4">
            <label className="block mb-2 font-semibold ">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-peach rounded-lg outline-desert"
            />
            <span
              className="absolute right-3 top-1/2 m-4 mr-2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </span>
          </div>
          <div className='flex flex-row m-2'>
            <Checkbox />
            <div>Remember me</div>

          </div>
          <button
            type="submit"
            className="w-full py-2 m-2 bg-coral text-cream font-bold rounded-lg hover:bg-desert hover:text-peach"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
