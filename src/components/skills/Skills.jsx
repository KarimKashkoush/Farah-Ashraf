import "./skills.css"
import Computer from "./Computer"
import Personal from "./Personal"
import Language from "./Language"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">
                Skills
            </h2>
            <span className="section-subtitle">
                My technical level
            </span>

            <div className="skills-container container grid">
                <Computer />
                <Personal />
                <Language />
            </div>
        </section>
    )
}

export default Skills
