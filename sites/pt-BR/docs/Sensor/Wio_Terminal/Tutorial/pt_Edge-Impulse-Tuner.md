---
description: Ajustador do Edge Impulse
title: Ajustador do Edge Impulse
keywords:
  - Tutorial do Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edge-Impulse-Tuner
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edge-Impulse-Tuner/
---

# EON Tuner - Função Otimizada no Edge Impulse

## **Introdução**

O Edge Impulse introduziu uma função otimizada que pode otimizar modelos de Machine Learning embarcados e o uso de memória dos dispositivos. Ajustando os parâmetros, ela ajuda pessoas que não estão familiarizadas com algoritmos de Machine Learning a também conseguirem selecionar rapidamente o melhor modelo de aprendizado para sua aplicação. Enquanto isso, permite que os dispositivos usem menos memória e menos desempenho, o que significa que pode ajudar as pessoas a implantar o modelo TinyML em certos equipamentos dentro das restrições.

O EON Tuner primeiro analisa seus dados de entrada, possíveis blocos de processamento de sinal e arquiteturas de rede neural. Em seguida, ele fornece uma visão geral das possíveis arquiteturas de modelo que atenderão aos requisitos de latência e memória do dispositivo escolhido. Você pode escolher qualquer uma delas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## **A Posição do EON Tuner**

![](https://files.seeedstudio.com/wiki/EON-Tuner/weizhituner.png)

Como você pode ver, a posição do EON Tuner é no lado esquerdo da página do projeto do [Edge Impulse](https://www.edgeimpulse.com/) e logo abaixo da classificação. Quando você finalizar suas aplicações, pode facilmente selecionar o Tuner para aprimorar seus projetos.

## **A Melhoria do EON Tuner**

Este é o exemplo que mostra a diferença entre usar o EON Tuner e não usá‑lo.

![](https://files.seeedstudio.com/wiki/EON-Tuner/duibi.png)

## **Primeiros passos**

Aqui vamos fornecer o projeto de classificação de áudio e mostrar o uso do EON Tuner. Se você estiver interessado em [Usar LoRa para transmitir dados com base em Wio Terminal e Edge Impulse](https://wiki.seeedstudio.com/pt-br/AIoTs_GPS_state_tester/), você sempre pode clicar e ver o projeto de exemplo.

### **Hardware**

**Hardware Necessário**

Neste demo você vai precisar dos dispositivos listados abaixo:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal Chassis - Battery (Opcional)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**Conexão de Hardware**

Ele é conectado a um computador através do cabo Type‑C.

![](https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png)

### **Software**

**Software Necessário**

- [Arduino IDE](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/)

### Machine Learning com Wio Terminal

Aqui vamos mostrar como usar o Wio Terminal para treinar um modelo de Machine Learning e utilizá‑lo. O projeto é baseado na plataforma Arduino, o que significa que o Arduino IDE e várias bibliotecas Arduino são necessários. Se esta é sua primeira vez usando o Wio Terminal, recomendamos um guia para rapidamente [Começar com o Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/).

#### Iniciando o Treinamento no Edge Impulse

Primeiro, você precisa ter sua própria conta no Edge Impulse e então criar um projeto.

- **Passo 1**. Abra o [site do Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1) e registre uma conta.

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **Passo 2**. Crie um novo projeto.

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Conectando o Site ao Wio Terminal

- **Passo 3**. Baixe o firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) para a preparação da conexão.

Conforme sugerido nas diretrizes de [Começar com o Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/):

 Ao pressionar duas vezes o botão de reset na parte inferior esquerda do Wio Terminal (já conectado ao seu PC), você verá uma unidade (como "Arduino (F:)" abaixo) aparecer no computador. Então você pode arrastar o firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) para essa unidade. E quando você vir a unidade desaparecer, significa que o firmware foi programado. Agora você pode ir ao site para conectar o Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **Passo 4**. Depois que o firmware estiver configurado, clique em "connect using WebUSB" para conectar o Wio Terminal ao site.

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

Quando "Device", "Label" e "Sensor" como abaixo aparecerem, isso significa que a conexão foi concluída e a aquisição de dados pode ser ativada.

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### Aquisição de Dados

Agora você pode coletar dados no Edge Impulse.

- **Passo 5**. Insira "Label", "Sample length (ms.)" e clique em "Start sampling"

  - "Label" significa as categorias que você quer classificar.
  - "Sample length" significa o tempo da sua amostragem.

O projeto de exemplo que fazemos aqui é classificação de áudio, então vamos usar o microfone embutido.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji.png)

É altamente recomendado amostrar os dados mais de 10 vezes. Como a gravação precisa usar a SPI Flash, que irá operar apagamentos, o tempo que leva geralmente é maior do que o que definimos. (Neste projeto leva cerca de 7 segundos e ainda assim o tempo definido é de '3 segundos').

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji2.png)

