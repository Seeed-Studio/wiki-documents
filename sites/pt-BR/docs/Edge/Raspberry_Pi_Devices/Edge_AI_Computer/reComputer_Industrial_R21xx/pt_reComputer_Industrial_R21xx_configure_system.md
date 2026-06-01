---
description: Aprenda como configurar e testar componentes de hardware na série reComputer Industrial R21xx após instalar os dispositivos. Este wiki abrange mapeamento de GPIO, teste do LED USER, comunicação SPI, varredura de Wi‑Fi e Bluetooth, LoRa®, 5G，4G, RS485, RS232, teste de DI/DO e UPS para desligamento seguro.
title: Configurar reComputer Industrial R21xx
keywords:
  - Raspberry pi
  - Controlador de Borda
  - reComputer Industrial R21xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_R21xx_configure_system
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-04-24'
url: https://wiki.seeedstudio.com/pt-br/recomputer_industrial_R21xx_configure_system/
---

## Visão geral

Aprenda como configurar e testar componentes de hardware na série reComputer Industrial R21xx após instalar os dispositivos. Este wiki abrange mapeamento de GPIO, teste do LED USER, comunicação SPI, varredura de Wi‑Fi e Bluetooth, LoRa®, 4G, 5G, RS485, RS232, CAN, teste de DI/DO, UPS para desligamento seguro e mais.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Consultar mapeamentos e offsets de GPIO

Para consultar mapeamentos e offsets de GPIO, siga estas etapas:

1. Copie e cole o seguinte comando para consultar os mapeamentos de GPIO:

```bash
cat /sys/kernel/debug/gpio
```

**Este comando exibirá os mapeamentos e offsets de GPIO**, fornecendo informações essenciais para depurar ou configurar os pinos de GPIO.

## Teste do LED USER

Fornecemos LEDs em três cores: vermelho, azul e verde para uso dos usuários. Você pode entrar no diretório /sys/class/leds/ para visualizar：

**1. Navegue até o diretório do LED**  

```bash
cd /sys/class/leds/
ls
```

Use o seguinte comando para acender o LED da cor correspondente.

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

Isso **acenderá** o LED correspondente.

**3. Desligar os LEDs (opcional)**  
Para **desligar** um LED específico, use:

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## Testando a comunicação SPI

Para testar a comunicação SPI curto‑circuitando os pinos MISO e MOSI do módulo TPM, siga estas etapas:

1. Clone o repositório spidev-test:

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. Acesse o diretório spidev-test:

```bash
cd spidev-test
```

3. Compile o arquivo spidev_test.c:

```bash
gcc spidev_test.c -o spidev_test
```

4. Execute o programa spidev_test com o seguinte comando:

```bash
./spidev_test -D /dev/spidev10.0 -v -p hello
```

Este comando testa a comunicação SPI no dispositivo SPI especificado (**/dev/spidev10.0**) com saída detalhada ( -v ) e envia a mensagem "hello" (**-p hello**).
Ao curto‑circuitar os pinos MISO e MOSI do módulo TPM, você está efetivamente criando um cenário de loopback, em que os dados enviados em MOSI são recebidos em MISO. Essa configuração permite testar a comunicação SPI sem um dispositivo real conectado.

## Varredura de Wi‑Fi

Para listar as redes Wi‑Fi disponíveis e seus detalhes, execute:  

```bash
sudo iwlist wlan0 scan
```

- Este comando faz a varredura de todas as redes Wi‑Fi próximas e exibe seus SSIDs, intensidade de sinal e tipo de criptografia.  

## Varredura de Bluetooth  

Para procurar dispositivos Bluetooth, siga estas etapas:  

**Abra a interface de controle do Bluetooth:**  

```bash
sudo bluetoothctl
```

Este comando abrirá a interface de controle do Bluetooth. A partir daí, você pode executar comandos adicionais para procurar dispositivos Bluetooth próximos.

**Habilite a varredura:**  

```bash
scan on
```

