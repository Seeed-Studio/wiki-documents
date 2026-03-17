---
description: O reComputer Industrial R22xx é um NVR industrial com IA baseado no Raspberry Pi CM5, equipado com um acelerador de IA Hailo-8 que fornece até 26 TOPS. Com 4 portas Ethernet Gigabit com suporte PoE PSE, além de uma porta Ethernet Gigabit adicional, ele permite streaming de vídeo de alta largura de banda e implantação PoE simplificada para câmeras IP. Oferece ricas interfaces de I/O industriais, conectividade sem fio flexível, design térmico sem ventoinha e ampla faixa de temperatura de operação de –20 °C a 50 °C, garantindo análise de vídeo com IA confiável e operação contínua e estável em cenários exigentes.
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
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_configure_system/
---

## Visão Geral

Aprenda como configurar e testar componentes de hardware na série reComputer Industrial R22xx após instalar os dispositivos. Este wiki aborda mapeamento de GPIO, teste do LED USER, comunicação SPI, varredura de Wi‑Fi e Bluetooth, LoRa®, 4G, 5G, Zigbee via Mini‑PCIe, RS485, RS232, CAN, teste de DI/DO, UPS para desligamento seguro e mais.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Consultar Mapeamentos e Offsets de GPIO

Para consultar mapeamentos e offsets de GPIO, siga estas etapas:

1. Copie e cole o seguinte comando para consultar os mapeamentos de GPIO:

```bash
cat /sys/kernel/debug/gpio
```

**Este comando exibirá os mapeamentos e offsets de GPIO**, fornecendo informações essenciais para depurar ou configurar os pinos de GPIO.

## Teste do LED USER

Fornecemos LEDs em três cores: vermelho, azul e verde para uso dos usuários. Você pode entrar no diretório /sys/class/leds/ para visualizar:

**1. Navegar até o diretório do LED**  

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

## Testando a Comunicação SPI

Para testar a comunicação SPI curto‑circuitando os pinos MISO e MOSI do módulo TPM, siga estas etapas:

1. Clone o repositório spidev-test:

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. Navegue até o diretório spidev-test:

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

- Este comando faz a varredura de todas as redes Wi‑Fi próximas e exibe seus SSIDs, intensidade do sinal e tipo de criptografia.  

## Varredura de Bluetooth  

Para procurar dispositivos Bluetooth, siga estas etapas:  

**Abra a interface de controle do Bluetooth:**  

```bash
sudo bluetoothctl
```

Este comando abrirá a interface de controle do Bluetooth. A partir daí, você pode executar comandos adicionais para procurar dispositivos Bluetooth próximos.

**Ativar varredura:**  

```bash
scan on
```

Este comando iniciará a varredura de dispositivos Bluetooth próximos. Você pode então usar outros comandos dentro da interface ***bluetoothctl*** para interagir com dispositivos Bluetooth, como parear ou conectar‑se a eles.

## LoRa® via Mini‑PCIe

### Configuração LoRa® SPI  

Após instalar o LoRa® SPI no slot Mini‑PCIe 2, é possível configurar o LoRa® SPI seguindo estas etapas:

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
Pressione **ctrl+x** para sair, pressione **y** para salvar as alterações e depois pressione **Enter** para voltar à linha de comando.

4. 4.Adicionar o arquivo packet_forwarder/reset_lgw.sh:

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

O firmware oferece suporte nativo ao modelo SPI WM1302-SPI-US915-M. Se você desejar usar outros modelos, pode consultar a definição do RESET_PIN correspondente e modificar o RESET_PIN referindo‑se aos comandos a seguir.

```bash
cat /sys/kernel/debug/gpio
```

Pressione **ctrl+x** para sair, pressione **y** para salvar as alterações e depois pressione **Enter** para voltar à linha de comando.

5. Modificar o código de configuração:

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

Para LoRa® USB, os comandos anteriores permanecem os mesmos que para LoRa® SPI. No entanto, o comando final precisa ser alterado para:

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

Este comando especifica o arquivo de configuração a ser usado para LoRa® USB.

## 5G Celular via M.2 B-KEY

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
Abra o minicom com a porta serial e taxa de baud adequadas:

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

