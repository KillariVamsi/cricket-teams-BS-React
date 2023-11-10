export const Header_list = () => {
    return (
        <div>
            <div id="header" className="text-center p-3 bg-danger-subtle">
                <a className="p-4 text-decoration-none text-black" > Home </a>
                <a className="p-4  text-decoration-none text-black"> Index </a>
                <a className="p-4  text-decoration-none text-black"> About </a>
                <a className="p-4  text-decoration-none text-black"> Contact </a>
            </div>
            <div>
                <h3> Top 5 ICC Teams in WCC@2023 </h3>
                <ol>
                    <li><a className="text-dark text-decoration-none" href="./index.html#india"> India</a></li>
                    <li><a className="text-dark text-decoration-none" href="./index.html#SA"> South Africa</a></li>
                    <li><a className="text-dark text-decoration-none" href="./index.html#aus"> Australia </a></li>
                    <li><a className="text-dark text-decoration-none" href="./index.html#newz"> NewZealand </a></li>
                    <li><a className="text-dark text-decoration-none" href="./index.html#pak"> Pakistan </a></li>
                </ol>
            </div>
        </div>
    )
}

export default Header_list
