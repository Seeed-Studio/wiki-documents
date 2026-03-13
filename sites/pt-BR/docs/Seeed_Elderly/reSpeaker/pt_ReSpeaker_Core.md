---
description: ReSpeaker Core
title: reSpeaker Core
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Core
sku: 102010088
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core/
---

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core.jpg)

ReSpeaker é uma interface de voz modular aberta para hackear coisas ao seu redor. Permite que você interaja com seus eletrodomésticos, sua planta, seu escritório, seus dispositivos conectados à internet ou quaisquer outras coisas em sua vida diária, tudo por meio da sua voz.

- **É uma extensão com suporte a voz para o seu entorno**

  O ReSpeaker oferece suporte tanto a serviços cognitivos online quanto a mecanismos leves de reconhecimento de fala offline. Você pode adicionar o ReSpeaker às coisas ao seu redor para torná-las inteligentes (ou mais inteligentes).

- **É um dispositivo para transmissão de música**

  A interface de voz nunca esteve separada do entretenimento musical, e com o ReSpeaker não é diferente. O ReSpeaker suporta Airplay/DLNA para transmissão de música sem fio. Basta conectar o ReSpeaker a qualquer alto-falante comum com um cabo AUX, então você já pode começar a curtir a música que ama sem apertar um único botão.

- **É uma ferramenta de aprendizado para crianças**

  Além do módulo Wi-Fi MT7688 onboard, que executa o OpenWrt baseado em Linux, o ReSpeaker também é alimentado pelo chip ATmega32u4 e é totalmente compatível com Arduino, o que significa que podemos usar o ReSpeaker como uma poderosa placa Arduino e fazer muitas coisas de “Arduino”. É para aprender, é para praticar e é para se divertir.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

## Recursos

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_futures.jpg)

- Deixe suas mãos livres: reconhecimento de fala com ou sem Internet
- Transmissão sem fio: transmita música via Airplay/DLNA
- SDK fácil de usar: para desenvolvedores Python e C/C++
- Recursos em crescimento: faça download e plugue para enriquecer seus recursos e funcionalidades.
- Add-ons plug-n-play: extensível com Mic Array, Grove Extension Board, módulos Grove.
- App sem instalação: configure tudo em um App baseado na web. (Ainda não disponível)

## Especificações

---
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_hardware%20overview.jpg)

**Especificações de tecnologia**

- Módulo Wi-Fi AI7688:

  - Sistema operacional: OpenWrt baseado em GNU/Linux
  - Rede Wi-Fi: suporta modos Legacy 802.11b/g e HT 802.11n
  - Expansão: dois conectores de expansão para I2C, GPIO e USB 2.0 host
  - Interfaces: porta AUX de 3,5 mm embutida, Micro USB e slot para cartão SD

- Coprocessador ATMega32U4:

  - Porta serial virtual USB CDC para console Linux
  - 12 indicadores de LED RGB programáveis
  - 8 sensores táteis onboard

- Codec WM8960:

  - DAC SNR 98dB (‘A’ weighted), THD -84dB a 48kHz, 3,3V  
  - ADC SNR 94dB (‘A’ weighted), THD -82dB a 48kHz, 3,3V  
  - Driver de alto-falante estéreo Classe D com 87% de eficiência (saída de 1W)  
  - Driver de fone de ouvido integrado  
  - Potência de saída de 40mW em 16Ω a 3,3V  
  - THD -75dB a 20mW, SNR 90dB com carga de 16Ω  
  - PLL integrado oferece esquema de clock flexível  
  - Taxas de amostragem: 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48 kHz

- Fonte de alimentação: 5V DC  

- Dimensões: diâmetro de 70mm  

- Peso: 17g

**Diagrama de pinos**

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC: aciona codificador/decodificador externo, sinal ADC
- GPIO1/I2S_DAC: aciona codificador/decodificador externo, sinal DAC
- GPIO2/I2S_LRCLK: aciona codificador/decodificador externo, clock de amostragem de canal esquerdo/direito
- GPIO3/I2S_BCLK: aciona codificador/decodificador externo, clock de bits
- MCLK_OUT: clock mestre para dispositivo externo
- HP_SEL: seleção do canal de fone de ouvido. Se usar o ReSpeaker Mic Array para saída de áudio, defina HP_SEL como alto
- HP_L: canal de áudio analógico esquerdo do ReSpeaker Mic Array
- HP_R: canal de áudio analógico direito do ReSpeaker Mic Array
- AGND: terra analógica para áudio

