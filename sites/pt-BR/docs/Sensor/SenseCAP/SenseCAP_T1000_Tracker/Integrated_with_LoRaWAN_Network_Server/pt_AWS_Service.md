---
description: Conectar o SenseCAP T1000 Tracker à AWS
title: Serviços em Nuvem AWS
keywords:
  - Tracker
  - AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /SenseCAP_T1000_Tracker_AWS
last_update:
  date: 12/4/2024
  author: Leo
createdAt: '2023-08-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_Tracker_AWS/
---

# Usando Serviços em Nuvem AWS para o SenseCAP T1000 Tracker

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) fornece os serviços em nuvem que conectam seus dispositivos IoT a outros dispositivos e aos serviços em nuvem da AWS. O AWS IoT fornece software de dispositivo que pode ajudar você a integrar seus dispositivos IoT em soluções baseadas em AWS IoT. Se seus dispositivos puderem se conectar ao AWS IoT, o AWS IoT poderá conectá-los aos serviços em nuvem que a AWS fornece.

Faça login no [console do AWS IoT](https://console.aws.amazon.com/iot/home)

:::info
Se você não tiver uma conta AWS, clique [aqui](https://portal.aws.amazon.com/billing/signup) para criar uma.
:::

## Adicionar Gateway

Navegue até `Internet of Things` e clique em `IoT Core`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="pir" width={800} height="auto" /></p>

No menu à esquerda, selecione `LPWAN devices` → `Gateways` e clique em `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="pir" width={800} height="auto" /></p>

`Gateway's EUI`: O EUI do seu gateway, que você pode encontrar na etiqueta do dispositivo.<br/>
`Frequency`: A faixa de frequência do gateway.<br/>
`Name`: Dê um nome ao seu gateway (opcional)<br/>
`SubBand`: Opcionalmente, você também pode especificar dados de configuração LoRaWAN, como as sub-bandas que deseja usar e filtros que podem controlar o fluxo de tráfego. Para mais informações, consulte [Configure position of wireless resources with AWS IoT Core for LoRaWAN](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="pir" width={800} height="auto" /></p>

## Configurar seu gateway

### Certificado do Gateway

Para autenticar seu gateway para que ele possa se comunicar com segurança com o AWS IoT, seu gateway LoRaWAN deve apresentar uma chave privada e um certificado ao AWS IoT Core for LoRaWAN.

Clique em `Create certificate`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="pir" width={800} height="auto" /></p>

Baixe e salve os arquivos de certificado e os certificados de confiança do servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="pir" width={800} height="auto" /></p>

Devem haver quatro arquivos dentro; você irá usá-los mais tarde para configurar o gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="pir" width={800} height="auto" /></p>

### Permissão do Gateway

Se você ainda não criou a função IAM IoTWirelessGatewayCertManagerRole para sua conta, crie a função antes de continuar adicionando o gateway.
Seus gateways não conseguirão se comunicar com o AWS IoT sem essa função.

Escolha a função: `IoT Wireless Gateway Cert Manager Role`, e então envie a configuração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="pir" width={800} height="auto" /></p>

Copie a URL CUPS; iremos usá-la na próxima etapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="pir" width={800} height="auto" /></p>

### Configuração do Gateway

Faça login na página de configuração Luci do gateway; consulte [Get_Started](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) para mais detalhes.

Navegue até `LoRa` > `LoRa Network`.

`Mode`: Basic Station<br/>
`Gateway EUI`: O EUI do seu gateway<br/>
`Server`: CUPS Server<br/>
`URL`: A URL CUPS que copiamos antes<br/>
`Authentication Mode`: TLS Server and Client Authentication

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="pir" width={800} height="auto" /></p>

Copie o conteúdo do arquivo de certificado que baixamos antes (o certificado pode ser aberto em formato de texto).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="pir" width={800} height="auto" /></p>

Navegue até a página Gateways e escolha o gateway que você adicionou.

Na seção de detalhes específicos LoRaWAN da página de detalhes do Gateway, você verá o status da conexão e a data e hora em que o último uplink foi recebido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="pir" width={800} height="auto" /></p>

## Adicionar Perfis

Perfis de dispositivo e serviço podem ser definidos para descrever configurações comuns de dispositivos. Esses perfis descrevem parâmetros de configuração que são compartilhados por dispositivos para facilitar a adição desses dispositivos. O AWS IoT Core for LoRaWAN oferece suporte a perfis de dispositivo e perfis de serviço.

### Adicionar perfis de dispositivo

Navegue até `Devices` > `Profiles` e clique em `Add device profile`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="pir" width={800} height="auto" /></p>

Forneça um nome de perfil de dispositivo, selecione a faixa de frequência (RfRegion) que você está usando para o dispositivo e o gateway e mantenha as outras configurações com os valores padrão.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="pir" width={800} height="auto" /></p>

### Adicionar perfis de serviço

Navegue até `Devices` > `Profiles` e clique em `Add service profile`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="pir" width={800} height="auto" /></p>

É recomendável deixar a configuração `AddGWMetaData` ativada para que você receba metadados adicionais do gateway para cada payload, como RSSI e SNR para a transmissão de dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="pir" width={800} height="auto" /></p>

### Adicionar Destino

Navegue até `Devices` > `Destination` e clique em `Add destination`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="pir" width={800} height="auto" /></p>

Aqui selecione `Publish to AWS IoT Core Message Broker` e dê um nome ao `MQTT topic` do destino

Permissions: Select an existing service role > `IoT Wireless Gateway Cert Manager Role`

:::info
O nome de um destino pode conter apenas caracteres alfanuméricos, - (hífen) e _ (sublinhado) e não pode conter espaços.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="pir" width={800} height="auto" /></p>

## Adicionar Dispositivos LoRaWAN

### Adicionar dispositivo sem fio

Navegue até `LPWAN devices` > `Devices` e clique em `Add wireless device`.

`Wireless device specification`: OTAAv1.0x

`DevEUI/APP EUI/APP key`: pode ser encontrado no aplicativo SenseCAP Mate; consulte [Get_Started](https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T1000_tracker/#get-started) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

Selecione o perfil de dispositivo e o destino que você criou na etapa anterior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

Navegue até a página Devices e escolha o dispositivo que você adicionou.

Na seção Details da página de detalhes do dispositivo sem fio, você verá a data de recebimento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="pir" width={800} height="auto" /></p>

## Configurar o decodificador

### Criar Regras de Mensagens

Navegue até a aba `Message routing` → `Rules` e clique no botão `Create Rule`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="pir" width={800} height="auto" /></p>

Dê um nome à sua regra e envie.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="pir" width={800} height="auto" /></p>

`SQL version`: 2016-03-23<br/>
`SQL statement`: SELECT * FROM **"YourDestinationTopic"**

Aqui preenchemos `t1000-raw` de acordo com [Add Destination](#Adicionar-Destino)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="pir" width={800} height="auto" /></p>

Role a página até a seção `Rule actions` e selecione `Lambda` em `Action 1`, depois clique em `Create a Lambda function`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="pir" width={800} height="auto" /></p>

`Function name`: Dê um nome à sua função.<br/>
`Runtime`: Node.js 20.x<br/>
`Architexture`: x86_64

Clique no botão `Create function` para criar uma nova função.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="pir" width={800} height="auto" /></p>

Após criar a função, você será redirecionado para a página de configuração da função. Iremos configurá-la mais tarde, então apenas volte para a página de regras.

Clique no botão Refresh e selecione a função Lambda que você criou. Em seguida, clique em `Next` para ir à Etapa 4.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="pir" width={800} height="auto" /></p>

Verifique se todos os detalhes da regra estão corretos e então clique em `Create` para criar a regra.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="pir" width={800} height="auto" /></p>

### Configure a Função Lambda

Volte para a aba `Message routing` → `Rules`, selecione a regra que você criou antes.

Clique em `Lambda` em `Actions` e depois clique no link para ir para a página de configuração da função Lambda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="pir" width={800} height="auto" /></p>

Na página seguinte de configuração da função, renomeie o arquivo `index.mjs` para `index.js`, remova todo o código e substitua-o pelo script de [Resource](#Resource), depois clique no botão `Deploy`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="pir" width={800} height="auto" /></p>

:::tip Note
Substitua o `region` e o `device id` de acordo com o seu dispositivo.
:::

Após configurar o decodificador, clique em `Configuration` → `Permissions` → `Edit`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="pir" width={800} height="auto" /></p>

Clique em `View the xxxxxxxxxxx` role na parte inferior.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="pir" width={800} height="auto" /></p>

Clique em `Add permissions` → `Attach policies`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="pir" width={800} height="auto" /></p>

Pesquise `AdministratorAccess`, marque a caixa à esquerda e depois clique em `Add Permissions`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="pir" width={800} height="auto" /></p>

### Verificar os dados

Verifique os dados na página `MQTT test client`, insira `#` e clique no botão `Subscribe`, você verá os dados.

O payload bruto do T1000 Tracker é publicado em `t1000-raw` e os dados decodificados são publicados em `tracker/measurement`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="pir" width={800} height="auto" /></p>

## Resource

[SenseCAP T1000 Tracker Decoder for AWS](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)
