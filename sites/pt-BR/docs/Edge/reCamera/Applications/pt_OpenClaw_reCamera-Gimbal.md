---
description: Use OpenClaw to control the reCamera Gimbal
title: Use OpenClaw to control the reCamera Gimbal
keywords:
  - reCamera Gimbal
  - Controle sensorial
  - OpenClaw
image: https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_9.png
slug: /use_cpenclaw_to_control_the_recamera_gimbal
sidebar_position: 10
last_update:
  date: 03/27/2026
  author: Xinrui Wu
createdAt: '2026-03-27'
updatedAt: '2026-03-27'
url: https://wiki.seeedstudio.com/pt-br/use_cpenclaw_to_control_the_recamera_gimbal/
---


# Use OpenClaw to control the reCamera Gimbal

## Introdução

Este projeto rompeu com sucesso a barreira entre grandes modelos virtuais e o mundo físico ao integrar profundamente o framework OpenClaw Agent com a câmera de borda com IA reCamera Gimbal da Seeed Studio.  
Apoiando-se na poderosa arquitetura RISC-V, no ambiente low-code Node-RED integrado e em 1 TOPS de poder de computação de borda da reCamera, desenvolvemos uma Skill subjacente dedicada de interação para o OpenClaw.  
Agora, o grande modelo não é mais um "cérebro em um frasco" que só consegue digitar na tela. Ele tem um "pescoço" que pode girar ativamente 360°, "olhos" (captura de imagem + análise VLM) que podem ver o mundo físico, "mãos" (controle de LED) que podem mudar o ambiente e "ouvidos e boca" (microfone e alto-falante) para interação bidirecional.

Aqui está o efeito de uso após concluir este demo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw.gif" /></div>

## Preparação de hardware

uma reCamerab Gimbal
um computador

<table align="center">
 <tr>
  <th>reCamera Gimbal</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 1. Instale o OpenClaw no seu computador

:::note
Git e nodejs precisam ser instalados antes da instalação. Se for um usuário do Windows10, o Visual Studio também precisa ser instalado. Se não estiver instalado, será exibido um erro.
:::

