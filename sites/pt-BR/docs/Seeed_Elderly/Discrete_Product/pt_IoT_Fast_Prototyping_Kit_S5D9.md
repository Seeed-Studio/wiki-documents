---
description: Kit de Protótipo Rápido de IoT S5D9
title: Kit de Protótipo Rápido de IoT S5D9
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IoT_Fast_Prototyping_Kit_S5D9
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-05'
url: https://wiki.seeedstudio.com/pt-br/IoT_Fast_Prototyping_Kit_S5D9/
---


## **AVISO E ISENÇÃO DE RESPONSABILIDADE IMPORTANTES**

1. As descrições de circuitos, software e outras informações relacionadas neste documento são fornecidas apenas para ilustrar o funcionamento de produtos semicondutores e exemplos de aplicação. Você é totalmente responsável pela incorporação desses circuitos, softwares e informações no projeto do seu equipamento. A Renesas Electronics não assume qualquer responsabilidade por quaisquer perdas incorridas por você ou por terceiros decorrentes do uso desses circuitos, softwares ou informações.

2. A Renesas Electronics utilizou o devido cuidado na preparação das informações contidas neste documento, mas a Renesas Electronics não garante que tais informações estejam isentas de erros. A Renesas Electronics não assume qualquer responsabilidade por quaisquer danos incorridos por você resultantes de erros ou omissões nas informações aqui incluídas.

3. A Renesas Electronics não assume qualquer responsabilidade por infração de patentes, direitos autorais ou outros direitos de propriedade intelectual de terceiros por ou decorrentes do uso dos produtos da Renesas Electronics ou de informações técnicas aqui descritas. Nenhuma licença, expressa, implícita ou de outra forma, é aqui concedida sob quaisquer patentes, direitos autorais ou outros direitos de propriedade intelectual da Renesas Electronics ou de terceiros.

4. Você não deve alterar, modificar, copiar ou de outra forma se apropriar indevidamente de qualquer produto Renesas Electronics, seja no todo ou em parte. A Renesas Electronics não assume qualquer responsabilidade por quaisquer perdas incorridas por você ou por terceiros decorrentes de tal alteração, modificação, cópia ou outra forma de apropriação indevida de produtos Renesas Electronics.

5. Os produtos Renesas Electronics são classificados de acordo com as seguintes duas classes de qualidade: &quot;Standard&quot; e &quot;High Quality&quot;. As aplicações recomendadas para cada produto Renesas Electronics dependem da classe de qualidade do produto, conforme indicado abaixo.

    - &quot;Standard&quot;: Computadores; equipamentos de escritório; equipamentos de comunicação; equipamentos de teste e medição; equipamentos de áudio e vídeo; eletrodomésticos; máquinas-ferramenta; equipamentos eletrônicos pessoais; e robôs industriais etc.

    - &quot;High Quality&quot;: Equipamentos de transporte (automóveis, trens, navios etc.); sistemas de controle de tráfego; sistemas de prevenção de desastres; sistemas anticrime; e equipamentos de segurança etc.

    - Os produtos Renesas Electronics não são destinados nem autorizados para uso em produtos ou sistemas que possam representar uma ameaça direta à vida humana ou lesão corporal (dispositivos ou sistemas artificiais de suporte à vida, implantes cirúrgicos etc.), ou possam causar sérios danos à propriedade (sistemas de controle de reatores nucleares, equipamentos militares etc.). Você deve verificar a classe de qualidade de cada produto Renesas Electronics antes de utilizá-lo em uma aplicação específica. Você não pode usar nenhum produto Renesas Electronics para qualquer aplicação para a qual ele não seja destinado. A Renesas Electronics não será, de forma alguma, responsável por quaisquer danos ou perdas incorridos por você ou por terceiros decorrentes do uso de qualquer produto Renesas Electronics para o qual o produto não seja destinado pela Renesas Electronics.

7. Você deve usar os produtos Renesas Electronics aqui descritos dentro da faixa especificada pela Renesas Electronics, especialmente no que diz respeito à classificação máxima, faixa de tensão de alimentação de operação, faixa de tensão de alimentação de potência de acionamento, características de dissipação de calor, instalação e outras características do produto. A Renesas Electronics não terá qualquer responsabilidade por falhas de funcionamento ou danos decorrentes do uso de produtos Renesas Electronics além dessas faixas especificadas.

