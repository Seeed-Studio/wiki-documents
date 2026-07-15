---
description: Esta é a visão geral de recursos, especificações, interface de hardware e lista de peças.
title: Hardware e Especificações
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_hardware
sku: 100041077, 100074316, 100018917, 100029708
sidebar_position: 2
last_update:
  date: 09/25/2025
  author: Parker Hu
createdAt: '2025-10-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recamera_hq_poe_hardware/
---

# Visão Geral da reCamera HQ POE

A reCamera 2002 HQ PoE está equipada com um sensor CMOS avançado para imagens mais nítidas e claras. Ela possui um encaixe de lente M12 — permitindo substituir a lente padrão por qualquer lente M12 2MP compatível. Também oferece suporte a PoE (Power over Ethernet): não é necessária alimentação USB/DC separada, apenas um cabo Ethernet conectado a um switch PoE para energia e dados.


## Recursos

- Alta Qualidade: Equipada com um sensor CMOS GC2053 de 1/2,9 polegada, fornecendo qualidade de imagem superior.
- Montagem de Lente M12: FOV padrão de 90°, facilmente substituível por qualquer lente M12 padrão.
- Ethernet com PoE (Power over Ethernet): Suporta dados e energia em um único cabo, apenas modo PoE A.
- Extensão IO/UART: Cabeçalho de 6 pinos com 1×UART e 3×GPIO.

## Especificações

### Sistema de Processamento

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **Desempenho de IA**   | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Sistema Operacional**| Linux                                                                     |
| **Memória**            | 256 MB                                                                  |
| **Codificador de Vídeo**| 5MP @ 30Fps                                                              |



| Sensor                | GC2053                             |
| --------------------- | ---------------------------------- |
| Formato Óptico        | 1/2.9inch                          |
| Resolução             | 1920x1080                          |
| Taxa Máxima de Quadros| 30fps@full size                    |
| Montagem da lente     | M12                                |
| FOV                   | 93°                                |
| Ethernet              | 100Mbps com PoE                    |
| USB                   | USB Type-C(2.0)                    |
| Dimensão              | 40x40x45.8mm40x40x53.1mm com lente |
| Temperatura de Operação | -20～50°C                        |
| Umidade de Operação   | 95%                                |


### [Placa Principal-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Placa        | Recursos                           | Versão |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - Módulo WiFi/BLE <br /> - Antena onboard <br /> - Conector para antena externa| 1.2 |
| C1_2002       | - eMMC <br /> - SDIO extra para placa base <br /> - UART extra para placa base | 1.2 |

Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Placa do Sensor-S4_GC2053](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)


Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_top2.png" /></div> |<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/GC2053_bottom2.png" /></div>

#### ⚙️ recursos

<div>
  <table>
    <tbody>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Sensor</td>
        <td className="dbon">GC2053</td>
        <td style={{ fontWeight: 'bold' }}>Tamanho do CMOS</td>
        <td className="dbon">1/2.9"</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Pixels</td>
        <td className="dbon">2MP</td>
        <td style={{ fontWeight: 'bold' }}>Abertura</td>
        <td className="dbon">F2.8</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Comprimento Focal</td>
        <td className="dbon">2.9mm ±0.5%</td>
        <td style={{ fontWeight: 'bold' }}>Campo de Visão</td>
        <td>DFOV 93°   HFOV 84°  VFOV 54°</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Distorção</td>
        <td>0.5 %</td>
        <td style={{ fontWeight: 'bold' }}>Iluminação Relativa</td>
        <td>30% ± 5%</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Faixa de Foco</td>
        <td>39~69.5 CM </td>
        <td style={{ fontWeight: 'bold' }}>Altura de Foco</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Vídeo</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Interfaces</td>
        <td colspan="3">- 1 x microfone<br />- 1 x alto-falante<br />- 3 x indicador LED</td>
      </tr>
    </tbody>
  </table>
</div>

### [B3_POE](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Base_Board/B3_POE/readme.md)

Superior             |  Inferior
:-------------------------:|:-------------------------:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_top2.png" /></div>  |  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_bottom2.png" /></div>

#### ⚙️ Recursos:

- 1 x porta RJ45 para **802.3af PSE**.
- 1 x porta UART.
- 1 x porta de Depuração.
- 3 x porta IO.

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

## Interface de Hardware

