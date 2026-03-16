---
description: Para pré-visualizar o recurso LoRaWAN do SenseCAP Indicator
title: Nó Final LoRaWAN - SenseCAP Indicator
keywords:
  - indicator
  - Toque
  - Tela
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png
slug: /SenseCAP_Indicator_Application_LoRaWAN
toc_max_heading_level: 4
sidebar_position: 4
last_update:
  date: 2024-01-15T17:29:20.793Z
  author: Spencer
tags:
  - dispositivo
categories:
  - SenseCAP
createdAt: '2023-12-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Application_LoRaWAN/
---

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/lorawan_landing_page.png"/>
</div>

## Demonstração Prática

Nesta seção, vamos explorar a funcionalidade básica LoRaWAN (*Class C* & *OTAA*) do SenseCAP Indicator por meio de uma demonstração prática. O processo é dividido em três etapas principais:

1. [Obter o Firmware](#flash_firmware): Personalize e instale o firmware conforme necessário.
2. [Registrar o Dispositivo](#HEAD_register_device): Adicione seu dispositivo a um LoRaWAN Network Server.
3. [Configurar Credenciais LoRaWAN](#configure_credentials): Insira os detalhes de rede necessários no seu SenseCAP Indicator.

Antes de começarmos, vamos entender um pouco o contexto sobre LoRaWAN.

## LoRaWAN

LoRaWAN é descrito como um protocolo de rede de Baixa Potência e Longo Alcance (LPWA) que conecta, sem fio, dispositivos alimentados por bateria à internet em grandes regiões ou redes. Ele faz parte do sistema sem fio LoRa e opera em um espectro sem licença, oferecendo suporte a comunicação de longo alcance com largura de banda limitada. É caracterizado por comunicação de longo alcance (até 10 milhas), longa vida útil da bateria (até 10 anos), baixo custo e baixo consumo de energia, com um tamanho de payload variando de 51 a 241 bytes, dependendo dos dados[^1].

[^1]: [A Gentle Introduction to LoRaWAN Gateways & Nodes
](https://www.seeedstudio.com/blog/2021/04/27/a-gentle-introduction-to-lorawan-gateways-nodes/)

<div style={{ textAlign: 'center' }}>

<img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" alt="LoRaWAN Framework " />
<div style={{ marginTop: '-8px' }}><em>Framework de Rede LoRaWAN</em></div>

</div>  

## Sistema de Percepção Avançada

O "Sistema de Percepção Avançada" da Seeed Studio é uma [solução de IoT](/pt-br/SenseCAP_introduction) que oferece um conjunto abrangente de ferramentas de sensoriamento, rede, computação de borda e nuvem, projetadas para aprimorar a conscientização ambiental em diversos setores. Este sistema, equipado com uma ampla variedade de módulos e dispositivos[^2], atua como os "olhos e ouvidos" digitais, promovendo uma compreensão transformadora do mundo real.

<div style={{ textAlign: 'center' }}>

<img class='border-radius: 10px;' width={680} src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/03/Seeed-Studio-Advanced-Perception-System-2048x1150.png" alt="Advanced Perception System" />
<div style={{ marginTop: '-8px' }}><em>Camadas do Sistema de Percepção Avançada</em></div>
<br/>
</div>

A Equipe SenseCAP concentra-se principalmente nos componentes de Sensor e Rede, comprometendo-se a fornecer soluções industriais sob medida e de altíssima qualidade. Seu trabalho resultou na criação de ofertas aclamadas, como a inovadora [Smart Village Solution](https://www.seeedstudio.com/smart-village), que recebeu elogios por sua praticidade e design visionário.

No âmbito da rede Helium, as contribuições da equipe são particularmente notáveis. Dispositivos como o SenseCAP M1, M2 e M4 não são apenas hotspots Helium de alto desempenho; eles são fundamentais para permitir que os usuários ganhem a criptomoeda HNT enquanto constroem, simultaneamente, uma infraestrutura de rede LoRaWAN® sem fio descentralizada. O SenseCAP M4 Square se destaca por sua capacidade de operar múltiplos Apps Web 3.0, simplificando assim a implantação de sistemas complexos com múltiplas aplicações.[^3]

Aproveitando essa profunda experiência e o engajamento contínuo com uma base diversificada de clientes, a Equipe SenseCAP decidiu estrategicamente integrar a funcionalidade LoRa ao SenseCAP Indicator.

[^2]: [SenseCAP Products - Bazaar](https://www.seeedstudio.com/SenseCAP-c-1825.html)
[^3]: [SenseCAP MX](https://www.sensecapmx.com/)

Vamos dar uma olhada mais de perto na funcionalidade LoRaWAN do [SenseCAP Indicator](https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html).

## Visão Geral

| Recurso                          | Detalhes                                                      |
|:---:|:---:|
| Transceptores de Rádio           | SX1262                                                       |
| Classes Suportadas               | Classe A/B/C                                                 |
| Bandas de Frequência Suportadas  | AS923, AU915, CN779, EU433, EU868, KR920, IN865, US915, RU864, US915 |
| Versão LoRaWAN Mac               | 1.0.4/1.1.0                                                  |
| Stack LoRaWAN do dispositivo final adotado | [LoRaMac-node](https://github.com/Lora-net/LoRaMac-node/releases/tag/v4.7.0)     |
| Documentação                     | [LoRaMac Documentation](http://stackforce.github.io/LoRaMac-doc/) |

<!-- |Regional parameters|RP002-1.0.3| -->

## Etapa 1. Obter o Firmware {#flash_firmware}

### 1.1 Baixar o Firmware

Para começar, baixe o firmware LoRaWAN, `indicator_lorawan.bin`, para o SenseCAP Indicator na página de Release do GitHub.

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

:::info Interessado em firmware personalizado?
O [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/index.html#ide)(v5.1) fornece orientações sobre como criar o seu próprio. Você pode acessar e modificar o [código-fonte](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32) para atender às suas necessidades específicas.
:::

### 1.2 Gravar o Firmware

Para gravar o firmware no SenseCAP Indicator, baixe-o primeiro e use o esptool (ou `esptool.py` se você tiver um ambiente ESP-IDF) para gravá-lo (para orientação abrangente, consulte as [instruções](/pt-br/SenseCAP_Indicator_Application_LoRaWAN)).

**Gravando firmware no Windows usando esptool:**

Use o comando abaixo no prompt de comando do Windows para gravar o firmware:

```jsx
<tool_path>/esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 <firmware_path>/indicator_lorawan.bin 
```

Por exemplo, se a sua pasta `flash_bin` estiver localizada na unidade `D:` e contiver a seguinte estrutura:

```sh
flash_bin/
├── esptool.exe
└── indicator_lorawan.bin
```

Seu comando ficará assim:

```sh
./esptool.exe --chip esp32s3 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_nonport_flash.png.png"/>
</div>

Se você tiver múltiplas portas e precisar especificar uma, use o argumento `-p` ou `--port`:

```sh
./esptool.exe --chip esp32s3 -p COM20 --baud 921600 write_flash -z 0x0 ./indicator_lorawan.bin
```

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esptool_port_flash.png"/>
</div>

:::note
Usuários de Mac devem substituir `./esptool.exe` por `./esptool`.

Se você encontrar problemas durante a gravação, considere reduzir a **velocidade de baud** ou consulte [estas etapas de solução de problemas](https://askubuntu.com/questions/1411463/dev-ttyusb0-file-disappears-from-dev-directory-while-using-device).
:::

Quando o firmware for gravado com sucesso, recupere parâmetros essenciais, como o Device EUI e o APPkey do LoRaWAN Network Server, nas etapas subsequentes.

## Etapa 2. Registrar o Dispositivo no LoRaWAN Network Server {#HEAD_register_device}

> Antes de começar, certifique-se de que o seu dispositivo esteja dentro da área de cobertura de uma rede LoRaWAN.

Esta seção irá guiá-lo na conexão a um LoRaWAN network server local. Usaremos a plataforma [ChirpStack](https://www.chirpstack.io/) como exemplo, juntamente com o [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (EU868)](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html). *Se você estiver utilizando um network server diferente, o procedimento será semelhante*; você precisará coletar as informações essenciais para ativação:

- OTAA (Over The Air Activation):
  - DevEUI
  - AppKey
  - JoinEUI/AppEUI (necessária Mac Version 1.1.0)
- ABP (Activation By Personalization):
  - DevEUI
  - DevAddr
  - AppSKey
  - NwkSKey

<!-- lorawan --eui c53364863bca6cad --app_key 220a52c272e2b1151ef5b626c0dab025 -->
<!-- lorawan --eui 97752c0092d12add --apps_key 22222222222222222222222222222222 --nwks_key 11111111111111111111111111111111 --dev_addr 33333333 -->
### 2.1 Configurar o SenseCAP LoRaWAN Gateway

Para configurar o seu gateway SenseCAP, acesse sua interface web, onde você começará a configurar um ChirpStack network server. Abaixo está um guia visual exibindo a página de configuração:

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/gateway_config.png"/>
</div>

Após ajustar as configurações, clique em `Save & Apply` para confirmar suas alterações. Em seguida, você poderá acessar a interface do ChirpStack usando a URL fornecida (por exemplo, `http://192.168.1.102:8080`).

Use as seguintes credenciais padrão para fazer login:

- **Nome de usuário:** `admin`
- **Senha:** `admin`

Para mais detalhes e opções avançadas de configuração, visite o [Guia de Configuração do LNS do Gateway SenseCAP M2](https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).

### 2.2 Configurar o Servidor de Rede Local (ChirpStack)

Consulte a documentação do ChirpStack para recursos detalhados e suporte à versão LoRaWAN: [ChirpStack Network Server Documentation](https://www.chirpstack.io/network-server/features/lorawan-versions/).

Aqui estão as etapas para configurar seu servidor de rede local usando o ChirpStack:

1. **[Criar um Perfil de Dispositivo](#create_dev_profile):**  Isso padroniza as configurações e capacidades dos seus dispositivos. É crucial para garantir que seus dispositivos se comuniquem de forma eficaz dentro da rede.
2. **[Adicionar uma Aplicação](#add_appication):** Isso ajuda a organizar e gerenciar seus dispositivos. As aplicações são usadas para agrupar dispositivos que compartilham o mesmo propósito ou características, tornando o gerenciamento mais simples.
3. **[Registrar um dispositivo em uma aplicação](#register_device):** Esta etapa vincula seu dispositivo às configurações específicas e às regras de tratamento de dados que você definiu na sua aplicação. É uma etapa crítica para garantir que seu dispositivo opere corretamente dentro da sua rede.

#### 2.2.1 Criar um Perfil de Dispositivo {#create_dev_profile}

Para criar um novo perfil de dispositivo em `Device profiles`, vá para 'Tenant' na barra lateral e selecione 'Device profiles'.

<div align="center">
  <img class='border-radius: 10px;' width={220} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/sidebar_device_profile.png"/>
</div>

Criar um perfil de dispositivo é uma etapa crucial para garantir que seu dispositivo se comunique de forma eficaz na rede LoRaWAN. Isso envolve selecionar parâmetros técnicos que influenciam o desempenho e a compatibilidade do dispositivo. Veja como você pode configurá-lo:

- **MAC Version:** Refere-se à versão do protocolo de Controle de Acesso ao Meio (MAC) que seu dispositivo utiliza. O protocolo MAC é essencial para gerenciar como seu dispositivo acessa a rede. Você pode selecionar entre as versões v1.0.4 e v1.1.0.
- **Regional Parameters Revision:** São os parâmetros específicos que precisam ser configurados com base na localização geográfica do seu dispositivo. Eles garantem que o dispositivo esteja em conformidade com as regulamentações locais e especificações da rede.

**Escolhendo a Versão MAC**

A versão MAC que você seleciona é fundamental, pois determina o conjunto de credenciais que seu dispositivo precisará:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='MAC Version 1.0.4'>

  Você precisará das seguintes credenciais:

- **DevEUI:** Este é um identificador exclusivo atribuído ao seu dispositivo, garantindo exclusividade global.
- **AppKey:** Uma chave secreta usada para criptografar e proteger as comunicações do seu dispositivo.

</TabItem>

<TabItem value='MAC Version 1.1.0'>

  Seu dispositivo precisará destas credenciais:

- **DevEUI:** Um identificador globalmente exclusivo para o seu dispositivo.
- **AppEUI/JoinEUI:** Um identificador exclusivo para a aplicação à qual seu dispositivo se conecta.
- **AppKey:** A chave criptográfica usada para proteger as comunicações.

</TabItem>
</Tabs>

**Escolhendo a Revisão dos Parâmetros Regionais**

No contexto de configuração de um perfil de dispositivo para a rede LoRaWAN, a versão dos Parâmetros Regionais (RP) que você escolhe é crucial para garantir que seu dispositivo opere em conformidade com padrões e especificações regionais específicas.

**Configuração Atual**

Por enquanto, estamos configurando um perfil de dispositivo com MAC Version `1.0.4` e Regional Parameters Revision `RP002-1.0.2`.

:::info Regional Parameters Revision
Para configurar um perfil de dispositivo na rede LoRaWAN, `RP002-1.0.2` é uma escolha adequada para as necessidades atuais. `RP002-1.0.3` é recomendada pelo [código](https://github.com/Lora-net/LoRaMac-node/blob/v4.7.0/src/mac/region/Region.h) de acordo com a especificação `v4.7.0` do LoRaMac-node.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_device_profile_check.png"/>
</div>

Compreender e configurar corretamente os elementos necessários é fundamental para garantir que seu dispositivo se comunique de forma eficaz e segura na rede LoRaWAN.

Para usar o tipo de dispositivo **Class C**, é importante ativar especificamente essa funcionalidade no seu perfil de dispositivo.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_classC_enable.png"/>
</div>

**Função Decoder**

De fato, para tornar significativos e interpretáveis os dados de payload transmitidos pelo seu dispositivo, é essencial implementar um decodificador dentro do perfil de dispositivo. Esse decodificador irá traduzir os dados binários brutos para um formato legível, permitindo que você compreenda e utilize de forma eficaz as informações enviadas pelo dispositivo.

<details>

<summary>Clique para copiar Decoder.js</summary>

O decodificador vem do [repositório GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/docs/ChirpStackV4_Decoder.js)

```js
function decodeUplink(input) {
    var decoded = {
        data:[]
    };
    var type;
    var floatNumber;

    if ( (input.bytes.length  % 5) !== 0) {
        decoded.data.push({
            type: "error",
            Value: -1
        });

        return { data: decoded }
    }

    const arrayBuffer = new ArrayBuffer(4);
    const dataView = new DataView(arrayBuffer);

    for(let j =0 ; j < input.bytes.length; j+=5) {
        var num =0;
        switch ( input.bytes[j]) {
            case 0:
                type = 'Temp';
                num  = 2;
                break;
            case 1:
                type = 'Humidity';
                num  = 2;
                break;
            case 2:
                type = 'CO2';
                num  = 0;
                break;
            case 3:
                type = 'TVOC';
                num  = 0;
                break;
            case 4:
                type = 'Light';
                num  = 0;
                break;
            default:
                type = 'unknown';
                break;
        }
        for (let i = 0; i < 4; i++) {
            dataView.setUint8(i, input.bytes[j+i+1]);
        }
        floatNumber = dataView.getFloat32(0, true); 
        decoded.data.push({
            type:  type,
            Value: floatNumber.toFixed(num)
        });
    }
    return { data: decoded }
}

function encodeDownlink(input) {
  return {
    bytes: [225, 230, 255, 0]
  };
}
```

</details>

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_decoder.png"/>
</div>

Depois que o perfil de dispositivo for criado, a próxima etapa é adicionar uma aplicação.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_104_profile.png"/>
</div>

#### 2.2.2 Adicionar uma Aplicação {#add_appication}

Crie e configure uma aplicação dentro do seu LoRaWAN Network Server para gerenciar seus dispositivos.

Para criar uma nova Application, vá para 'Tenant' na barra lateral e selecione 'Application'.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_create.png"/>
</div>

Para enviar, defina o Name e, opcionalmente, forneça uma descrição.

#### 2.2.3 Registrar um dispositivo em uma aplicação {#register_device}

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_add_device.png"/>
</div>

Pressione o botão `Add device` na sua aplicação.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_device_add.png"/>
</div>

Para adicionar um dispositivo, você precisa especificar um `Name` e fornecer um `Device EUI` juntamente com o `Device Profile` que você criou anteriormente.

Você pode optar por gerar automaticamente o Device EUI ou usar um existente do seu dispositivo.

Para este processo, usaremos o Device EUI gerado automaticamente. Depois de enviar esses detalhes, o dispositivo será adicionado à aplicação e você será redirecionado automaticamente para a seção OTAA Keys.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_app_otaa.png"/>
</div>

Clique no botão para gerar uma **Application Key (AppKey)** aleatória ou opte por usar uma já existente. Certifique-se de ter todas as credenciais e parâmetros necessários. Para *MAC Version 1.0.4*, as credenciais necessárias são:

- **DevEUI (Exemplo):** `5d61e4648dc926e2`
- **AppKey (Exemplo):** `ec2b966c2c4bbe94a6ef79d0479db0e5`

Com esses detalhes, temos o comando:

```sh
lorawan --eui 5d61e4648dc926e2 --app_key ec2b966c2c4bbe94a6ef79d0479db0e5
```

Para comandos adicionais e assistência, consulte a seção [console command](#commands).

## Passo 3. Configurar o SenseCAP Indicator para Entrar na Rede{#configure_credentials}

Para estabelecer uma conexão com seu SenseCAP Indicator, você pode usar qualquer **ferramenta serial**([Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom), [Putty](https://www.putty.org/), etc.) ou apenas usar `idf monitor`(siga as [instruções detalhadas fornecidas na documentação do ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.1.2/esp32/api-guides/tools/idf-monitor.html)):

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/esp_idf_monitor.png"/>
</div>

:::caution
Certifique-se de que seu dispositivo não tenha iniciado a conexão LoRaWAN antes desta etapa.
Se tiver, você precisará interrompê-la.
:::

Insira os comandos, incluindo as credenciais, no console.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_otaa_config.png"/>
</div>

Agora, você deve conseguir visualizar as chaves no seu SenseCAP Indicator. Se necessário, faça quaisquer atualizações necessárias nas configurações.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_press_join.png"/>
</div>

Quando você pressionar o botão *Join*, será possível observar diretamente o processo de conexão por meio do *console*, permitindo monitorar e verificar o estabelecimento bem-sucedido da conexão.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bin_console.png"/>
</div>

## Etapa 4 **Envio e Recebimento de Mensagens** {#uplink_and_downlink}

Nesta seção, vamos guiá-lo pelo processo de monitoramento das comunicações de uplink e downlink entre seu dispositivo e a rede LoRaWAN.[^4]

[^4]: [In-Depth: Sending and Receiving Messages with LoRaWAN®](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/sending-and-receiving-messages-with-lorawan/sending-and-receiving-messages/)

### Mensagem de Uplink

As mensagens de uplink são fundamentais em uma rede LoRaWAN, permitindo que dispositivos como o SenseCAP Indicator transmitam dados para um servidor de rede. Essas mensagens são cruciais para relatar *dados de sensores*, status do dispositivo e outras informações de telemetria.

<details>

<summary>O Conceito de Mensagem de Uplink</summary>

**Uplink em LoRaWAN:**

Em uma rede LoRaWAN, uma mensagem de uplink é qualquer comunicação iniciada por um dispositivo final (como o SenseCAP Indicator) e enviada ao servidor de rede por meio de um gateway. Essas mensagens são normalmente usadas para transmitir leituras de sensores ou status do dispositivo.

1. **Coleta de Dados**: O SenseCAP Indicator coleta dados de seus sensores ou processos internos. Isso pode incluir leituras ambientais, status do dispositivo ou outras métricas relevantes.

2. **Empacotamento de Dados**: Os dados coletados são então empacotados em um *formato predefinido* adequado para transmissão. Isso pode envolver a codificação dos dados para otimizar o tamanho do payload e garantir uma transmissão eficiente.

3. **Envio da Mensagem**: O dispositivo transmite a mensagem de uplink por meio da rede LoRaWAN. Essa transmissão geralmente é agendada com base em intervalos específicos (por exemplo, a cada 5 minutos) ou acionada por determinados eventos (por exemplo, o rompimento de um limite).

**Recebimento e Processamento no Servidor de Rede:**

Uma vez que a mensagem de uplink é enviada pelo SenseCAP Indicator, ela é recebida pelo servidor de rede LoRaWAN por meio de um gateway. O servidor de rede então processa a mensagem da seguinte maneira:

1. **Recepção da Mensagem**: O servidor de rede recebe a mensagem de uplink do gateway e a decodifica.

2. **Processamento e Análise de Dados**: Após a decodificação, o servidor processa os dados, o que pode envolver registrá-los, disparar alertas ou realizar análises adicionais. Os dados podem incluir vários tipos de informações, como leituras de temperatura, níveis de umidade ou outros dados de sensores, dependendo das capacidades do dispositivo.

3. **Ações de Resposta**: Com base nos dados recebidos, o servidor de rede pode tomar alguma ação, como enviar uma mensagem de downlink ao dispositivo com instruções ou atualizações. Essa resposta pode ser automatizada com base em regras predefinidas ou acionada manualmente por um usuário que esteja monitorando o sistema.

</details>

#### Mensagem de Uplink: envio de Dados de Sensor

No contexto do demo LoRaWAN usando o SenseCAP Indicator, a mensagem de uplink pode consistir em dados de sensores simples, como leituras de temperatura ou umidade.

Quando o *processo de join* for concluído com sucesso, você poderá visualizar os logs na seção `LoRaWAN frames` para monitorar a transmissão de dados e obter um relato detalhado da comunicação do dispositivo com a rede.

:::tip
Navegue até a seção *LoRaWAN frames* de um dispositivo dentro do aplicativo que você criou e localize o seu dispositivo específico. É aqui que você pode monitorar e gerenciar os pacotes de dados que estão sendo transmitidos e recebidos pelo seu dispositivo, garantindo uma comunicação e operação suaves dentro da rede LoRaWAN.
:::

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_frame.png"/>
</div>

Agora, com a função de decodificador ativada, você deverá conseguir ver os dados analisados na seção de eventos (você pode revelá-la pressionando o botão `+up`). Isso permitirá que você compreenda e analise com mais eficácia os dados recebidos do seu dispositivo.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_event_view.png"/>
</div>

### Mensagem de Downlink

O processo de downlink na rede LoRaWAN é crítico para a comunicação bidirecional, permitindo a transmissão de dados e comandos do servidor de rede de volta para o dispositivo SenseCAP Indicator. Essa capacidade é particularmente útil para vários comandos operacionais, alterações de configuração ou atualizações de firmware.

<details>

<summary>O Conceito de Mensagem de Downlink</summary>

**Downlink em LoRaWAN:**

No ambiente de demonstração LoRaWAN, as mensagens de downlink são usadas para controlar uma lâmpada animada no SenseCAP Indicator, permitindo que os usuários a liguem ou desliguem. No entanto, essa funcionalidade pode ser estendida para executar comandos ou configurações específicas conforme necessário.

**Envio de uma Mensagem de Downlink**

1. **Iniciando uma Mensagem de Downlink**: Para enviar uma mensagem de downlink, normalmente você usará a interface do servidor de rede. Navegue até a seção em que é possível agendar mensagens de downlink para o seu dispositivo.

2. **Formato da Mensagem**: Certifique-se de que a mensagem esteja formatada de acordo com as especificações exigidas pelo SenseCAP Indicator. Isso pode incluir formatos de payload específicos ou métodos de codificação, dependendo do que a mensagem de downlink deve fazer.

3. **Agendamento da Mensagem**: Depois de compor a mensagem, agende seu envio para um momento apropriado. O agendamento pode depender de vários fatores, como a programação de transmissão de dados do dispositivo ou o horário esperado de atividade.

**Recebimento e Processamento da Mensagem de Downlink no Dispositivo**

Quando uma mensagem de downlink é transmitida pelo servidor de rede LoRaWAN, o SenseCAP Indicator irá recebê-la durante sua próxima janela de recepção. O dispositivo processa a mensagem da seguinte maneira:

1. **Recepção da Mensagem**: O SenseCAP Indicator escuta mensagens de downlink durante janelas de recepção predefinidas. É crucial que o dispositivo esteja em estado receptivo durante esses períodos.

2. **Processamento da Mensagem**: Ao receber uma mensagem de downlink, o dispositivo processará o conteúdo. Isso pode envolver alterar uma configuração, atualizar um parâmetro ou acionar uma ação, como alternar um relé ou ajustar um limite de sensor[^5].

[^5]: [TxData Function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L445)

3. **Feedback e Confirmação**: Se a mensagem de downlink exigir confirmação (no caso de um downlink confirmado), o dispositivo enviará uma confirmação em sua próxima mensagem de uplink.

</details>

#### Mensagem de Demonstração: Controlando uma Lâmpada

Nesta demonstração, vamos ilustrar como mensagens de downlink podem ser usadas para controlar uma lâmpada simulada no Indicator via rede LoRaWAN. Este exemplo mostra a aplicação prática da comunicação de downlink para o gerenciamento remoto de dispositivos.

**1. Visão Geral do Cenário:**

- Neste demo, o SenseCAP Indicator é configurado com uma lâmpada virtual, que representa um dispositivo simples e controlável.
- A lâmpada possui dois estados: 'on' e 'off', que são controlados por meio de mensagens de downlink enviadas pelo servidor de rede LoRaWAN.

**2. Preparando a Mensagem de Downlink:**

- Para controlar a lâmpada, é definida uma estrutura de payload específica para a mensagem de downlink. Para simplificar, vamos supor:
  - Enviar o payload `0001` liga a lâmpada.
  - Enviar o payload `0000` desliga a lâmpada.

- Esses payloads são codificados em um formato que o SenseCAP Indicator está programado para entender e executar.[^6]

[^6]: [lorawan_rx_data_handle function - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/11bf6165f0e815a1dc6b83be253972ac320ecdd5/examples/indicator_lorawan/main/lorawan/indicator_lorawan.c#L591C33-L591C33)

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/bulb_payload.png"/>
</div>

**3. Enviando a Mensagem de Downlink:**

- Por meio da interface do servidor de rede, você pode agendar a mensagem de downlink com o payload correspondente.
- A mensagem é então colocada na fila e enviada ao SenseCAP Indicator durante sua próxima janela de recepção disponível (por isso há atraso).

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/queue_packet.png"/>
</div>

**4. Recebendo a Mensagem de Downlink:**

Para ligar a lâmpada, você agenda um downlink com o payload `0001`. Para desligá-la, você usa o payload `0000`. Como eu havia enfileirado uma mensagem de downlink `0001`, agora quero enviar uma mensagem de downlink `0000` para desligar a lâmpada.

<div align="center">
  <img class='border-radius: 10px;' width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/console_bulb.png"/>
</div>

E você pode ver que a lâmpada está **desligada**.

## Funcionalidades aguardando para serem exploradas {#function}

Há uma ampla variedade de funcionalidades no SenseCAP Indicator aguardando para serem exploradas. Neste demo, ilustramos o envio de dados de sensores e o uso de mensagens de downlink para controlar a lâmpada virtual do SenseCAP Indicator.

**Principais recursos para explorar:**

**1. Recepção e execução de comandos:**

- O SenseCAP Indicator recebe mensagens de downlink com eficiência.
- Ele processa essas mensagens, interpretando comandos como ligar ou desligar a lâmpada virtual.
- O estado da lâmpada muda de acordo, oferecendo uma simulação realista de controle de dispositivo.

**2. Confirmação e verificação:**

- Após a execução do comando, o SenseCAP Indicator envia de volta uma mensagem de uplink como confirmação.
- Esse reconhecimento pode ser acompanhado via

a interface do network server, garantindo que o comando foi efetivamente recebido e executado.

**3. Aplicações práticas:**

- Esta demonstração simples destaca a utilidade das mensagens de downlink LoRaWAN na manipulação de dispositivos IoT.
- Ela apresenta um aspecto fundamental dos ecossistemas de IoT: a capacidade de direcionar e gerenciar dispositivos remotamente, demonstrando seu valor prático.

Esta demonstração é apenas o começo. O SenseCAP Indicator oferece uma plataforma versátil para diversas aplicações de IoT, desde monitoramento ambiental até automação inteligente. Aprofundando-se em seus recursos, você pode liberar todo o potencial desta poderosa ferramenta, abrindo caminho para soluções inovadoras e maior controle em seus projetos de IoT. Incentivamos você a experimentar e descobrir as muitas maneiras pelas quais o SenseCAP Indicator pode aprimorar suas iniciativas de IoT.

## Página de Manual do Console {#commands}

<!-- check the [indicator_lorawan - README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lorawan/README.md)): -->

<div align="center">
  <img class='border-radius: 10px;' width={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/indicator_cmd_all.png"/>
</div>

Aqui está uma introdução ao comando de terminal para configurar as informações de rede LoRaWAN, no estilo de uma entrada de manual:

### **lorawan**

Este comando configura as informações da rede LoRaWAN para um dispositivo. Ele permite definir vários parâmetros necessários para os métodos OTAA (Over-the-Air Activation) e ABP (Activation By Personalization).

##### Uso

```sh
lorawan [--eui=] [--join_eui=] [--app_key=] [--dev_addr=] [--apps_key=] [--nwks_key=]
```

##### Opções

- `--eui=`: Define o EUI (Extended Unique Identifier) para o dispositivo. Ele exige 8 dígitos hexadecimais, com o MSB (Most Significant Bit) primeiro.

- `--join_eui=`: Define o JOIN EUI (anteriormente conhecido como APP EUI), que é um identificador de aplicação em OTAA. Ele exige 8 dígitos hexadecimais, com o MSB primeiro.

- `--app_key=`: Define a APP KEY, que é uma chave criptográfica usada no processo de junção OTAA. Ela exige 16 dígitos hexadecimais, com o MSB primeiro.

- `--dev_addr=`: Define o Device Address para ABP. É um identificador de 4 dígitos hexadecimais, com o MSB primeiro.

- `--apps_key=`: Define a APPS KEY para ABP, que é usada para criptografar cargas úteis de aplicação. Ela exige 16 dígitos hexadecimais, com o MSB primeiro.

- `--nwks_key=`: Define a NWKS KEY para ABP, que é usada para criptografar cargas úteis de rede e para autenticação do dispositivo. Ela exige 16 dígitos hexadecimais, com o MSB primeiro.

## FAQs

<details>
<summary>O SenseCAP Indicator pode servir como meu LoRaWAN Gateway?</summary>

Não, o SenseCAP Indicator não foi projetado para funcionar como um LoRaWAN Gateway de acordo com o transceptor lora SX1262. Ele é principalmente um dispositivo final na arquitetura de rede LoRaWAN. Um LoRaWAN Gateway normalmente possui diferentes recursos de hardware e software, projetados para conectar vários dispositivos finais como o SenseCAP Indicator ao network server. Se você está procurando um LoRaWAN Gateway, deve considerar dispositivos especificamente projetados para esse propósito.
</details>

<details>
<summary>Por que o True Network Server não está enviando um joinAccept?</summary>

**Nota:** Há alguns cenários em que um dispositivo pode não receber um `joinAccept` do network server:

- **Mudança de frequência:** Se você alterar as configurações de frequência, mas mantiver as mesmas credenciais do dispositivo no network server, o dispositivo pode não se sincronizar corretamente.

- **Flash do dispositivo limpo:** Se você tiver limpado a memória flash do dispositivo, mas continuar usando as mesmas credenciais, isso pode levar a problemas de sincronização.

Em ambos os casos, é crucial garantir que os nonces (número usado uma vez) do dispositivo OTAA (Over-the-Air Activation) estejam sincronizados. Para resolver isso, use o recurso `Flush OTAA device nonces` no seu network server. Essa ação irá redefinir os nonces e ajudar a restabelecer uma conexão adequada.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/ns_flush_nonces.png"/>
</div>
</details>

<details>
<summary>Qual FPort usar para enviar mensagem de downlink?</summary>

Na configuração atual do nosso demo LoRaWAN, não há uma porta predefinida designada para o envio de mensagens de downlink. O código de demonstração foi projetado para ser flexível e pode ser adaptado às suas necessidades específicas.

Se você precisar processar mensagens em uma porta específica de uma determinada maneira, tem a opção de modificar o código de acordo. Essa personalização permite o tratamento sob medida de mensagens de downlink com base em diferentes portas, dando a você maior controle sobre como seu dispositivo interpreta e responde a essas comunicações.
</details>

<details>
<summary>Como usar a MAC Version 1.1.0?</summary>

Para utilizar os recursos da versão 1.1.0 do LoRaWAN MAC, é necessário configurar adequadamente as definições criptográficas. Você pode fazer isso usando o comando `idf.py menuconfig` para habilitar a opção `USE LRWAN_1_1_X_CRYPTO`.

<div align="center">
  <img class='border-radius: 10px;' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/LoRaWAN_Application/menuconfig_110.png"/>
</div>

A implementação da versão `1.1.0` em LoRaWAN requer algoritmos criptográficos específicos para maior segurança. Ao definir essa opção, você garante que seu dispositivo seja compatível com os recursos e protocolos de segurança aprimorados introduzidos nesta versão.
</details>

## Serviço ODM

A Seeed Studio oferece um serviço ODM completo e integrado para acomodar personalizações rápidas e requisitos de escalonamento para diversas necessidades. Se você deseja adaptar seu projeto com recursos especializados ou precisa de ajuda para escalar suas operações de forma eficiente, entre em contato conosco. Para consultas e informações mais detalhadas, escreva para iot@seeed.cc. Estamos aqui para ajudar a transformar suas ideias únicas em realidade.

## Suporte Técnico

**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

Se você encontrar qualquer problema ou tiver dúvidas ao seguir este tutorial, fique à vontade para entrar em contato com o nosso suporte técnico. Estamos sempre à disposição para ajudar!

Visite o nosso [Canal Oficial da Seeed no Discord](https://discord.gg/kpY74apCWj) para fazer suas perguntas ou o [GitHub discussions](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartilhar tudo o que quiser!