8. Embora a Renesas Electronics se esforce para melhorar a qualidade e a confiabilidade de seus produtos, os produtos semicondutores possuem características específicas, como a ocorrência de falhas a uma determinada taxa e mau funcionamento sob certas condições de uso. Além disso, os produtos Renesas Electronics não são projetados com resistência à radiação. Certifique-se de implementar medidas de segurança para protegê-los contra a possibilidade de lesão física e lesão ou dano causado por incêndio no caso de falha de um produto Renesas Electronics, tais como projeto de segurança para hardware e software, incluindo, mas não se limitando a redundância, controle de incêndio e prevenção de mau funcionamento, tratamento apropriado para degradação por envelhecimento ou quaisquer outras medidas apropriadas. Como a avaliação apenas do software de microcontrolador é muito difícil, avalie a segurança dos produtos finais ou sistemas fabricados por você.

9. Entre em contato com um escritório de vendas da Renesas Electronics para obter detalhes sobre questões ambientais, como a compatibilidade ambiental de cada produto Renesas Electronics. Utilize os produtos Renesas Electronics em conformidade com todas as leis e regulamentos aplicáveis que regulam a inclusão ou o uso de substâncias controladas, incluindo, sem limitação, a Diretiva RoHS da UE. A Renesas Electronics não assume responsabilidade por danos ou perdas ocorridos como resultado da sua não conformidade com leis e regulamentos aplicáveis.

9. Os produtos e a tecnologia Renesas Electronics não podem ser usados ou incorporados em quaisquer produtos ou sistemas cuja fabricação, uso ou venda sejam proibidos sob quaisquer leis ou regulamentos nacionais ou estrangeiros aplicáveis. Você não deve usar produtos ou tecnologia Renesas Electronics descritos nos arquivos de projeto da placa para qualquer finalidade relacionada a aplicações militares ou uso militar, incluindo, mas não se limitando, ao desenvolvimento de armas de destruição em massa. Ao exportar os produtos ou a tecnologia Renesas Electronics descritos neste documento, você deve cumprir as leis e regulamentos de controle de exportação aplicáveis e seguir os procedimentos exigidos por tais leis e regulamentos.

10. É responsabilidade do comprador ou distribuidor de produtos Renesas Electronics, que distribui, descarta ou de outra forma entrega o produto a um terceiro, notificar esse terceiro com antecedência sobre o conteúdo e as condições estabelecidos neste documento. A Renesas Electronics não assume qualquer responsabilidade por quaisquer perdas incorridas por você ou por terceiros como resultado do uso não autorizado de produtos Renesas Electronics.

Entre em contato com um escritório de vendas da Renesas Electronics se você tiver quaisquer perguntas sobre as informações contidas neste documento ou sobre os produtos Renesas Electronics, ou se tiver quaisquer outras dúvidas.

## Guia de Início Rápido

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Quick%20Start%20Guide.jpeg)

- O link da Etapa 4: [www.renesas.com/iotsandbox/S5D9/tutorial](http://www.renesas.com/iotsandbox/S5D9/tutorial)

- O link da Etapa 5: [www.renesas.com/iotsandbox/S5D9/getstarted](http://www.renesas.com/iotsandbox/S5D9/getstarted)

## 1. Visão Geral

O Kit de Protótipo Rápido de IoT S5D9 inclui as seguintes opções de interface:

- RJ45 Ethernet 10/100Mbps x1
- USB Full Speed x1
- PMOD x1
- Conectores Grove (UART, I2C, GPIO) x2
- Entrada Digital Protegida x2
- Saída Digital Bufferizada x2
- Transceptor RS232 x2
- Conector JTAG x1

O kit também inclui os seguintes sensores on-board:

- Sensor Bosch BMC 150 de 6 eixos
- Sensor ambiental AMS ENS210
- Sensor de pressão barométrica TE Connectivity MS5637-02BA03
- Microfone SiSonic amplificado Knowles SPU0414HR5H-SB

### 1.1 Placa MCU S5D9

A Placa MCU S5D9 é o coração do Kit de Protótipo Rápido de IoT. Ela permite o protótipo rápido de aplicações que exigem conectividade Ethernet cabeada e USB juntamente com opções de expansão PMOD e Grove.

A placa inclui entradas digitais tolerantes a 24 V com proteção contra sobretensão adequadas para uso em ambientes industriais ruidosos. A placa também pode controlar duas cargas digitais, como solenóides alimentados com 24 V e que consomem até 1 A de corrente. Os drivers MOSFET incluídos possuem proteção integrada contra sobrecorrente e sobretemperatura que garantem operação robusta.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/S5D9_MCU_Board.png)

A placa S5D9 incorpora um microcontrolador Renesas Synergy com 640K KB de RAM e 2 MB de memória flash. Além disso, a placa possui uma memória flash externa de 16 MB conectada através de uma interface QSPI.

A placa pode ser alimentada usando um conector industrial Molex ou através de um conector de dispositivo USB.

A placa oferece uma variedade de opções de expansão com um PMOD e 2 conectores Grove. A interface PMOD possui jumper dedicado permitindo a interface com módulos alimentados com 3,3 V ou 5 V.

As conexões Grove consistem em uma interface UART e uma interface I2C. Os conectores Grove podem alimentar apenas módulos de 3,3 V.

A placa também inclui uma interface JTAG para programação e depuração.

## 2. Especificação do Kit de Protótipo Rápido de IoT S5D9

### 2.2.1 Especificações Elétricas

As especificações do Kit de Protótipo Rápido S5D9 estão listadas na Tabela 2.1.

Tabela 2.1 Especificações Elétricas

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Table%202.1%20Electrical%20Specifications.png)