## Primeiros Passos

---

### O que devo fazer quando receber um ReSpeaker Core pela primeira vez

**1. Preparativos**

- ReSpeaker Core
- PC ou Mac
- Rede Wi-Fi
- Cartão SD

**2. Conectar ao console serial**

- Para Windows, recomenda-se o [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

  - Conecte o ReSpeaker ao seu PC via USB, verifique o "Device Manager" para a porta COM. Aqui, a porta COM do meu ReSpeaker é COM31.

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty1.png)

  - Selecione Serial em Connection type. No campo Serial line, insira a porta COM do seu ReSpeaker. No campo Speed, digite 57600.

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty2.png)

  - Clique em Open. Quando você vir uma tela em branco, pressione a tecla Enter.

    ![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/putty3.png)

- Para Linux/Mac

  - Conecte o ReSpeaker ao seu PC via USB
  - Abra uma sessão do Terminal
  - Digite ls /dev/tty.usb* no Terminal. Devemos ver uma lista de dispositivos. Procure por algo como tty.usbmodemXXXXX, onde XXXXX geralmente é um identificador aleatório. Este é o dispositivo serial usado para acessar o console do sistema. Em seguida, use o utilitário screen para se conectar à porta serial e definir o baudrate para 57600. Isso porque o baudrate do console do sistema é 57600 por padrão.

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. Configurar Wi-Fi**

O ReSpeaker vem configurado em modo Repeater por padrão, e você precisa conectá-lo a uma rede sem fio existente antes de aproveitar o reconhecimento de fala com acesso à Internet.

Quando você liga o ReSpeaker pela primeira vez, ele criará uma rede Wi-Fi chamada "ReSpeakerXXXXXX". Aqui, "XXXXXX" são os últimos 6 caracteres do endereço MAC do seu ReSpeaker, que está marcado na placa. Conecte seu computador a essa rede.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi1.png)

:::note
Se "ReSpeakerXXXXXX" não aparecer, mas "LinkIt_Smart_7688_XXXXXX" for encontrado, clique [aqui](https://wiki.seeedstudio.com/pt-br/ReSpeaker_Core/#q20-system-recovery-by-factory-image).
:::

Depois de obter um endereço IP, abra um navegador web e digite 192.168.100.1 na barra de endereços. Após alguns segundos, uma página web aparecerá pedindo o SSID e a senha de uma rede Wi-Fi existente.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/wifi2.png)

Selecione o Wi-Fi ao qual deseja se conectar e insira a senha. Quando você pressionar o botão OK, o ReSpeaker entrará na rede especificada.

Agora o seu ReSpeaker é capaz de acessar a Internet.

Além disso, há outra maneira de configurar o Wi-Fi pela linha de comando.
Podemos usar wictl para escanear o Wi-Fi e conectá-lo.

```
root@mylinkit:~# wictl
0, SEEED-MKT
1, Xiaomi_Youth
2, ChinaNet-Z5C4
3, STU-EE
4, EMBEST_WIFI
5, SEEED-MKT
6, nobody
7, SEEED-MKT
8, se.VPN
9, Moovent_HK_2G
10, LinkIt_Smart_7688_1D917A
11, SEEED-MKT
12, SEEED-MKT
13, zhongrixing
Please choose your wifi: 8
Please input the wifi password: 88888888
udhcpc (v1.23.2) started
Sending discover...
Sending discover...
Sending select for 192.168.199.153...
Lease of 192.168.199.153 obtained, lease time 43200
udhcpc: ifconfig apcli0 192.168.199.153 netmask 255.255.255.0 broadcast 192.168.199.255
udhcpc: setting default routers: 192.168.199.1
success
root@mylinkit:~#
```

:::note
Se você não conseguir conectar o Wi-Fi com os métodos acima, faça o reset de fábrica digitando o comando firstboot.
:::

Depois que a função Wi-Fi estiver habilitada, podemos usar SSH para conectar ao Respeaker com o comando abaixo. Podemos obter o endereço IP do Respeaker em
&lt;http://192.168.100.1/#!/overview&gt; WAN IP. A senha é root.

```
ssh root@ssh *.*.*.*

```

**4. Usar cartão SD para expandir o armazenamento**

