---
description: O reComputer Industrial R22xx é um NVR industrial com IA integrado, baseado no Raspberry Pi CM5, equipado com um acelerador de IA Hailo-8 que oferece até 26 TOPS. Com 4 portas Ethernet Gigabit com suporte PoE PSE, além de uma porta Ethernet Gigabit adicional, ele permite streaming de vídeo de alta largura de banda e implantação simplificada de PoE para câmeras IP. Oferece I/O industrial rico, conectividade sem fio flexível, design térmico sem ventoinha e ampla faixa de temperatura de operação de –20 °C a 50 °C, garantindo análise de vídeo por IA confiável e operação contínua e estável em cenários exigentes.
title: Configurar reComputer Industrial R22xx
keywords:
  - Controlador de Borda
  - Raspberry pi
  - Controlador de Borda
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_configure_system
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_configure_system/
---

## Visão geral

Aprenda como configurar e testar componentes de hardware na série reComputer Industrial R22xx após instalar os dispositivos. Este wiki abrange mapeamento de GPIO, teste do LED USER, comunicação SPI, varredura de Wi‑Fi e Bluetooth, LoRa®, 4G, 5G, testes de RS485, RS232, CAN, DI/DO, UPS para desligamento seguro e muito mais.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Consultar mapeamentos e offsets de GPIO

Para consultar mapeamentos e offsets de GPIO, siga estas etapas:

1. Copie e cole o seguinte comando para consultar os mapeamentos de GPIO:

```bash
cat /sys/kernel/debug/gpio
```

**Este comando exibirá os mapeamentos e offsets de GPIO**, fornecendo informações essenciais para depurar ou configurar os pinos GPIO.

## Teste do LED USER

Fornecemos LEDs em três cores: vermelho, azul e verde para uso dos usuários. Você pode entrar no diretório /sys/class/leds/ para visualizar:

**1. Navegue até o diretório do LED**  

```bash
cd /sys/class/leds/
ls
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.3-1.png" style={{width:800, height:'auto'}}/></div>


Use o seguinte comando para acender o LED da cor correspondente.

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

Isso **acenderá** o LED correspondente.

**3. Desligar LEDs (opcional)**  
Para **desligar** um LED específico, use:

```bash
sudo su
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

### Configuração LoRa® SPI  

Após instalar o LoRa® SPI no slot 2 Mini‑PCIe, é possível configurar o LoRa® SPI, seguindo estas etapas:

1. Clone o repositório **SX1302_HAL**:

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. Acesse o diretório clonado:

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
Pressione **ctrl+x** para sair, pressione **y** para salvar as alterações e, em seguida, pressione **Enter** para retornar à linha de comando.

4. 4.Adicione o arquivo packet_forwarder/reset_lgw.sh:

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

Adicione o código de execução:

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

```

O firmware oferece suporte nativo ao modelo SPI WM1302-SPI-US915-M. Se você quiser usar outros modelos, pode consultar a definição do RESET_PIN correspondente e modificar o RESET_PIN com base nos comandos a seguir.

```bash
cat /sys/kernel/debug/gpio
```

Pressione **ctrl+x** para sair, pressione **y** para salvar as alterações e, em seguida, pressione **Enter** para retornar à linha de comando.

5. Modifique o código de configuração:

```bash
cp ./tools/reset_lgw.sh ./packet_forwarder
```

6. Comente as linhas 18, 29, 35, 42, 53 e 54, respectivamente:

```bash
nano ./packet_forwarder/global_conf.json.sx1250.US915
```

Altere "com_path": "/dev/spidev0.0" para "com_path": "/dev/spidev2.0".

```bash
 cd ./packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.7.1-1.png" style={{width:800, height:'auto'}}/></div>




### Configuração LoRa® USB

Para LoRa® USB, os comandos anteriores permanecem os mesmos do LoRa® SPI. No entanto, o comando final precisa ser alterado para:

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

Este comando especifica o arquivo de configuração a ser usado para LoRa® USB.

## 5G Celular via M.2 B‑KEY

Para interagir com um módulo 5G/4G usando comandos AT via minicom, siga estas etapas:

1. Crie um novo arquivo power_5g.sh：

```bash
nano power_5g.sh
```

Abra com sudo nano e insira o seguinte comando, depois pressione ***ctrl+x*** para salvar e sair.

