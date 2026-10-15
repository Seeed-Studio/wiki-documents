---
description: Saiba como configurar um Raspberry Pi com um HAT 4G usando o módulo Quectel EG25 no modo QMI para acesso confiável à internet LTE. Guia passo a passo para configurar, compilar e realizar discagem com o quectel-CM no Raspberry Pi.
title: HAT 4G para Raspberry Pi - Configuração em modo QMI no Raspberry Pi OS
keywords:
  - Raspberry Pi Hat
  - Primeiros passos
  - IIoT
  - QMI
  - 4G LTE
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Raspberry-Pi-4G-LTE-CAT4-HAT.webp
slug: /raspberry_pi_4g_lte_hat_qmi
last_update:
  date: 3/20/2025
  author: Kasun Thushara
createdAt: '2025-03-20'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/raspberry_pi_4g_lte_hat_qmi/
---

## Introdução

Este guia explica como configurar o acesso à internet em um Raspberry Pi usando um HAT 4G equipado com um módulo Quectel EG25-G. O Quectel EG25-G é um modem LTE amplamente utilizado que suporta vários protocolos de rede, incluindo o modo QMI (Qualcomm MSM Interface), que possibilita conectividade banda larga móvel eficiente e de alta velocidade. Seguindo este guia, você aprenderá como configurar o módulo em modo QMI, compilar e usar a ferramenta de discagem quectel-CM e estabelecer uma conexão de internet 4G estável no seu Raspberry Pi. Este método é ideal para aplicações que exigem acesso à internet móvel, como implantações de IoT, monitoramento remoto e computação de borda.

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

### Pré-requisitos de Software

#### Remover Configurações de Discagem Anteriores

Antes de continuar, certifique-se de que quaisquer outros métodos de discagem foram removidos para evitar conflitos.

1. **Verificar a Porta Serial Correta**

Execute o seguinte comando para verificar se você está usando a porta de comando AT correta (substitua `/dev/ttyUSB2` se necessário):

```bash
sudo minicom -D /dev/ttyUSB2
```

2. **Verificar e Definir o Modo de Rede USB**

Dentro do terminal do minicom, digite:

```bash
AT+QCFG="usbnet"?
```

- Se a resposta for `usbnet,0`, nenhuma alteração é necessária.

Para definir explicitamente o modo como `0`:

```bash
AT+QCFG="usbnet",0
```

3. **Reinicie o Módulo**

Redefina o módulo usando:

```bash
AT+CFUN=1,1
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnet_qmi.PNG"
    style={{ width: 600}}
  />
</div>

## Verificar o Driver do Kernel (qmi_wwan e outros)

Verifique se o driver `qmi_wwan` está carregado:

```bash
lsmod 
```

- Se você vir uma saída indicando que `qmi_wwan` está carregado, o driver do kernel está ativo.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/lsmod.PNG"
    style={{ width: 600}}
  />
</div>

## Transplantando a Ferramenta de Discagem

1. **Baixar e Extrair a Ferramenta**

- Após o download, [descompacte o pacote](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/eg25qmi.zip) no seu diretório home.
- Navegue até o seu diretório home:

```bash
ls
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls1.PNG"
    style={{ width: 600}}
  />
</div>

- Você deverá ver uma pasta chamada `eg25qmi`.

2. **Navegar até o Diretório da Ferramenta**

```bash
cd eg25qmi
ls
```

- Você verá arquivos-fonte para a ferramenta de discagem.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls2.PNG"
    style={{ width: 600}}
  />
</div>

## Compilação

1. **Compilar a Ferramenta de Discagem**

```bash
sudo make
```

- Após a compilação, arquivos recém-gerados (destacados em verde) ficarão visíveis, incluindo a ferramenta de discagem `quectel-CM`.

### Verificar os Arquivos Compilados

```bash
ls
```

- O executável `quectel-CM` deve estar presente. Esta é a ferramenta de discagem necessária para conectar à internet.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ls3.PNG"
    style={{ width: 600}}
  />
</div>

## Acesso à Internet por Discagem

1. **Iniciar a Discagem**

```bash
sudo ./quectel-CM
```

- Se o processo de discagem for bem-sucedido, você verá um endereço IP atribuído e informações de gateway.
- Se a primeira tentativa falhar, aguarde e tente novamente; a segunda tentativa deverá ter sucesso.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connect.PNG"
    style={{ width: 600}}
  />
</div>

## Verificação Após a Discagem

1. **Verificar a Interface de Rede**

```bash
ifconfig
```

- Procure pela interface `wwan0` com um endereço IP.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/wwan0.PNG"
    style={{ width: 600}}
  />
</div>

2. **Testar Conectividade**

```bash
ping -I wwan0 8.8.8.8
```

- Um ping bem-sucedido confirma que a conexão está ativa.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ping.PNG"
    style={{ width: 600}}
  />
</div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Fornecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
