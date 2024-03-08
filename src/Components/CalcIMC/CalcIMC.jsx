import { useState } from "react";
import Tabela from "../Tabela/Tabela";

import styles from './CalcIMC.module.css'

function CalculaIMC () {

    const[altura, setAltura] = useState(0);
    const[peso, setPeso] = useState(0);
    const[imc, setImc] = useState(null);
    

    function calculoImc(e) {
        e.preventDefault();        
        const alturaMetros = altura/100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        setImc(imcCalculado);
    }

    const getClassificacao = () => {
        if(imc === null) return '';
        if(imc <= 18.59) return 'Você está abaixo do peso';
        if(imc >=18.6 && imc <= 24.99) return 'Você está em forma!';
        if(imc >=25 && imc <= 29.99) return 'Você está acima do peso.';
        if(imc >=30 && imc <= 34.99) return 'Você possui obesidade grau I.';
        if(imc >=35 && imc <= 39.99) return 'Você possui obesidade grau II.';
        else return 'Você possui obesidade grau III.';      
        
    }

return (
    <>
        <header>
            <h1>Calculadora de IMC</h1>
        </header>
        <section>
            <form onSubmit={calculoImc}>
                <label htmlFor="altura">Digite sua altura (cm)</label>
                <input onBlur={e => setAltura(parseInt(e.target.value))} id="altura" type="number" required/>
                <label htmlFor="altura">Digite seu peso (kg)</label>
                <input onBlur={e => setPeso(parseFloat(e.target.value))} id="altura" type="text" required/>

                <button type="submit">Calcular</button>
            </form>
        </section>
        <section>
            <Tabela />
        </section>
        <section>
            {imc !== null && (
                <>
                    <h3>O seu IMC é <span className={styles.resultado}>{imc.toFixed(2)}</span></h3>
                    <p className={styles.recado}>{getClassificacao()}</p>
                </>
            )}
        </section>
    </>
)
}

export default CalculaIMC;