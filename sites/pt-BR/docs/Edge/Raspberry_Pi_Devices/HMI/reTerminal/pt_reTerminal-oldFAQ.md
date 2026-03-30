---
description: reTerminal-FAQ
title: FAQs para uso do reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-FAQ
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2022-11-30'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reTerminal-FAQ/
---

# FAQs para uso do reTerminal

Este documento contém todas as perguntas frequentes relacionadas ao reTerminal. Isto será muito útil se você estiver enfrentando algum problema ao usar o reTerminal.

## P1: Como posso atualizar o firmware STM32 para o LCD do reTerminal

**Nota:** Se o seu reTerminal foi fabricado depois de 26/09/2021, o STM32 vem com o firmware V1.8 pré-instalado.

É muito importante garantir que você tenha o firmware mais recente gravado no chip STM32G030 do reTerminal. O STM32G030 é responsável por controlar o LCD do reTerminal. Atualizar o chip STM32 para a versão mais recente ajudará a resolver a maioria dos problemas que você enfrenta com o LCD do reTerminal.

Existem 2 métodos para gravar o chip STM32.

- **Método 1:** Conectar-se diretamente ao chip STM32 usando o CM4 no reTerminal e gravar o firmware
- **Método 2:** Conectar fisicamente os pinos do chip STM32 ao GPIO de 40 pinos do reTerminal usando jumpers e então usar o OpenOCD para gravar o firmware

O **Método 1** funciona se você tiver a **nova versão (v1.7 ou superior)** do firmware STM32 no reTerminal e, por outro lado, o **método 2** só é necessário se você tiver a **versão antiga (inferior à v1.7)** do firmware STM32 na placa.

### Decidir qual método de gravação usar

Agora vamos seguir os passos abaixo para identificar qual versão da placa temos, para que possamos escolher o método de gravação apropriado.

- **Passo 1.** Entre na janela de terminal do reTerminal e digite o seguinte para abrir o arquivo de configuração

```sh
sudo nano /boot/config.txt
```

- **Passo 2.** Bem no final desse arquivo, comente a linha que diz **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

**Nota:** Isto irá descarregar todos os drivers do reTerminal. Então, quando você ligar o reTerminal da próxima vez, nenhum dos drivers será carregado.

- **Passo 3.** Reinicie o reTerminal

```sh
sudo reboot
```

- **Passo 4.** Coloque o STM32 em **modo de boot** através do **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Passo 5.** Liste os dispositivos I2C conectados

```sh
i2cdetect -y 1
```

Se você conseguir ver o endereço I2C **0x56** como na tabela abaixo, você tem a **nova versão (v1.7 ou superior)** do firmware STM32 na placa.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

Entretanto, se você conseguir ver o endereço I2C **0x45** como na tabela abaixo, você tem a **versão antiga (inferior à v1.7)** do firmware STM32 na placa

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Abra o arquivo de configuração que usamos antes

```sh
sudo nano /boot/config.txt
```

- **Passo 7.** Bem no final desse arquivo, descomente a linha que diz **dtoverlay=reTerminal** para carregar os drivers novamente

```sh
dtoverlay=reTerminal
```

- **Passo 8.** Desligue o reTerminal

```sh
sudo poweroff
```

**Nota:** Se você já estiver executando o **firmware STM32 v1.8**, assim que entrar no **modo de boot** através do **i2c-tools**, a única maneira de sair do modo de boot é gravar o firmware STM32.

### Conectar ao STM32 usando o CM4 e gravar o firmware

Se você tiver a **nova versão (v1.7 ou superior)** do firmware STM32 na placa, siga este método.

- **Passo 1.** Entre na janela de terminal do reTerminal e digite o seguinte para abrir o arquivo de configuração

```sh
sudo nano /boot/config.txt
```

- **Passo 2.** Bem no final desse arquivo, comente a linha que diz **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **Passo 3.** Reinicie o reTerminal

```sh
sudo reboot
```

- **Passo 4.** Crie um novo diretório dentro do reTerminal e entre nele.

```sh
mkdir STM32
cd STM32
```

<!-- - **Step 5.** Visit [this link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) and download **stm32flash** file and the **STM32G030F6_R2.bin** file from the **latest release** version.

**Note:** You can click on them to start downloading -->

- **Passo 5.** Baixe o arquivo **stm32flash** e o **STM32G030F6_R2.bin**

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **Passo 6.** Descompacte **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **Passo 7.** Vá para a pasta chamada **stm32flash-0.7** e torne a ferramenta de gravação executável

```sh
cd stm32flash-0.7/
make
```

