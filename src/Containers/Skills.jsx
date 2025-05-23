import React from 'react'
import TitleSection from './TitleSection'
import Lottie from 'lottie-react'
import language from '../assets/lottile/Language.json'
import database from '../assets/lottile/Database.json'
import tollss from '../assets/lottile/tools.json'
import SkillLogo from './SkillLogo'
import Marquee from 'react-fast-marquee'

export default function Skills() {
    return (
        <>
            <TitleSection title={'Skills'} />
            <Marquee direction='right' gradient={true} gradientColor='#0E0E1B' pauseOnHover={true}>
                <div className="skills-container grid grid-cols-8 md:grid-cols-6 gap-5 w-[1200px] mt-5 md:w-[1515px]">
                    <SkillLogo iconName='FaHtml5' logoName={'HTML'}></SkillLogo>
                    <SkillLogo iconName='FaCss3Alt' logoName={'CSS'}></SkillLogo>
                    <SkillLogo iconName='SiTailwindcss' logoName={'Tailwind'}></SkillLogo>
                    <SkillLogo iconName='BiLogoJavascript' logoName={'JavaScript'}></SkillLogo>
                    <SkillLogo iconName='FaReact' logoName={'React'}></SkillLogo>
                    <SkillLogo iconName='SiNextdotjs' logoName={'Next Js'}></SkillLogo>
                    {/* 2nd */}
                    {/* <SkillLogo iconName='FaGitAlt' logoName={'Git'}></SkillLogo>
                <SkillLogo iconName='FaGithub' logoName={'GitHub'}></SkillLogo>
                <SkillLogo iconName='FaFigma' logoName={'Figma'}></SkillLogo>
                <SkillLogo iconName='RiFirebaseFill' logoName={'Firebase'}></SkillLogo>
                <SkillLogo iconName='FaAws' logoName={'AWS'}></SkillLogo>
                <SkillLogo iconName='FaWordpressSimple' logoName={'WordPress'}></SkillLogo> */}
                    {/* 3rd */}
                    {/* <SkillLogo iconName='BiLogoTypescript' logoName={'TypeScript'}></SkillLogo>
                <SkillLogo iconName='BiLogoPostgresql' logoName={'Postgres'}></SkillLogo>
                <SkillLogo iconName='SiRedux' logoName={'Redux'}></SkillLogo>
                <SkillLogo iconName='SiMongodb' logoName={'Mongodb'}></SkillLogo>
                <SkillLogo iconName='FaNodeJs' logoName={'NodeJs'}></SkillLogo>
                <SkillLogo iconName='RiRobot2Fill' logoName={'AI'}></SkillLogo> */}

                </div>
            </Marquee>
            {/* 2nd */}
            <Marquee direction='left' gradient={true} gradientColor='#0E0E1B' pauseOnHover={true}>
                <div className="skills-container grid grid-cols-8 md:grid-cols-6 gap-5 w-[1200px] mt-5 md:w-[1515px]">
                    <SkillLogo iconName='FaGitAlt' logoName={'Git'}></SkillLogo>
                    <SkillLogo iconName='FaGithub' logoName={'GitHub'}></SkillLogo>
                    <SkillLogo iconName='FaFigma' logoName={'Figma'}></SkillLogo>
                    <SkillLogo iconName='RiFirebaseFill' logoName={'Firebase'}></SkillLogo>
                    <SkillLogo iconName='FaAws' logoName={'AWS'}></SkillLogo>
                    <SkillLogo iconName='FaDocker' logoName={'Docker'}></SkillLogo>
                </div>
            </Marquee>
            {/* 3rd */}
            <Marquee direction='right' gradient={true} gradientColor='#0E0E1B' pauseOnHover={true}>
                <div className="skills-container grid grid-cols-8 md:grid-cols-6 gap-5 w-[1200px] mt-5 md:w-[1515px]">
                    {/* <SkillLogo iconName='FaHtml5' logoName={'HTML'}></SkillLogo>
                <SkillLogo iconName='FaCss3Alt' logoName={'CSS'}></SkillLogo>
                <SkillLogo iconName='SiTailwindcss' logoName={'Tailwind'}></SkillLogo>
                <SkillLogo iconName='BiLogoJavascript' logoName={'JavaScript'}></SkillLogo>
                <SkillLogo iconName='FaReact' logoName={'React'}></SkillLogo>
                <SkillLogo iconName='SiNextdotjs' logoName={'Next Js'}></SkillLogo>
                {/* 2nd */}
                    {/* <SkillLogo iconName='FaGitAlt' logoName={'Git'}></SkillLogo>
                <SkillLogo iconName='FaGithub' logoName={'GitHub'}></SkillLogo>
                <SkillLogo iconName='FaFigma' logoName={'Figma'}></SkillLogo>
                <SkillLogo iconName='RiFirebaseFill' logoName={'Firebase'}></SkillLogo>
                <SkillLogo iconName='FaAws' logoName={'AWS'}></SkillLogo>
                <SkillLogo iconName='FaWordpressSimple' logoName={'WordPress'}></SkillLogo> */}
                    {/* 3rd  */}
                    <SkillLogo iconName='BiLogoTypescript' logoName={'TypeScript'}></SkillLogo>
                    <SkillLogo iconName='BiLogoPostgresql' logoName={'Postgres'}></SkillLogo>
                    <SkillLogo iconName='SiRedux' logoName={'Redux'}></SkillLogo>
                    <SkillLogo iconName='SiMongodb' logoName={'Mongodb'}></SkillLogo>
                    <SkillLogo iconName='FaNodeJs' logoName={'NodeJs'}></SkillLogo>
                    <SkillLogo iconName='RiRobot2Fill' logoName={'AI'}></SkillLogo>

                </div>
            </Marquee>
        </>
    )
}
