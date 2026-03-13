---
description: Shield CAN-BUS V1.2
title: Shield CAN-BUS V1.2
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /CAN-BUS_Shield_V1.2
sku: 113030021
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/CAN-BUS_Shield_V1.2/
---

<!-- ---
name: CAN-BUS Shield V1.2
category: Shield
bzurl: https://www.seeedstudio.com/CAN-BUS-Shield-V1.2-p-2256.html
oldwikiname: CAN-BUS_Shield_V1.2
prodimagename: Can_bus_shield_all.jpg
surveyurl: https://www.research.net/r/can_bus_shield
sku: 113030021
--- -->

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Can_bus_shield_all.jpg)

**CAN-BUS** é um barramento industrial comum devido à sua longa distância de transmissão, velocidade de comunicação média e alta confiabilidade. É comumente encontrado em máquinas‑ferramenta modernas, como um barramento de diagnóstico automotivo.

Este Shield CAN-BUS adota o controlador de barramento CAN **MCP2515** com interface SPI e o transceptor CAN **MCP2551** para fornecer ao seu Arduino/Seeeduino capacidade CAN-BUS. Com um cabo conversor **OBD-II** adicionado e a biblioteca OBD-II importada, você está pronto para construir um dispositivo de diagnóstico a bordo ou registrador de dados.

**Versão**

Este documento se aplica às seguintes versões de produtos:

|Versão|Data de Lançamento|Como Comprar|
|--------|-----------|-----------|
|CAN BUS Shield V1.0 |14 Out, 2012|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|CAN BUS Shield V1.1 |10 Ago, 2013|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|CAN BUS Shield V1.2|05 Jan, 2015|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
| CAN BUS Shield V2.0 | 01 Ago,2017    |<a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a>|

**O que há de novo no CAN BUS Shield V1.2**

- Pads na parte traseira da PCBA
- Alterar o resistor terminal para 120 Ohm

**Escolha Alternativa**

Se o seu projeto tem espaço limitado e também não precisa de outras funções além de CAN-BUS, aqui está um módulo Grove CAN-BUS que é compatível com Arduino, mais compacto e econômico. Clique [aqui](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html) para visitar sua página.

[![](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png)](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)

**E se eu quiser conectar este shield ao meu carro**

Se você quiser ler dados ou controlar seu carro, há um cabo OBD>DB9 disponível para você, [este cabo](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html) torna mais fácil conectar ao conector OBD e ao conector DB9. Este cabo também funcionará com qualquer coisa que tenha um conector OBD. Adicionar uma chave liga/desliga produz um clique tão satisfatório.

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg)](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

**Analisador USB-CAN**

Se você quiser um Analisador de Barramento CAN para depurar seu barramento CAN, este [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) é recomendado.

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg)](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

## Recursos

-----

- Implementa CAN V2.0B com velocidade de até **1 Mb/s**
- Interface SPI com velocidade de até **10 MHz**
- Quadros de dados e remotos padrão (**11 bit**) e estendidos (**29 bit**)
- Dois buffers de recepção com armazenamento de mensagens prioritário
- Conector DB-9 padrão industrial
- Indicadores LED

:::note
O Shield CAN BUS funciona bem com Arduino UNO (ATmega328), Arduino Mega (ATmega1280/2560) bem como Arduino Leonardo (ATmega32U4).
:::

## Visão Geral do Hardware

-----

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png)

1. **Interface DB9** - para conectar à interface OBDII através de um cabo DBG-OBD.
2. **V_OBD** - Recebe energia da Interface OBDII (do DB9)
3. **Indicador Led**:
    - **PWR**: alimentação
    - **TX**: pisca quando os dados estão sendo enviados
    - **RX**: pisca quando há dados sendo recebidos
    - **INT**: interrupção de dados
4. **Terminal** - CAN_H e CAN_L
5. **Pinos do Arduino UNO**
6. **Conector Grove Serial**
7. **Conector Grove I2C**
8. **Pinos ICSP**
9. **CI** - MCP2551, um transceptor CAN de alta velocidade ([datasheet](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf))
10. **CI** - MCP2515, controlador CAN autônomo com interface SPI ([datasheet](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf))

