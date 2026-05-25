---
description: reTerminal E10-1
title: reTerminal E10-1
keywords:
  - Borda
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalBridge
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/reTerminalBridge/
---

# **Primeiros Passos com o reTerminal E10-1**

### **Materiais Necessários**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**Adquira agora**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**Adquira agora**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **Preparação Preliminar**

#### **Conexão**

Observe a orientação e coloque o reTerminal sobre o reTerminal E10-1, pressionando-os para que se encaixem firmemente. Se o reTerminal E10-1 estiver ligado nesse momento, o reTerminal será ativado e inicializará o sistema. Se quiser saber mais sobre o reTerminal, clique em [**reTerminal**](https://wiki.seeedstudio.com/pt-br/reTerminal/).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **Instalação e Remoção**

Durante o uso do reTerminal E10-1, pode ser necessário remover sua carcaça para adicionar periféricos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **Instalação do Driver**

Se você quiser que o reTerminal utilize as funções do reTerminal E10-1, será necessário instalar o driver para o reTerminal antes de começar. Siga os comandos na janela do terminal do reTerminal.

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```

:::note
Para **SO 32bit** você precisará adicionar o seguinte passo antes de executar `sudo ./scripts/reTerminal.sh`

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

:::

Após a conclusão da instalação, reinicie a máquina. Em seguida, use o seguinte comando para verificar se o arquivo `reTerminal-bridge.dtbo` existe, para garantir que a instalação do driver foi concluída.

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **Instalar Bibliotecas**

Instale a biblioteca python3.

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

Instale a biblioteca git.

```sh
sudo apt install -y git
```

### **Fonte de Alimentação**

Existem três métodos para fornecer alimentação, mostrados abaixo:

- Conector DC
- PoE
- UPS - bateria 18650

A bateria para este dispositivo é a bateria recarregável de íons de lítio NCR18650B. Observe que não há bateria na embalagem, porém a bateria está disponível em lojas de conveniência comuns e o cliente precisa providenciá-la. E o que propomos é a Panasonic NCR18650B 3,6V 3400mAh.

#### **Conector DC**

Forneça alimentação ao reTerminal, à placa de expansão e à bateria em DC 12V @4A

#### **PoE**

A entrada de alimentação PoE é RJ45 e suporta um máximo de 25W de potência de entrada.

#### **UPS - bateria 18650**

Suporte para 2 x baterias com pino de fixação.

### **Ventoinha**

**Materiais necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Ventoinha (incluída) x1

Para manter o reTerminal e o reTerminal E10-1 em um nível de temperatura normal sob carga pesada, há uma ventoinha de 3 pinos dentro do reTerminal E10-1.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

Este exemplo apresenta como controlar a ventoinha no reTerminal E10-1.

**Passo 1.** Podemos controlar diretamente o interruptor da ventoinha com o seguinte comando.

```sh
#Toggle fan on
raspi-gpio set 23 op pn dh

#Toggle fan off
raspi-gpio set 23 op pn dl
```

**Passo 2.** Também podemos ativar e desativar a ventoinha detectando a temperatura da CPU. Siga os passos abaixo para baixar e executar o programa.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

Aqui está o código **fan.py** para referência.

```python
import sys 
import time
try:
 import RPi.GPIO as GPIO 
except RuntimeError:
 print("Error importting Rpi.GPIO")

MAX_TEMP = 40.0
MIN_TEMP = 20.0

def cpu_temp():
 f = open("/sys/class/thermal/thermal_zone0/temp",'r') 
 return float(f.read())/1000

def main():
 channel = 23
 GPIO.setmode(GPIO.BCM)

 # init 23 off
 GPIO.setup(channel,GPIO.OUT,initial=GPIO.LOW)
 is_close = True
 while 1:
  temp = cpu_temp()
  if is_close:
   if temp > MAX_TEMP:
    GPIO.output(channel,GPIO.HIGH)
    is_close = False
  else:
   if temp < MIN_TEMP:
    GPIO.output(channel,GPIO.LOW)
    is_close = True
  time.sleep(2.0)
  GPIO.setwarnings(False) 

if __name__ == '__main__':
 main() 
```

Depois que o código for executado com sucesso, quando a temperatura da CPU for detectada como superior a 40°C, a ventoinha será ligada. Quando a temperatura for inferior a 20°C, a ventoinha será desligada.

### **Comunicação CAN**

Uma Controller Area Network (CAN) é um padrão robusto de barramento veicular projetado para permitir que microcontroladores e dispositivos se comuniquem com as aplicações uns dos outros sem um computador host.

**Materiais necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- cabo macho-macho x2

Este exemplo apresenta como usar o CAN no reTerminal E10-1.

**Passo 1.** Use cabos macho-macho para conectar os dois reTerminal E10-1 através da interface CAN.

H -> H
L -> L
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**Passo 2.** Instale o **CAN-utils** separadamente nos dois reTerminals.

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils é uma coleção de ferramentas de depuração extremamente úteis que usam a interface CAN. Inclui aplicações como:

- candump – Despeja pacotes CAN – exibe, filtra e registra em disco.
- canplayer – Reproduz arquivos de log CAN.
- cansend – Envia um único frame.
- cangen – Gera tráfego aleatório.
- canbusload – Exibe a utilização atual do barramento CAN.

O código-fonte do CAN-utils pode ser obtido no [repositório GitHub](https://github.com/linux-can/can-utils).

**Passo 3.** Adicione informações de configuração para os dois reTerminals. Abra o arquivo **/boot/config.txt** com um editor e salve-o após adicionar `dtoverlay=seeed-can-fd-hat-v2` ao final, depois reinicie o reTerminal.

:::note
Sem uma EEPROM de ID no “hat” especificando o hardware, o kernel Linux não descobrirá automaticamente o Controlador CAN na interface SPI. Para carregar o driver apropriado, você deve especificar as configurações de device tree overlay na inicialização.
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**Passo 4.** A interface CAN se comporta exatamente como uma interface de rede. Você deve conseguir obter várias estatísticas usando ```ifconfig -a``` (configuração de interface).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

Use o comando `cangen can0 -v` para enviar dados aleatórios e testar se a comunicação CAN está funcionando bem.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**Passo 5.** Você pode ativar manualmente a interface CAN usando:

```sh
sudo ip link set can0 up type can bitrate 500000
```

**Passo 6.** Baixe o [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple) para o reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

Um dos reTerminals compila e executa o código que envia os dados.

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

Aqui está o código **cantransmit.c** para referência.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s; 
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 frame.can_id = 0x555;
 frame.can_dlc = 5;
 sprintf(frame.data, "Hello");

 if (write(s, &frame, sizeof(struct can_frame)) != sizeof(struct can_frame)) {
  perror("Write");
  return 1;
 }

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

Outro reTerminal compila e executa o código que recebe os dados.

```sh
gcc canreceive.c -o canreceive
```

Aqui está o código **canreceive.c** para referência.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 nbytes = read(s, &frame, sizeof(struct can_frame));

  if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

Você pode ver que os dois reTerminals enviam e recebem dados com sucesso através da interface CAN.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

Além da leitura, você pode querer filtrar quadros CAN que não sejam relevantes. Isso acontece no nível do driver e pode ser mais eficiente do que ler cada quadro em um aplicativo em modo de usuário.

```sh
gcc canfilter.c -o canfilter
```

Aqui está o código **canfilter.c** para referência.

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Filter Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 /*
 To set up a filter, initialise a single can_filter structure or array of 
 structures and populate the can_id and can_mask. The call setsockopt():
 */
 struct can_filter rfilter[1];

 rfilter[0].can_id   = 0x550;
 rfilter[0].can_mask = 0xFF0;
 //rfilter[1].can_id   = 0x200;
 //rfilter[1].can_mask = 0x700;

 setsockopt(s, SOL_CAN_RAW, CAN_RAW_FILTER, &rfilter, sizeof(rfilter));

 nbytes = read(s, &frame, sizeof(struct can_frame));

 if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 // And finally, if there is no further need for the socket, close it:
 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

:::note
A maioria dos controladores CAN possui filtros de aceitação e máscaras incluídos em silício (hardware). Infelizmente, a arquitetura atual realiza a filtragem no kernel e não é tão ideal, mas ainda é melhor do que passar todos os quadros para o aplicativo em modo de usuário.
:::

### **Comunicação RS485**

RS485, também conhecido como TIA-485(-A) ou EIA-485, é um padrão que define as características elétricas de drivers e receptores para uso em sistemas de comunicações seriais. A sinalização elétrica é balanceada e sistemas multiponto são suportados. Redes de comunicação digital que implementam o padrão podem ser usadas de forma eficaz em longas distâncias e em ambientes eletricamente ruidosos. Vários receptores podem ser conectados a essa rede em um barramento linear multiponto.

**Materiais Necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS485 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) e cabo

Este exemplo apresenta como usar o RS485 no reTerminal E10-1.

**Passo 1.** Como a função RS485 usa ttyS0, é necessário fechar a função de interação do sistema ttyS0 antes de iniciar.

```sh
sudo raspi-config
```

Selecione **Interface Options**, **Serial port** sucessivamente.

Na próxima tela, será perguntado se você deseja o shell de login acessível via serial, selecione **No**.

Em seguida, em “Do you want to use serial port hardware”, certifique-se de que **Yes** esteja selecionado.

Depois que o reTerminal fizer as alterações, você verá o seguinte texto aparecer na tela.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**Passo 2.** Use um cabo para conectar o reTerminal E10-1 ao computador pela interface RS485.

A -> A
B -> B
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**Passo 3.** Use o comando `dmesg | grep tty` para visualizar o nome da porta serial. Determine o nome da porta serial para a comunicação RS485 com o computador. Isso pode variar de computador para computador. Em geral, é **ttyS0**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**Passo 4.** Baixe o [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple) para o reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

Abra o software de porta serial no computador. Execute o comando `sudo python3 rs485.py` para obter os seguintes efeitos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

Ao mesmo tempo, você também pode enviar dados de 16 bytes para o reTerminal por meio do assistente de porta serial dentro de 5 segundos após receber a mensagem.

Aqui está o código **rs485.py** para referência.

```c
import serial, time
try:
    import RPi.GPIO as GPIO
except RuntimeError:
    print("Error importting Rpi.GPIO")

GPIO.setmode(GPIO.BCM)

ser = serial.Serial()
ser.port = "/dev/ttyS0"
channel1 = 25
channel2 = 17

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    #number of bits per bytes
ser.parity = serial.PARITY_NONE    #set parity check
ser.stopbits = serial.STOPBITS_ONE #number of stop bits

ser.timeout = 0.5                  #non-block read 0.5s
ser.writeTimeout = 0.5             #timeout for write 0.5s
ser.xonxoff = False                #disable software flow control
ser.rtscts = False                 #disable hardware (RTS/CTS) flow control
ser.dsrdtr = False                 #disable hardware (DSR/DTR) flow control

GPIO.setup(channel1,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(channel2,GPIO.OUT,initial=GPIO.LOW)

try:
    ser.open()
except Exception as ex:
    print ("open serial port error " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() #flush input buffer
        ser.flushOutput() #flush output buffer
        GPIO.output(channel1,GPIO.HIGH)
        GPIO.output(channel2,GPIO.HIGH)
        time.sleep(0.1)
        #write data
        ser.write("rs485 communication is on, you can try to send data...\n".encode())
        print("Sent successfully\n")
        GPIO.output(channel2,GPIO.LOW)
        time.sleep(5)  #wait 5s
        #read data
        response = ser.read(16)
        print("read 16 byte data:")
        print(response)
        ser.close()
    except Exception as e1:
        print ("communicating error " + str(e1))
else:
    print ("open serial port error")
```

### **Comunicação RS232**

RS-232, ou Recommended Standard 232, é um padrão originalmente introduzido em 1960 para transmissão de dados por comunicação serial. Ele define formalmente sinais conectando entre um DTE e um DCE. Em comparação com interfaces posteriores, como RS-422, RS-485 e Ethernet, o RS-232 tem menor velocidade de transmissão, comprimento máximo de cabo mais curto, maior variação de tensão, conectores padrão maiores, nenhuma capacidade multiponto e capacidade multidrop limitada.

**Materiais Necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS232 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) e cabo

Este exemplo apresenta como usar o RS232 no reTerminal E10-1.

**Passo 1.** Como a função RS485 usa ttyS0, é necessário fechar a função de interação do sistema ttyS0 antes de iniciar.

```sh
sudo raspi-config
```

Selecione **Interface Options**, **Serial port** sucessivamente.

Na próxima tela, será perguntado se você deseja o shell de login acessível via serial, selecione **No**.

Em seguida, em “Do you want to use serial port hardware”, certifique-se de que **Yes** esteja selecionado.

Depois que o reTerminal fizer as alterações, você verá o seguinte texto aparecer na tela.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**Passo 2.** Use um cabo para conectar o reTerminal E10-1 ao computador pela interface RS232.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**Passo 3.** Use o comando `dmesg | grep tty` para visualizar o nome da porta serial. Determine o nome da porta serial para a comunicação RS232 com o computador. Isso pode variar de computador para computador. Em geral, é **ttyS0**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**Passo 4.** Baixe o [código](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple) para o reTerminal.

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

Um dos reTerminals compila e executa o código que envia os dados.

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

Aqui está o código **rs232_send.py** para referência.

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',              # Please modify here according to the serial port name displayed by reTerminal
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
counter=0
try:
        print("rs232 starts now!\n")
        ser.write("rs232 starts now!\n".encode())
        while 1:
                ser.write(("Write counter:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()
```

Outro reTerminal compila e executa o código que recebe os dados.

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

Aqui está o código **rs232_receive.py** para referência.

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
try:
    print("Start receiving data now!\n")
    while 1:
            x=ser.readline()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

### **Ethernet**

**Materiais Necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

Este exemplo apresenta como testar a conexão ethernet no reTerminal E10-1.

**Passo 1.** Baixe o **iperf3** para o reTerminal e para o computador.

```sh
git clone https://github.com/esnet/iperf.git
```

**Passo 2.** Use os seguintes códigos para instalar o **iperf3**

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**Passo 3.** Use o reTerminal como servidor.

```sh
iperf3 -s
```

Use um computador para testar a velocidade de rede conectada ao reTerminal. Neste momento, mantenha o computador e o reTerminal na mesma rede local.

```sh
iperf3 -c 192.168.xxx.xxx
```

*O endereço "192.168.xxx.xxx" acima é o endereço do reTerminal.*

Por exemplo, na minha configuração o endereço IP do reTerminal é ```192.168.31.187```:

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

Se você precisar concluir mais funções de teste de rede, pode consultar o uso de parâmetros de consulta no site do projeto [iperf](https://github.com/esnet/iperf).

### **WM1302 (USB/SPI) LoRaWAN Gateway**

**Materiais Necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN Gateway Module (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

A diferença entre o módulo USB e SPI é mostrada abaixo:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

Este exemplo apresenta como usar o WM1302 LoRaWAN Gateway no reTerminal E10-1.

**Passo 1.** Instale o módulo WM1302 no reTerminal E10-1 e depois fixe-o com parafusos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

Em seguida, gire o botão ao lado do ventilador para PCIE.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**Passo 2.** digite `sudo raspi-config` na linha de comando para abrir a Ferramenta de Configuração de Software do Raspberry Pi:

- Selecione Interface Options
- Selecione SPI e depois selecione **Yes** para habilitá-lo
- Selecione I2C e depois selecione **Yes** para habilitá-lo
- Selecione Serial Port, depois selecione **No** para "Would you like a login shell..." e selecione **Yes** para "Would you like the serial port hardware..."

Depois disso, reinicie o Raspberry Pi para garantir que essas configurações funcionem.

**Passo 3.** Baixe o [código WM1302](https://github.com/Lora-net/sx1302_hal) para o reTerminal e compile-o.

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Passo 4.** Configure o script de reset. Primeiro baixe o arquivo para **sx1302_hal/packet_forwarder** usando o comando

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

Em seguida, execute o seguinte teste de código de acordo com a sua versão do WM1302.

```sh
USB version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image20.jpg"/></div>

**Passo 5.** Registre-se no [site TTN](https://www.thethingsnetwork.org/) e faça login na sua conta. Se você não tiver uma, registre-se. Então entre na interface de Gateway e clique em "Get Starting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

Selecione sua região.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

Escolha "Go to gateways"

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

Clique em **Add gateway** para adicionar o dispositivo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

Entre eles, o valor de **Gateway EUI** será exibido no log quando o teste for executado no **passo 4**. O Frequency plan em Lora options (tomando a versão europeia como exemplo) selecione **Europe 863-870 MHz (SF9 for RX2 - recommended)**. Em seguida, clique em **Create gateway**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**Passo 6.** (Tomando a versão europeia como exemplo)
Se for versão SPI, edite **global_conf.json.sx1250.EU868** em **sx1302_hal/packet_forwarder**.

Se for versão USB, edite **global_conf.json.sx1250.EU868.USB** em **sx1302_hal/packet_forwarder**.

Procure por **gateway_conf** no arquivo correspondente.

- Em seguida, altere o **gateway_ID** para o **Gateway EUI** preenchido na página da web.

- **server_address** é modificado para o **Gateway Server address** na página da web.

- Tanto **serv_port_up** quanto **serv_port_up** são modificados para **1700**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**Passo 7.** Execute novamente o comando do **passo 4** e você poderá ver as informações de conexão do dispositivo na página da web depois.

```sh
USB version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image25.jpg"/></div>

:::note
O tutorial acima é baseado na versão europeia do WM1302. Se você estiver usando a versão dos EUA do WM1302, os passos são geralmente os mesmos, mas os arquivos a serem modificados e executados no tutorial serão diferentes. O nome do arquivo se refere à versão que você comprou e às [páginas a seguir](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder).
:::

### **Expansão de Disco Rígido**

**Materiais Necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Conector M.2 chave B x1

Este exemplo apresenta como instalar e verificar o funcionamento do disco rígido no reTerminal E10-1.

**Passo 1.** Abra a tampa traseira do reTerminal E10-1, insira o M.2 SSD no Conector Mini-PCIe e fixe-o com parafusos. Feche a tampa traseira, conecte o reTerminal e ligue-o.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

Em seguida, gire o botão ao lado do ventilador para M.2.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**Passo 2.** Insira o comando para ver se o dispositivo de armazenamento SSD foi detectado.

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**Passo 3.** Também podemos usar o comando dd para testar a velocidade de leitura e gravação do disco rígido.

```sh
Read
$ sudo dd if=/dev/sda3 of=/dev/null bs=512k count=500
```

```sh
Write
$ sudo dd if=/dev/zero of=/dev/sda3 bs=512k count=500
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/28.jpg"/></div>

:::note
Certifique-se de que você está usando M.2 chave B.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### Formatar Disco Rígido

:::caution
A etapa a seguir apagará todos os seus dados do SSD que você conectou ao reTerminal E10-1, e também se você tiver selecionado a mídia de unidade errada, portanto, certifique-se de ter seguido cuidadosamente as etapas abaixo e de entender o propósito de cada uma delas.
:::

- **Ferramentas de Software usadas**: ```lsblk```, ```fdisk```, ```mkfs```, ```mount```, ```umount```

**Passo 1.** Encontre o Nome do dispositivo SSD
Depois de conectar o seu SSD no reTerminal E10-1 e anexá-lo ao reTerminal, abra o terminal quando o sistema tiver sido ligado e digite o seguinte comando:

```sh
lsblk
```

você deverá ver algo semelhante:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**Passo 2.** Usando fdisk para particionar seu SSD

:::caution
Você perderá os dados no SSD que anexou ao reTerminal E10-1 após seguir esta etapa.
:::

Seguindo os passos acima, digite o seguinte comando no terminal, observe o /dev/**sdX** onde o **X** é o **Nome do dispositivo SSD** que você escolheu para ser formatado, certifique-se de que não há outras unidades USB conectadas ao reTerminal, a menos que você tenha certeza do nome correto do dispositivo.

```sh
sudo fdisk /dev/sdX
```

Por exemplo, no meu caso:

```sh
sudo fdisk /dev/sda
```

você deverá ver algo semelhante ao mostrado abaixo:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

No prompt do fdisk:

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

Primeiro digite **```d```** para excluir as partições no dispositivo SSD.

Em seguida, digite **```n```** para criar uma nova partição no dispositivo SSD.

Depois disso você deve ver a seguinte mensagem:

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

Digite **```p```** para criar uma partição primária, seguido de **```1```**.

Então, para o primeiro setor, você pode pressionar **ENTER** para o padrão de usar o setor inicial da unidade, ou você pode especificar onde iniciar a partição 1 no seu SSD em um local de setor específico. No meu caso eu apenas pressionei Enter para o valor padrão.

Em seguida, selecione o último setor para a partição 1, se você quiser utilizar todo o espaço da unidade para a partição 1 apenas pressione **ENTER**, ou você pode digitar o local de setor específico para o final da partição 1, isso também significa o tamanho de armazenamento da partição 1 que você está criando.

Depois pressione **```Y```** para remover a assinatura.

Em seguida, pressione **```w```** para gravar as alterações e sair do prompt do fdisk.

Aqui está um exemplo do processo:
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**Passo 3.** Formatar sua partição SSD para o formato ext4
Agora que você criou uma(s) partição(ões) para o seu SSD, você precisa formatar a(s) partição(ões) para o formato ext4 para poder montá-la(s) e usá-la(s). Para fazer isso usando o mkfs.ext4:

```bash
sudo mkfs.ext4 /dev/sdXX
```

de forma semelhante, onde ```sdXX``` é o nome do dispositivo do seu SSD, no meu caso eu usei ```/dev/sda1``` assim:

```bash
sudo mkfs.ext4 /dev/sda1
```

e em ```Proceed anyway? (y,N)``` digite **```y```** e **```ENTER```**, depois aguarde alguns segundos até que o processo termine.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**Passo 4.** Montar a partição
Agora você pode montar o SSD para usar como disco externo para armazenamento extra.

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

onde **"YOUR USER NAME"** é o nome de usuário do seu sistema reTerminal e **"THE NAME YOU WANT TO MOUNT THE DRIVE"** é o nome que você cria para montar sua unidade, o **/dev/sdXX** é o nome do dispositivo da partição SSD que você quer montar.

por exemplo, no meu caso:

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

Para verificar se o SSD foi montado com sucesso:

```bash
lsblk
```

você deve ver uma saída semelhante à minha, onde o **```/dev/sda1```** está montado em **```/media/seeed/SSD```**:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **Módulo 4G EC25-EUX**

**Materiais Necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- Módulo 4G EC25-EUX x1
- Cartão SIM x1

**Passo 1.** Abra a tampa traseira do reTerminal E10-1 e, em seguida, instale o EC25-EUX e o cartão SIM no reTerminal E10-1.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

Em seguida, gire o botão ao lado do ventilador para PCIE.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**Passo 2.** Verifique se o EC25-EUX foi detectado usando ```lsusb```

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**Passo 3.** Instalar a ferramenta de comunicação serial minicom.

```sh
sudo apt install minicom
```

**Passo 4.** Conectar o módulo 4G EC25-EUX através do minicom.

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

uma vez que a conexão serial for aberta, digite AT e pressione 'Enter', e você deverá ver OK.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**Passo 5.** Habilitar o módulo 4G para se conectar à rede 4G

Por favor, insira o cartão SIM habilitado para 4G no slot do cartão SIM no suporte da bateria Li-Po, onde o slot do cartão SIM suporta cartão micro SIM, então, se você tiver um cartão nano SIM, precisará encontrar um adaptador de cartão micro SIM para converter para micro SIM.  

Na mesma janela serial do minicom, por favor digite:

```sh
AT+QCFG="usbnet"
```

Ele retornará algo como ```+QCFG: "usbnet",0,``` mas precisamos que isso esteja definido como 1 (modo ECM), então insira o seguinte comando:

```sh
AT+QCFG="usbnet",1
```

Em seguida, insira o seguinte comando para forçar o modem a reiniciar:

```sh
AT+CFUN=1,1
```

Então você pode reiniciar ou esperar um pouco para o módulo obter internet da sua operadora de cartão SIM.

Você também pode usar o comando `ifconfig` para consultar o status de rede do reTerminal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **Áudio**

Para atender às necessidades multimídia de diferentes usuários, um módulo de alto-falante e dois módulos de microfone são instalados dentro do reTermnal E10-1 para atender às necessidades de reprodução de som e gravação.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/028.jpg"/></div>

**Materiais Necessários**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

**Passo 1.** Baixar e instalar o driver.

```sh
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
```

**Passo 2.** Adicionar itens de configuração. Adicione `dtoverlay=seeed-2mic-voicecard` ao `/boot/config.txt`. Em seguida, reinicie o dispositivo.

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

para verificar se você modificou o `/boot/config.txt` você pode usar o editor de texto `nano` para abrir o arquivo e rolar até a última linha para verificar:

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

Depois que isso for adicionado ao `/boot/config.txt` você pode reiniciar agora:

```bash
sudo reboot
```

Após esperar pela reinicialização, use o comando `arecord -l` para visualizar o dispositivo de gravação.

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

Como mostrado na figura acima, **card 0 device 0** é o dispositivo que precisamos usar para gravar.

**Passo 3.** De acordo com as informações acima, use o comando para realizar a operação de gravação e salvamento.

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**Análise dos Parâmetros**

- **-D** especifica o dispositivo de gravação, 0,0 significa card 0 device 0, que é bcm2835-i2s-wm8960-hifi wm8960-hifi-0.
- **-d** especifica a duração da gravação, em segundos.
- **-f** especifica o formato de gravação, suporta apenas cd, cdr, dat.
- **-r** especifica a taxa de amostragem em Hz.
- **-c** especifica o número de canais.
- **-t** especifica o formato de arquivo gerado.

:::

**Passo 4.** Verificar o dispositivo de reprodução.

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**Passo 5.** Ajustar o volume apropriado para reproduzir o som.

```sh
sudo alsamixer
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image38.jpg"/></div>

```sh
sudo aplay -Dhw:0 test.wav
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image39.jpg"/></div>

## FAQ

1. Que tipo de baterias 18650 são compatíveis?

Resposta: Panasonic NCR18650B 3.6V 3400mAh é recomendada.

2. As baterias precisam ter sua própria proteção contra sobrecorrente/subtensão/sobretensão?

Resposta: Não, porque o reTerminal E10-1 possui circuito de proteção da bateria

3. Qual modelo de controladora CAN e RS485 é usado?

Resposta:

- Controladora 485: TP485E
- Controladora CAN: MCP2518FDT-E/QBB

4. Instalei o E10 ontem, a informação da bateria (nível de carga) está correta? mostra em vermelho (0%) mesmo se eu acabei de tirá-las do carregador.

```
Kernel: 5.10.103-v8+ aarch64 bits: 64 Console: tty 0 Distro: Debian GNU/Linux 10
```

Recurso de exibição de energia: ainda não desenvolvido, mas sua opinião foi ouvida e vamos programar o desenvolvimento desse recurso

5. A extensão reTerminal fornece outra porta ethernet (separada) --> então temos duas portas ethernet?

Essas duas portas podem ser usadas simultaneamente sem afetar uma à outra.

6. Os RS232 e RS485 são independentes/separados (às vezes, em alguns hardwares, você só pode usar um ...)

Você só pode usar RS232 ou RS485 de cada vez.


## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