Substitua **phone_number** pelo número de telefone desejado que você deseja discar.
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

Pressione Ctrl+A, Z, E em sequência. Envie primeiro AT para testar se está conectado. Se aparecer OK, a conexão foi bem‑sucedida.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.9-1.png" style={{width:800, height:'auto'}}/></div>


Após executar o comando a seguir, o módulo será reiniciado automaticamente. Se você não sair do minicom, poderá ver as informações de configuração correspondentes.
Acesso à Internet por discagem ECM:

```bash
AT+QCFG="usbnet",1
```

Até que a última linha exiba OK, o processo será concluído com êxito.

> Nota
> O dispositivo precisa esperar por um tempo e, em seguida, você poderá visualizar o endereço IP de usb0 em ifconfig.

Testar o status da rede e a comunicação：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Zigbee via Mini-PCIe

Para testar a **comunicação Zigbee** entre dois módulos Zigbee, siga estas etapas:  

1. Verificar portas seriais disponíveis

Use o seguinte comando para verificar as portas seriais disponíveis:

```bash
cat /dev/ttyUSB*
```

**Instalar uma ferramenta de comunicação serial**

2. Instale a ferramenta de comunicação serial:

```bash
sudo apt-get install cutecom
```

3. Abra a porta serial para o coordenador (primeiro módulo Zigbee):

- Abra a ferramenta cutecom e configure-a para a primeira porta serial:
- Taxa de baud: ***115200***
- Marque a opção ***"Hex output"*** na parte inferior da interface.
- Siga estas etapas para configurar o primeiro módulo Zigbee:
- Definir como coordenador: envie o comando ***‘55 04 00 05 00 05’***, espere a resposta ***‘55 04 00 05 00 05’***.
- Reiniciar dispositivo: pressione o botão de reset ou envie o comando ***‘55 07 00 04 00 FF FF 00 04’***.
- Formação de rede: envie o comando ***‘55 03 00 02 02’***.

4. Abra a porta serial para o roteador (segundo módulo Zigbee):
Abra outra instância do ***cutecom*** e configure-a para a segunda porta serial com as mesmas configurações de antes.
Siga estas etapas para configurar o segundo módulo Zigbee:

- Definir como roteador: envie o comando ***‘55 04 00 05 01 04’***, espere a resposta ***‘55 04 00 05 00 05’***.
- Reiniciar dispositivo: pressione o botão de reset ou envie o comando ***‘55 07 00 04 00 FF FF 00 04’***.
- Formação de rede: envie o comando ***‘55 03 00 02 02’***.

5. Verificar o status do dispositivo:
Envie o comando ***‘55 03 00 00 00’*** para verificar o status do dispositivo. Espere uma resposta semelhante a ***‘55 2a 00 00 00 01 XX XX XX XX’***, onde ‘XX’ representa informações do dispositivo.
6. Entrar no modo transparente:
Se a formação de rede for bem-sucedida, entre no modo transparente enviando o comando ***55 07 00 11 00 03 00 01 13***. Ambos os módulos devem estar em modo transparente para comunicação direta. Para sair do modo transparente, envie "+++".
7. Observações adicionais:

- Se a configuração do roteador falhar, o dispositivo pode já ser um coordenador. Saia da rede usando o comando '55 07 00 04 02 xx xx xx'.
- Teste a potência de transmissão usando os comandos '55 04 0D 00 00 0D' (consulta) e '55 04 0D 01 XX XX' (definir).
Certifique-se de substituir ***/dev/ttyUSB*** pela porta serial correta para cada módulo Zigbee. Siga estas etapas cuidadosamente para testar com sucesso a comunicação Zigbee entre os dois módulos.

## Teste de RS485

O reComputer Industrial R21xx inclui **2x portas RS485**. Abaixo estão suas correspondentes **portas COM** e **arquivos de dispositivo**:  

| **Número de portas RS485** | **Porta COM** | **Identificação no silk screen** | **Arquivo de dispositivo** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-2**               | COM2         | A2/B2/GND3           | `/dev/ttyACM1`  |
| **RS485-3**               | COM3         | A3/B3/GND4           | `/dev/ttyACM2`  |

