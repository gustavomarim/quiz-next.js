import styles from "../styles/Resultado.module.css";
import { useRouter } from "next/router";
import Botao from "../components/Botao";
import Estatistica from "../components/Estatistica";

export default function resultado() {

    const router = useRouter();

    const total = +router.query.total;
    const certas = +router.query.certas;
    const percentual = Math.round((certas / total) * 100);

    let corFundoPercentualAcertos = () => {
        if (percentual <= 33) {
            return "#de6a33";
        } else if (percentual >= 33 && percentual <= 66) {
            return "#ffa500 ";
        } else {
            return "#9CD2A4";
        }
    };

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{
                display: "flex",
            }}>
                <Estatistica texto="Perguntas" valor={total} />
                <Estatistica texto="Respostas Certas" valor={certas}
                    corFundo="#9CD2A4" />
                <Estatistica texto="Percentual de Acertos" valor={`${percentual}%`}
                    corFundo={corFundoPercentualAcertos()}
                />
            </div>
            <Botao href="/" texto="Tentar Novamente" />
        </div>
    );
};