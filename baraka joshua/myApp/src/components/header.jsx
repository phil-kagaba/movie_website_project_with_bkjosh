
const Header  = () => {
    const buttons = [
        {name: 'About',links:'/about'},
        {name: 'Contact Us',links:'/contact'},
        {name: 'Register User',links:'/register'},
        {name: 'Login',links:'/login'}
    ];
    return(
        <>
        <nav className="px-1 py-3 shadow-md fixed w-full bg-white md:block">
            <ul className="flex space-x-32">
                <li><h1 className="text-2xl text-green-600">Online Shopping</h1></li>
                <li className="flex">
                    <input type="text" placeholder="Search your product here" className="w-72 px-2 outline-none border  rounded border-green-600" /><button className="bg-green-600 px-2 text-white">→</button>
                </li>
                <li className="mr-11 flex space-x-10">
                {buttons.map((button, index) =>(
                    <p key={index}><button className="hover:bg-green-500 py-1 px-4 rounded-full text-green-600 hover:text-white">{button.name}</button></p>
                ))}
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Header