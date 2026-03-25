---
description: Conectar o SenseCAP M2 Multi-Platform Gateway à AWS
title: Conectando ao AWS IoT
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/
---


## Configuração do AWS IoT

Faça login no [AWS](https://signin.aws.amazon.com).
Se você não tiver uma conta AWS, crie uma nova conta primeiro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Gateway


Navegue até **Internet of Things** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

Selecione **LPWAN devices** > **Gateway** para adicionar um gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**EUI do Gateway:** O EUI do gateway pode ser encontrado na etiqueta do dispositivo ou no [Local Console ](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Faixa de frequência:** Selecione o plano de frequência de acordo com a escolha real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>


#### Criar certificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

Baixe os arquivos de certificado e os certificados de confiança do servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

Escolha a função: **IoT Wireless Gateway Cert Manager Role**, depois envie a configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar o status de conexão do gateway

Navegue até a página Gateways e escolha o gateway que você adicionou.

Na seção de detalhes específicos LoRaWAN da página de detalhes do Gateway, você verá o status da conexão e a data e hora em que o último uplink foi recebido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Perfis

Perfis de dispositivo e serviço podem ser definidos para descrever configurações comuns de dispositivos. Esses perfis descrevem parâmetros de configuração que são compartilhados por dispositivos para facilitar a adição desses dispositivos. O AWS IoT Core para LoRaWAN oferece suporte a perfis de dispositivo e perfis de serviço.

#### Adicionar perfis de dispositivos

Navegue até **Devices** > **Profiles**, clique em Add device profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Forneça um nome de perfil de dispositivo, selecione a faixa de frequência (RfRegion) que você está usando para o dispositivo e o gateway, e mantenha as outras configurações nos valores padrão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Adicionar perfis de serviço

Navegue até **Devices** > **Profiles**, clique em Add service profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

Recomenda-se que você deixe a configuração AddGWMetaData ativada para que você receba metadados adicionais do gateway para cada payload, como RSSI e SNR para a transmissão de dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Destino

Navegue até **Devices** > **Destination**, clique em Add destination

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publicar no message broker do AWS IoT Core

**Permissões**: Selecione uma função de serviço existente > IoT Wireless Gateway Cert Manager Role

:::tip Note
Um nome de destino só pode conter caracteres alfanuméricos, - (hífen) e _ (sublinhado) e não pode conter espaços.
:::


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Dispositivos LoRaWAN

#### Adicionar dispositivo sem fio

Navegue até **LPWAN devices** > **Devices**, clique em Add wireless device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configurar dispositivo

**Especificação do dispositivo sem fio**: OTAAv1.0x 

**DevEUI:** A `device EUI/APP EUI/APP` key pode ser encontrada na etiqueta do dispositivo.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>


#### Verificar o status de conexão do dispositivo

Navegue até a página **Devices** e escolha o dispositivo que você adicionou.

Na seção Details da página de detalhes dos dispositivos sem fio, você verá a data e hora em que o último uplink foi recebido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Configuração do Gateway

Faça login no Local Console. Confira o [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) do dispositivo para o login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### Configurações de Rede LoRaWAN

Navegue até **LoRa** > **LoRa Network**

**Mode**: Basics Station

**Gateway EUI**: Ele obterá automaticamente o EUI do gateway conectado

**Server**: Escolha CUPS Server ou LNS Server (Para CUPS, a porta é 443; para LNS, a porta é 8887)

Saiba mais sobre [CUPS e LNS Server](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Modo de autenticação**: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>


Clique em Save&Apply quando terminar as configurações.

