---
description: Uso de hardware e interfaces do reComputer Rugged J401
title: Uso de Hardware e Interfaces do reComputer Rugged J401
keywords:
  - reComputer Rugged
  - reComputer Rugged J401
  - IP66
  - Jetson
  - hardware interface
image: https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png
slug: /ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage
sku: 100046979,100002634
last_update:
  date: 08/14/2026
  author: Dongxu Jin
createdAt: '2026-08-14'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage/
---

# Uso de Hardware e Interfaces do reComputer Rugged J401

Este wiki apresenta os diversos hardwares e interfaces do reComputer Rugged J40 e explica como usá-los para expandir suas ideias de projeto. A maioria das interfaces no reComputer Rugged J40 utiliza conectores M12, oferecendo resistência à água e poeira com classificação IP66, bem como excelente resistência a vibrações. Isso o torna adequado para implantação de longo prazo em ambientes externos severos, como embarcações e sistemas de monitoramento de portos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png" alt="Image" width={800} height="auto" /></p>

# Visão Geral das Interfaces de Hardware

## Alimentação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

O reComputer Rugged J401 está equipado com uma interface de alimentação M12 A-code DC 19–48V, compatível com uma ampla faixa de tensão de entrada, tornando-o adequado para diversos ambientes de fornecimento de energia. A definição da interface é mostrada na tabela abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pino|Uso|Tipo|Cor do fio|
|---|---|---|---|
|1|Entrada de alimentação DC|Energia|Marrom|
|2|||Branco|
|3|Terra|Terra|Azul|
|4|||Preto|

## Display

Remova os dois parafusos que fixam a tampa lateral à prova d'água e abra-a para acessar a porta HDMI 2.1, que fornece saída de vídeo de alta qualidade.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## M.2 Key M para SSD e M.2 Key E para Wi-Fi e Bluetooth

O reComputer Rugged J401 possui uma interface M.2 Key E, por meio da qual você pode expandir os recursos de Bluetooth e Wi-Fi do dispositivo. Recomendamos o uso da placa de rede sem fio Intel Dual Band RTL8822CE.

M.2 Key M é uma interface projetada para unidades de estado sólido (SSDs) de alta velocidade, oferecendo velocidades de transferência de dados ultrarrápidas, ideal para aplicações de alto desempenho.

A localização da interface é mostrada na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/5.jpg" alt="Image" width={800} height="auto" /></p>

### **Instruções de Uso**

Se você quiser remover o SSD incluído e instalar um novo, precisa garantir que seu SSD atenda às duas condições a seguir:

- Suportar o **slot M.2 Key M com interface x4 PCIe Gen3**.

- Estar em conformidade com a especificação de tamanho **2242**.



Abra o terminal no dispositivo Jetson e insira o seguinte comando para testar a velocidade de leitura e gravação do SSD.

```Bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/6.png" alt="Image" width={800} height="auto" /></p>

Execute o comando `sudo rm tempfile` para excluir os arquivos de cache após a conclusão do teste.

Após instalar o módulo Wi-Fi e ligar o dispositivo, podemos configurar as configurações de Wi-Fi e Bluetooth do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/7.gif" alt="Image" width={800} height="auto" /></p>

Claro, também podemos verificar o status de operação do dispositivo usando os seguintes comandos.

```Bash
ifconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/8.png" alt="Image" width={800} height="auto" /></p>

