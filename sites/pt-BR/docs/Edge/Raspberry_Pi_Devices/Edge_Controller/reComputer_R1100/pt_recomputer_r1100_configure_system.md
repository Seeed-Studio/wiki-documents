---
description: Aprenda a configurar e testar componentes de hardware na série reComputer R1100 após instalar os dispositivos. Este wiki abrange mapeamento de GPIO, teste do LED USER, comunicação SPI, varredura de Wi‑Fi e Bluetooth, LoRa®, 4G, Zigbee via Mini-PCIe, RS485, RS232, teste de DI/DO e UPS para desligamento seguro.
title: Configurar reComputer R1100
keywords:
  - Raspberry pi
  - Controlador de Borda
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/
---

## Visão geral

Aprenda a configurar e testar componentes de hardware na série reComputer R1100 após instalar os dispositivos. Este wiki abrange mapeamento de GPIO, teste do LED USER, comunicação SPI, varredura de Wi‑Fi e Bluetooth, LoRa®, 4G, Zigbee via Mini-PCIe, RS485, RS232, teste de DI/DO, UPS para desligamento seguro e mais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Consultar mapeamentos e offsets de GPIO

Para verificar mapeamentos e offsets de GPIO, siga estas etapas:

- **Execute o seguinte comando no terminal**

```bash
cat /sys/kernel/debug/gpio
```

**Este comando exibirá mapeamentos e offsets de GPIO**, fornecendo informações essenciais para depurar ou configurar pinos de GPIO.

## Controlar indicadores de LED

O reComputer R1100 oferece três **indicadores de LED** em **vermelho, azul e verde**. Você pode controlá-los usando os seguintes comandos:  

**1. Navegue até o diretório dos LEDs**  

```bash
cd /sys/class/leds/
ls
```

Isso listará os LEDs disponíveis.

**2. Ative os LEDs escrevendo no arquivo de brilho**  
Alterne para o **modo superusuário** primeiro:  

```bash
sudo su
```

Em seguida, ligue os LEDs:  

```bash
echo 1 > /sys/class/leds/led-red/brightness
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

Para verificar a **comunicação SPI**, você pode executar um teste de loopback **curto-circuitando os pinos MISO e MOSI do módulo TPM**. Esse método garante que os dados enviados em MOSI (Master Out, Slave In) sejam recebidos em MISO (Master In, Slave Out).  

**Guia passo a passo**  

**1. Conecte-se à Internet**  
Certifique-se de que seu dispositivo esteja conectado a uma rede antes de continuar.

**2. Clone o repositório `spidev-test`**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. Acesse o diretório**  

```bash
cd spidev-test
```

**4. Compile o programa `spidev_test.c`**  

```bash
gcc spidev_test.c -o spidev_test
```

**5. Execute o teste SPI**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```

- `-D /dev/spidev0.1` → Especifica o dispositivo SPI  
- `-v` → Habilita saída detalhada  
- `-p "hello"` → Envia a string `"hello"`  

**6. Teste de loopback (opcional)**  

- **Curto-circuite os pinos MISO e MOSI do módulo TPM** antes de executar o teste.
- Se o barramento SPI estiver funcionando corretamente, a saída deverá mostrar que os dados transmitidos foram **recebidos corretamente**.

## Varredura de Wi‑Fi

Para listar as redes Wi‑Fi disponíveis e seus detalhes, execute:  

```bash
sudo iwlist wlan0 scan
```

- Este comando varre todas as redes Wi‑Fi próximas e exibe seus SSIDs, intensidade de sinal e tipo de criptografia.  

## Varredura de Bluetooth  

Para procurar dispositivos Bluetooth, siga estas etapas:  

**Abra a interface de controle do Bluetooth:**  

```bash
sudo bluetoothctl
```

**Ative a varredura:**  

```bash
scan on
```

- Isso inicia a varredura por dispositivos Bluetooth próximos.  

## LoRa® via Mini-PCIe

### Configuração LoRa® SPI  