- **Passo 8.** Coloque o STM32 em **modo de boot** através do **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Passo 9.** Apague a flash no chip STM32 usando a **ferramenta stm32flash**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **Passo 10.** Grave o firmware no STM32 usando a ferramenta stm32flash

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Nota:** **STM32G030F6_R2.bin** é o nome do arquivo do novo firmware

- **Passo 11.** Modifique o registrador OPTR conforme a seguir

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **Passo 12.** Abra o arquivo de configuração que usamos antes

```sh
sudo nano /boot/config.txt
```

- **Passo 13.** Bem no final desse arquivo, descomente a linha que diz **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Passo 14.** Reinicie o reTerminal

```sh
sudo reboot
```

<!-- - **Step 6.** Open command prompt on PC and navigate to the location of the downloaded files before

```sh
cd C:\Users\user\Downloads
```

- **Step 7.** Transfer the files to the **STM32** directory on the reTerminal we created before

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**Note:** **pi** is the username and **192.168.x.xx** is the IP address of reTerminal. You can replace this with hostname of reTerminal as well.

- **Step 8.** Inside the terminal window of reTerminal, enter the **STM32** directory

```sh
cd STM32
```

Then you will see the files that we copied earlier

- **Step 9.** Make the flash tool **executable**

```sh
chmod +x stm32flash
``` -->

<!-- - **Step 10.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Step 11.** Erase the flash in the STM32 chip using **stm32flash tool**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **Step 12.** Flash the firmware to STM32 using stm32flash tool

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Note:** **STM32G030F6_R2.bin** is the file name of the new firmware

- **Step 13.** Modify the OPTR register as follows

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **Step 14.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **Step 15.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Step 16.** Reboot reTerminal

```sh
sudo reboot
``` -->

Agora você gravou o firmware no STM32 com sucesso!

### Conectar ao STM32 usando jumpers e OpenOCD

Se você tiver a **versão antiga (inferior à v1.7)** do firmware STM32 na placa, siga este método.

- **Passo 1.** Entre na janela de terminal do reTerminal e digite o seguinte para atualizar a lista de pacotes

```sh
sudo apt-get update
```

- **Passo 2.** Instale os seguintes pacotes

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **Passo 3.** Clone o repositório a seguir e navegue até ele

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **Passo 4.** Acesse [este link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) e baixe o arquivo **STM32G030F6_R2.bin** da **última versão** lançada.

**Nota:** Você pode clicar nele para iniciar o download

- **Passo 5.** Abra o prompt de comando no PC e navegue até o local dos arquivos baixados anteriormente

```sh
cd C:\Users\user\Downloads
```

- **Passo 6.** Transfira os arquivos para o diretório **openocd** no reTerminal que criamos anteriormente

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**Nota:** **pi** é o nome de usuário e **192.168.x.xx** é o endereço IP do reTerminal. Você também pode substituir isso pelo hostname do reTerminal.

- **Passo 7.** Volte para a janela de terminal no reTerminal e digite o seguinte dentro do diretório **openocd**

```sh
./bootstrap
```

- **Passo 8.** Digite o seguinte

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **Passo 9.** Compile-o

```sh
make
```

- **Passo 10.** Instale-o

```sh
sudo make install
```

- **Passo 11.** Siga a conexão abaixo para conectar os pinos do STM32 ao GPIO de 40 pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Os pinos do STM32 estão localizados na parte de trás da PCBA do reTerminal.

- **Passo 12.** Mantendo a conexão, digite o seguinte comando para gravar o firmware no STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**Nota:** Normalmente leva cerca de 3 segundos para terminar a gravação. Portanto, você precisa **manter** a conexão acima por cerca de **3 segundos** até que o processo de gravação seja concluído

Se você vir o seguinte log, isso significa que o firmware STM32 foi gravado com sucesso!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **Passo 13.** Desconecte as conexões e **desconecte fisicamente o cabo de alimentação diretamente** sem o comando **poweroff**

**Nota:** Se você não desconectar fisicamente o cabo de alimentação, o firmware STM32 não será carregado com sucesso

Agora você gravou o firmware no STM32 com sucesso!

### Verificar a versão do firmware STM32G030 instalada

Agora vamos verificar a versão do firmware STM32 instalada

- **Passo 1.** Entre na janela de terminal do reTerminal e digite o seguinte para abrir o arquivo de configuração

```sh
sudo nano /boot/config.txt
```

- **Passo 2.** Na parte inferior deste arquivo, comente a linha que diz **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **Passo 3.** Reinicie o reTerminal

- **Passo 4.** Digite o seguinte na janela de terminal do reTerminal para verificar a versão do firmware STM32

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

