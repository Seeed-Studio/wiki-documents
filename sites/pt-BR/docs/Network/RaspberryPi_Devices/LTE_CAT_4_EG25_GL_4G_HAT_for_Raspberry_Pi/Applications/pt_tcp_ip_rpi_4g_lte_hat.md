---
description: Liberte o poder do TCP para o seu Raspberry Pi 4G HAT. Explore como o TCP garante uma troca de dados confiável, essencial para aplicações de IoT, monitoramento remoto e muito mais.
title: 4G LTE HAT no Raspberry Pi - Rede TCP/IP Explicada
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - IoT
  - TCP/IP
  - Computação de Borda
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.webp
slug: /tcp_ip_raspberry_pi_4g_lte_hat
last_update:
  date: 12/20/2024
  author: Kasun Thushara
createdAt: '2024-12-23'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/tcp_ip_raspberry_pi_4g_lte_hat/
---

## Introdução 

TCP (Transmission Control Protocol) é vital para aplicações que envolvem o Raspberry Pi 4G HAT porque garante transmissão de dados confiável, ordenada e com verificação de erros pela internet. Isso é crucial para aplicações em tempo real como dispositivos IoT, onde é necessária comunicação consistente com servidores em nuvem ou sistemas remotos. A confiabilidade do TCP o torna ideal para enviar dados críticos (por exemplo, leituras de sensores, telemetria) e receber comandos, garantindo que nenhum dado seja perdido ou corrompido. Ele suporta diversas aplicações, como monitoramento remoto, sistemas de mensagens e transferência de arquivos, com o Raspberry Pi atuando como gateway ou cliente.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos de Software 

#### Drivers e ferramentas de comunicação 

Se você ainda não instalou os drivers e ferramentas de comunicação relevantes, por favor verifique primeiro o [guia](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)

### Requisitos Adicionais 

Você vai precisar de um servidor TCP pré-configurado com os seguintes detalhes:

- **Host**: Por exemplo, seu próprio servidor ou, para fins de teste, tcpbin.com
- **Número da Porta**: Um número de porta dedicado, ou, neste caso, usaremos a porta `4242` do `tcpbin.com`.

tcpbin.com é um servidor TCP público usado para testar e depurar comunicação TCP/IP. Ele retorna as mensagens que lhe são enviadas, sendo ideal para verificar conectividade e transmissão de dados.



## Enviar Comandos AT para tcpbin.com

Abra o Minicom no Raspberry Pi ou a ferramenta Qcom no Windows via USB.

```bash
sudo minicom -D /dev/ttyUSB2
```

 Step | Action                                              | AT Command                       | Expected Response                              |
|------|-----------------------------------------------------------|---------------------------------------------|-----------------------------------------------|
| 1    | Configure o APN para o seu provedor de rede móvel.        | `AT+QICSGP=1,1,"dialogbb","","",1`           | `OK`                                           |
| 2    | Ative o contexto PDP.                | `AT+QIACT=1`                                 | `OK`                                           |
| 3    | Verifique se o contexto PDP está ativado.     | `AT+QIACT?`                                  | `+QIACT: 1,1,1,"<Your_IP_Address>"` `OK`  |
| 4    | Abra uma conexão TCP com o servidor.     | `AT+QIOPEN=1,0,"TCP","tcpbin.com",4242,0,0`  | `+QIOPEN: 0,0` (indica uma conexão bem-sucedida) |
| 5    | Envie uma mensagem para o servidor.            | `AT+QISEND=0`                                | `>` (prompt para inserir a mensagem)  Após digitar a mensagem: `Hello TCPBin<Ctrl+Z>`  `SEND OK` |
| 6    | Leia a resposta do servidor.       | `AT+QIRD=0,1500`                             | `+QIRD: <length>`  `Hello TCPBin`  `OK` |
| 7    | Feche a conexão TCP.                | `AT+QICLOSE=0`                               | `OK`                                           |


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp.PNG" 
    style={{ width: 500}} 
  />
