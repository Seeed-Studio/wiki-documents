---
description: Fornecer um tutorial para integrar a reCamera com o Telegram. Dependente do n8n.
title: Primeiros passos no Telegram
keywords:
  - reCamera
  - Telegram
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png
slug: /getting_started_in_Telegram_work_with_recamera
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_in_Telegram_work_with_recamera/
---


# Acoplando reCamera n8n Telegram

## Introdução

Entre vários cenários de aplicação de IoT, a troca de informações e o processamento automático entre dispositivos muitas vezes demonstram mais o valor do sistema do que apenas a capacidade de reconhecimento. A reCamera oferece capacidades estáveis de reconhecimento visual com IA local, enquanto o n8n fornece uma plataforma flexível de orquestração visual para processamento de dados e automação de processos. Quando os dois são combinados, as informações de detecção deixam de ficar limitadas aos dispositivos locais e passam a se tornar uma fonte de eventos que pode ser ainda mais aproveitada.

Este tutorial apresenta um método de integração simples e eficiente: os resultados de reconhecimento da reCamera são enviados em forma de texto para o n8n e, em seguida, o n8n os envia automaticamente para o Bot pessoal do Telegram criado pelo usuário via API. Por meio desse elo, qualquer evento de reconhecimento pode ser imediatamente enviado para o dispositivo móvel, construindo assim um sistema de notificação leve que abrange vários dispositivos e plataformas. Todo o processo não requer escrever código complexo; basta concluir as configurações necessárias dos nós para atingir rapidamente o objetivo.

## Preparação de Hardware

Uma reCamera (pode ser qualquer uma da série 2002, versão HQ POE ou versão com pan-tilt, mas observe que a versão POE não possui funcionalidade WiFi e requer um switch com função POE conectado no mesmo segmento de rede)  
um computador (uma máquina virtual configurada com Ubuntu 22.04, usada para instalar o n8n)

<table align="center">
 <tr>
  <th>Série reCamera 2002</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. Instalar n8n (na máquina virtual)

### (1) Instalar Docker

```bash
sudo apt update
sudo apt install -y docker.io
```

Após a conclusão da instalação, habilite e configure para iniciar com o sistema

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

Verifique se a instalação foi bem-sucedida:

```bash
docker --version
```

Se você vir algo como:

```nginx
Docker version 28.2.2, build ...
```

### (2) Permitir que o usuário atual use docker diretamente (sem sudo toda vez)

```bash
sudo usermod -aG docker $USER
```

Em seguida, saia do terminal atual e faça login novamente.

```bash
docker ps
```

### (3) Executar o contêiner do n8n