**Clone o repositório SX1302_HAL:**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**Navegue até o diretório clonado:**

```bash
cd sx1302_hal
```

**Modifique o arquivo de configuração:**  

Abra o arquivo de configuração do dispositivo I2C:  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```

Altere esta linha:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

Para:  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**Compile o código:**

```bash
sudo make
```

**Modifique o script de reset:**

Abra o script `reset_lgw.sh`:  

```bash
sudo vim ./tools/reset_lgw.sh
```

Atualize as configurações de pinos:

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**Copie o script de reset para o diretório do encaminhador de pacotes:**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Atualize a porta SPI padrão no arquivo de configuração do LoRaWAN®:**  

Modifique o arquivo `global_conf.json.sx1250.US915`:  

```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**Inicie o módulo LoRaWAN®:**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### Configuração LoRa® USB

Se você estiver usando um módulo LoRa® USB em vez de LoRa® SPI, siga estas etapas. A maioria dos comandos permanece a mesma que para LoRa® SPI, exceto pela etapa final.

**Puxe para nível alto o pino de Reset do SX1302**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**Inicie o módulo LoRaWAN® USB**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

 LoRa® USB agora está configurado e em execução no reComputer R1100

## 4G Celular via Mini-PCIe

Para interagir com um módulo 4G usando comandos AT via `minicom`, siga estas etapas:  

**Abra o Minicom com a porta serial e taxa de baud apropriadas:**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Este comando abre o Minicom com a porta serial especificada (`/dev/ttyUSB2`) a uma taxa de baud de **115200**.  

**Envie comandos AT para o módulo 4G:**  

Depois que o Minicom estiver aberto, você pode começar a enviar **comandos AT** para o módulo 4G. Por exemplo:  

```bash
AT
```

Este comando verifica se o módulo está respondendo. Se o módulo estiver funcionando corretamente, você deverá receber uma resposta **"OK"**.  

**Discar um número de telefone usando o módulo 4G:**  

Para discar um número de telefone, use o comando `ATD` seguido do número de telefone:  

```bash
ATD<phone_number>;
```

- Substitua `<phone_number>` pelo número de telefone desejado que você quer discar.  
- Certifique-se de incluir um **ponto e vírgula (;)** no final do comando para indicar o fim do número de telefone.  

## Zigbee via Mini-PCIe

Para testar a **comunicação Zigbee** entre dois módulos Zigbee, siga estas etapas:  

**Verificar portas seriais disponíveis**  

Execute o seguinte comando para verificar as portas seriais disponíveis:  

```bash
cat /dev/ttyUSB*
```

**Instalar uma ferramenta de comunicação serial**

Instale o **CuteCom**, um terminal serial gráfico, usando:  

```bash
sudo apt-get install cutecom
```

**Configurar o primeiro módulo Zigbee (Coordenador)**  

- Abra o **CuteCom** e configure-o para a **primeira porta serial**.  
- **Configurações:**
  - **Baud Rate:** 115200  
  - **Habilite "Hex output"** na parte inferior da interface.  

**Etapas para configurar como Coordenador:**  

1. **Definir como Coordenador:** Envie o comando:  

   ```  
   55 04 00 05 00 05  
   ```  

   - Resposta esperada:  

   ```  
   55 04 00 05 00 05  
   ```  

2. **Reiniciar dispositivo:**  
   - Pressione o **botão de reset**, ou  
   - Envie o comando:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **Formação de rede:**
   - Envie o comando:  

   ```  
   55 03 00 02 02  
   ```  

**Configurar o segundo módulo Zigbee (Roteador)**  

- Abra outra instância do **CuteCom** e configure-a para a **segunda porta serial** usando as mesmas configurações.  

**Etapas para configurar como Roteador:**  

1. **Definir como Roteador:** Envie o comando:  

   ```  
   55 04 00 05 01 04  
   ```  

   - Resposta esperada:  

   ```  
   55 04 00 05 00 05  
   ```  

