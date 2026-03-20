---
description: Meshtastic baseado no Kit XIAO ESP32S3 & Wio-SX1262
title: Kit XIAO ESP32-S3&Wio SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2024-10-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) é uma rede mesh descentralizada, off-grid e de código aberto, criada para rodar em dispositivos acessíveis e de baixo consumo de energia. A Seeed Studio fornece uma ampla gama de dispositivos Meshtastic prontos para uso para entusiastas e usuários industriais. O Kit XIAO ESP32S3 & Wio-SX1262 é uma solução flexível para desenvolvedores e makers de Meshtastic.
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>
## Gravar Firmware

:::note
Grave o firmware no seu dispositivo se você comprou o Kit XIAO ESP32S3 & Wio-SX1262 antes de **24 de outubro de 2024**, seguindo este tutorial passo a passo. Por favor, `don't use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo pare de funcionar completamente.
:::

**Passo 1**: Primeiro, abra um navegador e acesse https://flasher.meshtastic.org/# (requer navegador Chrome ou Edge).

**Passo 2**: Em seguida, use um cabo USB adequado para conectar o dispositivo ao PC. Talvez seja necessário desligar o dispositivo e então **pressionar e manter pressionado o botão BOOT** enquanto conecta o cabo USB.

**Passo 3**: Siga as instruções fornecidas a seguir para realizar as operações subsequentes de gravação. Selecione o dispositivo como "**Seeed XIAO S3**", o firmware como **o mais recente**, e então clique em "**Flash**". Não esqueça de marcar "**Full Erase and Install**" se quiser sobrescrever o firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Visão Geral do Software

Meshtastic fornece softwares para múltiplas plataformas para os usuários escolherem, incluindo app para Android, app para Apple e cliente web. Também fornece Python CLI, Linux Native e métodos de integração para desenvolvedores utilizarem.

Para informações específicas, consulte [o site oficial do Meshtastic](https://meshtastic.org/docs/software/).

- [Android App](https://meshtastic.org/docs/category/android-app/): O aplicativo Android está disponível no repositório F-Droid e na Google Play Store. Isso permite que você conecte seu dispositivo Meshtastic a partir do seu telefone Android via Bluetooth, Wi-Fi (se estiver na mesma rede) ou USB On-The-Go (OTG).
- [Apple App](https://meshtastic.org/docs/category/apple-apps/): Está disponível na App Store. Por padrão, o app Meshtastic para iOS oferece suporte ao uso de mapas offline nativos da Apple.
- [Web Client](https://meshtastic.org/docs/software/web-client/): Meshtastic Web é um cliente Meshtastic que roda diretamente no seu navegador.
- [Python CLI](https://meshtastic.org/docs/software/python/cli/): O pacote python pip instala um executável de linha de comando "meshtastic", que exibe pacotes enviados pela rede em JSON e permite que você veja informações de depuração serial dos dispositivos Meshtastic.
- [Linux Native](https://meshtastic.org/docs/software/linux-native/): O software do dispositivo também pode rodar em uma máquina Linux nativa graças ao framework Portduino.
- [Meshtastic Integrations](https://meshtastic.org/docs/software/integrations/): O ecossistema Meshtastic é altamente extensível e permite fácil integração com diversos produtos e projetos de software existentes.

## Conexão do Dispositivo

Antes de usar o Meshtastic, o dispositivo precisa ser conectado primeiro. Existem dois métodos de conexão. O primeiro é usar uma placa de expansão, e as informações correspondentes serão exibidas no display. Em seguida, a configuração pode ser realizada na plataforma correspondente de acordo com as informações exibidas. O segundo é conectar o XIAO e o módulo Wio-SX1262 e usar uma ferramenta de porta serial para obter o ID do nó e a senha.

### Conectado à bateria

O XIAO ESP32S3 possui um chip de gerenciamento de energia integrado que permite que o XIAO ESP32S3 seja alimentado de forma independente utilizando uma bateria ou que a bateria seja carregada pela porta USB do XIAO ESP32S3.

Se você quiser conectar a bateria ao XIAO, recomendamos que você compre uma bateria recarregável `3.7V lithium` qualificada com `protection circuit`. Ao soldar a bateria, tenha cuidado para distinguir entre os terminais positivo e negativo. O terminal negativo da alimentação deve ser o lado mais próximo da porta USB, e o terminal positivo da alimentação é o lado mais distante da porta USB.



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### Conectado à placa de expansão

Após gravar o firmware e baixar o app Meshtastic, a placa de expansão será uma boa ferramenta para conexão e aplicações adicionais, como adicionar facilmente sensores e módulos Grove.

**Passo 1**: Certifique-se de que o dispositivo a ser conectado (como o "device") esteja ligado e em estado descobrível. E abra o app Meshtastic no seu celular.

**Passo 2**: No app Meshtastic, há um ícone "+" no canto inferior direito. Clique nele para que o app comece a procurar dispositivos conectáveis próximos. Em seguida, selecione o ID de dispositivo correspondente exibido no display OLED.

**Passo 3**: Uma vez selecionado corretamente, insira o código exibido no display OLED. Pressione o botão para alternar a tela.

**Funções do Botão:**

- Pressione uma vez para alternar a tela.
- Pressione duas vezes para transmitir.
- Pressione três vezes para alternar o modo GPS.

**Passo 4**: Defina a região Lora; em seguida, o dispositivo será reiniciado.

**Passo 5**: Após concluir a reinicialização, o status do dispositivo pode ser verificado no app Meshtastic e no display OLED.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Ferramenta de porta serial

Selecione uma ferramenta de depuração de porta serial de sua preferência. Vou usar o Comtool no Mac como exemplo abaixo. Selecione a conexão **serial**, escolha **a porta correspondente**, configure a taxa de baud para **115200** e ative **RTS e DTR**. Abra a conexão e você poderá ver os dados de conexão.
Procure por "**nodenum**" para encontrar o ID de nó correspondente. A **senha padrão é 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Os últimos quatro dígitos de nodenum são o ID do número do dispositivo descoberto pelo app Meshtastic. Por exemplo, "nodenum 0x9e20d02c" é "Meshtastic_d02c" no Meshtastic.
:::


### Conectado ao SX-1262

O SX-1262 pode ser conectado ao Xiao ESP32-S3 por meio da interface B2B. O SX-1262 usa SPI para se comunicar com o Xiao ESP32-S3.
:::warning
O SX-1262 compatível só pode ser comprado dentro do kit.
:::
## Comunicar-se com o Wio Tracker T1000-E

**Passo 1**. Conecte o Wio Tracker T1000-E seguindo o [wiki](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#get-started-1).

**Passo 2**. Certifique-se de que a configuração a seguir seja a mesma que a sua configuração no XIAO ESP32S3 para Meshatastic.

1. Ativação e configuração do dispositivo

- Certifique-se de que ambos os dispositivos estejam ligados e em condição normal de funcionamento.
- A função de comunicação sem fio do dispositivo (como Bluetooth, LoRa, etc.) deve estar ativada. Verifique as configurações relevantes para garantir que ela não tenha sido desligada ou restringida acidentalmente.

2. Distância e intensidade do sinal

- A distância entre os dois dispositivos não pode ser muito grande. Após testes iniciais, a distância de comunicação do XIAO ESP32S3 para Meshtastic com antena IPEX de 2 dbm é superior a 2,5 km. De modo geral, em um ambiente mais aberto, pode ser superior a 20 km.

3. Configurações de rede

- Certifique-se de que os dispositivos estejam no mesmo modo de rede ou com a mesma configuração de canal. Defina facilmente o mesmo 'lora region' e 'Modem preset' usando o app Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Passo 3**. Comunicar-se com o Wio Tracker T1000-E

Uma vez conectado, você pode começar a enviar e receber mensagens através da rede Meshtastic. As mensagens podem ser baseadas em texto ou podem oferecer suporte a recursos adicionais, dependendo das capacidades dos dispositivos e do app. Você também pode monitorar a atividade da rede e ver quais dispositivos estão atualmente conectados e ativos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conexão de Sensor

No aplicativo Meshtastic, o Wio-SX1262 com kit XIAO esp32s3 é capaz de suportar uma ampla variedade de sensores. Quando usado em conjunto com a placa de expansão XIAO, ele pode suportar inúmeros sensores Grove; por favor, verifique [aqui](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Além disso, quando combinado com o módulo adicional GNSS, ele forma o menor módulo dentro do Meshtastic que possui funcionalidade de GPS.

### Sensor de Temperatura e Umidade

<div class="table-center">
  <table align="center">
    <tr>
      <th>Sensor de Temperatura e Umidade DHT20</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**Passo 1**: Conecte o sensor Grove DHT20 da Placa de Expansão XIAO

**Passo 2**: Habilite `Detection Sensor` no aplicativo Meshtastic

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/13.PNG" style={{width:350, height:'auto'}}/></div>

### Sensor GNSS

<div class="table-center">
  <table align="center">
    <tr>
      <th>Módulo GNSS L76K para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuração Inicial

:::note
Para mais detalhes, consulte o [Meshtastic](https://meshtastic.org/docs).
:::

### Configuração do Rádio

Existem várias seções de configuração no firmware Meshtastic, elas são divididas para que possam ser enviadas como pequenas mensagens de administração pela malha.

| Nome | Descrição |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | As opções de configuração do Bluetooth são: Enabled, Pairing Mode e Fixed PIN. |
| [Channels](https://meshtastic.org/docs/configuration/radio/channels/) | As opções de configuração de canais são: Index, Role e Settings. |
| [Device](https://meshtastic.org/docs/configuration/radio/device/) | As opções de configuração do dispositivo são: Device Role, Serial Output, Debug Log e Factory Reset. |
| [Display](https://meshtastic.org/docs/configuration/radio/display/) | As opções de configuração do display são: Screen On Duration, Auto Carousel Interval, Always Point North e GPS Format. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | As opções de configuração do LoRa são: Region, Modem Preset, Max Hops, Transmit Power, Bandwidth, Spread Factor, Coding Rate, Frequency Offset, Transmit Disabled e Ignore Incoming Array. |
| [Network](https://meshtastic.org/docs/configuration/radio/network/) | As opções de configuração de rede são: WiFi Enabled, WiFi SSID, WiFi PSK, WiFi Mode e NTP Server. |
| [Position](https://meshtastic.org/docs/configuration/radio/position/) | As opções de configuração de posição são: GPS Enabled, GPS Update Interval, GPS Attempt Time, Fixed Position, Smart Broadcast, Broadcast Interval e Position Packet Flags. |
| [Power](https://meshtastic.org/docs/configuration/radio/power/) | As opções de configuração de energia são: Charge Current, Power Saving, Shutdown after losing power, ADC Multiplier Override Wait Bluetooth Interval, Light Sleep Interval e Minimum Wake Interval. |
| [User](https://meshtastic.org/docs/configuration/radio/user/) | As opções de configuração do usuário são: Long Name, Short Name e Is Licensed. |

### Configuração do Módulo

Os módulos estão incluídos no firmware e permitem que os usuários ampliem a funcionalidade de sua malha ou dispositivo.

| Nome | Descrição |
| ---- | ---- |
| [Ambient Lighting](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajuste o brilho dos LEDs RGB I2C NCP5623. |
| [Audio](https://meshtastic.org/docs/configuration/module/audio/) | Habilite o suporte para comunicações de voz Codec2 em determinados dispositivos. |
| [Canned Message](https://meshtastic.org/docs/configuration/module/canned-message/) | Defina um número de mensagens predefinidas para serem enviadas diretamente do dispositivo com o uso de um dispositivo de entrada como um codificador rotativo. |
| [Detection Sensor](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configure um pino GPIO para ser monitorado para o status alto/baixo especificado e enviar alertas de texto. |
| [External Notification](https://meshtastic.org/docs/configuration/module/external-notification/) | As mensagens recebidas podem alertá-lo usando circuitos que você conecta ao dispositivo (LEDs, buzzers etc.). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Encaminhe pacotes para um servidor MQTT. Isso permite que usuários na malha local se comuniquem com usuários em outra malha pela internet. |
| [Neighbor Info](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Envie informações sobre vizinhos de 0 saltos para a malha. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Conte o número de dispositivos BLE e WiFi que passam por um nó. |
| [Range Test](https://meshtastic.org/docs/configuration/module/range-test/) | Envie mensagens com localização GPS em um intervalo para testar a distância em que seus dispositivos podem se comunicar. Requer (pelo menos) um dispositivo configurado como transmissor e um como receptor. O(s) receptor(es) registrará(ão) todas as mensagens recebidas em um CSV. |
| [Remote Hardware](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Defina e leia o status de um GPIO remotamente pela malha. |
| [Serial Module](https://meshtastic.org/docs/configuration/module/serial/) | Envie mensagens pela malha enviando strings por uma porta serial. |
| [Store & Forward](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Armazena mensagens em um dispositivo para entrega depois que clientes desconectados retornarem à malha. |
| [Telemetry](https://meshtastic.org/docs/configuration/module/telemetry/) | Conecte sensores ao dispositivo e transmita leituras em intervalos regulares para a malha. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Acompanhe quais nós são usados para encaminhar uma mensagem até um determinado destino. |
## Recurso
- **[PDF]**[Diagrama Esquemático do SX1262 compatível com Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Folha de Dados do Módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Arquivo 3D do Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Esquemático do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [Biblioteca Kicad do Kit XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Modelo 3D do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Bibliotecas Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensões em DXF do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Footprint Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Planilha de pinout do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [FootPrint do Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Arquivo 3D do case](https://www.thingiverse.com/thing:6888371)
## Recursos do Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
