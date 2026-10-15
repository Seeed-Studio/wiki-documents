---
description: Conectando R1225 ao AWS IoT
title: Conectando ao AWS IoT
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borda
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_aws_iot
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/07/2026
  author: Kian
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/pt-br/connecting_r1225_to_aws_iot/
updatedAt: '2026-04-15'
---

## Configuração do Gateway AWS IoT

Faça login no [AWS](https://signin.aws.amazon.com).
Se você não tem uma conta AWS, por favor, crie uma nova conta primeiro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS2.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Gateway

Navegue até **Internet das Coisas** > **IoT Core**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws1.png" alt="pir" width={800} height="auto" /></p>

Selecione **Dispositivos LPWAN** > **Gateway** para adicionar um gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws2.png" alt="pir" width={800} height="auto" /></p>

**EUI do Gateway:** O EUI do gateway pode ser encontrado na etiqueta do dispositivo ou no [Console Local](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf)

**Banda de frequência:** Selecione o plano de frequência de acordo com a escolha real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws3.png" alt="pir" width={800} height="auto" /></p>

#### Criar certificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws4.png" alt="pir" width={800} height="auto" /></p>

Faça o download dos arquivos de certificado e dos certificados de confiança do servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws5.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws6.png" alt="pir" width={800} height="auto" /></p>

#### Escolha a Função

Escolha **IoT Wireless Gateway Cert Manager Role**, então envie a configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws7.png" alt="pir" width={800} height="auto" /></p>

## Configuração do Gateway R1225

Faça login no Console Local. Consulte o [Guia de Início Rápido](https://wiki.seeedstudio.com/pt-br/r1225_quick_start/) do dispositivo para fazer login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws9.webp" alt="pir" width={800} height="auto" /></p>

### Configurações da Rede LoRaWAN

Navegue até **LoRa** > **Rede LoRa**

**Modo**: Basics Station

**EUI do Gateway**: Ele obterá automaticamente o EUI do gateway conectado

**Servidor**: Escolha Servidor CUPS ou Servidor LNS (Para CUPS, a porta é 443; para LNS, a porta é 8887)

Saiba mais sobre [Servidores CUPS e LNS](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/)

**Modo de Autenticação**: Autenticação TLS Servidor e Cliente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws10.png" alt="pir" width={800} height="auto" /></p>

Clique em Salvar e Aplicar quando terminar as configurações.

## Verificar status da conexão do gateway

Navegue até a página Gateways e escolha o gateway que você adicionou.

Na seção de detalhes específicos do LoRaWAN da página de detalhes do Gateway, você verá o status da conexão e a data e hora em que o último uplink foi recebido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_aws/aws8.png" alt="pir" width={800} height="auto" /></p>

## Configuração do Dispositivo AWS IoT

### Adicionar Perfis

Perfis de dispositivo e serviço podem ser definidos para descrever configurações comuns de dispositivos. Esses perfis descrevem parâmetros de configuração compartilhados por dispositivos para facilitar a adição desses dispositivos. O AWS IoT Core para LoRaWAN suporta perfis de dispositivo e perfis de serviço.

#### Adicionar perfis de dispositivos

Navegue até **Dispositivos** > **Perfis**, clique em Adicionar perfil de dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Forneça um Nome do perfil do dispositivo, selecione a Banda de frequência (RfRegion) que você está usando para o dispositivo e gateway, e mantenha as outras configurações nos valores padrão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS10.PNG" alt="pir" width={800} height="auto" /></p>

#### Adicionar perfis de serviço

Navegue até **Dispositivos** > **Perfis**, clique em Adicionar perfil de serviço

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

É recomendável que você deixe a configuração AddGWMetaData habilitada para que receba metadados adicionais do gateway para cada carga útil, como RSSI e SNR para a transmissão de dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS12.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Destino

Navegue até **Dispositivos** > **Destino**, clique em Adicionar destino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Publicar no broker de mensagens do AWS IoT Core

**Permissões**: Selecione uma função de serviço existente > IoT Wireless Gateway Cert Manager Role

:::tip Nota
Um nome de destino só pode ter caracteres alfanuméricos, - (hífen) e _ (sublinhado) e não pode ter espaços.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.PNG" alt="pir" width={800} height="auto" /></p>

### Adicionar Dispositivos LoRaWAN

#### Adicionar dispositivo sem fio

Navegue até **Dispositivos LPWAN** > **Dispositivos**, clique em Adicionar dispositivo sem fio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS18.PNG" alt="pir" width={800} height="auto" /></p>

#### Configurar dispositivo

**Especificação do dispositivo sem fio**: OTAAv1.0x

**DevEUI:** A chave `device EUI/APP EUI/APP` pode ser encontrada na etiqueta do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

#### Verificar status da conexão do dispositivo

Navegue até a página **Dispositivos** e escolha o dispositivo que você adicionou.

Na seção Detalhes da página de detalhes do Dispositivo sem fio, você verá a data e hora em que o último uplink foi recebido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>
