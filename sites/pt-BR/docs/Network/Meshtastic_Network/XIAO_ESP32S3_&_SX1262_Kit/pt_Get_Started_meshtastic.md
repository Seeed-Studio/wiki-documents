---
description: Meshtastic baseado no Kit XIAO ESP32S3 & Wio-SX1262
title: Kit XIAO ESP32-S3 & Wio SX1262
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic
last_update:
  date: 12/11/2025
  author: Michelle Huang
createdAt: '2024-10-09'
updatedAt: '2025-12-11'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/
---


[Meshtastic®](https://meshtastic.org/) é uma rede mesh de código aberto, fora da rede, descentralizada, construída para rodar em dispositivos acessíveis e de baixo consumo. A Seeed Studio oferece uma gama abrangente de dispositivos Meshtastic prontos para uso para hobbyistas e usuários industriais. O Kit XIAO ESP32S3 & Wio-SX1262 é uma solução flexível para desenvolvedores e criadores de meshtastic.
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>
## Gravar Firmware

:::note
Por favor, grave o firmware no seu dispositivo se você comprou o Kit XIAO ESP32S3 & Wio-SX1262 antes de **24 de outubro de 2024** seguindo este tutorial passo a passo. Por favor, `não use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo fique completamente inoperante.
:::

**Passo 1**: Primeiro, abra um navegador e visite https://flasher.meshtastic.org/# requer navegador Chrome ou Edge.

**Passo 2**: Em seguida, use um cabo USB adequado para conectar o dispositivo ao PC. Você pode precisar desligar e, em seguida, **pressionar e segurar o botão BOOT** enquanto conecta o cabo USB.

**Passo 3**: Siga as instruções fornecidas para realizar as operações subsequentes de gravação. Selecione o Dispositivo como "**Seeed XIAO S3**", o Firmware como **o mais recente** e, em seguida, clique em "**Flash**". Não se esqueça de marcar "**Full Erase and Install**" se quiser sobrescrever o firmware anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/flashfirmware1.gif" style={{width:700, height:'auto'}}/></div>

## Visão Geral do Software

O Meshtastic fornece múltiplos softwares de plataforma para os usuários escolherem, incluindo aplicativo Android, aplicativo Apple, cliente web. Ele também fornece CLI Python, Linux Nativo e métodos de integração para desenvolvedores usarem.

Para informações específicas, consulte [o site oficial do Meshtastic](https://meshtastic.org/docs/software/).

- [Aplicativo Android](https://meshtastic.org/docs/category/android-app/): O aplicativo Android está disponível no repositório F-Droid e na Google Play Store. Isso permite que você se conecte ao seu dispositivo Meshtastic a partir do seu telefone Android via Bluetooth, Wi-Fi (se na mesma rede) ou USB On-The-Go (OTG).
- [Aplicativo Apple](https://meshtastic.org/docs/category/apple-apps/): Está disponível na app store. Por padrão, o aplicativo Meshtastic para iOS suporta o uso de mapas Apple nativos offline.
- [Cliente Web](https://meshtastic.org/docs/software/web-client/): O Meshtastic Web é um cliente Meshtastic que roda diretamente no seu navegador.
- [CLI Python](https://meshtastic.org/docs/software/python/cli/): O pacote python pip instala um executável de linha de comando "meshtastic", que exibe pacotes enviados pela rede como JSON e permite que você veja informações de depuração serial dos dispositivos meshtastic.
- [Linux Nativo](https://meshtastic.org/docs/software/linux-native/): O software do dispositivo também pode rodar em uma máquina Linux nativa graças ao framework Portduino.
- [Integrações Meshtastic](https://meshtastic.org/docs/software/integrations/): O ecossistema Meshtastic é altamente extensível e permite fácil integração com vários produtos e projetos de software existentes.

## Conexão do Dispositivo

Antes de usar o Meshtastic, o dispositivo precisa ser conectado primeiro. Existem dois métodos de conexão. O primeiro é usar uma placa de expansão, e as informações correspondentes serão exibidas no display. Em seguida, a configuração pode ser realizada na plataforma correspondente de acordo com as informações refletidas. O segundo é conectar o XIAO e o módulo Wio-SX1262, e usar uma ferramenta de porta serial para obter o ID do nó e a senha.

### Conectado à bateria

O XIAO ESP32S3 possui um chip de gerenciamento de energia integrado que permite que o XIAO ESP32S3 seja alimentado independentemente usando uma bateria ou que carregue a bateria através da porta USB do XIAO ESP32S3.

Se você quiser conectar a bateria para o XIAO, recomendamos que você compre uma bateria `de lítio 3.7V` recarregável e qualificada com `circuito de proteção`. Ao soldar a bateria, por favor, tenha cuidado para distinguir entre os terminais positivo e negativo. O terminal negativo da fonte de alimentação deve ser o lado mais próximo da porta USB, e o terminal positivo da fonte de alimentação é o lado afastado da porta USB.



<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


### Conectado à placa de expansão

Após gravar o firmware e baixar o aplicativo Meshtastic, a placa de expansão seria uma boa ferramenta para conexão e aplicação adicional, como adicionar sensores e módulos Grove facilmente.

**Passo 1**: Certifique-se de que o dispositivo a ser conectado (como "device") esteja ligado e em um estado detectável. E abra o aplicativo Meshtastic no seu telefone celular.

**Passo 2**: No aplicativo Meshtastic, há um ícone "+" no canto inferior direito. Clique nele para que o aplicativo comece a escanear dispositivos conectáveis próximos. Em seguida, selecione o ID do dispositivo correspondente mostrado no display OLED.

**Passo 3**: Uma vez selecionado corretamente, insira o código mostrado no display OLED. Pressione o botão para alternar a exibição.

**Funções do Botão:**

- Pressione uma vez para alternar a tela.
- Pressione duas vezes para transmitir.
- Pressione três vezes para alternar o modo GPS.

**Passo 4**: Defina a região LoRa, então o dispositivo será reiniciado.

**Passo 5**: Após a reinicialização, o status do dispositivo pode ser verificado no aplicativo Meshtastic e no display OLED.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/dzqx32lBJso" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Ferramenta de porta serial

Selecione uma ferramenta de depuração de porta serial de sua preferência. Vou usar o Comtool no mac como exemplo abaixo. Selecione a conexão **serial**, escolha **a porta correspondente**, configure a taxa de transmissão como **115200** e ative **RTS e DTR**. Abra a conexão e você poderá ver os dados de conexão.
Procure por "**nodenum**" para encontrar o ID do nó correspondente. Sua **senha padrão é 123456**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/11.png" style={{width:700, height:'auto'}}/></div>

:::tip
Os últimos quatro dígitos do nodenum são o número de identificação do dispositivo descoberto pelo aplicativo meshtastic. Por exemplo, "nodenum 0x9e20d02c" é "Meshtastic_d02c" no meshtastic.
:::


### Conectado ao SX-1262

O SX-1262 pode ser conectado ao Xiao ESP32-S3 via interface B2B. O SX-1262 usa SPI para se comunicar com o Xiao ESP32-S3.

O diagrama a seguir mostra o mapeamento de pinos B2B entre o XIAO ESP32S3 e o Wio-SX1262.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
O SX-1262 compatível só pode ser comprado dentro do kit.
:::
## Comunicar com o Wio Tracker T1000-E

**Passo 1**. Conecte o Wio Tracker T1000-E seguindo a [wiki](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#get-started-1).

**Passo 2**. Certifique-se de que a seguinte configuração seja a mesma da sua configuração no XIAO ESP32S3 para Meshatastic.

1. Ativação e configuração do dispositivo

- Certifique-se de que ambos os dispositivos estejam ligados e em condições normais de funcionamento.
- A função de comunicação sem fio do dispositivo (como Bluetooth, LoRa, etc.) deve estar habilitada. Verifique as configurações relevantes para garantir que não esteja acidentalmente desligada ou restrita.

2. Distância e força do sinal

- A distância entre os dois dispositivos não pode ser muito grande. Após testes iniciais, a distância de comunicação do XIAO ESP32S3 para Meshtastic com antena IPEX de 2 dbm é superior a 2,5 km. Geralmente falando, em um ambiente mais aberto, pode ser superior a 20 km.

3. Configurações de Rede

- Certifique-se de que os dispositivos estejam no mesmo modo de rede ou configuração de canal. Defina facilmente a mesma 'região lora' e 'Modem preset' usando o aplicativo Meshtastic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/12.png" style={{width:350, height:'auto'}}/></div>

**Passo 3**. Comunique-se com o Wio Tracker T1000-E

Uma vez conectado, você pode começar a enviar e receber mensagens através da rede Meshtastic. As mensagens podem ser baseadas em texto ou podem suportar recursos adicionais dependendo das capacidades dos dispositivos e do aplicativo. Você também pode monitorar a atividade da rede e ver quais dispositivos estão atualmente conectados e ativos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/3.gif" style={{width:350, height:'auto'}}/></div>

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/vJN_4A8s4z0" title="Configuring Wio-SX1262 with XIAO ESP32S3 kit as Meshtastic device" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Conexão de Sensor

Na aplicação meshtastic, o kit Wio-SX1262 com XIAO esp32s3 é capaz de suportar uma ampla gama de sensores. Quando usado em conjunto com a placa de expansão XIAO, ele pode suportar inúmeros sensores Grove, por favor verifique [aqui](https://github.com/meshtastic/firmware/blob/3f1c86f9535279fd17eaaab6e10a06f09915b7e4/src/detect/ScanI2C.h#L10). Além disso, quando combinado com o módulo adicional GNSS, ele forma o menor módulo dentro do meshtastic que possui funcionalidade GPS.

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

**Passo 1**: Conecte o sensor Grove DHT20 à XIAO Expansion Board

**Passo 2**: Ative `Detection Sensor` no aplicativo Meshtastic

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuração Inicial

:::note
Para mais detalhes, consulte [Meshtastic](https://meshtastic.org/docs).
:::

### Configuração de Rádio

Existem várias seções de configuração no firmware Meshtastic, que são separadas para que possam ser enviadas como pequenas mensagens administrativas pela rede mesh.

| Nome | Descrição |
| ---- | ---- |
| [Bluetooth](https://meshtastic.org/docs/configuration/radio/bluetooth/) | As opções de configuração do Bluetooth são: Habilitado, Modo de Emparelhamento e PIN Fixo. |
| [Canais](https://meshtastic.org/docs/configuration/radio/channels/) | As opções de configuração de Canais são: Índice, Função e Configurações. |
| [Dispositivo](https://meshtastic.org/docs/configuration/radio/device/) | As opções de configuração do Dispositivo são: Função do Dispositivo, Saída Serial, Log de Depuração e Redefinição de Fábrica. |
| [Tela](https://meshtastic.org/docs/configuration/radio/display/) | As opções de configuração da Tela são: Duração da Tela Ligada, Intervalo do Carrossel Automático, Sempre Apontar para o Norte e Formato do GPS. |
| [LoRa](https://meshtastic.org/docs/configuration/radio/lora/) | As opções de configuração do LoRa são: Região, Predefinição do Modem, Máximo de Saltos, Potência de Transmissão, Largura de Banda, Fator de Espalhamento, Taxa de Codificação, Deslocamento de Frequência, Transmissão Desabilitada e Ignorar Array de Entrada. |
| [Rede](https://meshtastic.org/docs/configuration/radio/network/) | As opções de configuração da Rede são: WiFi Habilitado, SSID do WiFi, PSK do WiFi, Modo WiFi e Servidor NTP. |
| [Posição](https://meshtastic.org/docs/configuration/radio/position/) | As opções de configuração de Posição são: GPS Habilitado, Intervalo de Atualização do GPS, Tempo de Tentativa do GPS, Posição Fixa, Transmissão Inteligente, Intervalo de Transmissão e Sinalizadores de Pacote de Posição. |
| [Energia](https://meshtastic.org/docs/configuration/radio/power/) | As opções de configuração de Energia são: Corrente de Carga, Economia de Energia, Desligamento após perda de energia, Substituição do Multiplicador ADC, Intervalo de Espera Bluetooth, Intervalo de Suspensão Leve e Intervalo Mínimo de Despertar. |
| [Usuário](https://meshtastic.org/docs/configuration/radio/user/) | As opções de configuração do Usuário são: Nome Longo, Nome Curto e É Licenciado. |

### Configuração de Módulos

[1]Os módulos estão incluídos no firmware e permitem que os usuários estendam a funcionalidade de sua rede mesh ou dispositivo.

| Nome | Descrição |
| ---- | ---- |
| [Iluminação Ambiente](https://meshtastic.org/docs/configuration/module/ambient-lighting/) | Ajusta o brilho dos LEDs RGB I2C NCP5623. |
| [Áudio](https://meshtastic.org/docs/configuration/module/audio/) | Habilita suporte para comunicações de voz Codec2 em determinados dispositivos. |
| [Mensagem Pré-definida](https://meshtastic.org/docs/configuration/module/canned-message/) | Define uma série de mensagens pré-definidas para enviar diretamente do dispositivo usando um dispositivo de entrada como um codificador rotativo. |
| [Sensor de Detecção](https://meshtastic.org/docs/configuration/module/detection-sensor/) | Configura um pino GPIO para ser monitorado quanto a um status alto/baixo especificado e envia alertas de texto. |
| [Notificação Externa](https://meshtastic.org/docs/configuration/module/external-notification/) | Mensagens recebidas podem alertá-lo usando circuitos conectados ao dispositivo (LEDs, campainhas, etc). |
| [MQTT](https://meshtastic.org/docs/configuration/module/mqtt/) | Encaminha pacotes para um servidor MQTT. Isso permite que usuários na rede local se comuniquem com usuários em outra rede pela internet. |
| [Informações de Vizinhos](https://meshtastic.org/docs/configuration/module/neighbor-info/)| Envia informações sobre vizinhos de 0 saltos para a rede mesh. |
| [Paxcounter](https://meshtastic.org/docs/configuration/module/paxcounter/) | Conta o número de dispositivos BLE e Wifi que passam por um nó. |
| [Teste de Alcance](https://meshtastic.org/docs/configuration/module/range-test/) | Envia mensagens com localização GPS em intervalos para testar a distância que seus dispositivos podem se comunicar. Requer (pelo menos) um dispositivo configurado como remetente e um como receptor. O(s) receptor(es) registrará(ão) todas as mensagens recebidas em um CSV. |
| [Hardware Remoto](https://meshtastic.org/docs/configuration/module/remote-hardware/) | Define e lê um status GPIO remotamente pela rede mesh. |
| [Módulo Serial](https://meshtastic.org/docs/configuration/module/serial/) | Envia mensagens pela rede mesh enviando strings por uma porta serial. |
| [Armazenar e Encaminhar](https://meshtastic.org/docs/configuration/module/store-and-forward-module/) | Armazena mensagens em um dispositivo para entrega após clientes desconectados se reconectarem à rede mesh. |
| [Telemetria](https://meshtastic.org/docs/configuration/module/telemetry/) | Conecta sensores ao dispositivo e transmite leituras em intervalos regulares para a rede mesh. |
| [Traceroute](https://meshtastic.org/docs/configuration/module/traceroute/) | Rastreia quais nós são usados para saltar uma mensagem para um determinado destino. |
## Recursos
- **[PDF]**[Diagrama Esquemático do SX1262 compatível com Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Datasheet do Módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Arquivo 3D do Wio-SX1262 para XlAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Esquemático do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [Biblioteca Kicad do Kit XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Modelo 3D do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Bibliotecas Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensões do Seeed Studio XIAO ESP32S3 em DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Footprint Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Folha de pinagem do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [FootPrint do Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Arquivo 3D da caixa](https://www.thingiverse.com/thing:6888371)
## Recursos de Curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
