---
description: Guia para iniciantes em comunicação LoRa com o módulo Wio-E5 e Arduino no PlatformIO
title: LoRaWAN Usando Wio-E5 no PlatformIO
keywords:
  - lorawan
  - grove
  - platformio
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg
slug: /platformio_wio_e5
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 2024-01-26T06:59:58.390Z
  author: Spencer
createdAt: '2024-01-26'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/platformio_wio_e5/
---

# Primeiros Passos com LoRaWAN Usando Wio-E5 e Arduino no PlatformIO

Se você quiser aprender sobre Long Range e seus recursos, como arquitetura de rede e aplicações, pode consultar este artigo [LoRapedia, que apresenta Long Range e Long Range em detalhes](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/). Ele explica o que é Long Range, como funciona e seus prós e contras.

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://wdcdn.qpic.cn/MTIzNDU2Nzg5_993734_kw1N-KbhpVV3i5EZ_1693791639?w=1844&h=904" alt="LoRaWAN Framework " />
<div style={{ marginTop: '-8px' }}><em>Estrutura de Rede LoRaWAN</em></div>

</div>  

## Introdução

Este guia detalha o uso do módulo Wio-E5 LoRa com o XIAO ESP32S3 no PlatformIO, aplicável a qualquer placa compatível com Arduino.

Principais Aprendizados:

1. **Programação com Biblioteca Arduino para Wio-E5**: Utilizar bibliotecas Arduino para programação eficiente do Wio-E5, indo além do controle básico por comandos AT.
2. **Integração com Rede LoRaWAN**: Etapas para conectar o Wio-E5 a uma rede LoRaWAN.
3. **Implementação de Uplink e Downlink**: Gerenciar a transmissão de dados de e para a rede.

Esta aplicação modifica a configuração padrão de hardware, incorporando um OLED para visualização direta de dados e um CircleLED para indicação de downlink, juntamente com o reporte de dados do sensor DHT11, simplificando o processo de aprendizado com implementações práticas.

<!-- 上传下达数据的说明 不够清晰 -->

## Pré-requisitos

### Hardware

