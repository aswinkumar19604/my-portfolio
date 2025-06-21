import website from '../assests/ecommerce-websites.jpg'
import website1 from '../assests/employee.png'
import website2 from '../assests/website-blog.jpg'
export default function Project(){
    const config ={
        projects:[
            {
                image:website,
                description:'A ecommerce website build with MERN',
                link:'https://github.com/aswinkumar19604/ecommerce-website'
            },
            {
                image:website1 ,
                description:'created a employee management system',
                link:'https://github.com/aswinkumar19604/Employee-management-system'
            },
            {
                image:website2,
                description:'Basic Blog Website . build with Js And Mongodb',
                link:'https://github.com/aswinkumar19604/Blog-Website'
            }
        ]

    }
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white " id='projects'>
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className="className='text-4xl  border-b-4  border-secondary mb-5 w-[65px]">Projects</h1>
        <p>These are some of my best projects. I have build these React,Mern and Vanilla Css. Check Them out.</p>
        </div>
            

            </div>
            <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-3'>
                {config.projects.map((project)=>(
                    <a href={project.link}>
                    <div className='relative'>
                    <img  className='h-[160px] w-[500px]' src={project.image}/>
                    <div className='project-dec'>
                        <p className='text-center py-5'>{project.description}</p>
                        <div className='flex justify-center'>
                        <a  className ='btn'target='_blank' href={project.link}>View Project</a>
                    </div>
                    </div>
    
                    </div>
                    </a>

                ))}
                


                </div>
            
            
            
            </div>
                

    
    </section>
}