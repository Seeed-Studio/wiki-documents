---
description: Explore o mundo do modo ECM e 4G LTE no Raspberry Pi. Este guia fornece instruções passo a passo para configurar a conectividade celular usando ECM (Ethernet Control Model), permitindo acesso contínuo à internet para seus projetos.
title: Internet Móvel para o Seu Pi - Configuração ECM
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - ECM
  - Dados Móveis
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.webp
slug: /raspberry_pi_4g_hat_ecm_mobile_internet
last_update:
  date: 3/14/2024
  author: Kasun Thushara
createdAt: '2024-12-13'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/raspberry_pi_4g_hat_ecm_mobile_internet/
---

## Introdução

**ECM (Ethernet Control Model)** é um protocolo de rede via USB que permite que dispositivos como o módulo 4G Quectel EG25-G funcionem como uma interface de rede em um Raspberry Pi. Ao ativar o modo ECM, o módulo fornece conectividade de internet celular, tornando-o ideal para aplicações de IoT, como roteadores portáteis de internet, gateways IoT e sistemas de monitoramento remoto. O Raspberry Pi se comunica com o módulo por meio de comandos AT para gerenciar recursos como modo ECM, GNSS e SMS, garantindo acesso confiável à internet em áreas sem redes cabeadas ou Wi‑Fi.

## Preparação de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## A Configuração de Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

Configurar um Raspberry Pi para rede via modo ECM (Ethernet Control Model) usando **comandos AT** envolve o uso do Módulo Quectel.

:::note
Se os drivers necessários para comunicar por comandos AT não estiverem instalados, você precisará [instalá-los](https://wiki.seeedstudio.com/pt-br/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi).
:::

## Configuração de Rede

### Passo 1 : Abra o Minicom no Raspberry Pi

```bash
sudo minicom -D /dev/ttyUSB2
AT
```

### Passo 2 : Ative o modo ECM

```bash
AT+QCFG="usbnet",1
```

### Passo 3: Verifique o modo

```bash
AT+QCFG="usbnet"?
```

Ele deve retornar **usbnet,1**, indicando que o modo ECM está ativo.

### Passo 4: Verifique as interfaces de rede

```bash
ifconfig
```

Você deve ver uma nova interface, usb0 ou eth1, que é a interface de rede em modo ECM. Neste caso é usb0.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ifconfig_usb0.PNG"
    style={{ width: 600}}
  />
</div>

### Passo 5: Para configurar a interface de rede para acesso à internet, use DHCP

```bash
sudo dhclient usb0
sudo ip link set usb0 up
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb0-dhcp.png"
    style={{ width: 600}}
  />
</div>

### Passo 6: Certifique-se de que o roteamento esteja configurado corretamente para acesso à internet

```bash
sudo ip route add default via 192.168.225.1 dev usb0
```

Altere o gateway de acordo com o seu IP de usb0.

### Passo 7: Adicione entradas de DNS para resolução de nomes

**Edite o arquivo /etc/resolv.conf para usar o DNS do Google:**

```bash
sudo nano /etc/resolv.conf
```

### Passo 8: Adicione estas 2 linhas e salve

```bash
nameserver 8.8.8.8
nameserver 8.8.4.4
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/GoogleDNS.PNG"
    style={{ width: 600}}
  />
</div>

### Passo 9: Torne as configurações de DNS persistentes

```bash
sudo nano /etc/NetworkManager/NetworkManager.conf
```

### Passo 10: Adicione em [main] e salve

```bash
dns=none
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/DNS.PNG"
    style={{ width: 600}}
  />
</div>

### Passo 11: Reinicie o NetworkManager

```bash
sudo systemctl restart NetworkManager
```

### Passo 12: Teste a Conexão

```bash
ping -I usb0 8.8.8.8
nslookup google.com
```

Uma vez conectado com sucesso à rede móvel usando o 4G LTE HAT, as possibilidades são realmente ilimitadas. Você pode estabelecer **conexões MQTT** para mensagens de IoT, comunicar-se perfeitamente com **serviços em nuvem** para processamento de dados ou configurar um **servidor FTP** para transferências remotas de arquivos. Essa configuração transforma o seu Raspberry Pi em um gateway portátil e poderoso para diversas aplicações em IoT, automação e muito mais.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
