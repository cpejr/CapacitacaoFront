import React, {useState} from 'react'

import Header from './Header'
import QuestionCard from './QuestionCard'
import './Pronto.css'

const questions = [
    {
        question: 'Qual animal você mais se identifica?',
        options: ['Águia', 'Leão', 'Gato', 'Cachorro']
    },
    {
        question: 'Qual o seu maior defeito?',
        options: ['Fico bravo(a) atoa', 'Fico ansioso(a) a toa', 'Sou preguiçoso(a)', 'Sou avarento(a)']
    },
    {
        question: 'Se você pudesse ter um super poder, qual seria?',
        options: ['Voar', 'Superforça', 'Controlar mentes', 'Acabar com a fome no mundo']
    },
]

export default function Pronto(){
    const [answers, setAnswers] = useState([])

    function setAnswer(index, value){
        answers[index] = value
        setAnswers(answers)
    }

    function handleSubmit(){
        alert('Carolíticos!')
    }

    return(
        <div style={{height: '100%'}}>
            <Header/>
            <div className='content'>
                <div className='Title'>TESTE DE AURA</div>
                <div className='AuraTest'>
                    <div className='questionsContainer'>
                        {questions.map((index, question) => {
                            return <QuestionCard question={question} setAnswer={setAnswer} key={index}/>
                        })}
                    </div>
                    <div className="buttonContainer">
                        <button className='submitButton' onClick={handleSubmit}>VER RESULTADO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}