### 2.2.2 Diagrama de Conexão

O Kit de Protótipo Rápido de IoT destina-se a possibilitar o protótipo rápido de várias aplicações. A Figura 2.1 mostra a conexão dos componentes incluídos no kit para executar o laboratório com o firmware pré-instalado na placa ou para projetar novas aplicações e fazer o download do firmware pela interface JTAG.

Figura 2.1 Diagrama de Conexão

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Connection%20Diagram.png)

## 3. Descrição da Placa MCU S5D9

### 3.1 Diagrama de Blocos

Os principais blocos funcionais da placa S5D9 são apresentados na Figura 3.1.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Figure%203.1.png)

Figura 3.1 Principais blocos funcionais da placa S5D9

Os vários módulos são os seguintes:

- O Synergy MCU, que é designado como o coração do kit pelo bloco S5D9
- Um módulo de gerenciamento de energia que inclui um regulador de tensão LDO de 3V3 necessário para o funcionamento do microcontrolador.
- SPI Flash – a memória flash S5D9 é expandida com um módulo de memória externo de 32 MB conectado por uma interface QSPI de alta velocidade. A flash externa pode ser usada para armazenamento de gráficos e outros recursos digitais ou para execução de código in place (XIP).
- LEDs definidos pelo usuário – os LEDs definidos pelo usuário são úteis para indicar o estado atual do firmware. Os 3 LEDs têm cores diferentes para fácil identificação.
- Interface de dispositivo USB – o MCU S5D9 inclui um bloco de interface USB operando em Full Speed. O conector de dispositivo USB pode ser usado para alimentar a placa.
- Interface PMOD – a placa inclui uma interface PMOD de 12 pinos que pode ser configurada por jumpers para fornecer 3,3V ou 5V em seus pinos de alimentação. Esse recurso expande a gama de módulos periféricos sem a necessidade de conversores de nível externos ou fonte de alimentação adicional.
- Interfaces Grove – os conectores Grove são compatíveis com a linha de módulos periféricos da Seeed Studio, que apresenta uma seleção muito ampla de sensores e atuadores. Um dos conectores Grove pode ser configurado para se comunicar via UART e o outro é dedicado para interface I2C.
- Interface JTAG que está disponível em um conector de 10 pinos, J20 compatível com o probe de depuração Segger. Alternativamente, um probe de interface Tag-Connect de 14 pinos pode ser usado para programar e depurar o dispositivo.

### 3.2 Disposição dos Componentes

A figura a seguir destaca os principais componentes da placa MCU S5D9.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Block%20Diagram.png)

**Figura 3.2  Principais componentes da placa MCU S5D9**

O MCU no coração da placa é um dispositivo Renesas Synergy S5D9. Ele é baseado no núcleo ARM Cortex-M4F operando a 120 MHz. A CPU possui uma unidade de ponto flutuante e unidade de controle de interrupção vetorial. O MCU adiciona flash de alto desempenho sem estados de espera e um rico conjunto de periféricos que o torna adequado para uma ampla gama de aplicações.

A memória flash QSPI de 32 MB é a Micron N25Q256A13EF840E. Ela pode ser usada para armazenar recursos digitais necessários pelo design da GUI ou até mesmo um código executável.

