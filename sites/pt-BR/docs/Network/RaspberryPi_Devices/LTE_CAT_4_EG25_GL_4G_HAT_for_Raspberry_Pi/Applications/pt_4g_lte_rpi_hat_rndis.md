---
description: Configure o RNDIS no Windows para conectar o Raspberry Pi 4G LTE HAT via USB, permitindo acesso perfeito à internet e à rede.
title: RNDIS no 4G LTE Raspberry Pi HAT Windows
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - RNDIS
  - 4G LTE
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /raspberry_pi_4g_lte_hat_rndis
last_update:
  date: 3/17/2025
  author: Kasun Thushara
createdAt: '2025-03-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/raspberry_pi_4g_lte_hat_rndis/
---

## Introdução

**RNDIS (Remote Network Driver Interface Specification)** é um protocolo da Microsoft que permite que dispositivos USB emulem adaptadores de rede, permitindo que eles forneçam acesso à internet ou à rede a um PC com Windows por meio de uma conexão USB. No Windows, instalar o driver RNDIS correto é essencial para que dispositivos como módulos Quectel funcionem como interfaces Ethernet virtuais. Depois de instalado, o driver permite que o PC reconheça o dispositivo como um adaptador de rede, possibilitando o compartilhamento de internet ou a comunicação em rede local. Esse processo é especialmente comum em módulos celulares que fornecem conectividade à internet via USB.

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


## Pré-requisitos de Software
Se você já instalou NDIS ou qualquer outro driver no Windows, desinstale-o e instale o driver RNDIS fornecido abaixo.

- [Baixe aqui](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_RNDIS_V1.1.12.zip)
- [Obtenha as atualizações mais recentes](https://www.quectel.com/download-zone/?_sf_s=rndis)


Você pode verificar o resultado da instalação através de `Computer Management` → `Device Manager`. A interface "Device 
Manager" após uma instalação bem-sucedida do driver é mostrada abaixo.  

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree.PNG" 
    style={{ width: 600}} 
  />
</div>



### Configurar para o modo RNDIS

Para configurar o modo RNDIS, use a ferramenta QCOM e siga estas etapas:  
1. Insira e envie o seguinte comando na [ferramenta QCOM](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar):  
   **AT+QCFG="usbnet"?**  

2. Se a resposta não mostrar **AT+QCFG="usbnet",3**, defina manualmente para o modo RNDIS enviando:  
   **AT+QCFG="usbnet",3**


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnetcommnad.PNG" 
    style={{ width: 600}} 
  />
</div>

### Conectar à rede

Você deve ver uma interface de rede (por exemplo, Network X) indicando a conexão.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connection.PNG" 
    style={{ width: 400}} 
  />
</div>

Você pode verificar a nova configuração RNDIS usando o comando ipconfig.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/3.PNG" 
    style={{ width: 600}} 
  />
</div>


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

