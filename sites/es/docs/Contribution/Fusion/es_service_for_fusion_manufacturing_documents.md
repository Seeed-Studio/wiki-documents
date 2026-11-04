---
description: Guía de Seeed Fusion para preparar documentos de fabricación
title: Guía de Seeed Fusion para preparar documentos de fabricación
keywords:
  - Seeed_Fusion
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /service_for_fusion_manufacturing_documents
last_update:
  date: 10/21/2026
  author: Xi Lin
---

Los documentos de fabricación describen los materiales, los planos, el montaje y los requisitos de prueba de un producto. Respaldan las cotizaciones, la adquisición, la producción y la inspección. Esta guía está pensada para proyectos basados en diseños del cliente. Explica el propósito de los documentos de fabricación más comunes y cómo se relacionan entre sí.

Los documentos necesarios dependen del trabajo de fabricación incluido en el proyecto. No todos los proyectos necesitan todos los documentos que se enumeran a continuación.

| Trabajo incluido en el proyecto | Sección correspondiente |
| --- | --- |
| Fabricación de PCB, compra de componentes y montaje | Documentos de PCB y PCBA |
| Carcasas y otras piezas mecánicas, o montaje del producto | Piezas mecánicas y montaje del producto |
| Embalaje personalizado e insertos impresos | Documentos de embalaje |
| Flasheo de firmware y pruebas funcionales | Documentos de firmware y pruebas |
| Comprobación de información entre varios archivos | Coherencia de documentos e información de versión |

