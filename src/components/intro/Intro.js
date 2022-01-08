import "./Intro.css"
import me from "../../images/me.png"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                   <h2 className="i-introo">Hello, My name is</h2> 
                   <h1 className="i-name">Harshvardhan Sisodia</h1>
                   <div className="i-title">
                       <div className="i-title-wrapper">
                           <div className="i-title-item">Learner</div>
                           <div className="i-title-item">Programmer</div>
                           <div className="i-title-item">Editor</div>
                           <div className="i-title-item">Developer</div>
                           <div className="i-title-item">Designer</div>
                       </div>
                   </div>
                   <p className="i-desc">
                       This is my cute sa portfolio hope you like it and if you like it make sure
                       subscribe my channel...Ohh this is not youtube...😅 
                   </p>
                </div>
                
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img"/>
            
            </div>
        </div>
    )
}

export default Intro;
