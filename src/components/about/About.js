import "./About.css"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">

                </div>
                <div className="a-card">
                    <img
                    src="https://images.pexels.com/photos/9737456/pexels-photo-9737456.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                    className="a-img"
                    />
                </div>
        
            </div>
            <div className="a-right">
                <h1 className="a-title" >About me</h1>
                <p className="a-sub">
                    So This picture you can see is just a pic, this is not mine anyways I am a programmer and I 
                    do what I love to I make websites like this, I can do some editing, I can do web scrapping,
                    I can do lots of things this is not mine final portfolio many more things are coming soon...
                </p>
        
            </div>

        </div>
        
    );
}

export default About;