```bash
#!/bin/bash

RESET_PIN=655
POWER_PIN=660

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

Após 10–15 segundos (o módulo leva algum tempo para ligar e enumerar o USB), verifique se o nó de dispositivo aparece:

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

1. Quando o minicom estiver aberto, você poderá começar a enviar comandos AT para o módulo 4G. Por exemplo:

```bash
AT
```

Este comando verifica se o módulo está respondendo. Você deverá receber uma resposta ***"OK"*** se o módulo estiver funcionando corretamente.

2. Para discar um número de telefone usando o módulo 4G, você pode usar o comando ATD seguido do número de telefone:

```bash
ATD<phone_number>;
```

Substitua **phone_number** pelo número de telefone desejado que você quer discar.
Certifique‑se de incluir um ponto e vírgula ; no final do comando para indicar o fim do número de telefone.

## 4G Celular via Mini‑PCIe

Crie um novo arquivo power_4g.sh:

```bash
sudo nano power_4g.sh
```

Abra com sudo nano e insira o seguinte comando, depois pressione ctrl+x para salvar e sair.

```bash
# SIM_MUX_SEL
echo 655 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio655/direction
echo 0 > /sys/class/gpio/gpio655/value
echo 660 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio660/direction
echo 1 > /sys/class/gpio/gpio660/value
```

Execute o arquivo:

```bash
sudo ./power_4g.sh
```

Entre no minicom para enviar comandos:

```bash
sudo apt install minicom -y
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Pressione Ctrl+A, Z, E em sequência. Primeiro envie AT para testar se está conectado. Se aparecer OK, a conexão foi bem‑sucedida.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.9-1.png" style={{width:800, height:'auto'}}/></div>


Após executar o comando a seguir, o módulo será reiniciado automaticamente. Se você não sair do minicom, poderá ver as informações de configuração correspondentes.
Acesso à Internet por discagem ECM:

```bash
AT+QCFG="usbnet",1
```

Até que a última linha mostre OK, será bem‑sucedido.

> Note
> O dispositivo precisa aguardar por um tempo e então você poderá visualizar o endereço IP de usb0 em ifconfig.

Teste o status da rede e a comunicação：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Teste de RS485

O reComputer Industrial R21xx inclui **2x portas RS485**. Abaixo estão suas respectivas **portas COM** e **arquivos de dispositivo**:  

| **Número de portas RS485** | **Porta COM** | **Rótulo de serigrafia** | **Arquivo de dispositivo** |
|---------------------------|--------------|--------------------------|-----------------------------|
| **RS485-2**               | COM2         | A2/B2/GND3               | `/dev/ttyACM1`              |
| **RS485-3**               | COM3         | A3/B3/GND4               | `/dev/ttyACM2`              |

Para testar a função RS485, você pode seguir os passos abaixo (tomando RS485_1 e RS485_2 como exemplo):

1. Conecte os sinais A e B de RS485_1 e RS485_2.
2. Abra o minicom em duas janelas de terminal, respectivamente:

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 Se houver uma placa de expansão, o número precisa ser deslocado uma posição para trás, por exemplo ***/dev/ttyAcM2***, ***/dev/ttyAcM3***.
:::

3. As seguintes operações precisam ser realizadas em ambos os ACMs abertos:

- Pressione ***Ctrl+A***, depois pressione ***Z***, e a interface Minicom Command Summary aparecerá:
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- Pressione ***O*** novamente para abrir a configuração, selecione Serial port setup e pressione ***Enter***; abra todas as interfaces relacionadas a RS485, pressione ***H/I/J/K/L*** em sequência para ativá-las;
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- Depois que todos os campos exibirem "YES", pressione Enter para voltar e, em seguida, selecione Exit para sair.

:::note

Tomando ACM2 e ACM3 como exemplo:
Se você quiser enviar de ACM2 para ACM3, o ACM2 precisa ser configurado novamente: ***ctrl+A*** , depois pressione ***Z*** e depois ***E*** , e então inicie o comando de escrita na porta serial. Neste momento, você pode imprimir strings livremente em ACM2, e será possível ver o conteúdo de ACM2 em ACM3 ao mesmo tempo;
Da mesma forma, se você quiser enviar de ACM3 para ACM2, o ACM3 precisa ser configurado novamente:  ***ctrl+A***, depois pressione  ***Z***  e depois  ***E*** , e então inicie o comando de escrita na porta serial. Neste momento, você pode imprimir strings livremente em ACM3, e será possível ver o conteúdo de ACM3 em ACM2 ao mesmo tempo. Como mostrado na figura.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## Teste de RS232

