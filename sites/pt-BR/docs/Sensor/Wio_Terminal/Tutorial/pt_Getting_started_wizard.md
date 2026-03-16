---
description: Assistente de primeiros passos
title: Assistente de primeiros passos
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_started_wizard
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Getting_started_wizard/
---

# Crie um Modelo de ML em 5 Minutos e Faça o Deploy no Wio Terminal com Edge Impulse

## **Introdução**

A Edge Impulse lançou um novo **Getting Started Wizard** que é muito amigável para iniciantes em Machine Learning. Ele usa o modelo de detecção de palavra‑chave com few-shot que permite gravar uma frase curta, melhorando automaticamente seu conjunto de dados para fornecer um modelo open source em menos de 5 minutos. O modelo pode ser aplicado no Wio Terminal. Neste wiki, vamos mostrar como usar o "wizard" e depois fazer o deploy do modelo gerado pelo wizard no Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## **Primeiros passos com Edge Impulse**

Agora vamos apresentar como iniciar o Getting Started Wizard e em seguida mostrar as instruções.

### **Hardware**

**Hardware Necessário**

Nesta demonstração você precisará dos dispositivos listados abaixo:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- PC
- Microfone para o PC
- Cabo Type-C

**Conexão de Hardware**

Ele é conectado a um computador através do cabo Type-C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"/></div>

### **Software**

**Software Necessário**

- [Arduino IDE](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/)

O projeto é baseado na plataforma Arduino, o que significa que o Arduino IDE e várias bibliotecas Arduino são necessários. Se esta é sua primeira vez usando o Wio Terminal, recomendamos um guia para rapidamente [Começar a usar o Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/).

### Iniciando o Treinamento no Edge Impulse

Primeiro, você precisa ter sua própria conta Edge Impulse e então criar um projeto.

- **Passo 1**. Abra o [site da Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1) e registre uma conta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots1.png"/></div>

- **Passo 2**. Crie um novo projeto.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png"/></div>

- **Passo 3**. Clique no botão **"Launch getting started wizard"** na parte inferior da página "Dashboard" e inicie o wizard.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"/></div>

- **Passo 4**. Siga as instruções clicando no botão.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"/></div>

- **Passo 5**. Insira uma palavra ou uma frase curta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"/></div>

- **Passo 6**. Grave você mesmo dizendo as palavras por 38 segundos através do microfone do computador.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"/></div>

Certifique-se de gravar com clareza e coletar dados suficientes, caso contrário você será solicitado a coletar mais.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"/></div>

Assim que você coletar o suficiente, o bloco aparecerá.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"/></div>

- **Passo 7**. Clique em "Next" e o Edge Impulse irá ajudá-lo a misturar outras palavras juntamente com ruído de fundo no seu conjunto de dados.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"/></div>

E então o modelo poderá aprender a distinguir entre suas palavras e outros sons.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"/></div>

- **Passo 8**. Siga as instruções e crie "the impulse".

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"/></div>

Ele pode extrair as características que podem ser usadas para machine learning.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"/></div>

Ele funciona automaticamente; clique em "Next" quando for concluído

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"/></div>

- **Passo 9**. Siga as instruções e treine uma rede neural para o seu modelo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"/></div>

Prossiga até que o modelo tenha sido treinado.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"/></div>

Você pode usar o microfone novamente e verificar seus resultados.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"/></div>

Parabéns pelo seu novo modelo de classificação de palavras! Agora podemos fazer o deploy do modelo no nosso Wio Terminal.

### Faça o Deploy do Modelo de Machine Learning no Wio Terminal

Aqui vamos fazer o deploy do nosso modelo no Wio Terminal.

- **Passo 10**. Selecione e clique na coluna "Deployment" à esquerda. Em seguida, escolha "Arduino Library"; na parte inferior selecione "build" para criar a biblioteca necessária no seu Arduino. Ele fará o download automático de um arquivo zip que inclui a biblioteca de terceiros.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Alots/Alots19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"/></div>

O nome da biblioteca desejada está relacionado ao nome do projeto, o que significa que qualquer que seja o nome que você tenha dado ao projeto no **passo 2** será exibido aqui. Isso pode ajudá-lo a encontrar o arquivo correto de que você precisa.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"/></div>

- **Passo 11**. Baixe o código de reconhecimento de áudio [aqui](https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino) e abra-o com o Arduino IDE. Enquanto isso, é necessário adicionar o arquivo .zip baixado para que você possa aplicar a biblioteca de terceiros.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"/></div>

Altere o nome da biblioteca de terceiros para o seu próprio e as palavras que você disse no primeiro momento.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"/></div>

Por fim, você pode dizer as palavras e observar se o Wio Terminal as exibe.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"/></div>