Na maioria das vezes, apenas uma quantidade limitada de armazenamento está disponível em dispositivos embarcados (o ReSpeaker tem apenas 5M de armazenamento flash onboard restante para os usuários). Mais armazenamento para aplicativos e dados pode expandir o potencial do ReSpeaker, portanto usar um cartão SD para expandir o armazenamento como um **extroot** é uma boa escolha.

Empregando o **extroot**, a expansão da capacidade de armazenamento do seu sistema de arquivos raiz é realizada usando um dispositivo de armazenamento adicional.
Durante o processo de boot, o espaço de armazenamento externo é montado como o sistema de arquivos raiz ou em uma configuração de overlay sobre o sistema de arquivos original.

- Certifique-se de que seu cartão SD esteja conectado ao ReSpeaker e de que /dev/mmcblk0p1 possa ser detectado por df -h ou ls /dev.

```
root@ReSpeaker:/# df -h
Filesystem                Size      Used Available Use% Mounted on
rootfs                    1.8M    832.0K    960.0K  46% /
/dev/root                29.0M     29.0M         0 100% /rom
tmpfs                    61.7M    276.0K     61.5M   0% /tmp
/dev/mtdblock6            1.8M    832.0K    960.0K  46% /overlay
overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
tmpfs                   512.0K         0    512.0K   0% /dev
/dev/mmcblk0p1            7.4G      2.5M      7.4G   0% /tmp/run/mountd/mmcblk0p1
```

- Formate seu cartão SD em duas partições, uma em FAT32 e a outra em EXT4. O sistema de arquivos EXT4 será usado como extroot, enquanto o FAT32 será usado como um dispositivo de armazenamento normal, que permite transferir arquivos entre o ReSpeaker e o seu PC.

```
 umount /dev/mmcblk0p1
 fdisk /dev/mmcblk0
  ------------------ fdisk ------------------------
 >Command (m for help):o
 >Created a new DOS disklabel
 >Command (m for help):n
 >Partition type
 p   primary (0 primary, 0 extended, 4 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 1):1
 >First sector (2048-15523839, default 2048):
 >Last sector, +sectors or +size{K,M,G,T,P} (2048-15523839, default 15523839): +2G
 >Command (m for help):n
 >Partition type
 p   primary (1 primary, 0 extended, 3 free)
 e   extended (container for logical partitions)
 >Select (default p):p
 >Partition number (1-4, default 2):2
 >First sector (4196352-15523839, default 4196352):
 >Last sector, +sectors or +size{K,M,G,T,P} (4196352-15523839, default 15523839):
 >Command (m for help):w
 >The partition table has been altered.
 >Calling i[  292.010000]  mmcblk0: p1 p2
 >octl() to re-read partition table.
 >Syncing disks.
  ------------------ end ------------------------

 mkfs.fat /dev/mmcblk0p1
 mkfs.ext4 /dev/mmcblk0p2

 # reload mtk_sd kernel module
 rmmod mtk_sd
 insmod mtk_sd

```

- Prepare o overlay de root do seu armazenamento externo.

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- Crie o fstab com o seguinte comando. Este comando criará um modelo de fstab ativando todas as partições e definindo a partição '/mnt/mmcblk0p2' como partição '/overlay'.

```
 block detect > /etc/config/fstab;
 sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
 sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
 cat /etc/config/fstab;
```

- Verifique se é montável como overlay.

```
 root@mylinkit:/# mount /dev/mmcblk0p2 /overlay/
 root@ReSpeaker:/# df -h
  Filesystem                Size      Used Available Use% Mounted on
  rootfs                    1.8M    832.0K    960.0K  46% /
  /dev/root                29.0M     29.0M         0 100% /rom
  tmpfs                    61.7M    276.0K     61.5M   0% /tmp
  /dev/mtdblock6            5.2G     11.8M      4.9G   0% /overlay
  overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
  tmpfs                   512.0K         0    512.0K   0% /dev
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /tmp/run/mountd/mmcblk0p2
  /dev/mmcblk0p1            2.0G      4.0K      2.0G   0% /tmp/run/mountd/mmcblk0p1
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /overlay
```

