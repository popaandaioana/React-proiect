import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const [error, setError] = useState(null);
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                navigate(from, {replace: true});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <div className="w-full mx-auto max-w-md rounded-xl border border-[#95A0A7] p-11 my-24">
            <p className='text-themeOrange-10 font-bold text-center'>{error}</p>
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email!" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-themeOrange-10" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-themeOrange-10" required />
                    <div className="flex justify-end text-xs dark:text-gray-400">
                        <a rel="noopener noreferrer" href="#0">Forgot Password?</a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm bg-themeOrange-10 text-themeWhite text-xl">Login</button>
            </form>
            <p className="text-sm text-center sm:px-6 text-gray-400 mt-2">New to Anda-Shopping? 
                <Link to="/signup" className="text-themeOrange-10"> Create New Account</Link>
            </p>
            <div className="flex items-center pt-4 space-x-1 mb-3">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">Or</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full py-2 border border-[#95A0A7] rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p className='ml-3 text-[17px]'> Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;