Se a saída for semelhante a **0x01 0x07**, isso significa que você está usando a versão 1.7 do firmware

- **Passo 5.** Abra o arquivo de configuração que usamos antes

```sh
sudo nano /boot/config.txt
```

- **Passo 6.** Na parte inferior deste arquivo, descomente a linha que diz **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Passo 7.** Reinicie o reTerminal

```sh
sudo reboot
```

## P2: Como posso gravar o Raspberry Pi OS que é originalmente enviado com o reTerminal?

Se você gravou um sistema diferente e quer voltar para o Raspberry Pi OS padrão que vem com o reTerminal, você pode seguir os passos abaixo

- **Passo 1.** Baixe o Raspberry Pi OS acessando os links abaixo

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**Nota:** o reTerminal é originalmente enviado com um sistema de 32 bits. No entanto, você também pode baixar uma versão de 64 bits

- **Passo 2.** Extraia o **arquivo .zip**

- **Passo 3.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aqui você pode **definir um hostname, ativar SSH, definir uma senha, configurar Wi‑Fi, definir configurações de localidade** e mais

- **Passo 5.** Clique em **CHOOSE OS** e selecione **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Navegue até a imagem extraída anteriormente, selecione-a e clique em **open**

- **Passo 7.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 8.** Por fim, clique em **WRITE**

## P3: Como atualizar o Raspberry Pi OS e os pacotes instalados

Vamos atualizar todos os pacotes e também o Raspberry Pi OS para a versão mais recente

- **Passo 1.** Abra uma janela de terminal no reTerminal e digite o seguinte

```sh
sudo apt update
sudo apt full-upgrade
```

- **Passo 2.** Reinstale os headers do kernel

```sh
sudo apt install raspberrypi-kernel-headers
```

- **Passo 3.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora o seu Raspberry Pi OS e todos os pacotes necessários estão atualizados!

## P4: Como posso gravar um sistema operacional se eu substituir o CM4 por uma versão sem eMMC

Se você quiser usar um Compute Module 4 sem eMMC no reTerminal, então você precisa inserir um micro‑SD e gravar o sistema operacional de sua escolha. Siga os passos abaixo de acordo com o seu sistema operacional.

- **Passo 1.** Insira um cartão micro‑SD no computador usando um **leitor de cartão micro‑SD** conectado ao computador ou usando um **leitor de cartão embutido** em um laptop

