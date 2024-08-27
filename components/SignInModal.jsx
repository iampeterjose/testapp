import { signIn } from "next-auth/react";


const SignInModal = ({ isOpen, onClose, providers }) => {
    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
                <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                X
                </button>
                <div>
                    <h1 className='text-xl font-semibold'>Sign in</h1>
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='pb-2'>Email: </label>
                    <input type="email" className='h-14 border-2 rounded-lg px-3 py-2 sm:text-base'/>
                    <label className='mt-2 pb-2'>Password: </label>
                    <input type="password" className='h-14 border-2 rounded-lg px-3 py-2 sm:text-base'/>
                    <button className='bg-blue-500 text-white mt-6 h-14 rounded-full hover:bg-blue-700'>Login</button>
                </div>

                <div className='flex flex-col mt-8'>
                    <button href='#' className='hover:underline underline-offset-4'>Sign up</button>
                    {providers && 
                        Object.values(providers).map((provider) => (
                        <button 
                            key={provider.name}
                            className='hover:underline underline-offset-4'
                            onClick={() => signIn(provider.id)}>Sign in with Google</button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SignInModal