
function Cv(){
  return <div className='card' >
    <Img/>
    <Paragraph/>
    <Skills/>
  </div>
}
























function Img(){
    return <img src="OIP.jfif" alt="photo" />
}
function Paragraph(){
    return <p>my name is mohamed. i am a web deveolper . i made many projects by react</p>
}
function Skills(){
    return (
    <div className='skills'>
        <Skill skill="HTML"  colour="blue"  />
        <Skill skill="CSS"  colour="green" />
        <Skill skill="JS" colour="yellow"  />
        <Skill skill="GITHUB"  colour="brown" />
        <Skill skill="REACT" colour="red"  />
        <Skill skill="TYPESCRIPT" colour="blue"  />
    </div>
    )
}

function Skill(props){
    const color = props.colour ;
    const obj = {
        backgroundColor : color 
    }
    // eslint-disable-next-line react/prop-types
    return <div style={obj  }  className="skill">{props.skill}</div>
}
export default Cv;