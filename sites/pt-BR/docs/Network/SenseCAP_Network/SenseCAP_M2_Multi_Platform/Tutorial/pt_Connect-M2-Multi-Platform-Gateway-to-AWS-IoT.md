---
description: Conectar o Gateway Multi-Plataforma SenseCAP M2 ao AWS
title: Conectando ao AWS IoT
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-15'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/
---


## Configuração AWS IoT

Faça login na [AWS](https://signin.aws.amazon.com).
Se você não tem uma conta AWS, crie uma nova conta primeiro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Gateway

Navegue até **Internet das Coisas** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS1.PNG" alt="pir" width={800} height="auto" /></p>

Selecione **Dispositivos LPWAN** > **Gateway** para adicionar um gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS4.PNG" alt="pir" width={800} height="auto" /></p>

**EUI do Gateway:** O EUI do gateway pode ser encontrado na etiqueta do dispositivo ou no [Console Local](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Faixa de frequência:** Selecione o plano de frequência conforme a escolha real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS3.PNG" alt="pir" width={800} height="auto" /></p>

#### Criar certificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS7.PNG" alt="pir" width={800} height="auto" /></p>

Baixe os arquivos de certificado e os certificados de confiança do servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS5.PNG" alt="pir" width={800} height="auto" /></p>

Escolha a Role: **IoT Wireless Gateway Cert Manager Role**, então submeta a configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS9.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar status de conexão do gateway

Navegue até a página Gateways e escolha o gateway que você adicionou.

Na seção de detalhes específicos do LoRaWAN da página de detalhes do Gateway, você verá o status de conexão e a data e hora do último uplink recebido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS8.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Perfis

Perfis de dispositivo e serviço podem ser definidos para descrições de configurações comuns de dispositivos. Esses perfis descrevem parâmetros de configuração que são compartilhados por dispositivos para facilitar a adição desses dispositivos. AWS IoT Core para LoRaWAN suporta perfis de dispositivo e perfis de serviço.

#### Adicionar perfis de dispositivo

Navegue até **Devices** > **Profiles**, clique em Add device profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Forneça um nome de Perfil de dispositivo, selecione a Faixa de frequência (RfRegion) que você está usando para o dispositivo e gateway, e mantenha as outras configurações com os valores padrão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Adicionar perfis de serviço

Navegue até **Devices** > **Profiles**, clique em Add service profile

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

É recomendado que você deixe a configuração AddGWMetaData habilitada para que você receba metadados adicionais do gateway para cada payload, como RSSI e SNR para a transmissão de dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Destino

Navegue até **Devices** > **Destination**, clique em Add destination

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publicar para o broker de mensagens AWS IoT Core

**Permissões:** Selecione uma role de serviço existente > IoT Wireless Gateway Cert Manager Role

:::tip Nota
Um nome de destino só pode ter caracteres alfanuméricos, - (hífen) e _ (underline) e não pode ter espaços.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Dispositivos LoRaWAN

#### Adicionar dispositivo wireless

Navegue até **LPWAN devices** > **Devices**, clique em Add wireless device

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configurar dispositivo

**Especificação do dispositivo wireless**: OTAAv1.0x

**DevEUI:** A chave `device EUI/APP EUI/APP` pode ser encontrada na etiqueta do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar status de conexão do dispositivo

Navegue até a página **Devices** e escolha o dispositivo que você adicionou.

Na seção Details da página de detalhes do Wireless devices, você verá a data e hora do último uplink recebido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Configuração do Gateway

Faça login no Console Local Confira o [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) do dispositivo para login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS22.PNG" alt="pir" width={800} height="auto" /></p>

### Configurações de Rede LoRaWAN

Navegue até **LoRa** > **LoRa Network**

**Modo**: Basics Station

**Gateway EUI**: Automaticamente obtém o EUI do gateway conectado

**Servidor**: Escolha Servidor CUPS ou Servidor LNS (Para CUPS, porta é 443; para LNS, porta é 8887)

Saiba mais sobre [Servidor CUPS e LNS](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Modo de Autenticação**: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

Clique em Save&Apply quando você terminar as configurações.