- [Luz](#jump2)
- [Mic & Speaker](#jump3)
- [POE](#jump4)
- [IO](#jump5)
- [Uart (Debug)](#jump6)
- [Botão do Usuário](#jump7)

### <span id="jump2">Luz</span>

Há 3 indicadores na reCamera, as luzes **vermelha e azul** são indicadores programáveis, e o indicador **verde** é o indicador de alimentação, que não é programável. **Vermelho** é o indicador de status da CPU e **azul** é o indicador de status de leitura do emmc do sistema.

**Status dos Indicadores Luminosos**:

| LED(cor) | Status | Descrição |
| ---- | ---- | ---- |
| LED1 - Verde | ON | Ligado |
| LED2 - Vermelho | Piscando | CPU em funcionamento (definido pelo usuário) |
| LED3 - Azul | Piscando | Leitura/Gravação da eMMC |

Exemplo 1: Usar comando linux para alterar o brilho do **LED vermelho** para zero

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

Exemplo 2: desligar completamente a **luz vermelha**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

### <span id="jump3">Mic & Speaker</span>

A reCamera possui um microfone e um alto-falante. Você pode invocar o microfone e o alto-falante seguindo o comando. A reCamera pode reproduzir arquivos de áudio no formato **wav**.

O formato padrão do player é: taxa de bits de 16 bits; A taxa de amostragem é 16.000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">POE</span>

O módulo POE é integrado ao hardware da versão reCamera HQ POE. O módulo WiFi foi removido. No entanto, você pode restaurar a função Wi-Fi substituindo a placa principal pela SG2002w.

Conecte a reCamera a um switch que suporte o protocolo **POE 802.3af**, e o dispositivo reCamera será inicializado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/poe_connect_recamera.jpg" /></div>

Você pode verificar o endereço IP do dispositivo no seu roteador para acessá-lo, ou conectar a reCamera via USB e acessar o terminal para consultar o IP da rede cabeada.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/router_search.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/terminal_ipv4_search.png" /></div>

### <span id="jump5">IO</span>

**Usando a interface GPIO sysfs para controlar I/O**

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/IO_Lens_6.png" /></div>

No Linux, a maneira mais comum de ler e escrever GPIO é usando a interface GPIO sysfs. Isso é implementado manipulando arquivos como `export`, `unexport`, `gpio{N}/direction` e `gpio{N}/value` (substitua `{N}` pelo número real do pino) no diretório `/sys/class/gpio`, e é frequentemente usado em scripts shell.

A placa de fundo POE da reCamera possui 3 portas IO disponíveis. Cada porta pode ser configurada como entrada ou saída. As portas IO são numeradas da seguinte forma:

| Porta IO | Número GPIO |
| ---- | ---- |
| D1 | 490 |
| CLK(Pinos IO multiplexados) | 487 |
| SMD(Pinos IO multiplexados) | 488 |


```bash
echo "490" > /sys/class/gpio/export #Enable pin GPIO490

echo "out" > /sys/class/gpio/gpio490/direction #Enable the output mode
echo 1 > /sys/class/gpio/gpio490/value # Set the pin to a high level
echo 0 > /sys/class/gpio/gpio490/value # Set the pin to a low level

echo "in" > /sys/class/gpio/gpio490/direction #Enable the input mode
cat /sys/class/gpio/gpio490/value #Read the pin level

echo "490" > /sys/class/gpio/unexport #Disable pin GPIO490
```


### <span id="jump6">Uart (Debug)</span>

A placa base POE da reCamera possui dois conjuntos de portas seriais, /ttyS0 (para Depuração) e /ttyS3.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-1.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_pinout.png" /></div>

A porta serial de depuração deste dispositivo tem taxa de transmissão de 115200 e suporta conexão a sistemas de monitoramento remoto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

```bash
#Use the stty tool to query its communication parameters.

stty -F /dev/ttyS3
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-2.png" /></div>

```bash
# Modify the serial port baud rate, where ispeed refers to the input speed and ospeed refers to the output speed.

stty -F /dev/ttyS3 ispeed 115200 ospeed 115200
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/image-3.png" /></div>

A porta serial padrão tem eco ativado, e você pode usar o seguinte comando para desativá-lo:

```bash
stty -F /dev/ttyS3 -echo
```

Comunicação serial:

```bash
#Send data
echo "hello world" > /dev/ttyS3
echo Hello! > /dev/ttyS3
#Receive data
cat /dev/ttyS3
```

Use a ferramenta minicom para se comunicar via porta serial:

```bash
minicom -D /dev/ttyS3 -b 115200
```


### <span id="jump7">Botão do Usuário</span>

O botão usr da reCamera pode ser personalizado pelo usuário.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE_user_button.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## Lista de Peças

| Item | Quantidade |
|--|--|
| reCamera 2002x HQ PoE | x1 |
| Cabo USB Tipo-C | x1 |
| Cabo Ethernet | x1 |
| Manual do Usuário | x1 |
| Cabo de 6 pinos | x1 |


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