- **[XIAO ESP32S3](/pt-br/xiao_esp32s3_getting_started/)**: Uma placa versátil compatível com Arduino, ideal para vários projetos de IoT. Você pode substituí-la por qualquer placa compatível com Arduino, conforme necessário.
- **[Grove - DHT11](/pt-br/Grove-TemperatureAndHumidity_Sensor)**: Para coleta de dados ambientais, essencial em muitas aplicações de IoT.
- **[Grove - Circular LED](/pt-br/Grove-Circular_LED)**: Usado para controle de luz. Este é um exemplo de dispositivo controlável; sinta-se à vontade para substituí-lo por um componente de sua escolha.
- **[Grove - OLED Display](https://wiki.seeedstudio.com/pt-br/Grove-OLED-Display-0.96-SSD1315/)**: Melhora seu projeto com recursos de exibição visual de dados. Este componente é opcional, mas recomendado para uma interface de usuário mais interativa.
- **[Grove - Wio-E5 LoRa Module](/pt-br/Grove_LoRa_E5_New_Version/)**: Fornece comunicação sem fio de longo alcance e baixo consumo de energia, sendo uma excelente escolha para aplicações LoRaWAN.
- **[SenseCAP M2 Multi-Platform Gateway](/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/)**: Um componente crítico para possibilitar a comunicação entre o seu módulo Wio-E5 e a rede LoRaWAN.

### Software

#### PlatofmrIO

<div align="center">
    <img class="border-radius: 10px;" src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png" height="220" alt="PlatformIO Logo"  title="PlatformIO: a professional collaborative platform for embedded development"/>
</div>

Para este projeto, utilizaremos o PlatformIO, que oferece diversas vantagens:

- **Gerenciamento Eficiente de Bibliotecas**: O PlatformIO facilita o gerenciamento fácil e eficaz de bibliotecas, garantindo que seu projeto esteja sempre alinhado com os avanços mais recentes.
- **Integração com VSCode**: Essa integração melhora significativamente a experiência de desenvolvimento, com destaque de código e IntelliSense, para um processo de codificação mais fluido e eficiente.
- **Adição e Configuração Simples de Bibliotecas**: Com o PlatformIO, adicionar e configurar bibliotecas é um processo direto, permitindo personalização rápida para atender às necessidades específicas do seu projeto.

:::info
Se você é novo no PlatformIO ou deseja aprofundar seu entendimento, pode começar com estes recursos:

- [How to Use PlatformIO IDE for Arduino Programming](/pt-br/Software-PlatformIO) – Um guia amigável para iniciantes para você começar.
- [PlatformIO Official Website](https://platformio.org/) – Para instruções abrangentes e detalhadas.

:::

#### Servidor de Rede LoRaWAN (ChirpStack)

Esta seção fornece orientações sobre como se conectar a um servidor de rede LoRaWAN local, usando a plataforma [ChirpStack](https://www.chirpstack.io/) como nosso principal exemplo. Vamos focar especificamente no uso do [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) para esse propósito.

:::info
Se você não estiver familiarizado com as seguintes etapas no ChirpStack, como:

- Criar um Perfil de Dispositivo
- Adicionar uma Aplicação
- Registrar um dispositivo em uma aplicação

Você pode aprender mais com estes recursos:

- [Register the Device on LoRaWAN Network Server](/pt-br/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway)
- [SenseCAP M2 MP Gateway LNS tion](/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration)

*Faremos isso juntos na próxima seção*.
:::

:::tip
Para quem prefere plataformas alternativas como AWS IoT ou TTN, consulte os seguintes guias:

- [Connecting to AWS IoT](/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/)
- [Connecting to TTN](/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/)

:::

## Trabalho preparatório

Agora, vamos começar. Faremos as seguintes coisas.

### Rede LoRaWAN

Para garantir uma comunicação bem-sucedida com a rede LoRaWAN por meio do seu módulo Wio-E5, há alguns pontos-chave que você precisa verificar:

1. **Cobertura LoRaWAN:**
   - Certifique-se de que seu dispositivo esteja dentro da área de cobertura de uma rede LoRaWAN. Por exemplo, no meu caso, o dispositivo está coberto por um gateway M2 operando na faixa de frequência EU868. Isso é crucial, pois o dispositivo precisa se comunicar com um gateway LoRaWAN próximo que ofereça suporte à mesma faixa de frequência.

2. **Vínculo do Gateway ao LNS:**
   - Também é essencial confirmar que um desses gateways esteja vinculado ao LoRaWAN Network Server (LNS) que você pretende usar. Esse vínculo é vital porque o gateway não apenas atua como uma ponte entre o seu dispositivo Wio-E5 e o servidor de rede, mas também determina o caminho que os dados do seu dispositivo seguirão até chegar ao servidor.

#### Obter Parâmetros de Junção

Supondo que você já tenha configurado o servidor de rede ChirpStack na seção anterior, o próximo passo é reunir os parâmetros necessários de junção à rede. Esses parâmetros são vitais para garantir que seu dispositivo consiga ingressar e acessar a rede com sucesso.

Para um tutorial mais detalhado passo a passo, consulte a seção [Register the Device on LoRaWAN Network Server](/pt-br/SenseCAP_Indicator_Application_LoRaWAN/#21-configure-the-sensecap-lorawan-gateway).

#### Adicionar Perfil de Dispositivo

O módulo Wio-E5 vem configurado por padrão para usar o Parâmetro Regional *V102B*. Esta informação está de acordo com a `seção 4.28.13 VER` da [Especificação de Comandos AT do Wio-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf).

Consequentemente, selecionaremos `LoRaWAN 1.0.2` como a versão MAC e `RP002-1.0.2` para a revisão do Parâmetro Regional.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/device_profile.png"/>
</div>

Se você precisar usar a Classe C para o seu dispositivo, poderá ativá-la clicando no botão a seguir:

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/activate_class_c.png"/>
</div>

<!-- Additional CodeC information will be added here -->

#### Adicionar Aplicação

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_application.png"/>
</div>

#### Adicionar Dispositivo

Você deve preencher o Device EUI (EUI64) a partir das informações do seu Device EUI (EUI64); esta seção o está utilizando.
<!-- TBD -->

Se você o tiver alterado, navegue até esta [seção](#get_eui) para obter o `DevAddr`, `DevEui`, `AppEui`.

Como alternativa, se preferir usar um novo DevEUi, você pode gerá-lo novamente e então enviar.

<div align="center">
  <img class='border-radius: 10px;' width={520} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/add_device.png"/>
</div>

E obtenha o `AppKey`:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/get_appKey.png"/>
</div>

:::note Informações do Dispositivo
Até este ponto, obtivemos as seguintes credenciais necessárias para a operação de junção com a rede LoRaWAN:

- **DevEUI:** `2cf7f1205100a785`
- **AppKey:** `19aee7bedec56509a9c66a44b7956b6f`

Essas credenciais são essenciais para o registro seguro e a comunicação do seu dispositivo com a rede LoRaWAN.
:::

:::tip Por Que Não Precisamos de AppEUI?
No contexto do LoRaWAN, DevEUI e AppKey desempenham papéis críticos na identificação do dispositivo e na comunicação segura. O AppEUI, também conhecido como JoinEUI no LoRaWAN 1.1 e versões posteriores, é normalmente usado durante o processo de junção do dispositivo para identificar a instância do servidor de aplicação à qual o dispositivo deve se conectar. No entanto, em algumas configurações de rede ou com certas implementações de servidor de rede, como The Things Network (TTN), o AppEUI pode não ser essencial ou já estar predefinido. Essa abordagem simplifica o processo de configuração do dispositivo, reduzindo o número de parâmetros que precisam ser configurados. Portanto, com base nas especificidades do seu servidor de rede e de sua configuração, o uso explícito de um AppEUI pode não ser necessário para o processo de junção.
:::

## Mãos na massa

#### Iniciando um Novo Projeto no PlatformIO

Para começar, você criará um projeto PlatformIO. Siga estas etapas:

1. **Abra o PlatformIO:** Comece abrindo o PlatformIO IDE no seu computador.

2. **Crie um Novo Projeto:** Vá para o menu principal e selecione **New Project**.

Aqui está uma imagem de exemplo mostrando a criação de um novo projeto no PlatformIO:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/create_project.png"/>
</div>

Para este projeto, escolha **XIAO ESP32S3** como a placa de desenvolvimento.

Exemplo de criação de projeto para XIAO ESP32S3:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/xiaos3_prj.png"/>
</div>

**Adicione as Bibliotecas Necessárias:**

Depois de criar o seu projeto, você precisa incluir várias bibliotecas que são essenciais para o seu projeto. Você pode adicionar essas bibliotecas ao seu arquivo `platformio.ini` para permitir que o PlatformIO as baixe automaticamente:

```ini
[env:seeed_xiao_esp32s3]
platform = espressif32
board = seeed_xiao_esp32s3
framework = arduino
lib_deps = 
    olikraus/U8g2@^2.35.9
    plerup/EspSoftwareSerial@^8.2.0
    https://github.com/dok-net/ghostl # Issue Fix: https://github.com/plerup/espsoftwareserial/issues/305#issuecomment-1880188894
    seeed-studio/Grove Temperature And Humidity Sensor@^2.0.2
    seeed-studio/Grove LED Bar@^1.0.0
    https://github.com/andresoliva/LoRa-E5
```

Quando o Gerenciador de Bibliotecas do PlatformIO terminar de processar suas solicitações, você poderá ver todas as bibliotecas que foram adicionadas ao seu projeto. Essas bibliotecas são armazenadas no diretório `.pio/libdeps/seeed_xiao_esp32s3`, específico para a placa selecionada, que neste caso é a Seeed XIAO ESP32S3.

Aqui está uma imagem mostrando como ficará o seu ambiente PlatformIO depois que as bibliotecas tiverem sido adicionadas com sucesso:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/platformio_libraries.png"/>
</div>

Neste diretório, você encontrará pastas para cada biblioteca especificada no seu arquivo `platformio.ini`. Essas pastas contêm os arquivos necessários para cada biblioteca, como código-fonte, exemplos e metadados adicionais.

Essa organização facilita o gerenciamento e a atualização das suas bibliotecas. O PlatformIO lida automaticamente com compatibilidade e resolução de dependências, garantindo que o seu processo de desenvolvimento seja fluido e eficiente. Você também pode atualizar ou remover bibliotecas facilmente usando o Gerenciador de Bibliotecas do PlatformIO, mantendo seu ambiente de desenvolvimento atualizado com as versões mais recentes das bibliotecas.

#### Entrar na Rede LoRaWAN (Teste)

Nesta seção, utilizaremos [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5) para acionar o Wio-E5 para entrar na rede LoRaWAN, em vez de usar o comando AT manualmente.

```cpp
#include <Arduino.h>
#include <LoRa-E5.h> //main LoRa

#ifdef U8X8_HAVE_HW_SPI
    #include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
    #include <Wire.h>
#endif

// highlight-start
#if defined(ARDUINO_ARCH_AVR)
    #define serialLog Serial

#elif defined(ARDUINO_ARCH_SAMD) || defined(ARDUINO_ARCH_SAM)
    #define serialLog SerialUSB
#else
    #define serialLog Serial
#endif
// highlight-end

const int RXPin = D7, TXPin = D6; // Replace with your Wio-E5 RX,TX pin number

/************************LORA SET UP*******************************************************************/
#define LoRa_APPKEY           "19aee7bedec56509a9c66a44b7956b6f" /*Custom key for this App*/
#define LoRa_FREQ_standard    EU868                              /*International frequency band. see*/
#define LoRa_DR               DR4                                /*DR5=5.2kbps //data rate. see at https://www.thethingsnetwork.org/docs/lorawan/regional-parameters/    */
#define LoRa_DEVICE_CLASS     CLASS_C                            /*CLASS_A for power restriction/low power nodes. Class C for other device applications */
#define LoRa_PORT_BYTES       8                                  /*node Port for binary values to send, allowing the app to know it is recieving bytes*/
#define LoRa_PORT_STRING      7                                  /*Node Port for string messages to send, allowing the app to know it is recieving characters/text */
#define LoRa_POWER            14                                 /*Node Tx (Transmition) power*/
#define LoRa_CHANNEL          0                                  /*Node selected Tx channel. Default is 0, we use 2 to show only to show how to set up*/
#define LoRa_ADR_FLAG         false                              /*ADR(Adaptative Dara Rate) status flag (True or False). Use False if your Node is moving*/
/*Time to wait for transmiting a packet again*/
#define Tx_delay_s            9.5 /*delay between transmitions expressed in seconds*/
/*Packet information*/
#define PAYLOAD_FIRST_TX      10   /*bytes to send into first packet*/
#define Tx_and_ACK_RX_timeout 6000 /*6000 for SF12,4000 for SF11,3000 for SF11, 2000 for SF9/8/, 1500 for SF7. All examples consering 50 bytes payload and BW125*/
/*Buffers used to send*/
unsigned char buffer_binary[128] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
char          buffer_char[50]    = "I am sending this message to a LoRa Gateway."; /**/
/*******************************************************************/
/*Set up the LoRa module with the desired configuration */
void LoRa_setup(void) {
    lora.setDeviceMode(LWOTAA); /*LWOTAA or LWABP. We use LWOTAA in this example*/
    lora.setDataRate((_data_rate_t)LoRa_DR, (_physical_type_t)LoRa_FREQ_standard);
    lora.setKey(NULL, NULL, LoRa_APPKEY);                /*Only App key is seeted when using OOTA*/
    lora.setClassType((_class_type_t)LoRa_DEVICE_CLASS); /*set device class*/
    lora.setPort(LoRa_PORT_BYTES);                       /*set the default port for transmiting data*/
    lora.setPower(LoRa_POWER);                           /*sets the Tx power*/
    lora.setChannel(LoRa_CHANNEL);                       /*selects the channel*/
    lora.setAdaptiveDataRate(LoRa_ADR_FLAG);             /*Enables adaptative data rate*/
}

void setup() {
    serialLog.begin(9600);
    while (!serialLog)
        ; // Wait until Serial is ready
    lora.init(TXPin, RXPin);
    /*set up device. You must set up all your parameters BEFORE Joining.
     If you make any change (outside channel or port setup), you should join again the network for proper working*/
    LoRa_setup();
    /*Enters in a while Loop until the join process is completed*/
    serialLog.println("Waiting to join the network...");
    while (lora.setOTAAJoin(JOIN, 10000) == 0)
        ; // will attempt to join network until the ends of time. https://www.thethingsnetwork.org/docs/lorawan/message-types/
    /*POWER DOWN the LoRa module until next Tx (Transmition) cicle*/
    lora.setDeviceLowPower();
    serialLog.println("Joining network successful!");
}

void loop() {

    /*Wake Up the LoRa module*/
    lora.setDeviceWakeUp(); /*if the module is not in sleep state, this command does nothing*/

    /*-----------sending a string message*/
    lora.setPort(LoRa_PORT_STRING); /*set port configured in reception Gateway for expecting Strings*/
    lora.transferPacketWithConfirmed(buffer_char, Tx_and_ACK_RX_timeout);
    /*--------sending bytes message*/
    lora.setPort(LoRa_PORT_BYTES); /*set port configured in reception Gateway for expecting bytes*/
    lora.transferPacketWithConfirmed(buffer_binary, PAYLOAD_FIRST_TX, Tx_and_ACK_RX_timeout);

    /*POWER DOWN the LoRa module until next Tx Transmition (Tx) cicle*/
    lora.setDeviceLowPower();
    delay((unsigned int)(Tx_delay_s*1000));/*Convert the value in seconds to miliseconds*/
}
```

Vamos compilar e gravar na placa.

<!-- <div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/build_flash.png"/>
</div> -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/flash_success_lorawan_test.png"/>
</div>

<!-- add a flag to build and flash -->

Agora podemos ver que aparece a mensagem, e podemos ver que há duas mensagens ali:

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_event_package.png"/>
</div>

É fácil entender os dados `00010203040506070809`, que vêm do array `buffer_binary`.

Também aparecem os dados: `SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4=`, o que isso significa? Pois o pacote está codificado em base64.
podemos utilizar o [base64 Decode](https://emn178.github.io/online-tools/base64_decode.html) para ver a string.

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={420} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Application_Platformio/lorawan_string_decode.png" alt="decode " />
<div style={{ marginTop: '-8px' }}><em><a href="https://emn178.github.io/online-tools/base64_decode.html?input=SSBhbSBzZW5kaW5nIHRoaXMgbWVzc2FnZSB0byBhIExvUmEgR2F0ZXdheS4%3D">🖱️ Clique aqui para decodificar</a></em></div>

</div>

Sim, é do array `buffer_char`: `I am sending this message to a LoRa Gateway`.

## Solução de Problemas

### P1: Problema com a Biblioteca Grove_LED_Bar

Se você estiver enfrentando problemas com a biblioteca Grove_LED_Bar, adicione as seguintes definições de macro no início do arquivo `Grove_LED_Bar.cpp`:

```cpp
#include "Grove_LED_Bar.h"
// Add these macros to resolve conflicts
// highlight-start
#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))
// highlight-end
```

Esse código define as macros `max` e `min`, que podem ajudar a corrigir erros de compilação relacionados a essas funções na biblioteca.

## Recursos

- [Grove - Wio-E5 | Wiki](/pt-br/Grove_LoRa_E5_New_Version/)
- [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

#### Biblioteca LoRaE5

Existem várias bibliotecas disponíveis para o módulo Wio E5:

- [andresoliva/LoRa-E5](https://github.com/andresoliva/LoRa-E5)
- [idreamsi/LoRaE5](https://github.com/idreamsi/LoRaE5)
- [disk91/Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5)

## Suporte Técnico e Discussão de Produto

Agradecemos por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
