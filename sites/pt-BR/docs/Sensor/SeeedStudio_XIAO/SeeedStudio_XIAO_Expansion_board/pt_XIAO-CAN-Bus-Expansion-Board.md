---
description: Introdução à XIAO CAN Bus Expansion Board
title: XIAO CAN Bus Expansion Board
keywords:
  - Grove
  - can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-can-bus-expansion
sku: 105100001
last_update:
  date: 6/6/2023
  author: Stephen Lo
createdAt: '2023-06-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao-can-bus-expansion/
---

# XIAO CAN Bus Expansion Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

A XIAO CAN Bus Expansion Board é especificamente projetada para funcionar com a placa de desenvolvimento Seeed Studio XIAO, oferecendo uma forma fácil e conveniente de adicionar funcionalidade de comunicação CAN bus aos seus projetos. CAN bus (Controller Area Network) é um protocolo de comunicação amplamente utilizado em sistemas automotivos, industriais e outros sistemas embarcados, permitindo uma troca de dados confiável e robusta entre diferentes nós.

A integração do controlador MCP2515 e dos chips transceptores SN65HVD230 na placa de expansão garante comunicação contínua e eficiente sobre o barramento CAN. O controlador MCP2515 lida com o gerenciamento do protocolo, filtragem de mensagens e tratamento de erros, enquanto o transceptor SN65HVD230 converte os sinais digitais do controlador em sinais diferenciais necessários para a comunicação CAN bus.

Com a XIAO CAN Bus Expansion Board, você pode aproveitar o poder da placa de desenvolvimento Seeed Studio XIAO e seu amplo ecossistema para criar projetos que exijam comunicação CAN bus. Esteja você trabalhando em aplicações automotivas, sistemas de controle industrial, projetos de robótica ou dispositivos IoT, esta placa de expansão oferece uma solução confiável e compacta para integrar capacidades CAN bus aos seus projetos.

A placa de expansão possui um conector de terminal amigável, permitindo conectar facilmente as linhas CANH e CANL à rede CAN bus. O design compacto da placa garante compatibilidade com vários gabinetes de projetos e facilita a integração perfeita às suas configurações existentes.

Ao utilizar a XIAO CAN Bus Expansion Board, você pode tirar proveito da robustez, confiabilidade e escalabilidade do protocolo CAN bus, possibilitando troca eficiente de dados, controle de sistema e interconectividade em seus projetos.

## Introdução

### Recursos

- Compatibilidade: Projetada para funcionar perfeitamente com a placa de desenvolvimento Seeed Studio XIAO.
- Controlador MCP2515: O chip MCP2515 onboard fornece controle confiável e gerenciamento da comunicação CAN bus.
- Transceptor SN65HVD230: O chip SN65HVD230 integrado garante conversão de sinal precisa e comunicação robusta sobre o CAN bus.
- Conexão por Terminal: As linhas CANH e CANL são convenientemente acessíveis por meio de um terminal de 3 pinos, permitindo conexão fácil ao CAN bus.
- Design Compacto: A placa de expansão foi projetada com um formato compacto, tornando-a adequada para várias aplicações.

### Especificação

- Compatibilidade: Placa de desenvolvimento Seeed Studio XIAO.
- Interface de Comunicação: CAN bus (Controller Area Network).
- Transceptor CAN: SN65HVD230.
- Controlador CAN: MCP2515.
- Conexão por Terminal: Terminal de 2 pinos para linhas CANH e CANL.

### Aplicações

A XIAO CAN Bus Expansion Board pode ser utilizada em vários projetos que exijam comunicação CAN bus. Aqui estão algumas ideias de aplicação para inspirar você:

- Projetos Automotivos: Conecte a placa de expansão ao XIAO e desenvolva aplicações automotivas que exijam comunicação CAN bus, como diagnóstico de veículos ou registro de dados.
- Sistemas de Controle Industrial: Utilize os recursos do CAN bus para interagir com dispositivos e sistemas industriais, permitindo troca de dados e controle eficientes.
- Robótica: Incorpore a placa de expansão em seus projetos de robótica para habilitar a comunicação entre diferentes módulos e componentes robóticos.
- Aplicações IoT: Integre a placa de expansão com dispositivos IoT para facilitar a comunicação e a troca de dados por meio do protocolo CAN bus.

