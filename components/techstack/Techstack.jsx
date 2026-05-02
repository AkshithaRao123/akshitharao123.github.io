import './techstack.css';
import { css, mongodb, mysql, html, javascript, fastapi, node, sklearn, 
  tensorflow, python, react, java, c, nextjs, springboot,
  powerbi, excel, langchain, vectordbs
 } from './imports';

const Techstack = () => {
  return (
    <>
      <div style={{ padding: '5%' }} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>Programming Languages:</h3>
        <div data-tool="Python"><img src={python} alt='Python' /></div>
        <div data-tool="Javascript"><img src={javascript} alt='Javascript' /></div>
        <div data-tool="Java"><img src={java} alt='Java' /></div>
        <div data-tool="C"><img src={c} alt='C' /></div>
      </div>
      <div style={{ padding: '5%' }} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>Front-end Web Dev:</h3>
        <div data-tool="HTML"><img src={html} alt='HTML' /></div>
        <div data-tool="CSS"><img src={css} alt='CSS' /></div>
        <div data-tool="Javascript"><img src={javascript} alt='Javascript' /></div>
        <div data-tool="React.js"><img src={react} alt='React.js' /></div>
        <div data-tool="Next.js"><img src={nextjs} alt='Next.js' /></div>
      </div>
      <div style={{padding:'5%'}} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>Backend Web Dev:</h3>
        <div data-tool="FastAPI"><img src={fastapi} alt='fastapi' /></div>
        <div data-tool="MongoDB"><img src={mongodb} alt='MongoDB' /></div>
        <div data-tool="MySQL"><img src={mysql} alt='MySQL' /></div>
        <div data-tool="Node.js"><img src={node} alt='Node.js' /></div>
        <div data-tool="SpringBoot"><img src={springboot} alt='SpringBoot' /></div>
      </div>
      <div style={{padding:'5%'}} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>AI & ML and GenAI:</h3>
        <div data-tool="Python"><img src={python} alt='Python' /></div>
        <div data-tool="MongoDB"><img src={mongodb} alt='MongoDB' /></div>
        <div data-tool="scikit-learn"><img src={sklearn} alt='scikit-learn' /></div>
        <div data-tool="Tensorflow"><img src={tensorflow} alt='Tensorflow' /></div>
        <div data-tool="FastAPI"><img src={fastapi} alt='fastapi' /></div>
        <div data-tool="PowerBI"><img src={powerbi} alt='PowerBI' /></div>
        <div data-tool="Excel"><img src={excel} alt='Excel' /></div>
        <div data-tool="Langchain"><img src={langchain} alt='Langchain' /></div>
        <div data-tool="VectorDBs"><img src={vectordbs} alt='VectorDBs' /></div>
      </div>
    </>
  )
}

export default Techstack