Este comando iniciará a varredura de dispositivos Bluetooth próximos. Você pode então usar outros comandos dentro da interface ***bluetoothctl*** para interagir com dispositivos Bluetooth, como parear ou conectar‑se a eles.

## LoRa® via Mini‑PCIe

### Configuração de LoRa® SPI  

Após instalar o LoRa® SPI no slot 2 Mini‑PCIe, é possível configurar o LoRa® SPI, seguindo estas etapas:

1. Clone o repositório **SX1302_HAL**:

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. Navegue até o diretório clonado:

```bash
cd sx1302_hal
```

3. Modifique o arquivo de configuração:

Abra o arquivo de configuração do dispositivo I2C:  

```bash
sudo nano ./libloragw/inc/loragw_i2c.h
```

Altere esta linha:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

Para:  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

Altere **#define I2C_DEVICE "/dev/i2c-1"** para **#define I2C_DEVICE "/dev/i2c-2".**
Pressione **ctrl+x** para sair, pressione **y** para salvar as alterações e, em seguida, pressione **Enter** para voltar à página da linha de comando.

4. 4.Adicione o arquivo packet_forwarder/reset_lgw.sh:

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

Adicione o código de execução:

```bash
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=623    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

Pressione **ctrl+x** para sair, pressione **y** para salvar as alterações e, em seguida, pressione **Enter** para voltar à página da linha de comando.

5. Modifique o código de configuração:

```bash
sudo vim ./tools/reset_lgw.sh
```

Atualize as configurações dos pinos:

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Comente, respectivamente, as linhas 18, 29, 35, 42, 53 e 54:

```bash
......
# echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
......
# echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
......
# echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."
......
# echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
# echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
```

Pressione  ctrl+x  para sair, pressione  y  para salvar as alterações e, em seguida, pressione  Enter  para voltar à página da linha de comando.

6. substitua a porta SPI padrão do módulo LoraWAN® no arquivo de configuração global_conf.json.sx1250.US915 (os arquivos de configuração são selecionados com base no módulo que você está usando):

```bash
sudo nano packet_forwarder/global_conf.json.sx1250.US915
```

Modifique o parâmetro com_path, altere  ***"com_path": "/dev/spidev0.0"*** para  ***"com_path": "/dev/spidev2.0"***.

7. Compile o código:

```bash
sudo make
```

Essas etapas irão configurar o LoRa® SPI e executar o packet forwarder com o arquivo de configuração especificado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.1_lora_spi_1.png" style={{width:800, height:'auto'}}/></div>

### Configuração de LoRa® USB

Para LoRa® USB, os comandos anteriores permanecem os mesmos que para LoRa® SPI. No entanto, o comando final precisa ser alterado para:

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

Este comando especifica o arquivo de configuração a ser usado para LoRa® USB.

## Celular 5G via M.2 B‑KEY

Para interagir com um módulo 5G/4G usando comandos AT via minicom, siga estas etapas:

1. Crie um novo arquivo power_5g.sh：

```bash
nano power_5g.sh
```

Abra com sudo nano e insira o seguinte comando, depois pressione ***ctrl+x*** para salvar e sair.

```bash
#!/bin/bash

RESET_PIN=645
POWER_PIN=639

if [ ! -d "/sys/class/gpio/gpio$RESET_PIN" ]; then
    echo $RESET_PIN > /sys/class/gpio/export
fi

if [ ! -d "/sys/class/gpio/gpio$POWER_PIN" ]; then
    echo $POWER_PIN > /sys/class/gpio/export
fi

echo "out" > /sys/class/gpio/gpio$RESET_PIN/direction
echo "out" > /sys/class/gpio/gpio$POWER_PIN/direction

echo 1 > /sys/class/gpio/gpio$RESET_PIN/value
echo 1 > /sys/class/gpio/gpio$POWER_PIN/value

echo "Start to reboot 5g module"

echo 0 > /sys/class/gpio/gpio$RESET_PIN/value
sleep 0.05
echo 0 > /sys/class/gpio/gpio$POWER_PIN/value

