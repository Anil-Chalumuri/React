import React, { useState } from 'react'

function AddSkill(addNewSkill) {
    function addSkill() {
        var skill = document.getElementById("txtSkill").value 
        var result =addNewSkill(skill)
        if(!result)
        document.getElementById("msg").innerText = "Duplicate Skill!";
     else
        document.getElementById("msg").innerText = "";
    }
    return (
        <>
           <h3>Add Skill</h3>
            Skill :
            <input type="text" id="txtSkill" />
            <span id="msg"></span>
            <p></p>
            <button onClick={addSkill}>Add</button>
        </>
    )
}

function ListSkills({skills,  deleteSkill}){

    function deleteCurrentSkill(skill) {
        if(!window.confirm('Do you want to delete?'))
        return;

        deleteSkill(skill) // Call function of parent 
    }   
    return (
        <>
          <h3>Skills</h3>
          <ul>
                {
                    skills.map(skill =>
                        <li key={skill}>
                            {skill}
                            &nbsp;
                            <button onClick={ () => deleteCurrentSkill(skill)}>Del</button>
                        </li>)
                }
            </ul>
        </>
    )
}

export default function TechSkills() {
    var [skills, setSkills] = useState([])

    function addSkill() {
        if(skills.includes(skill) )  // skill is already existing 
            return false;
        
        setSkills([...skills, skill])
        return true; 
    }

    function deleteSkill(skillToDelete) {
        // take all skills except the one to delete 
        var skillsToRetain = skills.filter((skill) => skill !== skillToDelete)
        setSkills([...skillsToRetain])
    }

    return (
        <>
         <AddSkill addNewSkill ={addSkill} />
         <p></p>
         <hr/>
         <p></p>
         {/* Conditional rendering */}
         {/* skills.length > 0 && 
                   <ListSkills skills={skills} deleteSkill={deleteSkill} /> */}

        { skills.length > 0 ? 
              <ListSkills skills={skills} deleteSkill={deleteSkill} /> :
              <h4>Sorry! No skills yet!</h4>} 
        </>
    )
}