## 4. Fonte de Alimentação

O IoT Fast Prototyping Kit requer uma única fonte de alimentação de 5V. Ela pode ser fornecida através do conector USB Device J9 ou através do conector da série Molex MicroBlade J8.

Pin# mostra as informações de pino para os conectores de alimentação, e Function mostra as informações de pino para o conector USB.

Tabela 4.1 Conector USB Device (J9)

| Pin #        | Function |
| --- | --- |
| 1 | +5VDC |
| 2 | Data - |
| 3 | Data + |
| 4 | USB ID |
| 5 | Ground |

Figura 4.1 Regulador LDO usado na placa MCU.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/LDO%20regulators%20and%20boost%20converter%20in%20MCU%20board.jpeg)

Figura 4.1 Reguladores LDO e conversor boost na placa MCU

## 5. Conectores PMOD e Grove

A placa MCU S5D9 oferece um conector PMOD. Ele pode se conectar a módulos que requerem interface UART, I2C ou SPI. A função do PMOD depende da inicialização e do pin-muxing do MCU. O mapeamento de pinos do conector PMOD é mostrado na Tabela 5.1.

Tabela 5.1 Conector PMOD

| Pin #        | PMOD D |
| --- | --- |
| 1 | SSLB0/CTS9 – P2_5 |
| 2        | MOSI/TXD9 – P2_3 |
| 3 | MISO/RXD9 – P2_2 |
| 4 | RSPCK/SCK9 – P2_4 |
| 5 | GND |
| 6 | J6 defined 3.3/5V |
| 7 | GPIO – P7_8/IRQ11 |
| 8 | GPIO – P2_6/SSLB1_A |
| 9 | GPIO – P2_7/SSLB2_A |
| 10 |  GPIO – P8_1 |
| 11 |  GND |
| 12 | VCC (3.3V or 5V) |

O conector PMOD possui uma tensão de alimentação selecionável fornecida pelo header J6. A posição do jumper para cada opção de tensão é descrita na Tabela 5.2.

**Tabela 5.2** **Seleção de Tensão do PMOD (J6)**

| Pins | Selected Voltage |
| --- | --- |
| 1 - 2 | 3.3V |
| 2 - 3 | 5V |

Os conectores Grove oferecem as seguintes interfaces:

- Interface UART (Grove A)
- Interface I2C (Grove B)

O mapeamento de pinos dos conectores é descrito na Tabela 5.3.

**Tabela 5.3**  **Conectores Grove**

| Pins | Grove AUART | Grove BI2C |
| --- | --- | --- |
| 1 | P4_10/RXD0 | P1_0/SCL1 |
| 2 | P4_11/TXD0 | P1_1/SDA1 |
| 3 | 3.3V | 3.3V |
| 4 | GND | GND |

As Figuras 5.1 e 5.2 mostram, respectivamente, os esquemas para os conectores PMOD e Grove.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/PMOD%20schematic.jpeg)

Figura 5.1 Esquema do PMOD

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Grove%20connector%20schematic.jpeg)

Figura 5.2 Esquema do conector Grove

## 6. Interface USB

O S5D9 IoT Fast Prototyping kit fornece apenas interface de dispositivo USB. A ligação dos pinos do conector ao chip é mostrada na Tabela 6.1

Tabela 6.1 Conector USB Micro Tipo B - Modo Dispositivo (J9)

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Table%206.1%20USB%20Micro%20B%20Type%20Receptacle%20-%20Device%20Mode.png)

A Figura 6.1 descreve a implementação da interface USB:

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/USB%20interface%20implementation.jpeg)

Figura 6.1 Implementação da interface USB

## 7. Entradas e Saídas Digitais

### 7.1 Entradas e Saídas Digitais Tolerantes a 24V

A placa S5D9 inclui interface tolerante a 24V para entradas digitais e possui MOSFETs com capacidade de 1A adequados para acionar cargas indutivas como solenóides. O esquema abaixo mostra os circuitos relacionados a essas interfaces.

Figura 7.1 Entradas e Saídas Digitais

A tabela abaixo mostra o mapeamento entre as entradas e saídas digitais e os pinos correspondentes do MCU usados para interagir com elas.

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Digital%20Inputs%20and%20Outputs.jpeg)

Tabela 7.1 Mapeamento de Entradas e Saídas Digitais Tolerantes a 24V

