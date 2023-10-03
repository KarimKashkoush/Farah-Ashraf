import "./footer.css"

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Farah</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer-link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer-link">Skills</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://www.facebook.com/farah.ashraf.54540" className="footer-social-link" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/nachirum_94/" className="footer-social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/farah-ashraf-abdulaziz-5959a316a" className="footer-social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer-copy">
                &#169; Karim Kashkoush. All rigths reserved
                </span>
            </div>
        </section>
    )
}

export default Footer
