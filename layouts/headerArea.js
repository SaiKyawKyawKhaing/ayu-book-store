const Header = () =>{
    return(
        <>
        <div id="page-top">

            <div className="menu-toggle rounded" href="#" onClick={()=>{console.log("min ka ayu")}}><i>abc</i></div>
        
                   
        <nav id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand"><a href="#page-top">Start Bootstrap</a></li>
                <li className="sidebar-nav-item"><a href="#page-top">Home</a></li>
                <li className="sidebar-nav-item"><a href="#about">About</a></li>
                <li className="sidebar-nav-item"><a href="#services">Services</a></li>
                <li className="sidebar-nav-item"><a href="#portfolio">Portfolio</a></li>
                <li className="sidebar-nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav> 
        </div>
        </>
    )
}

export default Header