</div>

## Script Python Automatizado

Abaixo está um script Python automatizado para interagir com o módulo Quectel 4G LTE em um Raspberry Pi. O script usa a biblioteca serial para enviar comandos AT para o módulo. Você pode personalizar as variáveis de APN, porta, baud rate, porta TCP e endereço.


## Implementação do Código em Python 

### Etapa 1. Preparar o Diretório e o Ambiente Virtual


- Abra um terminal no seu Raspberry Pi.
- Crie uma nova pasta de projeto e navegue até ela:
```bash
mkdir TCP_EX
cd TCP_EX
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

### Etapa 2. Preparar o Script Python

- Abra o **Thonny Python IDE** (pré-instalado no Raspberry Pi).

- Crie um novo arquivo no Thonny e cole o código fornecido no editor.

- Atualize o parâmetro usb_port para corresponder à porta serial do seu Raspberry Pi para o 4G HAT. Normalmente, pode ser `/dev/ttyUSB2` ou `/dev/ttyUSB3`. Exemplo:

```bash
usb_port = "/dev/ttyUSB2"
```
- Salve o arquivo como test_mqtt.py na pasta **TCP_EX**.

```bash 
import serial
import time

# Configuration Variables
APN = "dialogbb"  # Replace with your network APN
PORT = "/dev/ttyUSB2"  # Serial port connected to the Quectel module
BAUDRATE = 9600  # Communication baud rate
TCP_ADDRESS = "tcpbin.com"  # TCP server address
TCP_PORT = 4242  # TCP server port
MESSAGE = "Hello TCPBin"  # Message to send


def send_command(ser, command, wait_for="OK", timeout=5):
    """
    Send an AT command to the module and wait for a response.
    """
    ser.write((command + "\r\n").encode())
    time.sleep(0.5)
    end_time = time.time() + timeout
    response = b""
    while time.time() < end_time:
        if ser.in_waiting > 0:
            response += ser.read(ser.in_waiting)
            if wait_for.encode() in response:
                break
    print(f">> {command}")
    print(response.decode().strip())
    return response.decode().strip()


def main():
    try:
        # Open serial connection
        ser = serial.Serial(PORT, BAUDRATE, timeout=1)
        time.sleep(2)  # Allow the module to initialize

        # 1. Configure APN
        send_command(ser, f'AT+QICSGP=1,1,"{APN}","","",1')

        # 2. Activate PDP Context
        send_command(ser, "AT+QIACT=1")

        # 3. Check PDP Context State
        send_command(ser, "AT+QIACT?")

        # 4. Open TCP Connection
        send_command(ser, f'AT+QIOPEN=1,0,"TCP","{TCP_ADDRESS}",{TCP_PORT},0,0')
        time.sleep(5)  # Allow connection to establish

        # 5. Send Data
        send_command(ser, f"AT+QISEND=0")
        ser.write((MESSAGE + "\x1A").encode())  # Send message and end with Ctrl+Z
        time.sleep(1)  # Allow time for sending
        print("Message sent.")

        # 6. Read Response
        response = send_command(ser, "AT+QIRD=0,1500")
        print(f"Server Response: {response}")

        # 7. Close Connection
        send_command(ser, "AT+QICLOSE=0")
        print("Connection closed.")

        # Close serial port
        ser.close()

    except Exception as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()


```

### Etapa 3. Executar o Script

- Abra um terminal e certifique-se de que você está no diretório do projeto:
```bash
cd TCP_EX
```

- Ative o ambiente virtual:

```bash
source env/bin/activate
```

- Execute o script usando Python:
```bash
python test_tcp.py
```
- A saída 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.PNG" style={{width:600}}/></div>


## Recursos


- **[PDF Book]** [Guia de Aplicação TCP](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_tcpip_application_note_v1-3/ )




## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>