O reComputer Industrial R21xx inclui **2x portas RS232**, e as respectivas **portas COM** e **arquivos de dispositivo** são os seguintes:

| **Número de portas RS232** | **Porta COM** | **Rótulo de serigrafia** | **Arquivo de dispositivo** |
|---------------------------|--------------|--------------------------|-----------------------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1             | `/dev/ttyACM0`              |
| **RS232-2**               | COM2         | RX2/TX2/GND2             | `/dev/ttyACM1`              |

Como o RS232 é uma comunicação full-duplex, faça um curto-circuito diretamente entre TX e RX do RS232 para realizar um teste de loopback.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-1.png" style={{width:800, height:'auto'}}/></div>

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


O Terminal 1 exibirá o conteúdo solicitado pelo Terminal 2 para ser impresso.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-2.png" style={{width:800, height:'auto'}}/></div>

## Teste de DI (Entrada Digital)

O reComputer Industrial R21xx contém 4 portas DI, e o usuário pode configurá-las de acordo com as necessidades reais.

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

O tipo de entrada das portas DI é PNP. Ela suporta tensão de entrada de 5VDC~24VDC, corrente - 1000mA.
Para testar a funcionalidade de DI, você pode seguir estes passos:

1. A conexão entre a porta DI do reComputer Industrial R21xx e a carga externa foi concluída.
2. Insira o seguinte comando para obter o status do GPIO：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. Quando o nível externo estiver alto, o valor de ***/sys/class/gpio/gpio588/value*** será 0; quando o nível externo estiver baixo, ***/sys/class/gpio/gpio588/value*** será 1.

## DO (Saída Digital)

O reComputer Industrial R21xx contém 4 portas DO, e o usuário pode configurá-las de acordo com as necessidades reais.

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

O tipo de saída das portas DO é transistor. Ela suporta tensão de saída abaixo de 60 VDC, capacidade de corrente de 500 mA.
Para testar a funcionalidade de DO, você pode seguir estes passos:

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
        <td rowspan="2">2</td>
        <td>CAN_H/CAN_L</td>
        <td>can0</td>
      </tr>
    </tbody>
  </table>
</div>

Como o reComputer Industiral R22xx está equipado com apenas uma única interface CAN, ele não pode realizar testes de loopback independentes. Para verificar sua funcionalidade de comunicação, é necessário um dispositivo par externo ou um adaptador USB-para-CAN. Para este teste, o reComputer Industiral R21xx (com duas interfaces CAN) servirá como nó par para estabelecer uma conexão com o reComputer Industiral R22xx. Consulte o seguinte tutorial para esquemas específicos de conexão e etapas de configuração:

1. Use dois fios DuPont para fazer curto-circuito entre H-H e L-L de can0 e can1 para formar um teste de loop mínimo.

```bash
CAN_H─────●───── CAN-H
CAN_L─────●───── CAN-L
G_CAN_H─────●───── G_CAN
```

