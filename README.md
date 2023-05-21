# Trakto - Resolução do desafio Back-end Developer

## Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Instalação do Docker Compose](https://docs.docker.com/compose/install/)
- MongoDB Compass (GUI) [Opcional]: [Instalação do MongoDB Compass (GUI)](https://www.mongodb.com/try/download/compass)

## Como executar

Siga as etapas abaixo para executar a API Node.js:

1. Clone este repositório para sua máquina:

```shell
$ git clone git@github.com:Guilheeeerme/trakto.git
```

2. Navegue até o diretório do projeto:

```shell
$ cd trakto/
```

3. Renomeie o arquivo `.env.example` para `.env` e preencha o valor da variável `API_PORT` para definir em qual porta sua API irá executar.

4. Execute o seguinte comando para construir as imagens e iniciar os contêineres:

```shell
$ docker-compose up -d
```

5. Aguarde até que os contêineres sejam iniciados e a API esteja pronta para uso.

6. Faça uma requisição POST no endpoint `http://localhost:<PORTA>/image/save`, onde `<PORTA>` é a porta configurada no arquivo `.env`, com o modelo de body abaixo:

```json {
{
  "image": "https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg",
  "compress": 80
}
```

_Obs: O campo `compress` pode ter seu valor entre 0.0 e 100_.

O response da requisição terá o seguinte modelo em caso de sucesso:

```json {
  {
    "localpath": {
        "original": string,
        "thumb": string,
    },
    "metadata": {
        "ALL_EXIF_DATA_KEY": object
    }
}
```

A imagem original e a thumb estarão na pasta `temp` na raíz do projeto.

Em caso de erro na requisição, o response terá o seguinte modelo:

```json
{
    errors: [
        {
            "code": number,
            "message": string
        }
    ]
}
```

8. Você pode conectar no MongoDB Compass com a seguinte uri: `mongodb://localhost:27017`, e ver as informações do exif da imagem original, no documento que foi inserido no banco de dados. Exemplo:

![](evidência.PNG)

## Como parar

Para parar e remover os contêineres da API, execute o seguinte comando no diretório do projeto:

```shell
$ docker-compose down
```

Isso encerrará os contêineres e liberará os recursos utilizados.