| Molex MicroBlade **Connector J7** | Pin Type | MCU Port |
| --- | --- | --- |
| 0 | Power +5V |   |
| 1 | Ground |   |
| 2 | Red |   |
| 3 | Input – INP1 | P1_11 |
| 4 | Ground |   |
| 5 | Input – INP2 | P4_9 |
| 6 | Ground |   |
| 7 | Power +24V |   |
| 8 | Output – OUT1 | P0_8 |
| 9 | Power +24V |   |
| 10 | Output – OUT2 | P0_9 |
| 11 | Power +24V |   |
| 12 | Ground |   |

Os conectores PMOD e Grove também fornecem interface para as portas do MCU que podem ser configuradas como entradas ou saídas digitais. Eles são tolerantes a 5V, portanto não são necessários conversores de nível ao conectar a periféricos alimentados com 5V.

### 7.2 LEDs On-Board

A placa S5D9 fornece 3 LEDs on-board para funções definidas pelo usuário. Eles são conectados a pinos de saída de uso geral através de um único resistor. O estado ativo da saída é 1. Quando definido, ele acende o LED. A Tabela 7.2 descreve o mapeamento entre os LEDs e as portas que os acionam.

Tabela 7.2 Mapeamento de LEDs Definidos pelo Usuário

| LED# | Color | Designator | Device Port/Pin |
| --- | --- | --- | --- |
| 0 | Green | LED1 | P1_2 |
| 1 | Yellow | LED2 | P1_3 |
| 2 | Red | LED3 | P1_13 |

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Mapping%20between%20LEDs%2C%20ports.png)

Figura 7.2 Mapeamento entre LEDs e portas

## 8. Interface RS232 Dupla

A placa S5D9 fornece um transceptor de interface RS232 dupla. As interfaces seriais estão disponíveis no conector J8. O mapeamento de pinos do conector para as portas do MCU é descrito na tabela abaixo:

Tabela 8.1 Interface RS232 Dupla

| Molex MicroBlade **Connector J7** | Pin Type | MCU Port |
| --- | --- | --- |
| 1 | Power +5V |   |
| 2 | Ground |   |
| 3 | TX1 | P3_2/TXD2 |
| 4 | RX1 | P3_1/RXD2 |
| 5 | Ground |   |
| 6 | TX2 | P6_13/TXD7 |
| 7 | RX2 | P6_14/RXD7 |
| 8 | Ground |   |

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/Dual%20RS232%20Ports.png)

Figura 8.1 Portas RS232 Duplas

## 9. Interface de Probe JTAG

A interface de probe JTAG é fornecida no conector J2. O número de peça do conector é Samtec FTSH-105-01-L-DV-007-K.

Tabela 9.1 Interface de Probe JTAG - Conector J2

| Pin# | Direction | Description | Pin# | Direction | Description |
| --- | --- | --- | --- | --- | --- |
| 1 |   | Power 3V3 | 2 | Input | TMS |
| 3 |   | GND | 4 | Input | TCK |
| 5 |   | GND | 6 | Output | TDO |
| 7 |   | N.C | 8 | Input | TDI |
| 9 |   | GND | 10 | Input | RESET |

![](https://files.seeedstudio.com/wiki/IoT_Fast_Prototyping_Kit_S5D9_User_Manual/img/JTAG%20probe%20interface%20connections.png)

Figura 9.1 Conexões da interface de probe JTAG

Alternativamente, a interface JTAG está disponível no conector J1 – projetado para ser usado com o probe Tag Connect de 14 pinos. O número de peça do probe é Tag Connect XXXXXXX.

Tabela 9.2 Interface de Probe JTAG - Conector J1

| Pin# | Type | Description | Pin# | Type | Description |
| --- | --- | --- | --- | --- | --- |
| 1 | Input | TCK | 14 | Power | Ground |
| 2 | Power | Ground | 13 | Input | RESET |
| 3 | N.C. |   | 12 | Power | Ground |
| 4 | N.C. |   | 11 | Input | TDI |
| 5 | Output | TDO | 10 | N.C. |   |
| 6 | N.C. |   | 9 | Input | TMS |
| 7 | N.C. |   | 8 | Power | +3V3 |

Figura 9.2 Conexões da interface de probe JTAG

**Histórico de** Revisão

| Rev. | Date | Description |
| --- | --- | --- |
| 1.00 | March 3, 2017 | Initial version |

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