Para logotipos, embalaje u otras personalizaciones ligeras basadas en productos estándar de Seeed, consulta la [Guía del servicio de personalización ligera de Seeed Fusion](https://wiki.seeedstudio.com/es/service_for_fusion_light_customization/). Abre la página del producto correspondiente desde la [página del servicio de Light Customization](https://www.seeedstudio.com/fusion_branding_firmware.html) para comprobar los documentos necesarios para las opciones seleccionadas.

## Documentos de PCB y PCBA

Los documentos de fabricación de PCB definen el diseño de la placa y los requisitos de fabricación. Los proyectos de PCBA también implican la compra de componentes y el montaje, por lo que necesitan la información correspondiente de componentes y montaje.

| Documento | Propósito | Información principal |
| --- | --- | --- |
| Archivos Gerber y de taladrado | Describen las capas de la PCB, el contorno de la placa y la información de taladrado para la fabricación. | Cobre, máscara de soldadura, serigrafía, contorno de la placa, datos de taladrado y capas internas relevantes cuando corresponda. |
| Especificaciones de fabricación de PCB | Definen los requisitos de material y proceso más allá del diseño de la placa. | Material de la placa, apilamiento, grosor de la placa, grosor de cobre, acabado superficial, máscara de soldadura y requisitos aplicables de impedancia y tolerancia. |
| Lista de materiales (BOM) | Identifica los componentes que se van a comprar y montar. | Designadores de referencia, números de parte completos del fabricante o SKUs de Seeed, cantidades y enlaces opcionales de componentes. |
| Plano de montaje | Ayuda al personal de producción e inspección a identificar la ubicación de los componentes, su orientación y polaridad. | Designadores de referencia, ubicaciones de componentes, marcas de polaridad y orientación. Incluir ambos lados para montaje a doble cara. |
| Archivo CPL / Pick-and-Place | Proporciona los datos de colocación de componentes SMT para programar el equipo de colocación. | Designadores de referencia, coordenadas X/Y, rotación y lado de montaje. |
| Esquemáticos | Respaldan el análisis de circuitos, la depuración y la resolución de problemas. | Conexiones del circuito, versión del documento y fecha. |

Los archivos Gerber y una BOM son los documentos básicos para una cotización de PCBA de Fusion y la revisión de archivos. Los planos de montaje proporcionan una referencia visual para el montaje y la inspección, y los archivos CPL proporcionan datos de posición para el equipo de colocación. Los requisitos de envío se confirman según el método de montaje y el proyecto.

Para formatos de archivo, plantillas y reglas de formato de la BOM, e instrucciones de exportación de planos, consulta la [Guía del servicio de PCB y PCBA de Seeed Fusion](https://wiki.seeedstudio.com/es/Service_for_Fusion_PCB/) y las guías enlazadas.

## Piezas mecánicas y montaje del producto

Cuando un proyecto incluye una carcasa u otras piezas mecánicas, los documentos describen las dimensiones, materiales, apariencia y requisitos de calidad de las piezas. Para el montaje del producto, también explican cómo encajan las piezas entre sí.

| Documento | Propósito e información principal |
| --- | --- |
| Descripción de la aplicación | Describe el uso del producto y las condiciones de funcionamiento para que el equipo de fabricación pueda comprender los requisitos mecánicos. |
| BOM mecánica | Enumera las piezas mecánicas, la información de materiales y las cantidades. |
| Planos 3D | Muestran la geometría de las piezas y las relaciones espaciales para comprobar cómo encajan los componentes entre sí. |
| Planos 2D | Especifican las dimensiones de las piezas y las tolerancias correspondientes. |
| Documento CMF | Especifica los requisitos de color, material y acabado para las piezas mecánicas. |
| Requisitos de calidad | Definen los requisitos de inspección y aceptación para las piezas mecánicas. |
| Planos de montaje o de vista explosionada | Muestran cómo encajan las piezas entre sí. Junto con la BOM, estos planos describen el montaje completo del producto. |

Por ejemplo, un plano de la carcasa describe la propia carcasa. Un plano de montaje muestra cómo la carcasa encaja con la placa, los cables y otras piezas.

## Documentos de embalaje

Para proyectos que implican embalaje personalizado, los documentos describen los diseños de embalaje, los materiales, los métodos de empaquetado y los requisitos de etiquetado.

| Documento | Propósito e información principal |
| --- | --- |
| Archivos de diseño de embalaje | Especifican los diseños y materiales para cajas de embalaje y otros materiales de embalaje personalizados. |
| Instrucciones de empaquetado | Explican cómo embalar el producto y colocarlo en las cajas de envío. |
| Archivos de insertos impresos | Proporcionan diseños y requisitos de material para elementos impresos como guías de inicio rápido y manuales. |
| Requisitos de cajas de envío y etiquetas | Especifican los diseños de las cajas, los requisitos de empaquetado y la información de las etiquetas de las cajas. |

Si el proyecto implica pallets, desecantes u otros requisitos especiales de embalaje, incluye esos detalles en los documentos de embalaje.

## Documentos de firmware y pruebas

Cuando un proyecto de fabricación incluye flasheo de firmware o pruebas funcionales, los documentos explican qué archivos se deben flashear, cómo llevar a cabo el trabajo y cómo evaluar los resultados de las pruebas.

| Documento | Propósito e información principal |
| --- | --- |
| Archivos de firmware | Proporcionan los archivos que se van a flashear, con sus versiones, fechas y revisiones de hardware aplicables. |
| Instrucciones de flasheo | Especifican el modelo de programador, las conexiones, el software de flasheo y los pasos de operación. |
| Descripción del entorno de prueba | Identifica el hardware, el sistema operativo, el software de prueba y los útiles necesarios para las pruebas. |
| Instrucciones de prueba | Describen los pasos de prueba y los procedimientos de operación. |
| Resultados esperados y criterios de aprobación/rechazo | Especifican el resultado esperado para cada prueba y las condiciones utilizadas para determinar si se aprueba o se rechaza. |

El firmware de prueba respalda las verificaciones durante la producción. El firmware de envío se utiliza para hacer funcionar el producto después de la entrega. Si estos difieren, los documentos deben identificar cada versión y su propósito para que no se mezclen durante el flasheo, las pruebas o las verificaciones previas al envío.

Para obtener una guía detallada sobre cómo redactar requisitos de prueba, consulta la [Guía de Seeed Fusion para preparar requisitos de prueba funcional de PCBA](https://wiki.seeedstudio.com/es/service_for_fusion_pcba_functional_test/).

## Coherencia de documentos e información de versión

La información de materiales, los planos y los datos de montaje para el mismo proyecto deben coincidir. Para proyectos de PCB y PCBA, las principales relaciones se enumeran a continuación.

| Elementos a comparar | Qué comprobar |
| --- | --- |
| Números de parte y encapsulados | Los encapsulados de los componentes asociados con los números de parte de la BOM coinciden con las huellas de la PCB. |
| Cantidades y designadores de referencia | Las cantidades de componentes en la BOM coinciden con el número de designadores de referencia correspondientes. Las cantidades utilizan la misma base en todo momento, ya sea por placa o por panel. |
| Planos de montaje y archivos CPL | Los designadores de referencia, lados de montaje, posiciones y orientaciones coinciden en todos los archivos. La polaridad está claramente marcada en el plano de montaje. |

Los archivos Gerber, la BOM, los planos de montaje y los archivos CPL deben corresponder a la misma revisión de diseño. La información de versión y fecha en los esquemáticos y archivos de firmware identifica los documentos utilizados en producción y respalda la trazabilidad. Los archivos de firmware también identifican la revisión de hardware aplicable para que el hardware y el firmware se puedan emparejar correctamente.

Para requisitos de envío específicos del proyecto, consulta la página de pedido del servicio correspondiente o contacta con [fusion@seeed.io](mailto:fusion@seeed.io).

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>