---
description: Esta é a visão geral de recursos, especificações, interface de hardware e lista de partes.
title: Hardware e Especificações
keywords:
  - Edge
  - reCamera
  - Visão geral do hardware
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recamera_hardware_and_specs/
---

# Visão Geral da reCamera

A reCamera é uma câmera de IA minúscula e de código aberto, programável e personalizável, alimentada por um SoC RISC-V, oferecendo desempenho de IA de 1 TOPS no dispositivo com codificação de vídeo de 5MP @30 FPS. O design de hardware modular e as interfaces expansíveis oferecem a plataforma mais versátil para desenvolvedores que constroem sistemas de visão com IA.

## Recursos

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/reCamera_3x.png" alt="pir" width={600} height="auto" /></p>

## Especificações

<table style={{width: '72.2022%'}}>
    <tbody>
        <tr></tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002 Série</span></strong></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002</span></strong></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002w</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">Sistema de Processamento</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Desempenho de IA</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1TOPS@Int8</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">SOC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">SG2002</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">CPU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">C906@1GHz + C906@700MHz</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">MCU</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">8051@8KB SRAM</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Memória</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">256MB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Codificação de Vídeo</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">5MP @ 30Fps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">Sensor de Câmera</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">OV5647</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">Armazenamento</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">eMMC</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">(versão1) 8GB (versão2) 64GB</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Expansão</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">Cartão TF removível (até 2TB, não incluído)</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                <p><span data-font-family="Montserrat">I/O</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Ethernet</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">100Mbps</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Sem fio</span></p>
            </td>
            <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                <p><span data-font-family="Montserrat">/</span></p>
            </td>
            <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                <p><span data-font-family="Montserrat">WIFI2.4G/5G BT4.2/5.0</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">USB</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">USB Type-C(2.0)</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Botão</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1 botão de Reset, 1 botão de Boot</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Luz de preenchimento</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">0.3w Luz Branca</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Luz de Status</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">1 Indicador de Energia, 2 IO Programáveis</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                <p><span data-font-family="Montserrat">Áudio</span></p>
            </td>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Mic</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">Mic on-board</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                <p><span data-font-family="Montserrat">Alto-falante</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">Alto-falante externo</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">Dimensão</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="Montserrat">40x40x36.5mm</span></p>
            </td>
        </tr>
        <tr>
            <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                <p><span data-font-family="Montserrat">Alimentação</span></p>
            </td>
            <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                <p><span data-font-family="default">5V 1A</span></p>
            </td>
        </tr>
    </tbody>
</table>

## Visão Geral do Hardware

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

### [Placa Principal-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Placa         | Recursos                           | Versão |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - Módulo WiFi/BLE <br /> - Antena on-board <br /> - Conector de antena externa| 1.2 |
| C1_2002       | - eMMC <br /> - SDIO extra para placa base <br /> - UART extra para placa base | 1.2 |

Visão Superior             |  Visão Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Sensor Board-S101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

Visão Superior             |  Visão Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ características

<div>

<table ><tbody>
<tr >
    <td >SENSOR</td>
    <td class="dbon">OV5647</td>
    <td class="dbon">TAMANHO DO CMOS</td>
    <td class="dbon">1/4"</td>
</tr>
<tr >
    <td class="dbon">PIXELS</td>
    <td class="dbon">5MP</td>
    <td class="dbon">ABERTURA</td>
    <td class="dbon">F2.8</td>
</tr>
<tr >
    <td >COMPRIMENTO FOCAL</td>
    <td class="dbon">3.46mm</td>
    <td class="dbon">CAMPO DE VISÃO</td>
    <td >65°</td>
</tr>
<tr >
    <td >DISTORÇÃO</td>
    <td >&lt;1%</td>
    <td >Imagem</td>
    <td >2592 x 1944(still picture)</td>
</tr>
<tr >
    <td >IMAGEM</td>
    <td  colspan="3">resolução de imagem fixa de 2592 x 1944</td>
</tr>
<tr >
    <td >VÍDEO</td>
    <td  colspan="3">1920 x 1080p @30fps, 1280 x 720p @60fps, 640 x 480p @60fps, 640 x 480p @90fps</td>
</tr></tbody>
</table>
</div>

- 4 x luzes de preenchimento LED
- 1 x microfone
- 1 x alto-falante
- 3 x indicadores LED

