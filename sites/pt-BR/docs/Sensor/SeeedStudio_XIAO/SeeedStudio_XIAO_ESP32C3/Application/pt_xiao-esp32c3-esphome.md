---
description: Acessando o ESPHome com XIAO ESP32C3
title: XIAO ESP32C3 acessa o Home Assistant via serviço ESPHome
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-esp32c3-esphome
sku: 113991054,101991030,102010633
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2023-03-03'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao-esp32c3-esphome/
---

# XIAO ESP32C3 acessa o Home Assistant via serviço ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>

Este artigo irá guiá-lo pela instalação do serviço ESPHome em seu próprio ambiente Home Assistant. Usando a função WiFi do XIAO ESP32C3, você poderá conectar seu XIAO ao Home Assistant como parte do seu terminal doméstico de forma muito simples.

Além disso, construiremos um Home Assistant com detecção de presença humana em combinação com o popular Módulo Lite de Presença Estática Humana mmWave de 24GHz.

## Primeiros Passos

:::tip
A partir de 31 de julho de 2023, o problema anterior que causava a falha completa do radar foi corrigido, portanto, atualize os arquivos de biblioteca e o configurador desta espécie de tutorial para que funcione corretamente.
:::

Se você deseja seguir este tutorial do início ao fim, precisará preparar o seguinte.

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>Módulo Lite de Presença Estática Humana<br />mmWave de 24GHz</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

O objetivo final deste projeto é implantar o Módulo Lite de Presença Estática Humana mmWave de 24GHz no Home Assistant.

Escrevemos arquivos de configuração e bibliotecas completos para o Módulo Lite de Presença Estática Humana mmWave de 24GHz para facilitar a implantação rápida do sensor no Home Assistant neste projeto.

O conteúdo deste tutorial seguirá amplamente as etapas a seguir.