Consulte o datasheet e os exemplos da XIAO CAN Bus Expansion Board para obter instruções detalhadas de uso e exemplos de código.

## Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND
2. CAN-H
3. CAN-L
4. LEDs indicadores para RX/TX
5. SN65NVD230
6. MCP2515

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

A XIAO CAN BUS Expansion Board possui um pad P1 na parte de trás da placa, que adicionará um resistor de terminação ao dispositivo após o curto-circuito. Considerando que os dispositivos de comunicação de alguns usuários podem já ter um resistor de terminação, a XIAO CAN-BUS não deixa o P1 em curto por padrão; se você perceber que a comunicação CAN não consegue enviar ou receber mensagens, pode tentar curto-circuitar o pad P1 para obter um resistor de terminação de 120 ohms.

## Visão Geral da Biblioteca Arduino

Nós fornecemos uma [biblioteca Arduino para a placa MCP2515](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

A biblioteca inclui vários exemplos, incluindo:

- ***OBDII-PIDs*** -  recuperar dados da interface OBD-II
- ***send*** - enviar um frame para o CAN bus
- ***recv*** - receber um frame do CAN bus
- ***set_mask_filter_recv*** - receber um frame do CAN bus com configurações de máscara e filtro

### 1. Definir a Taxa de Baud

Esta função é usada para inicializar a taxa de baud do sistema CAN Bus.

As taxas de baud disponíveis estão listadas a seguir:

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

### 2. Definir Máscara e Filtro de Recepção

O chip controlador possui 2 registradores de máscara de recepção e 5 registradores de filtro que podem ser usados para garantir que os dados sejam recebidos do dispositivo de destino. Esses registradores são particularmente úteis em redes grandes com muitos nós. Fornecemos duas funções que permitem utilizar esses registradores de máscara e filtro.

**Máscara:**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filtro:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** representa qual registrador usar. Você pode preencher 0 ou 1 para máscara e de 0 a 5 para filtro.
- **ext** representa o status do frame. 0 significa que é uma máscara ou filtro para um frame padrão. 1 significa que é para um frame estendido.
- **ulData** representa o conteúdo da máscara ou filtro.

### 3. Verificar Recepção

O chip controlador MCP2515 tem a capacidade de operar em modo de pesquisa (polled) ou em modo de interrupção. No modo de pesquisa, o software verifica regularmente se há um frame recebido. No modo de interrupção, pinos adicionais podem ser usados para sinalizar que um frame foi recebido ou que a transmissão foi concluída. Isso permite uma utilização mais eficiente dos recursos, pois o processador não precisa verificar constantemente a entrada de dados.

Esta função é usada para verificar se há algum frame recebido aguardando no buffer de recepção. Se houver, a função retornará verdadeiro; caso contrário, retornará falso. Você pode usar esta função em um loop para verificar continuamente se há frames recebidos.

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. Obter o ID CAN

Você pode usar a seguinte função para obter o comprimento dos dados recebidos do nó "send".

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. Enviar um frame

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

Esta função é usada para enviar dados ao CAN Bus. Os parâmetros são os seguintes:

- **id** - O ID do frame CAN.
- **ext** - Um valor booleano que representa o status do frame. '0' significa frame padrão. '1' significa frame estendido.
- **len** - O comprimento do frame.
- **data_buf** - O conteúdo da mensagem.

Por exemplo, no exemplo 'send', temos:

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6. Receber um frame

A função a seguir é usada para receber dados no nó 'receive':

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

Nas condições em que máscaras e filtros foram definidos, esta função só pode obter frames que atendam aos requisitos das máscaras e filtros.

- **len** representa o comprimento dos dados.
- **buf** é onde você armazena os dados.

## Primeiros Passos

#### Hardware

Este produto não inclui o módulo XIAO, portanto você precisará adquirir um módulo XIAO separado. Neste exemplo, usamos o XIAO ESP32C3 para fins de demonstração, mas outras versões do módulo XIAO funcionarão de forma semelhante. A conexão de hardware é simples - basta inserir o módulo XIAO na placa de expansão.

Consulte o diagrama abaixo para a conexão com o XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### Software

- **Passo 1.** Baixe a [CAN Bus Library](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) do Github.

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Depois de baixar e instalar a biblioteca corretamente, você pode encontrar um programa de exemplo chamado send.ino na pasta de exemplos. Este programa foi projetado para o módulo D7S.

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* Please modify SPI_CS_PIN to adapt to different baords.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9
*/

#define SPI_CS_PIN  D7

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);
    while(!Serial);

    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);

    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);

    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}

