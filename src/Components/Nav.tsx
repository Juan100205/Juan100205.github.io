const NavLinks = () => {
    return(
    <div className="font-display font-light flex gap-6 text-lg " >
       <h1>&lt;/Home&gt;</h1>
       <h2>&lt;/About me&gt;</h2>
       <h3>&lt;/Skills&gt;</h3>
        <h4>&lt;Projects&gt;</h4>
    </div>
    );
};

const Nav= () => {
    return(
    <div className="w-1/2">
            <NavLinks/>

    </div>  
    );
};

export default Nav;