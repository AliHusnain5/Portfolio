import React from 'react'

const SocialIcons = () => {
  return (
    
           <div className="w-full md:w-1/3 flex justify-center p-4 mt-15">
            <div className="w-full max-w-[400px] bg-slate-500/50 rounded-[40px] flex flex-col items-center overflow-y-auto max-h-[80vh] p-4">
              
              <div className="mt-4 flex flex-row items-center justify-center gap-4">
                <div className="flex items-center justify-center h-20 w-14 rounded-[40px] border-2 border-white">
                  <span className="text-6xl font-extrabold">A</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white tracking-wider text-center md:text-left">
                  Ali <br /> Husnain
                </div>
              </div>
    
              
              <div
                className="h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] md:h-[280px] md:w-[280px] mt-4 bg-cover bg-center bg-no-repeat bg-amber-300 rounded-[40px]"
                style={{
                  backgroundImage: `url("https://scontent.fkhi22-1.fna.fbcdn.net/v/t1.6435-9/123007344_1540656889657979_2599613634740453774_n.jpg?stp=c0.112.1019.1019a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeHLxkbk3iuZeyJorGlq0SwDv7QeeFYv1_u_tB54Vi_X-9qW4XQH3W9MNJZvocudKU6S2teW2SDOmBROlKFGKWo8&_nc_ohc=aqqE3ZQYpM0Q7kNvwFiiEUk&_nc_oc=Adm231JgPif47GzprUQAjLKpsip8qBWlsHr8CA-FzMtux1rlNAAaO_L_w7EHLjIfY5w&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=ypAHZwFGMlzP2lMpLj5mSg&oh=00_AfTqsqJqHXUBNuBpKoqJULAp-Z3BGFrRuYtt9WI3OyBglA&oe=689214B3")`,
                }}
              ></div>
    
              
              <div className="text-center mt-4 text-xl">
                <p className="text-gray-400">Specialization:</p>
                <p className="-mt-2">Mern-Stack-Developer</p>
                <p className="text-gray-400 mt-2">Based in:</p>
                <p className="-mt-2">Lahore, Pakistan</p>
              </div> 
    
            
             
    
            
              <div
                
                className="py-3 px-4 mt-4 text-xl bg-red-500 rounded-2xl cursor-pointer hover:bg-red-600 transition text-center w-full"
              >
                Let's Work Together!
              </div>
            </div>
          </div>  
  )
}

export default SocialIcons
