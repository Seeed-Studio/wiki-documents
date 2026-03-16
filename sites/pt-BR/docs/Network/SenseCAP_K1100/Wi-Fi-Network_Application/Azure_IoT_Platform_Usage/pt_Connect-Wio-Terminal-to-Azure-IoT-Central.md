---
description: Primeiros Passos com o Microsoft Azure IoT Central
title: Primeiros Passos com o Microsoft Azure IoT Central
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Connect-Wio-Terminal-to-Azure-IoT-Central
last_update:
  date: 1/12/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Azure-IoT-Central/
---
# Conectar o Wio Terminal ao Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## Atualizável para Sensores Industriais

Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede LoRaWAN® global, a bateria integrada de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. e Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. e Umidade do Ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade e Temp. do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade e Temp. do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Introdução

Neste tutorial, vamos guiá-lo pelo processo de conexão do Wio Terminal ao Microsoft Azure IoT Central e envio de dados de telemetria a partir dos sensores/ hardware integrados no Wio Terminal, como o acelerômetro de 3 eixos, sensor de luz e 3 botões, para o Microsoft Azure IoT Central. Depois, você poderá visualizar os dados dos sensores em painéis interativos. Você também poderá usar o Azure IoT Central para controlar o hardware, como acionar o buzzer integrado no Wio Terminal. O Microsoft Azure IoT Central oferece suporte aos protocolos HTTP, MQTT e AMQP para comunicação; entretanto, neste tutorial usaremos o protocolo MQTT.

### O que é o Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) é a plataforma pública de computação em nuvem da Microsoft. Você pode usar o Microsoft Azure para criar, testar, implantar e gerenciar aplicações e serviços por meio de data centers gerenciados pela Microsoft.

Além disso, ele fornece uma variedade de serviços em nuvem, incluindo computação, análise, armazenamento e rede. O Microsoft Azure oferece software como serviço (SaaS), plataforma como serviço (PaaS), infraestrutura como serviço (IaaS) e serverless. Por fim, ele oferece suporte a muitas linguagens de programação, ferramentas e frameworks diferentes.

### O que é o Microsoft Azure IoT?

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) é um conjunto de serviços de nuvem gerenciados pela Microsoft que conectam, monitoram e controlam bilhões de ativos de IoT. Ele inclui segurança e sistemas operacionais para dispositivos e equipamentos, juntamente com dados e análises que ajudam empresas a criar, implantar e gerenciar aplicações de IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### O que é o Microsoft Azure IoT Central?

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) é uma solução SaaS (software como serviço) de IoT global totalmente gerenciada, que facilita a conexão, o monitoramento e o gerenciamento dos seus ativos de IoT em escala. Ela é altamente segura, acompanha o crescimento do seu negócio, garante que seus investimentos sejam reaproveitáveis e se integra aos seus aplicativos corporativos existentes. Também faz a ponte entre suas aplicações de negócios e os dados de IoT. Por fim, oferece gerenciamento centralizado para reconfigurar e atualizar seus dispositivos.

### O que é o IoT Plug and Play?

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) permite que desenvolvedores de soluções integrem dispositivos inteligentes às suas soluções sem qualquer configuração manual. No cerne do IoT Plug and Play está um modelo de dispositivo que um dispositivo usa para anunciar seus recursos para uma aplicação compatível com IoT Plug and Play. Ele contém:

- Propriedades: representam o estado somente leitura ou gravável de um dispositivo ou outra entidade
- Telemetria: dados enviados por um dispositivo
- Comandos: descrevem uma função ou operação que pode ser executada em um dispositivo

Dispositivos certificados IoT Plug and Play eliminam o incômodo de configurar dispositivos no Azure IoT Central, como criar modelos e adicionar recursos e interfaces.

### Dispositivos Certificados IoT Plug and Play

Dispositivos Certificados IoT Plug and Play são dispositivos listados no [Azure Certified Device Catalog](https://devicecatalog.azure.com) com o selo IoT Plug and Play.

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) é um dispositivo certificado como IoT Plug and Play.

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

