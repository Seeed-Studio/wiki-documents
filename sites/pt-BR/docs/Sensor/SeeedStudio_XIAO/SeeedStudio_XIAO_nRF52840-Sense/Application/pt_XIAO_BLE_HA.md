---
description: Protocolo BTHome para uso com Home Assistant no Seeed Studio XIAO nRF52840 Sense
title: Protocolo BTHome com XIAO nRF52840 Sense (CircuitPython)
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_BLE_HA
last_update:
  date: 09/18/2023
  author: Bruno Santos (Feiticeir0)
createdAt: '2023-09-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/XIAO_BLE_HA/
---

# Visão Geral do Projeto

Neste wiki, mostraremos como usar os recursos Bluetooth 5.0 BLE do Seeed Studio XIAO nRF52840 com o Seeed Studio Grove Temperature & Humidity Sensor (DHT20) para transmitir medições de temperatura e umidade ao Home Assistant usando o protocolo BTHome.

Usaremos **CircuitPython** para o código.

## Primeiros Passos

Para acompanhar este tutorial, você precisa do seguinte hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove Temperature&Humidity Sensor V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação de Hardware

O sensor Grove DHT20 usa I2C para comunicação. Precisamos conectá-lo aos pinos I2C do XIAO nRF52840 Sense:

- Podemos usar um XIAO Grove Shield com um cabo Universal de 4 pinos sem trava
- Conectar o sensor DHT20 diretamente ao XIAO nRF52840 Sense usando um cabo Conversor de 4 pinos Jumper Fêmea para Grove 4 pinos

#### Aqui está o pinout do XIAO nRF52840 Sense e do XIAO Grove Shield

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### Configuração de Hardware

A fiação é simples. Usando o Shield ou não, o seguinte esquema em Fritzing mostra como ligar os componentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## Preparação de Software

Vamos usar o Thonny IDE (Linux) e algumas bibliotecas e arquivos relacionados. Estes são os passos que vamos seguir:

1. Instalar o CircuitPython no XIAO nRF52840 Sense
2. Instalar as bibliotecas necessárias
3. Programar nosso sensor usando o protocolo BTHome
4. Configurar o Home Assistant

### Passo 1 - Instalar o CircuitPython

Vamos instalar o CircuitPython.

Vá para <a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> e baixe uma versão para o XIAO nRF52840 Sense.
Escolha Downloads e, no campo de busca, comece a digitar XIAO nRF52840 até que os resultados mostrem o sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

Em seguida, pressione o botão de download para obter o arquivo para o nosso dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

Você deverá ter um arquivo .uf2. Para instalá-lo, precisamos entrar no modo bootloader. Conecte o XIAO nRF52840 Sense ao seu computador e pressione o botão de reset duas vezes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

Uma nova unidade deve ter aparecido no seu computador chamada XIAO-SENSE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

Em seguida, copie o arquivo baixado para essa unidade.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

Depois de um tempo, aparece uma nova unidade chamada CIRCUITPY. Temos o CircuitPython instalado em nosso microcontrolador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Passo 2 - Instalar bibliotecas

Para usar nosso Grove Temperature & Humidity sensor V2.0 (DHT20), precisamos da <a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> biblioteca AHT20 da Adafruit</span></a>.

O site anterior tem instruções sobre como instalar bibliotecas.

Depois de instalar, devemos ter os seguintes arquivos (estes são os necessários para o nosso sensor DHT20):
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Passo 3 - Enviar o Código

Antes de irmos para o código, precisamos entender o que é BTHome.

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome é um padrão aberto para transmissão de dados de sensores e pressionamentos de botões via Bluetooth Low Energy (BLE). Ele é projetado para ser energeticamente eficiente, flexível e seguro. BTHome é suportado por plataformas populares de automação residencial, como o Home Assistant, de forma nativa.

Alguns benefícios do BTHome:

- É um padrão aberto, portanto dispositivos de diferentes fabricantes podem funcionar juntos.
- Os dispositivos são projetados para serem energeticamente eficientes, de forma que possam funcionar por muito tempo com uma única bateria.
- Os dados são criptografados, portanto são protegidos contra acesso não autorizado.
- É um formato flexível, portanto pode ser usado para transmitir uma variedade de dados de sensores e pressionamentos de botões.

BTHome é um padrão versátil e poderoso para transmitir dados de sensores e pressionamentos de botões via BLE. É uma boa opção para quem deseja adicionar dados de sensores e botões à sua casa inteligente.

Você pode ler mais sobre ele e aprender sobre o formato de dados no <a  href="https://bthome.io/" target="_blank"><span>site oficial</span></a>.

#### Código

Aqui está o código em CircuitPython.

<details>
<summary>Clique para copiar o código CircuitPython</summary>