2. **Reiniciar dispositivo:**  
   - Pressione o **botão de reset**, ou  
   - Envie o comando:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **Formação de rede:** Envie o comando:  

   ```  
   55 03 00 02 02  
   ```  

**Verificar status do dispositivo**  
Para verificar o status do dispositivo, envie:  

```  
55 03 00 00 00  
```  

 Resposta esperada:  

```  
55 2A 00 00 00 01 XX XX XX XX  
```  

- `XX` representa informações específicas do dispositivo.  

**Entrar no modo transparente**

Se a **formação de rede** for bem-sucedida, ative o **modo transparente** enviando:  

```  
55 07 00 11 00 03 00 01 13  
```  

**Ambos os módulos devem estar em modo transparente para comunicação direta.**  
Para **sair do modo transparente**, envie:  

```  
+++  
```

**Notas adicionais**  

- Se a **configuração como roteador falhar**, o dispositivo pode já ser um **coordenador**. Para sair da rede, envie:  

  ```  
  55 07 00 04 02 XXXX XX  
  ```  

- Para **testar a potência de transmissão**, use:  
  - **Consultar potência:**  

    ```  
    55 04 0D 00 00 0D  
    ```  

  - **Definir potência:**  

    ```  
    55 04 0D 01 XXXX  
    ```  

Certifique-se de substituir `/dev/ttyUSB*` pela **porta serial correta** para cada módulo Zigbee.  
Siga essas etapas cuidadosamente para estabelecer uma **comunicação Zigbee bem-sucedida** entre os dois módulos.

Aqui está a versão corrigida e bem estruturada com gramática, legibilidade e formatação aprimoradas:  

---

## Teste de RS485

O reComputer R1100 inclui **duas portas RS485**. Abaixo estão suas correspondentes **portas COM** e **arquivos de dispositivo**:  

| **Porta RS485** | **Porta COM** | **Rótulo no silk** | **Arquivo de dispositivo** |
|---------------|-------------|----------------------|----------------|
| **RS485_1**  | COM1        | A1 / B1 / GND       | `/dev/ttyACM0` |
| **RS485_2**  | COM2        | A2 / B2 / GND       | `/dev/ttyACM1` |

**Etapas para testar a funcionalidade RS485**  

**Conecte as portas RS485**  

Conecte fisicamente **RS485_1 (A & B)** a **RS485_2 (A & B)**.  

**Execute o programa de teste RS485**  

Fornecemos um programa de teste para **verificar a transmissão de dados** e medir a velocidade entre as duas portas RS485.  

Execute os seguintes comandos para baixar e executar o programa de teste:  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**Descrição do Teste**  

- Este programa **envia 1MB de dados** de **RS485_1** para **RS485_2**.  
- Ele **registra o tempo de conclusão** e calcula a taxa de baud real.  
- **Observação:** A taxa de baud real pode ser ligeiramente inferior à taxa de baud teórica, o que é esperado.  

**Siga estes passos com atenção para verificar a comunicação RS485 no reComputer R1100.**

## Teste de RS232

O reComputer R1100 possui **duas portas RS232**. Abaixo estão as portas COM correspondentes e os arquivos de dispositivo:  

| Porta RS232 | Porta COM | Mapeamento de Pinos | Arquivo de Dispositivo |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |  

**Testando a Comunicação RS232**  

Siga estes passos para testar a funcionalidade RS232:  

1. **Conecte as portas:**  
   - Conecte o **TX do RS232_1** ao **RX do RS232_2**.  
   - Conecte o **RX do RS232_1** ao **TX do RS232_2**.  

