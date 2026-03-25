---
description: Aproveite o acesso confiável à internet em qualquer lugar com um Raspberry Pi 5, OpenWrt e um HAT 4G LTE. Aprenda a criar um hotspot portátil de alto desempenho para casa, viagens e locais remotos.
title: Configurando o OpenWrt no Raspberry Pi 5 com um Módulo 4G LTE
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - Hotspot
  - Dados móveis
  - 4G LTE
  - OpenWRT
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.webp
slug: /4g_lte_hat_and_raspberry_pi_router_with_openwrt
last_update:
  date: 12/25/2024
  author: Kasun Thushara
createdAt: '2024-12-25'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/4g_lte_hat_and_raspberry_pi_router_with_openwrt/
---

## Introdução

O Raspberry Pi 5, combinado com **OpenWrt** e um HAT 4G LTE, oferece uma solução poderosa e flexível para criar um hotspot portátil. Essa configuração é ideal para fornecer acesso à internet em locais remotos, dar suporte a dispositivos IoT ou criar uma rede sem fio pessoal em qualquer lugar. A capacidade de personalização do OpenWrt garante integração perfeita com módulos 4G LTE, permitindo que os usuários aproveitem todo o potencial do Raspberry Pi 5 como um roteador sem fio confiável e de alto desempenho. Seja para uso doméstico, em viagens ou profissional, este guia ajudará você a transformar seu Raspberry Pi 5 em um hotspot totalmente funcional com OpenWrt e conectividade 4G LTE.

## Pré-requisitos

### Requisitos de Hardware

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

## Criar a Imagem OpenWrt

### Escolher o Snapshot do OpenWrt

Para trabalhar com um módulo 4G LTE, são necessárias certas dependências. O OpenWrt Firmware Selector oferece a flexibilidade de incluir essas dependências durante o processo de criação da imagem, permitindo que você compile um firmware personalizado. Sem essa abordagem, você precisaria de outra fonte de internet para instalar as dependências no Raspberry Pi após a configuração. Portanto, é recomendável criar uma imagem de firmware que já inclua as dependências necessárias.

- **Acesse o [OpenWrt firmware selector](https://firmware-selector.openwrt.org/?version=SNAPSHOT&target=bcm27xx%2Fbcm2712&id=rpi-5) e escolha a versão snapshot.**

- Os snapshots são atualizados com frequência e são ideais para usuários avançados.

- Clique em `Customize installed packages and/or first boot script`.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build-1.PNG"
    style={{ width: 500}}
  />
</div>

Certifique-se de que os seguintes pacotes sejam incluídos durante o processo de build personalizado:

- kmod-usb-net-cdc-ether
- kmod-usb-serial-option
- picocom
- minicom

### Etapas para o Build

- Adicione os pacotes necessários ao seu arquivo de configuração.
- Compile o firmware OpenWrt.
- Baixe a imagem factory gerada após a compilação.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build.PNG"
    style={{ width: 500}}
  />
</div>

## Instalar o OpenWrt no Raspberry Pi 5

- Grave a imagem compilada em um cartão SD usando ferramentas como **Balena Etcher**.
- Insira o cartão SD no Raspberry Pi 5.
- Conecte o seu Raspberry Pi a um módulo 4G LTE

### Verificar a Conexão do Dispositivo

Acesse o Raspberry Pi usando SSH:

```bash
ssh root@192.168.1.1
```

### Verificar Detalhes do Dispositivo

- Use dmesg para verificar os dispositivos conectados:

```bash
dmesg | grep usb
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-dmsg.PNG"
    style={{ width: 500}}
  />
</div>

- Ver detalhes USB:

```bash
cat/sys/kernel/debug/usb/devices
```

:::note
Isso exibirá informações sobre o fabricante, produto e outros detalhes específicos do dispositivo. Certifique-se de que o módulo esteja ligado.
:::

## Configurar o Módulo LTE

### Usar o Minicom para Ajustar Configurações

Abra o **Minicom**

```bash
minicom -s
```

Você verá uma interface deste tipo. Selecione Serial port setup usando as teclas de seta

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-serial.PNG"
    style={{ width: 500}}
  />
</div>

Configure as definições:

- Defina o baud rate para corresponder ao seu módulo 4G (por exemplo, 9600).
- Selecione a porta COM correta (por exemplo, /dev/ttyUSB2).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom.PNG"
    style={{ width: 500}}
  />
</div>

- E salve a configuração como padrão

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-save.PNG"
    style={{ width: 500}}
  />
</div>

### Ativar o Modo ECM / Dial-Up

Envie os seguintes comandos AT para configurar o modo de rede USB:

```bash
minicom -D /dev/ttyUSB2
```

```bash
AT+QCFG="usbnet"
AT+QCFG="usbnet",1 
```

### Adicionar uma Nova Interface de Rede

- Faça login na interface web LuCI do OpenWrt via navegador em **192.168.1.1**.
- Vá para **Network > Interfaces > Add New Interface**.
- Configure a interface:
  - Selecione o dispositivo detectado (**eth1** ou **usb0**).
  - Use o protocolo **DHCP Client**.
  - Dê um nome para a interface (por exemplo, **USB_Modem**).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-new-interface.PNG"
    style={{ width: 500}}
  />
</div>

- Configure as definições de firewall:
  - Atribua a interface à zona WAN.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-firewall-interface.PNG"
    style={{ width: 500}}
  />
</div>

- Em DHCP Server, ative Ignore Interface.

### Configurar um Ponto de Acesso Sem Fio

- Na interface web LuCI, navegue até **Network > Wireless > Add**.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless.PNG"
    style={{ width: 500}}
  />
</div>

- Configure a nova interface sem fio:
  - **SSID**: Mantenha o padrão ou personalize-o.
  - **Mode**: Access Point.
  - **Network**: LAN.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless-settings.PNG"
    style={{ width: 500}}
  />
</div>

- Para **Wireless Security**
  - Defina a criptografia como **WPA2**.
  - Crie uma senha forte.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-password-wireless.PNG"
    style={{ width: 500}}
  />
</div>

- Reinicie o dispositivo.

### Testar a Rede Sem Fio

- Seu SSID sem fio agora deve estar visível em dispositivos próximos.
- Conecte-se usando a senha configurada para acessar a internet 4G LTE.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-connection.PNG"
    style={{ width: 500}}
  />
</div>

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.png"
    style={{ width: 500}}
  />
</div>

## Recursos

- **[Web Page]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Web Page]** [OpenWRT Uses cdc_ether driver based dongles for WAN connection](https://openwrt.org/docs/guide-user/network/wan/wwan/ethernetoverusb_cdc)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