Para testar a função RS485, você pode seguir as etapas abaixo (tomando RS485_1 e RS485_2 como exemplos):

1. Conecte os pinos A e B de RS485_1 e RS485_2.
2. Abra o minicom em duas janelas de terminal, respectivamente:

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 Se houver uma placa de expansão, o número precisa ser movido uma posição para trás, por exemplo ***/dev/ttyAcM2***, ***/dev/ttyAcM3***.
:::

3. As seguintes operações precisam ser realizadas em ambos os ACMs abertos:

- Pressione ***Ctrl+A***, depois pressione ***Z***, e a interface de resumo de comandos do Minicom aparecerá:
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- Pressione ***O*** novamente para abrir a configuração, selecione Serial port setup e pressione ***Enter***; abra todas as interfaces relacionadas a RS485, pressione ***H/I/J/K/L*** em sequência para abrir;
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- Após todos os "YES" serem exibidos, pressione Enter para voltar e, em seguida, selecione Exit para sair.

:::note

Tomando ACM2 e ACM3 como exemplo:
Se você quiser enviar de ACM2 para ACM3, ACM2 precisa ser configurado novamente: ***ctrl+A***, depois pressione ***Z*** e depois ***E***, e então inicie o comando de escrita na porta serial. Neste momento, você pode imprimir strings em ACM2 à vontade, e você pode ver o conteúdo de ACM2 em ACM3 ao mesmo tempo;
Por outro lado, se você quiser enviar de ACM3 para ACM2, ACM3 precisa ser configurado novamente:  ***ctrl+A***, depois pressione  ***Z***  e depois  ***E***, e então inicie o comando de escrita na porta serial. Neste momento, você pode imprimir strings em ACM3 à vontade, e você pode ver o conteúdo de ACM3 em ACM2 ao mesmo tempo. Conforme mostrado na figura.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## Teste de RS232

O reComputer Industrial R21xx inclui **2x portas RS232**, e as correspondentes **portas COM** e **arquivos de dispositivo** são os seguintes:

| **Número de portas RS232** | **Porta COM** | **Identificação no silk screen** | **Arquivo de dispositivo** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

Como o RS232 é comunicação full-duplex, faça um curto-circuito diretamente entre TX e RX do RS232 para realizar um teste de loopback.

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

O tipo de entrada das portas DI é PNP. Ela suporta tensão de entrada de 5VDC~24VDC, corrente - 1000mA.
Para testar a funcionalidade de DI, você pode seguir estas etapas para testá-la:

1. A conexão entre a porta DI do reComputer Industrial R21xx e a carga externa foi concluída.
2. Digite o seguinte comando para obter o status do GPIO：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. Quando o nível externo é alto, o valor de ***/sys/class/gpio/gpio588/value*** é 0; quando o nível externo é baixo, ***/sys/class/gpio/gpio588/value*** é 1.

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
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO5</td>
        <td>GPIO635</td>
      </tr>
    </tbody>
  </table>
</div>

O tipo de saída das portas DO é transistor. Ela suporta tensão de saída - abaixo de 60 VDC, capacidade de corrente - 500 mA.
Para testar a funcionalidade de DO, você pode seguir estas etapas para testá-la:

1. A conexão entre a porta DO do reComputer Industrial R21xx e a carga externa foi concluída.
2. Digite o seguinte comando para definir a saída para nível alto ou nível baixo：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. Quando o nível externo é alto, o valor de  /sys/class/gpio/gpio638/value   é 0; quando o nível externo é baixo,  /sys/class/gpio/gpio638/value  é 1.

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

Como o reComputer Industrial R22xx está equipado com apenas uma única interface CAN, ele não pode realizar testes de loopback independentes. Para verificar sua funcionalidade de comunicação, é necessário um dispositivo par externo ou um adaptador USB-para-CAN. Para este teste, o reComputer Industrial R21xx (com duas interfaces CAN) servirá como o nó par para estabelecer uma conexão com o reComputer Industrial R22xx. Consulte o seguinte tutorial para obter esquemas específicos de conexão e etapas de configuração:

1. Use duas fios DuPont para fazer um curto-circuito entre H-H e L-L de can0 e can1 para formar um teste de loop mínimo.

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

