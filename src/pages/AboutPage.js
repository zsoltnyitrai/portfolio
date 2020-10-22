import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Row from 'react-bootstrap/Row'
import Skills from'../components/Skills'

import html from'../images/html.png'
import css from'../images/css.png'
import js from'../images/js.png'
import bootstrap from'../images/bootstrap.png'
import github from'../images/git.png'
import react from'../images/react.png'
import jquery from'../images/jquery.jpg'
import autocad from'../images/cad.png'
import photoshop from'../images/ps.png'





const AboutPage=(props)=>{
    const skills=[
        {
            id:0,
            name:'HTML',
            src:html
        },
        {
            id:1,
            name:'CSS',
            src:css
        },
        {
            id:2,
            name:'JS',
            src:js
        },
        {
            id:3,
            name:'Bootstrap',
            src:bootstrap
        },
        {
            id:4,
            name:'Github',
            src:github
        },
        {
            id:5,
            name:'React',
            src:react
        },
        {
            id:6,
            name:'Jquery',
            src:jquery
        },
        {
            id:7,
            name:'Autocad',
            src:autocad
        },
        {
            id:8,
            name:'Photoshop',
            src:photoshop
        },
    ]

    const makeSkills=(skills)=>{
        return skills.map(skill=>{
            return (
                <Skills 
                    name={skill.name}
                    key={skill.id}  
                    src={skill.src}  
                />
            )
        })
    }

    return(
        <div>
            <Hero title={props.title}/>
            <Content >
                <div className='description'>Hello, my name is Zsolt, I am learning to be a<code> Web Developer</code>.</div>
                <div className='description'>I have a basic knowledge of:</div>
            </Content>
                
            <Row lg={3} md={4} sm={12} className='justify-content-center'>
                {makeSkills(skills)}
            </Row>
        </div>
    )
}
export default AboutPage