---
description: Guía de Seeed Fusion para preparar requisitos de pruebas funcionales de PCBA
title: Guía de Seeed Fusion para preparar requisitos de pruebas funcionales de PCBA
keywords:
  - Seeed_Fusion
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /service_for_fusion_pcba_functional_test
last_update:
  date: 10/21/2026
  author: Xi Lin
---

Las pruebas funcionales de PCBA utilizan operaciones y mediciones definidas para comprobar si una placa ensamblada funciona según lo previsto. Los requisitos de prueba describen qué probar, las condiciones y los procedimientos, y los criterios de aprobación/rechazo. Proporcionan al equipo de fabricación la información necesaria para llevar a cabo las pruebas.

Esta guía está dirigida a los clientes que solicitan pruebas funcionales de PCBA a Seeed Fusion. Las pruebas y métodos específicos se confirman en función del diseño del producto y de los requisitos del proyecto.

Esta guía se centra en redactar los requisitos de prueba. Para conocer los archivos de diseño y la información del producto necesarios para solicitar pruebas o un útil de prueba personalizado, consulta la [Guía de soluciones de pruebas de PCBA de Seeed Fusion](https://wiki.seeedstudio.com/es/service_for_fusion_pcba_testing_solutions/) y los recursos de servicio enlazados a continuación.

## Qué cubren las pruebas funcionales

Las pruebas funcionales verifican las funciones previstas del producto. Pueden abarcar fuentes de alimentación, interfaces de comunicación, botones, indicadores, sensores y audio. El plan de pruebas del proyecto define el alcance.

La inspección del ensamblaje y las pruebas funcionales examinan distintos aspectos de la placa. El AOI comprueba defectos de ensamblaje visibles, la inspección por rayos X revela uniones de soldadura ocultas y las pruebas en circuito (ICT) realizan comprobaciones eléctricas. Las pruebas funcionales verifican si la placa realiza las funciones especificadas en el plan de pruebas. Los métodos utilizados dependen del diseño de la placa y de los requisitos de prueba.

Los resultados de las pruebas se aplican a los elementos y criterios definidos en el plan. Por ejemplo, que un ordenador detecte un dispositivo USB puede satisfacer una prueba de detección USB. El plan debe especificar cualquier otra función USB que deba probarse.

## Qué incluir en cada prueba

Cada prueba describe qué se va a probar, cómo realizarla y qué se considera un resultado satisfactorio, junto con las condiciones de prueba requeridas.

| Información | Qué especificar |
| --- | --- |
| Qué probar | La función, interfaz o señal a comprobar, como una línea de alimentación, un GPIO específico o una interfaz USB. |
| Condiciones de prueba | La fuente de alimentación, conexiones, firmware y entorno de software necesarios para la prueba. |
| Procedimiento de prueba | Las acciones o mediciones a realizar y su secuencia. |
| Resultados esperados | El comportamiento observable, la información devuelta o los resultados de medición esperados tras una acción. |
| Criterios de aprobación/rechazo | Las condiciones utilizadas para determinar si se aprueba o se rechaza, como un rango numérico permitido, una dirección de dispositivo especificada o un nivel lógico esperado. |

Para pruebas numéricas, como mediciones de tensión, los criterios incluyen el valor objetivo y el rango permitido. Para la detección de dispositivos, botones o indicadores, especifica el resultado de detección esperado o el estado que debe seguir a una acción. Descripciones generales como "funcionando normalmente" necesitan criterios específicos que un operador de pruebas o un programa puedan evaluar.

## Entorno de prueba y conexiones

La descripción del entorno de prueba identifica el equipo, el software y las conexiones necesarios para realizar las pruebas. La siguiente tabla enumera información que puede ser relevante; los detalles dependen de los elementos de prueba.

| Información | Qué especificar |
| --- | --- |
| Condiciones de alimentación | La entrada de alimentación, tensión y los pasos de prueba correspondientes. |
| Interfaces y puntos de prueba | Las interfaces, pines o puntos de prueba utilizados y cómo se conectan al equipo de prueba. |
| Equipo de prueba | Modelos o especificaciones de los instrumentos de medición, programadores y otros equipos auxiliares. |
| Entorno de software | El sistema operativo, el software de prueba y la configuración relacionada. |
| Útil de prueba | Si se utiliza un útil, cómo posicionar la placa, dónde conectarla y cómo operarla. |

Los detalles de conexión deben coincidir con las pruebas individuales. Las mediciones de tensión hacen referencia a puntos de prueba específicos, las pruebas de comunicación identifican las interfaces y señales, y las instrucciones de flasheo de firmware identifican la interfaz de programación y las conexiones. Los diagramas pueden ayudar a mostrar estas ubicaciones y conexiones.

Un útil de prueba sujeta la placa en su lugar y proporciona conexiones repetibles a los puntos de prueba o interfaces requeridos. El uso de un útil y su diseño dependen de la placa y del plan de pruebas.

## Flasheo de firmware y secuencia de prueba

Para proyectos que implican flasheo de firmware, incluye los archivos de firmware, versiones, fechas de desarrollo y revisiones de hardware aplicables. Especifica también el programador, las conexiones, el software de flasheo y los pasos de operación. Si se utilizan varios archivos de firmware en el mismo proceso de prueba, identifica el propósito de cada archivo y cuándo se utiliza.

El firmware de prueba admite comprobaciones funcionales durante la producción. El firmware de envío es el firmware que ejecuta el producto tras la entrega. Si estos difieren, el procedimiento debe especificar cuándo utilizar el firmware de prueba y cuándo flashear el firmware de envío.

Organiza los pasos de prueba en el orden en que se realizarán, con cada acción emparejada con su resultado esperado. Por ejemplo, una prueba de alimentación puede describir la alimentación de la placa, la medición de un punto de prueba designado y la comparación de la lectura con el rango permitido. Para los pasos de flasheo, especifica el archivo y cómo confirmar que el flasheo se ha realizado correctamente.

## Ejemplo de requisitos de prueba y recursos relacionados

Las pruebas seleccionadas que se muestran a continuación proceden de la referencia oficial de pruebas de Seeed para la **reSpeaker Flex XVF3800 Core Board with XIAO**. Muestran cómo los elementos de prueba, los métodos y los criterios de aprobación se relacionan entre sí. Los puntos de prueba, valores y direcciones de dispositivo solo se aplican a este proyecto de referencia.

| Elemento de prueba | Método de prueba | Criterios de aprobación |
| --- | --- | --- |
| Tensión VDDIO | Medir el punto de prueba TP7 utilizando un ADC. | 3,3 V ±5 %. |
| Conexión USB Type-C | Probar el conector en ambas orientaciones. | El dispositivo XMOS es reconocido en ambas orientaciones. |
| Detección de dispositivo I²C de XIAO | Escanear el bus I²C. | El códec se detecta en la dirección 0x18. |
| Botón de reinicio RST | Pulsar el botón Reset. | XMOS se reinicia. |

Esta tabla contiene elementos de prueba seleccionados. La ejecución de las pruebas también requiere detalles de alimentación y conexión, el firmware y entorno de software relevantes, instrucciones de operación detalladas y orientación sobre cómo interpretar los resultados.

La referencia completa explica cómo los requisitos de prueba se asignan a las conexiones de la placa adaptadora y a la ejecución del software. Consulta [Open-Source Modular PCBA Testing: A Complete Guide from Hardware to Test Workflow](https://www.seeedstudio.com/blog/2026/10/08/seeed-fusion-open-source-modular-pcba-testing-a-complete-guide-from-hardware-to-test-workflow/).

Para usos de útiles de prueba, aplicaciones adecuadas y documentos de solicitud, consulta [What Is a PCBA Test Fixture? How It Works and When You Need One](https://www.seeedstudio.com/blog/2026/09/10/seeed-fusion-what-is-a-pcba-test-fixture-how-it-works-and-when-you-need-one/). Los requisitos de archivos para fabricación y ensamblaje de PCB se tratan en la [Guía de servicio de PCB y PCBA de Seeed Fusion](https://wiki.seeedstudio.com/es/Service_for_Fusion_PCB/).

Para servicios de pruebas funcionales, flasheo de firmware y útiles de prueba personalizados, visita [Fusion Testing Solutions](https://www.seeedstudio.com/fusion-testing-solutions.html), o contacta con [fusion@seeed.io](mailto:fusion@seeed.io) para comentar los requisitos de tu proyecto.

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>