2. **Execute o programa de teste:**  
   - Clone o repositório do programa de teste:  

     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```  

   - Navegue até o diretório:  

     ```bash
     cd R1100_TEST
     ```  

   - Compile o programa de teste:  

     ```bash
     gcc -o serial_test serial_test.c
     ```  

   - Execute o teste:  

     ```bash
     ./serial_test /dev/ttyACM2 /dev/ttyACM3 115200
     ```  

Este teste envia **1MB de dados** de RS232_1 para RS232_2 e mede o tempo de conclusão e a taxa de baud. Observe que a taxa de baud real pode ser ligeiramente inferior ao valor teórico, o que é normal.

## Teste de DI (Entrada Digital)

O reComputer R1100 inclui **duas portas de Entrada Digital (DI)**, que podem ser configuradas com base nos requisitos do usuário.  

| **Número de Portas DI** | **Porta DI** | **GPIO Estendido Correspondente** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DI1**     | **GPIO530**                    |
|                       | **DI2**     | **GPIO531**                    |

**Especificações da Porta DI**  

- **Tipo de Entrada:** PNP  
- **Tensão de Entrada Suportada:** **5VDC – 24VDC**  
- **Corrente:** **Até 1000mA**  

**Passos para Testar a Funcionalidade DI**  

**Garanta a Conexão Correta**  

Certifique-se de que a **porta DI** do reComputer R1100 esteja corretamente conectada à **carga externa**, e também certifique-se de que a porta **G_D** esteja conectada ao **GND da fonte de alimentação**.

**Verifique o Status do GPIO**  

Execute os seguintes comandos para verificar o status do **GPIO530** (correspondente ao DI1):  

```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**Interprete o Valor do GPIO**  

- **Se o nível externo for ALTO (HIGH)**, a saída de `/sys/class/gpio/gpio530/value` será **0**.  
- **Se o nível externo for BAIXO (LOW)**, a saída de `/sys/class/gpio/gpio530/value` será **1**.  

## DO (Saída Digital)

O **reComputer R1100** inclui **duas portas de Saída Digital (DO)**, que podem ser configuradas com base nos requisitos do usuário.  

| **Número de Portas DO** | **Porta DO** | **GPIO Estendido Correspondente** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DO1**     | **GPIO532**                    |
|                       | **DO2**     | **GPIO533**                    |

**Especificações da Porta DO**  

- **Tipo de Saída:** Transistor  
- **Tensão de Saída Suportada:** **Até 60VDC**  
- **Capacidade de Corrente:** **500mA**  

**Passos para Testar a Funcionalidade DO**  

**Garanta a Conexão Correta**  
Confirme que a **porta DO** do reComputer R1100 esteja corretamente conectada à **carga externa**.

**Como a porta DO é uma saída de coletor aberto e não possui capacidade de acionamento, utilize um resistor externo para puxá-la para a fonte de alimentação.**

**Defina o Nível de Saída**  
Execute os seguintes comandos para definir a saída como **ALTA (HIGH)** ou **BAIXA (LOW)**:  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## Teste do Hub USB

Para verificar a funcionalidade do **hub USB**, siga estes passos:  

**Verifique se o Hub USB foi Detectado**  

Execute o seguinte comando para listar todos os dispositivos USB conectados, incluindo hubs:  

```bash
lsusb
```

**Verificar a Detecção do Hub USB**

- Este comando exibirá informações sobre todos os **dispositivos USB** conectados ao seu sistema, incluindo **hubs USB**.  
- Se o hub USB estiver **funcionando corretamente**, seus detalhes deverão aparecer na saída do comando.  
- Se o hub **não estiver listado**, pode haver um problema com o **próprio hub ou com a conexão** dele ao sistema.  

**Solução de Problemas (Se o Hub USB Não for Detectado)**  

- Verifique a **conexão física** do hub USB.  
- Tente conectar o hub a uma **porta USB diferente**.  
- Reinicie o dispositivo e execute novamente `lsusb`.  
- Se o problema persistir, o hub pode estar com defeito.  

## Teste do RTC (Relógio de Tempo Real)

Para verificar a **funcionalidade do RTC** no **reComputer R1100**, siga estes passos:  

**Desative a Sincronização Automática de Hora**  

Antes de testar o RTC, pare e desative a sincronização automática de hora para evitar conflitos:  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**Defina Manualmente a Hora do RTC**

Defina o RTC para uma data e hora específicas (por exemplo, 12 de novembro de 2024 às 12:00):  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**Sincronize a Hora do RTC com o Sistema**