echo "5g module reboot completed"
```

2. Execute o arquivo:

```bash
sudo ./power_5g.sh
```

Após 10-15 segundos (leva um tempo para o módulo ligar e enumerar o USB), verifique se o nó do dispositivo aparece:

```bash
ls /dev/ttyUSB*
```

Saída /dev/ttyUSB0, etc.:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
Abra o minicom com a porta serial e taxa de baud apropriadas:

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Este comando abre o minicom com a porta serial especificada (***/dev/ttyUSB2***) a uma taxa de baud de 115200.

1. Quando o minicom estiver aberto, você pode começar a enviar comandos AT para o módulo 4G. Por exemplo:

```bash
AT
```

Este comando verifica se o módulo está respondendo. Você deve receber uma resposta ***"OK"*** se o módulo estiver funcionando corretamente.

2. Para discar um número de telefone usando o módulo 4G, você pode usar o comando ATD seguido do número de telefone:

```bash
ATD<phone_number>;
```

Substitua **phone_number** pelo número de telefone desejado que você quer discar.
Certifique-se de incluir um ponto e vírgula ; no final do comando para indicar o fim do número de telefone.

## 4G Cellular via Mini-PCIe

Crie um novo arquivo power_4g.sh:

```bash
sudo nano power_4g.sh
```

Abra com sudo nano e insira o seguinte comando, depois pressione ctrl+x para salvar e sair.

```bash
# SIM_MUX_SEL
echo  643  >  export
echo  out  >  gpio643/direction
echo  0  >  gpio643/value
```

Execute o arquivo:

```bash
sudo ./power_4g.sh
```

Após 10-15 segundos (leva um tempo para o módulo ligar e enumerar o USB), verifique se o nó do dispositivo aparece:

```bash
ls /dev/ttyUSB*
```

Saída /dev/ttyUSB0.
Confirme a ação real do GPIO:

```bash
cat /sys/class/gpio/gpio645/value # should be 0
cat /sys/class/gpio/gpio639/value # should be 0
```

Ambos os valores são 0 → o script foi corretamente puxado para baixo e o módulo está em estado de funcionamento.
Entre no minicom para enviar comandos:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

● Pressione ***Ctrl+A,Z,E*** em sequência. Primeiro envie AT para testar se está conectado. Se aparecer OK, a conexão foi bem-sucedida.
Após executar o seguinte comando, o módulo será reiniciado automaticamente. Se você não sair do minicom, poderá ver as informações de configuração correspondentes.
Acesso à Internet discado ECM:

```bash
AT+QCFG="usbnet",1
```

Até que a última linha mostre OK, será bem-sucedido.

> Note
> O dispositivo precisa aguardar por um tempo e então você pode visualizar o endereço IP de usb0 em ifconfig.

Testar o status da rede e a comunicação：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Teste de RS485

O reComputer Industrial R21xx inclui **2x portas RS485**. Abaixo estão suas correspondentes **portas COM** e **arquivos de dispositivo**:  

| **Número de portas RS485** | **Porta COM** | **Identificação na serigrafia** | **Arquivo de dispositivo** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-3**               | COM3         | A3/B3/GND3           | `/dev/ttyACM2`  |
| **RS485-4**               | COM4         | A4/B4/GND4           | `/dev/ttyACM3`  |

Para testar a função RS485, você pode seguir os passos abaixo (tomando RS485_1 e RS485_2 como exemplos):

1. Conecte os pinos A e B de RS485_1 e RS485_2.
2. Abra o minicom em duas janelas de terminal, respectivamente:

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 Se houver uma placa de expansão, o número precisa ser movido uma casa para trás, por exemplo ***/dev/ttyAcM2***, ***/dev/ttyAcM3***.
:::

3. As seguintes operações precisam ser realizadas em ambos os ACMs abertos:

- Pressione ***Ctrl+A***, depois pressione ***Z***, e a interface Minicom Command Summary aparecerá:
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- Pressione ***O*** novamente para abrir a configuração, selecione Serial port setup e pressione ***Enter***; Abra todas as interfaces relacionadas a RS485, pressione ***H/I/J/K/L*** em sequência para abrir;
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- Depois que todos os "YES" forem exibidos, pressione Enter para voltar e, em seguida, selecione Exit para sair.

:::note

Tomando ACM2 e ACM3 como exemplo:
Se você quiser enviar de ACM2 para ACM3, ACM2 precisa ser configurado novamente: ***ctrl+A*** , depois pressione ***Z*** e depois ***E*** , e então inicie o comando de escrita na porta serial. Neste momento, você pode imprimir strings em ACM2 à vontade, e poderá ver o conteúdo de ACM2 em ACM3 ao mesmo tempo;
Por outro lado, se você quiser enviar de ACM3 para ACM2, ACM3 precisa ser configurado novamente:  ***ctrl+A***, depois pressione  ***Z***  e depois  ***E*** , e então inicie o comando de escrita na porta serial. Neste momento, você pode imprimir strings em ACM3 à vontade, e poderá ver o conteúdo de ACM3 em ACM2 ao mesmo tempo. Como mostrado na figura.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## Teste de RS232

O reComputer Industrial R21xx inclui **2x portas RS232**, e as correspondentes **portas COM** e **arquivos de dispositivo** são os seguintes:

| **Número de portas RS232** | **Porta COM** | **Identificação na serigrafia** | **Arquivo de dispositivo** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

Como o RS232 é comunicação full-duplex, faça um curto-circuito diretamente entre TX e RX do RS232 para realizar um teste de loopback.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/21-rs232.png" style={{width:800, height:'auto'}}/></div>

Você precisa abrir dois terminais, ACM1 se a placa de expansão estiver conectada, e ACM2 se a placa de expansão não estiver conectada:
**Terminal 1:***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

Se a placa de expansão não estiver conectada, você precisa alterar ***/dev/ttyACM1*** para ***/dev/ttyACM0*** .

**Terminal 2:**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```