#### Geração do Modelo de Machine Learning

Depois que os dados forem coletados, você pode usá‑los para treinar seu modelo de ML.

- **Passo 6**. Após a amostragem dos dados, clique em "create impulse" para processar os dados.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji3.png)

O bloco de processamento e o bloco de aprendizado que selecionamos aqui são Audio(MFE) e Neural Network (Keras). Você pode encontrá‑los adicionando um bloco de processamento e adicionando um bloco de aprendizado. Depois disso, clique em "Save Impulse" e prossiga.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji4.png)

- **Passo 7**. Vá para a página "Spectral features" e, em seguida, até o final clique em "Save parameters"; isso o levará automaticamente para o lado "Generate feature". Os dados podem parecer:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi.png)

Aqui está o lado "Generate feature"; ele pode ajudar a traduzir seus dados para as características necessárias em Machine Learning.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi2.png)

Clique em "Generate feature" e o resultado deve aparecer à direita:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi3.png)

- **Passo 8**. Vá para a página "NN Classifier" para usar suas características treinando um modelo de Machine Learning. Na parte inferior da página, clique em "Start training".

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi4.png)

A saída do treinamento fica à direita da página; quando você vir a saída, isso significa que o modelo foi gerado.

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

Como você pode ver aqui, a saída não é o que esperávamos:

![](https://files.seeedstudio.com/wiki/EON-Tuner/inputfail.png)

É opcional recoletarmos os dados novamente, mas outro método que podemos usar aqui é o **"EON Tuner"**.

#### Usando o EON Tuner para Otimizar o Modelo de ML

Agora podemos usar o EON Tuner para otimizar nosso modelo de Machine Learning embarcado.

- **Passo 9** Selecione "EON Tuner" à direita da página e clique em "Start EON Tuner".

![](https://files.seeedstudio.com/wiki/EON-Tuner/button.png)

Há muitos modelos de saída; os modelos que aparecem primeiro podem não ser adequados:

![](https://files.seeedstudio.com/wiki/EON-Tuner/outputfail.png)

Mas espere alguns segundos; os modelos vão sendo cada vez melhor treinados e eles realmente estarão prontos para serem implantados:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi5.png)

Clique em "Select" e o site perguntará se você deseja definir este modelo como seu modelo principal e então clique em "Yes":

![](https://files.seeedstudio.com/wiki/EON-Tuner/dataupdate.png)

#### Implantação do Modelo de Machine Learning

Agora você pode implantar seu novo modelo de Machine Learning no seu Wio Terminal.

- **Passo 10**. Selecione e clique na coluna "Deployment" à esquerda.

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

Em seguida, escolha "Arduino Library"; na parte inferior selecione "build" para criar a biblioteca necessária no seu Arduino. Ele fará automaticamente o download de um arquivo zip que inclui a biblioteca de terceiros.

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

O nome da biblioteca desejada é relacionado ao nome do projeto, o que significa que qualquer que seja o nome que você tenha escrito para o projeto no **passo 2** será mostrado aqui. Isso pode ajudá‑lo a encontrar o arquivo correto de que você precisa.

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **Passo 10**. Você pode baixar o código [aqui](https://files.seeedstudio.com/wiki/EON-Tuner/EON_tuner_HelloWorld.ino) e abri‑lo com o Arduino IDE. Altere a biblioteca de terceiros pela sua própria, como acima, e então execute o código.

![](https://files.seeedstudio.com/wiki/EON-Tuner/librarymingzi.png)

Por fim, clique em "Serial Monitor" no Arduino IDE e diga ao Wio Terminal as palavras que você configurou na "Data Acquisition". O monitor deve mostrar os resultados e "quanta confiança o Wio Terminal tem" sobre o resultado, isto é, a precisão.

![](https://files.seeedstudio.com/wiki/EON-Tuner/jieguo.png)

Se você estiver interessado em qual diferença o tuner faz, pode pular o **Passo 9** e então seguir os mesmos passos para verificá‑la.
