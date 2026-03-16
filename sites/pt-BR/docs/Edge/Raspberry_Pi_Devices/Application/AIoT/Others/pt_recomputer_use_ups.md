---
description: Este artigo apresenta principalmente como usar a função modbus rtu do reComputer R1000 com base no CODESYS
title: Como usar o UPS para ler a tensão de entrada no reComputer r1000
keywords:
  - Controlador de Borda
  - reComputer R1000
  - reComputer R1100
  - I2C
image: https://files.seeedstudio.com/wiki/reComputer-R1000/ups/ups_model.webp
slug: /recomputer_use_ups
last_update:
  date: 05/21/2025
  author: Jiahao Li
createdAt: '2025-05-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_use_ups/
---
## Introdução

Este artigo da wiki explica principalmente como instalar o módulo UPS nas séries reComputer R10 e R11 e usar o UPS para ler a tensão de entrada.

## Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
      <th class="table-trnobg">Modelo de UPS</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
        <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/-/x-110992004-supercap_ups_ltc3350_module.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

>Note
>Consulte este [link](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module) para instalar o UPS no R1000.

## Preparação de Software

### Etapa 1: Verificar o módulo UPS

```
sudo apt update
sudo apt install i2c-tools
sudo i2cdetect -y 6
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/check_ups.png" /></center>

### Etapa 2: Baixar o repositório do GitHub

```
git clone https://github.com/Seeed-Projects/Read-UPS-input-voltage.git
cd Read-UPS-input-voltage
sudo apt update
sudo apt install python3-smbus
```

### Etapa 3: Iniciar o monitoramento da tensão

```
python -m venv .venv --system-site-packages && source .venv/bin/activate
python read_voltage.py
```

## Resultado

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/ups_result.png" /></center>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
