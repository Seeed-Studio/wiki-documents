---
description: Primeiros Passos Edge Controller
title: Primeiros Passos Edge Box RPI-200
keywords:
  - Raspberry pi
  - Edge Controller
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edge_Box_introduction
sku: 114110227
last_update:
  date: 2/29/2024
  author: Kasun Thushara
createdAt: '2024-02-29'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Edge_Box_introduction/
---

## Introdução


<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:400, height:'auto'}}/></div>

A série EdgeBox-RPI-200 funciona como um controlador de computação de borda industrial tudo-em-um baseado em Raspberry Pi, voltado para diversas aplicações industriais. Com alta escalabilidade e hardware robusto, integra-se perfeitamente ao amplo ecossistema de software industrial do Raspberry Pi. Isso o torna uma escolha ideal para automação inteligente e soluções de Internet Industrial das Coisas (IIoT).

Controladores de borda, como alternativas versáteis aos PLCs e PACs tradicionais, atendem tanto às necessidades de tecnologia operacional (OT) quanto de tecnologia da informação (IT) por meio de sistemas operacionais cuidadosamente projetados. Eles garantem tempo de execução determinístico e fornecem um ambiente de computação para tarefas avançadas como análises, aumentando a utilidade em vários cenários industriais. Com a força de trabalho atual familiarizada com linguagens de programação modernas e ambientes de kits de desenvolvimento devido à era dos smartphones, os controladores da série EdgeBox-RPI-200 oferecem uma interface amigável. Seu formato compacto permite operação em tempo real e controle de múltiplos processos, atendendo a diversos propósitos industriais, incluindo PLCs, PACs, gateways IIoT, servidores OPC UA e PCs industriais.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos 

**Controlador Tudo-em-Um:**  Integra funções de PLC, PAC, gateway IIoT, servidor OPC UA e PC industrial.

**Processadores Poderosos:** Raspberry Pi Compute Module 4 com 4GB de RAM, 16GB eMMC. Operação em tempo real, suporte a múltiplos processos.

**Interfaces e IO Ricos:** Suporta vários protocolos industriais.

**Capacidades de Comunicação:** Conectividade sem fio, Ethernet Gigabit. Compatível com múltiplos serviços em nuvem.

**Design de Hardware Robusto:** Dissipador de calor em alumínio, trilho DIN 35mm, montagem em parede.

**Ecossistema Raspberry Pi:** Compatível com Codesys, Node Red, MQTT, OPC UA, Ignition, etc.


## Especificações 


| Parâmetros                | Detalhes                                      |
|---------------------------|---------------------------------------------|
|**Básico**                   |                        |                                        
| Núcleo da CPU             | Raspberry Pi CM4 de 4 núcleos               |
| Memória                   | 1GB 2GB 4GB 8GB                             |
| Armazenamento             | 8GB16GB 32GB                                |
| Sem fio                   | WiFi                                        |
|                           | 2.4 GHz, 5.0 GHz IEEE 802.11 b/g/n/ac equipado|
| Bluetooth                 | Bluetooth 5.0, BLE equipado                  |
| Celular                   | Mini-PCIe com suporte a 4G LTE (Quectel EC20/EC25 testado) |
| LoRa®                     | Mini-PCIe com suporte a LoRaWAN® (Seeed WM1302 testado) |
| **Interface**             |                                        |
| Ethernet                  | 1000M RJ45 *1                               |
| HDMI                      | HDMI 2.0 até 4k@60fps                       |
| USB                       | USB2.0 A*2                                  |
| Serial RS                 | RS485 *1 (Isolado)                          |
|                           | RS232 *1                                    |
| Soquete M.2               | Placa SSD NVME 2242                         |
| DI                        | 2 (Isolado)                                 |
|                           | Tensão de entrada CC - 24V, Corrente - 1000mA    |
| DO                        | 2 (Isolado)                                 |
|                           | Tensão de saída - abaixo de 60 V, capacidade de corrente - 500 mA |
| **Recursos Extras**       |                                            |
| Fonte de Alimentação      | CC 12V - 36V                                |
| RTC                       | RTC                                         |
| Watch Dog Timer           | Independente                                |
| Chip de Criptografia      | Atecc608a (opcional)                        |
| Fonte de Alimentação Ininterrupta | UPS (opcional)                              |
| Temperatura de Operação   | -20 a +60 °C                                |
| Certificação              | RoHS, CE, FCC, TELEC, UKCA                  |

