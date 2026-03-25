---
description: Shield CAN-BUS_V2.0
title: Shield CAN-BUS V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /CAN-BUS_Shield_V2.0
sku: 103030215
last_update:
  date: 01/10/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/CAN-BUS_Shield_V2.0/
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/shiyitu1.png" /></div>

**CAN-BUS** é um barramento industrial comum devido à sua longa distância de alcance, velocidade de comunicação média e alta confiabilidade. É comumente encontrado em máquinas-ferramenta modernas, como um barramento de diagnóstico automotivo.

Este Shield CAN-BUS adota o controlador de barramento CAN **MCP2515** com interface SPI e o transceptor CAN **MCP2551** para fornecer ao seu Arduino/Seeeduino capacidade CAN-BUS. Com um cabo conversor **OBD-II** adicionado e a biblioteca OBD-II importada, você estará pronto para construir um dispositivo de diagnóstico a bordo ou registrador de dados.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/vehicle-hacking-tools" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_Car_Hacking.png" /></a></p>
</div>

**Versão**

Este documento se aplica às seguintes versões de produtos:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Versão</h3></td>
    <td><h3>Data de Lançamento</h3></td>
    <td><h3>Como Comprar</h3></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.0</h4></td>
    <td><h4>14 Out, 2012</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.1</h4></td>
    <td><h4>10 Ago, 2013</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>  
  <tr>
    <td><h4>CAN BUS Shield V1.2</h4></td>
    <td><h4>5 Jan, 2015</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V2.0</h4></td>
    <td><h4>01 Ago,2017</h4></td>
    <td><div class="document"><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" alt="" width={200} height="auto"/></a>
</div></td>
  </tr>
  </tbody></table>

**Opção Alternativa**

Se o seu projeto tiver espaço limitado e você também não precisar de outras funções além de CAN-BUS, aqui está um módulo Grove CAN-BUS que é compatível com Arduino, mais compacto e econômico. Clique [aqui](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html) para visitar a página dele.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png" /></a></p>

**E se eu quiser conectar este shield ao meu carro**

Se você quiser ler dados ou controlar seu carro, há um cabo OBD>DB9 disponível para você, [este cabo](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html) facilita a conexão ao conector OBD e ao conector DB9. Este cabo também funcionará com qualquer coisa que tenha um conector OBD. Adicionar uma chave liga/desliga proporciona um clique muito satisfatório.

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg" /></a></p>

**Analisador USB-CAN**

Se você quiser um Analisador de Barramento CAN para depurar seu barramento CAN, este [USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) é recomendado.

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg" /></a></p>

## Recursos

- Implementa CAN V2.0B com velocidade de até **1 Mb/s**
- Interface SPI com velocidade de até **10 MHz**
- Quadros de dados e remotos padrão (**11 bit**) e estendidos (**29 bit**)
- Dois buffers de recepção com armazenamento de mensagens priorizado
- Conector DB-9 padrão industrial
- Indicadores de LED

:::note
O Shield CAN BUS funciona bem com Arduino UNO (ATmega328), Arduino Mega (ATmega1280/2560) bem como Arduino Leonardo (ATmega32U4).
:::

## Visão Geral do Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png" alt="pir" width={600} height="auto" /></p>

1. **Interface DB9** - para conectar à interface OBDII via um cabo DBG-OBD.
2. **V_OBD** - recebe alimentação da interface OBDII (a partir do DB9)
3. **Led Indicator**:
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

:::warning
Quando você usar mais de dois Shields CAN Bus em uma mesma rede, deve levar a impedância em consideração.
Você deve cortar o P1 na PCI com um estilete, ou simplesmente remover o R3 na PCI.
:::

**Mapa de pinos**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png" alt="pir" width={600} height="auto" /></p>

:::note
O pino FREE está disponível para outros usos.
:::

**Interface DB9&OBDii**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png" alt="pir" width={600} height="auto" /></p>

