---
description: Micro_bit BitMaker
title: BitMaker
keywords:
  - Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitMaker
last_update:
  date: 12/29/2023
  author: Seraphina
createdAt: '2024-01-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BitMaker/
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249977-72e43eb6-aa32-4fa3-8e31-d49d1110d946.png#height=466&id=TVoRI&originHeight=466&originWidth=800&originalType=binary&ratio=1&size=0&status=done&style=none&width=800) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/1.png)

## Introdução

BitMaker é uma placa de expansão do tamanho de um cartão de crédito, plug and play, que faz a ponte entre módulos Grove e um micro:bit. Ela incorpora 4 LEDs RGB, 1 buzzer integrado para tocar melodias e 6 portas Grove (uma delas é uma porta I2C) que permitem ao micro:bit conectar-se a centenas de módulos, como sensores, atuadores, módulos de comunicação e displays.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656250001-d4b242c7-636e-430b-8565-1503c4272f34.png#height=384&id=zyWSH&originHeight=384&originWidth=1123&originalType=binary&ratio=1&size=0&status=done&style=none&width=1123) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/2.png)

:::note
Depois de baixar um programa para o micro:bit, certifique-se de que o BitMaker esteja conectado à alimentação por meio de um cabo micro USB.
:::

## Tutoriais

Aqui estão alguns tutoriais relacionados para ajudar você a começar a usar o BitMaker.

### 1. Mini Reprodutor de Música

#### 1.1 Implementação

Este é um reprodutor de música muito legal que pode tocar uma música de aniversário e piscar luzes amarela e verde.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249956-97e452a2-7a79-46f5-ab56-4f84a2333b3a.png#height=337&id=Q8LWx&originHeight=337&originWidth=599&originalType=binary&ratio=1&size=0&status=done&style=none&width=599) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/3.png)

#### 1.2 Escrever um Programa

Observe que no MakeCode não temos blocos para controlar os LEDs RGB. Portanto, precisamos adicionar uma extensão Neopixel no MakeCode para garantir que tudo funcione bem. Vamos aprender como fazer isso agora!
[How to Add the Neopixel Extension]
Vamos acessar o MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)

- Passo 1 Clique no ícone de engrenagem (para configurações) na barra azul do MakeCode.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249950-b8584720-ef46-4f7f-83ac-0f6ac745f224.png#height=549&id=f8O2j&originHeight=549&originWidth=1124&originalType=binary&ratio=1&size=0&status=done&style=none&width=1124) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/4.png)

- Passo 2 Selecione “Extensions” na lista suspensa, o que levará você à página de extensões.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249951-f3c071db-d274-45d5-b10e-f83303155562.png#height=653&id=Zd6ki&originHeight=653&originWidth=853&originalType=binary&ratio=1&size=0&status=done&style=none&width=853) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/5.png)

- Passo 3 Insira o endereço da extensão Neopixel na caixa de pesquisa: [https://www.adafruit.com/category/168](https://www.adafruit.com/category/168)

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249966-9061a1f4-eaea-4070-9416-d32bc76663f6.png#height=826&id=Gpf25&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/6.png)

> Se for exibido um aviso de que essa extensão não existe, feche o navegador e tente novamente.

- Passo 4 Clique no pacote de extensão, o que o levará de volta à página inicial. Você verá que a extensão Neopixel foi adicionada com sucesso.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249970-0c17f823-8b1c-4ea0-8e65-74fae74c493b.png#height=826&id=rHYia&originHeight=826&originWidth=1552&originalType=binary&ratio=1&size=0&status=done&style=none&width=1552) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/7.png)

Vamos passar para a tarefa depois de adicionarmos a extensão.

:::note
Se você quiser adicionar uma extensão BitMaker, siga as mesmas instruções acima. Extensão BitMaker: [https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
:::

Primeiro, adicione um bloco “on start”. Vá até a guia “Music” e conecte o bloco “start melody repeating” logo abaixo. Selecione uma música de aniversário nesse bloco. Em seguida, arraste e solte o bloco “forever”. Defina o número inicial de LEDs como 4 e confirme o formato de cor. Siga esta lógica de programa: a faixa primeiro pisca em vermelho; após 0,5 segundos, a faixa pisca em verde e pausa por mais 0,5 segundos.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656249961-3f674736-8e2a-4dd3-bab0-f2177cd17f71.png#height=514&id=FqxUe&originHeight=514&originWidth=1193&originalType=binary&ratio=1&size=0&status=done&style=none&width=1193) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

#### 1.3 Conectar um Dispositivo

Deslize diretamente o micro:bit no BitMaker e tome cuidado para não invertê-lo. Em seguida, conecte o micro:bit ao seu PC com um cabo USB. Verifique se o LED indicador no micro:bit acende. Caso contrário, você precisa desconectar o cabo USB e conectá-lo aos dispositivos novamente.

#### 1.4 Baixar um Programa

Você já foi apresentado a como baixar um programa nos [tutoriais anteriores](#), o que pode ser simplesmente resumido nos seguintes passos: renomear um programa, clicar no botão “Download” e enviá-lo para o micro:bit.
<!-- [previous tutorials](#https://docproxy.tinkergen.com/web/#/2?page_id=329) -->

#### 1.5 Executar um Programa

Ligue a chave no BitMaker e veja se o micro:bit consegue funcionar normalmente.

### 2. Outros Tutoriais

Como mencionado no início, o BitMaker é capaz de fazer a ponte entre módulos Grove e um micro:bit. Fornecemos tutoriais específicos em [4.3 BitGadget Kit](#) para mostrar a você como fazer isso. Se você tiver alguns módulos Grove com você, siga em frente e acompanhe os tutoriais para iniciar seus projetos. Se não tiver, visite nossa TinkerGen Shop e compre!

> BitMaker é compatível com todos os módulos Grove.
<!-- [4.3 BitGadget Kit](#https://docproxy.tinkergen.com/web/#/2?page_id=325)  -->

## Materiais do Curso

Você pode ver materiais de curso sobre o micro:bit e o BitMaker em nossa plataforma de aprendizado online Make2Learn através deste endereço: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Anexos

Anexo: https://files.seeedstudio.com/wiki/microbit_wiki_page/microbit-music player.hex

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
