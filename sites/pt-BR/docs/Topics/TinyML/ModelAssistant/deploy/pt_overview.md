---
description: Implantação para Model Assistant
title: Implantação
keywords:
  - sscma model assistant ai tinyml
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ModelAssistant_Deploy_Overview
last_update:
  date: 01/11/2024
  author: LynnL4
createdAt: '2023-12-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ModelAssistant_Deploy_Overview/
---

# Implantação

SSCMA é um projeto de código aberto que fornece uma ferramenta visual de implantação de modelos sem código e um SDK baseado em CPP. Ele permite que os usuários implantem modelos facilmente em diferentes plataformas sem escrever código complexo.

As plataformas atualmente suportadas incluem:

| Dispositivo | SenseCraft-AI | SSCMA-Micro SDK |
| :--- | :--- | :--- |
| [Xiao ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html) | ✅ | ✅ |
| [Grove Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html) | ✅ | ✅ |

## SenseCraft-AI

SenseCraft-AI é uma ferramenta visual de implantação de modelos fornecida pelo SSCMA. Com esta ferramenta, os usuários podem implantar modelos facilmente em várias plataformas por meio de operações simples. A ferramenta fornece uma interface amigável e não requer nenhuma programação.

Os principais recursos do [SenseCraft-AI](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/) incluem:

- Interface visual sem necessidade de habilidades de programação
- Implantação rápida de modelos em diferentes plataformas
- Suporte para modelos TFLite

Passo 1. Abra o site do SenseCraft-AI

<div align="center">
  <a href="https://seeed-studio.github.io/SenseCraft-Web-Toolk"><img width="10%" src="https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"/></a>
</div>

Passo 2. Conecte o dispositivo ao seu computador

Conecte seu dispositivo ao computador usando um cabo de dados com capacidade de transferência de dados.

Passo 3. Selecione e conecte seu dispositivo

Depois de entrar na página inicial do SenseCraft-AI, precisamos primeiro conectar o dispositivo. Clique no botão connect.

![step3-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-1.png)

Em seguida, uma janela irá aparecer no navegador. Precisamos selecionar aqui a porta correta do Xiao. Para sistemas Windows, a porta geralmente começa com COM, enquanto para sistemas MacOS, a porta geralmente começa com /dev/tty e tem o rótulo USB JTAG. Se você não tiver certeza sobre a porta correta, atualize esta página após conectar o dispositivo e clique novamente no botão connect, então você verá a nova porta aparecendo na lista suspensa.

![step3-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step3-2.png)

Passo 4. Escolha seu modelo

Assim que o botão connect se transformar em um botão disconnect vermelho, podemos selecionar o modelo na lista "Available AI Models". Aqui, escolhi reconhecimento facial como demonstração. Após a seleção, clique no botão send e aguarde alguns segundos.

![step4-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step4-1.png)

Passo 5. Implemente seu modelo

![step5-1](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-1.png)

Por fim, chegamos à seção de visualização. Clique uma vez no botão stop no canto superior direito e, em seguida, clique no botão invoke. Se tudo correr bem, você poderá ver efeitos de tela em tempo real.

![step5-2](https://files.seeedstudio.com/sscma/docs/static/deploy/step5-2.png)

## SSCMA-Micro SDK

SSCMA também fornece um SDK baseado em CPP chamado SSCMA-Micro, permitindo que os usuários implantem modelos em seus próprios projetos. Ao integrar o SSCMA-Micro, os usuários podem usar de forma conveniente os modelos implantados em suas aplicações.

Os recursos do SDK [SSCMA-Micro](https://github.com/Seeed-Studio/SSCMA-Micro) incluem:

- Baseado em CPP, adequado para vários sistemas e plataformas embarcados
- Fornece uma API simples porém poderosa para invocação e inferência de modelos
- Suporte para modelos TFLite


:::tip
Mais exemplos chegarão em breve, fique ligado.
:::