Atualize a hora do sistema para corresponder à hora do RTC:  

```bash
sudo hwclock --hctosys
```

**Verifique a Hora do RTC**  
Verifique a hora atual armazenada no RTC:  

```bash
sudo hwclock -r
```

Este comando exibirá a hora do RTC.

**Teste de Retenção do RTC**  

- **Desconecte a fonte de alimentação** do RTC.  
- **Espere alguns minutos**.  
- **Reconecte a alimentação** e verifique novamente a hora do RTC usando:  

  ```bash
  sudo hwclock -r
  ```

- Se a hora permanecer correta, o RTC está funcionando adequadamente.  

## Teste do Timer Watchdog

Para testar o **timer watchdog** no **reComputer R1100**, siga estes passos:  

**Instale o Software do Watchdog**  

Certifique-se de que o pacote do watchdog esteja instalado:  

```bash
sudo apt install watchdog
```

**Configure o Watchdog**  

Edite o **arquivo de configuração do watchdog**:  

```bash
sudo apt-get install vim  # Install Vim if not already installed  
sudo vim /etc/watchdog.conf
```

Modifique a configuração da seguinte forma:  

```ini
watchdog-device = /dev/watchdog  

# Set the hardware timeout (default is 1 minute)
watchdog-timeout = 120  

# Set the interval between tests (should be shorter than watchdog-timeout)
interval = 15  

# Set system load limits  
max-load-1 = 24  
# max-load-5 = 18  
# max-load-15 = 12  

# Enable real-time priority  
realtime = yes  
priority = 1  
```

**Inicie o Serviço do Watchdog**  
Habilite e inicie o serviço do watchdog:  

```bash
sudo systemctl start watchdog
```

**Teste o Watchdog Simulando um Travamento do Sistema**

Dispare um **kernel crash** para verificar se o watchdog **reinicia automaticamente** o sistema:  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**Monitore o Sistema**  
Verifique se o sistema **reinicia automaticamente** após o **período de timeout** especificado.  

**Se o reinício ocorrer conforme o esperado, o watchdog está funcionando corretamente.**  

## Controlando o Buzzer via GPIO  

O buzzer está mapeado para o GPIO 587. Use os seguintes comandos para ligá-lo e desligá-lo:  

**Ligar o buzzer:**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 1 > /sys/class/gpio/gpio587/value  
```  

**Desligar o buzzer:**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 0 > /sys/class/gpio/gpio587/value  
```  

## Teste da Câmera CSI

Para testar a **câmera CSI** no **reComputer R1100**, siga estes passos:  

**Modifique o Arquivo de Configuração**  

Edite o arquivo **config.txt** para habilitar o módulo de câmera:  

```bash
sudo nano /boot/firmware/config.txt
```

Adicione a seguinte linha ao **final** do arquivo:  

```ini
dtoverlay=imx219,cam0
```

**Reinicie o Sistema**

Reinicie para aplicar as alterações:  

```bash
sudo reboot
```

**Verifique a Detecção da Câmera**  

Após reiniciar, verifique se a câmera foi detectada:  

```bash
libcamera-jpeg --list-cameras
```

---

**Teste a Câmera**  

Execute o seguinte comando para ativar a câmera:  

```bash
rpicam-hello --timeout 0
```

**Se a pré-visualização da câmera iniciar com sucesso, a configuração está concluída!**  

## Verificação da Conexão TPM 2.0

Se você conectou um **módulo TPM 2.0** ao seu dispositivo, pode verificar a detecção dele usando o seguinte comando:  

```bash
ls /dev | grep tpm
```  

**Interpretando a Saída:**  

- Se você vir **`tpm0`** e **`tpmrm0`** na saída, isso confirma que o **TPM (Trusted Platform Module)** foi detectado com sucesso e está disponível.  
- Isso indica que o hardware TPM foi reconhecido e está acessível, permitindo que você prossiga com funcionalidades ou aplicativos relacionados a TPM.  