4. Teste de Comunicação (Unidirecional)
Use can-utils para enviar e receber dados.

Etapa A: R21xx (CAN1) envia → R22xx (CAN0) recebe

- R22xx: candump can0

- R21xx: cansend can1 123#DE.AD.BE.EF.CA.FE.00.11

Etapa B: R22xx (CAN0) envia → R21xx (CAN1) recebe

- R21xx: candump can1

- R22xx: cansend can0 555#1122334455667788



## Teste do Hub USB

Para testar o hub USB, você pode usar os seguintes passos:

1. Verifique se o hub USB é detectado executando o comando ***lsusb***. Esse comando lista todos os dispositivos USB conectados, incluindo hubs.

```bash
lsusb
```

Executar esse comando deve exibir informações sobre os dispositivos USB conectados ao seu sistema, incluindo quaisquer hubs USB presentes.
Se o hub USB estiver funcionando corretamente, você deverá ver seus detalhes listados na saída do comando lsusb. Se ele não estiver listado, pode haver um problema com o hub ou com a conexão dele ao sistema. Nesses casos, talvez seja necessário solucionar problemas do hub USB ou de suas conexões.

## Teste do RTC (Relógio de Tempo Real)

Para testar a funcionalidade do Relógio de Tempo Real (RTC), siga estas etapas:

1. Desative a sincronização automática de horário:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Defina a hora:
Defina o RTC para uma data e hora específicas:

```bash
sudo hwclock --set --date "2025-10-23 16:00:00"
```

3. Sincronizar a hora do RTC com o sistema
Atualize a hora do sistema para corresponder à hora do RTC:  

```bash
sudo hwclock --hctosys
```

4. Verifique a hora do RTC:

```bash
sudo hwclock -r
```

Esse comando irá ler e exibir a hora armazenada no RTC.

5. Desconecte a fonte de alimentação do RTC, aguarde alguns minutos, depois reconecte-a e verifique novamente a hora do RTC para ver se ele manteve a hora correta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.17-1.png" style={{width:800, height:'auto'}}/></div>

## Teste do Timer Watchdog

Para realizar um teste do watchdog, siga estas etapas:

1. Instale o software de watchdog:

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

3. Certifique-se de que o serviço de watchdog está em execução:

```bash
sudo systemctl start watchdog
```

4. Para testar a funcionalidade do watchdog, execute o comando a seguir para simular um travamento do sistema:

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

Esse comando aciona um crash do kernel e deve fazer com que o watchdog reinicie o sistema.

5. Monitore o sistema para confirmar que ele é reiniciado após o período de timeout especificado.
Essas etapas irão ajudá-lo a testar e garantir a funcionalidade do timer watchdog em seu sistema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## Controlando o Buzzer via GPIO  

O GPIO correspondente ao buzzer é o gpio627. Digite o seguinte script para ligar/desligar o buzzer:

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

Se você conectar o módulo TPM 2.0 ao dispositivo, o seguinte código pode ajudar a verificar a conexão TPM.

```bash
ls /dev | grep tpm
```  

**Interpretando a Saída:**  

Se você vir ***tpm0*** e ***tpmrm0*** na saída, isso significa que os dispositivos TPM (Trusted Platform Module) foram detectados e estão disponíveis no seu sistema. Isso indica que o hardware TPM foi reconhecido e está acessível, o que é um bom sinal. Você pode prosseguir usando funcionalidades ou aplicações relacionadas a TPM sabendo que os dispositivos estão presentes e acessíveis.

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

4. Gere um Número de Série Aleatório:

```bash
./atecc -b 10 -s 192 -c 'serial'
```

Esse comando instrui o utilitário ATECC a usar o slot 10 (-b 10), definir o tamanho do número de série para 192 bits ***(-s 192)*** e gerar um número de série aleatório ***(-c 'serial')***. A saída será o número de série gerado, como ***"01235595d3d621f0ee"***.
Esse processo permite que você interaja com o dispositivo ATECC608A e execute várias operações, como gerar números de série aleatórios.

## Interagindo com a EEPROM

Aqui estão os comandos para interagir com uma EEPROM (Memória Somente de Leitura Programável e Apagável Eletricamente):

