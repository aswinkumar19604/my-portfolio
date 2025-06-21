import resume from '../assests/resume.jpg'
export default function Resume(){
    const config={
        link:'https://drive.google.com/file/d/1dYfKSgLEhsmD3is4a8Sc1fdFIOBAiw_w/view?usp=drive_link'
    }
    
    return <section  id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-2'>
        <div className='py-5 md:w-1/2 flex justify-end'>
            <img className='w-[200px]' src={resume}/>
        </div>
        <div className='md:w-1/2 flex justify-center md:justify-end px-3'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4  border-primary mb-5 w-[130px] '>Resume </h1>
        <p className='pb-5'>You can view my resume <a className='btn' href={config.link}>Download</a></p>
        

        </div>
            
        </div>
    </section>
    


    
}