**Terminal 3:**

```bash
printf "hello seeed\r\n" > /dev/ttyACM0
printf "hello seeed\r\n" > /dev/ttyACM1
```

O Terminal 1 exibirá o conteúdo solicitado pelo Terminal 2 para ser impresso.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/232_test.png" style={{width:800, height:'auto'}}/></div>

## Teste de DI (Entrada Digital)

O reComputer Industrial R21xx contém 4x portas DI, o usuário pode configurar essas portas de acordo com as necessidades reais.

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Número de portas</th>
        <th>Portas DI</th>
        <th>GPIO estendido correspondente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DI1</td>
        <td>GPIO588</td>
      </tr>
      <tr>
        <td>DI2</td>
        <td>GPIO589</td>
      </tr>
      <tr>
        <td>DI3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DI4</td>
        <td>GPIO595</td>
      </tr>
    </tbody>
  </table>
</div>

O tipo de entrada das portas DI é PNP. Ele suporta tensão de entrada de 5VDC~24VDC, corrente - 1000mA.
Para testar a funcionalidade de DI, você pode seguir estes passos para testá-la:

1. A conexão entre a porta DI do reComputer Industrial R21xx e a carga externa foi concluída.
2. Insira o seguinte comando para obter o status do GPIO：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. Quando o nível externo for alto, o valor de ***/sys/class/gpio/gpio588/value*** é 0; quando o nível externo for baixo, ***/sys/class/gpio/gpio588/value*** é 1.

## DO (Saída Digital)

O reComputer Industrial R21xx contém 4x portas DO, o usuário pode configurar essas portas de acordo com as necessidades reais.

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Número de portas</th>
        <th>Portas DI</th>
        <th>GPIO estendido correspondente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DO1</td>
        <td>GPIO638</td>
      </tr>
      <tr>
        <td>DO2</td>
        <td>GPIO637</td>
      </tr>
      <tr>
        <td>DO3</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO635</td>
      </tr>
    </tbody>
  </table>
</div>

