---
description: Implemente o InfluxDB em um reComputer R1000 para uma coleta e análise eficiente de dados de séries temporais em aplicações de IoT. Este guia aborda instalação, configuração e uso para aproveitar a potência do InfluxDB no seu controlador de borda com Raspberry Pi. Obtenha insights em tempo real e recursos robustos de monitoramento diretamente na borda da sua rede.
title: reComputer R1000 com Node Red e InfluxDB
keywords:
  - Controlador de Borda
  - reComputer R1000
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_node_red_influxdb
last_update:
  date: 07/03/2024
  author: Kasun Thushara
createdAt: '2024-06-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_node_red_influxdb/
---
## Introdução

Implementar o [InfluxDB](https://www.influxdata.com/) em um reComputer R1000, um controlador de borda baseado em Raspberry Pi, permite uma coleta e análise robusta de dados de séries temporais na borda da sua rede. Esta configuração é ideal para aplicações de IoT, fornecendo insights em tempo real e capacidades de monitoramento. Ao aproveitar o banco de dados InfluxDB, leve porém poderoso, você pode gerenciar e analisar dados de sensores de forma eficiente diretamente no reComputer R1000. O guia a seguir descreve as etapas para instalar, configurar e usar o InfluxDB no seu reComputer R1000, garantindo uma integração perfeita à sua infraestrutura de dados.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparação de Software

Nós preparamos um [Guia de Primeiros Passos em Node-RED](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_getting_statrted_node_red/). É recomendado que você revise este guia antes de prosseguir para este wiki.

## Instalando o InfluxDB no reComputer R1000

Este guia abrange as etapas para instalar e configurar o InfluxDB em um controlador de borda reComputer R1000.

**Passo 1**: Atualizar o Sistema

Primeiro, certifique-se de que o seu sistema está atualizado executando o seguinte comando: faça SSH para o reComputer R1000 e

```sh
sudo apt update
```

**Passo 2**: Adicionar o Repositório do InfluxDB

Adicione a chave GPG e o repositório do InfluxDB ao seu sistema.

Adicione a chave GPG:

```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
 ```

Adicione o repositório à lista de fontes:

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**Passo 3**: Atualizar a Lista de Pacotes

Atualize a lista de pacotes para incluir o repositório do InfluxDB:

```sh
sudo apt update
```

**Passo 4**: Instalar o InfluxDB

Instale o InfluxDB versão 1

```sh
sudo apt install influxdb
```

## Iniciar o Servidor InfluxDB

Habilite e inicie o serviço do InfluxDB:

**Passo 1**. Remover o `mask` do serviço:

```sh
sudo systemctl unmask influxdb
 ```

**Passo 2**. Habilitar o serviço:

```sh
sudo systemctl enable influxdb
```

**Passo 3**. Iniciar o serviço:

```sh
sudo systemctl start influxdb
```

## Testando o InfluxDB

Acesse a ferramenta de linha de comando (CLI) do InfluxDB para realizar operações básicas no banco de dados.

**Passo 1**. Abra o terminal:

```sh
influx
```

**Passo 2**. Crie um banco de dados:

```sh
CREATE DATABASE data
 ```

**Passo 3**. Use o banco de dados:

```sh
USE data
```

**Passo 4**. Insira um ponto de dado de exemplo:

```sh
INSERT room,temperature=30.1 humidity=80.2
 ```

**Passo 5**. Faça uma consulta aos dados inseridos:

```sh
SELECT * FROM room
 ```

## Adicionando Autenticação ao InfluxDB

**Passo 1**. Abra o terminal:

```sh
influx
```

**Passo 2**. Crie um usuário administrador com todos os privilégios (substitua `<password>` pela sua senha segura):

```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
 ```

**Passo 3**. Saia do CLI do InfluxDB:

```sh
exit
```

**Passo 4**. Edite a configuração do InfluxDB para ativar a autenticação:

```sh
sudo nano /etc/influxdb/influxdb.conf
```

Na seção `[HTTP]`, adicione ou modifique as seguintes linhas:

```
    auth-enabled = true
    pprof-enabled = true
    pprof-auth-enabled = true
    ping-auth-enabled = true
    enabled=true
    bind-address=":8086"
```

**Passo 5**. Reinicie o serviço do InfluxDB para aplicar as alterações:

```sh
sudo systemctl restart influxdb
```

**Passo 6**. Conecte-se ao InfluxDB com o usuário administrador:

```sh
influx -username admin -password <password>
```

Certifique-se de substituir `<password>` pela senha que você definiu para o usuário administrador.

## Enviando Dados para o InfluxDB via Node-RED

**Passo 1**. Abra o seu Node-RED no navegador (normalmente `http://<your-reComputer-R1000-ip>:1880`).

**Passo 2**. Instale o `node-red-contrib-influxdb` usando o gerenciador de paleta do Node-RED.

**Passo 3**. Arraste e solte um nó `inject`, um nó `function` e um nó `influxdb out` na tela do fluxo, e conecte-os da seguinte forma:

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ifdb-flow.PNG" /></center>

### Nó Function

Este nó formata os dados a serem enviados ao InfluxDB.

**Passo 1**. Dê um duplo clique no nó `function`.

**Passo 2**. Insira um nome (por exemplo, `Format Data for InfluxDB`).

**Passo 3**. Insira o seguinte código no editor de funções:

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/js-influxdb.PNG" /></center>

**Passo 4**. Clique em "Done".

### Nó InfluxDB Out

Este nó envia os dados formatados para o InfluxDB.

**Passo 1**. Dê um duplo clique no nó `influxdb out`.

**Passo 2**. Insira os seguintes detalhes:

- **Name**: labdata
- **Database**: data (criado anteriormente)
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/influxin.PNG" /></center>

**Passo 3**. Clique no ícone de lápis para adicionar uma nova configuração de servidor InfluxDB.

**Passo 4**. Insira os seguintes detalhes:

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>` (a senha que você criou)

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/server-ifdb.PNG" /></center>

**Passo 5**. Clique em "Add" e depois em "Done".

**Passo 6**. Clique em "Deploy" para salvar e publicar o seu fluxo.

### Testar o Fluxo

1. Clique no botão do nó `inject` para acionar o fluxo manualmente.

2. Verifique o seu banco de dados InfluxDB para ver se os dados foram gravados com sucesso executando os seguintes comandos no terminal:

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

Certifique-se de substituir `<password>` pela senha que você definiu para o usuário administrador.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/result-lab.PNG" /></center>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
