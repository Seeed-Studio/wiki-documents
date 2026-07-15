---
description: reTerminal-FAQ
title: Como fazer login no Raspberry Pi OS/ Ubuntu OS ou outros sistemas usando um conversor USB para serial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Logging_in_OS_using_USB_to_serial_converter
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Logging_in_OS_using_USB_to_serial_converter/
---

<!-- ## Q5: How can I log in to Raspberry Pi OS/ Ubuntu OS or other OS using a USB to serial converter -->

Se você tiver um **USB to Serial Converter**, pode seguir as etapas abaixo para fazer login no Raspberry Pi OS

Conecte jumpers de um USB to Serial Converter aos **pinos UART** no conector GPIO de 40 pinos do reTerminal da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

Agora vamos configurar o software no computador. Siga de acordo com o seu sistema operacional

### Para Windows

- **Passo 1.** Conecte o USB to Serial Converter ao PC

- **Passo 2.** Abra o **Device Manager** digitando **Device Manager** na caixa de pesquisa do Windows

- **Passo 3.** Clique na seta de expansão em **Ports (COM & LPT)** e encontre o nome da porta serial conectada (ex: **COM7**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **Passo 4.** Baixe e instale o **Putty** acessando [este link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty é um cliente SSH e telnet que você pode usar para conectar ao reTerminal via SSH. Você pode pular esta etapa se já tiver o Putty instalado

- **Passo 5.** Abra o Putty para conectar o PC ao reTerminal

- **Passo 6.** Selecione **Serial** em **Connection Type**

- **Passo 7.** Configure as definições da seguinte forma:

  - Serial line: COM7 (escolha sua porta COM)
  - Speed: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **Passo 8.** Clique em **Open**

- **Passo 9.** Na janela do Putty, insira os dados de login da seguinte forma

```sh
- Username: pi
- Password: raspberry
```

- **Passo 10.** Se você tiver feito login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### Para Mac/Linux

- **Passo 1.** Conecte o USB to Serial Converter ao PC

- **Passo 2.** Abra uma **janela de terminal** no Mac/Linux

- **Passo 3.** Digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt-get update
```

- **Passo 4.** Digite o seguinte para instalar o **minicom**

```sh
sudo apt-get install minicom
```

- **Passo 5.** Digite o seguinte no terminal para visualizar os dispositivos seriais conectados

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>Ex: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **Passo 6.** Conecte-se ao dispositivo serial digitando o seguinte

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**Nota:** A taxa de transmissão (baud rate) é configurada para 9600

- **Passo 7.** Depois das conexões de hardware mencionadas acima, ligue a energia na tomada da parede para ligar o reTerminal

Agora você fez login com sucesso no Raspberry Pi OS!