2. Confirme que as duas interfaces de rede can0 e can1 realmente aparecem no sistema para evitar que o driver não seja carregado:

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```


3. Configure as duas interfaces CAN para 500 kbit/s e coloque-as online, prontas para enviar e receber dados (defina-as para nível baixo por segurança):
R22xx:
```bash
sudo ip link set can0 down
sudo ip link set can0 up type can bitrate 500000
```
R21xx:
```bash
sudo ip link set can1 down
sudo ip link set can1 up type can bitrate 500000
```

4. Teste de comunicação (unidirecional)
Use can-utils para enviar e receber dados.

Etapa A: R21xx (CAN1) envia → R22xx (CAN0) recebe

- R22xx: candump can0

- R21xx: cansend can1 123#DE.AD.BE.EF.CA.FE.00.11

Etapa B: R22xx (CAN0) envia → R21xx (CAN1) recebe

- R21xx: candump can1

- R22xx: cansend can0 555#1122334455667788



## Teste do hub USB

Para testar o hub USB, você pode usar os seguintes passos:

1. Verifique se o hub USB foi detectado executando o comando ***lsusb***. Este comando lista todos os dispositivos USB conectados, incluindo hubs.

```bash
lsusb
```

A execução deste comando deve exibir informações sobre os dispositivos USB conectados ao seu sistema, incluindo quaisquer hubs USB presentes.
Se o hub USB estiver funcionando corretamente, você deverá ver seus detalhes listados na saída do comando lsusb. Se ele não estiver listado, pode haver um problema com o hub ou com sua conexão ao sistema. Nesses casos, talvez seja necessário solucionar problemas do hub USB ou de suas conexões.

## Teste de RTC (Relógio de Tempo Real)

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

2. Definir a hora:
Defina o RTC para uma data e hora específicas:

```bash
sudo hwclock --set --date "2025-7-17 12:00:00" -f /dev/rtc1
```

3. Sincronizar a hora do RTC com o sistema
Atualize a hora do sistema para corresponder à hora do RTC:  

```bash
sudo hwclock --hctosys -f /dev/rtc1
```

4. Verificar a hora do RTC:

```bash
sudo hwclock -r -f /dev/rtc1
```

Este comando irá ler e exibir a hora armazenada no RTC.

5. Desconecte a fonte de alimentação do RTC, aguarde alguns minutos, depois reconecte-a e verifique novamente a hora do RTC para ver se ele manteve a hora correta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.17-1.png" style={{width:800, height:'auto'}}/></div>

## Teste do temporizador watchdog

Para realizar um teste de watchdog, siga estas etapas:

1. Instale o software do watchdog:

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

3. Certifique-se de que o serviço do watchdog está em execução:

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
Essas etapas ajudarão você a testar e garantir a funcionalidade do temporizador watchdog no seu sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## Controlando o buzzer via GPIO  

O GPIO correspondente ao buzzer é o gpio627. Insira o seguinte script para ligar/desligar o buzzer:

1. Ligar o buzzer:

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. Desligar o buzzer :Turn off the buzzer :

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

4. Gerar um número de série aleatório:

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

Este comando exibirá uma lista de todos os discos conectados ao seu sistema, incluindo o SSD se ele estiver devidamente detectado. Procure por entradas que representem o seu SSD. Elas normalmente começam com ***/dev/sd*** seguido por uma letra (por exemplo, ***/dev/sda, /dev/sdb,*** etc.).
Depois de identificar a entrada correspondente ao seu SSD, você pode prosseguir com o particionamento ou formatação conforme necessário.

## UPS para desligamento seguro

Um GPIO6 entre a CPU e a entrada de alimentação DC é usado para alertar a CPU quando a fonte de alimentação cai. Em seguida, a CPU deve executar algo urgente em um script antes que a energia do supercapacitor se esgote e executar um "$ shutdown".
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

4. Preparar o script em Python

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

6. Simular teste de falha de energia

- Corte a fonte de alimentação externa.
- Observe se o sistema salva os dados automaticamente e desliga.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. Verificar o resultado

- Reconecte a fonte de alimentação.
- Verifique se os dados do sistema estão completos e se ele inicia normalmente.

:::note

1. Para a função de UPS, entre em contato conosco para mais informações.
2. O sinal de alarme é ativo em nível BAIXO.

:::

## Acelerador de IA

O slot M.2 M-KEY 2240 no reComputer Industrial R21xx foi projetado para acomodar um Acelerador de IA PCIE M.2. E a série R21xx-12 vem pré-instalada com um Hailo-8 M.2 AI Acceleration de até 26TOPS.
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
Esta é uma versão leve do exemplo de detecção, focada principalmente em demonstrar o desempenho do Hailo enquanto minimiza a carga da CPU. O pipeline interno de processamento de vídeo do GStreamer é simplificado ao minimizar as tarefas de processamento de vídeo, e o modelo YOLOv6 Nano é utilizado.

:::note
Se o reComputer que você adquiriu não inclui o Hailo-8 e você está considerando comprar um dispositivo Hailo para integração, consulte a documentação oficial da Hailo (https://github.com/hailo-ai) para configurar o firmware e o ambiente, e execute os exemplos para verificar se o dispositivo pode ser usado normalmente.
:::

## Câmera IP PoE


A série reComputer Industrial R22xx é projetada para fluxos de vídeo IP de alta densidade e automação industrial. Ela possui **5 portas físicas Gigabit Ethernet** com uma arquitetura de barramento híbrida para garantir largura de banda máxima e estabilidade.

**Distribuição do barramento interno:**

* **eth0 (Nativa)**: Conectada diretamente ao SoC. Oferece a menor latência e é recomendada como **Uplink Primário (WAN)** ou **Porta de Gerenciamento**.
* **eth1 (Extensão USB)**: A porta independente localizada ao lado da porta nativa. É estendida via **barramento USB 3.0** e suporta **saída PoE**.
* **eth2, eth3, eth4 (Extensão PCIe)**: As três portas consecutivas. São estendidas via **barramento PCIe** e suportam **saída PoE**.


1. Especificações técnicas

| Categoria | Especificação | Observações |
| :--- | :--- | :--- |
| **Total de portas** | 1 (Nativa) + 4 (Estendidas) | 5x RJ45 Gigabit Ethernet |
| **Modo PoE** | **Alternativa A (Modo A)** | Energia fornecida pelos pares de dados (1/2, 3/6) |
| **Saída PoE por porta** | **12W** (Máx.) | Otimizada para câmeras IP padrão |
| **Saída PoE paralela** | Todas as 4 portas suportam 12W simultaneamente | Requer entrada de energia do sistema suficiente |
| **Faixa de entrada de energia** | **9V - 36V DC** | Circuito interno de elevação aumenta para **48V** para PoE |
| **Recursos de segurança** | Proteção contra sobrecorrente e subtensão | **Hot-plug é estritamente proibido** |

2. Diretrizes críticas de segurança
* **NÃO FAÇA HOT-PLUG**: 
    > **AVISO**: Conectar ou desconectar cabos Ethernet enquanto a alimentação PoE estiver ativa (GPIO em nível alto) pode causar surtos transitórios que podem danificar os chips LAN7800 ou as pontes PCIe. Sempre siga o princípio "**Conectar primeiro, energizar depois**".
* **Recomendações de fonte de alimentação**:
    > Embora o dispositivo suporte entrada de 9V, recomendamos o uso de uma fonte de alimentação industrial de **24V** com capacidade de pelo menos **72W** (3A) para garantir alta eficiência de conversão quando todas as 4 portas PoE estiverem em carga total (4 × 12W).


3. Etapas de configuração

- Etapa 1: Desabilitar serviços conflitantes
Para evitar que gerenciadores de rede de desktop sobrescrevam as configurações de IP estático industriais, desabilite o `NetworkManager`.

```bash
# Switch to systemd-networkd
sudo systemctl disable --now NetworkManager
sudo systemctl mask NetworkManager
sudo systemctl enable --now systemd-networkd
```

- Etapa 2: Habilitar alimentação automática para PoE (GPIO)
Adicione os seguintes comandos em `/etc/rc.local` antes da linha `exit 0` para garantir que a alimentação PoE seja habilitada na inicialização.

```bash
# Export and set PoE Enable Pin (Example: GPIO 532)
echo 652 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio652/direction
echo 1 > /sys/class/gpio/gpio652/value
```

- Etapa 3: Implantação de IP com múltiplas interfaces
Atribua sub-redes independentes a cada porta e use **RouteMetric** para garantir que `eth0` permaneça como o gateway padrão para acesso à internet.

```bash
# Configure eth0 (WAN/DHCP) - Highest Priority
sudo bash -c 'cat > /etc/systemd/network/10-eth0.network <<EOF
[Match]
Name=eth0
[Network]
DHCP=yes
[DHCPv4]
RouteMetric=10
EOF'