- Reinicie o ReSpeaker e verifique novamente. Se o cartão SD for montado automaticamente, está pronto. Para mais informações sobre **extroot**, clique [aqui](https://wiki.openwrt.org/doc/howto/extroot).

**5. Instalar software no ReSpeaker**

Depois de estender o armazenamento com um cartão SD, há armazenamento suficiente para instalar software no ReSpeaker.

Instalar git

```
 opkg update
 opkg install git git-http
```

**6. Atualizar biblioteca Python**

```
git clone https://github.com/respeaker/respeaker_python_library.git
cd respeaker_python_library
python setup.py install
```

### Primeira impressão com interação por voz - ReSpeaker, tocar música

Com a Bing Speech API, o ReSpeaker pode ativar e reconhecer áudio vindo do microfone em tempo real, ou reconhecer áudio de um arquivo.

Para usar a Bing Speech API, primeiro você precisa obter uma chave dos Microsoft Cognitive Services a partir [daqui](https://www.microsoft.com/cognitive-services/en-us/speech-api), e copiá-la para BING_KEY = '' , depois salve o código a seguir em playmusic.py e execute-o

```sh
# stop mopidy and alexa to avoid USB device occupation
/etc/init.d/mopidy stop
/etc/init.d/alexa stop
python playmusic.py
```

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/getbingapi.png)

```
import logging
import time
import os
from threading import Thread, Event
from respeaker import Microphone
from respeaker.bing_speech_api import BingSpeechAPI

# use madplay to play mp3 file     
os.system('madplay')               

# get a key from https://www.microsoft.com/cognitive-services/en-us/speech-api
BING_KEY = ''      


def task(quit_event):                                                         
    mic = Microphone(quit_event=quit_event)                                   
    bing = BingSpeechAPI(key=BING_KEY)                                        

    while not quit_event.is_set():
        if mic.wakeup('respeaker'):        
            print('Wake up')               
            data = mic.listen()            
            try:                      
                text = bing.recognize(data)
                if text:           
                    print('Recognized %s' % text)
                    if 'play music' in text:
                        print('I will play music!')
                        os.system('madplay Tchaikovsky_Concerto_No.1p.mp3')
            except Exception as e:               
                print(e.message)                 

def main():                                                              
    logging.basicConfig(level=logging.DEBUG)                                                           
    quit_event = Event()        
    thread = Thread(target=task, args=(quit_event,))
    thread.start()                          
    while True:                             
        try:                                
            time.sleep(1)                           
        except KeyboardInterrupt:                   
            print('Quit')                           
            quit_event.set()
            break        
    thread.join()                

if __name__ == '__main__':       
    main()                  
```

Depois que "INFO:mic:Start Detecting" aparecer, tente dizer "ReSpeaker" para acordar o programa e diga "play music" para que ele toque música. Então o ReSpeaker tocará "Tchaikovsky_Concerto_No.1p.mp3" no caminho atual com a ferramenta **madplay**.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/bingplaymusic.png)

Se você vir o código de erro abaixo, o mopidy está sendo executado em segundo plano e está usando o dispositivo USB. Então tente executar /etc/init.d/mopidy stop mopidy e execute seu comando novamente.