Para ser certificado como IoT Plug and Play, você precisará atender a alguns critérios, um dos quais é publicar um modelo DTDL (Digital Twins Definition Language) que define os recursos do dispositivo em [Azure/ iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) no GitHub.

Isso permite que serviços em nuvem que usam dispositivos certificados IoT Plug and Play aprendam sobre os recursos do dispositivo a partir deste repositório.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Conectando o Wio Terminal ao Microsoft Azure IoT Central via MQTT

Conforme explicado antes, usaremos MQTT para a comunicação entre o Wio Terminal e o Microsoft Azure IoT Central. No entanto, você também pode usar a ponte HTTP, se esse for o seu requisito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Configuração do Microsoft Azure IoT Central

Primeiro, você precisa visitar o Microsoft Azure IoT Central, fazer login na sua conta Microsoft e criar um novo aplicativo para o seu projeto.

**Passo 1.** Faça login no Azure IoT Central.

Acesse o site oficial do [Azure IoT Central](https://apps.azureiotcentral.com/home), clique em **Build** no menu de navegação à esquerda e clique em **Custom apps**.

Se você ainda não estiver conectado ao Azure IoT Central, será solicitado que conclua um registro/login neste momento.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/1.png" /></div>

**Passo 2.** Preencha o **Application name** e escolha **Standard 0** em **Pricing plan**. A URL do aplicativo será criada automaticamente quando você preencher o nome do aplicativo. Neste exemplo, concluiremos esta tarefa com custo mínimo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/2.png" /></div>

:::note
Se você é um novo usuário do Azure IoT Central, recomendamos que selecione **Free**, pois isso não consumirá suas taxas.
:::
    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>

**Passo 3.** Crie um modelo de Dispositivo

Crie um novo modelo de dispositivo clicando em **Device templates** na barra de menu à esquerda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png" /></div>

Selecione **Wio Terminal** como nosso modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png" /></div>

Em seguida, basta clicar em **Create**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png" /></div>

Então, um modelo pronto é criado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png" /></div>

**Passo 5.** Crie um Dispositivo

Clique em **Devices -> Seeed Wio Terminal** no menu à esquerda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png" /></div>

Clique em **New**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png" /></div>

Clique no botão **Create** para concluir a criação do dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png" /></div>

Depois de criar o dispositivo, você verá o dispositivo que acabamos de criar em **Device**, acesse o dispositivo e clique no botão **Connect** no canto superior esquerdo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png" /></div>

Aqui precisamos das informações exibidas lá.

```
ID scope
Device ID
Primary key
```

Anote essas informações, pois as usaremos nas próximas etapas.

### Configurar o Wio Terminal

**Passo 1.** Baixe o firmware para o seu computador

Nossa segunda versão de firmware, SenseCraft, oferecerá suporte ao Azure IoT Central da maneira mais simples possível.

Em **Latest release**, clique em **SenseCraft-vx.x.uf2** para baixar o arquivo .uf2.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SenseCraft/releases" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 2.** Envie o firmware para o Wio Terminal

Conecte o Wio Terminal ao PC e ligue-o, entre no **Bootloader Mode** deslizando o botão liga/desliga ainda mais para baixo, afastando-o da posição "ON", solte, deslize novamente e solte.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

:::note
Quando o Wio Terminal estiver no modo Bootloader, o LED azul começará a pulsar de uma forma diferente de piscar.
:::
Abra o Explorador de Arquivos no seu PC e você verá uma nova unidade externa chamada **Arduino**; arraste o **arquivo .uf2** baixado anteriormente para essa **unidade Arduino**.

Agora enviamos o firmware para o Wio Terminal com sucesso.

**Passo 3.** Configuração de Wi-Fi e Azure IoT

Quando usamos o firmware **SenseCraft**, um pendrive USB aparece assim que o Wio Terminal é conectado ao computador.

:::note
Isso significa que o pendrive USB aparece quando o Wio Terminal é conectado ao computador, **sem a necessidade de alternar o botão lateral duas vezes a mais**!
:::
Neste momento, haverá um arquivo **config.txt** dentro do pendrive USB. Abra-o com um editor de texto adequado e adicione a configuração necessária nele.

```
SSID=WiFi_Name                        // Put your Wifi name here
PASSWORD=WiFi_Password                // Put your wifi password here          
ID_SCOPE=Default_ID_Scope             // Put your ID Scope here
DEVICE_ID=Device_ID                   // Put your device ID here
PRIMARY_KEY=Primary_Key               // Put your device Primary key here
```

Depois de concluir o acima, salve o arquivo. Reinicie o Wio Terminal para que as alterações tenham efeito.

### Exibir Dados de Telemetria no Microsoft Azure IoT Central

**Passo 1.** Wio Terminal conectar ao WiFi

Entre na aba **Network** e selecione **WiFi**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/51.png" /></div>

Agora ele aguardará o carregamento da configuração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/52.png" /></div>

Depois que a configuração de WiFi carregada for identificada, ele primeiro se conectará à rede WiFi e depois ao Azure IoT Central. Se a conexão com o Azure IoT Central for bem-sucedida, será exibido o seguinte.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/53.png" /></div>

**Passo 2.** Analisando os dados do Wio Terminal

Precisamos alterar o estilo do modelo exibido no **template**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png" /></div>

Para adaptar o tipo de dado do SenseCraft e obter uma apresentação de dados adequada, aqui precisamos preencher os dados brutos de acordo com a tabela abaixo.

| Display name    | Name       | Capability type   | Semantic type   |
|-----------------|------------|-------------------|-----------------|
| Acceleration X  | IMU0       | Telemetry         | None            |
| Acceleration Y  | IMU1       | Telemetry         | None            |
| Acceleration Z  | IMU2       | Telemetry         | None            |
| Light           | Light      | Telemetry         | None            |
| Sound           | Sound      | Telemetry         | None            |
| Temperature     | Temp_Humi0 | Telemetry         | None            |
| Humidity        | Temp_Humi1 | Telemetry         | None            |
| CO2             | CO2_VOC0   | Telemetry         | None            |
| VOC             | CO2_VOC1   | Telemetry         | None            |
| Soil Moisture   | Soil       | Telemetry         | None            |
| Vision AI 1     | Vision0    | Telemetry         | None            |
| Vision AI 2     | Vision1    | Telemetry         | None            |
| Vision AI 3     | Vision2    | Telemetry         | None            |
| Vision AI 4     | Vision3    | Telemetry         | None            |
| Vision AI 5     | Vision4    | Telemetry         | None            |
| Vision AI 6     | Vision5    | Telemetry         | None            |
| Vision AI 7     | Vision6    | Telemetry         | None            |
| Vision AI 8     | Vision7    | Telemetry         | None            |
| Vision AI 9     | Vision8    | Telemetry         | None            |
| Vision AI 10    | Vision9    | Telemetry         | None            |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/68.png" /></div>

Depois de preencher o formulário, clique no botão **Save**.

Clique em **Overview** no menu de navegação à esquerda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/16.png" /></div>

Expanda o menu suspenso **select a telemetry** e selecione a telemetria que você deseja visualizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/70.png" /></div>

Clique em **Add tile** e você verá o bloco adicionado ao painel do Azure IoT Central.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100-quick-start/71.png" /></div>

**Nota:** Você pode redimensionar ou alterar a visualização dos blocos de acordo com a sua preferência

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/k1100_azure_central/19.png" /></div>

Clique em **Save** e clique em **Publish**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/27.png" /></div>

Abra o painel do Azure IoT Central que você visitou antes. Clique em **Devices** no menu de navegação à esquerda. Você verá **Seeed Wio Terminal** aparecer em Devices. Clique nele.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/14.png" /></div>

Clique na entrada com o **nome do dispositivo** que você configurou anteriormente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_azure_central/23.png" /></div>

Você também pode clicar na aba **Raw data** para visualizar todos os dados de telemetria em tempo real.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100_nodered_azure/28.png" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
