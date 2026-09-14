---
description: Exemplos Arduino para o guia do usuário do T1000-E
title: Primeiros Passos com Arduino
keywords:
  - Rastreador
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /t1000_e_arduino_examples
sidebar_position: 4
last_update:
  date: 9/1/2026
  author: Advent Jiang
createdAt: '2025-03-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/t1000_e_arduino_examples/
---


:::caution note
Antes de gravar o firmware, certifique-se de que seu dispositivo é a versão `T1000-E for LoRaWAN` e não grave outro firmware Meshtastic ou MeshCore neste modelo de rastreador, pois isso pode fazer com que o dispositivo fique completamente inutilizado.
:::

Os seguintes exemplos de Arduino estão disponíveis:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Exemplo</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>Blinky</td>
      <td>Flash de LED - Controla os pinos GPIO para fazer um LED piscar, usado para testes de função e indicação de status.</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>Imprimir evento de botão - Detecta mudanças de estado do botão e imprime informações de eventos para interação do usuário.</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>Reproduzir som em loop - Aciona um buzzer para produzir sons para lembretes ou alarmes.</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>Imprimir valor de temp/lux/bateria - Lê e imprime dados de temperatura, intensidade de luz e tensão da bateria.</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>Imprimir valor de ax/ay/az/evento - Coleta dados de aceleração para detecção de movimento e reconhecimento de postura.</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>Imprimir valor de latitude/longitude - Obtém e imprime dados de localização baseados em GNSS.</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>Entrar via OTAA, enviar dados de teste para a LNS - Conecta-se ao LoRaWAN e envia dados de teste.</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>Entrar via OTAA, ler temp/lux/bat/ax/ay/az, enviar dados para a LNS - Coleta e transmite vários dados de sensores via LoRaWAN.</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>Entrar via OTAA, escanear lat/lon, enviar dados para a LNS - Captura e transmite dados de localização GNSS em tempo real.</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>Entrar via OTAA, escanear MAC de WiFi, enviar dados para a LNS - Examina endereços MAC de WiFi e transmite dados para posicionamento.</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>Entrar via OTAA, escanear MAC de Beacon, enviar dados para a LNS - Examina e transmite dados de MAC de Beacon para rastreamento e identificação.</td>
    </tr>
  </table>
</div>

## Preparação

### Preparação de Hardware

- SenseCAP T1000-E x 1
- Cabo USB x 1
- Computador x 1

### Preparação de Software

Antes de começar a desenvolver, são necessárias as seguintes ferramentas de software.

Confira aqui para [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).

:::tip
A versão precisa ser mais recente que v1.6.12.
:::

## Primeiros Passos

### Pré-requisitos

1. Adicionar URL

Navegue até `File` -> `Preferences` e adicione a seguinte URL em `Additional Boards Manager URLs`:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>

2. Instalar Placa

Navegue até `Boards Manager`, pesquise `seeed nrf52`, selecione a versão mais recente e instale.

### Compilando um Exemplo

1. Selecionar placa e porta

**Placa**: Seeed Tracker T1000 E <br/>
**Porta**: A porta do seu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. Compilar exemplo

Navegue até `File` -> `Examples` -> `Seeed Tracker T1000 E LoRaWAN`, depois abra um exemplo de sua escolha (neste caso, o exemplo do acelerômetro):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### Enviando para o dispositivo alvo

Como o bootloader do T1000-E _apenas_ suporta gravação via arrastar e soltar `.uf2`, não é possível carregar os exemplos diretamente pelo Arduino IDE.
Em vez disso, siga estes passos:

1. Exporte o binário compilado a partir do Arduino IDE. Você o encontrará na mesma pasta que o sketch `.ino`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. Converta o arquivo `.hex` em um arquivo `.uf2`. Isso é feito usando um script em python que pode ser baixado [aqui](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py). Baixe e execute o script com os seguintes parâmetros a partir de um terminal:  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <your_hex_file>.hex`

3. Coloque o dispositivo em modo DFU pressionando e segurando o botão do dispositivo e, em seguida, conectando rapidamente o cabo de carregamento duas vezes; o LED verde ficará aceso fixo. Agora você deve encontrar o T1000-E como dispositivo de armazenamento em massa.

:::danger note
Se nenhuma janela de driver aparecer após pressionar e segurar o botão do dispositivo ao conectar o cabo, toque rapidamente duas vezes o cabo de carregamento, conforme mostrado na operação abaixo.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={400} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. Copie o arquivo `.uf2` para o armazenamento em massa. Depois que ele for copiado, o dispositivo começará a executá-lo automaticamente.

## Lendo mensagens seriais

Mensagens do dispositivo impressas usando `Serial.println` e `Serial.printf` podem ser lidas usando o terminal integrado da IDE do Arduino.
Certifique-se de que você selecionou USB-CDC e o habilitou:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

Em seguida, abra o monitor serial usando `Tools -> Serial Monitor` e comece a observar as mensagens:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## Exemplos LoRaWAN

Os exemplos que incluem mensagens LoRaWAN precisam de dois passos adicionais.

### Configurar uma LNS

Você precisa de um servidor de rede LoRaWAN (LNS) ao qual seu rastreador possa se conectar. Neste exemplo usamos The Things Network (TTN), mas qualquer outro deve funcionar bem.
Para trabalhar com a TTN, você precisa ter uma conta na The Things Industries ou The Things Network e acesso a um gateway (seja um público ou o seu próprio, se nenhum estiver disponível).

#### Etapa 1: Criar uma aplicação

Navegue até a página Applications e clique em "+ Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Insira um Application ID e clique em "Create application" para salvar suas alterações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Etapa 2: Registrar o Dispositivo

Clique em "+ Register end device".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Defina os seguintes parâmetros:

**Frequency Plan**: Selecione o plano de frequência apropriado para a região de destino  
**LoRaWAN version**:LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

Agora, crie as credenciais para o seu dispositivo. Gere um novo conjunto ou insira credenciais existentes.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### Ajustar o código de exemplo

Para que funcione, defina as credenciais da etapa anterior no código de exemplo. Também especifique a região, por exemplo, `SMTC_MODEM_REGION_AS_923_GRP1`, `SMTC_MODEM_REGION_EU_868` ou `SMTC_MODEM_REGION_US_915`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

Se a sua região tiver restrições de duty cycle, certifique-se de habilitar a limitação no manipulador de reset:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### Executando o código de exemplo

Compile e grave o exemplo LoRaWAN da mesma maneira descrita para os outros exemplos (crie o arquivo `.uf2` e grave via arrastar e soltar).
Depois disso, você deverá ver mensagens chegando na interface da TTN:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Um agradecimento especial a [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) por seus esforços dedicados. Seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/contributors/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