O tipo de saída das portas DO é transistor. Ele suporta tensão de saída - abaixo de 60 VDC, capacidade de corrente - 500 mA.
Para testar a funcionalidade de DO, você pode seguir estes passos para testá-la:

1. A conexão entre a porta DO do reComputer Industrial R21xx e a carga externa foi concluída.
2. Insira o seguinte comando para definir a saída para nível alto ou nível baixo：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. Quando o nível externo estiver alto, o valor de  /sys/class/gpio/gpio638/value   será 0; quando o nível externo estiver baixo,  /sys/class/gpio/gpio638/value  será 1.

## Teste de CAN

### Teste de loopback

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Número de portas</th>
        <th>Portas DI</th>
        <th>GPIO estendido correspondente</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">4</td>
        <td>CAN-0_H/CAN-0_</td>
        <td>can0</td>
      </tr>
      <tr>
        <td>CAN-1_H/CAN-1_L</td>
        <td>can1</td>
      </tr>
    </tbody>
  </table>
</div>

1. Use dois fios DuPont para fazer um curto-circuito entre H-H e L-L de can0 e can1 para formar um teste de loop mínimo.

```bash
CAN-0_H─────●───── CAN-0_H
CAN-1_H─────●───── CAN-1_H
```

2. Confirme que as duas interfaces de rede can0 e can1 realmente aparecem no sistema para evitar que o driver não seja carregado:

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_1.png" style={{width:800, height:'auto'}}/></div>

3. Configure as duas interfaces CAN para 500 kbit/s e coloque-as online, prontas para enviar e receber dados (defina-as para nível baixo por segurança):

```bash
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 up type can bitrate 500000
sudo ip link set can1 up type can bitrate 500000
```

4. Confirme o status dos pinos:

```bash
ip -d link show can0
ip -d link show can1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_2.png" style={{width:800, height:'auto'}}/></div>

5. Baixe e instale can-utils para usar ferramentas essenciais como candump e cansend.

```bash
sudo apt install can-utils
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_3.png" style={{width:800, height:'auto'}}/></div>

6. Enquanto monitora can0, envie quadros a partir de can1. Se você conseguir ver a mensagem, significa que o caminho está normal.

```bash
# Terminal A
candump can0
# Terminal B
cansend can1 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_4.png" style={{width:800, height:'auto'}}/></div>

7. Inversamente, você pode monitorar can1 enquanto envia quadros a partir de can0. Se você conseguir ver a mensagem, significa que o caminho está normal.

```bash
# Terminal A
candump can1
# Terminal B
cansend can0 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_5.png" style={{width:800, height:'auto'}}/></div>

8. Se você quiser tornar os inícios subsequentes mais simples, pode escrever o comando de inicialização em um script. Você só precisa executá-lo uma vez na inicialização para puxar a interface automaticamente.

```bash
#!/bin/bash
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 up type can bitrate 500000
sudo ip link set can1 up type can bitrate 500000
echo "can0 & can1 are up @ 500 kbit/s"
```

### Teste com Python-CAN

