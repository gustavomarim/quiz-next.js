import { embaralhar } from "../../../functions/array";
import questoes from "../bancoDeQuestoes";

export default (req, res) => {
    // retorna todas as questão relacionadas ao form.
    const ids = questoes.map(questao => questao.id);
    // ordem das perguntas aleatória
    res.status(200).json(embaralhar(ids));
};