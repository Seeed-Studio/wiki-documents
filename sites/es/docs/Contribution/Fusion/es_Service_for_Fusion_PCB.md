---
description: Guía de servicio de Seeed Fusion PCB y PCBA
title: Guía de servicio de Seeed Fusion PCB y PCBA
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Service_for_Fusion_PCB
last_update:
  date: 9/16/2026
  author: shuxu hu
createdAt: '2023-02-17'
updatedAt: '2025-09-18'
url: https://wiki.seeedstudio.com/es/Service_for_Fusion_PCB/
---

Esta guía cubre la fabricación de PCB y el ensamblaje de PCB, incluidas capacidades, archivos de producción, realización de pedidos, requisitos de diseño, revisión de ingeniería, pruebas y planificación de la entrega.

## Acerca de Fusion PCB y PCBA

Seeed Fusion proporciona servicios de fabricación de PCB desnudas y servicios llave en mano de PCBA, incluida la adquisición de componentes y el ensamblaje, desde prototipos y pequeños lotes hasta producción en volumen. Puedes pedir solo las placas desnudas, o añadir requisitos de ensamblaje y prueba al mismo proyecto en la [página de pedido de Fusion](https://www.seeedstudio.com/fusion_pcb.html).

### Pasos para realizar pedidos de Fusion PCB y PCBA

1. Abre la [página de pedido de Fusion PCB/PCBA](https://www.seeedstudio.com/fusion_pcb.html).

2. Sube tu archivo comprimido Gerber y selecciona las dimensiones de la placa, la cantidad y las opciones de fabricación.

3. Para PCB desnudas, revisa la cotización y procede al pago. Para ensamblaje, habilita **PCB Assembly**, sube la BOM, introduce la cantidad de PCBA y añade los archivos de ensamblaje o prueba correspondientes.

4. Revisa las coincidencias de componentes y el desglose de precios, luego completa el pago.

Los pedidos de PCB comienzan a partir de 5 piezas, y los pedidos de ensamblaje de PCB comienzan a partir de 1 pieza. El precio depende de las especificaciones y la cantidad de PCB seleccionadas, así como de los requisitos de componentes y ensamblaje para los pedidos de PCBA.

### Requisitos de archivos Gerber

Coloca los archivos Gerber y de taladros en una carpeta y sube un archivo comprimido ZIP o RAR (máximo 20 MB). La siguiente tabla muestra nombres de archivo comunes para las capas de tu diseño.

| Archivo | Ejemplo de nombre de archivo |
| --- | --- |
| Cobre superior / inferior | pcbname.GTL / pcbname.GBL |
| Máscara de soldadura superior / inferior | pcbname.GTS / pcbname.GBS |
| Serigrafía superior / inferior | pcbname.GTO / pcbname.GBO |
| Contorno de la placa | pcbname.GML o pcbname.GKO |
| Archivo de taladros | pcbname.TXT |
| Capas internas de cobre | pcbname.GL2, pcbname.GL3, etc. |

Incluye los archivos internos de cobre correspondientes para placas multicapa. Usa RS-274X para los archivos Gerber y Excellon para los archivos de taladros. Se requiere un contorno completo de la placa, preferiblemente en una capa mecánica separada.

Antes de realizar tu pedido, utiliza el visor Gerber en la [página de pedido](https://www.seeedstudio.com/fusion_pcb.html) para previsualizar tus archivos exportados. Comprueba que el contorno de la placa y las capas coinciden con tu diseño previsto.

### Archivos adicionales para pedidos de PCBA

#### Lista de materiales (BOM)

Los archivos Gerber y una BOM son los archivos básicos utilizados para iniciar una cotización de PCBA y la revisión de archivos. Prepara la BOM utilizando la plantilla de Fusion en formato XLS, XLSX o CSV.

| Campo | Qué incluir |
| --- | --- |
| Designator | Designadores de referencia de componentes, como R1, R2, C1 |
| MPN / Seeed SKU | El número de parte completo del fabricante o el SKU de componente de Seeed |
| Quantity | Cantidad requerida por PCBA; para diseños panelizados, calcula la cantidad para el panel completo |
| Part Link | Enlace opcional a la página del producto o a la hoja de datos |

Incluye solo los componentes que Fusion debe comprar y ensamblar. Los componentes que aparecen en la PCB pero se omiten en la BOM no se compran ni ensamblan por defecto. Consulta la [guía de preparación de la BOM](https://support.seeed.cc/portal/en/kb/articles/how-do-i-prepare-the-bill-of-materials-bom-file-for-seeed-fusion-pcba-orders) para la plantilla y las reglas de formato.

#### Archivos de ensamblaje

Prepara la siguiente información de ensamblaje a partir de la misma revisión de diseño que los archivos Gerber y la BOM.

| Archivo | Propósito principal |
| --- | --- |
| Dibujo de ensamblaje | Muestra la ubicación de los componentes, designadores de referencia, polaridad, orientación y requisitos de inserción de orificios pasantes |
| Archivo CPL / Pick-and-Place | Proporciona el designador de referencia, coordenadas X/Y, rotación y lado de ensamblaje para la colocación SMT |
| Archivos de programación y prueba | Requeridos cuando el pedido incluye programación de firmware o pruebas funcionales; incluye la versión de firmware, pasos de operación, resultados esperados y criterios de aprobación/rechazo |

Para un dibujo de ensamblaje de doble cara, incluye ambos lados. Los ensamblajes solo con orificios pasantes no requieren coordenadas de colocación SMT. Consulta la [guía de dibujo de ensamblaje](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-assembly-drawings-fabrication-files-for-seeed-fusion-pcba-orders) y la [guía de archivo Pick-and-Place](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-pick-and-place-xy-files-for-seeed-fusion-pcba-orders).

### Consejos de diseño de PCB

La panelización agrupa varias placas en un solo panel de fabricación. Fusion PCB admite paneles que contienen copias repetidas del mismo diseño o diseños diferentes.

- **Contornos de placa y ranuras:** Incluye contornos completos de la placa y marca las líneas de corte en V o ranuras fresadas en la capa de contorno (GKO/GML).

- **Diseño de corte en V:** Las líneas de corte en V deben ser rectas y recorrer desde un borde del panel hasta el otro. No pueden detenerse a mitad del panel.

- **Marcados de serigrafía:** Las líneas de serigrafía por sí solas no especifican cortes. Sin instrucciones de corte en la capa de contorno, el panel se suministrará como una sola placa completa.

Consulta las [reglas de panelización de PCB](https://support.seeed.cc/portal/en/kb/articles/what-are-the-pcb-panelization-rules) para ejemplos de diseño y requisitos de pedido.

Mide las dimensiones de la PCB utilizando el rectángulo más pequeño que encierre el contorno completo de la placa. Para un pedido panelizado, utiliza las dimensiones generales del panel.

Después de subir tus archivos, comprueba que las dimensiones detectadas por la página de pedido coinciden con tu diseño. Corrígelas manualmente si la medición automática falta o es inexacta.

## Capacidades de Fusion PCB

#### Tipos de placas y materiales

Fusion admite PCB rígidas, flexibles y con base metálica para diferentes requisitos eléctricos y mecánicos.

| Tipo | Opciones y aplicaciones típicas |
| --- | --- |
| FR-4 | Placas rígidas de uso general; materiales TG130, TG150 y TG170. |
| PCB con base de aluminio | Placas con base metálica para aplicaciones como iluminación LED y electrónica de potencia. |
| PCB flexible | Circuitos flexibles para diseños compactos e interconexiones. |
| PCB rígido-flexible | Secciones rígidas y flexibles integradas, disponibles a través de Advanced PCB. |
| PCB de alta frecuencia | Materiales Rogers RO4003C y RO4350B para diseños RF y de alta frecuencia. |
| PCB con base de cobre | Placas con base metálica para aplicaciones de alta potencia con exigentes necesidades de disipación de calor. |

Utiliza el [servicio Advanced PCB](https://www.seeedstudio.com/fusion-advanced-pcb.html) para HDI, placas de alto número de capas, rígido-flexibles, diseños de alta frecuencia y otros requisitos especializados. La [guía de materiales de PCB](https://www.seeedstudio.com/blog/2026/08/07/seeed-fusion-what-pcb-base-materials-does-seeed-fusion-offer-and-which-one-should-you-choose/) explica las diferencias entre estos materiales.

#### Especificaciones comunes de fabricación FR-4

Las siguientes especificaciones se aplican a placas FR-4. No son una especificación combinada para cada tipo de placa listado arriba.

| Elemento | Especificación |
| --- | --- |
| Dimensiones de la placa | De 10 × 10 mm a 500 × 500 mm; tolerancia dimensional: ±0.2 mm. Los paneles con corte en V tienen restricciones de tamaño adicionales. |
| Grosores de placa de 2 capas | 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.5, 3.0 mm |
| Grosores de placa de 4 capas | 0.8, 1.0, 1.2, 1.6, 2.0, 2.5, 3.0 mm |
| Tolerancia de grosor de placa | ±0.1 mm para placas de ≤1.0 mm de grosor; ±10% para placas más gruesas. |
| Opciones de peso de cobre | 1 oz, 2 oz, 3 oz |
| Ancho / separación mínima de pista | 1 oz: 4/4 mil; 2 oz: 10/10 mil; 3 oz: 15/15 mil. Consulta las condiciones adicionales a continuación. |
| Orificios mecánicos | No metalizados: 0.2–6.3 mm; orificios pasantes metalizados: 0.2–5.8 mm. |
| Orificios castellados | Diámetro mínimo: 0.5 mm |
| Ancho de ranura fresada | No metalizada: ≥0.8 mm; metalizada: ≥0.65 mm |
| Distancia circuito-borde de placa | ≥0.3 mm |
| Colores de máscara de soldadura | Verde, rojo, amarillo, azul, blanco, negro |
| Puente de máscara de soldadura | Con la opción de puente de 0.1 mm: ≥0.10 mm para verde, ≥0.13 mm para otros colores. Sin esta opción: ≥0.32 mm para verde, ≥0.35 mm para otros colores. |
| Serigrafía | Negra sobre máscara de soldadura blanca; blanca sobre los otros colores indicados arriba. Altura mínima de texto: 23 mil; ancho mínimo de trazo: 4 mil. |
| Acabados de superficie | HASL con plomo, HASL sin plomo, ENIG, OSP, oro duro |

Para diseños de bobinas RF, utiliza al menos 6/6 mil de ancho y separación de pista y selecciona la opción de 4/4 mil. Para placas de 4 capas, las pistas de las capas internas deben tener al menos 6 mil de ancho.

Consulta la [Especificación de Fusion PCB](https://support.seeed.cc/portal/en/kb/articles/fusion-pcb-specification) para pilas de capas y más requisitos específicos de proceso.

### Capacidades de Fusion PCBA

Fusion admite adquisición de componentes y ensamblaje de montaje superficial, orificio pasante y mixto para prototipos, pequeños lotes y producción en volumen.

| Elemento | Capacidad |
| --- | --- |
| Métodos de ensamblaje | Montaje superficial (SMT), orificio pasante (THT) y ensamblaje mixto |
| Caras de ensamblaje | Una cara y doble cara |
| Componentes pequeños | Encapsulados hasta 0201 |
| Dispositivos de paso fino | BGA de paso de 0.4 mm y dispositivos con paso de patilla de 0.4 mm |
| Adquisición de componentes | Compra basada en la BOM enviada |
| Soporte de ingeniería | Revisión DFA gratuita con cada pedido de Fusion PCBA |
| Pruebas y programación | Pruebas funcionales, programación de firmware y utillajes de prueba personalizados |

Consulta el [servicio de ensamblaje de Fusion PCB](https://www.seeedstudio.com/pcb-assembly.html) para una visión general del servicio.

### Revisión de ingeniería y soporte de calidad

DFM (Diseño para Fabricación) comprueba si una PCB desnuda se puede fabricar. DFA (Diseño para Ensamblaje) comprueba si los componentes especificados se pueden ensamblar correctamente.

- **Revisión de fabricación de PCB:** Los problemas con el ancho y la separación de pistas, tamaños de orificios o aperturas de máscara de soldadura que puedan afectar a la fabricación se señalan antes de que comience la producción.

- **Revisión DFA gratuita para pedidos de PCBA:** Cada pedido de Fusion PCBA incluye una revisión de los archivos Gerber, la BOM y la información de ensamblaje para comprobar la compatibilidad de huellas, interferencias de componentes y problemas de polaridad u orientación. Esto ayuda a identificar problemas de ensamblaje antes de montar las piezas en la placa.

- **Inspección y pruebas de PCBA:** Las capacidades incluyen AOI para defectos de ensamblaje visibles, inspección por rayos X para uniones de soldadura ocultas e ICT para comprobaciones eléctricas. Las pruebas funcionales utilizan un plan de pruebas proporcionado por el cliente para comprobar las funciones previstas de la placa ensamblada. Los métodos de inspección y prueba utilizados dependen del diseño de la placa y de los requisitos de prueba.

Lee la [guía de revisión DFA](https://www.seeedstudio.com/blog/2026/08/31/seeed-fusion-pcba-dfa-review-guide-what-engineers-check-before-assembly/) y la [guía de control de calidad de PCBA](https://www.seeedstudio.com/blog/2026/08/18/seeed-fusion-pcba-quality-control-flying-probe-aoi-x-ray-ict-and-fct-explained/), o explora los [servicios de prueba Fusion](https://www.seeedstudio.com/fusion-testing-solutions.html).

### Producción y envío

El tiempo de producción de PCB depende de la complejidad de la placa, el número de capas, el material, la cantidad y los procesos de fabricación. El campo **Production Time** en la [página de pedido](https://www.seeedstudio.com/fusion_pcb.html) muestra la estimación para la configuración seleccionada. Para pedidos de PCBA, la disponibilidad de componentes y los requisitos de ensamblaje también afectan al calendario.

El tiempo de producción se cuenta desde la confirmación de los archivos hasta el empaquetado. La revisión de archivos y los retrasos causados por problemas en los archivos quedan fuera de este periodo. A continuación vienen el despacho y el envío; el tiempo de tránsito depende del destino y del método de envío seleccionado. Al planificar la entrega, ten en cuenta cada etapa en lugar de tratar el tiempo de producción como la fecha de llegada.

Las [FAQ sobre plazos de Fusion](https://support.seeed.cc/portal/en/kb/articles/how-long-do-fusion-orders-take) proporcionan más información sobre las etapas del pedido.

### Preguntas frecuentes

**¿Dónde puedo encontrar instrucciones detalladas de pedido?**

La [guía paso a paso para pedir PCB](https://support.seeed.cc/portal/en/kb/articles/how-to-place-a-fusion-pcb-order) cubre la carga de archivos PCB, las opciones de fabricación, el pago y el proceso de compra. Para el ensamblaje, consulta la [guía de pedido de PCBA](https://support.seeed.cc/portal/en/kb/articles/how-do-i-place-a-seeed-fusion-pcb-assembly-pcba-order).

**¿Cómo exporto archivos Gerber desde mi software de diseño?**

Exporta las capas necesarias de cobre, máscara de soldadura, serigrafía y contorno, junto con el archivo de taladros. Las [guías de exportación de Gerber](https://support.seeed.cc/portal/en/kb/fusion/how-to-generate-pcb-gerber-files) proporcionan instrucciones para diferentes herramientas de diseño de PCB.

**¿Puedo solicitar pruebas para PCBAs que ya tengo?**

Sí. Utiliza la opción solo de prueba en [Fusion Testing Solutions](https://www.seeedstudio.com/fusion-testing-solutions.html) y envía los archivos de diseño y de prueba necesarios.

**Mi pedido indica Pending / Awaiting Revised File. ¿Qué debo hacer?**

Revisa la dirección de correo electrónico registrada, incluida la carpeta de spam, para ver la descripción del problema. Modifica y vuelve a cargar los archivos según las instrucciones para que el pedido pueda continuar. Consulta las [FAQ sobre revisión de archivos](https://support.seeed.cc/portal/en/kb/articles/my-fusion-order-status-is-pending-awaiting-revised-file-what-should-i-do) para más detalles.

**¿Qué pasa si mi placa necesita opciones que no aparecen en línea?**

Envía los requisitos de diseño a través del [servicio Advanced PCB](https://www.seeedstudio.com/fusion-advanced-pcb.html) para revisión de ingeniería y cotización.

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