1. Conceda permissões completas (leitura, gravação e execução) ao arquivo de dispositivo da EEPROM:

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. Escreva a string "This is a test string" no dispositivo EEPROM:

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. Leia o conteúdo do dispositivo EEPROM e exiba-o em formato ***hexadecimal*** usando o utilitário hexdump:

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Verificando a Detecção do SSD

Para listar os discos, incluindo o SSD, você pode usar o comando fdisk -l. Veja como:

```bash
sudo fdisk -l
```

Esse comando exibirá uma lista de todos os discos conectados ao seu sistema, incluindo o SSD se ele for detectado corretamente. Procure entradas que representem o seu SSD. Elas geralmente começam com ***/dev/sd*** seguido por uma letra (por exemplo, ***/dev/sda, /dev/sdb,*** etc.).
Depois de identificar a entrada correspondente ao seu SSD, você pode prosseguir com o particionamento ou formatação conforme necessário.

## UPS para Desligamento Seguro

Um GPIO6 entre a CPU e a entrada de alimentação DC é usado para alertar a CPU quando a fonte de alimentação cai. Então a CPU deve fazer algo urgente em um script antes que a energia do supercapacitor se esgote e executar um "$ shutdown".
Outra maneira de usar essa função é iniciar um desligamento quando o pino GPIO mudar. O pino GPIO fornecido é configurado como uma tecla de entrada que gera eventos KEY_POWER. Esse evento é tratado pelo systemd-logind iniciando um desligamento.

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

- Crie um novo arquivo de script Python:

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

7. Verifique o resultado

- Reconecte a fonte de alimentação.
- Verifique se os dados do sistema estão completos e se ele inicia normalmente.

:::note

1. Para a função de UPS, entre em contato conosco para mais informações.
2. O sinal de alarme é ativo em nível BAIXO.

:::

## Acelerador de IA

O slot M.2 M-KEY 2280 no reComputer Industrial R21xx é projetado para acomodar um Acelerador de IA PCIE M.2. E a série R21xx-12 vem pré-instalada com um módulo Hailo-8 M.2 de Aceleração de IA de até 26TOPS.
Se você comprou o produto da série R21xx-10, será necessário adquirir o módulo NPU da Hailo para habilitar a funcionalidade de IA.
O dispositivo vem pré-instalado com o driver do acelerador Hailo, então você pode usá-lo diretamente e executar o caso de teste:

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
Esta é uma versão leve do exemplo de detecção, focada principalmente em demonstrar o desempenho do Hailo enquanto minimiza a carga da CPU. O pipeline interno de processamento de vídeo GStreamer é simplificado ao minimizar as tarefas de processamento de vídeo, e o modelo YOLOv6 Nano é utilizado.

