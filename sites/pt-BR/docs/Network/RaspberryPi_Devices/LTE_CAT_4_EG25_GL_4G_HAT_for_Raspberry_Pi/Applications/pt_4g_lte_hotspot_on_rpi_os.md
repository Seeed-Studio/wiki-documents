---
description: Transforme seu Raspberry Pi em um poderoso hotspot Wi‑Fi móvel com este guia. Conecte-se facilmente à internet em qualquer lugar com um Raspberry Pi 4G LTE Hat.
title: Configurando um Hotspot com Raspberry Pi 4G LTE Hat no Raspberry Pi OS
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - Hotspot
  - Dados móveis
  - 4G LTE
  - Computação de Borda
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /4g_lte_hotspot_on_raspberry_pi_os
last_update:
  date: 12/24/2024
  author: Kasun Thushara
createdAt: '2024-12-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/4g_lte_hotspot_on_raspberry_pi_os/
---

## Introdução 

Este guia irá conduzi-lo pelo processo de configuração de um hotspot 4G LTE no seu Raspberry Pi usando o 4G LTE Hat. Iremos abordar os componentes de hardware e software necessários, incluindo o Raspberry Pi, o 4G LTE Hat, com Raspberry Pi OS (Bookworm). Você aprenderá como configurar o módulo 4G, estabelecer uma rede Wi‑Fi e compartilhar com segurança sua conexão de internet com outros dispositivos.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos de Software 

- É necessário um Raspberry Pi com o Bookworm OS instalado.

- Um módulo Quectel LTE 4G configurado para acesso à internet. Certifique-se de que a conectividade LTE esteja devidamente configurada usando RNIDS ou configurações semelhantes. [Link](https://wiki.seeedstudio.com/pt-br/raspberry_pi_4g_hat_rndis_mobile_internet/)

## Etapas para Ativar o Hotspot

###  Conectar à Rede LTE

Certifique-se de que o seu módulo Quectel LTE está conectado e fornecendo acesso à internet. Confirme a conectividade usando:

```bash
ping -c 4 google.com
```

###  Criar um Hotspot
Para transmitir uma rede hotspot usando o módulo Wi‑Fi integrado:

- Abra o terminal.
- Execute o seguinte comando, substituindo `hotspot name` e `hotspot password` pelo SSID e senha desejados:

```bash
 sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
```

- **ssid**: Define o nome da sua rede hotspot.
- **password**: Define a senha para acessar o hotspot.
- **ifname wlan0**: Especifica a interface Wi‑Fi a ser usada.

## Gerenciar o Hotspot

### Desativar o Hotspot

Para parar o hotspot e restaurar a interface Wi‑Fi para o modo cliente:

```bash
sudo nmcli device disconnect wlan0
```
### Reconectar a Outra Rede Wi‑Fi

Para se conectar a uma rede Wi‑Fi diferente após desativar o hotspot:

```bash
sudo nmcli device up wlan0
```
## Observações Adicionais


- Agora você pode usar seu Raspberry Pi como um roteador portátil ou ponto de acesso Wi‑Fi.
- Certifique-se de que a fonte de alimentação do seu Raspberry Pi seja estável ao transmitir um hotspot por longos períodos.
- Você pode consultar este [documento](https://www.raspberrypi.com/tutorials/host-a-hotel-wifi-hotspot/) para mais detalhes 

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>