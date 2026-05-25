---
description: Micro_bit bitwear
title: BitWear
keywords:
  - Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitWear
last_update:
  date: 12/29/2023
  author: Seraphina
createdAt: '2024-01-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/BitWear/
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991110-809f156c-23cb-47b0-82fd-15fc1e221ba2.png#align=left&display=inline&height=670&originHeight=670&originWidth=1021&size=0&status=done&style=none&width=1021) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/1.png)

## Introdução

BitWear é um acessório compacto e de baixo custo para usuários de micro:bit criarem gadgets vestíveis divertidos. O BitWear é simplesmente fixado ao micro:bit com 5 parafusos (M3x5mm) e alimentado com duas baterias CR2032, que ficam presas com segurança e não podem ser retiradas a menos que você desparafuse o BitWear. Há um motor de vibração, um buzzer e um LED RGB endereçável na placa, todos projetados para seus projetos vestíveis divertidos. Nosso objetivo de design para o BitWear é maximizar as funções do micro:bit enquanto minimiza a ocupação de espaço, para proporcionar aos novos usuários de micro:bit uma experiência vestível enriquecida.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991124-7551ded4-89b3-4524-8ea2-d43cf23c85dd.png#align=left&display=inline&height=547&originHeight=547&originWidth=1099&size=0&status=done&style=none&width=1099) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/2.png)

:::note
Os usuários devem preparar separadamente duas baterias C2032 e cinco parafusos M3*5.
:::

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991126-2181a46f-99d0-4ee3-b587-3c82a082af0b.png#align=left&display=inline&height=527&originHeight=527&originWidth=995&size=0&status=done&style=none&width=995) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/3.png)

:::tip
Ao testar um programa, não instale primeiro as baterias no BitWear. Use um cabo USB para fornecer energia e garantir a transmissão do programa. Só instale as baterias quando o programa estiver concluído e for necessária a execução offline.
:::

## Tutoriais

Aqui estão alguns tutoriais relacionados para ajudar você a começar a usar o BitWear.

### 1. Alarme para Acordar

#### 1.1 Implementação

Este é um gadget mágico que pode acordar você! Quando o projeto estiver concluído, use a fita dupla face para fixar o gadget nas suas costas. Incline-se lentamente como se estivesse caindo no sono e veja se ele consegue enviar um lembrete.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991109-4bb68ed4-02eb-4499-b6df-bcebc2efe496.png#align=left&display=inline&height=522&originHeight=522&originWidth=928&size=0&status=done&style=none&width=928) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/4.png)

#### 1.2 Escrever um Programa

Primeiro, adicione um bloco forever. Conecte o bloco show icon dentro. Mantenha esse ícone de coração nele.
Em seguida, adicione uma instrução IF-THEN. Conecte um bloco de comparação &lt; dentro dela. Dentro do bloco, adicione o bloco acceleration (mg) da aba Input na caixa à esquerda; e insira 800 na caixa à direita.
Depois, vá para a aba Music e conecte o bloco start melody (dadadum) repeating (once) logo abaixo.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991101-b137ce8c-40cc-4e0f-a08b-a8b867c44cf6.png#align=left&display=inline&height=461&originHeight=461&originWidth=1303&size=0&status=done&style=none&width=1303) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/5.png)

#### 1.3 Conectar um Dispositivo

Fixe o BitWear ao micro:bit. Use um cabo USB para conectar o micro:bit ao seu PC. Certifique-se de que o indicador LED no micro:bit acenda.

#### 1.4 Baixar um Programa