```Bash
bluetoothctl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/9.png" alt="Image" width={800} height="auto" /></p>

## M.2 Key B para Módulo 4G/5G

O slot M.2 Key B oferece suporte a módulos celulares 4G/5G com suporte a Nano SIM.

### Conexão de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/10.png" alt="Image" width={800} height="auto" /></p>

### Instruções de Uso

**Passo 1.** Verificar Reconhecimento de Hardware

```Bash
lsusb 
```

Este comando exibe uma lista de todos os dispositivos USB conectados ao sistema, juntamente com seu fabricante (ID), tipo e outras informações. Por exemplo, a saída pode mostrar um dispositivo da Quectel Wireless Solutions Co., Ltd. EM12-G, indicando que o módulo 5G está presente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**Passo 2.** Confirmar Carregamento do Driver

É essencial garantir que o driver option, necessário para o módulo 5G, esteja carregado. Podemos usar o comando lsmod para verificar.

```Bash
lsmod | grep option 
```

Se o driver option for carregado com sucesso, informações relevantes sobre o driver serão exibidas na saída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**Passo 3.** Configurar o ModemManager

ModemManager é uma ferramenta para gerenciar dispositivos modem, e precisa ser instalado e reiniciado.

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

O comando apt install é usado para instalar o pacote ModemManager, enquanto systemctl restart reinicia o serviço ModemManager para garantir que as novas configurações entrem em vigor.

**Passo 4.** Verificar Identificação do Módulo

Podemos usar o comando mmcli -L para verificar se o ModemManager consegue identificar corretamente o módulo 5G.

```Bash
mmcli -L 
```

Se o módulo 5G for reconhecido, será exibida uma saída semelhante a /org/freedesktop/ModemManager1/Modem/0, indicando o caminho para o dispositivo modem detectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**Passo 5.** Definir o APN

APN (Access Point Name) é crucial para conectar um dispositivo móvel à rede. Usaremos o comando nmcli para criar um perfil de portadora. Tomando a China Mobile como exemplo, podemos criar um arquivo de configuração com os seguintes comandos:

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando adiciona uma nova conexão do tipo GSM (Global System for Mobile Communications), especificando o APN como "CMNET" e usando configuração IPv4 automática.

**Passo 6.** Ativar a Conexão

Após criar o perfil de portadora, precisamos ativar a conexão.

```Bash
sudo nmcli con up "gsm" 
```

Este comando ativa a conexão GSM e, se for bem-sucedido, uma mensagem de confirmação será exibida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/14.png" alt="Image" width={800} height="auto" /></p>

**Passo 7.** Re-verificar a Identificação do Módulo

Execute novamente o comando mmcli -L para garantir que o módulo continue sendo reconhecido após a configuração do APN.

```Bash
mmcli -L 
```

**Passo 8.** Verificar o Status do Módulo

Por fim, podemos usar o comando mmcli -m 0 para visualizar informações detalhadas sobre o módulo, como alocação de IP, operadora e status da conexão de rede.

```Bash
mmcli -m 0 
```

Este comando fornece detalhes abrangentes sobre o módulo 5G, incluindo seu fabricante, modelo, tecnologias de rede suportadas e atuais, status do dispositivo e operadoras de rede conectadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## Ethernet

O reComputer Rugged J401 oferece 1x porta Ethernet Gigabit padrão (10/100/1000M) RJ45 (J35) e 4x portas Gigabit PSE (Power Sourcing Equipment) RJ45 (J36–J39). A porta Gigabit padrão é usada para conectividade geral de rede. As portas PSE suportam os padrões IEEE 802.3af/at, permitindo fornecimento de energia via Ethernet para dispositivos conectados, como câmeras IP e pontos de acesso sem fio, com saída máxima de 15,4 W por porta (802.3af). Isso o torna ideal para aplicações industriais, AMR e de computação de borda externa, eliminando a necessidade de cabeamento de energia separado. Todas as portas Gigabit são derivadas do controlador PCIe dentro do módulo Jetson Orin e suportam auto-negociação 10/100/1000M.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

## USB

O reComputer Rugged J401 oferece 4x portas USB 3.2 Type-A (por meio de um hub interno USB 3.1 Gen1, suportando taxas de dados de até 5 Gbps para conexão de periféricos de alta velocidade, dispositivos de armazenamento ou câmeras) e 1x porta USB 2.0 Type-C de depuração (que funciona como um console serial para acessar logs do sistema, depurar problemas de boot e realizar atualizações de firmware).

### Teste de Velocidade USB-A

Crie um script para testar a velocidade do dispositivo USB:

```Bash
vim test_usb.sh
```

Cole o seguinte conteúdo:

```Bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

Pressione Esc para sair do modo Insert, depois digite `:w` e pressione Enter para salvar o script e, em seguida, saia do processo.

Torne o script executável e teste:

```Bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/17.png" alt="Image" width={800} height="auto" /></p>

### Porta USB 2.0 Type-C

Usando esta porta serial, por meio do cabo de dados USB-C, você pode monitorar as informações de depuração de entrada e saída no lado do PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/18.jpg" alt="Image" width={400} height="auto" /></p>

Instale o Silicon Labs CP210x Universal Windows VCP Driver no Windows.

No Gerenciador de Dispositivos, localize e confirme a porta COM atribuída ao dispositivo serial

(COM8 na captura de tela).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/19.png" alt="Image" width={800} height="auto" /></p>

Execute o seguinte comando no PowerShell：

```PowerShell
#Choose your own serial port 
python -m serial.tools.miniterm COM8 115200
```

Faça login com nome de usuário e senha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/20.png" alt="Image" width={800} height="auto" /></p>

## RTC

O reComputer Rugged J401 inclui um RTC de hardware com bateria de backup para manter a hora com precisão. 

### Conexão de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### Instruções de uso

**Passo 1.** Conecte uma bateria de RTC conforme mencionado acima.

**Passo 2.** Ligue o reComputer Rugged J401.

**Passo 3.** No Ubuntu Desktop, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede via cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

Se você não tiver se conectado à internet via Ethernet, pode definir a data/hora manualmente aqui.

**Passo 4.** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware:

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Passo 5.** Desconecte a conexão de rede e reinicie o dispositivo. Você verá que o horário do sistema perdeu a alimentação, mas ainda funciona normalmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

> Testes e uma introdução serão adicionados assim que a documentação estiver concluída.
> 
> 

## DI/DO

As interfaces DI/DO do reComputer Rugged J401 são integradas no conector J47 2x10P, compartilhando a interface com as interfaces CAN. Elas suportam 2 canais de entrada digital e 2 canais de saída digital, com transmissão de sinal estável e adaptação de tensão em nível industrial, adequadas para conectar sensores digitais, relés e outros dispositivos periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### Conexão de hardware

Os pinos DI/DO correspondentes na interface M12 são mostrados na figura abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

Canais de Entrada Digital (DI) / Saída Digital (DO)

### Instruções de uso

#### Operação de Saída Digital (DO)

As interfaces DO adotam saída de dreno aberto. Você pode definir o nível de saída (alto/baixo) por meio de comandos para controlar periféricos como relés e LEDs.

Execute o seguinte comando para habilitar o canal DO (saída de 12 V, alimentado pelo resistor de pull-up externo e pela fonte de alimentação de 12 V):

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

Execute o seguinte comando para desabilitar o canal DO (saída ~0 V):

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO antes de puxar para alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO depois de puxar para alto:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **Operação de Entrada Digital (DI)**

Use o comando `gpioget` para ler o nível de entrada do canal DI (valor de retorno `1` = nível alto, `0` = nível baixo) e obter o status dos dispositivos periféricos.

```PowerShell
# Read DI_12V_1 (gpiochip0 105) status
gpioget gpiochip0 105

