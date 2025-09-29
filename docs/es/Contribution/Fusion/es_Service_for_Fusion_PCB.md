---
description: Servicio para Fusion PCB
title: Servicio para Fusion PCB
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Service_for_Fusion_PCB
last_update:
  date: 1/13/2023
  author: shuxu hu
---

Por favor lee esta página antes de usar el [servicio de PCB fusion](https://www.seeedstudio.com/fusion_pcb.html). **El precio se calculará basado en tus opciones**.

## Acerca del servicio de PCB

Como aficionados nosotros mismos, organizamos el poder de fabricación local, panelizamos diseños, reducimos el costo de envío y aseguramos la calidad. Será una fuente para sostener nuestro estudio junto con otros servicios que proporcionamos.

### Pasos para Pedido de Fusion PCB

1. Ve a la página de pedido de Fusion PCB: [https://www.seeedstudio.com/fusion_pcb.html](https://www.seeedstudio.com/fusion_pcb.html)

2. Sube el archivo Gerber y selecciona los parámetros.

3. Finaliza la compra y paga el pedido.

Si el archivo y el diseño cumplen los requisitos, serán procesados y enviados en 4-6 días (Excluyendo el Festival Chino).

### Requisitos del archivo Gerber

**Se necesitan las siguientes capas:**

- Capa superior: pcbname.GTL
- Capa inferior: pcbname.GBL
- Máscara de soldadura superior: pcbname.GTS
- Máscara de soldadura inferior pcbname.GBS
- Serigrafía superior: pcbname.GTO
- Serigrafía inferior pcbname.GBO
- Perforación NC: pcbname.TXT
- El contorno de la placa debe estar incluido al menos en una capa.

- El archivo Gerber debe estar en formato RS-274x.

### Consejos de diseño de PCB

DISEÑO ÚNICO, SIN PANELIZACIÓN

**Nota:**

- Tu archivo Gerber debe incluir solo un diseño.
- Líneas de perforación y ranuras largas no pueden ser aceptadas
- Ranura mínima 1mm*1mm
- DRC compatible como archivo de reglas adjunto
- El tamaño de PCB es el rectángulo más pequeño que puede acomodar la PCB

**Opciones de cantidad disponibles:** 10pcs, 50pcs, 100pcs y más.

LA CANTIDAD MÍNIMA CON LA QUE PODEMOS COMENZAR AQUÍ ES 5pcs.

**Nota:** Si quieres pedir más de 10pcs, por favor verifica el precio para diferentes opciones y elige la más económica.

**Ejemplo:**
Para tamaño de PCB (50mm X 100mm), la opción 4 x 10pcs cuesta más que la opción 1 x 50pcs.

### Capacidades de Fusion PCB

- Múltiples capas: Hasta 16 capas

- Material de PCB: FR-4

- Colores disponibles:

- Máscara de soldadura: Verde, Rojo, Amarillo, Azul, Blanco, Negro

- Serigrafía: Blanco, Negro (Solo para máscara de soldadura blanca)

- Fuente: El mínimo es 6 mil de ancho de línea y 32 mil de altura, un poco más grande será mejor.

**Tamaño máximo disponible:** 50mm X 50mm, 50mm X 100mm, 50mm X 150mm, 50mm X 200mm, 100mm X 100mm, 100mm X 150mm, 100mm X 200mm, 150mm X 150mm, 150mm X 200mm, 200mm X 200mm

**Nota:** Las dimensiones de la PCB (tanto largo como ancho) deben estar dentro de la opción de tamaño de PCB

**Ejemplo:**

Diseño de PCB: 30mm X 60mm   Opción: 50mm X 50mm (No)   50mm X 100mm (Sí)

Diseño de PCB: 101mm X 40mm   Opción: 100mm X 50mm (No)   150mm X 50mm (Sí)

Diseño de PCB: 70mm X 70mm   Opción: 50mm X 150mm (No)   100mm X 100mm (Sí)

**Grosor de placa disponible:** 0.8mm, 1.0mm, 1.2mm, 1.6mm, 2.0mm

(Los costos de 0.8mm, 1.0mm, 1.2mm y 1.6mm son iguales)

**Tolerancia de grosor:** (t≥0.8mm) +/- 10%

**Tolerancia de grosor:** (t&lt;0.8mm) +/- 10%

**Grosor de capa de aislamiento:** 0.075mm--5.00mm

**Línea mínima:** 6mil

**Espacio mínimo:** 6mil

**Grosor de cobre de capa externa:** 1oz (35um)

**Grosor de cobre de capa interna:** 17um—100um

**Agujero de perforación (Mecánico):** 0.3mm—6.35mm

**Agujero terminado (Mecánico):** 0.3mm—6.30mm

**Tolerancia de diámetro (Mecánico):** 0.08mm

**Registro (Mecánico):** 0.09mm

**Relación de aspecto:** 8:1

**Tipo de máscara de soldadura:** Tinta fotosensible

**Ancho mínimo de máscara de soldadura SMT:** 0.1mm

**Separación mínima de máscara de soldadura:** 0.1mm

**Diámetro de agujero tapón:** 0.25—0.60mm

**Acabado superficial:** HASL, HASL (Libre de plomo) +\$5, ENIG+\$10.

**E-TEST:** 50% e-test, 100% e-test +\$10
50% e-test (La PCB probada tendrá una marca en el borde de la PCB).
100% e-test opcional por \$10 extra

**Regla de diseño Eagle:** [http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification](http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>