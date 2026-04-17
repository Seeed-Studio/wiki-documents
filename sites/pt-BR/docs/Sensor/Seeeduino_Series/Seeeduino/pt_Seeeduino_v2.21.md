---
description: Seeeduino V2.21
title: Seeeduino V2.21
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_v2.21
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_v2.21/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino-168p.jpg) ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino_fritzing.png)

Aqui está a página wiki tanto para o Seeeduino V2.21 Atmega 168P quanto para o Seeeduino V2.21 Atmega 328P.

Seeeduino é uma placa compatível com Arduino. Seu design é baseado no esquema Diecimila, 100% compatível com seus programas, shields e IDEs existentes. Na parte de hardware, mudanças notáveis foram feitas para melhorar a flexibilidade e a experiência do usuário.

## Recursos ##

- Herda todos os recursos do Arduino Diecimila.

- Compatível com o layout de pinos, furos para parafuso e dimensões do Diecimila.

- Evoluiu com componentes SMD

- Melhorado em extensibilidade e conveniência

## FAQ ##

Aqui está o FAQ do Seeeduino, agora na versão v2.21. Os usuários podem listar aqui as Perguntas Frequentes, conforme o exemplo abaixo:

### O que é o Seeeduino ###

**Resposta:** Seeeduino é um ...

### Como eu uso o Seeduino 328 com o Arduino IDE? ###

Resposta: Selecione "Arduino Dueminalove 328" no Arduino IDE e também certifique-se de que a chave de reset esteja ajustada para AUTO para programação.

### Quais tensões posso alimentar através do conector de energia JST ###

**Resposta:** Esta é uma resposta não oficial (enviada por usuário). O conector JST é conectado a um regulador de tensão L1117-50, que reduz a tensão de entrada para 5,0 VCC. O L1117 é um regulador LDO (low-drop out), portanto precisa de no mínimo +1,2 volts acima da tensão regulada para operar. Em conclusão, você precisa de um mínimo de pelo menos 6,2 VCC, mas mais é preferível. A tensão máxima é de 15 volts CC para o regulador; entretanto, isto assume o melhor caso para o regulador. Para ficar no lado seguro, com margens adequadas em ambas as extremidades, você deve manter a tensão entre 7 VCC e 13 VCC.

### Qual é a função da chave M_RST_A ? ###

""Resposta:""A chave M_RST_A, ao ligar 'M' significa que, quando você fizer o download do programa, a placa será reiniciada automaticamente; ao ligar 'A' não irá reiniciar automaticamente; o padrão é deixar 'M' ligado

## Suporte ##

Se você tiver dúvidas ou outras ideias de design melhores, pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou **wish** para discutir.

## Rastreador de Versão ##

|Revisão|Descrições|Data de Lançamento|
|---|---|---|
 |Seeeduino V0.9|Lançamento público inicial||
 |Seeeduino v1.1|**1.** Bug corrigido - via desnecessária no fio do pino 4. **2.** Bug corrigido - rótulo coberto por engano pelos interruptores. **3.** Adicionadas porta I2C e de sensor. **4.** Adicionado um capacitor de 100uF para o interruptor vcc. **5.** Agrupados novos pinos em grade de 100mil. **6.** Botões de reset substituídos por botões metálicos. **7.** Textos e rótulos reorganizados para indicações mais claras.||
 |Seeeduino v2.12|**1.** Consumo de energia externa zero quando desligado **2.** Interruptores mais robustos **3.** Segunda fonte de alimentação para entrada direta de 5V. [Caution] USE APENAS 5V! **4.** Capacidade de acionamento de 150mA em 3,3V **5.** PCB fina de 1,0mm para menor peso **6.** Linha extra reservada para cabeçalhos de pinos||
 |Seeeduino v2.2|**1.** Seleção automática entre alimentação USB/EXT **2.** Atualização do capacitor de alimentação **3.** Layouts limpos **4.** Reset mais fácil **5.** Cristal de quartzo real **6.** Diodo de alimentação externa alterado para 1N4004 (mais potência no pino Vin)|16 de dez. de 2010|
 |Seeeduino v2.21|1. Atualizado para conector mini USB mais robusto.|12 de jan. de 2011|
 |Seeeduino v3.0|1. mudar conector JST para conector Jack DC|1º de jan. de 2012|

## Rastreador de Bugs ##

O Rastreador de Bugs é o lugar onde você pode publicar quaisquer bugs que ache ter encontrado durante o uso. Por favor, escreva o que você tem a dizer; suas respostas nos ajudarão a melhorar nossos produtos.

- O conector mini-USB pode se soltar da placa muito facilmente se você aplicar força lateral enquanto um cabo mini-USB estiver conectado. Considere usar um cabo USB de extensão e evite conectar/desconectar o cabo mini-USB à/da placa Seeduino com muita frequência.

## Ideia Adicional ##

A Ideia Adicional é o lugar para escrever suas ideias de projeto sobre este produto ou outros usos que você encontrou. Ou você pode escrevê-las na página de Projetos.

## Como comprar ##

Aqui para comprar Seeeduino v2.21 [(Atmega 168P)](https://www.seeedstudio.com/depot/seeeduino-v221-atmega-168p-p-690.html) e Seeeduino v3.0 [(Atmega 328P)](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=132_133) na SEEED **Bazaar**

## Licenciamento ##

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição-CompartilhaIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código-fonte para detalhes.

## Recursos ##

- **[PDF]** [Esquemático em pdf](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/res/Seeeduino_v2.21.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
