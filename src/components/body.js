import Git from './git.png'
import HTML from './html-1.png' 
import CSS from './css-3.png' 
import JS from './javascript.png' 
import Re from './react-2.png'

export default function Body(){
    return(
        <div className="continer">
            <div className="person">
                <div className="personInfo">
                    <h1>Front-End React Developer</h1>
                    <p>Hi i'm Bhavaharan Edara. A passionate Front-end React Devolper</p>
                    <div className="profiles">

                        <a className="profile" rel="noreferrer" targt="_blank" href="https://www.linkedin.com/in/bhavaharan-edara-58b91b1ba/" ><img src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png" height="35px" alt="linkedin"/></a>
                        <a className="profile " rel="noreferrer" target="_blank" href="https://github.com/BhavaharanEdara"  ><img className="git"src={Git} height="35px" alt="github"/></a>
                    </div>
                </div>
                <div className="personImg">
                    <div className='img'></div>
                </div>
            </div>
            <div className="textstack">
                <h4>Text Stack</h4>
                <ul className="skills">
                    <li >
                        <img className="logoImg"  src={HTML} alt="HTML" height="35px" />
                    </li>
                    <li >
                        <img className="logoImg" src={CSS} alt="HTML" height="35px" />
                    </li>
                    <li >
                        <img className="logoImg" src={JS} alt="HTML" height="35px" />
                    </li>
                    <li>
                        <img className="logoImg" src={Re} alt="HTML" height="35px" />
                    </li>
                </ul>
            </div>
        
        </div>
    )
}