# Read DI_12V_2 (gpiochip0 144) status
gpioget gpiochip0 144
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/28.png" alt="Image" width={400} height="auto" /></p>



## UART

O reComputer Rugged J401 está equipado com uma interface UART independente (UART1) que suporta os modos de comunicação RS232, RS422 e RS485, com transmissão de sinal estável e ampla compatibilidade com dispositivos periféricos.

### Conexão de hardware

Canais da interface UART

Alterne entre os modos RS232, RS485 e RS422 alternando a chave SW3.

Observação: Quando a chave é pressionada para baixo (ON), o bit é 0; quando não está pressionada, o bit é 1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|Mode|Status|
|---|---|---|---|---|
|0|0|0|RS-422 Full Duplex|1T/1R RS-422|
|0|0|1|RS-232 Puro|3T/5R RS-232|
|0|1|0|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE <br />Ativo em nível baixo|
|0|1|1|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE Ativo em nível alto|
|1|0|0|RS-422 Full Duplex|RS-422 com resistor de terminação|
|1|0|1|RS-232|1T/1R RS-232 coexiste com aplicação RS485 sem necessidade de chave de barramento (para uso especial)|
|1|1|0|RS-485|1T/1R RS-485 com resistor de terminação, TX ENABLE Ativo em nível baixo|
|1|1|1|Desligado|Todos os pinos de E/S estão em alta impedância|



## SPI

### Conexão de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### Instruções de uso

Use fios Dupont para conectar os pinos centrais do canal SPI de destino (tomando /dev/spidev0.0 como exemplo): conecte o pino MOSI ao pino MISO correspondente (realizando transmissão/recepção de dados em loopback).

O diagrama de fiação é o seguinte:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**Passo 1: Carregar o módulo de kernel SPI (pré-requisito)**

Antes de operar a interface SPI, certifique-se de que o módulo de kernel `spidev` esteja carregado (o sistema padrão pode pré-carregá-lo, mas é recomendável verificar manualmente):

```Bash
sudo modprobe spidev
```

Se o comando for executado sem mensagens de erro, significa que o módulo foi carregado com sucesso; se o módulo já estiver carregado, o comando não retornará nenhuma informação, o que é um fenômeno normal.

**Passo 2: Ver os nós de dispositivo SPI**

Digite o seguinte comando no terminal para ver o nome do dispositivo mapeado pela interface SPI do reComputer Rugged J401:

```Bash
ls /dev/spidev*
```

Se nenhum nó de dispositivo for exibido, significa que o módulo `spidev` não foi carregado com sucesso. Execute novamente `sudo modprobe spidev` e verifique o log do sistema para solução de problemas.

**Passo 3: Obter e compilar o código de teste SPI**

Obtenha o código de teste `spidev-test` do GitHub e compile-o:

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Passo 4: Executar o programa de teste SPI**

Digite o seguinte comando no terminal para executar o programa de teste SPI (tomando `/dev/spidev2.0` como exemplo):

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**Passo 5: Verificar o resultado do teste**

Após executar o comando de teste, você pode observar no terminal o status de transmissão e recepção de dados da interface SPI0.0. A saída principal é a seguinte:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> Padrão-chave de avaliação: os dados TX (transmitidos) são consistentes com os dados RX (recebidos), indicando que o teste de loopback SPI foi bem-sucedido e que a função da interface SPI está normal.
> 
> 

## **I2C**

O Rugged J401 fornece uma interface I2C por meio do conector J8 2x10 pinos, permitindo a fácil conexão de sensores e periféricos para expansão do sistema.

### **Conexão de hardware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

Conecte seu dispositivo I2C à interface I2C na placa carrier:

- Ground -> Ground (Pino 1)

- SDA -> SDA (Pino 16)

- SCL -> SCL (Pino 14)

- VCC -> 3V3 (Pino 20)

### **Instruções de uso**

**Passo 1.** Instale as ferramentas de teste I2C:

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**Passo 2.** Veja os mapeamentos do barramento I2C:

```Bash
i2cdetect -l
```

**Passo 3.** Procure dispositivos no barramento I2C:

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## Recursos

- [reComputer Rugged J40 Datasheet](#) *(em breve)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