:::caution
Quando você usar mais de dois Shields CAN Bus em uma mesma rede, deve levar a impedância em consideração.
Você deve cortar P1 na PCI com um estilete, ou simplesmente remover o R3 da PCI.
:::

**Mapa de pinos**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png)

:::note
    O pino FREE está disponível para outros usos.
:::

**Interface DB9&OBDii**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png)

**Pino CS**

O pino SPI_CS da V1.2 está conectado ao **D9** por padrão. Se você quiser mudar para **D10**, siga as instruções abaixo.

- Passo 1: Dê uma olhada na parte traseira da PCBA, você encontrará um pad chamado CS.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_pins_setting.png)

- Passo 2: Corte o fio entre o pad 9 e o pad do meio.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/cut%20this%20wire%20with%20box%20cutter.png)

- Passo 3: Solde o pad do meio e o pad 10.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/sodder%20the%20middle%20pad%20and%20pad%2010.png)

:::caution
Tenha cuidado com o estilete, é fácil se machucar ou danificar a PCBA.
:::

**Pinos SPI**

Os pinos SPI (SCK, MISO, MOSI) são roteados para os pinos ICSP por padrão. Mas, para algumas placas, os pinos SPI estão localizados em D11~D13. Se isso acontecer, você precisa fazer algumas alterações na PCBA. Dê uma olhada na parte traseira da PCBA, há três pads, MOSI, MISO e SCK, eles estão conectados a A por padrão. Você pode mudá-los para B se necessário.

:::note
Para Arduino UNO, Arduino Mega, Arduino Leonardo e quaisquer outras placas Arduino baseadas em AVR, ele funciona bem com a configuração padrão.
:::

:::caution
Tenha cuidado quando for alterar os pinos SPI, é fácil se machucar ou danificar a PCBA.
:::

## Primeiros Passos

-----
Aqui está um exemplo simples para mostrar como o Shield CAN-BUS funciona. Neste exemplo precisamos de 2 Shields CAN-BUS, bem como Arduino ou Seeeduino.

:::note
Este exemplo foi construído sob o [Arduino IDE versão 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip).
:::

**PASSO 1: O que precisamos**

|Nome|Função|Qtd|Link|
|----|--------|---|----|
|CAN-BUS Shield|Comunicação de Barramento CAN | 2 | [link](https://www.seeedstudio.com/depot/CANBUS-Shield-V12-p-2256.html) |
|Seeeduino V4.2|Controlador|2|[link](https://www.seeedstudio.com/item_detail.html?p_id=2517)|
|Jumper Wire|conexão|2|[link](https://www.seeedstudio.com/item_detail.html?p_id=234)|

**PASSO 2: Conexão de Hardware**

Insira cada Shield CAN-BUS em um Seeeduino V4.2 e conecte os 2 Shields CAN-BUS juntos através de 2 jumpers. Conforme mostrado nas imagens abaixo.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png)

:::note
    CAN_H em CAN_H, CAN_L em CAN_L
:::

**PASSO 3: Software**

Siga os procedimentos de [como instalar uma biblioteca do arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para instalar a biblioteca do Shield CAN BUS.

Clique no botão abaixo para baixar a biblioteca.

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/download_library.png)](https://github.com/Seeed-Studio/CAN_BUS_Shield)

Instale a biblioteca no seu Arduino IDE quando for baixada.

Um dos nós (um nó significa Seeeduino + CAN_BUS Shield) atua como mestre, o outro atua como escravo. O mestre enviará dados para o escravo constantemente.

:::note
Cada nó pode atuar como mestre antes de o código ser enviado.
:::

Abra o exemplo **send** (**File > Examples > CAN_BUS_Shield-master > send**) e envie para o **mestre**.
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/send%20example.png)
Abra o exemplo **receive_check** (**File > Examples > CAN_BUS_Shield-master > receive_check**) e envie para o **escravo**.
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/receive%20check%20example.png)

**PASSO 4: Ver Resultado**

Abra o Serial Monitor do Arduino IDE (**escravo**), você receberá os dados enviados pelo mestre.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png)