## Ecossistema de Software Industrial Raspberry Pi

Com o excelente ecossistema de software industrial Raspberry Pi, você verá que o EdgeBox possui amplo suporte de software e plataformas autônomas.
- [**Codesys**](https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-codesys/)
- [**Ignition**](https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-ignition-edge/)
- [**N3uron**](https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-n3uron/)
- [**balena**](https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-balena-OS-setup/)
- **Node Red**

## Visão Geral de Hardware

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/interfaces.PNG" /></center>

## Diagrama de Blocos 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/blockdiagram.PNG" /></center>

## Conector Phoenix Multifuncional 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/pinout.PNG" /></center>

## Primeira Inicialização

**Passo 01:** Conecte os fios de alimentação aos pinos número 1 e 2. O pino número 1 é para energia e o pino número 2 é para terra.


<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/power.PNG" /></center>

:::note
O sinal PE é opcional. Se não houver EMI presente, a conexão PE pode ficar aberta. 
:::

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/EMI.PNG" /></center>

**Passo 02**: Em seguida, conecte um cabo Ethernet. A configuração final pode se parecer com isto 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/connection.jpg" /></center>

**Passo 03:** Depois disso, talvez seja necessário identificar o endereço IP. Para fazer isso, considere usar um software de varredura de IP ou você pode usar a interface web do roteador. Depois de localizado, utilize SSH para estabelecer comunicação com o Edge Box 200.

:::note
O nome de usuário é pi e a senha é raspberry
:::

O Edge Box-200 chega até você com o Raspberry Pi OS pré-instalado. Você pode usar um cabo HDMI para conectar seu monitor e usar também a interface gráfica do usuário. Para simplificar, podemos usar o servidor VNC. 

Para isso, no terminal digite:

```sh
sudo raspi-config
```

:::note 
Para uma instalação nova do sistema operacional, você precisará adquirir uma placa de desenvolvimento mínima que inclua a função de selecionar o modo de boot para o Raspberry Pi CM4. A [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) é perfeita para esse propósito.
:::

**Passo 04:** Em seguida selecione a opção de interface 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig.PNG" /></center>


**Passo 05:** Depois selecione VNC e habilite-o 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/rpiconfig2.PNG" /></center>

**Passo 06:** Em seguida reinicie o EdgeBox 

```sh
sudo reboot
```
Então, usando sua rede local e seu PC no qual está instalado o Real VNC, você pode interagir diretamente com a GUI do Edge-box 200 RPi. 

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/edgebox_vnc.PNG" /></center>

## Interfaces 

### Portas Seriais  (RS232 e RS485)

Às vezes, pode ser necessário se comunicar com protocolos RS232 ou RS485 com um cliente. O EdgeBox RPI 200 possui portas separadas para comunicação serial. As conexões são as seguintes:

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/serial.PNG" /></center>

:::note 
O resistor de terminação de 120 Ohms para RS485 foi instalado internamente. O sinal RS485_GND é isolado do sinal “GND”. Se for utilizado um cabo par trançado blindado, o RS485_GND é conectado à blindagem.
:::

### DI&DO

Duas entradas digitais isoladas e duas saídas digitais podem ser conectadas ao dispositivo EdgeBox RPI 200. O pinout é mostrado abaixo

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital.PNG" /></center>

Para entender melhor essas conexões, consulte o diagrama abaixo

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/Edgebox_intro/digital1.PNG" /></center>

:::note 
- A tensão CC para entrada é 24V (+- 10%).
- A tensão CC para saída deve ser inferior a 60V, a capacidade de corrente é 500mA.
- O canal 0 e o canal 1 de entrada são isolados entre si
- O canal 0 e o canal 1 de saída são isolados entre si
:::

## Recursos Adicionais

- [Folheto Edgebox](https://files.seeedstudio.com/wiki/Edge_Box/Seeed_Studio_Edgebox-RPi-200.pdf)
- [Manual do Usuário Edgebox](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf)
- [Arquivo 3D do EdgeBox](https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox_RPi_200_3D_file.stp)

## Suporte Técnico



Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>