- **Passo 2.** Baixe o software **Raspberry Pi Imager** acessando [este link](https://www.raspberrypi.org/software/)

**Nota:** Você pode optar por baixar para **Windows, Mac ou Ubuntu**

- **Passo 3.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aqui você pode **definir um hostname, ativar SSH, definir uma senha, configurar Wi‑Fi, definir configurações de localidade** e mais

- **Passo 5.** Clique em **CHOOSE OS** e selecione o seu sistema operacional preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**NOTA:** Você pode selecionar sistemas como **Ubuntu de 64 bits** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 6.** Clique em **CHOOSE STORAGE** e selecione o cartão micro‑SD conectado

- **Passo 7.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 8.** Ejete o cartão micro‑SD do computador e insira-o no reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**Nota:** Você precisa abrir a carcaça do reTerminal para acessar o slot do cartão micro‑SD

## P5: Como posso fazer login no Raspberry Pi OS/ Ubuntu OS ou outro sistema usando um conversor USB para serial

Se você tiver um **Conversor USB para Serial**, pode usar os seguintes passos para fazer login no Raspberry Pi OS

Conecte jumpers de um Conversor USB para Serial aos **pinos UART** no conector GPIO de 40 pinos do reTerminal da seguinte forma

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

Agora vamos configurar o software no computador. Siga de acordo com o seu sistema operacional

### Para Windows

- **Passo 1.** Conecte o Conversor USB para Serial ao PC

- **Passo 2.** Abra o **Device Manager** digitando **Device Manager** na caixa de pesquisa do Windows

- **Passo 3.** Clique na seta de expansão em **Ports (COM & LPT)** e encontre o nome da porta serial conectada (ex: **COM7**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **Passo 4.** Baixe e instale o **Putty** acessando [este link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty é um cliente SSH e telnet que você pode usar para se conectar ao reTerminal via SSH. Você pode pular esta etapa se já tiver o Putty instalado

- **Passo 5.** Abra o Putty para conectar o PC ao reTerminal

- **Passo 6.** Selecione **Serial** em **Connection Type**

- **Passo 7.** Configure as definições da seguinte forma:

  - Serial line: COM7 (escolha a sua porta COM)
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

- **Passo 1.** Conecte o Conversor USB para Serial ao PC

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

**Nota:** A taxa de transmissão (baud rate) está definida para 9600

- **Passo 7.** Após as conexões de hardware mencionadas acima, ligue a energia na tomada de parede para ligar o reTerminal

Agora você fez login com sucesso no Raspberry Pi OS.

## P6: Não consigo reativar o LCD do reTerminal após o modo de suspensão

Abra uma janela de terminal depois de se conectar via SSH ou VNC e digite os seguintes comandos

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

Isso irá reinicializar o LCD no reTerminal

## P7: Como posso inicializar um sistema operacional a partir de um Pen Drive USB

Você pode inicializar um sistema operacional a partir de um Pen Drive USB seguindo os passos abaixo. Aqui nós mudamos a ordem de boot para **USB Boot > eMMC Boot**, o que significa que, se o USB Boot falhar, ele irá inicializar a partir da eMMC.

**Nota:** Você terá que usar Ubuntu ou MacOS como PC host para este método.

- **Passo 1.** Remova as 4 tampas de borracha e abra a carcaça traseira do reTerminal desaparafusando os 4 parafusos de baixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **Passo 2.** Remova os 2 parafusos para desmontar o dissipador de calor e também os 4 parafusos restantes para separar toda a carcaça

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **Passo 3.** Abaixe o **boot mode switch** de acordo com o diagrama abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **Passo 4.** Abra uma janela de **Terminal** no PC Host depois de se conectar ao reTerminal e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt update
```

- **Passo 5.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git
```

- **Passo 6.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia, e **hh** e **mm** são horas e minutos, respectivamente.

- **Passo 7.** Clone e entre no repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 8.** Digite o seguinte para instalar o **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Passo 9.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 10.** Abra o arquivo de configuração do bootloader

```sh
sudo nano recovery/boot.conf
```

- **Passo 11.** Altere o campo **BOOT_ORDER** para o seguinte

```sh
BOOT_ORDER=0xf15
```

**Nota:** Aqui, se o USB Boot falhar, ele alterna para boot pela eMMC

- **Passo 12.** Execute o seguinte para atualizar a imagem do EEPROM

```sh
cd recovery
./update-pieeprom.sh
```

O arquivo pieeprom.bin agora está pronto para ser gravado no Compute Module 4

- **Passo 13.** Navegue de volta para o diretório **usbboot**

```sh
cd ..
```

- **Passo 14.** Execute a ferramenta usbboot para gravar o bootloader EEPROM

```sh
sudo ./rpiboot -d recovery
```

- **Passo 15.** Conecte o reTerminal ao PC via cabo USB Tipo-C

Agora levará alguns segundos para transferir os arquivos necessários para o reTerminal.

- **Passo 16.** Desligue o reTerminal, volte a chave de Modo de Boot para a posição original e monte novamente a carcaça do reTerminal

- **Passo 17.** Conecte um Pen Drive USB inicializável com um SO adequado dentro, conecte em uma das Portas USB no reTerminal e ligue o reTerminal

Agora você verá o reTerminal inicializando a partir da Unidade USB conectada

## P8: Por que há cola preta ao redor dos chips no CM4?

Aplicamos especialmente **adesivo de preenchimento inferior de resina epóxi** (que parece cola preta) ao redor dos chips no CM4 para garantir que os CIs estejam bem protegidos. Isso também torna todo o CM4 mais confiável.

## P9: Por que o buzzer, os LEDs e os botões não funcionam após instalar os drivers do reTerminal?

O reTerminal vem equipado com 2 versões para o chip de Expansão de I/O. Versão antiga com MCP23008 e nova versão com PCA9554. Se você [instalou os drivers do reTerminal manualmente](https://wiki.seeedstudio.com/pt-br/reTerminal/#instalar-drivers-do-reterminal-apos-gravar-novo-raspberry-pi-os-ubuntu-os-ou-outro-os), verifique o seguinte.

Antes de tudo verifique qual chip está instalado no seu reTerminal.

- Abra a janela do terminal
- i2cdetect -y 1

Se você vir o endereço I2C 0x20, o reTerminal está equipado com o chip MCP23008

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

Se você vir o endereço I2C 0x38, o reTerminal está equipado com o chip PCA9554

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

Para o reTerminal com chip MCP23008, você precisa fazer o seguinte.

- sudo nano /boot/config.txt
- Adicione "dtoverlay=reTerminal,addr=0x20,mcp23008" no final do arquivo
- Ctrl + x > y > ENTER, para salvar e fechar o arquivo
- sudo reboot

Para o reTerminal com o chip PCA9554 mais recente, você não precisa fazer nenhuma alteração.

## P10: Como posso instalar o Ubuntu no reTerminal?

- **Passo 1.** Grave o [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) no armazenamento eMMC do reTerminal

**Nota:** Consulte as instruções de gravação [aqui](https://wiki.seeedstudio.com/pt-br/reTerminal/#gravar-raspberry-pi-os-64-bit-ubuntu-os-ou-outro-os-no-emmc). Depois de abrir o **Raspberry Pi Imager**, navegue até `CHOOSE OS > Use custom` e selecione a imagem acima para gravar

- **Passo 2.** Faça SSH no reTerminal e execute os seguintes comandos um após o outro. Certifique-se de usar **ubuntu** como nome de usuário e **ubuntu** como senha

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **Passo 3.** Agora, o reTerminal iniciará no Ubuntu Desktop, mas na orientação errada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **Passo 4.** Clique no **ícone de energia** no canto superior direito e clique em **Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **Passo 5.** Selecione **Displays** e escolha **Portrait Left** em **Orientation** e clique em **Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

Finalmente você verá o Ubuntu Desktop na orientação correta!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## P11: A orientação da tela está incorreta após instalar o Raspberry Pi OS Bullseye

- **Passo 1.** Depois de gravar o **Raspberry Pi OS Bullseye** no eMMC do reTerminal, siga [este guia](https://wiki.seeedstudio.com/pt-br/reTerminal/#instalar-reterminal-drivers-apos-gravar-novo-raspberry-pi-os-ubuntu-os-ou-outro-os) para instalar os drivers necessários

- **Passo 2.** Crie um novo arquivo chamado **monitors.xml** no diretório **.config**

```sh
sudo vi ~/.config/monitors.xml
```

- **Passo 3.** Copie o conteúdo a seguir para o arquivo acima para definir explicitamente o display LCD (DSI-1) e salve o arquivo digitando **:wq** após pressionar **ESC**

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **Passo 4.** Abra **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Passo 5.** Adicione o seguinte no arquivo

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **Passo 6.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora a tela será exibida na orientação correta!

## P12: Solução de problemas de imprecisão da Tela de Toque

Após configurar a tela para a orientação correta, a posição do toque ainda pode estar imprecisa, fazendo com que o cursor se mova em direções inesperadas quando você toca em uma área específica do display. Para resolver esse problema, é essencial seguir as etapas abaixo.

- **Passo 1** : Abra o terminal e entre na pasta xorg.conf.d digitando

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 2** : Você terá acesso ao arquivo "40-libinput.conf", que pode ser editado usando o comando.

```sh
sudo nano 40-libinput.conf
```

- **Passo 3**: Encontre a seção InputClass da InputClass de **touchscreen**.

- **Passo 4**: Adicione a seguinte frase. Você pode consultar a captura de tela

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 5** : Salve com Ctrl+O e pressione Enter, depois Ctrl+X e em seguida reinicie

```sh
Sudo reboot 
```

Após reiniciar, você pode notar que a posição do toque agora está precisa. Isso significa que, quando você toca em uma área específica do display, o cursor se move na direção pretendida.

## P13: LEDs e Buzzer não funcionam após instalar os drivers do reTerminal

Esse problema não durará muito. Nós o resolveremos completamente mais tarde a partir dos próprios drivers do reTerminal

- **Passo 1.** Abra **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Passo 2.** Comente a seguinte linha e salve o arquivo digitando **:wq** após pressionar **ESC**

```sh
#dtoverlay=reTerminal-bridge
```

- **Passo 3.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora os LEDs e o Buzzer funcionarão normalmente.

## P14: Como verificar se o Chip de Criptografia é ATECC608A-SSHDA-B ou ATECC608A-TNGTLSS-G

| Data de Lançamento | Versão do CI do Chip de Criptografia |
|---|---|
| Antes de 09/03/2021 | ATECC608A-SSHDA-B |
| Set 2021 - Janeiro 2022 | ATECC608A-SSHDA-B ou ATECC608A-TNGTLSS-G |
| Após 02/01/2022 | ATECC608A-TNGTLSS-G |

 Para verificar qual Chip de Criptografia digitando o comando ```i2cdetect -y 3``` no Terminal, se você vir ```0x35``` na tabela de saída então o reTerminal está equipado com o chip ATECC608A-TNGTLSS-G, caso contrário ele está equipado com ATECC608A-SSHDA-B.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## Recursos

- **[PDF]** [Esquemas do reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [Esquemas do reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[PDF]** [Datasheet do Raspberry Pi Compute Module 4](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Página Web]** [Documentação Oficial do Raspberry Pi](https://www.raspberrypi.org/documentation/)

## Suporte Técnico

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
