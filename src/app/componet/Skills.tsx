import React from 'react'
import SkillsItems from './SkillsItems'
import SkillsLanguge from './SkillsLanguge'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] bg-[#09101a]'>
        <h1 data-aos="fade-up"
        data-aos-duration="4000" data-aos-delay="1500" className='heading'>Education & <span className='text-purple-400'>Skill</span>
        </h1>
        <div data-aos="fade-up"
         data-aos-duration="4000" data-aos-delay="1500" className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillsItems title="React Developer" year="2018 - 2019"/>
                <SkillsItems  title="MERN Stack Developer" year="2019 - 2021" />
                <SkillsLanguge 
                skill1="Html"
                skill2="CSS" 
                skill3="Javascript"
                level1= "w-[90%]"
                level2= "w-[85%]"
                level3= "w-[80%]"

                />
            </div>
            <div>
            <SkillsItems  title="Next js Developer" year="2021 - 2022"/>
             <SkillsItems  title="Node js Developer" year="2022 - 2023"/>
            <SkillsLanguge  
                skill1="React js"
                skill2="Next js" 
                skill3="Typescript"
                level1= "w-[80%]"
                level2= "w-[75%]"
                level3= "w-[60%]"/>
            </div>

        </div>
        </div>
  )
}

export default Skills