# Configure eth1-eth4 (Static IP Segments)
for i in {1..4}; do
sudo bash -c "cat > /etc/systemd/network/20-eth$i.network <<EOF
[Match]
Name=eth$i
[Network]
Address=10.0.$((i+2)).10/24
[IPv4]
RouteMetric=$((100+i))
EOF"
done
```

4. Verificação e solução de problemas

- Verificar conectividade do barramento
Use `lspci` e `lsusb` para verificar se todos os controladores são reconhecidos pelo sistema:
* **Portas estendidas PCIe (eth2-4)**: Execute `lspci | grep Ethernet`
* **Porta estendida USB (eth1)**: Execute `lsusb -t` e procure pelo driver `lan78xx`.



5. FAQ
* **P: Por que minha câmera continua reiniciando?**
    * R: Verifique se o consumo de energia da câmera excede **12W**. Câmeras PTZ de alta potência ou aquelas com iluminadores IR potentes podem exceder esse limite.
* **P: Posso usar entrada de 12V DC para PoE?**
    * R: Sim. O circuito interno elevará 12V para 48V. No entanto, certifique-se de que sua fonte de alimentação de 12V possa suportar alta corrente, pois a perda de conversão é maior em tensões de entrada mais baixas.
* **P: O nome da interface não é eth1-4.**
    * R: Use `ip link` para encontrar o nome real do kernel (por exemplo, `enp1s0`) e atualize o campo `Name=` em seus arquivos `.network`.

6. Status de suporte para câmera PoE de 4 canais：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.26-1.png" style={{width:800, height:'auto'}}/></div>

### reComputer R22 & reCamera

Este guia fornece um passo a passo para conectar uma reCamera — uma câmera de IA modular e open-source alimentada pela plataforma RISC-V e projetada para implantação rápida de Edge AI — ao reComputer R22 via PoE. Ele abrange a implantação de um fluxo RTSP usando Node-RED e a visualização da transmissão ao vivo no R22.

1. Conexão de hardware e inicialização

  * **Modelos compatíveis:** série reCamera (versão PoE, por exemplo, LH-AR01).
  * **Conexão física:** Conecte a reCamera a qualquer porta PoE (**eth1-eth4**) no R22 usando um cabo Ethernet padrão.
  * **Habilitar alimentação PoE:**
    Execute os seguintes comandos no terminal do R22 para habilitar a saída de 48V:
    ```bash
    # Enable GPIO 652
    echo 652 > /sys/class/gpio/export
    echo out > /sys/class/gpio/652/direction
    echo 1 > /sys/class/gpio/652/value
    ```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/ip.png" style={{width:800, height:'auto'}}/></div>

2. Configuração da reCamera (importação Node-RED com um clique)

Use o `flows.json` pré-configurado para implantar rapidamente um fluxo RTSP autenticado.

- **Acessar o painel:** Abra o navegador e vá para `http://10.0.3.200:1880` (IP padrão da reCamera).
- **Importar configuração:**
      * Clique no ícone de menu `≡` no canto superior direito -\> **Import**.
      * Envie o arquivo [**flows.json**](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/flows.json) e clique em **Import**.