**Pino CS**

:::caution
Quando produzimos o novo lote do CAN-BUS Shield V2, o fio dos pads traseiros foi embutido dentro da PCI; embora o fio entre os pads agora não seja visível do lado de fora, por dentro ele ainda está conectado. Se você quiser alterar a fiação dos pads, ainda precisará cortar a trilha na PCI primeiro.
:::

O pino SPI_CS da V1.2 é conectado ao **D9** por padrão. Se você quiser mudar para **D10**, siga as instruções abaixo.

- Etapa1: Observe o lado de trás da PCBA, você encontrará um pad chamado CS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu1.png" alt="pir" width={600} height="auto" /></p>

- Etapa2: Corte o fio entre o pad 9 e o pad do meio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu2.png" alt="pir" width={600} height="auto" /></p>

- Etapa3: Solde o pad do meio e o pad 10.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu3.png" alt="pir" width={600} height="auto" /></p>

:::warning
Tenha cuidado com o estilete, é fácil se machucar ou danificar a PCBA.
:::

**Pinos SPI**

Os pinos SPI (SCK, MISO, MOSI) são roteados para os pinos ICSP por padrão. Mas, para algumas placas, os pinos SPI estão localizados em D11~D13. Se isso acontecer, você precisará fazer algumas modificações na PCBA. Observe o lado de trás da PCBA, há três pads, MOSI, MISO e SCK, que estão conectados a A por padrão. Você pode alterá-los para B, se necessário.

:::note
Para Arduino UNO, Arduino Mega, Arduino Leonardo e quaisquer outras placas Arduino baseadas em AVR, ele funciona bem com a configuração padrão.
:::

:::warning
Tenha cuidado quando for alterar os pinos SPI, é fácil se machucar ou danificar a PCBA.
:::

## Primeiros Passos

Aqui está um exemplo simples para mostrar como o Shield CAN-BUS funciona. Neste exemplo precisamos de 2 Shields CAN-BUS, bem como Arduino ou Seeeduino.

:::note
Este exemplo é construído sob o [Arduino IDE versão 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip).
:::

**ETAPA1: O que precisamos**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nome</h3></td>
    <td><h3>Função</h3></td>
    <td><h3>Qtd</h3></td>
    <td><h3>Link</h3></td>
  </tr>
  <tr>
    <td><h4>CAN-BUS Shield</h4></td>
    <td><h4>Comunicação de Barramento CAN</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><span>Link</span></a></td>
  </tr>
  <tr>
    <td><h4>Seeeduino V4.2</h4></td>
    <td><h4>Controlador</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/item_detail.html?p_id=2517" target="_blank"><span>Link</span></a></td>
  </tr>  
  </tbody></table>

**ETAPA2: Conexão de Hardware**

Insira cada Shield CAN-BUS no Seeeduino V4.2 e conecte os 2 Shields CAN-BUS juntos por meio de 2 jumpers. Conforme mostrado nas imagens abaixo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png" alt="pir" width={600} height="auto" /></p>

:::note
CAN_H em CAN_H, CAN_L em CAN_L
:::

**ETAPA3: Software**

