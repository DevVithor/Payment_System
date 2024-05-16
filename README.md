# 💵 Payment_System

### 📖 Sobre o Projeto

<img src="https://github.com/DevVithor/Payment_System/assets/142769545/8b1c42da-fe90-4c5f-a411-154192285135" alt="efi payment">

O projeto é uma integração a Api EFI-PAY para a criação e gestão de planos de assinatura.
Desenvolvido com TypeScript e Docker, oferece automação eficiente, armazenamento seguro de dados e escalabilidade,
garantindo que as empresas possam adaptar seus modelos de negócio baseados em assinaturas de forma ágil e confiável.

### ✔️ Ajustes e melhorias 

O projeto ainda está em desenvolvimento e as próximas atualizaões serão voltadas nas seguintes tarefas:

- [x] Criação do Front-end
- [x] Melhor a Clean Architectute
- [x] Criar Login de Autenticação

## 📚 Usando Payment System

Para usar Payment_System, siga estas etapas:

- Configure a sua .env com os seguintes dados.
```
MYSQL_ROOT_PASSWORD = 'senha-do-banco'
MYSQL_DATABASE = 'nome-do-banco'
DATABASE_URL = 'url-do-banco'
```
- Crie uma pasta 'keys' para adicionar certificado.pem fornecidos pela Efi.

- Clone o Repositorio em sua maquina e siga os seguintes comando no terminal.
```
npm_install
```
```
npx prisma migrate dev
```
- Se todos esses passos forem seguidos corretamente use uma Api Client de sua escolha e consuma esses Endpoints.

#### Crie um Plano:

🟨 POST `http://localhost:PORT/plans/create`
```
{
  "name": "nome do plano",
  "interval": 1,
  "repeats": 12
}
```
#### Crie uma Inscrição:

🟨 POST `http://localhost:PORT/v1/plan/:plan_id/subscription`
```
{
  "items": [
    {
      "name": "categoria do plano",
      "value": 6990,
      "amount": 1
    }
  ]
}
```
#### Crie a Cobrança:

🟨 POST `http://localhost::PORT/v1/subscription/:subscription_id/pay`
```
{
  "payment": {
    "credit_card": {
      "customer": {
        "name": "Vithor Saito",
        "cpf": "94271564656",
        "email": "email_do_cliente@servidor.com.br",
        "birth": "1990-08-29",
        "phone_number": "5144916523"
      },
      "payment_token": "token gerado do cartão do cliente",
      "billing_address": {
        "street": "Avenida Juscelino Kubitschek",
        "number": "909",
        "neighborhood": "Bauxita",
        "zipcode": "35400000",
        "city": "Ouro Preto",
        "complement": "",
        "state": "MG"
      }
    }
  }
}
```
#### Relacionamento(modelo conceitual):
<img src="https://github.com/DevVithor/Payment_System/assets/142769545/bb66a372-2ee7-49c5-b457-d6aeecd0da1f)" alt="concept model">

- Varios planos para uma Inscrição (N > 1)
- Varias inscrições para um Pagamento (1 > N)