Visite o site oficial do OpenClaw para ver o tutorial de instalação detalhado: [OpenClaw-Personal AI Assistant](https://openclaw.ai/)

Após a instalação, você pode acessar diretamente a página web para tentar conversar com ele. Se você conseguir obter retorno normalmente neste momento, então você instalou e configurou o OpenClaw com sucesso. Continue passo a passo. Se houver algum problema com a instalação do OpenClaw, encontre o motivo e resolva-o por conta própria.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_2.png" /></div>

Você também pode clicar na página "Overview" à esquerda para verificar se o "Status" está normal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_3.png" /></div>

## 2. Importe as Skills da reCamera Gimbal

### 2.1 nova pasta de skills

Na pasta onde o OpenClaw está instalado, encontre o workspace e crie uma nova pasta chamada "skills" neste caminho.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_1.png" /></div>

### 2.2 Baixe o projeto reCamera Gimbal no GitHub

O endereço do projeto é:

```
https://github.com/Seeed-Projects/reCamera_Gimbal-OpenClaw
```

Após baixar e descompactar, coloque a pasta "recamera-gimbal" do projeto dentro da pasta "skills" criada na etapa 2.1.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_8.png" /></div>

### 2.3 Configuração do openclaw.json

openclaw.json está localizado na pasta da sua instalação do openclaw. Este arquivo contém todas as configurações de que você precisa para acessar o modelo de IA. O que você precisa fazer é adicionar o seguinte conteúdo sobre a reCamera Gimbal ao openclaw.json:

:::note

1. Substitua "C :\\ Users\\seeed\\.openclaw\\workspace\\skills" pelo caminho real da sua pasta de skills

2. Substitua "192.168.31.198" pelo endereço IP em que sua reCamera Gimbal realmente está

3. Substitua "recamera.1" pela senha real da sua reCamera Gimbal

:::

```json
"skills": {
    "load": {
      "extraDirs": [
        "C:\\Users\\seeed\\.openclaw\\workspace\\skills"
      ]
    },
    "entries": {
      "recamera-gimbal": {
        "enabled": true,
        "env": {
          "RECAMERA_IP": "192.168.31.198",
          "RECAMERA_PASS": "recamera.1"
        }
      }
    }
  }
```

:::note
Se você quiser escrever suas próprias Skills, consulte a [specification](https://agentskills.io/specification#allowed-tools-field) oficial de escrita
:::

## 3. Abra o SenseCraft para implantar a aplicação

### 3.1 Configurar a reCamera Gimbal

Primeiro, não conecte a alimentação da reCamera Gimbal, conecte diretamente o cabo Type-C ao computador e acesse 192.168.42.1. Após entrar, clique em "Login to SenseCraft" no canto inferior esquerdo. Depois de fazer login, conecte o WiFi a ela para garantir que o WiFi conectado seja o mesmo do seu computador. Em seguida, verifique o endereço IP da reCamera Gimbal, copie o endereço IP e acesse-o para ver se pode ser acessado normalmente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_5.png" /></div>

### 3.2 implantação da aplicação

Abra o [Application](https://sensecraft.seeed.cc/ai/application) do SenseCraft, encontre o projeto chamado "OpenClaw & reCamera Gimbal", clique em "Deploy Application"-"Visit Workspace Via USB", e o fluxo de trabalho que você verá após a implantação deve ser como mostrado na figura a seguir:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_4.png" /></div>

## 4. Teste o motor e tire fotos

Em seguida, desconecte o cabo Type-C, conecte a fonte de alimentação de 12 V, aguarde a conclusão da calibração automática da reCamera Gimbal, acesse novamente o endereço IP anterior no navegador, entre na interface da reCamera Gimbal e certifique-se de que o Node-RED iniciou a operação normal. Em seguida, testamos se as duas interfaces HTTP expostas podem funcionar normalmente:

### 4.1 testar motor

Primeiro teste se o motor do pan-tilt está normal, substitua "`<DEVICE_IP>`" pelo IP real da sua reCamera Gimbal:

```http
http://<DEVICE_IP>:1880/api/gimbal?yaw=120&pitch=90
```

Se tudo estiver normal, então, quando você visitar este site, verá que o motor da reCamera Gimbal girou, e você pode substituir 120 e 90 por outros ângulos

### 4.2 testar foto

Em seguida, teste se a foto está normal, substitua "`<DEVICE_IP>`" pelo IP real da sua reCamera Gimbal:

```http
http://<DEVICE_IP>:1880/api/photo
```

Se tudo estiver OK, então, quando você visitar este URL, poderá ver na página web a imagem que a reCamera Gimbal acabou de tirar.

:::note
Certifique-se de que a reCamera Gimbal e o seu computador estejam conectados ao mesmo WiFi
:::

## 5. Teste no OpenClaw

Antes de testar, precisamos confirmar duas coisas:

### 5.1 Certifique-se de que suas Skills estejam configuradas corretamente

Se você configurou as Skills de acordo com o passo 2, na interface do OpenClaw, depois de clicar em "Skills" à esquerda e depois em "WORKSPACE SKILLS", você deverá conseguir ver o "recamera-gimbal" que configurou localmente"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_6.png" /></div>

### 5.2 Certifique-se de que seu modelo esteja configurado corretamente

Certifique-se de que seu modelo esteja configurado corretamente. Depois de clicar em "Agent" à esquerda, você poderá ver o modelo que configurou em "Primary model". Aqui estou usando o modelo GLM4.7.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_7.png" /></div>

### 5.3 Comece a controlar sua reCamera com o OpenClaw Gimbal

Diga diretamente ao OpenClaw na janela de chat "turn on the LED of the camera", "look around to see if there is anyone", "record a 5s audio and play it" e outras tarefas, ou você pode tentar tarefas mais complexas, como "turn on the sentinel mode of the reCamera (quickly scan around, one scan cycle, that is, one scan circle is controlled within 6s), if there is a person wearing a white T-shirt in the picture, you will turn on the camera light and play test.wav audio, analyze the content of the picture and save the picture to the local", e então aguarde um momento para ver a reação da reCamera Gimbal.

:::note
A execução de tarefas pelo OpenClaw será bem lenta, e instruções complexas levarão cerca de dois ou três minutos para mostrar efeito, portanto, aguarde pacientemente, isso é normal.
:::

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
