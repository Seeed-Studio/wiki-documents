---
description: Sistema de alarme de monitoramento de umidade do solo
title: Sistema de alarme de monitoramento de umidade do solo
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1111-Quick-Start-Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1111-Quick-Start-Guide/
---
# Sistema de alarme de monitoramento de umidade do solo

Neste wiki, mostraremos como utilizar o Wio Terminal para conectar o Grove - Wio-E5 e o Grove - Soil Moisture Sensor que estão no kit, conectando‑os às plataformas Helium e Azure IoT Central, para construir um monitoramento em tempo real de vasos no quintal e um lembrete de rega, para uma visão geral da Internet das Coisas.

## Atualizável para sensores industriais

Com o SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, a configuração por Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do aplicativo tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8‑em‑1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Soil Moisture &amp; Temp</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Soil Moisture &amp; Temp &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 Weather Station</strong></a></td>
    </tr>
  </tbody></table>

## Pré-requisitos

Antes de começar, devemos atender aos seguintes pré-requisitos:

### Materiais necessários

<table align="center">
  <tbody>
    <tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove Soil Moisture Sensor</td>
    </tr>
  </tbody>
</table>

**Software**

<div>
  - <a href="https://www.arduino.cc/" target="_blank"><span>Arduino</span></a>
</div>

Faremos o upload da programação para o Wio Terminal por meio do Arduino. Se esta é a sua primeira vez usando Arduino com Wio Terminal, recomendamos fortemente que consulte
  <a href="https://wiki.seeedstudio.com/pt-br/Preliminary-Preparation/" target="_blank"><span>Primeiros Passos com o Wio Terminal</span></a>.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

**Outros**

- Vaso

Neste demo inicial, estamos usando um sensor de umidade do solo. Portanto, um vaso com solo suficientemente profundo será o ideal.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png" /></div>

### Registro no Helium para Conexão

<a href="https://console.helium.com/" target="_blank"><span>Helium</span> </a>é uma rede global e distribuída de Hotspots que criam cobertura pública e de longo alcance sem fio para dispositivos IoT habilitados para LoRaWAN®.

Ele nos permite enviar uma certa quantidade de dados por LoRa® gratuitamente e vamos conectá‑lo ao Wio Terminal. Todas as informações de que precisamos para conectar o Wio Terminal são apresentadas **na primeira página** após o registro da conta:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

:::note
O dispositivo geralmente leva cerca de 20 minutos para ficar realmente pronto. Recomenda‑se que ele seja adicionado logo no início.
:::

### Registro no Azure IoT para Notificações

<a href="https://portal.azure.com/" target="_blank"><span>Azure IoT Central</span> </a>
 é um serviço gerenciado hospedado na nuvem que atua como um hub central de mensagens para comunicação entre um aplicativo de IoT e seus dispositivos conectados.

Ele pode nos ajudar a gerenciar dados LoRa® e executar algumas ações gratuitamente por uma semana no início. Vamos integrá‑lo com o Helium para **monitorar dados** e configurar um **lembrete automático de rega de vasos**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png" /></div>

## Primeiros Passos com o Monitor de Umidade do Solo

Neste demo rápido, precisamos apenas de uma conexão LoRa® simples com o Grove - Soil Moisture Sensor, para o propósito de monitoramento automático da umidade do solo e alerta.

### Inicialização dos equipamentos

- **Passo 1**. Use o cabo Grove para conectar tudo, com o Grove - Soil Moisture Sensor à **direita** do Wio Terminal e o Grove - Wio-E5 à **esquerda**.

:::note
A posição onde o Grove - Wio-E5 estiver fará diferença no código enviado.
:::

- **Passo 2**. Conecte um PC e o Wio Terminal com um cabo Type-C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

### Conectar Wio Terminal ao Helium

- **Passo 1**. Abra a página do <a href="https://console.helium.com/" target="_blank"><span>Helium</span></a>
 no PC e clique em "Devices" na coluna esquerda. **Adicione um novo dispositivo**, e então verifique as informações abaixo (exemplo):

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3a.png" /></div>

- **Passo 2**. Baixe o código Arduino abaixo e abra-o com o Arduino.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></div><p />
</div>

- **Passo 3**. Encontre a linha de código específica e preencha nela as informações de conexão do Helium que encontramos, onde devemos saber que **apenas mudamos as letras e números**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit4a.png" /></div>

- **Passo 4**. Selecione a placa correta e a Porta. Podemos prosseguir para fazer o upload clicando no botão no canto superior esquerdo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3.png" /></div>

- **Passo 5**. Abra o "Serial Monitor" no canto superior direito do Arduino, e podemos ver que a conexão foi concluída e que os dados foram enviados.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit5a.png" /></div>

