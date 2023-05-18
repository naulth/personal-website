import {Link} from 'react-router-dom'
import Hayden from "./Images/Hayden.jpeg"

function About() {

    return(
        <div className="bg-gray-950 flex flex-row h-screen px-20">
            <div className="m-auto text-left w-1/2">
                <p className="text-cyan-100 font-thin text-lg pt-10"><span className="text-cyan-300">My name is Hayden</span>, and I am a full stack software engineer. I began my adventure into the realm of technology and computers in 2012, when I built my first PC. Since then, I have learned the ins and outs of PC hardware, overclocking, cooling, and most importantly, bug-fixing.</p>

                <p className="text-cyan-100 font-thin text-lg pt-10">My career began in Theatre and remains a life-long passion. Whether contributing as a carpenter, stage manager, technical director, and more, I developed the skills necessary to thrive in each role and create art that was engaging and beautful. I've been a personal trainer, using my experience in the gym and bodybuilding to help others achieve their goals. Also, I've spent time as a Registered Representative, facilitating cash and margin trades in stocks, mutual funds, ETFs, and options. </p>

                <p className="text-cyan-100 font-thin text-lg pt-10">Whether it be woodworking, bodybuilding, financial services, or web applications, I have always had a drive to learn, understand, and create. This passion drove me to <span className="text-amber-200">Flatiron School</span>, where I could further my education and dive deeper into the world of technology. I graduated from the software engineering program as a <span className="text-amber-200">full stack web developer.</span></p>

                <p className="text-cyan-100 font-thin text-lg pt-10">I am seeking new and thrilling opportunities to grow my abilities as a developer and contribute to projects that will showcase my current skills. My current stack includes proficiency in <span className="text-amber-200">HTML/CSS, JavaScript utilizing React, and Python employing SQLAlchemy and Flask.</span> I am eager to expand my repertoire and I am well-aquainted with fast-paced, team-oriented environments that emphasize time management, organization, and hard deadlines (thank you Theatre). If you are looking for a developer that is driven to learn and produce high-quality projects, <span><Link className="text-cyan-300" to="/contact">I would love to speak with you</Link> </span>about potential opportunities.</p>

                <p className="text-cyan-100 font-thin text-lg pt-10">In my free time I enjoy learning new technologies, playing videogames with friends, bodybuilding, and spending time with my partner, Kit, and our two dogs, Boulder and Joy.</p>

            </div>
            <div className="m-auto">
                <img className="w-3/4" src={Hayden}/>
            </div>
        </div>
    )
}

export default About

