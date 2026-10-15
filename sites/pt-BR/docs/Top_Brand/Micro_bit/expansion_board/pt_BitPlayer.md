---
description: Micro_bit BitPlayer
title: BitPlayer
keywords:
  - Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitPlayer
last_update:
  date: 12/29/2023
  author: Seraphina
createdAt: '2024-01-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/BitPlayer/
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608299-82ca0e88-02a3-4a72-bb27-0d6e31d508f5.png#height=609&id=HttEj&originHeight=609&originWidth=904&originalType=binary&ratio=1&size=0&status=done&style=none&width=904) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/1.png)

## Introdução

O BitPlayer traz inspiração e entusiasmo para você fazer criações como um piano portátil ou uma calculadora inteligente. Para ser mais fácil de carregar e usar, o BitPlayer abandonou um design com todos os botões que um controle de jogo típico usaria em favor de um joystick de 2 eixos. Ele inclui outros 6 botões programáveis rotulados como L, R, A, B, C e D. Além disso, o próprio BitPlayer possui um buzzer, um motor de vibração e uma porta Grove I2 C para oferecer às crianças uma experiência de jogo viva e interativa. Você pode facilmente aproveitar projetos DIY em qualquer lugar instalando 2 pilhas AAA no BitPlayer. Conforme já testado, o BitPlayer pode interagir com outros dispositivos quando o posicionamento por Bluetooth estiver dentro de uma distância de cerca de 10 metros. Se você quiser implementar um carrinho de controle remoto, recomendamos que você também prepare um [BitCar](https://docproxy.tinkergen.com/web/#/2?page_id=357).

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608604-b8c61682-56cb-4c53-aa80-90e45003792c.png#height=907&id=yenfN&originHeight=907&originWidth=905&originalType=binary&ratio=1&size=0&status=done&style=none&width=905) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/2.png)

## Tutoriais

Aqui estão alguns tutoriais relacionados para ajudar você a começar a usar o BitPlayer.

### 1. Jogo de Velocidade dos Dedos

#### 1.1 Implementação

Neste projeto, vamos acender os LEDs em sequência manipulando o joystick. A luz correrá pela tela como um quadrado em loop.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608313-1eb60ba3-e82b-4cea-baa3-0eba2906910c.png#height=266&id=FXfhp&originHeight=266&originWidth=473&originalType=binary&ratio=1&size=0&status=done&style=none&width=473) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/3.png)

#### 1.2 Escrever um Programa

Observe que no MakeCode não temos blocos para controlar o BitPlayer. Portanto, precisamos adicionar uma extensão BitPlayer no MakeCode para garantir que tudo corra bem. Vamos aprender como fazer isso agora!
【Como Adicionar a Extensão BitPlayer】
Vamos para o MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)

- Etapa 1 Clique no ícone de engrenagem (para configurações) na barra azul no MakeCode.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608337-28675e0d-cba2-4fcd-9e95-ea566db99f46.png#height=489&id=URYAb&originHeight=489&originWidth=1000&originalType=binary&ratio=1&size=0&status=done&style=none&width=1000) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/4.png)

- Etapa 2 Selecione “Extensions” na lista suspensa, o que levará você à página de extensões.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608593-1510b8dd-4f3f-49b2-8145-fd6e87b854db.png#height=699&id=AAz5P&originHeight=699&originWidth=914&originalType=binary&ratio=1&size=0&status=done&style=none&width=914) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/5.png)

- Etapa 3 Insira o endereço da extensão BitPlayer na caixa de pesquisa: [https://github.com/TinkerGen/pxt-BitPlayer](https://github.com/TinkerGen/pxt-BitPlayer)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608308-08990569-fce3-4dc8-a07a-ad1c3f1182e1.png#height=937&id=b9Blo&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/6.png)

> Se for exibido um aviso de que essa extensão não existe, feche o navegador e entre novamente no MakeCode.

<!-- - Step 4 Click the extension package which takes you back to the workspace. You will see that the BitPlayer extension is then successfully added.![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608597-2ade6798-937e-47e0-8215-99e146f6d983.png#height=937&id=jyFxX&originHeight=937&originWidth=1920&originalType=binary&ratio=1&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/7.png)

Vamos prosseguir para a tarefa.
Primeiro, adicione um bloco “on start”. Vamos criar 3 variáveis chamadas LED on, coordenada x e coordenada y.
Em seguida, defina a variável “LED on” como um sprite com um par ordenado (coordenada x, coordenada y). Esse par ordenado inicialmente começará em (0, 0).<br />
Depois, siga esta lógica de programa para codificar: se o joystick for puxado para cima, a coordenada y mudará em -1; se o joystick for puxado para baixo, a coordenada y mudará em 1; se o joystick for puxado para a esquerda, a coordenada x mudará em -1; se o joystick for puxado para a direita, a coordenada x mudará em 1.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656608356-3c424c72-15e0-4ee2-895e-4eee6ec085a1.png#height=699&id=GohIO&originHeight=699&originWidth=1434&originalType=binary&ratio=1&size=0&status=done&style=none&width=1434) -->
![](https://files.seeedstudio.com/wiki/microbit/bitplayer/8.png)

#### 1.3 Conectar um Dispositivo

Deslize o micro:bit diretamente para dentro do BitPlayer e tome cuidado para não invertê-lo. Em seguida, conecte o micro:bit ao seu PC com um cabo USB. Verifique se o indicador de LED no micro:bit acende. Caso contrário, você precisa desconectar o cabo USB e conectá-lo novamente aos dispositivos.

#### 1.4 Baixar um Programa

Você já foi apresentado a como baixar um programa nos [tutoriais anteriores](https://docproxy.tinkergen.com/web/#/2?page_id=329), o que pode ser simplesmente resumido nas etapas: renomear um programa, clicar no botão “Download” e enviá-lo para o micro:bit.

#### 1.5 Executar um Programa

Ligue a chave no BitPlayer e veja se o micro:bit consegue funcionar normalmente.

### 2. Carrinho de Controle Remoto

Consulte o [Tutorial 4 do BitCar.](https://docproxy.tinkergen.com/web/#/2?page_id=357)

## Materiais do Curso

Você pode ver materiais de curso sobre o micro:bit e o BitPlayer em nossa plataforma de aprendizado online Make2Learn por meio deste endereço: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
