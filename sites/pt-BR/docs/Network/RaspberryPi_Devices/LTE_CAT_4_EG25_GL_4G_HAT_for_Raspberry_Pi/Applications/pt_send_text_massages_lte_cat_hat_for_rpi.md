---
description: Explore o papel crítico do envio e recebimento de SMS em sistemas de TI usando o Quectel 4G HAT. Saiba como o SMS garante comunicação confiável, aprimora alertas do sistema, permite controle remoto e oferece suporte a aplicações de IoT com integração perfeita e escalabilidade. Perfeito para profissionais de TI e entusiastas de IoT.
title: Enviando e Recebendo Mensagens SMS com Quectel 4G Raspberry Pi Hat
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - M2M
  - SMS
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.webp
slug: /send_receive_sms_raspberry_pi_4g_lte_hat
last_update:
  date: 12/11/2024
  author: Kasun Thushara
createdAt: '2024-12-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/send_receive_sms_raspberry_pi_4g_lte_hat/
---

## Introdução

Em áreas rurais e remotas, onde a cobertura 4G é escassa ou inexistente, a comunicação via SMS por meio de redes 2G torna-se uma ferramenta vital para garantir conectividade ininterrupta em sistemas de IoT. **Para a preservação da vida selvagem, essa tecnologia possibilita sistemas de alerta automatizados para monitorar condições ambientais, rastrear movimentos de animais e relatar eventos críticos em tempo real**. Ao aproveitar módulos 4G com recursos de SMS, os dispositivos podem enviar alertas automáticos e receber instruções, garantindo que, mesmo em regiões isoladas, os esforços de conservação não sejam prejudicados pela falta de infraestrutura de rede moderna. Essa integração de automação e comunicação ajuda a aumentar a eficácia dos sistemas de monitoramento em áreas remotas de vida selvagem, oferecendo uma solução confiável para proteção e pesquisa.

## Preparação de Hardware

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

## A Configuração

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

## Enviando um SMS Usando a Ferramenta QCOM no Windows

### Etapa 1: Configurar o Módulo

- **Conecte o Módulo**
  - Conecte o módulo ao seu PC com Windows via USB. Certifique-se de que os DIP switches estejam posicionados na ordem correta. Neste caso, todos os switches estão definidos como 0, o que significa que estão desativados.
- **Ligue o Módulo**
  - Pressione o botão de energia no módulo.
