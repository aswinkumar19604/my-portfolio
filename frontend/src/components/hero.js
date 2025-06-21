import hero from '../assests/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const config={
        subtitile:'Im a Mern Stack Developer',
        social :{
            link:'https://twitter.com/AswinAk55057505',
            link1:'https://facebook.com/Akaswin Akaswin',
            link2:'https://www.linkedin.com/in/aswin-ak-ak5678'
        }
    }
    return <section className='flex  flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-4xl font-hero-font'>HI ,<br/> im Developer Aswin
        <p className='text-2xl'>{config.subtitile}</p>
        </h1>
        <div className='flex py-5'>
            <a href={config.link}className='pr-5 hover:text-white'><AiOutlineTwitter size={30} /></a>
            <a href={config.link1} className='pr-5 hover:text-white'><AiOutlineFacebook size={30}/></a>
            <a href={config.link2} className='hover:text-white'><AiOutlineLinkedin size={30}/></a>
        </div>

        </div>
        <img src={hero} className=' md:w-1/3'/>
    </section>
}