## APIs

-----

### 1. Definir a taxa de baud

Esta função é usada para inicializar a taxa de baud do sistema de Barramento CAN.

As taxas de baud disponíveis estão listadas a seguir:

 #define CAN_5KBPS    1
 #define CAN_10KBPS   2
 #define CAN_20KBPS   3
 #define CAN_25KBPS   4
 #define CAN_31K25BPS 5
 #define CAN_33KBPS   6
 #define CAN_40KBPS   7
 #define CAN_50KBPS   8
 #define CAN_80KBPS   9
 #define CAN_83K3BPS  10
 #define CAN_95KBPS   11
 #define CAN_100KBPS  12
 #define CAN_125KBPS  13
 #define CAN_200KBPS  14
 #define CAN_250KBPS  15
 #define CAN_500KBPS  16
 #define CAN_666kbps  17
 #define CAN_1000KBPS 18

### 2. Definir Máscara e Filtro de Recepção

Existem **2** registradores de máscara de recepção e **5** registradores de filtro no chip controlador que garantem que você obtenha dados do dispositivo de destino. Eles são úteis especialmente em uma grande rede composta por numerosos nós.

Fornecemos duas funções para você utilizar essas máscaras e registradores de filtro. São elas:

**Máscara:**

 init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);

**Filtro:**

 init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);

- **num** representa qual registrador usar. Você pode preencher 0 ou 1 para máscara e 0 a 5 para filtro.
- **ext** representa o status do quadro. 0 significa que é uma máscara ou filtro para um quadro padrão. 1 significa que é para um quadro estendido.
- **ulData** representa o conteúdo da máscara ou filtro.

### 3. Verificar Recepção
O MCP2515 pode operar em modo de pesquisa, em que o software verifica se um quadro foi recebido, ou usando pinos adicionais para sinalizar que um quadro foi recebido ou que a transmissão foi concluída.

Use a seguinte função para pesquisar quadros recebidos.

    INT8U MCP_CAN::checkReceive(void);

A função retornará 1 se um quadro chegar e 0 se nada chegar.

### 4. Obter o ID CAN
Quando alguns dados chegarem, você pode usar a seguinte função para obter o ID CAN do nó de "envio".

    INT32U MCP_CAN::getCanId(void)

### 5. Enviar Dados

    CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);

É uma função para enviar dados ao barramento. Nessa função:

- **id** representa de onde os dados vêm.
- **ext** representa o status do quadro. '0' significa quadro padrão. '1' significa quadro estendido.
- **len** representa o comprimento deste quadro.
- **data_buf** é o conteúdo desta mensagem.

Por exemplo, no exemplo de 'envio', temos:

    unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
    CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.

### 6. Receber Dados

A seguinte função é usada para receber dados no nó de 'recepção':

    CAN.readMsgBuf(unsigned char len, unsigned char buf);
Nas condições em que máscaras e filtros foram configurados, esta função só pode obter quadros que atendam aos requisitos de máscaras e filtros.

- **len** representa o comprimento dos dados.
- **buf** é onde você armazena os dados.

## Gerar uma Nova BaudRate

Nós fornecemos muitas taxas de transmissão frequentemente usadas, como abaixo:

 #define CAN_5KBPS    1
 #define CAN_10KBPS   2
 #define CAN_20KBPS   3
 #define CAN_25KBPS   4
 #define CAN_31KBPS   5
 #define CAN_33KBPS   6
 #define CAN_40KBPS   7
 #define CAN_50KBPS   8
 #define CAN_80KBPS   9
 #define CAN_83KBPS   10
 #define CAN_95KBPS   11
 #define CAN_100KBPS  12
 #define CAN_125KBPS  13
 #define CAN_200KBPS  14
 #define CAN_250KBPS  15
 #define CAN_500KBPS  16
 #define CAN_666KBPS  17
 #define CAN_1000KBPS 18

Mesmo assim você ainda pode não encontrar a taxa que deseja. Aqui fornecemos um software para ajudá-lo a calcular a taxa de transmissão de que você precisa.

Clique [aqui](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip) para baixar o software, ele está em chinês, mas não se preocupe, é fácil de usar.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg)

