---
description: Use a função de detecção corporal para controlar Subway Surfers.
title: Jogue Subway Surfers com controle por sensor corporal
keywords:
  - reCamera
  - Controle sensorial
  - Jogo
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /use_the_motion-sensing_function_of_recamera_to_play_games
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
createdAt: '2025-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/use_the_motion-sensing_function_of_recamera_to_play_games/
---

# Jogue Subway Surfers com controle por sensor corporal

## Introdução

A reCamera é uma câmera de IA equipada com poderosos recursos de computação de borda. Esta demonstração mostra sua capacidade de executar o modelo YOLO11n-Pose em tempo real no nível do dispositivo – sem depender da nuvem, ela consegue identificar com precisão os pontos-chave e as posturas do corpo humano. Ao capturar os movimentos do jogador com a reCamera, transformamos nosso corpo em um controle, permitindo operar o "Subway Run" com movimentos naturais do corpo: pular, agachar, desviar para a esquerda e para a direita, tudo em um único fluxo contínuo!

A seguir está o efeito de uso após concluir esta demonstração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## Preparação de Hardware

Uma reCamera
um computador

<table align="center">
 <tr>
  <th>reCamera 2002 Série</th>
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

## 1. Abra o SenseCraft e encontre a aplicação chamada "GAME"

### 1.1 Abrir o Wiki

A entrada do SenseCraft fica no canto superior direito da interface do Wiki, clique para entrar no SenseCraft

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 Abra a aplicação pelo SenseCraft

Abra a seção de aplicações do SenseCraft, digite "GAME" na caixa de entrada à esquerda e, em seguida, clique para entrar na aplicação GAME.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_19.png" /></div>

### 1.3 Faça o deploy desta aplicação na reCamera

Clique em Deploy Application na página e depois clique em Visit Workspace Via USB (neste momento, você deve conectar a reCamera ao seu computador)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_23.png" /></div>

Em seguida, você entrará no Workspace, o nó do Node-RED será carregado por um tempo, aguarde pacientemente até a conclusão do carregamento

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

Após o carregamento, você verá a seguinte interface, clique em No e saia

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

Clique no botão Deploy no canto superior direito

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

Após o deploy ser bem-sucedido, uma janela pop-up aparecerá e, em seguida, o botão de deploy ficará cinza.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

Em seguida, abra o Dashboard para ver o efeito

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

Neste ponto, você já deve conseguir ver com sucesso a tela de detecção como a seguir

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.4 Desative o firewall do computador e altere o endereço IP da reCamera

#### 1.4.1 Desative todos os firewalls no computador

Desativar o firewall serve para evitar que as mensagens UDP enviadas posteriormente pela reCamera sejam interceptadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_22.png" /></div>

#### 1.4.2 Defina o endereço IP da reCamera para 192.168.42.2

Abra o Painel de Controle no seu computador – Rede e Internet – Conexões de Rede, encontre o dispositivo chamado "UsbNcm Host Device", este é o seu dispositivo reCamera, clique com o botão direito e selecione propriedades para entrar.   

Esta etapa é para permitir que a reCamera se comunique com o computador no mesmo segmento de rede.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_20.png" /></div>

Escolha IPV4 – Propriedades – Usar o seguinte endereço IP – Altere o endereço IP para 192.168.42.2 e a máscara de sub-rede para 255.255.255.0, após selecionar, clique em OK.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_21.png" /></div>

### 1.5 Teste o disparo das quatro ações cima, baixo, esquerda e direita

#### 1.5.1 Estado inicial

Esta é a ação inicial, ou seja, o retorno ao estado central. Quando você fixar a reCamera, ajustar o ângulo, ficar em frente à reCamera, colocar os braços naturalmente em ambos os lados e controlar a bola para ficar na linha central e entre a linha roxa e a área verde. Nesse momento, você pode realizar outras ações para testar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 Esquerda

Braço esquerdo para a esquerda, mantenha o braço direito parado, controle a bola para a esquerda da linha central, ela será exibida em azul, neste momento é determinado como esquerda

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 Direita

Braço direito para a direita, mantenha o braço esquerdo parado, controle a bola para a direita da linha central, ela será exibida em amarelo, neste momento é julgado como direita

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 Cima

Ambos os braços devem ser levantados para cima. Quando você vir a linha roxa ultrapassar a linha amarela, é determinado como para cima e a bola permanecerá branca.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 BAIXO

Mantenha o braço de volta ao meio e depois agache naturalmente. Controle a bola para a área de agachamento. A bola ficará vermelha. Neste momento, é determinado como para baixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
Se você quiser acionar um certo conjunto de ações em sequência, como ir para a esquerda duas vezes seguidas ou ir para a esquerda e depois para cima, então, quando fizer a primeira ação para a esquerda, você deve primeiro fazer a bola voltar ao meio e depois fazer a segunda ação.
:::

## 2. Baixe o programa de controle em Python correspondente e execute-o.

Clique neste [link do GitHub](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git)

Depois de entrar, baixe o pacote compactado deste projeto para o computador local

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

Após a descompactação, abra scket_udp.py e, em seguida, baixe primeiro uma dependência que controla o teclado.

```bash
pip install pynput
```

Em seguida, você pode executar este programa Python. Neste momento, você deve manter a tela de detecção da reCamera em funcionamento e verá a saída do resultado da determinação das ações.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. Abra o jogo (tomando como exemplo a versão web de Subway Surfers)

Depois de garantir que a detecção da sua reCamera e os programas Python estejam em execução e que a saída das ações de teste não tenha problema, abra a [página web de Subway Surfers](https://subway-surfers.gg/), em seguida clique em "Start Game" e você pode começar a jogar!

:::note
Apenas uma pessoa pode aparecer na tela. Quando outras pessoas entram no quadro, isso levará a um erro no julgamento das ações!
:::

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
