---
description: Descubra como o 4G LTE HAT para Raspberry Pi e o protocolo MQTT permitem comunicação eficiente e em tempo real para aplicações de IoT e IIoT. Simplifique a conectividade remota com comandos AT para transmissão de dados em alta velocidade e gerenciamento remoto em escala.
title: Configurando Conectividade 4G LTE para IIoT com MQTT
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - IoT
  - MQTT
  - Computação de Borda
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.webp
slug: /mqtt_raspberry_pi_4g_lte_hat
last_update:
  date: 12/18/2024
  author: Kasun Thushara
createdAt: '2024-12-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mqtt_raspberry_pi_4g_lte_hat/
---

## Introdução

O 4G LTE HAT para Raspberry Pi fornece conectividade celular confiável e de alta velocidade, tornando-o essencial para aplicações de IoT industrial (IIoT) e remotas. Com o MQTT, um protocolo de mensagens leve, os dispositivos podem se comunicar com eficiência por redes celulares, mesmo em locais isolados. Usando comandos AT para configuração, ele simplifica o processo de conectar dispositivos IoT à rede. Essa combinação de 4G LTE e MQTT melhora a transmissão de dados em tempo real, permitindo soluções de IIoT escaláveis com recursos de gerenciamento remoto.

## Pré-requisitos

### Requisitos de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos de Software

#### Drivers e ferramentas de comunicação

Se você ainda não instalou os drivers e ferramentas de comunicação relevantes, consulte primeiro o [guia](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)

#### Mosquitto Explorer

Usaremos o broker Mosquitto, especificamente o broker de testes disponível em **https://test.mosquitto.org** , que `does not require a username or password`. Para maior conveniência, é recomendado [instalar o Mosquitto](https://mqtt-explorer.com/) diretamente no seu PC para fins de teste.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.PNG"
    style={{ width: 500}}
  />
</div>

## Usando comandos AT Vamos nos conectar ao Broker MQTT

**Passo 1: Configurar o modo de recebimento**

```bash
AT+QMTCFG="recv/mode",0,0,1
```

**Passo 2: Abrir uma rede para o cliente MQTT**

```bash
AT+QMTOPEN=0,"test.mosquitto.org",1883

```

**Passo 3: Verificar o status da conexão MQTT (opcional)**

```bash
AT+QMTOPEN?
```

**Passo 4: Conectar um cliente ao servidor Mosquitto MQTT**

```bash
AT+QMTCONN=0,"clientExample"
```

:::note
Observe que o ID do cliente deve ser único, portanto, certifique-se de gerar um bem exclusivo. O broker público do Mosquitto não requer nome de usuário ou senha para acesso.
:::

**Passo 5: Publicar uma mensagem em um tópico**

```bash
AT+QMTPUBEX=0,0,0,0,"test/topic",30 

```

:::note
 quando `>` aparecer digite a mensagem e pressione ctrl+z
:::

```bash
> This is test data, hello MQTT.
```

Abra o Mosquitto Explorer e insira o tópico para o qual você publicou. Você verá as atualizações aparecerem lá.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_pub.PNG"
    style={{ width: 500}}
  />
</div>

**Passo 6: Assinar um tópico**

```bash
AT+QMTSUB=0,1,"test/topic",2
```

Abra o Mosquitto Explorer e insira o tópico e a mensagem que você deseja publicar a partir do módulo 4G.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_2.PNG"
    style={{ width: 500}}
  />
</div>

Você verá então a mensagem publicada sendo assinada com sucesso no lado do módulo 4G.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_1.PNG"
    style={{ width: 500}}
  />
</div>

**Passo 7: Cancelar a assinatura de um tópico**

```bash
AT+QMTUNS=0,2,"test/topic"
```

**Passo 8: Desconectar o cliente do servidor MQTT**

```bash
AT+QMTDISC=0
```

## Implementação em Código Python

### Passo 1. Preparar o Diretório e o Ambiente Virtual

- Abra um terminal no seu Raspberry Pi.
- Crie uma nova pasta de projeto e navegue até ela:

```bash
mkdir mqtt_EX
cd mqtt_EX
```

- Configure um ambiente virtual Python:

```bash
python3 -m venv --system-site-packages env
```

- Ative o ambiente virtual:

```bash
source env/bin/activate
```

- Instale as bibliotecas necessárias:

```bash
pip install pyserial 
```

### Passo 2. Preparar o Script Python

- Abra o **Thonny Python IDE** (pré-instalado no Raspberry Pi).

- Crie um novo arquivo no Thonny e cole o código fornecido no editor.

- Atualize o parâmetro usb_port para corresponder à porta serial do seu Raspberry Pi para o 4G HAT. Normalmente, pode ser `/dev/ttyUSB2` ou `/dev/ttyUSB3`. Exemplo:

```bash
usb_port = "/dev/ttyUSB2"
```

- Salve o arquivo como test_mqtt.py na pasta **mqtt_EX**.

```bash

import serial
import time

# Serial port configuration
SERIAL_PORT = '/dev/ttyUSB2'  # Adjust based on your setup
BAUD_RATE = 9600


def send_at_command(ser, command, delay=1):
    """
    Sends an AT command to the Quectel module and waits for a response.
    """
    ser.write((command + '\r\n').encode())
    time.sleep(delay)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return response


def main():
    # Open serial connection
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5)
    if not ser.is_open:
        ser.open()

    try:
        # Configure MQTT receive mode
        send_at_command(ser, 'AT+QMTCFG="recv/mode",0,0,1')

        # Open MQTT connection
        send_at_command(ser, 'AT+QMTOPEN=0,"test.mosquitto.org",1883')
        send_at_command(ser, 'AT+QMTOPEN?')  # Check connection status

        # Connect to the MQTT broker
        send_at_command(ser, 'AT+QMTCONN=0,"clientExample"')

        # Subscribe to the topic
        send_at_command(ser, 'AT+QMTSUB=0,1,"test/topic_subscribe",2')

        print("Publishing and subscribing. Press Ctrl+C to stop.")

        while True:
            try:
                # Publish a message
                send_at_command(ser, 'AT+QMTPUBEX=0,0,0,0,"test/topic_publish",30')
                send_at_command(ser, 'This is test data, hello MQTT.', delay=0.5)

                # Read incoming messages
                print("Checking for subscribed topic messages...")
                incoming = ser.read_all().decode()
                if incoming:
                    print(f"Received: {incoming}")

                # Delay between operations
                time.sleep(2)
            except KeyboardInterrupt:
                print("Exiting loop...")
                break

        # Unsubscribe from the topic
        send_at_command(ser, 'AT+QMTUNS=0,2,"test/topic_subscribe"')

        # Disconnect from the broker
        send_at_command(ser, 'AT+QMTDISC=0')
    finally:
        # Close serial connection
        ser.close()


if __name__ == '__main__':
    main()

```

### Passo 3. Executar o Script

- Abra um terminal e certifique-se de que você está no diretório do projeto:

```bash
cd mqtt_EX
```

- Ative o ambiente virtual:

```bash
source env/bin/activate
```

- Execute o script usando Python:

```bash
python test_mqtt.py
```

- A saída

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_python.PNG" style={{width:800}}/></div>

## Recursos

- **[PDF Book]** [Guia de Aplicação MQTT](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_LTE_Standard_MQTT_Application_Note_V1.2.pdf )

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
