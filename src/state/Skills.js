import React,{useState} from 'react'

export default function Skills() {


    var [skills, setSkills] = useState([])

    function addSkill(){
        let skill = document.getElementById("txtSkill").value
        //skills.find(skill)
        if (skills.includes(skill))
        {
            alert("Skill is already present!");
            return;
        }
        setSkills([...skills, skill])
        //setSkills
}

function deleteSkill(skillToDelete) {
    // take all skills except the one to delete 
    var skillsToRetain = skills.filter((skill) => skill !== skillToDelete)
    setSkills([...skillsToRetain])
}
  return (
    <>

    Skill :<input type ="text" id ="txtSkill" />
    <p></p>
    <button onClick ={addSkill}>Add</button>
    <p></p>
    <ul>
    {
                    skills.map(skill =>
                        <li key={skill}>
                            {skill}
                            &nbsp;
                            <button onClick={() => deleteSkill(skill)}>Del</button>
                        </li>)
                }
    </ul>
    </>
  )
}
