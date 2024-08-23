const ProfileNav = ({toggleNav, isOpen}) => {
    return (
        <>
        <div
            className={`fixed top-0 left-0 h-full bg-slate-50 text-slate-900 transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-64 z-50 shadow-xl`}
        >
            <button
            onClick={toggleNav}
            className="absolute top-4 right-4 p-2 w-10 h-10 bg-slate-200 rounded-full"
            >
            X
            </button>
            <nav className="mt-16">
            <ul className="text-slate-900">
                <li className="p-4 hover:text-slate-50 hover:bg-coffee"><a href="#home">Profile Settings</a></li>
                <li className="p-4 hover:text-slate-50 hover:bg-coffee"><a href="#services">Transactions</a></li>
                <li className="p-4 hover:text-slate-50 hover:bg-coffee"><a href="#about">Sign Out</a></li>
            </ul>
            </nav>
        </div>

        {/* Overlay to close side nav when clicking outside */}
        <div
            className={`fixed inset-0 bg-black opacity-50 transition-opacity ${
            isOpen ? 'block' : 'hidden'
            } z-40`}
            onClick={toggleNav}
        >
        </div>
        </>
    )
}

export default ProfileNav