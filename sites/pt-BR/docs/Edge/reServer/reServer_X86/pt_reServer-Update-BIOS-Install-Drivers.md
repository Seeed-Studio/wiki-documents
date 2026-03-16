---
description: reServer X86
title: Atualizando a BIOS e Instalando Drivers
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reServer-Update-BIOS-Install-Drivers
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reServer-Update-BIOS-Install-Drivers/
---

<!-- ---
name: Upgrading BIOS and Installing Drivers
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Notas Importantes</p>
    <p style={{color: '#000000', fontSize: 14}}> Ele <b>apaga as configurações antigas da BIOS</b>, então você precisará <b>reativar</b> o seu Windows (se estiver usando Windows) novamente (apaga a chave de ativação, precisa de Internet para ativar novamente). <br /></p>
  </div>
</div>

## Atualizando a BIOS

Recomenda-se manter o firmware da BIOS do seu reServer atualizado para obter o melhor desempenho com todas as correções de bugs. Siga os passos abaixo para atualizar a BIOS

### Firmware mais recente da BIOS

**[ODYSSEY-TGL-A_v2.0a 7/7/2022 16:00:00](https://files.seeedstudio.com/wiki/reServer/ODYSSEY-TGL-A_v2.0a.zip)**

- **SHA256:** 02CC2C24E615EE2665CCCF79257709433D69C5B80326FB6DB12D0341DAC2E5F5

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-main.png" /></div>

### Passos para Atualizar

- **Passo 1.** Formate o pendrive como FAT32

- **Passo 2.** Extraia **ODYSSEY-TGL-A_v1.7a.zip**

- **Passo 3.** Copie os 3 arquivos incluídos dentro de ODYSSEY-TGL-A_v1.1a para a raiz do pendrive

- **Passo 4.** Desligue o reServer se ele já estiver LIGADO

- **Passo 5.** Conecte o pendrive ao reServer

- **Passo 6.** Ligue o reServer e, em seguida, pressione a tecla **DELETE** para entrar na configuração da BIOS

- **Passo 7.** Escolha **Save & Exit -> Boot Override -> UEFI:Built-in EFI shell**, depois **ENTER**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-EFI-start.png" /></div>

- **Passo 8.** A placa entrará no ambiente shell (apenas espere, não faça nada)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-2.jpg" /></div>

- **Passo 9.** Digite **fs0:**

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-3.jpg" /></div>

- **Passo 10.** Digite **dir**, e certifique-se de que o arquivo está correto. Se não estiver correto, tente digitar **fs1:** ou **fs2:** ou **fs3:** e depois **dir** para listar os arquivos dentro

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/dir-1.png" /></div>

- **Passo 11.** Digite **update.nsh** para gravar a BIOS

<div align="center"><img width={260} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update.nsh.png" /></div>

- **Passo 12.** Se a atualização da BIOS for bem-sucedida, você verá a seguinte mensagem

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-6.jpg" /></div>

- **Passo 13.** Pressione o botão de energia para desligar a placa

- **Passo 14.** Desconecte a energia DC e a bateria CMOS da placa

- **Passo 15.** Espere alguns minutos

- **Passo 16.** Conecte novamente a energia DC e a bateria CMOS à placa

- **Passo 17.** Finalmente, ligue a placa pressionando o botão de energia novamente

- **Passo 18.** Aguarde pacientemente e **NÃO** desconecte a energia (ou o hardware) para não corromper o processo de atualização. O processo levará de 6 a 8 minutos, aproveite para uma pausa para o café!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atenção</p>
    <p style={{color: '#000000', fontSize: 14}}>A primeira inicialização após a atualização da BIOS é <b>relativamente longa</b>, por favor seja paciente e espere; o sistema operacional instalado será iniciado eventualmente. Isso levará <b>cerca de 6 a 8 minutos</b>.</p>
  </div>
</div>

## Instalando Drivers

Se você estiver usando Windows no reServer, é recomendado instalar os drivers relevantes para melhor funcionalidade do sistema.

Os drivers incluem:

- Driver de Áudio Realtek High Definition
- Intel® Chipset Device Software
- Intel® Graphics Driver
- Driver Intel® HID Event Filter
- Intel® Converged Security and Management Engine Driver
- Intel® Serial IO Host Controller Driver
- Driver de WiFi
- Driver de Ethernet
- Driver de Bluetooth

Siga os passos abaixo para instalar os drivers acima

- **Passo 1.** Baixe [este arquivo](https://files.seeedstudio.com/wiki/reServer/reServer-Drivers.zip) e extraia o arquivo **reServer-drivers.zip**

- **Passo 2.** Prossiga para os passos abaixo

### Driver de Áudio Realtek High Definition

- **Passo 1.** Extraia **audio_realtek_6.0.9057.1_w1064.zip**

- **Passo 2.** Abra **audio_realtek_6.0.9057.1_w1064**

- **Passo 3.** Clique duas vezes em **Setup.exe**

### Intel® Chipset Device Software

- **Passo 1.** Extraia **chipset-10.1.18460.8229-public-mup.zip**

- **Passo 2.** Abra **1_chipset-10.1.18460.8229-public-mup**

- **Passo 3.** Clique duas vezes em **SetupChipset.exe**

### Intel® Graphics Driver

- **Passo 1.** Extraia **Graphics Driver.zip**

- **Passo 2.** Clique duas vezes em **igfx_win_101.1069.exe**

### Intel® HID Event Filter Driver

- **Passo 1.** Extraia **Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified.zip**

- **Passo 2.** Navegue até `Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified > Installer`

- **Passo 3.** Clique duas vezes em **Setup.exe**

### Intel® Converged Security and Management Engine Driver

- **Passo 1.** Extraia **intel_(r)_csme_15.0.0.1318v3_b0_cons.zip**

- **Passo 2.** Navegue até `4_intel_(r)_csme_15.0.0.1318v3_b0_cons > intel_(r)_csme_15.0.0.1318v3_b0_cons > MEI-Only Installer MSI`

- **Passo 3.** Clique duas vezes em **MEISetup.exe**

### Intel® Serial IO Host Controller Driver

- **Passo 1.** Extraia **SerialIO-Win10-30.100.2129.8.zip**

- **Passo 2.** Clique duas vezes em **SetupSerialIO.exe**

### Driver de WiFi

- **Passo 1.** Extraia **WiFi-22.90.0-Driver64-Win10-Win11.zip**

- **Passo 2.** Clique duas vezes em **WiFi-22.90.0-Driver64-Win10-Win11.exe**

### Driver de Ethernet

- **Passo 1.** Extraia **Wired_driver_26.6_x64.zip**

- **Passo 2.** Clique duas vezes em **Wired_driver_26.6_x64.exe**

### Driver de Bluetooth

- **Passo 1.** Extraia **Wireless Bluetooth.zip**

- **Passo 2.** Clique duas vezes em **BT-22.90.2-32-64UWD-Win10-Win11.exe**

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