- **Passo 6**. Volte para o site do Helium e verifique "Devices". Na parte inferior podemos ver que, de fato, alguns dados foram recebidos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/7.jpg" /></div>

Por causa da característica da comunicação LoRa®, a apresentação dos dados é um array de números e letras que pode nos deixar confusos. Portanto, precisamos decodificá-lo para obter a informação verdadeira.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

### Dados Recebidos Decodificados no Helium

- **Passo 1**. Clique em "Function" na coluna esquerda da página e adicione uma função personalizada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

- **Passo 2**. Copie o código abaixo e adicione-o em "CUSTOM SCRIPT", depois salve.

```cpp
function Decoder(bytes, port) {
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
  return decoded;
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit8.png" /></div>

- **Passo 3**. Clique em "Flows" à esquerda e arraste os blocos "Devices" e "Functions" para a paleta. Conecte-os como abaixo:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit9.png" /></div>

Isso nos ajuda a traduzir nossos dados para que sejam legíveis.

- **Passo 4(opcional)**. Volte para a página "Function", e podemos <a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/#upload-code-send-data-to-helium" target="_blank"><span>obter os dados hexadecimais de entrada</span></a>
 do dispositivo. Selecione a porta como '8' e clique no botão "RUN".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Agora podemos ler nossos dados, mas o processo é um pouco complicado e não é fácil de usar. O que podemos fazer para que os dados sejam apresentados continuamente?

### Integrar Plataforma Azure IoT

Podemos integrar outra plataforma, o **Azure IoT**, para apresentar e gerenciar nossos dados, e até realizar algumas ações.

- **Passo 1**. Abra primeiro a página do Helium, clique em "Integrations" na coluna esquerda da página e selecione "Azure IoT Central".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png" /></div>

- **Passo 2**. Crie um novo aplicativo no <a href="https://apps.azureiotcentral.com/" target="_blank"><span>Azure IoT Central</span></a>
. E então integre o Azure IoT Central no Helium preenchendo as informações necessárias abaixo:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png" /></div>

- **Passo 3**. Clique em "Flows" na coluna esquerda da nossa página, arraste o bloco do Azure IoT Central e conecte-o após a função personalizada, a ordem deve ser assim:

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png" /></div>

- **Passo 4**. Vá para a página "Azure IoT Central" e selecione "Devices" à esquerda. Podemos ver um dispositivo com um nome formado por alguns números aleatórios aparecendo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png" /></div>

- **Passo 5**. Selecione o dispositivo e verifique as informações de "Raw data" como mostra a figura abaixo. As informações contêm todos os dados do Helium, incluindo os dados decodificados:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png" /></div>

Temos nossos dados contínuos sendo exibidos, mas é possível mostrá-los em um gráfico e talvez realizar algumas ações com esses dados?

### Função Avançada no Azure IoT Central

Podemos gerenciar todos os dados do Helium e escolher aqueles com que nos importamos para construir um alerta automático por e-mail baseado neles.

- **Passo 1**. Clique em "Unformated data" na página "Devices" e crie um template de dispositivo automático.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png" /></div>

- **Passo 2**. Vá para "Device template" e podemos ver que o template inclui e faz com que os dados do mesmo tipo sejam armazenados separadamente em cada bloco:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png" /></div>

- **Passo 3**. Selecione "Overview" e podemos ver que alguns gráficos que mostram o valor dos dados foram criados automaticamente.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png" /></div>

Altere os dados de umidade do solo que queremos exibir e renomeie o gráfico.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png" /></div>

Lembre-se de clicar em **"Save"** e depois em **"Pubilsh"** para salvar o template depois de finalizarmos:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png" /></div>

- **Passo 4**. Vá para "Rules" à esquerda e crie uma nova.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png" /></div>

- **Passo 5**. Preencha as informações abaixo para criar um alerta automático por e-mail:

O template de dispositivo (geralmente o padrão):

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png" /></div>

Configure o tipo de dado e o valor que desejamos:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png" /></div>

Preencha o e-mail que está registrado no Azure IoT Central e a nota que queremos enviar:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png" /></div>

**Resultado**

- Volte para "Devices" à esquerda e selecione o dispositivo, podemos ver que os dados foram exibidos em um gráfico.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png" /></div>

- Enquanto isso, se o valor que definimos atingir o limite, serão enviados continuamente para o e-mail os avisos que configuramos antes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png" /></div>

O conteúdo do e-mail é assim:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png" /></div>

Lembre-se de regar o vaso!

Obrigado!

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

## Atualizável para Sensores Industriais

Com o [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria integrada de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores de umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