```python
# BTHome with DHT20
# This code is based on the excelent code by Koen Vervloesem
# https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
# We don't use deep sleep because it just doesn't work
# on the XIAO nRF52840 Sense. It's a pitty. 

from _bleio import adapter
from time import sleep
import board
# for the Grove sensor
import adafruit_ahtx0


# The size of the name is important. 
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# Because this is delaying just 0.1s - 100 milliseconds, we don't need to read the sensor
# values everytime. It's overkill - let's just read every 5 minutes. 
# Let's create a timer that will add every INTERVAL
# when it reaches 30 - it will be 5 minutes passed
# then we read the sensor
# INTERVAL * 60 seconds * 5 minutes
# CONVERTING 0.1ms to seconds * 60s * minutes = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING


# convert the measurement value to the BTHome format
def value_to_little_endian (measurement):

    # Calculate the integer value by dividing the temperature by the factor
    integer_value = int(measurement / 0.01)

    # Extract the lower and upper bytes for little-endian representation
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # Reverse the order of the bytes
    little_endian_bytes = bytes([upper_byte, lower_byte])
    return little_endian_bytes

class BTHomeAdvertisement:
    _ADV_FLAGS = [0x02, 0x01, 0x06]
    _ADV_SVC_DATA = [0x0a, 0x16, 0xd2, 0xfc, 0x40, 0x02, 0x00, 0x00, 0x03, 0xbf, 0x13]    

    def _name2adv(self, local_name):
        adv_element = bytearray([len(local_name) + 1, 0x09])
        adv_element.extend(bytes(local_name, "utf-8"))
        return adv_element

    def __init__(self, local_name=None):
        if local_name:
            self.adv_local_name = self._name2adv(local_name)
        else:
            self.adv_local_name = self._name2adv(adapter.name)

    def adv_data(self, temperature, humidity):
        adv_data = bytearray(self._ADV_FLAGS)
        adv_svc_data = bytearray(self._ADV_SVC_DATA)
        # temperature
        # change values according - 
        temp = value_to_little_endian (temperature)
        # returned value is list
        adv_svc_data[6] = temp[1]
        adv_svc_data[7]= temp[0]
        # humidity
        # change values according - 
        hum = value_to_little_endian (humidity)
        # returned value is list
        adv_svc_data[9] = hum[1]
        adv_svc_data[10]= hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data


# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# Create sensor object
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# because we want a initial reading
# let's initialize with the readTimer variable
# so we force the script to read the values
currentTimer = 0
# inital reading
temp = sensor.temperature
hum = sensor.relative_humidity

#DEBUG
#print("\nTemperature: %0.1f C" % temp)
#print("Humidity: %0.1f %%" % hum)

while True:
    adv_data = bthome.adv_data(temp,hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # increase currentTimer
    currentTimer += INTERVAL
    #print (f"Current timer: {currentTimer}")
    if (currentTimer >= readTimer):
        #print (f'Read new values')
        # Read new values
        temp = sensor.temperature
        hum = sensor.relative_humidity
        #reset counter
        currentTimer = 0


```

</details>

Lembre-se de salvá-lo como `code.py` para que seja executado na inicialização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### Um pouco de explicação sobre o código

- O código está cheio de comentários para explicá-lo um pouco.
- Basicamente, a cada 0,2 s ele está transmitindo a temperatura e a umidade vindas do sensor DHT20.
- Como não queremos sobrecarregar o sensor e ler valores a cada 0,2 s, colocamos um temporizador. Ele só lerá os valores a cada 5 minutos. Esse tempo é controlado pela variável `MINUTES_PER_READING`.

### Passo 4 - Exibir dados no Home Assistant

#### Passo 4.1 - Adicionar XIAO nRF52840 Sense no Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant é um software gratuito e de código aberto para automação residencial. Ele é projetado para ser um sistema de controle central para dispositivos de casa inteligente, com foco em controle local e privacidade.

Home Assistant atua como um hub central de controle da casa inteligente, combinando diferentes dispositivos e serviços em um único lugar e integrando-os como entidades. O sistema baseado em regras fornecido para automação permite criar rotinas personalizadas com base em um evento de gatilho, condições e ações, incluindo scripts. Isso possibilita a criação de automações, gerenciamento de alarmes de segurança e vigilância por vídeo para sistemas de segurança residencial, bem como o monitoramento de dispositivos de medição de energia.

Você pode ler mais sobre isso no <a  href="https://www.home-assistant.io/" target="_blank"><span>site oficial</span></a>.

#### Requisitos

Um requisito crucial é que o HA (Home Assistant) **tenha Bluetooth**. Se você estiver executando o HA em um Raspberry PI, é provável que tenha. Tudo depende da versão do RPi.

#### Configuração

No "Passo 3 - Enviar Código", programamos o XIAO nRF52840 e, para o próximo passo, ele deve estar em execução, para que o HA possa detectá-lo.

Abra sua instalação do HA. Vá em Settings -> Devices and Services
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Agora, a sua página de Integrations será exibida. Selecione Bluetooth
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

E a Integração deve aparecer.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>NOTA:</b> Se algo não estiver funcionando, verifique se o Passive scanning <b>não está selecionado</b>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Ao entrar na página de Integrations, se você tiver o XIAO nRF52840 Sense conectado, ele já deve ter sido detectado e aparecerá na página.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Pressione "Configure" para configurar esta nova Integration. Pressione Submit.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Agora você só precisa selecionar a área onde colocar esse novo sensor e pronto.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Em seguida, vá novamente em Settings -> Integrations e selecione a nova integração BTHome
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Em seguida, somos levados à página da integração. Podemos ver que temos 1 dispositivo e 3 entidades.
As entidades são a temperatura, a umidade e a intensidade do sinal
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Se clicarmos nas entidades, veremos uma nova página onde podemos ter uma visualização de todas elas.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Se, em vez disso, pressionarmos em device, veremos a página do dispositivo com todas as opções, bem como os valores atuais. Usando essa página, podemos adicioná-lo ao dashboard.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Ao pressionar "ADD to DASHBOARD", podemos escolher a visualização onde colocá-lo.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Depois disso, teremos uma visualização do card. Basta pressionar "ADD TO DASHBOARD" para adicioná-lo ao dashboard.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Se formos ao dashboard, veremos nosso card recém-adicionado com a temperatura e a umidade transmitidas pelo XIAO nRF52840 Sense.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## E mais - Função de Deep Sleep

Eu não consegui fazê-la funcionar. Se alguém tiver uma solução, por favor deixe um comentário. Você pode compartilhar suas ideias no [GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)

## ✨ Projeto de Contribuidor

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Obrigado aos [esforços do Bruno](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) e seu trabalho será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