Siga os procedimentos de [como instalar uma biblioteca do arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para instalar a biblioteca do shield CAN BUS.

- Faça o download da biblioteca Arduino [**Seeed_Arduino_CAN**](https://github.com/Seeed-Studio/Seeed_Arduino_CAN) aqui.

Instale a biblioteca no seu Arduino IDE quando o download for concluído.

Um dos nós (um nó significa Seeeduino + CAN_BUS Shield) atua como mestre, o outro atua como escravo. O mestre enviará dados para o escravo constantemente.

:::note
Cada nó pode atuar como mestre antes que o código seja carregado.
:::

Abra o exemplo **send** (**File > Examples > Seeed_Arduino_CAN > send**) e faça o upload para o **mestre**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/example.png" alt="pir" width={600} height="auto" /></p>

Ou copie o seguinte para o Arduino IDE e faça o upload:

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // Set CS pin

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // init can bus : baudrate = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
    SERIAL.println("CAN BUS sendMsgBuf ok!");
}
```

**ETAPA 4: Verificar Resultado**

Abra o Serial Monitor da Arduino IDE (**slaver**), você receberá os dados enviados pelo master.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png" alt="pir" width={600} height="auto" /></p>

## APIs

### 1.Configurar o baud rate

Esta função é usada para inicializar o baud rate do sistema CAN Bus.

Os baud rates disponíveis são listados a seguir:

```cpp
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
```

### 2.Configurar máscara e filtro de recepção

Existem **2** registradores de máscara de recepção e **5** registradores de filtro no chip controlador que garantem que você obtenha dados do dispositivo alvo. Eles são úteis especialmente em uma rede grande, composta de inúmeros nós.

Fornecemos duas funções para você utilizar esses registradores de máscara e filtro. Elas são:

**Máscara:**

```cpp
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filtro:**

```cpp
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** representa qual registrador usar. Você pode preencher 0 ou 1 para máscara e de 0 a 5 para filtro.
- **ext** representa o status do frame. 0 significa que é uma máscara ou filtro para um frame padrão. 1 significa que é para um frame estendido.
- **ulData** representa o conteúdo da máscara ou filtro.

### 3.Verificar recepção

O MCP2515 pode operar tanto em modo de pesquisa (`polled`), onde o software verifica se um frame foi recebido, quanto usando pinos adicionais para sinalizar que um frame foi recebido ou que a transmissão foi concluída.

Use a seguinte função para pesquisar frames recebidos.

```cpp
INT8U MCP_CAN::checkReceive(void);
```

A função retornará 1 se um frame chegar e 0 se nada chegar.

### 4.Obter o CAN ID

Quando alguns dados chegarem, você pode usar a seguinte função para obter o CAN ID do nó que "enviou".

```cpp
INT32U MCP_CAN::getCanId(void)
```

### 5.Enviar dados

```cpp
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

É uma função para enviar dados ao barramento. Nela:

- **id** representa de onde os dados vêm.
- **ext** representa o status do frame. '0' significa frame padrão. '1' significa frame estendido.
- **len** representa o comprimento deste frame.
- **data_buf** é o conteúdo desta mensagem.

Por exemplo, no exemplo de 'send', temos:

```cpp
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6.Receber dados

A função a seguir é usada para receber dados no nó 'receive':

```cpp
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

Em condições nas quais máscaras e filtros tenham sido configurados, esta função só pode obter frames que atendam aos requisitos das máscaras e dos filtros.

- **len** representa o comprimento dos dados.
- **buf** é onde você armazena os dados.

### 7.init_CS

é muito útil para você usar dois shields CAN-BUS com um Arduino. Nós fornecemos o pino CS_CAN para você selecionar. Se você não souber como usar o pino CS_CAN, pode ir para [CS_CAN pin](https://wiki.seeedstudio.com/pt-br/CAN-BUS_Shield_V2.0/#cs_can-pin) para aprender.

```cpp
void MCP_CAN::init_CS(byte _CS)
```

- **_CS** representa qual pino você seleciona. (9 ou 10)

## Gerar um novo BaudRate

Nós fornecemos muitos baud rates frequentemente usados, como abaixo:

```cpp
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
```

Mesmo assim você ainda pode não encontrar a taxa que deseja. Aqui fornecemos um software para ajudá-lo a calcular o baud rate de que você precisa.

Clique [aqui](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip) para baixar o software, ele está em chinês, mas não se preocupe, é fácil de usar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg" alt="pir" width={200} height="auto" /></p>

Abra o software, o que você precisa fazer é definir o baud rate desejado e então fazer algumas configurações simples, depois clique em **calculate**.

Então você obterá alguns dados, cfg1, cfg2 e cfg3.

Você precisa adicionar algum código à biblioteca.

Abra **mcp_can_dfs.h**, você precisa adicionar o código abaixo por volta da linha 272:

```cpp
#define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx is the baud rate you need
#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
#define MCP_16MHz_xxxkBPS_CFG3 (cfg2)
```

Então vamos para perto da linha 390, adicione o código abaixo:

```cpp
#define CAN_xxxKBPS NUM       // xxx is the baudrate you need, and NUM is a number, you need to get a different from the other rates.
```

Abra **mcp_can.cpp**, vá para a função **mcp2515_configRate** (por volta da linha 190), então adicione o código abaixo:

```cpp
case (CAN_xxxKBPS):
    cfg1 = MCP_16MHz_xxxkBPS_CFG1;
    cfg2 = MCP_16MHz_xxxkBPS_CFG2;
    cfg3 = MCP_16MHz_xxxkBPS_CFG3;
    break;
```

Então você poderá usar o baud rate de que precisa. E, por favor, envie um pull request no GitHub quando você usar uma nova taxa, para que eu possa adicioná-la à biblioteca e ajudar outras pessoas.

## Projetos

Se você quiser fazer alguns projetos incríveis com o shield CAN-BUS, aqui estão alguns projetos para referência.

### Volkswagen CAN BUS Gaming

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG" alt="pir" width={600} height="auto" /></p>
Já quis jogar um simulador de carro/caminhão com um painel real no seu PC? Eu também! Estou tentando controlar um painel de VW Polo 6R via CAN Bus com um Arduino Uno e um Seeed CAN Bus Shield. Inspirado por Silas Parker. Obrigado ao Sepp e ao Is0-Mick pelo grande suporte!

<p style={{textAlign: 'center'}}><a href="https://community.seeedstudio.com/project_detail.html?id=291" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

### Hackeie o CAN-BUS do seu veículo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg" alt="pir" width={600} height="auto" /></p>
Veículos modernos vêm todos equipados com um CAN-BUS Controller Area Network. Em vez de ter um milhão de fios indo e voltando de vários dispositivos no seu carro até a bateria, ele faz uso de um sistema mais inteligente.

Todas as funções eletrônicas são conectadas ao TIPM (Totally Integrated Power Module), como solenóides/reles para travar as portas ou micromotores para subir os vidros etc.

De cada nó (por exemplo, o módulo de interruptores que controla os vidros ou as travas elétricas das portas) é transmitida uma mensagem através do CAN. Quando o TIPM detecta uma mensagem válida, ele reagirá de acordo, como travar as portas, acender as luzes e assim por diante.

<p style={{textAlign: 'center'}}><a href="https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

## FAQ

------
**P1: Não consigo obter dados de outro dispositivo CAN.**

- Verifique se a conexão está correta
- Verifique se a configuração do baud rate está correta

**P2: O serial monitor mostra Init Fail.**

- Verifique se a configuração do pino CS corresponde ao código. Para CAN Bus Shield V1.1/1.2, o pino CS está conectado ao D9, os outros estão no D10.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-----

- **[PDF]**[Esquemático do CAN-BUS Shield V2.0](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.pdf)
- **[Eagle]**[Esquemático & PCB do CAN-BUS Shield V2.0](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar)
- **[Library]**[Biblioteca Arduino para CAN-BUS Shield](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **[Datasheet]**[Datasheet do MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **[Datasheet]**[Datasheet do MCP2551](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **[Demo]**[Um Demo de OBD](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **[Tool]**[Ferramenta de Baud Rate MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **[Tool]**[USB-CAN Analyzer](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **[Cable]**[Cabo DB9 para OBD2](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)
- **[Drawing]**[Desenho do CAN BUS Shield v2.0 em PDF](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.pdf)
- **[Drawing]**[Desenho do CAN BUS Shield v2.0 em DXF](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.dxf.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