**Se os dispositivos estiverem listados, seu módulo TPM está devidamente conectado e pronto para uso.**  

## Interagindo com o ATECC608A e Gerando um Número de Série Aleatório

Para se comunicar com o dispositivo **ATECC608A** e gerar um número de série aleatório, siga estes passos:  

**Clone o Repositório `atecc-util`:**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**Navegue até o Diretório `atecc-util`:**  

```bash
cd atecc-util
```  

**Clone o Repositório `cryptoauthlib`:**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**Compile o Utilitário ATECC:**

```bash
make
```  

**Gere um Número de Série Aleatório:**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  

- **`-b 1`** → Usa o slot 1.  
- **`-s 192`** → Define o tamanho do número de série como **192 bits**.  
- **`-c 'serial'`** → Gera um número de série aleatório.  

**Saída Esperada:**  

O número de série gerado será exibido, por exemplo:  

```bash
01235595d3d621f0ee
```  

Este método permite a interação com o dispositivo **ATECC608A**, permitindo que você execute operações como gerar números de série aleatórios de forma eficiente.  

## Interagindo com a EEPROM

Para ler e gravar dados em uma **EEPROM** (Memória Somente Leitura Programável e Apagável Eletricamente), siga estas etapas:  

**Conceda permissões completas ao arquivo de dispositivo da EEPROM:**  

```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**Gravar dados na EEPROM:**  

```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**Ler o conteúdo da EEPROM em formato hexadecimal:**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Verificando a detecção do SSD

Para listar todos os discos conectados, incluindo o SSD, use o seguinte comando:  

```bash
sudo fdisk -l
```  

Este comando exibirá uma lista de todos os dispositivos de armazenamento detectados. Procure por entradas que representem o seu SSD, normalmente rotuladas como:  

- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc`, etc.  

Depois de identificar a entrada correta do SSD, você pode prosseguir com **particionamento, formatação ou outras tarefas de gerenciamento de disco** conforme necessário.

## UPS para Desligamento Seguro

Uma conexão **GPIO6** entre a **CPU e a entrada de alimentação DC** é usada para notificar a CPU quando a fonte de alimentação é desligada. A CPU deve executar **tarefas urgentes por meio de um script** antes que a energia do supercapacitor se esgote e então iniciar um **desligamento seguro (`$shutdown`)**.  

**Método alternativo de desligamento**  
Outra forma de usar essa função é **acionar um desligamento quando o pino GPIO mudar de estado**. O pino GPIO especificado é configurado como uma **tecla de entrada**, gerando **eventos KEY_POWER**. Esses eventos são tratados pelo **systemd-logind**, que inicia automaticamente o desligamento do sistema.  

Para habilitar essa função, consulte `/boot/overlays/README` e, em seguida, modifique `/boot/firmware/config.txt` adicionando:  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. Para **detalhes da funcionalidade de UPS**, entre em contato conosco.  
2. O **sinal de alarme é ativo em nível BAIXO**.  

:::
---

#### Código Python para desligamento seguro  

O script Python a seguir demonstra **como detectar o modo de funcionamento** do **UPS de supercapacitor via GPIO6**. Quando o sistema detecta um evento de desligamento, ele **salva os dados automaticamente e desliga com segurança**.  

```python
import RPi.GPIO as GPIO
import time
import os

num = 0

GPIO.setmode(GPIO.BCM)  # Set GPIO numbering mode
GPIO.setup(6, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Set GPIO6 as input with pull-up resistor
GPIO.add_event_detect(6, GPIO.FALLING, bouncetime=500)  # Add debounce time for stabilization

while True:
    if GPIO.event_detected(6):
        print("...External power off detected...")
        os.system("sync")  # Ensure data is written to disk
        print("...Saving data...")
        time.sleep(3)
        os.system("sync")  # Save data again

        while num < 5:
            print(f"--- {5 - num} seconds remaining ---")
            num += 1
            time.sleep(1)

        os.system("sudo shutdown -h now")  # Execute system shutdown
```

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
