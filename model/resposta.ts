export default class RespostaModel {
    #valor: string;
    #certa: boolean;
    #revelada: boolean;

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    };

    // Encapsulando respostas em métodos estáticos
    static certa(valor: string) {
        return new RespostaModel(valor, true);
    };

    static errada(valor: string) {
        return new RespostaModel(valor, false);
    };

    get valor() {
        return this.#valor;
    };

    get certa() {
        return this.#certa;
    };

    get revelada() {
        return this.#revelada;
    };

    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true);
    };

    // const resp = new RespostaModel(...) => método de instância
    // resp.metodoDeInstancia()

    // RespostaModel.moetodoStatic() => método de classe

    static criarUsandoObjeto(obj: RespostaModel): RespostaModel {
        return new RespostaModel(obj.valor, obj.certa, obj.revelada);
    };

    paraObjeto() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada,
        };
    };
}

