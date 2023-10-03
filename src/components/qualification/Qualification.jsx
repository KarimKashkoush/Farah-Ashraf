import "./qualification.css"
import { useState } from "react"

const Qualification = () => {

    const [toggleState, setToggleSet] = useState(1);

    const toggleTap = (index) => {
        setToggleSet(index);
    }

    return (
        <section className="section qualification">
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle">My personal jiurney</span>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={toggleState === 1 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"}
                        onClick={()=> toggleTap(1)}
                    >
                        <i className="uil uil-graduation-cap qualification-icon"></i> Education
                    </div>
                    
                    <div className={toggleState === 2 ? "qualification-button qualification-active button--flex" : "qualification-button button--flex"}
                        onClick={()=> toggleTap(2)}
                    >
                        <i className="uil uil-briefcase qualification-icon"></i> Experience
                    </div>
                </div>

                <div className="qualification-sections">
                    <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content" }>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    College of Engineering
                                </h3>
                                <span className="qualification-subtitle">
                                    Egypt - Mansoura University
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>  2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder">

                                </span>
                                <span className="qualification-line">

                                </span>
                            </div>
                        </div>

                        {/* <div className="qualification-data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification-rounder">

                                </span>
                                <span className="qualification-line">
                                    
                                </span>
                            </div>
                            
                            <div>
                                <h3 className="qualification-title">
                                    Art Director
                                </h3>
                                <span className="qualification-subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>  2020 - 2021
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Web Development
                                </h3>
                                <span className="qualification-subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>  2016 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder">

                                </span>
                                <span className="qualification-line">

                                </span>
                            </div>
                        </div> */}

                        {/* <div className="qualification-data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification-rounder">

                                </span>
                                <span className="qualification-line">
                                    
                                </span>
                            </div>
                            
                            <div>
                                <h3 className="qualification-title">
                                    UX Expert
                                </h3>
                                <span className="qualification-subtitle">
                                    Spain - Institute
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content" }>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Content Writer
                                </h3>
                                <span className="qualification-subtitle">
                                    UCCD - Mansoura 
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>  2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder">

                                </span>
                                <span className="qualification-line">

                                </span>
                            </div>
                            
                        </div>

                        <div className="qualification-data">
                            <div>

                            </div>

                            <div>
                                <span className="qualification-rounder">

                                </span>
                                <span className="qualification-line">
                                    
                                </span>
                            </div>
                            
                            <div>
                                <h3 className="qualification-title">
                                    Content Writer
                                </h3>
                                <span className="qualification-subtitle">
                                    Tedx  - Mansoura
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        {/* <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Web Designer
                                </h3>
                                <span className="qualification-subtitle">
                                    Figma - Spain
                                </span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i>  2016 - 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder">

                                </span>
                                <span className="qualification-line">

                                </span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;
