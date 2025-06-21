import about from '../assests/about.png'
export default function About(){
    const config={
        line1:'Hi, my name is Aswin. I am a Mern Stack Web Developer.I build Beautiful Website with React.js and Tailwind CSS',
         line2:'I am proficient in Frontend Skills Like React.js , redux, redux toolkid,Axios, Css and many more.',
          line3:'In backend I know Node.js,Expressjs,MONGODB, and mongoose'
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5 py-2 ' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={about}/>
        </div>
        <div className='md:w-1/2 flex justify-center px-3'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4  border-primary mb-5 w-[160px] '>About Me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p className='pb-5'>{config.line2}</p> 
        <p className=''>{config.line3}</p>

        </div>
            
        </div>
    </section>
}