import questoes from "../bancoDeQuestoes";

export default (req, res) => {
    // retorna todas as questão relacionadas ao form.
    res.status(200).json(questoes.map(questao => questao.id));
};