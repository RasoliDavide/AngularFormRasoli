export class utente
{
    nome: String;
    cognome: String;
    email: String;
    username: String;
    password: String;
    constructor(n : String, cn: String, m:String, un:String, pw:String)
    {
        this.nome = n;
        this.cognome = cn;
        this.email = m;
        this.username = un;
        this.password = pw;
    }
}