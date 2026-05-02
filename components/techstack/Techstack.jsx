import './techstack.css';
import { css, mongodb, mysql, html, javascript, fastapi, node, sklearn, 
  tensorflow, python, react, java, c, nextjs, springboot
 } from './imports';

const Techstack = () => {
  return (
    <>
      <div style={{ padding: '5%' }} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>Programming Languages:</h3>
        <div><img src={python} alt='Python' /></div>
        <div><img src={javascript} alt='Javascript' /></div>
        <div><img src={java} alt='Java' /></div>
        <div><img src={c} alt='C' /></div>
      </div>
      <div style={{ padding: '5%' }} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>Front-end Web Dev:</h3>
        <div><img src={html} alt='HTML' /></div>
        <div><img src={css} alt='CSS' /></div>
        <div><img src={javascript} alt='Javascript' /></div>
        <div><img src={react} alt='React.js' /></div>
        <div><img src={nextjs} alt='Next.js' /></div>
      </div>
      <div style={{padding:'5%'}} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>Backend Web Dev:</h3>
        <div><img src={fastapi} alt='fastapi' /></div>
        <div><img src={mongodb} alt='MongoDB' /></div>
        <div><img src={mysql} alt='MySQL' /></div>
        <div><img src={node} alt='Node.js' /></div>
        <div><img src={springboot} alt='SpringBoot' /></div>
      </div>
      <div style={{padding:'5%'}} className='pf__techstack shadow-drop-center'>
        <h3 id='caption'>AI & ML and GenAI:</h3>
        <div><img src={python} alt='Python' /></div>
        <div><img src={mongodb} alt='MongoDB' /></div>
        <div><img src={sklearn} alt='scikit-learn' /></div>
        <div><img src={tensorflow} alt='Tensorflow' /></div>
        <div><img src={fastapi} alt='fastapi' /></div>
        <div><img src={fastapi} alt='PowerBI' /></div>
        <div><img src={fastapi} alt='Excel' /></div>
        <div><img src={fastapi} alt='Langchain' /></div>
        <div><img src={fastapi} alt='VectorDBs' /></div>
      </div>
    </>
  )
}

export default Techstack
