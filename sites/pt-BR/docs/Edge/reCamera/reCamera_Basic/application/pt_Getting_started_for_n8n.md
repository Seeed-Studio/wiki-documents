---
description: Fornecer um tutorial para integrar a reCamera com o n8n. O n8n está instalado na máquina virtual.
title: Introdução ao n8n
keywords:
  - reCamera
  - n8n
image: https://files.seeedstudio.com/wiki/reCamera/n8n_11.png
slug: /getting_started_for_n8n_with_recamera
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-20'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/application/getting_started_for_n8n_with_recamera/
---
# Introdução ao n8n com reCamera

## Introdução

A reCamera é uma câmera inteligente que suporta reconhecimento visual local e pode gerar resultados de detecção em tempo real no dispositivo. O n8n é uma ferramenta de automação de fluxos de trabalho de código aberto. Os usuários podem criar rapidamente vários processos de notificação, armazenamento ou vinculação de aplicativos por meio de uma interface visual. Este tutorial apresenta como enviar para o n8n, em forma de texto, as informações reconhecidas pela reCamera, permitindo que ela sirva como fonte de disparo para o fluxo de trabalho. Dessa forma, os usuários podem integrar facilmente eventos de detecção da câmera em seus próprios sistemas de automação, alcançando funções básicas como alertas de mensagens, registro de logs e chamadas de serviços de terceiros, estabelecendo a base para lógicas de negócios mais complexas no futuro.

## Preparação de hardware

Uma reCamera (pode ser qualquer uma da série 2002, versão HQ POE ou versão com pan-tilt, mas observe que a versão POE não possui funcionalidade WiFi e requer um switch com função POE conectado no mesmo segmento de rede)  
um computador (uma máquina virtual configurada com Ubuntu 22.04, usada para instalar o n8n)

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
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

## 1. Instalar o n8n (na máquina virtual)

### (1) Instalar o Docker

```bash
sudo apt update
sudo apt install -y docker.io
```

Após a conclusão da instalação, habilite e configure a inicialização

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

### (2) Permitir que o usuário atual use o Docker diretamente (sem sudo toda vez)

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

Na primeira execução, a imagem do n8n será baixada automaticamente, com alguns centenas de MB, o que leva um certo tempo

### (4) Acessar o n8n

Abra um navegador Firefox na máquina virtual e digite:

```bash
http://localhost:5678
```

Você pode entrar na interface do n8n para criar uma conta.

## 2. Configurar o n8n

### (1) Criar um nó "Webhook" para receber dados da reCamera

Clique em Personal-Create workflow

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_1.png" /></div>

Clique no sinal de mais – na caixa de pesquisa, digite "webhook" – clique no primeiro nó "Webhook"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_2.png" /></div>

Agora entramos na interface de configuração. Aqui precisamos modificar dois lugares. Primeiro, selecione "HTTP Method" como "POST". Em seguida, modifique "Path" para qualquer nome. Aqui tomarei "recamera_detect" como exemplo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_3.png" /></div>

Após esta etapa, ele já foi salvo automaticamente. Neste momento, clique em "Back to canvas" no canto superior esquerdo para voltar à interface principal e se preparar para criar o próximo nó.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_4.png" /></div>

### (2) Criar nó "Code" para processar os dados recebidos

Clique no sinal de mais – digite "code" na caixa de pesquisa – clique no primeiro nó "Code"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_5.png" /></div>

Em seguida, selecione "Code in JavaScript"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_6.png" /></div>

Substitua o conteúdo original pelo seguinte código:

```javascript
const payload = $json.body?.payload || $json.payload || "";
const matches = payload.match(/number\s*:?\s*(\d+)/i);
const peopleCount = matches ? parseInt(matches[1]) : 0;

return [{ json: { peopleCount, raw: payload } }];
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_7.png" /></div>

Clique em "Back to canvas" no canto superior esquerdo para voltar à interface principal

## 3. Configurar o Node-Red

Primeiro abra a interface do n8n da máquina virtual, dê um clique duplo no nó "Webhook" que você configurou anteriormente, entre na interface de configuração do nó Webhook e, em seguida, clique em "Production URL" para copiar o endereço "POST" abaixo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_8.png" /></div>

As etapas de configuração anteriores são as mesmas do [Home Assistant](https://wiki.seeedstudio.com/pt-br/getting_started_for_home_assistant_with_recamera/), exceto que, ao configurar o nó "http request", o endereço URL precisa ser modificado, ou seja, o endereço POST que você acabou de copiar na máquina virtual, e então o endereço localhost precisa ser alterado para o endereço IP da sua máquina virtual.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_9.png" /></div>

Ver IP da máquina virtual

```bash
ifconfig
```

:::note
Por favor, lembre-se! Certifique-se de conectar a Recamera à rede!!! Caso contrário, a comunicação não será possível.
:::

## 4. Ativar e entrar na interface Executions para visualizar a mensagem

Clique no interruptor "Inactive" no canto superior direito para transformá-lo em "Active" verde e, em seguida, clique em "Executions"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_10.png" /></div>

Neste momento, você verá que há muitos carimbos de data e hora à esquerda que estão sendo atualizados. Se você vir que os carimbos de data e hora estão sendo atualizados continuamente, isso significa que os dados da sua reCamera foram conectados à plataforma n8n!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_11.png" /></div>

Se você quiser visualizar o conteúdo de detecção de um determinado momento, pode dar um clique duplo nesse carimbo de data e hora e, em seguida, dar um clique duplo em "Code in JavaScript" para visualizar o OUTPUT à direita.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/n8n_12.png" /></div>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
