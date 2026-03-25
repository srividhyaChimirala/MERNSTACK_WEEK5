function Navbar(){
    return(
        <div className="flex mt-8 mb-8 ring-2 ring-black p-3 bg-blue-300">
            <h5 className="ml-16 mr-96">LOGO</h5>
            <ul className="flex ">
                <li className="mr-48 ml-96">Home</li>
                <li className="mr-48">Singup</li>
                <li className="mr-80">Login</li>
            </ul>
        </div>
    )
}
export default Navbar;