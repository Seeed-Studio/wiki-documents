---
description: Introdução ao TTN
title: Introdução ao TTN
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /TTN-Introduction
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/TTN-Introduction/
---
# Introdução ao TTN

Neste capítulo, vamos apresentar os controles do console TTN que usamos para obter uma primeira impressão do console TTN.

## Possibilidade de atualização para sensores industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você com a prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustes [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade luminosa, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x no seu próximo projeto industrial de sucesso.

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
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

## Usando o TTN pela primeira vez

Se esta é a sua primeira vez usando o TTN, consulte esta seção para concluir o registro da sua conta TTN e o uso dos componentes.

### Registrar uma conta TTN

Acesse o [site do TTN](https://console.cloud.thethings.network//), clique em **Sign up**. Selecione o plano e o console que você preferir. Aqui, recomendamos fortemente que você escolha **Community** para concluir nosso projeto, pois será gratuito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/3.png" /></div>

:::note
Desde janeiro de 2021, a The Things Network executa o The Things Stack Community Edition, uma implantação gratuita do The Things Stack baseada na comunidade.

Esta é uma atualização da versão anterior The Things Network V2, que vem com um conjunto de recursos totalmente novos, integrações prontas para uso, cobertura ampliada e experiência de usuário aprimorada.

O The Things Stack Community Edition oferece uma forma gratuita e amigável para desenvolvedores se familiarizarem com a tecnologia LoRaWAN®. Ele fornece uma rede pública comunitária LoRaWAN®, iniciada pela The Things Industries e apoiada por mais de 100 mil membros da comunidade The Things Network de mais de 100 países ao redor do mundo.
:::
Na página seguinte, você será solicitado a selecionar seu país e região, apenas escolha de acordo com a sua situação real.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/25.png" /></div>

Após o registro da conta, você entrará na página do console, as opções disponíveis são **Application** e **Gateway**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/TTN-V3-console.png" /></div>

### Aplicação TTN - Adicionar Dispositivo

Para receber uplinks e enviar downlinks para o seu dispositivo final, você primeiro precisa adicionar seu dispositivo no The Things Stack Community Edition.

Os dispositivos são adicionados dentro de [aplicações](https://www.thethingsnetwork.org/docs/applications-and-integrations/). As aplicações são úteis, por exemplo, para agrupar dispositivos por finalidade ou localização.

Ao usar o Console, você pode adicionar um dispositivo manualmente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/19.png" /></div>

Na nova página, será solicitado que você preencha informações como ID da aplicação, nome da aplicação e descrição. Basta preencher com as informações que forem convenientes para você.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/21.png" /></div>

Para criar um dispositivo, primeiro abra a aplicação na qual você deseja adicionar o dispositivo. Vá para **End devices** no menu à esquerda e clique em **+ Add end device** para acessar a página de registro do dispositivo final.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/23.png" /></div>

Nossos dispositivos estão contidos no repositório de dispositivos LoRaWAN®, o que significa menos informações que você precisa encontrar!

Para usar o repositório de dispositivos, certifique-se de que a guia **From the LoRaWAN Device Repository** esteja selecionada. Em seguida, selecione a **Brand**, **Model**, **Hardware Version**, **Software Version** e **Region** do seu dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/29.png" /></div>

:::note
 Escolha um plano de frequência apropriado para sua região. Seu dispositivo e gateway devem usar o mesmo plano de frequência para se comunicar. Diferentes regiões do mundo usam diferentes [planos de frequência](https://www.thethingsindustries.com/docs/reference/frequency-plans/), por exemplo, 863-870 MHz para a Europa, 902-928 MHz para a América do Norte, etc.
:::
Insira seu **DevEUI**, **AppEUI** e **AppKey**. O Grove - Wio-E5 é programável, você pode gerar um EUI usando o botão Generate e programá-lo no seu dispositivo.

Dê ao seu dispositivo um **ID de dispositivo final** exclusivo. Consulte [restrições de ID e EUI](https://www.thethingsindustries.com/docs/reference/id-eui-constraints/) para obter diretrizes sobre como escolher um ID exclusivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/30.png" /></div>

Clique em **Register end device** para criar o dispositivo final.

O dispositivo agora está ativado e aparecerá como conectado no The Things Stack assim que enviar um uplink.

- Instruções mais detalhadas para adicionar dispositivos estão disponíveis na [página de documentação oficial do The Things Stack](https://www.thethingsindustries.com/docs/devices/).
- Consulte [Connecting to TTN](https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/) para saber como adicionar o kit K1100 ao TTN.

### Aplicativo TTN - Integrações

Dentro do seu aplicativo, você também pode criar integrações para ajudá-lo a processar dados e agir sobre eles acionando eventos. Dessa forma, você pode implementar uma solução, por exemplo, para monitorar ou visualizar seus dados de sensor usando alguma plataforma de IoT em nuvem, agendar comandos a serem enviados para seu dispositivo final, etc.

A The Things Stack Community Edition oferece diversas integrações:

- [MQTT](https://www.thethingsindustries.com/docs/integrations/mqtt/) - A The Things Stack Community Edition expõe um servidor MQTT, para que você possa usar clientes MQTT para assinar mensagens de uplink vindas do seu dispositivo ou publicar mensagens de downlink a serem enviadas para o seu dispositivo.
- [Webhooks](https://www.thethingsindustries.com/docs/integrations/webhooks/) - O recurso HTTP Webhooks permite enviar mensagens relacionadas ao aplicativo para endpoints HTTP(S) específicos. Você pode até contribuir para nosso repositório open source de modelos de Webhook se quiser adicionar um novo modelo de integração de Webhook por conta própria.
- [Storage Integration](https://www.thethingsindustries.com/docs/integrations/storage) - A Storage Integration permite armazenar mensagens de upstream em um banco de dados persistente, para que você possa recuperá-las posteriormente.
[AWS IoT](https://www.thethingsindustries.com/docs/integrations/aws-iot/) - A The Things Stack Community Edition permite que você integre com o AWS IoT e publique telemetria de aplicativos no endpoint IoT Core. <!-- - AWS IoT链接404-->
- [LoRa Cloud](https://www.thethingsindustries.com/docs/reference/application-packages/lora-cloud-device-and-application-services/) - A integração com o LoRa® Cloud aproveita o protocolo Device & Application Services para permitir que você gerencie funcionalidades comuns na camada de aplicação e geolocalização para dispositivos baseados em modem.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/26.png" /></div>

- Consulte a página de documentação oficial do The Things Stack para mais [guias de integração passo a passo](https://www.thethingsindustries.com/docs/integrations/).

### Gateway TTN

Os principais blocos de construção da rede pública comunitária LoRaWAN® são os gateways. Milhares de gateways em todo o mundo já estão conectados à The Things Stack Community Edition, tornando a rede comunitária LoRaWAN® disponível para uso gratuito.

Para conectar seu gateway à The Things Stack Community Edition, ele precisa ser configurado para encaminhar corretamente o tráfego para ela e também precisa ser adicionado/registrado na The Things Stack Community Edition.

É recomendado usar o [protocolo LoRa Basics Station](https://www.thethingsindustries.com/docs/gateways/lora-basics-station/), devido a uma série de problemas de segurança e escalabilidade relacionados ao [UDP Packet Forwarder](https://www.thethingsindustries.com/docs/gateways/semtech-udp-packet-forwarder/).<!-- - UDP Packet Forwarder链接404-->

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/18.png" /></div>

A implantação do The Things Stack é capaz de se conectar ao [Packet Broker](https://www.thethingsindustries.com/docs/getting-started/packet-broker/), você pode aproveitar a cobertura da The Things Network sem adicionar nenhum gateway próprio. Consulte [Adding Gateways](https://www.thethingsindustries.com/docs/gateways/adding-gateways/) para instruções de como adicionar gateways e descobrir se sua localização possui gateways próximos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/overview.png" /></div>

Embora você talvez já tenha [cobertura](https://www.thethingsnetwork.org/map) em sua área, ainda recomendamos que você tenha seu próprio gateway para garantir uma cobertura confiável. Existem muitos gateways com recursos avançados no mercado, portanto, certifique-se de escolher o que melhor se adapta às suas necessidades.

- Se você estiver enfrentando problemas ao adicionar gateways à The Things Stack Community Edition, consulte [Troubleshooting](https://www.thethingsindustries.com/docs/gateways/adding-gateways/troubleshooting/).

Para mais informações sobre o uso e configuração do gateway com o TTN, leia as instruções do gateway ou obtenha ajuda do fornecedor de quem você comprou o gateway.

:::note
Diferentes regiões do mundo usam diferentes [planos de frequência](https://www.thethingsindustries.com/docs/reference/frequency-plans/), por exemplo, 863-870 MHz para a Europa, 902-928 MHz para a América do Norte, etc. Certifique-se de verificar duas vezes se o hardware está em conformidade com a frequência de rádio da sua região antes de comprar!
:::

Por favor, continue com o próximo passo do tutorial [Connecting to TTN](https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/).

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Connecting to TTN</strong><br /><br />Esta seção descreve como configurar o TTN para que os dados do sensor possam ser carregados e exibidos com sucesso no TTN.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN">Vamos começar &gt;</a></td>
    </tr></tbody></table>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca comercial da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
