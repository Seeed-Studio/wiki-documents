---
description: Micro_bit BitMaker lite
title: BitMaker Lite
keywords:
  - Micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BitMaker_lite
last_update:
  date: 12/29/2023
  author: Seraphina
createdAt: '2024-01-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BitMaker_lite/
---


<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-e058e745-c2f4-4263-8a0b-9c38faa4085d.png#align=left&display=inline&height=512&originHeight=512&originWidth=814&size=0&status=done&style=none&width=814) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/8.png)

## Introdução
BitMaker Lite é uma versão compacta e simplificada do BitMaker. Ele possui apenas 3 portas Grove, mas isso é suficiente para muitos projetos. A praticidade de plug & play significa que você pode implementar facilmente um projeto usando um módulo Grove. O buzzer incluído também possibilita muitos projetos de áudio interessantes, por exemplo, um piano de frutas. Se você quiser acessar mais GPIOs, o BitMaker Lite também fornece saídas de todos os pinos disponíveis do micro:bit; você pode soldar conectores de pinos para usá-los.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416911-961efb23-8578-4cfa-a224-29da21dcd517.png#align=left&display=inline&height=419&originHeight=419&originWidth=1156&size=0&status=done&style=none&width=1156) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/10.png)

## Tutoriais
### 1. Reprodutor de Música
#### 1.1 Implementação

O micro:bit reproduz uma música de aniversário uma vez ao ser ligado.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416918-8d8828f3-a79b-45ad-a721-186f3f7756fb.png#align=left&display=inline&height=399&originHeight=399&originWidth=709&size=0&status=done&style=none&width=709) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/11.png)

#### 1.2 Escrever um Programa
Adicione o bloco ao iniciar e conecte o bloco iniciar melodia (dadadum) repetindo (uma vez), na aba Music. Selecione uma música de aniversário nesse bloco.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416887-1ca9e66a-ee00-4f89-83cf-7b8faafdfa3b.png#align=left&display=inline&height=171&originHeight=171&originWidth=535&size=0&status=done&style=none&width=535) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/12.png)

#### 1.3 Conectar um Dispositivo
Deslize o micro:bit no BitMaker Lite e tome cuidado para não inverter a posição. Conecte o micro:bit ao seu PC com um cabo USB. Verifique se o LED indicador no micro:bit acende. Caso contrário, o cabo USB pode estar conectado de forma incorreta.