// END FILE
```

- **Passo 4.** Faça o upload do exemplo. Se você não souber como fazer o upload do código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

- **Passo 5.** Após um upload de código bem-sucedido, você notará que os LEDs RX e TX acendem, indicando que o barramento CAN está transmitindo dados ativamente. Se o seu barramento CAN estiver conectado a outros dispositivos, esses LEDs piscarão em vez de permanecerem constantemente acesos.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Solução de Problemas

### P1: Qual é a taxa de baud máxima suportada pela XIAO CAN Bus Expansion Board?

A taxa de baud máxima suportada pelo controlador MCP2515 na placa de expansão é de 1 Mbps. Certifique-se de que as configurações de taxa de baud da sua rede CAN sejam compatíveis com essa limitação.

### P2: Posso usar várias XIAO CAN Bus Expansion Boards na mesma rede CAN?

Sim, você pode usar várias placas de expansão na mesma rede CAN. Cada placa de expansão deve ter um ID de nó exclusivo atribuído a ela para garantir a comunicação adequada e evitar conflitos no barramento.

### P3: Posso usar a XIAO CAN Bus Expansion Board com outros microcontroladores ou placas de desenvolvimento?

A XIAO CAN Bus Expansion Board é especificamente projetada para funcionar com a placa de desenvolvimento Seeed Studio XIAO. No entanto, com o mapeamento de pinos e a configuração adequados, pode ser possível usá-la com outros microcontroladores ou placas de desenvolvimento que suportem os protocolos necessários de comunicação via barramento CAN.

### P4: Existem limitações quanto ao comprimento máximo do cabo para a conexão do barramento CAN?

O comprimento máximo do cabo para a conexão do barramento CAN depende de fatores como a taxa de baud, a qualidade do cabo e a interferência eletromagnética. Em geral, para taxas de baud mais baixas, comprimentos de cabo maiores (até várias centenas de metros) podem ser suportados. No entanto, para taxas de baud mais altas, é recomendado manter o comprimento do cabo menor (dentro de alguns metros) para manter uma comunicação confiável.

### P5: Como posso solucionar problemas de comunicação no barramento CAN?

Se você encontrar quaisquer problemas com a comunicação do barramento CAN, você pode seguir estas etapas para solução de problemas:

- Verifique as conexões físicas da rede CAN, garantindo a fiação e a terminação corretas.
- Verifique as configurações de taxa de baud e certifique-se de que elas correspondam em todos os dispositivos conectados ao barramento CAN.
- Monitore o tráfego do barramento CAN usando um analisador de barramento CAN ou software de terminal para identificar quaisquer erros ou problemas nas mensagens transmitidas.
- Verifique novamente o código do programa para a inicialização e configuração adequadas do controlador MCP2515.
- Certifique-se de que a fonte de alimentação para a placa de desenvolvimento XIAO e para a rede do barramento CAN seja estável e esteja dentro da faixa de tensão especificada.
- Se você tiver quaisquer outras dúvidas ou problemas que não estejam cobertos nesta seção de FAQ, sinta-se à vontade para entrar em contato com nossa equipe de suporte técnico para obter mais assistência.

## Recursos

- **[ZIP]** [XIAO CAN Bus Expansion board SCH&PCB](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [Datasheet - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [Datasheet - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