:::note
Este software suporta apenas o sistema Windows. Se você não conseguir abri-lo, sinta-se à vontade para contatar loovee@seeed.cc para obter suporte.
:::

Abra o software, o que você precisa fazer é definir a taxa de transmissão desejada e, em seguida, fazer algumas configurações simples, depois clicar em **calculate**.

Então você obterá alguns dados, cfg1, cfg2 e cfg3.

Você precisa adicionar algum código à biblioteca.

Abra **mcp_can_dfs.h**, você precisa adicionar o código abaixo por volta da linha 272:

 #define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx é a taxa de transmissão de que você precisa
 #define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
 #define MCP_16MHz_xxxkBPS_CFG3 (cfg2)

Então vamos para aproximadamente a linha 390, adicione o código abaixo:

 #define CAN_xxxKBPS NUM       // xxx é a taxa de transmissão de que você precisa, e NUM é um número, você precisa obter um diferente das outras taxas.

Abra **mcp_can.cpp**, vá para a função **mcp2515_configRate**(por volta da linha 190) e adicione o código abaixo:

 case (CAN_xxxKBPS):
     cfg1 = MCP_16MHz_xxxkBPS_CFG1;
     cfg2 = MCP_16MHz_xxxkBPS_CFG2;
     cfg3 = MCP_16MHz_xxxkBPS_CFG3;
     break;

Então você pode usar a taxa de transmissão de que precisa. E, por favor, me envie um pull request no GitHub quando você usar uma nova taxa, assim posso adicioná-la à biblioteca para ajudar outras pessoas.

## Projetos

-----

Se você quiser fazer alguns projetos incríveis com o CAN-BUS shield, aqui estão alguns projetos para referência.

### Volkswagen CAN BUS Gaming

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG)

Já quis jogar um simulador de carro/caminhão com um painel de instrumentos real no seu PC? Eu também! Estou tentando controlar um painel de VW Polo 6R via CAN Bus com um Arduino Uno e um Seeed CAN Bus Shield. Inspirado por Silas Parker. Obrigado ao Sepp e ao Is0-Mick pelo grande apoio!

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=291)

### Hackeie o CAN-BUS do seu veículo

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg)

Veículos modernos vêm todos equipados com uma Rede de Área de Controlador CAN-BUS. Em vez de ter um milhão de fios indo e voltando de vários dispositivos no seu carro até a bateria, está se fazendo uso de um sistema mais inteligente.

Todas as funções eletrônicas estão conectadas ao TIPM (Totally Integrated Power Module), como solenóides/relevos para travar as portas ou mini motores para subir os vidros etc.

De cada nó (isto é, o módulo de interruptor que controla seus vidros ou travas elétricas das portas) é transmitida uma mensagem através do CAN. Quando o TIPM detecta uma mensagem válida, ele reagirá de acordo, como travar as portas, acender as luzes e assim por diante.

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/)

## FAQ

------
**P1: Não consigo obter dados de outro dispositivo CAN.**

- Verifique se a conexão está correta
- Verifique se a configuração da taxa de transmissão está correta

**P2: O monitor serial imprime Init Fail.**

- Verifique se a configuração do pino CS corresponde ao código. Para o CAN Bus Shield V1.1/1.2, o pino CS está conectado a D9, os outros estão em D10.

**P3. Onde posso encontrar suporte técnico se eu tiver outros problemas.**

- Você pode postar uma pergunta no [Fórum da Seeed](https://forum.seeedstudio.com/).

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-----

- **【PDF】**[Esquemáticos do CAN-BUS Shield V1.2](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2.pdf)
- **【Eagle】**[Esquemático do CAN-BUS Shield V1.2](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip)
- **【Library】**[Biblioteca Arduino para CAN-BUS Shield](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **【Datasheet】**[Datasheet do MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **【Datasheet】**[Datasheet do MCP2551](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **【Demo】**[Uma Demo OBD](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **【Tool】**[Ferramenta de Taxa de Transmissão MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **【Tool】**[Analisador USB-CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **【Cable】**[Cabo DB9 para OBD2](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