- **Autenticação personalizada (obrigatória):**
      * Clique duas vezes no nó **`RTSP Output`** no fluxo.
      * Na seção **Authentication**, defina suas credenciais:
          * **Username:** `seeed`
          * **Password:** `seeed`
- **Deploy:** Clique no botão vermelho **Deploy** no canto superior direito.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/config.png" style={{width:800, height:'auto'}}/></div>

3. Visualizando o fluxo de vídeo no R22

Como o R22 (baseado em CM4/CM5) suporta decodificação por hardware, recomendamos usar VLC ou FFplay para verificação.

4. Opção A: Usando a interface gráfica do VLC (recomendado)

- Digite `vlc` no terminal do R22 para abrir o player.
- Vá em **Media** -\> **Open Network Stream**.
- Insira a URL RTSP autenticada:
    ```text
    rtsp://seeed:seeed@10.0.3.200:554/live
    ```
- Clique em **Play**.

5. Opção B: Usando a linha de comando (teste rápido)

Copie e execute diretamente o seguinte comando:

```bash
ffplay -fflags nobuffer -flags low_delay rtsp://seeed:seeed@10.0.3.200:554/live
```

-----

6. Solução de problemas

| Problema | Causa potencial | Solução |
| :--- | :--- | :--- |
| **Não é possível dar ping em 10.0.3.200** | Conflito de IP interno do R22 | Verifique se `eth3/eth4` estão ambos usando `10.0.3.10`. Altere um manualmente. |
| **reCamera não inicializa** | Alimentação PoE não habilitada | Certifique-se de que `GPIO 652` esteja definido como `1` e que a energia de entrada seja \> 12V/3A. |
| **Atraso/latência de vídeo** | Problemas de rede ou MTU | Certifique-se de que não haja tráfego intenso de broadcast entre o R22 e a reCamera. |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/recamera.png" style={{width:800, height:'auto'}}/></div>



## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