- **Verifique as Portas de Comunicação**
  - [Certifique-se de que os drivers estejam instalados corretamente](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#for-windows). Você deverá ver as portas COM listadas no Gerenciador de Dispositivos do Windows.

### Etapa 2: Abrir a Interface QCOM

- **Instalar e Iniciar o QCOM**
  - Baixe e instale o software **QCOM v1.6**.(se ainda não o fez)
  - Inicie a ferramenta no seu PC.
- **Configurar a Porta COM**
  - Selecione a porta COM associada ao módulo (por exemplo, COM3) na interface do QCOM.
  - Defina a taxa de baud para o valor recomendado (por exemplo, 9600).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG"
    style={{ width: 600}}
  />
</div>

### Etapa 3: Enviar um SMS

**Testar a Comunicação do Módulo**

- Na caixa de entrada de comandos, digite o seguinte comando:

```bash
AT
```

- Clique em Send.
- O módulo deverá responder com:

```bash
OK
```

- Isso confirma que o módulo está pronto.

**Definir o Modo de SMS**

- Digite o seguinte comando para definir o modo SMS como texto:

```bash
AT+CMGF=1
```

- Clique em Send.
- O módulo deverá responder com:

```bash
OK
```

**Verificar o Número SMSC**

- Consulte o número do SMSC (Short Message Service Center) a partir do SIM digitando:

```bash
AT+CSCA?
```

- Clique em Send. A resposta deverá ser algo como:

```bash
+CSCA: "+1234567890",145
OK
```

- Se nenhum SMSC estiver definido, entre em contato com o seu provedor de serviço para obter o número correto e defini-lo usando:

```bash
AT+CSCA="+1234567890"
```

**Escrever e Enviar SMS**

- Digite o comando para iniciar um SMS:

```bash
AT+CMGS="+9876543210"
```

- Substitua +9876543210 pelo número de telefone do destinatário.

- Clique em Send.

- A interface do QCOM exibirá:

```bash
>
```

- Agora, digite sua mensagem (por exemplo, Hello!) na caixa de texto.

**Enviar o SMS**

- Pressione Ctrl + Z ou use a opção da interface QCOM para enviar o SMS.
- O módulo responderá com:

```bash
+CMGS: 25 
OK
```

- Isso indica que o SMS foi enviado com sucesso.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_send.PNG"
    style={{ width: 600}}
  />
</div>

### Etapa 4: Verificar o SMS

- Verifique o telefone do destinatário para garantir que a mensagem foi recebida.

## Enviando um SMS Usando Minicom no Raspberry Pi

Supondo que você tenha instalado os drivers e iniciado o módulo corretamente. Caso contrário, [siga este guia](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).

**Etapa 1: Abrir o Minicom**

:::note
Se os drivers necessários para se comunicar com comandos AT não estiverem instalados, você precisará [instalá-los](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)
:::

```bash
sudo minicom -D /dev/ttyUSB2
```

**Etapa 2: Siga os Comandos na Tabela**

| **Command**          | **Response**                 | **Explanation**                                   |
|-----------------------|------------------------------|---------------------------------------------------|
| `ATE`                | `OK`                        | Enable echo to see typed commands in Minicom.     |
| `AT`                 | `OK`                        | Checks module readiness.                         |
| `AT+CMGF=1`          | `OK`                        | Sets the SMS mode to Text Mode.                  |
| `AT+CSCA?`           | `+CSCA: "+1234567890",145`  | Queries the SMSC (Short Message Service Center) number from the SIM. |
| `AT+CMGS="+94712222803"` | `>`                      | Prepares the module to accept the message content for the specified recipient. |
| *(Type the message: `Hello!`)* | *(No response)*     | Type the message content.                        |
| *(Press `Ctrl+Z`)*   | `+CMGS: 25` `OK`       | Sends the message. The module confirms with `+CMGS` and the message reference ID. |

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rpi_send_msg_1.PNG"
    style={{ width: 600}}
  />
</div>

## Script em Python para Enviar Mensagens

```bash

import serial
import time

# Configure the serial port
SERIAL_PORT = "COM7"  # Replace with your module's COM port (e.g., COM3 on Windows, /dev/ttyUSB2 on Linux)
BAUD_RATE = 9600    # Adjust to the baud rate of your GSM module

# SMS details
SMSC_NUMBER = "+9477000000"  # Replace with your carrier's SMSC number in international format
RECIPIENT_NUMBER = "+94712222813"  # Replace with the recipient's phone number in international format
MESSAGE = "Hello, this is a test message from Python!"

def send_at_command(command, expected_response="OK", timeout=3):
    """Send an AT command to the GSM module and wait for a response."""
    ser.write((command + "\r").encode())
    time.sleep(timeout)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return expected_response in response

try:
    # Open the serial connection
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)  # Allow the module to initialize

    # Test communication with the GSM module
    if not send_at_command("AT"):
        raise Exception("GSM module not responding. Check the connection.")

    # Set SMSC number (optional, only if needed)
    if not send_at_command(f'AT+CSCA="{SMSC_NUMBER}"'):
        raise Exception("Failed to set SMSC number.")

    # Set SMS to text mode
    if not send_at_command("AT+CMGF=1"):
        raise Exception("Failed to set SMS mode to text.")

    # Send SMS
    if not send_at_command(f'AT+CMGS="{RECIPIENT_NUMBER}"', ">"):
        raise Exception("Failed to initiate SMS sending.")

    # Provide the message content and send Ctrl+Z to finalize
    ser.write((MESSAGE + "\x1A").encode())  # Ctrl+Z is sent as '\x1A'
    time.sleep(5)  # Wait for the module to send the SMS
    response = ser.read_all().decode()
    print(f"SMS Send Response: {response}")

    if "OK" in response:
        print("SMS sent successfully!")
    else:
        print("Failed to send SMS. Check the module or command syntax.")

except Exception as e:
    print(f"Error: {e}")

finally:
    if ser.is_open:
        ser.close()


```

## Recebendo Mensagens SMS Usando Comandos AT em Ambiente Windows

Isto explica como receber e ler mensagens SMS usando comandos AT passo a passo. Siga esses comandos na ordem listada.

Supondo que você tenha instalado os drivers e iniciado o módulo corretamente. Caso contrário, [siga este guia](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#for-windows).

### Etapa 1: Definir o Modo SMS para Texto

Use o comando AT+CMGF=1 para definir o módulo GSM para o Modo Texto para facilitar o manuseio de SMS.

**Comando:**

```bash
AT+CMGF=1
Expected Response:
OK
```

### Etapa 2: Verificar o Armazenamento Atual de Mensagens

Use o comando AT+CPMS? para verificar a configuração atual de armazenamento de mensagens.

**Comando:**

```bash
AT+CPMS?
```

**Resposta Esperada:**
+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK

**Explicação:**

- `SR`: armazenamento de Status Report (por exemplo, relatórios de entrega de SMS).
- `MT`: memória do Terminal Móvel (armazenamento do SIM e do módulo).
Neste exemplo, "MT" contém 19 mensagens armazenadas de uma capacidade de 255.

### Etapa 3: Alterar o Armazenamento de Mensagens para "MT"

Para acessar as mensagens na memória do Terminal Móvel, altere o armazenamento para "MT" usando AT+CPMS="MT".

**Comando:**

```bash
AT+CPMS="MT"
```

**Resposta Esperada:**

```bash
+CPMS: 19,255,19,255,19,255 OK
```

**Explicação**

- 19,255: 19 mensagens estão armazenadas no momento e o armazenamento tem capacidade para 255 mensagens.

### Etapa 4: Listar Todas as Mensagens Armazenadas

Recupere todas as mensagens armazenadas na memória selecionada usando o comando AT+CMGL="ALL".

**Comando:**

```bash
AT+CMGL="ALL"
```

**Resposta Esperada:**

```bash
+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK
```

**Explicação:**

- +CMGL: 1: Índice da primeira mensagem.
- "REC UNREAD": Status da mensagem (Não lida).
- "+1234567890": Número de telefone do remetente.
- Hello, this is a test message!: Conteúdo da mensagem.

### Etapa 5: Ler uma Mensagem Específica

Para ler uma mensagem específica pelo seu índice (por exemplo, índice 1), use o comando AT+CMGR=|index|.

**Comando:**

```bash
AT+CMGR=1
```

**Resposta Esperada:**

```bash
+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK
```

**Explicação:**

- `REC UNREAD`: A mensagem está marcada como não lida.
- `+1234567890`: O número de telefone do remetente.
- Hello, this is a test message!: O conteúdo da mensagem.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rec_massages.PNG"
    style={{ width: 600}}
  />
</div>

## Recebendo Mensagens SMS Usando Minicom no Raspberry Pi

Assumindo que você instalou os drivers e inicializou o módulo corretamente. Caso contrário, [siga este guia](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).

## Etapa 1 :Abrir o Minicom

```bash
sudo minicom -D /dev/ttyUSB2
```

## Etapa 2:  Siga os Comandos na Tabela

| **Etapa** | **Comando**          | **Detalhes da Resposta**                                                                                                                                                 | **Propósito/Explicação**                                                                                                                                          |
|----------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1**    | `ATE`                | `OK`                                                                                                                                                                 | Ativa o eco para ver os comandos digitados no terminal.                                                                                                           |
| **2**    | `AT+CMGF=1`          | `OK`                                                                                                                                                                 | Define o modo SMS para Modo Texto para facilitar o manuseio de SMS.                                                                                               |
| **3**    | `AT+CPMS?`           | `+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK`                                                                                                                         | Verifica o armazenamento de mensagens atual. `"SR"`: Relatórios de Status. `"MT"` (Terminal Móvel): Contém mensagens armazenadas no SIM e no módulo.             |
| **4**    | `AT+CPMS="MT"`       | `+CPMS: 19,255,19,255,19,255 OK`                                                                                                                                     | Alterna o armazenamento de mensagens para `"MT"` (Terminal Móvel). `19,255`: Indica 19 mensagens armazenadas de um total de 255 espaços disponíveis.             |
| **5**    | `AT+CMGL="ALL"`      | `+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK` | Recupera todas as mensagens armazenadas na memória selecionada. `"REC UNREAD"`: Mensagem não lida. `+1234567890`: Número de telefone do remetente.               |
| **6**    | `AT+CMGR=1`          | `+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK`                                                                      | Lê uma mensagem específica pelo seu índice (por exemplo, `1`). `"REC UNREAD"`: Indica que a mensagem não foi lida. `Hello, this is a test message!`: Conteúdo da mensagem. |

## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Página Web]** [AT Commands Manual V2.0](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_at_commands_manual_v2-0-2/)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