1. [Selecione seu ambiente Home Assistant](#Selecione-seu-ambiente-Home-Assistant)
2. Instalar e configurar o ESPHome no Home Assistant
3. [Configurar a conexão entre o XIAO ESP32C3 e o ESPHome](#Configurar-a-conexão-entre-o-XIAO-ESP32C3-e-o-ESPHome)
4. [Configurar o Painel do Home Assistant](#Configurar-o-Painel-do-Home-Assistant)

Claro, se você estiver interessado em como o XIAO ESP32C3 usa o Grove no Home Assistant, pode ler este capítulo diretamente.

- [Conectar o Grove ao Home Assistant usando o XIAO ESP32C3](#Conectar-o-Grove-ao-Home-Assistant-usando-o-XIAO-ESP32C3)

## Selecione seu ambiente Home Assistant

Nesta rotina, não vamos expandir sobre como instalar o ambiente Home Assistant, assumiremos que você já possui um dispositivo Home Assistant funcionando.

Se você deseja aprender como instalar o Home Assistant, pode consultar o [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos fortemente que você instale o Home Assistant usando um dispositivo x86, pois esta é a maneira mais amigável de instalar o Home Assistant com Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

De acordo com a tabela acima, é mais apropriado instalar o **Home Assistant OS** e o **Home Assistant Supervised**, o que poupará muito trabalho. Se você estiver executando o Home Assistant no Docker com OpenWRT (por exemplo, usando o LinkStar H68K), não se preocupe, também forneceremos uma referência detalhada sobre como fazer isso.

Também escrevemos como instalar o Home Assistant para alguns produtos da Seeed Studio, consulte-os abaixo.

- [Primeiros Passos com o Home Assistant no ODYSSEY-X86](https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86-Home-Assistant/)
- [Primeiros Passos com o Home Assistant no reTerminal](https://wiki.seeedstudio.com/pt-br/reTerminal_Home_Assistant/)
- [Primeiros Passos com o Home Assistant no LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/)

## Instalar o ESPHome no Home Assistant

### Etapa 1. Instalar o ESPHome

- **Cenário 1: Instalação do ESPHome no Home Assistant OS (com Add-on Store)**

Se você tiver o Home Assistant OS instalado, ele possui uma Add-on Store, o que facilita muito a instalação do ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

Na Add-on Store, você pode pesquisar e instalar o ESPHome.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **Cenário 2: ESPHome instalado no Home Assistant sob OpenWRT Docker/Docker (sem Add-on Store)**

Como estamos instalando o Home Assistant Container, não podemos simplesmente baixar o serviço ESPHome pela Add-on Store, portanto, é necessária uma solução alternativa.

Precisamos baixar a imagem do ESPHome.

```
esphome/esphome:latest
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>

Na página onde o container é criado, precisamos fazer algumas configurações simples.

- Nome do Container: nome do seu container
- Imagem Docker: escolha a imagem **esphome** recém-baixada
- Rede: escolha o modo **host**
- Variáveis de Ambiente(-e): sua variável de ambiente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>

Após preencher o acima, salve e aplique. Você verá que o Container foi criado. Você também precisa iniciá-lo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>

Para obter o mesmo efeito de baixar o ESPHome no Home Assistant, precisamos modificar o arquivo de configuração no Home Assistant.

Vá para o Home Assistant Container.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>

Vamos ao terminal no Home Assistant.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>

Digite o seguinte comando no terminal.

```sh
vi configuration.yaml
```

Adicione o seguinte conteúdo ao final de `configuration.yaml`.

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

Saia do container docker digitando ```exit``` no shell do Home Assistant Container. Feito isso, reiniciamos o container do Home Assistant.

Crie uma nova página no navegador, insira o endereço `http://homeassistant:8123/`, insira sua conta do Home Assistant e você verá o ESPHome aparecer na barra de ferramentas à esquerda.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## Configurar a conexão entre o XIAO ESP32C3 e o ESPHome

### Etapa 2. Preparação do hardware

O objetivo do nosso tutorial é poder visualizar as informações de dados do Módulo Lite de Presença Estática Humana mmWave de 24GHz no painel do Home Assistant.

Conecte o dispositivo ao computador através da placa principal. O diagrama de fiação é mostrado na tabela abaixo.

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">Módulo Lite de Presença Estática Humana<br />mmWave de 24GHz</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--></td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--></td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--></td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--></td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### Etapa 3. Manter o XIAO ESP32C3 e o Home Assistant na mesma LAN

Tenho certeza de que seu Home Assistant já realizou o trabalho de entrar na rede, por exemplo, conectando-se ao seu dispositivo via cabo de rede. Tudo o que você precisa fazer é simplesmente ativar uma rede local (por exemplo, WiFi) para que o XIAO ESP32C3 também possa se conectar a essa rede.

Usarei o LinkStar H68K como exemplo abaixo. Meu objetivo é conectar o XIAO ao ponto de acesso do LinkStar H68K.

Na aba **Network** no OpenWRT, selecione **Wireless** --> **ADD**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>

Para **Transmit Power** em **Device Configuration**, selecione **auto**.

Para as configurações de **Interface Configuration**, preencha as seguintes instruções.

- General Setup
  - Mode: Depende de como o LinkStar acessa a internet. Se você estiver usando uma conexão a cabo, selecione **Client**; se estiver conectado via WiFi, selecione **Access Point**.
  - ESSID: Insira o nome do seu WiFi; tente não usar espaços ou caracteres especiais.
  - Network: marque **lan**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>

- Wireless Security
  - Encryption: WPA2-PSK
  - Key: Insira a senha WiFi que deseja definir.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>

Depois de preencher as informações acima, clique em **Save and Apply** no canto inferior direito e aguarde alguns instantes para que o LinkStar abra um hotspot.

Quando nenhum dispositivo estiver conectado a este hotspot, ele será exibido sem sinal.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>

Considerando tudo, vamos retornar à página do Home Assistant.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>

Clique em **NEW DEVICE**. Em seguida, clique em **Continue**.

Na nova janela pop-up, insira o nome do aplicativo que deseja configurar, bem como o nome e a senha do hotspot que você configurou no LinkStar (ou seu próprio WiFi). Certifique-se de que o XIAO ESP32C3 e o Home Assistant estejam na **mesma LAN**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>

Em seguida, clique em **Next**.

No tipo de dispositivo, selecione **ESP32-C3**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

Em seguida, clique em **Next**.

<span id="jump1">Clique na <strong>Chave de criptografia</strong> e salve-a em um local seguro; usaremos essa chave em uma etapa posterior.</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

Em seguida, clique em **SKIP**.

### Passo 4. Alterar o arquivo yaml de configuração do XIAO ESP32C3

Em seguida, clicamos na aba do dispositivo que acabamos de criar, com o botão **EDIT** no canto inferior esquerdo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>

Observe que precisamos fazer alterações neste arquivo yaml. Dividimos o conteúdo a ser modificado em duas partes principais, correspondendo a um e dois no diagrama abaixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>

- No conteúdo **①**, não altere o nome do dispositivo, exceto o que você configurou; consulte o código abaixo para o restante do conteúdo.

```css
# part 1:
substitutions:
  name: "xiao-esp32c3"
  friendly_name: "XIAO ESP32C3"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.mmwave_kit"
    version: "2.0"
  platformio_options:
    board_build.flash_mode: dio
    board_build.mcu: esp32c3

external_components:
  - source: github://limengdu/mmwave-kit-external-components@main
    refresh: 0s

esp32:
  board: esp32-c3-devkitm-1
  variant: esp32c3
  framework:
    type: esp-idf

# Enable logging
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG
```

- No conteúdo **②**, copie o seguinte código após `captive_portal:`.

<details>

<summary>Clique aqui para visualizar o código completo</summary>

```yml
# Sets up Bluetooth LE (Only on ESP32) to allow the user
# to provision wifi credentials to the device.
esp32_improv:
  authorizer: none

# Sets up the improv via serial client for Wi-Fi provisioning.
# Handy if your device has a usb port for the user to add credentials when they first get it.
# improv_serial: # Commented until improv works with usb-jtag on idf

uart:
  id: uart_bus
  baud_rate: 115200
  rx_pin: 4
  tx_pin: 5
  parity: NONE
  stop_bits: 1

seeed_mr24hpc1:
  id: my_seeed_mr24hpc1

text_sensor:
  - platform: seeed_mr24hpc1
    heart_beat:
      name: "Heartbeat"
    product_model:
      name: "Product Model"
    product_id:
      name: "Product ID"
    hardware_model:
      name: "Hardware Model"
    hardware_version:
      name: "Hardware Version"
    keep_away:
      name: "Active Reporting Of Proximity"
    motion_status:
      name: "Motion Information"
    custom_mode_end:
      name: "Custom Mode Status"

binary_sensor:
  - platform: seeed_mr24hpc1
    has_target:
      name: "Presence Information"

sensor:
  - platform: seeed_mr24hpc1
    custom_presence_of_detection:
      name: "Static Distance"
    movement_signs:
      name: "Body Movement Parameter"
    custom_motion_distance:
      name: "Motion Distance"
    custom_spatial_static_value:
      name: "Existence Energy"
    custom_spatial_motion_value:
      name: "Motion Energy"
    custom_motion_speed:
      name: "Motion Speed"
    custom_mode_num:
      name: "Current Custom Mode"

switch:
  - platform: seeed_mr24hpc1
    underlying_open_function:
      name: Underlying Open Function Info Output Switch

button:
  - platform: seeed_mr24hpc1
    restart:
      name: "Module Restart"
    custom_set_end:
      name: "End Of Custom Mode Settings"

select:
  - platform: seeed_mr24hpc1
    scene_mode:
      name: "Scene"
    unman_time:
      name: "Time For Entering No Person State (Standard Function)"
    existence_boundary:
      name: "Existence Boundary"
    motion_boundary:
      name: "Motion Boundary"

number:
  - platform: seeed_mr24hpc1
    sensitivity:
      name: "Sensitivity"
    custom_mode:
      name: "Custom Mode"
    existence_threshold:
      name: "Existence Energy Threshold"
    motion_threshold:
      name: "Motion Energy Threshold"
    motion_trigger:
      name: "Motion Trigger Time"
    motion_to_rest:
      name: "Motion To Rest Time"
    custom_unman_time:
      name: "Time For Entering No Person State (Underlying Open Function)"
```

</details>

Em seguida, clique no botão **Save** no canto superior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/63.png" /></div>

### Passo 5. Carregar o firmware no XIAO ESP32C3

- **Método 1: Compilar e carregar diretamente**

Se você estiver usando um dispositivo x86 e puder ver o XIAO na porta do dispositivo, poderá compilar e carregar o programa no XIAO.

Conecte o XIAO ao seu dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>

Clique nos três pontos no canto inferior direito da barra do dispositivo e selecione **Install**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>

Clique em **Plug into the computer running ESPHome Dashboard**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>

Selecione a porta conectada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

Agora ele baixará todos os pacotes de placa necessários e gravará o firmware do ESPHome no XIAO ESP32C3. Se a gravação for bem-sucedida, você verá a seguinte saída.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

Se você não conseguir encontrar a porta após conectar o XIAO ao seu dispositivo, tente usar o segundo método.

- **Método 2: Carregar o firmware compilado usando o host**

Roteadores soft como o LinkStar H68K não suportam o reconhecimento de dispositivos MCU externos; precisamos baixar o firmware compilado primeiro e depois carregá-lo via outro PC.

Clique no botão **Install** no canto superior direito. Em seguida, selecione o último item **Manual download**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>

Selecione **Modern format**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

Em seguida, levará um longo tempo para baixar e compilar, portanto, tenha paciência. Quando tudo estiver pronto, o firmware será baixado automaticamente para o seu computador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

Para carregar o firmware no XIAO ESP32C3, há algumas opções; aqui mostramos 2 maneiras de fazer isso:

- Opção 1: usar a [ferramenta ESPhome Web](https://web.esphome.io/?dashboard_install) para carregar.

Certifique-se de ter os drivers corretos instalados. Abaixo estão os drivers para chips comuns usados em dispositivos ESP.

1. Drivers CP2102: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

2. Drivers CH342, CH343, CH9102: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)

3. Drivers CH340, CH341: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

Abra a [ferramenta ESPhome Web](https://web.esphome.io/?dashboard_install) com o navegador Chrome ou Edge.

Clique em **CONNECT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

Selecione a porta serial do XIAO ESP32 na janela pop-up.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

Clique em **INSTALL** e selecione o arquivo `.bin` baixado nas etapas anteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- Opção 2: Usar a [ferramenta esphome-flasher](https://github.com/esphome/esphome-flasher).

Se ainda não conseguir carregar o firmware usando o método um após instalar o driver e trocar de navegador, tente usar o método dois. Consulte o tutorial oficial para métodos e instruções específicos de instalação.

:::tip
Se desejar observar as mensagens de log do XIAO ESP32C3, você também pode visualizá-las pelo botão View Logs deste software.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

Após a conclusão do upload, você pode desconectar o XIAO ESP32C3 do PC (a menos que precise visualizar os logs) e simplesmente alimentar o XIAO separadamente.

Se tudo correr bem, o XIAO ESP32C3 irá procurar e conectar-se ao WiFi que você configurou para ele.

Assim como eu, uso a rede do LinkStar H68K. Você pode encontrá-la nas opções de rede e ver o endereço IP atribuído a ele pelo LinkStar H68K.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

Normalmente, neste ponto no Home Assistant, o status do dispositivo também mudará de offline para online.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## Configurar o Painel do Home Assistant

### Passo 6. Conectar ao XIAO ESP32C3

Se você não tiver muitos dispositivos Home Assistant na sua LAN, o Home Assistant pode pesquisar e adicionar automaticamente seus dispositivos ESP à aba Dispositivos. Você pode ver este dispositivo dentro da aba **Devices & Services** em **Settings**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

Se não pesquisar automaticamente, você também pode conectar-se ao XIAO ESP32C3 com base no seu endereço IP.

Clique em **ADD INTEGRSTION** e pesquise por **esphome**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

Em seguida, insira o endereço IP do XIAO ESP32C3 com o número de porta **6053**. Depois clique em **SUBMIT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

Se o endereço IP e o número de porta inseridos estiverem corretos, você verá que será solicitado a inserir a Chave de Criptografia, que pedimos para salvar no passo 4.

Em seguida, clique em **SUBMIT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

Neste ponto, as etapas para adicionar o dispositivo foram concluídas com sucesso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### Passo 7. Visão geral das funções do Módulo mmWave Lite de 24GHz

Para ajudá-lo a entender rapidamente todas as capacidades do conjunto e o uso dessas funcionalidades, você precisa ler esta seção com atenção. Se quiser informações mais detalhadas, recomendamos que você reserve um tempo para ler o [manual do usuário do produto](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

Para detalhes sobre a configuração e os parâmetros do painel, compilamos um artigo detalhado na documentação do ESPHome, portanto, acesse para ler o artigo completo e os detalhes.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Documentação ESPHome 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

### Passo 8. Configurar o painel do Home Assistant

Se você achar os cartões padrão muito entediantes e pouco amigáveis para apresentar dados, o Home Assistant oferece uma ampla variedade de painéis prontos para escolher.

Você pode criar seu próprio painel de acordo com suas preferências.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

Por exemplo, a opção de controlar a saída de informações é transformada em um interruptor elegante.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

Transformando a velocidade do movimento humano em uma exibição visual no painel.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

Isso é o que eu criei. Parece que tem os elementos de um centro de controle de casa inteligente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

Até agora, concluímos com sucesso o conteúdo do nosso tutorial.

## Conectar Grove ao Home Assistant usando XIAO ESP32C3

Claro, o XIAO ESP32C3 oferece mais do que apenas suporte ao Módulo de Presença Estática Humana mmWave de 24GHz Lite no Home Assistant, e você pode encontrar mais tutoriais para seu próprio uso neste documento.

- [Conectar Grove ao Home Assistant usando XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/Connect-Grove-to-Home-Assistant-ESPHome/)

Deixe sua criatividade fluir!

## Solução de Problemas

### FAQ1: Obtive o seguinte erro ao fazer upload do firmware usando a ferramenta ESPhome Web, como posso corrigi-lo?

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> R: Se este aviso aparecer durante o upload, desconecte o XIAO ESP32C3 do PC. Em seguida, segure o BOOT BUTTON, conecte a placa ao seu PC enquanto segura o botão BOOT e, em seguida, solte-o para entrar no modo bootloader. Neste ponto, basta reconectar e fazer o upload do firmware novamente.

### FAQ2: Não consigo instalar o esphome flasher no Linux seguindo o tutorial do esphome flasher?

> R: Ao executar os seguintes comandos, você precisa selecionar a versão do seu sistema, caso contrário ocorrerá um erro. Por exemplo, meu computador é Ubuntu 22.04, então o comando que deve ser executado é o seguinte.

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

### FAQ3: Preenchi o WiFi e a senha corretos, por que não vejo o endereço IP do XIAO ESP32C3?

> R: Quando você encontrar este problema, verifique se a antena do XIAO ESP32C3 está conectada corretamente. Se a antena já estiver conectada, certifique-se de que o XIAO não esteja a mais de 3m do LinkStar, se possível (a menos que você tenha substituído a antena por uma mais potente).
Se você ainda não vir o XIAO, pode usar o software [esphome flasher](https://github.com/esphome/esphome-flasher) para verificar as informações de log do XIAO e verificar a conexão do XIAO através dos logs.
Você pode reconectar o xiao para deixá-lo tentar pesquisar o WiFi e conectar novamente.

<!-- ### FAQ4: Meu XIAO ESP32C3 está conectado à rede, mas por que não vejo os dados do sensor sendo atualizados?

:::caution
A partir de 1º de junho de 2023, a solução de problemas revelou que se você definir qualquer valor ou alterar qualquer cena no painel do ESPHome, há a possibilidade de o radar parar de funcionar.

A partir de 31 de julho de 2023, o problema anterior que causava a falha completa do radar foi corrigido, portanto, atualize os arquivos de biblioteca e o configurador para que esta espécie de tutorial funcione corretamente.
:::

> R: No conteúdo anterior do Wiki, usamos os pinos UART padrão (D6, D7) para receber e enviar dados do radar, mas muitos usuários relataram que é necessário religar o radar antes que ele possa funcionar. Em resposta, **atualizamos o Wiki** com conteúdo e procedimentos para substituir as portas seriais do radar por **D2 e D3**, e após os testes, isso resolve o problema muito bem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **Se você não percebeu a atualização do Wiki, sugiro que reconfigure a fiação do radar e refaça o processo de compilação e upload seguindo os [passos 2 e 5](#configure-the-xiao-esp32c3-and-esphome-connection) do tutorial deste artigo.**

> No entanto, alguns usuários relataram que ainda não conseguem fazer o radar funcionar corretamente mesmo após substituir os pinos seriais. Portanto, aqui propomos os seguintes métodos e etapas para verificar onde o problema ocorre; se você ainda não conseguir resolver o problema de funcionamento do radar, **forneça suas etapas de operação ao e-mail de suporte técnico**, o que pode acelerar o processamento dos problemas de pós-venda.

**Por favor, verifique as seguintes Exclusões em ordem.**

> **Exclusão 1: Certifique-se de que o XIAO ESP32C3 está na mesma LAN que o dispositivo com ESPHome implantado.**

> Se o XIAO ESP32C3 não estiver na mesma LAN que o dispositivo do ESPHome, o log que você vê no Home Assistant estará incompleto e não poderá ser usado como base para coleta de dados. Portanto, verifique novamente seu roteador para ver se o endereço IP do XIAO aparece.

> **Exclusão 2: Verifique se o botão de Transferência de Dados ao Vivo está ativado.**

> Após o XIAO estar na rede e o dispositivo ser adicionado com sucesso, você poderá ver os componentes do radar no painel. Observe que por padrão o botão de transferência de dados ao vivo está desativado; você precisa ativá-lo para poder ver os dados do radar sendo reportados continuamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **Exclusão 3: Verifique se o radar pode funcionar corretamente.**

> Precisamos garantir primeiro que o radar funcione bem com o XIAO ESP32C3, o que nos permitirá identificar rapidamente se o problema está no ESPHome ou no produto. Por favor, faça o upload do seguinte código para o XIAO ESP32C3 no Arduino IDE; observe que os **pinos RX/TX do radar devem ser conectados a D2/D3 do XIAO**.

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 4, 5);
  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

> Abra o monitor serial e defina a taxa de baud para 115200; se o radar estiver funcionando corretamente, você deverá ver muitos números sendo impressos.

> Se você não ver nenhuma saída de dados ao realizar esta etapa, atualize o firmware do radar conforme o Wiki. Oferecemos duas formas de atualizar o firmware: [Atualizações de Versão de Firmware](https://wiki.seeedstudio.com/pt-br/Radar_MR24HPC1/#Atualizações-de-Versão-de-Firmware).

> Se ainda não receber nenhum dado após atualizar o firmware, não hesite em contatar diretamente nossa equipe de suporte técnico. Informe-os sobre tudo o que você já fez.

> **Exclusão 4: O XIAO e o radar funcionam normalmente nos pontos de verificação acima, mas após substituir os pinos da porta serial, ainda não é possível obter os dados em tempo real do radar.**

> Se você substituiu os pinos RX e TX do radar para D2/D3 e também realizou cuidadosamente a solução de problemas conforme descrito acima, mas ainda não consegue obter mensagens de dados em tempo real, entre em contato com nossa equipe de suporte técnico. Antes disso, **informe-nos se o radar funciona corretamente no ambiente Arduino** para que possamos analisar e resolver o problema. -->

<!-- > A: Quando encontramos esse problema, precisamos usar os logs para entender o motivo exato pelo qual o sensor não está retornando dados. A situação que foi identificada como provável de ser encontrada até agora é uma situação em que o sensor não responde; nesse caso, os logs terão a seguinte aparência.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> Se você vir um log semelhante, verifique novamente os três pontos a seguir.
> 1. Se o sensor está sendo alimentado com 5V.
> 2. Se os pinos RX e TX do sensor estão conectados corretamente.
> 3. Desconecte apenas o fio de 5V do sensor ao XIAO e reconecte-o para permitir que o sensor seja energizado novamente.

> De modo geral, o terceiro ponto resolve esse problema. Um fluxo de log normal para transferência de dados deve ter a seguinte aparência.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

### FAQ4: Usei o firmware flash do Jlink, mas recebi o erro "Programming of range @address 0x08000000 failed (block verification error) Program failed Failed to program and verify target"?

Quando você está usando o firmware flash do Jlink e esse erro ocorre, você pode estar em uma das seguintes situações.

1. Seu sensor não está mais funcionando corretamente e você não consegue receber nenhuma mensagem dele.
2. Você está tentando usar um firmware inválido ou incorreto.

:::caution
Se o seu radar estava funcionando corretamente antes, verifique novamente se está usando o firmware correto! O firmware utilizado varia de radar para radar e de modelo de sensor para modelo de sensor! Além disso, a atualização de firmware via UART não é a mesma que a atualização de firmware via Jlink! Por favor, pare de prosseguir com as etapas a seguir.
:::

<details>

<summary><strong>Confirmei que meu produto recebe esta mensagem de erro em caso de exceção</strong></summary>

Se o seu radar não estiver funcionando de forma alguma, então pode ser normal receber esta mensagem de erro.

Como o funcionamento anormal do radar permitiu que ele acionasse o mecanismo de proteção de leitura/gravação, o usuário não tem mais permissão para gravar o programa no produto em geral; portanto, precisamos desbloquear o mecanismo de proteção de leitura/gravação do radar.

Devido ao alto risco de desproteger leituras e gravações, não divulgamos publicamente o método de desproteger leituras e gravações aqui; colocaremos o método no [arquivo zip aqui](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip) para quem precisar. Após desproteger o radar com funcionamento anormal, o firmware pode ser atualizado novamente para restaurar o funcionamento normal.

</details>

## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