```bash
sudo docker run -it --rm \
  --name n8n \
  --network host \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Na primeira execução, a imagem do n8n será baixada automaticamente, com alguns centenas de MB, o que leva um pouco de tempo

### (4) Acessar o n8n

Abra um navegador Firefox na máquina virtual e digite:

```bash
http://localhost:5678
```

Você poderá entrar na interface do n8n para criar uma conta.

## 2. Configurar n8n

### (1) Criar um nó "Webhook" para receber dados da ReCamera

Clique em Personal-Create workflow

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_1.png" /></div>

Clique no sinal de adição – na caixa de pesquisa digite "webhook" – clique no primeiro nó "Webhook"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_2.png" /></div>

Agora entramos na interface de configuração. Aqui precisamos modificar dois itens. Primeiro, selecione "HTTP Method" como "POST". Depois, modifique "Path" para qualquer nome. Aqui usarei "recamera_detect" como exemplo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_3.png" /></div>

Após essa etapa, ele terá sido salvo automaticamente. Neste momento, clique em "Back to canvas" no canto superior esquerdo para voltar à interface principal e se preparar para criar o próximo nó.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_4.png" /></div>

### (2) Criar nó "Code" para processar os dados recebidos

Clique no sinal de adição – digite "code" na caixa de pesquisa – clique no primeiro nó "Code"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_5.png" /></div>

Em seguida, selecione "Code in JavaScript"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_6.png" /></div>

Substitua o conteúdo original pelo seguinte código:

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_7.png" /></div>

Clique em "Back to canvas" no canto superior esquerdo para voltar à interface principal

## 3. Configurar Telegram

### (1) Criar um Bot do Telegram e obter sua API

Abra o Telegram e pesquise por "BotFather"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_8.png" /></div>

Crie seu Bot, preencha o nome do robô e o nome de usuário e clique em "CREATE BOT"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_9.png" /></div>

Em seguida, esta interface aparecerá. Após o ícone de chaveiro há uma sequência de efeitos de partículas, que é a API do Bot que você criou. Clique em "Copy" e você a usará mais tarde.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_10.png" /></div>

### (2) Pesquise userinfobot para obter seu Chat ID pessoal

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_11.png" /></div>

Depois de clicar para entrar, clique em "Start" no canto superior direito. Neste momento, será retornada uma mensagem contendo seu ID. Guarde esse ID, pois ele será usado mais tarde.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_12.png" /></div>

### (3) continuar configurando o n8n e adicionar um terceiro nó

Clique no sinal de adição – na caixa de pesquisa digite "telegram" – clique no primeiro nó "Telegram"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_13.png" /></div>

Após clicar, continue digitando "message" e selecione "Send a text message"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_14.png" /></div>

Depois de entrar no nó, selecione "Create new credentila"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_15.png" /></div>

Em seguida, copie a API do seu Bot que você acabou de copiar para "Access Token" e clique em "Save" no canto superior direito"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_16.png" /></div>

Depois de clicar em "Save", o sistema irá verificar se a API existe. Se estiver tudo correto, aparecerá a mensagem "Connection tested successfully". Neste momento, clique em Exit no canto superior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_17.png" /></div>

Em seguida, preencha o Chat ID pessoal que você obteve anteriormente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_18.png" /></div>

Depois, preencha "Text":

```
当前人数：{{ $json["peopleCount"] }}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_19.png" /></div>

Clique em "Back to canvas" no canto superior esquerdo para voltar à interface principal

## 4. Configurar Node-Red

Primeiro, abra a interface do n8n na máquina virtual, clique duas vezes no nó "Webhook" que você configurou anteriormente, entre na interface de configuração do nó Webhook e então clique em "Production URL" para copiar o seguinte endereço "POST"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_20.png" /></div>

As etapas de configuração anteriores são as mesmas do [Home Assistant](https://wiki.seeedstudio.com/pt-br/getting_started_for_home_assistant_with_recamera/), apenas ao configurar o nó "http request" é necessário modificar o endereço URL, ou seja, o endereço POST que você acabou de copiar na máquina virtual, e depois alterar o localhost para o endereço IP da sua máquina virtual

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_21.png" /></div>

Ver IP da Máquina Virtual

```bash
ifconfig
```

:::note
Por favor, lembre-se! Certifique-se de conectar a Recamera à rede!!! Caso contrário, a comunicação não será possível.
:::

## 5. Ativar e entrar na interface Executions para visualizar a mensagem

Clique no interruptor "Inactive" no canto superior direito para transformá-lo em Active verde e, em seguida, clique em "Executions"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_22.png" /></div>

Neste momento, você verá que há muitos carimbos de data e hora à esquerda que vêm sendo atualizados. Se você vir que os carimbos de data e hora estão sendo atualizados, isso significa que os dados da sua reCamera foram conectados à plataforma n8n!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_23.png" /></div>

Em seguida, verifique o seu Telegram, deve haver muitos avisos de mensagens; neste momento, você terá enviado com sucesso as mensagens da reCamera para o Telegram!!!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_24.png" /></div>

Se você quiser ver o conteúdo da detecção de um determinado momento, você pode clicar duas vezes nesse carimbo de data e hora e, em seguida, clicar duas vezes em "Code in JavaScript" para ver o OUTPUT à direita.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Telegram_25.png" /></div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
