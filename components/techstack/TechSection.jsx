import { GrPrevious, GrNext } from "react-icons/gr";
import { css, mongodb, mysql, html, javascript, fastapi, node, sklearn, 
  tensorflow, python, react, java, c, nextjs, springboot,
  powerbi, excel, langchain, vectordbs
 } from './imports';
 import techimages from "./imports";
import { useState } from "react";

const TechSection = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentTech = techimages[currentIndex];
    const length = techimages.length;

    return (
        <div className="pf__techstack_section shadow-drop-center">
            <div className='pf__techstack_navbuttons'
                onClick={() => setCurrentIndex((currentIndex - 1 + length) % length)}
            >
                <GrPrevious color="white" />
            </div>
            <div className='pf__techstack'>
                <h3 id='caption'>{currentTech.title}:</h3>
                {currentTech.techs.map((tech) => (
                    <div key={tech.name} data-tool={tech.name}>
                        <img src={tech.icon} alt={tech.name} />
                    </div>
                ))}
            </div>
            <div className='pf__techstack_navbuttons'
                onClick={() => setCurrentIndex((currentIndex + 1) % length)}
            >
                <GrNext color="white" />
            </div>
        </div>
    );
}

export default TechSection;