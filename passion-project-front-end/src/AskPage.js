import styled from "styled-components";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
const TitleInput = styled.input`
width: 100%;
height: 30px;
margin-bottom: 10px;
margin-top: 30px;
border: solid 2px gray;
border-radius: 5px;
color: black;
`

const TextAreaTag = styled.textarea`
width: 100%;
height: 100%;
padding: 10px;
border: solid 2px gray;
border-radius: 5px;

`
const H1Tag = styled.h1`
color: black;
font-size: 1.5rem;
font-family: arial;
`
const SubmitButton = styled.button`
background-color: rgb(27, 117, 208);
color: white;
padding: 15px;
border-radius: 5px;
border: 0;
cursor: pointer;
margin-left: 89%;
margin-top: 5px;
`


const CenterPageDiv = styled.div`
position: absolute;
  width: 400px;
  height: 300px;
  z-index: 15;
  top: 40%;
  left: 50%;
  margin: -100px 0 0 -150px;
`
function AskPage(){
const [question, setQuestion] = useState("");
const [topic, setTopic] = useState("");

const handleTopicChange = event => setTopic(event.target.value);
  const handleQuestionChange = event => setQuestion(event.target.value)
  let navigate = useNavigate(); 
        var routeChange = ()=> {
            let path = `/`; 
            navigate(path);
        }
const handleSubmitClick = ()=>{
      
    fetch('http://localhost:8080/api/questions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            title: topic,
            question: question,
            createdDate: new Date()})
      }).then(res => res.json())
        .then(res => console.log(res));
      routeChange()
}
return(
    <>
    <CenterPageDiv>
   
        <H1Tag>Ask A Question</H1Tag>
    <TitleInput placeholder="Title of your Question" onChange={handleTopicChange}></TitleInput>
    <TextAreaTag placeholder="Enter Question here" onChange={handleQuestionChange}></TextAreaTag>
    <select class="custom-select" size="3">
  <option selected>Open this select menu</option>
  <option value="1">Java</option>
  <option value="2">MySql</option>
  <option value="3">React</option>
</select>
    <SubmitButton onClick={handleSubmitClick} >Submit</SubmitButton>
    </CenterPageDiv>
    </>
)
}

export default AskPage;