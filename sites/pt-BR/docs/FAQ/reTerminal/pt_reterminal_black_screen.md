---
description: reTerminal-FAQ
title: Como solucionar o problema de tela preta no reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal_black_screen
last_update:
  date: 11/15/2023
  author: Kasun Thushara
createdAt: '2023-06-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reterminal_black_screen/
---

reTerminal vem com os drivers necessários pré-instalados de fábrica, então você não precisa instalar drivers adicionais.<br/>
No entanto, se a sua tela não estiver exibindo corretamente e permanecer preta, siga as etapas de solução de problemas abaixo para identificar e resolver o problema passo a passo.

## Etapa 1: Verificar o status de piscar dos LEDs

### Se a luz PWR não estiver acesa

  Você deve verificar o status da fonte de alimentação, pois pode haver um problema de alimentação. Além disso, para descartar quaisquer dificuldades de hardware, certifique-se de que o módulo CM4 dentro do reTerminal esteja devidamente conectado.

### Se a luz PWR estiver acesa, mas a luz SYS não estiver acesa

  Você precisa gravar novamente o sistema original de fábrica. Você pode ir diretamente para esta seção."

### Se ambas as luzes estiverem acesas

  Essa situação ocorre devido a problemas com o driver que controla a tela LCD. Neste ponto, siga as etapas de solução de problemas fornecidas na [**segunda etapa**](/pt-br/reterminal_black_screen/#second-confirm-whether-you-have-installed-a-new-system) e execute-as passo a passo.

## Etapa 2: Confirmar se você instalou um novo sistema

:::caution

- Se você gravar um novo OS por conta própria e a tela LCD não exibir corretamente, será necessário [**instalar separadamente os drivers necessários do reTerminal**](/pt-br/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os).

- Se você não gravou seu próprio OS, mas a tela permanece preta, prossiga diretamente para [**Gravar o Raspberry Pi OS que é originalmente enviado com o reTerminal**](/pt-br/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

- Se você estiver tentando instalar o **Raspbian OS**, nós realizamos testes e descobrimos que ambas as versões *32-bit e 64-bit* do **Bulleseye** funcionam bem com o reTerminal sem encontrar qualquer **problema de tela preta**. Além disso, também testamos a nova versão **Bookworm** *64-bit*, e ela funciona perfeitamente no reTerminal.

:::

### Instalar drivers do reTerminal após gravar um novo Raspberry Pi OS/ Ubuntu OS ou Outro OS

O hardware que precisa de drivers inclui o **LCD de 5 polegadas, painel de toque, acelerômetro, sensor de luz, LEDs de usuário, botões de usuário, RTC, buzzer, coprocessador criptográfico**.
Portanto, instalar este driver permite o funcionamento adequado da tela LCD ao usar um novo Raspberry Pi OS/ Ubuntu OS ou Outro OS.

- **1.** Clone o seguinte repositório

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **2.** Entre no repositório

```sh
cd seeed-linux-dtoverlays
```

:::note
Para **32bit OS** você precisará adicionar a etapa a seguir antes de executar `sudo ./scripts/reTerminal.sh`. Após concluir a instalação, lembre-se de **reboot** o reTerminal para que as alterações entrem em vigor.

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

:::

- **3.** Digite o seguinte para instalar os drivers

```sh
sudo ./scripts/reTerminal.sh
```

Você verá a seguinte saída se tiver instalado os drivers com sucesso

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **4.** Reinicie o reTerminal

```sh
sudo reboot
```

Por fim, você poderá usar a tela LCD normalmente no novo sistema.

### Gravar o Raspberry Pi OS que é originalmente enviado com o reTerminal

:::caution
Se você gravou um OS diferente e deseja voltar para o Raspberry Pi OS padrão que é enviado com o reTerminal, siga as etapas abaixo
:::

Podemos gravar **Raspberry Pi OS / 64-bit Ubuntu OS ou outro OS** no **armazenamento eMMC** do CM4 no reTerminal. Se você nunca gravou um sistema no reTerminal antes, recomendamos fortemente que siga [Flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC](/pt-br/flash_different_os_to_emmc) para se preparar para a gravação do sistema, o que inclui **instalar os drivers necessários**.

Depois que os [drivers necessários](/pt-br/flash_different_os_to_emmc) estiverem instalados, você só precisa conectar a porta USB Type-C do reTerminal ao seu PC. Quando você abrir o Explorador de Arquivos e vir que o eMMC do Compute Module 4 é exibido como um dispositivo de armazenamento em massa USB, poderá executar as etapas a seguir:

- **1.** Baixe o Raspberry Pi OS acessando os links abaixo

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**Nota:** o reTerminal é enviado originalmente com um OS de 32 bits. No entanto, você também pode baixar uma versão de 64 bits

- **2.** Extraia o **arquivo .zip**

- **3.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar Wi-Fi, definir configurações de localidade** e muito mais

- **5.** Clique em **CHOOSE OS** e selecione **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** Navegue até a imagem extraída anteriormente, selecione-a e clique em **open**

- **7.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **8.** Por fim, clique em **WRITE**

Por fim, você poderá usar a tela LCD normalmente no sistema original.

## Se as Etapas 1/2 ainda não resolverem o problema da tela - Atualizar o firmware STM32 para o LCD do reTerminal

:::note
Se o seu reTerminal foi fabricado após 26/09/2021, o STM32 vem com o firmware V1.8 pré-instalado.
:::

É muito importante garantir que você tenha o firmware mais recente gravado no chip STM32G030 do reTerminal. O STM32G030 é responsável por controlar o LCD no reTerminal. Atualizar o chip STM32 para a versão mais recente ajudará a resolver a maioria dos problemas que você enfrenta com o LCD do reTerminal.

Existem 2 métodos para gravar o chip STM32.

- **Método 1:** Conectar-se diretamente ao chip STM32 usando o CM4 no reTerminal e gravar o firmware
- **Método 2:** Conectar fisicamente os pinos do chip STM32 ao GPIO de 40 pinos do reTerminal usando cabos jumper e então usar o OpenOCD para gravar o firmware

O **Método 1** funciona se você tiver a **nova versão (v1.7 ou superior)** do firmware STM32 no reTerminal e, por outro lado, o **método 2** só é necessário se você tiver a **versão antiga (inferior a v1.7)** do firmware STM32 na placa.

### Decidir qual método de gravação usar

Agora vamos passar pelas etapas a seguir para identificar qual versão da placa temos, para que possamos escolher o método de gravação apropriado.

- **1.** Entre na janela de terminal do reTerminal e digite o seguinte para abrir o arquivo de configuração

```sh
sudo nano /boot/config.txt
```

- **2.** Na parte inferior deste arquivo, comente a linha que diz **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

**Nota:** Isso descarregará todos os drivers do reTerminal. Portanto, quando você ligar o reTerminal da próxima vez, nenhum dos drivers será carregado.

- **3.** Reinicie o reTerminal

```sh
sudo reboot
```

- **4.** Coloque o STM32 em **modo de boot** por meio de **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **5.** Liste os dispositivos I2C conectados

```sh
i2cdetect -y 1
```

Se você conseguir ver o endereço I2C **0x56** como na tabela abaixo, você tem a **nova versão (v1.7 ou superior)** do firmware STM32 na placa.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

No entanto, se você conseguir ver o endereço I2C **0x45** como na tabela abaixo, você tem a **versão antiga (inferior a v1.7)** do firmware STM32 na placa

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **6.** Abra o arquivo de configuração que usamos antes

```sh
sudo nano /boot/config.txt
```

- **7.** Na parte inferior deste arquivo, descomente a linha que diz **dtoverlay=reTerminal** para carregar os drivers novamente

```sh
dtoverlay=reTerminal
```

- **8.** Desligue o reTerminal

```sh
sudo poweroff
```

**Nota:** Se você já estiver executando o **firmware STM32 v1.8**, depois que entrar no **modo de boot** por meio do **i2c-tools**, a única maneira de sair do modo de boot é gravar o firmware STM32.

### Conectar ao STM32 usando o CM4 e gravar o firmware

:::caution
Se você tiver a **nova versão (v1.7 ou superior)** do firmware STM32 na placa, siga este método.
:::

- **1.** Entre na janela de terminal do reTerminal e digite o seguinte para abrir o arquivo de configuração

```sh
sudo nano /boot/config.txt
```

- **2.** Na parte inferior deste arquivo, comente a linha que diz **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **3.** Reinicie o reTerminal

```sh
sudo reboot
```

- **4.** Crie um novo diretório dentro do reTerminal e entre nele.

```sh
mkdir STM32
cd STM32
```

<!-- - **5.** Visit [this link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) and download **stm32flash** file and the **STM32G030F6_R2.bin** file from the **latest release** version.

**Note:** You can click on them to start downloading -->

- **5.** Faça o download do arquivo **stm32flash** e do **STM32G030F6_R2.bin**

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **6.** Descompacte **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **7.** Vá para a pasta chamada **stm32flash-0.7** e torne a ferramenta de gravação executável

```sh
cd stm32flash-0.7/
make
```

- **8.** Coloque o STM32 em **modo de boot** por meio do **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **9.** Apague a memória flash no chip STM32 usando a **ferramenta stm32flash**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **10.** Grave o firmware no STM32 usando a ferramenta stm32flash

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Nota:** **STM32G030F6_R2.bin** é o nome do arquivo do novo firmware

- **11.** Modifique o registrador OPTR da seguinte forma

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **12.** Abra o arquivo de configuração que usamos antes

```sh
sudo nano /boot/config.txt
```

- **13.** Na parte bem inferior deste arquivo, descomente a linha que diz **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **14.** Reinicie o reTerminal

```sh
sudo reboot
```

<!-- - **6.** Open command prompt on PC and navigate to the location of the downloaded files before

```sh
cd C:\Users\user\Downloads
```

- **7.** Transfer the files to the **STM32** directory on the reTerminal we created before

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**Note:** **pi** is the username and **192.168.x.xx** is the IP address of reTerminal. You can replace this with hostname of reTerminal as well.

- **8.** Inside the terminal window of reTerminal, enter the **STM32** directory

```sh
cd STM32
```

Then you will see the files that we copied earlier

- **9.** Make the flash tool **executable**

```sh
chmod +x stm32flash
``` -->

<!-- - **10.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **11.** Erase the flash in the STM32 chip using **stm32flash tool**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **12.** Flash the firmware to STM32 using stm32flash tool

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Note:** **STM32G030F6_R2.bin** is the file name of the new firmware

- **13.** Modify the OPTR register as follows

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **14.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **15.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **16.** Reboot reTerminal

```sh
sudo reboot
``` -->

Agora você gravou o firmware com sucesso no STM32!

### Conectar ao STM32 usando fios jumper e OpenOCD

:::caution
Se você tiver a **versão antiga (inferior à v1.7)** do firmware STM32 na placa, siga este método.
:::

- **1.** Entre na janela do terminal do reTerminal e digite o seguinte para atualizar a lista de pacotes

```sh
sudo apt-get update
```

- **2.** Instale os seguintes pacotes

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **3.** Clone o seguinte repositório e navegue até ele

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **4.** Acesse [este link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) e baixe o arquivo **STM32G030F6_R2.bin** da **última versão de release**.

**Nota:** Você pode clicar nele para iniciar o download

- **5.** Abra o prompt de comando no PC e navegue até o local dos arquivos baixados anteriormente

```sh
cd C:\Users\user\Downloads
```

- **6.** Transfira os arquivos para o diretório **openocd** no reTerminal que criamos anteriormente

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**Nota:** **pi** é o nome de usuário e **192.168.x.xx** é o endereço IP do reTerminal. Você também pode substituí-lo pelo hostname do reTerminal.

- **7.** Volte para a janela do terminal no reTerminal e digite o seguinte dentro do diretório **openocd**

```sh
./bootstrap
```

- **8.** Digite o seguinte

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **9.** Compile

```sh
make
```

- **10.** Instale

```sh
sudo make install
```

- **11.** Siga a conexão abaixo para conectar os pinos do STM32 ao GPIO de 40 pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Os pinos do STM32 estão localizados na parte de trás da PCBA do reTerminal.

- **12.** Mantendo a conexão, insira o seguinte comando para gravar o firmware no STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**Nota:** Normalmente leva cerca de 3 segundos para terminar a gravação. Portanto, você precisa **manter** a conexão acima por cerca de **3 segundos** até que o processo de gravação seja concluído

Se você vir o seguinte log, isso significa que o firmware do STM32 foi gravado com sucesso!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **13.** Desconecte as conexões e **desconecte fisicamente o cabo de alimentação diretamente** sem usar o comando **poweroff**

**Nota:** Se você não desconectar fisicamente o cabo de alimentação, o firmware STM32 não será carregado com sucesso

Agora você gravou o firmware com sucesso no STM32!

### Verificar a versão do firmware STM32G030 instalada

Agora vamos verificar a versão do firmware STM32 instalada

- **1.** Entre na janela do terminal do reTerminal e digite o seguinte para abrir o arquivo de configuração

```sh
sudo nano /boot/config.txt
```

- **2.** Na parte bem inferior deste arquivo, comente a linha que diz **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **3.** Reinicie o reTerminal

- **4.** Digite o seguinte na janela do terminal do reTerminal para verificar a versão do firmware STM32

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

Se a saída se parecer com **0x01 0x07**, isso significa que você está usando a versão de firmware 1.7

- **5.** Abra o arquivo de configuração que usamos antes

```sh
sudo nano /boot/config.txt
```

- **6.** Na parte bem inferior deste arquivo, descomente a linha que diz **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **7.** Reinicie o reTerminal

```sh
sudo reboot
```

## Gravar o Raspberry Pi OS que é a versão mais recente - Bookworm

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/bookworm.jpeg" alt="pir" width={600} height="auto" /></p>

Nós preparamos uma imagem com o sistema Bookworm mais recente, o novo lançamento oficial do Raspberry Pi. Se você encontrar quaisquer problemas, especialmente aqueles discutidos acima, recomendamos fortemente seguir estas etapas para uma experiência mais suave.

:::note
Antes de continuar, certifique-se de **abaixar a chave de modo de boot**. Em seguida, inicie o **instalador de configuração do rpiboot**. Instruções detalhadas sobre como realizar estas etapas são fornecidas [**aqui**](https://wiki.seeedstudio.com/pt-br/flash_different_os_to_emmc/).

:::

- **1.** Baixe o Raspberry Pi OS acessando os links abaixo

  <!-- - [64-bit Bookworm-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz) -->

| Versão                     | Descrição      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | Versão Linux 64 bits Debian12(bookworm) 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  Versão Linux 32 bits Debian12(bookworm) 6.6.20           | lastest |
| [2023_11_15_bookworm_64.img.gz](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz)               | Versão Linux 64 bits Debian12(bookworm) 6.1  | release |

- **2.** Extraia o arquivo **.zip**

- **3.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Opções avançadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações de localidade** e muito mais

- **5.** Clique em **CHOOSE OS** e selecione **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** Navegue até a imagem extraída anteriormente, selecione-a e clique em **open**

- **7.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **8.** Por fim, clique em **WRITE**

Por fim, **retorne a chave Boot Mode** para a posição original e monte a carcaça do reTerminal. Depois **ligue a alimentação**. Você pode usar a tela LCD normalmente no sistema original.