[Python-CAN](https://github.com/raspberrypi/usbboot) é uma biblioteca Python multiplataforma que fornece uma interface de programação unificada para comunicação via barramento Controller Area Network (CAN), suportando uma ampla gama de interfaces de hardware CAN e barramentos virtuais, e permitindo a implementação fácil de transmissão, recepção, filtragem de mensagens CAN, monitoramento de barramento e outras operações.
Da mesma forma, as interfaces CAN precisam estar fisicamente conectadas para alcançar a comunicação em loopback.

1. Configure a taxa de baud CAN padrão (500 kbit/s):

```bash
sudo ip link set down can0
sudo ip link set down can1
sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000
sudo ip link set up can0
sudo ip link set up can1
```

2. Verifique se ambas as interfaces estão no estado UP: a saída "state UP" indica o estado UP.

```bash
ip a show can0
ip a show can1
```

A saída "state UP" indica o estado UP.

3. Configure o ambiente virtual Python e as dependências.

```bash
mkdir rpi_can_project
cd rpi_can_project
python3 -m venv can_env
source can_env/bin/activate
pip install python-can
```

4. Insira o script Python:

```python
# can_test.py
import can
import time

# create a bus instance using 'with' statement,
# this will cause bus.shutdown() to be called on the block exit;
# many other interfaces are supported as well (see documentation)
with can.Bus(interface='socketcan',
             channel='vcan0',
             receive_own_messages=True) as bus:

    # send a message
    message = can.Message(arbitration_id=0x7B, is_extended_id=True,
                          data=[0x11, 0x22, 0x33])

    try:
        bus.send(message, timeout=0.2)
        print(f"Message sent: ID={message.arbitration_id:X}, Data={message.data.hex()}")
    except can.exceptions.CanOperationError as e:
        print(f"Error sending message: {e}")

    # iterate over received messages
    print("Listening for 5 seconds...")
    start_time = time.time()


    while time.time() - start_time < 5:
        if msg:
            print(f"Received - ID: {msg.arbitration_id:X}, Data: {msg.data.hex()}")
        else:
            print("No message received in 1 second.")

print("Bus shut down and program finished.")
```

5. Execute e rode:

```bash
python can_test.py
deactivate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/python-can.png" style={{width:800, height:'auto'}}/></div>

## Teste do hub USB

Para testar o hub USB, você pode usar os seguintes passos:

1. Verifique se o hub USB é detectado executando o comando ***lsusb***. Este comando lista todos os dispositivos USB conectados, incluindo hubs.

```bash
lsusb
```

A execução deste comando deve exibir informações sobre os dispositivos USB conectados ao seu sistema, incluindo quaisquer hubs USB presentes.
Se o hub USB estiver funcionando corretamente, você deverá ver seus detalhes listados na saída do comando lsusb. Se ele não estiver listado, pode haver um problema com o hub ou com sua conexão ao sistema. Nesses casos, talvez seja necessário solucionar problemas do hub USB ou de suas conexões.

## Teste do RTC (Relógio de Tempo Real)

:::note
Como o dispositivo reComputer está equipado com o chip CM5, há duas unidades RTC no dispositivo: ① O RTC integrado do CM5 (rtc0); ② O RTC montado no reComputer (rtc1).

rtc0 não consegue reter dados de tempo. Portanto, para usar a função RTC, você precisa especificar manualmente o número de dispositivo rtc1 ao definir a hora.
:::

Para testar a funcionalidade do Relógio de Tempo Real (RTC), siga estes passos:

1. Desative a sincronização automática de horário:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Defina a hora:
Defina o RTC para uma data e hora específicas:

```bash
sudo hwclock --set --date "2025-7-17 12:00:00" -f /dev/rtc1
```

3. Sincronize a hora do RTC com o sistema
Atualize a hora do sistema para corresponder à hora do RTC:  

```bash
sudo hwclock --hctosys -f /dev/rtc1
```

4. Verifique a hora do RTC:

```bash
sudo hwclock -r -f /dev/rtc1
```

Este comando irá ler e exibir a hora armazenada no RTC.

5. Desconecte a fonte de alimentação do RTC, aguarde alguns minutos, depois reconecte-a e verifique novamente a hora do RTC para ver se ele manteve a hora correta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.16_rtc_1_new.png" style={{width:800, height:'auto'}}/></div>

## Teste do temporizador watchdog

Para realizar um teste de watchdog, siga estes passos:

1. Instale o software watchdog:

```bash
sudo apt install watchdog
```

2. Edite o arquivo de configuração do watchdog:

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

Modifique a configuração da seguinte forma:

```bash
watchdog-device = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval = 15
max-load-1 = 24
#max-load-5 = 18
#max-load-15 = 12
realtime = yes
priority = 1
```

Você pode ajustar outras configurações conforme necessário.

3. Certifique-se de que o serviço watchdog está em execução:

```bash
sudo systemctl start watchdog
```

4. Para testar a funcionalidade do watchdog, execute o seguinte comando para simular um travamento do sistema:

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

Este comando aciona um crash do kernel e deve fazer com que o watchdog reinicie o sistema.

5. Monitore o sistema para confirmar que ele reinicia após o período de tempo limite especificado.
Esses passos ajudarão você a testar e garantir a funcionalidade do temporizador watchdog em seu sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## Controlando o buzzer via GPIO  

O GPIO correspondente ao buzzer é o gpio627. Insira o seguinte script para ligar/desligar o buzzer:

1. Ligar o buzzer:

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. Desligar o buzzer: Desligar o buzzer:

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction 
echo 0 > /sys/class/gpio/gpio627/value
```  

## TPM 2.0

Se você conectar o módulo TPM 2.0 ao dispositivo, o código a seguir pode ajudar a verificar a conexão do TPM.

```bash
ls /dev | grep tpm
```  

**Interpretando a saída:**  

Se você vir ***tpm0*** e ***tpmrm0*** na saída, isso significa que os dispositivos TPM (Trusted Platform Module) foram detectados e estão disponíveis no seu sistema. Isso indica que o hardware TPM foi reconhecido e está acessível, o que é um bom sinal. Você pode prosseguir usando funcionalidades ou aplicativos relacionados ao TPM sabendo que os dispositivos estão presentes e acessíveis.

## ATECC608A

Para interagir com o dispositivo ATECC608A e gerar um número de série aleatório, siga estas etapas:

1. Clone o repositório atecc-util:

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. Extraia o conteúdo do pacote .deb para o diretório atual:

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. Navegue até o diretório atecc:

```bash
cd usr/bin
```

4. Gere um número de série aleatório:

```bash
./atecc -b 10 -s 192 -c 'serial'
```

Este comando instrui o utilitário ATECC a usar o slot 10 (-b 10), definir o tamanho do número de série para 192 bits ***(-s 192)*** e gerar um número de série aleatório ***(-c 'serial')***. A saída será o número de série gerado, como ***"01235595d3d621f0ee"***.
Este processo permite que você interaja com o dispositivo ATECC608A e execute várias operações, como gerar números de série aleatórios.

## Interagindo com a EEPROM

Aqui estão os comandos para interagir com uma EEPROM (Electrically Erasable Programmable Read-Only Memory):

1. Conceda permissões completas (leitura, gravação e execução) ao arquivo de dispositivo da EEPROM:

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. Grave a string "This is a test string" no dispositivo EEPROM:

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. Leia o conteúdo do dispositivo EEPROM e exiba-o em formato ***hexadecimal*** usando o utilitário hexdump:

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Verificando a detecção do SSD

Para listar os discos, incluindo o SSD, você pode usar o comando fdisk -l. Veja como:

```bash
sudo fdisk -l
```

Este comando exibirá uma lista de todos os discos conectados ao seu sistema, incluindo o SSD se ele for detectado corretamente. Procure por entradas que representem o seu SSD. Elas normalmente começam com ***/dev/sd*** seguido por uma letra (por exemplo, ***/dev/sda, /dev/sdb,*** etc.).
Depois de identificar a entrada correspondente ao seu SSD, você pode prosseguir com o particionamento ou formatação conforme necessário.

## UPS para desligamento seguro

Um GPIO6 entre a CPU e a entrada de alimentação DC é usado para alertar a CPU quando a fonte de alimentação é desligada. Em seguida, a CPU deve executar algo urgente em um script antes que a energia do supercapacitor se esgote e executar um "$ shutdown".
Outra forma de usar essa função é iniciar um desligamento quando o pino GPIO mudar. O pino GPIO fornecido é configurado como uma tecla de entrada que gera eventos KEY_POWER. Esse evento é tratado pelo systemd-logind iniciando um desligamento.

1. Conexão de hardware.

Certifique-se de que o pino ***'CM5_UPS_DET'*** do dispositivo UPS esteja conectado ao pino GPIO16 do dispositivo R21xx.

2. Modifique o arquivo de configuração.

- Abra o terminal.
- Execute o seguinte comando para editar o arquivo de configuração:

```bash
sudo nano /boot/firmware/config.txt
```

3. Adicione o seguinte conteúdo ao final do arquivo:

```bash
dtoverlay=gpio-shutdown,gpio_pin=GPIO16,active_low=1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

Salve e saia do editor (pressione ***`Ctrl+O`*** para salvar, ***`Enter`*** para confirmar e ***`Ctrl+X`*** para sair).

4. Prepare o script em Python

- Crie um novo arquivo de script em Python:

```bash
cd ~
sudo nano ups_shutdown.py
```

- Copie e cole o seguinte código no arquivo:

```bash
import RPi.GPIO as GPIO
import time, os

num = 0

GPIO.setmode(GPIO.BCM)

# Set GPIO16 to input mode
# Add 500ms anti-shake time to stabilize the software
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.add_event_detect(16, GPIO.FALLING, bouncetime=500)

while True:
    if GPIO.event_detected(16):
        print("...External power off...")
        print("")

        # Sync data to disk
        os.system('sync')
        print("...Data saving...")
        print("")

        # Sleep for 3 seconds
        time.sleep(3)

        # Synchronize data again
        os.system('sync')

        # Countdown 5 seconds
        while num < 5:
            print('----------')
            s = 5 - num
            print('---' + str(s) + '---')
            num = num + 1
            time.sleep(1)
            print('----------')

        # Execute shutdown command
        os.system('sudo shutdown -h now')
```

Salve e saia do editor (pressione ***`Ctrl+O`*** para salvar, ***`Enter`*** para confirmar e ***`Ctrl+X`*** para sair).

5. Execute o script.

- Abra o terminal.
- Execute o seguinte comando para rodar o script:

```bash
sudo python3 ups_shutdown.py
```

:::note
 Use `sudo` para garantir que o script tenha permissões suficientes para executar o comando de desligamento.
:::

6. Simule um teste de falha de energia

- Corte a fonte de alimentação externa.
- Observe se o sistema salva os dados automaticamente e desliga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. Verifique o resultado

- Reconecte a fonte de alimentação.
- Verifique se os dados do sistema estão completos e se ele inicia normalmente.

:::note

1. Para a função de UPS, entre em contato conosco para mais informações.
2. O sinal de alarme é ativo em nível BAIXO.

:::

## Acelerador de IA

O slot M.2 M-KEY 2280 no reComputer Industrial R21xx foi projetado para acomodar um Acelerador de IA PCIE M.2. E a série R21xx-12 vem pré-instalada com um Hailo-8 M.2 Aceleração de IA de até 26TOPS.
Se você comprou o produto da série R21xx-10, será necessário adquirir o módulo NPU da Hailo para habilitar a funcionalidade de IA.
O dispositivo vem pré-instalado com o driver do acelerador Hailo, portanto você pode usá-lo diretamente e executar o caso de teste:

1. Navegue até o diretório do caso de teste

```bash
cd /mnt/hailo-rpi5-examples/
```

2. Inicie o ambiente virtual

```bash
source ./setup_env.sh
```

3. Execute o exemplo simples de detecção

```bash
python basic_pipelines/detection_simple.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.24_ai__accelerator_1.png" style={{width:800, height:'auto'}}/></div>

Para fechar o aplicativo, pressione ***`Ctrl+C`*** .
Esta é uma versão leve do exemplo de detecção, focada principalmente em demonstrar o desempenho do Hailo enquanto minimiza a carga da CPU. O pipeline interno de processamento de vídeo do GStreamer é simplificado, minimizando as tarefas de processamento de vídeo, e o modelo YOLOv6 Nano é utilizado.

:::note
Se o reComputer que você comprou não incluir o Hailo-8 e você estiver considerando adquirir um dispositivo Hailo para integração, consulte a documentação oficial da Hailo (https://github.com/hailo-ai) para configurar o firmware e o ambiente, e execute os exemplos para verificar se o dispositivo pode ser usado normalmente.
:::

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
