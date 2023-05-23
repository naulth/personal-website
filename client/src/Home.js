import {Link} from 'react-router-dom'

function Home() {

    return(
        <div className="bg-gray-950 flex h-screen">
            <div className="m-auto text-left">
                <p className="text-amber-200 font-thin text-xl ">Hello, my name is</p>
                <h1 className="text-white font-thin text-9xl ">Hayden Nault</h1>
                <h2 className="text-cyan-200 font-thin text-7xl pt-10">I'm a Digital Artisan.</h2>
                <p className="text-cyan-100 font-thin text-xl pt-10">I am a <span className="text-amber-200">Full Stack Software Engineer</span> with a passion for developing engaging and user-friendly applications.</p>

                <button className="hover:bg-slate-900 hover:text-amber-100 text-amber-100 border mt-10 border-amber-200 font-medium px-4 py-2 mx-2">
                    <Link to="/contact">Let's Create Together</Link> 
                </button>
            </div>
        </div>
        
    )
}

export default Home