```
root@ReSpeaker:~# python playmusic.py
Usage: madplay [OPTIONS] FILE [...]
Try `madplay --help' for more information.
Exception in thread Thread-2:
Traceback (most recent call last):
File "/usr/lib/python2.7/threading.py", line 810, in __bootstrap_inner
```

## Aplicação

---

### Piano de frutas

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano.PNG)

Além do módulo Wi-FI MT7688 on-board que executa o OpenWrt baseado em Linux, o ReSpeaker também é alimentado pelo chip ATmega32u4 e é absolutamente compatível com Arduino, o que significa que podemos usar o ReSpeaker como uma poderosa placa Arduino e fazer muitas coisas de ‘Arduino’. É para aprendizado, é para prática e é para diversão.

Por exemplo, você pode programá-lo com a IDE do Arduino para ter um piano DIY especial construído com 8 tomates-cereja conectados aos 8 sensores de toque do ReSpeaker.
![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/fruitpiano2.PNG)

1. git clone &lt;https://github.com/respeaker/piano.git&gt;  No ReSpeaker, baixe o repositório
2. Baixe a [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) no seu computador
3. Envie [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) para o Arduino Leonardo (ATmega32U4) do ReSpeaker
4. Execute python piano.py no console serial do ReSpeaker

### Nuvem do tempo

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/weathercloud.jpg)

Weather Cloud é um projeto incrível para o ReSpeaker. Essa construção legal transforma um ReSpeaker em uma Nuvem do Tempo, que é capaz de mostrar o clima com luzes e sons vívidos.

Neste projeto, o Openwrt é responsável por obter informações de clima em tempo real da Internet, fazer interação por voz e saída de áudio, enquanto o Arduino é responsável por controlar os LEDs RGB coloridos.

1. git clone &lt;https://github.com/jerryyip/WeatherCloud.git&gt;  no ReSpeaker, baixe o repositório
2. Baixe a [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) no seu computador
3. Envie [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) da ReSpeaker Arduino Library para o Arduino do ReSpeaker
4. Obtenha o appid do OpenWeatherMap [aqui](http://openweathermap.org/appid) e copie-o para appID = "" em main.py, não se esqueça de adicionar sua cidade em city=""
5. Pare o serviço mopidy no OpenWrt antes de usar a ponte SPI
/etc/init.d/mopidy stop
6. Execute python main.py e diga "ReSpeaker, what is the weather like?" para o ReSpeaker.
7. Para mais detalhes sobre como fazer uma Weather Could, clique [aqui](https://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/).

## ReSpeaker Mic Array

---

### [ReSpeaker Mic Array](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

O ReSpeaker Mic Array pode ser empilhado (conectado) diretamente sobre o ReSpeaker Core para melhorar significativamente a experiência de interação por voz. Ele é desenvolvido com base no XVSM-2000 Smart Microphone da XMOS. A placa integra 7 microfones PDM para ajudar a aprimorar o desempenho de DSP acústico do ReSpeaker para um nível muito mais alto.

## Sobre o nosso software

---

### [ReSpeaker Arduino Library](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

A ReSpeaker Arudino Library oferece os seguintes recursos:

- Suporte a detecção capacitiva de toque
- Implementação de driver de LED RGB WS2812
- Ponte USB para Serial e ponte SPI entre - Arduino (ATmega32U4) e OpenWrt baseado em Linux (MT7688)

### [ReSpeaker Python Library](https://github.com/respeaker/respeaker_python_library)

ReSpeaker é um projeto aberto para criar objetos habilitados por voz. A ReSpeaker python library é uma biblioteca python de código aberto para fornecer funções básicas de interação por voz.

Ela usa PocketSphinx para detecção de palavra-chave e usa webrtcvad para detecção de atividade de voz.

### [Para mais informações, acesse nossos repositórios no GitHub](https://github.com/respeaker)

## FAQ

---
**Q1: Como fazer o Factory Reset?**

- Abra o console serial ou uma sessão ssh e execute firstboot. [Mais detalhes](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset).

**Q2: Como fazer o resgate após uma atualização com falha?**

- Quando o respeaker falha ao iniciar o sistema openwrt, não conseguimos acessar o sistema através do terminal web, ssh ou console serial. Podemos seguir as [instruções de resgate](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade) para recuperá-lo.

**Q3: ReSpeaker não consegue encontrar meu Wi-Fi**

- Tente o [factory reset](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset) primeiro.
- E o canal 12 de Wi-Fi não é suportado pelo ReSpeaker. Certifique-se de que seu roteador não esteja usando esse canal.

**Q4: Wifi-Config**

- Aconselhamos que você configure o Wi-Fi via [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi) e, se isso não puder ser usado, tente a ferramenta de linha de comando [wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi) no console serial.

**Q5: Como alterar o idioma de reconhecimento da BING speech api**

- Se você não precisa alterar as palavras de ativação, basta mudar text = bing.recognize(data) para text = bing.recognize(data,language="zh-CN") e está pronto. [Mais detalhes](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py).

**Q6: Recebi o aviso no cartão SD "Volume was not properly unmounted. Some data may be corrupt. Please run fsck"**

- Se os arquivos no cartão SD estiverem normais, ignore. Caso contrário, tente formatá-lo com o [sd card formatter](https://www.sdcard.org/downloads/formatter_4/).

**Q7: Gravação incorreta a partir do Arduino**

- Grave novamente o bootloader no openwrt.

```
/etc/init.d/mopidy stop  # stop mopidy if it's running, mopidy-hallo plugin will use SPI
/etc/init.d/alexa stop      # stop alexa if it's running
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**Q8: Esqueci a senha do WebUI**

- Redefina a senha do juci

```
orangectl passwd root 12345678  //replace 12345678 with the password you want to set
```

**Q9: Como oferecer suporte ao google speech ou outro mecanismo de Speach TO Text(STT)?**

- Instale a biblioteca speech_recognition seguindo o [guia](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library)

**Q10: Falha ao executar Alexa com o erro "IOError: [Errno -9998] Invalid number of channels"**