Você já foi apresentado a como baixar um programa nos [tutoriais anteriores](https://docproxy.tinkergen.com/web/#/2?page_id=329), o que pode ser simplificado nas etapas: renomear um programa, clicar no botão "Download" e enviá-lo para o micro:bit.

#### 1.5 Executar um Programa

Ligue o interruptor de energia no BitWear e veja se o programa consegue ser executado normalmente.

### 2. Detector de Luz

#### 2.1 Implementação

Com um BitWear conectado, o micro:bit mostra uma carinha sorridente se o nível de luz for maior que 80; caso contrário, o BitWear vibra e o micro:bit mostra uma carinha triste e reproduz a melodia Baddy. (O nível de luz especificado pode ser diferente em um cenário real; você pode ajustá-lo conforme necessário.)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991125-adfecd70-04c0-4415-9c82-829929c8e68c.png#align=left&display=inline&height=494&originHeight=494&originWidth=878&size=0&status=done&style=none&width=878) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/6.png)

#### 2.2 Escrever um Programa

Observe que o MakeCode não fornece blocos para controlar o BitWear. Portanto, precisamos adicionar manualmente uma extensão no MakeCode para garantir que tudo funcione bem. Vamos aprender como fazer isso agora!
Como Adicionar uma Extensão BitWear:
Acesse o MakeCode:
[https://makecode.microbit.org](https://makecode.microbit.org/)

<!-- - Step 1: Create a new project to enter the workspace. Click the gear icon (for settings) on the blue bar.![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991129-3a81d155-0279-412d-a66f-28ab0f9530cb.png#align=left&display=inline&height=496&originHeight=496&originWidth=1014&size=0&status=done&style=none&width=1014) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/7.png)

- Etapa 2: Selecione Extensions na lista suspensa, o que levará você à página de extensões.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991368-facfd798-ea8e-4703-89d8-78114f26d22e.png#align=left&display=inline&height=638&originHeight=638&originWidth=834&size=0&status=done&style=none&width=834) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/8.png)

- Etapa 3: Insira o endereço da extensão BitWear na caixa de pesquisa: [https://github.com/TinkerGen/pxt-BitWear](https://github.com/TinkerGen/pxt-BitWear)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991151-7ca03e5e-ce2a-4c82-b993-788be270b4e7.png#align=left&display=inline&height=455&originHeight=455&originWidth=1007&size=0&status=done&style=none&width=1007) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/9.png)

> Se for exibida a mensagem de que a extensão não existe, feche o navegador e entre no MakeCode para tentar novamente.

- Etapa 4: Clique no pacote de extensão, o que levará você de volta ao espaço de trabalho. Você verá que a extensão BitWear foi adicionada com sucesso.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991400-25ce2189-c8b8-461d-ae36-98595d4c26a4.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/10.png)

Vamos prosseguir com a tarefa depois de termos adicionado a extensão.

Primeiro, adicione um bloco forever e conecte uma instrução IF-THEN-ELSE dentro.
Siga esta lógica de programa e código: se o nível de luz for maior que 80, então o micro:bit mostrará uma carinha sorridente; caso contrário, o BitWear irá vibrar, e o micro:bit mostrará uma carinha triste e reproduzirá a melodia Baddy.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607655991145-87f4c2d0-d211-489c-8886-8d5f257f1968.png#align=left&display=inline&height=635&originHeight=635&originWidth=1264&size=0&status=done&style=none&width=1264) -->
![](https://files.seeedstudio.com/wiki/microbit/bitwear/11.png)

#### 2.3 Conectar um Dispositivo

Fixe o BitWear ao micro:bit. Use um cabo USB para conectar o micro:bit ao seu PC. Certifique-se de que o indicador LED no micro:bit acenda.

#### 2.4 Baixar um Programa

Você já foi apresentado a como baixar um programa nos tutoriais anteriores, o que pode ser simplificado nas etapas: renomear um programa, clicar no botão "Download" e enviá-lo para o micro:bit.

#### 2.5 Executar um Programa

Ligue o interruptor de energia no BitWear e veja se o programa consegue ser executado normalmente.

:::note
Como não há sensor de luz integrado em um micro:bit, o micro:bit usa a matriz de LEDs para detectar a luz ao seu redor. Os atuadores LED são constantemente convertidos em sinais de entrada e fazem amostras da duração de atenuação de tensão, que é aproximadamente proporcional ao nível de luz do ambiente ao redor.
:::

## Materiais do Curso

Você pode ver materiais de curso relacionados sobre o micro:bit e o BitWear em nossa plataforma de aprendizagem online Make2Learn por meio deste endereço: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Anexos

#### [Anexo: Código-fonte do Tutorial BitWear](https://tinkergen.com/filedownload/179236)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
