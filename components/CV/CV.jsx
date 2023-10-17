import React, {useState} from 'react'
import '../../Styles/CV.css'
import Experience from './Experience'
import Education from './Education'
import Licenses from './Licenses'
import Skills from './Skills'
import languages from './Languages'
import Cursos from './Courses'


export default function CV(){

   const [display, setDisplay] = useState(Experience)
   const [menuItem, setMenuItem] = useState('menu-item')

   const handleExperience = () => {
    setDisplay(Experience)
    setMenuItem('active-menu-item')
    }

    const handleEducacion = () => {
        setDisplay(Education)
        setMenuItem('active-menu-item')
    }

    const handlelLanguages = () => {
        setDisplay(languages)
        setMenuItem('active-menu-item')
    }

    const handleSkills = () => {
        setDisplay(Skills)
        setMenuItem('active-menu-item')
    }

    const handleCursos = () => {
        setDisplay(Cursos)
        setMenuItem('active-menu-item')
    }
    const handleLicenses = () => {
        setDisplay(Licenses)
        setMenuItem('active-menu-item')
    }

   
    return(
        <div className='CV-box'>
            <div className="menu-section">
                <ul className="menu-list">
                    <li className={menuItem} onClick={handleExperience}>Experiencia</li>
                    <li className={menuItem} onClick={handleEducacion}>Educación</li>
                    <li className={menuItem} onClick={handlelLanguages}>Idiomas</li>
                    <li className={menuItem} onClick={handleSkills}>Skills</li>
                    <li className={menuItem} onClick={handleCursos}>Cursos</li>
                    <li className={menuItem} onClick={handleLicenses}>Licencias</li>
                </ul>
            </div>
            <div>
                {display}
            </div>
        </div>
    )
}