:::note
Se o reComputer que você comprou não incluir o Hailo-8 e você estiver considerando adquirir um dispositivo Hailo para integração, consulte a documentação oficial da Hailo (https://github.com/hailo-ai) para configurar o firmware e o ambiente, e executar os exemplos para verificar se o dispositivo pode ser usado normalmente.
:::

## Câmera IP PoE

:::note
- Quatro portas Ethernet não devem ser configuradas no mesmo segmento de rede: fazer isso causará conflitos de rede e levará a falhas de comunicação.
- As portas Ethernet não suportam hot-swapping: você deve desligar tanto a placa de desenvolvimento quanto as câmeras antes de conectar ou desconectar cabos Ethernet; o hot-swapping pode resultar em danos permanentes de hardware às portas.
- É estritamente proibida a alimentação externa para câmeras IP: as câmeras devem ser alimentadas somente via PoE através do cabo Ethernet; fornecer alimentação externa adicional pode causar refluxo de corrente e danificar as portas Ethernet da placa de desenvolvimento.
:::

1. Conecte o cabo de rede e inicie a porta de rede:

```bash
echo 652 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio652/direction
echo 1 > /sys/class/gpio/gpio652/value
```

2. Configure a porta de rede:

Recomenda-se usar systemd-networkd para o gerenciamento de rede; a configuração não será perdida após uma reinicialização e não haverá conflitos com outras ferramentas de rede. As etapas são divididas em duas partes: "Teste e verificação temporários" e "Solidificação de configuração permanente".

```bash
sudo systemctl enable --now systemd-networkd
sudo systemctl status systemd-networkd | grep -E 'active|error'
```
:::Note: As portas de rede físicas correspondem aos endereços das portas de rede virtuais:
ETH0-eth0
ETH1-eth4
ETH2-eth3
ETH3-eth2
ETH4-eth1
:::

3. Usando eth1 como exemplo, onde o endereço IP da câmera IP é 10.0.3.200, o método de configuração da porta de rede é o seguinte:

- Configurar IP temporariamente:

```bash
# Clear existing IP on eth1 to avoid conflicts
sudo ip addr flush dev eth1

# Shut down the port and reconfigure
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# Verify IP configuration (should display inet 10.0.3.10/24)
ip addr show eth1 | grep inet

# Test connectivity with the camera (0% packet loss indicates normal status)
ping 10.0.3.200 -I eth1 -c 3
```

- Configurar IP permanentemente:

```bash
# Create the eth1 configuration file
sudo nano /etc/systemd/network/eth1.network

[Match]
Name=eth1 # Matches the interface name; replace if the actual name differs (e.g., enx00e04c68xxxx)

[Network]
Address=10.0.3.10/24 # Static IP and subnet mask
DHCP=no # Disable DHCP auto-acquisition
IPv6AcceptRA=no # Disable IPv6 to reduce interference

#[Link]
NamePolicy=kernel database onboard slot path # Maintain stable interface naming
```

- Salvar e sair: Pressione Ctrl+O → Enter para confirmar → Pressione Ctrl+X.

Outras portas de rede são configuradas da mesma forma, suportando até 4 câmeras IP montadas simultaneamente. 
Exemplo de quatro configurações de câmeras IP, usando os relacionamentos na tabela a seguir:

| Porta Ethernet	| IP Correspondente da Câmera	| IP Estático da Placa de Desenvolvimento	| Usuário e Senha da Câmera| 
| eth1	| 10.0.3.200	| 10.0.3.10	| admin & c32bdc3e| 
| eth2	| 10.0.2.200	| 10.0.2.10	| admin & c32bdc3e| 
| eth3	| 10.1.4.200	| 10.1.4.10	| admin & 9c7d1f96| 
| eth4	| 10.1.1.200	| 10.1.1.1	| admin & c32bdc3e  | 
Siga as etapas acima para configurar cada segmento de rede:

```bash
# ========== Batch Temporary Configuration for eth1-eth4 and Connectivity Testing ==========

# eth1 (Corresponding to camera 10.0.3.200)
sudo ip addr flush dev eth1
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# eth2 (Corresponding to camera 10.0.2.200)
sudo ip addr flush dev eth2
sudo ip link set eth2 down
sudo ip addr add 10.0.2.10/24 dev eth2
sudo ip link set eth2 up

# eth3 (Corresponding to camera 10.1.4.200)
sudo ip addr flush dev eth3
sudo ip link set eth3 down
sudo ip addr add 10.1.4.10/24 dev eth3
sudo ip link set eth3 up

# eth4 (Corresponding to camera 10.1.1.200)
sudo ip addr flush dev eth4
sudo ip link set eth4 down
sudo ip addr add 10.1.1.1/24 dev eth4
sudo ip link set eth4 up

# Verify IP configuration for all ports (should display the static IP for each port)
echo -e "\n==== IP Configuration Status for Each Port ===="
ip addr show | grep -E 'eth[1-4]|inet '

# Test connectivity with all cameras (0% packet loss indicates normal status)
echo -e "\n==== Connectivity Test for Each Camera ===="
ping 10.0.3.200 -I eth1 -c 3
ping 10.0.2.200 -I eth2 -c 3
ping 10.1.4.200 -I eth3 -c 3
ping 10.1.1.200 -I eth4 -c 3
```

Em seguida, use o VLC para acesso: 

```bash
vlc rtsp://admin:c32bdc3e@10.0.3.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.0.2.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:9c7d1f96@10.1.4.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.1.1.200/h264/ch1/main/av_stream --no-one-instance
```

Se você precisar fechar todas as janelas das câmeras, execute o seguinte comando:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.26-1.png" style={{width:800, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
