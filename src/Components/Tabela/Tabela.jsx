import styles from './Tabela.module.css'

function Tabela () {

    return (
        <>
            <h3 className={styles.tableTitle}>Tabela de referência</h3>
            <table >
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 18,5</td>
                        <td>Abaixo do Peso</td>
                    </tr>
                    <tr>
                        <td>Entre 18,6 e 24,9</td>
                        <td>Peso ideal</td>
                    </tr>
                    <tr>
                        <td>Entre 25 e 29,9</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>Entre 30 e 34,9</td>
                        <td>Obesidade grau I</td>
                    </tr>
                    <tr>
                        <td>Entre 35 e 39,9</td>
                        <td>Obesidade grau II</td>
                    </tr>
                    <tr>
                        <td>Acima de 40</td>
                        <td>Obesidade grau III</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabela;