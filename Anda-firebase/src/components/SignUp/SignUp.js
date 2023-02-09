import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if(password !== confirmPassword){
            setError('Your Password did not match please try again!');
            return
        }

        if(password.length < 6){
            setError('Password should be 6 character or more!')
            return
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                navigate('/login');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }
    return (
        <div className="w-full mx-auto max-w-md rounded-xl border border-[#95A0A7] p-11 my-16">
            <p className='text-themeOrange-10 font-bold text-center'>{error}</p>
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block dark:text-gray-400">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name!" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-themeOrange-10" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email!" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:border-themeOrange-10" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-themeOrange-10" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="confirmPassword" className="block dark:text-gray-400">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-themeOrange-10" required />
                </div>
                <button className="block w-full p-3 text-center rounded-sm bg-themeOrange-10 text-themeWhite text-xl">Sign Up</button>
            </form>
            <p className="text-sm text-center sm:px-6 text-gray-400 mt-2">Already have an account?
                <Link to="/login" className="text-themeOrange-10"> Login</Link>
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

export default SignUp;