- Há outro aplicativo ou instância do alexa usando o dispositivo de entrada de áudio. Execute /etc/init.d/alexa stop e /etc/init.d/mopidy stop para pará-los. Para desabilitar o mopidy na inicialização, execute /etc/init.d/mopidy disable.

**Q11: Falha ao executar python playmusic.py**

- Provavelmente o mopidy está em execução em segundo plano e está usando o dispositivo USB. Tente executar /etc/init.d/mopidy stop para parar o mopidy e execute novamente seu comando.

**Q12: Não há conexão RPC**

- Você precisa regravar o firmware, seguindo o [guia](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version)

**Q13: SFTP & FTP**

- Não temos FTP no respeaker, apenas SFTP.

**Q14: Console serial travado**

- Tente atualizar o [código arduino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino).

**Q15: Como desabilitar o modo 'ap'**

- Podemos definir o sinalizador 'ssid' da interface 'ap' como '' em vi /etc/config/wireless. Então o ap ficará oculto.

**Q16: Problema com placa de som I2C**

- Precisamos verificar o nome compatível do driver do codec e o endereço i2c do codec. Em seguida, reconstruir a imagem de firmware.

**Q17: O Respeaker é frequentemente ativado mesmo sem voz.**

- Podemos reduzir a taxa de falso positivo aumentando o limite no keyword.txt, mas isso também reduz a sensibilidade.
- Outra maneira é adaptar sua voz ao módulo acústico atual, mais detalhes em [http://cmusphinx.sourceforge.net/wiki/tutorialadapt](http://cmusphinx.sourceforge.net/wiki/tutorialadapt).
- Isso irá melhorar efetivamente o reconhecimento de palavras-chave individuais, mas pode tornar o reconhecedor menos geral.

**Q18: Como controlar os pinos GPIO a partir do respeaker?**

- Podemos usar [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py)
- O exemplo é [https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py), que usa GPIOs para simular SPI

**Q19: Como mudar a palavra de ativação?**

- keywords.txt contém palavras-chave e seus limites. Por exemplo, keywords.txt de [aqui](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt) é

 ```
 respeaker /1e-30/
 alexa /1e-30/
 play music /1e-40/
 ```

 respeaker é uma palavra-chave, 1e-30 é seu limite. Para melhorar a sensibilidade, podemos diminuir o limite, por exemplo, para 1e-50. Devemos saber que diminuir o limite irá aumentar a Taxa de Aceitação Falsa.

 Se você quiser adicionar uma nova palavra-chave, primeiro deverá adicionar a palavra-chave ao [dictionary.txt](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt). O dictionary.txt é assim:

 ```
 respeaker R IY S P IY K ER
 alexa AH L EH K S AH
 play P L EY
 music M Y UW Z IH K
 ```

 A primeira parte é um nome (respeaker, alexa ou music), a segunda parte são seus fonemas. Você pode encontrar palavras em um dicionário maior em [aqui](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt).

- então altere o código:

 ```
 if mic.wakeup('respeaker'):
 ```

- O diretório da palavra-chave é `/root/respeaker_python_library/respeaker/pocketsphinx-data`

**Q20: Recuperação do sistema pela imagem de fábrica.**

Nota: Se você não conseguir atualizar seu ReSpeaker pela Web ou não conseguir acessar [http://192.168.100.1/home.html](http://192.168.100.1/home.html), clique em [aqui](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin). para baixar o firmware mais recente em seu computador, copie-o para um cartão SD e insira o cartão SD no ReSpeaker.

Conecte-se ao [console serial](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console). do ReSpeaker, digite os seguintes comandos para atualizar o firmware:

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```

Levará cerca de 3 minutos para o ReSpeaker instalar o firmware e reiniciar, por favor **não desligue** o ReSpeaker durante a atualização.

![](https://files.seeedstudio.com/wiki/Respeaker_Core/img/systemupdate2.png)

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

----

- **[Eagle]**[ReSpeaker Core v1.0 SCH](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_SCH.sch.zip)
- **[Eagle]**[ReSpeaker Core v1.0 BRD](https://files.seeedstudio.com/wiki/Respeaker_Core/res/RespeakerCorev1.0_BRD.brd.zip)
- **[PDF]**[ReSpeaker Core v1.0 Schematic(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_Schematic.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB bottom(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_bottom.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB top(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_top.pdf)
- **[Document]**[ReSpeaker_Detail](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [AI7688 Datasheet](https://files.seeedstudio.com/wiki/Bazaar_file/AI7688.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