#### 1.4 Baixar um Programa
Você já foi apresentado a como baixar um programa nos [tutoriais anteriores](https://docproxy.tinkergen.com/web/#/2?page_id=329), o que pode ser simplificado nos passos: renomear um programa, clicar no botão “Download” e enviá-lo para o micro:bit.

#### 1.5 Executar um Programa
Ligue o interruptor no BitMaker Lite e veja se o micro:bit reproduz a música de aniversário.


### 2. Diversão com o Acelerômetro
#### 2.1 Implementação

O micro:bit mostra um padrão e reproduz uma melodia correspondente toda vez que realiza gestos diferentes.

<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416904-9f5c413e-032f-4651-8d51-303ca7f57420.png#align=left&display=inline&height=490&originHeight=490&originWidth=632&size=0&status=done&style=none&width=632) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/13.png)

#### 2.2 Escrever um Programa
Siga a lógica do programa e o código:<br />
Ao ligar, o micro:bit mostra um ícone de coração.<br />
Quando o micro:bit chacoalha, a tela é limpa e não mostra nada.<br />
Quando o logo está apontado reto para cima, o micro:bit mostra uma seta para “Norte” e reproduz a melodia “jump up”.<br />
Quando o logo está apontado reto para baixo, o micro:bit mostra uma seta para “Sul” e reproduz a melodia “jump down”.<br />
Quando o micro:bit inclina para a esquerda, ele mostra uma seta para “Oeste” e reproduz a melodia “dadadum”.<br />
Quando o micro:bit inclina para a direita, ele mostra uma seta para “Leste” e reproduz a melodia “entertainer”.<br />
Quando a tela está virada para cima, o micro:bit mostra um rosto feliz e reproduz a melodia “power up”.<br />
Quando a tela está virada para baixo, o micro:bit mostra um rosto triste e reproduz a melodia “power down”.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416885-b70ab193-d5c2-47d1-ab29-bdb3452d6aa2.png#align=left&display=inline&height=741&originHeight=741&originWidth=982&size=0&status=done&style=none&width=982) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/14.png)

#### 2.3 Conectar um Dispositivo
Deslize o micro:bit no BitMaker Lite e tome cuidado para não inverter a posição. Conecte o micro:bit ao seu PC com um cabo USB. Verifique se o LED indicador no micro:bit acende. Caso contrário, o cabo USB pode estar conectado de forma incorreta.

#### 2.4 Baixar um Programa
Você já foi apresentado a como baixar um programa nos tutoriais anteriores, o que pode ser simplificado nos passos: renomear um programa, clicar no botão “Download” e enviá-lo para o micro:bit.

#### 2.5 Executar um Programa
Ligue o interruptor no BitMaker Lite e veja se o programa consegue rodar normalmente.

### 3. Outros Projetos

Como mencionado desde o início, o BitMaker Lite é capaz de fazer a ponte entre módulos Grove e um micro:bit. Fornecemos tutoriais específicos em [4.2 BitStarter Kit](https://docproxy.tinkergen.com/web/#/2?page_id=403) para mostrar como fazer isso. Se você tiver alguns módulos Grove com você, vá em frente e siga os tutoriais para iniciar seus projetos. Se não tiver, visite nossa loja TinkerGen e peça alguns!

> O BitMaker Lite é compatível com todos os módulos Grove.

#### Adicionando uma Extensão
Para habilitar módulos Grove quando um BitMaker Lite é utilizado, precisamos adicionar uma extensão ao MakeCode. Vamos descobrir como fazer isso:

- Acesse o MakeCode: [https://makecode.microbit.org](https://makecode.microbit.org/)
- Crie um novo projeto para entrar no espaço de trabalho. Clique no ícone de engrenagem (para configurações) na barra azul.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416889-8342e086-2cdc-4416-bbbf-95d991f48444.png#align=left&display=inline&height=524&originHeight=524&originWidth=1072&size=0&status=done&style=none&width=1072) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/15.png)

- Selecione Extensions na lista suspensa, o que levará você à página de extensões.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416908-ee4ae33c-ffc2-44b8-a127-bf55f7e4e0e5.png#align=left&display=inline&height=712&originHeight=712&originWidth=931&size=0&status=done&style=none&width=931) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/16.png)

- Insira o endereço da extensão do BitMaker Lite na caixa de pesquisa: [https://github.com/TinkerGen/pxt-BitMaker](https://github.com/TinkerGen/pxt-BitMaker)
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416930-10133e74-2d1f-41d1-9a3c-1c29482f27a3.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/17.png)

> Se for exibida uma mensagem informando que a extensão não existe, feche o navegador e entre novamente no MakeCode para tentar de novo.

- Clique no pacote de extensão, o que o levará de volta ao espaço de trabalho. Você verá que a extensão Grove foi adicionada com sucesso.
<!-- ![](https://cdn.nlark.com/yuque/0/2020/png/2701823/1607656416925-93ed4b5a-8d37-4841-be77-0d6564d01cc8.png#align=left&display=inline&height=937&originHeight=937&originWidth=1920&size=0&status=done&style=none&width=1920) -->
![](https://files.seeedstudio.com/wiki/microbit/bitmaker/18.png)


## Materiais do Curso
Você pode ver materiais de curso relacionados ao micro:bit e ao BitMaker Lite em nossa plataforma de aprendizagem online Make2Learn através deste endereço: [https://make2learn.tinkergen.com/](https://make2learn.tinkergen.com/)

## Anexos
#### [Anexo: Código-fonte do Tutorial BitMaker Lite](https://tinkergen.com/filedownload/179268)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
