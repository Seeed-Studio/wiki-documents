---
description: Guia para configurar o Quectel 4G Raspberry Pi HAT no Windows usando o modo MBIM para uma conexão de internet celular estável.
title: 4G Raspberry Pi HAT - Configuração do modo MBIM no Windows
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - MBIM
  - 4G LTE
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.webp
slug: /raspberry_pi_4g_lte_hat_mbim
last_update:
  date: 3/18/2025
  author: Kasun Thushara
createdAt: '2025-03-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/raspberry_pi_4g_lte_hat_mbim/
---

## Introdução

O **Quectel 4G Raspberry Pi HAT** oferece conectividade à internet no Windows utilizando o modo MBIM (Mobile Broadband Interface Model). Esse modo permite que o Windows reconheça o módulo 4G como um modem celular nativo, proporcionando uma conexão de rede estável e com suporte de driver.

Este guia orientará você pelas etapas necessárias para configurar o seu módulo Quectel no modo MBIM e conectá-lo à internet em sistemas Windows 10/11.

## Pré-requisitos

### Requisitos de hardware

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Pré-requisitos de software

Antes de continuar, verifique se:

- Quaisquer drivers Quectel NDIS ou outros drivers instalados anteriormente foram desinstalados.
- O driver MBIM correto foi instalado usando os links fornecidos abaixo.

### Download do driver MBIM

- [Baixe o driver Quectel Windows MBIM v1.3](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_MBIM_V1.3_EN.zip)
- [Obtenha as atualizações mais recentes da Quectel](https://www.quectel.com/download-zone/?_sf_s=MBIM)

Depois de instalado, você pode verificar a instalação do driver acessando **Gerenciamento do Computador** → **Gerenciador de Dispositivos**. Uma instalação bem-sucedida exibirá dispositivos em "Adaptadores de Rede" e "Portas (COM e LPT)" semelhantes à imagem abaixo:

  <div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree_mbim.PNG"
    style={{ width: 600}}
  />
</div>

### Configurar o modo MBIM

Para alternar o módulo para o modo MBIM, você precisará da **QCOM Tool**.

1. Baixe e abra a [QCOM Tool](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar).
2. Conecte o seu 4G HAT ao PC com Windows via USB e ligue-o.
3. No QCOM, envie o seguinte comando AT para verificar o modo USB atual:

   ```
   AT+QCFG="usbnet"?
   ```

   - Se retornar qualquer coisa diferente de `"usbnet",2`, ignore isto.

4. Para alternar para o modo MBIM, envie:

   ```
   AT+QCFG="usbnet",2
   ```

5. Em seguida, reinicie

   ```
   AT+CFUN=1,1
   ```

:::note
Às vezes você pode perceber que a porta AT não está respondendo. Nesses casos, use a porta DM em seu lugar.
:::

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcommand.PNG"
    style={{ width: 600}}
  />
</div>

## Conectar à rede

Depois de configurado no modo MBIM:

- O Windows deve detectar uma **Interface de Rede Celular**.
- Agora você pode gerenciar e se conectar às redes diretamente pelas **Configurações de Rede e Internet** do Windows.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/windows.PNG"
    style={{ width: 600}}
  />
</div>

## Verificar a configuração de rede

Para verificar se o seu PC obteve uma conexão de rede via MBIM:

1. Abra o Prompt de Comando.
2. Execute:

   ```
   ipconfig
   ```

   Você deverá ver uma interface com um endereço IP em "Conexão de Banda Larga Móvel" ou "Celular".

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mbimcmd.PNG"
    style={{ width: 600}}
  />
</div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
