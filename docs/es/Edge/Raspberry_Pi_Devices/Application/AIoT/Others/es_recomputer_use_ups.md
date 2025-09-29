---
description: Este artículo presenta principalmente cómo usar la función modbus rtu del reComputer R1000 basado en CODESYS

title: Cómo usar UPS para leer voltaje de entrada en reComputer r1000
keywords:
  - Edge Controller
  - reComputer R1000
  - reComputer R1100
  - I2C
image: https://files.seeedstudio.com/wiki/reComputer-R1000/ups/ups_model.webp
slug: /es/recomputer_use_ups
last_update:
  date: 05/21/2025
  author: Jiahao Li
---
## Introducción

Este artículo wiki explica principalmente cómo instalar el módulo UPS en las series reComputer R10 y R11 y usar el UPS para leer el voltaje de entrada.

## Preparación de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
      <th class="table-trnobg">Modelo UPS</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
        <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/-/x-110992004-supercap_ups_ltc3350_module.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

>Nota
>Por favor consulte este [enlace](https://wiki.seeedstudio.com/es/recomputer_r1000_assembly_guide/#assemble-ups-and-poe-module) para instalar el UPS en el R1000.

## Preparación de Software

### Paso 1: Verificar módulo UPS

```
sudo apt update
sudo apt install i2c-tools
sudo i2cdetect -y 6
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/check_ups.png" /></center>

### Paso 2: Descargar repositorio desde GitHub

```
git clone https://github.com/Seeed-Projects/Read-UPS-input-voltage.git
cd Read-UPS-input-voltage
sudo apt update
sudo apt install python3-smbus
```

### Paso 3: Iniciar monitoreo de voltaje

```
python -m venv .venv --system-site-packages && source .venv/bin/activate
python read_voltage.py
```

## Resultado

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/ups/ups_result.png" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