### [Base Board-B101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#base-board)
<!-- 搬运github说明和图 -->
Visão Superior             |  Visão Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Upper.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Bottom.png" /></div>

#### ⚙️ Características

- 1 x porta Type-C para entrada de energia e comunicação.
- 1 x módulo transformador de porta única para suporte à comunicação Ethernet.
- 1 x leitor de cartão SD para armazenamento e troca de dados.

## Interface de Hardware

- [Luz](#jump2)
- [Mic & Speaker](#jump3)
- [WIFI](#jump4)
- [Cartão SD](#jump5)
- [Uart (Depuração)](#jump6)
- [Botão do Usuário](#jump7)

### <span id="jump2">Luz</span>

Há 3 indicadores na recamera, as luzes **vermelha e azul** são indicadores programáveis, e o indicador **verde** é o indicador de energia, que não é programável. **Vermelho** é o indicador de status da CPU e **azul** é o indicador de status de leitura do emmc do sistema.

**Status dos Indicadores de Luz**:

| LED(cor) | Status | Declaração |
| ---- | ---- | ---- |
| LED1 - Verde | ON | Energia Ligada |
| LED2 - Vermelho | Piscando | CPU Trabalhando(definido pelo usuário) |
| LED3 - Azul | Piscando | Leitura/Gravação do eMMC |

Exemplo 1: Usar comando Linux para alterar o brilho do **LED vermelho** para zero

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

Exemplo 2: desligar completamente a **luz vermelha**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

Há quatro luzes **brancas**, que são as luzes de preenchimento da câmera. O interruptor das luzes de preenchimento pode ser controlado pelas seguintes instruções.

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">Mic & Speaker</span>

A recamera possui um microfone e um alto-falante. Você pode invocar o microfone e o alto-falante com o seguinte comando. A recamera pode reproduzir arquivos de áudio no formato **wav**.

O formato padrão do player é: taxa de bits de 16 bits; A taxa de amostragem é 16.000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

A versão 2002w da reCamera possui o módulo Wi-Fi em hardware. O Wi-Fi é de modo duplo AP+STA, que pode ser usado para configurar a rede do dispositivo ou configurar o dispositivo no modo AP.

O **SSID** do Wi-Fi no modo AP é: `reCamera_+ os últimos seis bits do MAC`.

A **senha** do Wi-Fi no modo AP é: `12345678`.

O ssid e a senha do WiFi_AP podem ser configurados no arquivo `/etc/hostapd_2g4.conf` no sistema da recamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

O arquivo de configuração STA da reCamera está em **/etc/wpa_supplicant.conf**, onde você configura a conta e a senha do Wi-Fi ao qual deseja se conectar.
No modo STA, conecte-se ao Wi-Fi na banda **5G**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

No terminal, você pode escanear e se conectar ao Wi-Fi com o seguinte comando:

```bash
wpa_cli -i wlan0 scan                           #Start a scan

wpa_cli -i wlan0 scan_results                   #Returns wifi scan results

wpa_cli add_network                             # Adding a new network,Returns a network ID
wpa_cli set_network ID ssid "your_wifi_name"    # set network SSID
wpa_cli set_network ID psk "your_wifi_password" # set network passwd
wpa_cli enable_network ID                       # enable network and connect
wpa_cli status                                  # Checking connection status
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump5">Cartão SD</span>

O slot para cartão SD pode expandir o espaço de armazenamento da recamera. Após inserir o cartão SD, você pode encontrar a existência do seu SD usando o comando `lsblk`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

Depois de encontrar um dispositivo de armazenamento como mmcblk1p1, você pode montá-lo no seu sistema usando o seguinte comando.
<br/>

Observe que a recamera só reconhece sistemas de arquivos **ext4**.

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

Verifique o resultado da montagem com `lsblk`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart (Depuração)</span>

A placa de circuito base da recamera possui três contatos tx, rx e gnd, que servem como porta serial de depuração da recamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

O dispositivo possui uma taxa de baud da porta serial de 115200 e pode fazer login no sistema da recamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">Botão do Usuário</span>

O botão usr da reCamera pode ser personalizado pelo usuário.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## Lista de peças

| Item | Quantidade |
|--|--|
| reCamera 2002 Série | x1 |
| Cabo USB type-C | x1 |
| Cabo Ethernet | x1 |

<!-- ## Accessories List -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
