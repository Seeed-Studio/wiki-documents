---
description: Esta wiki tiene como objetivo promover el desarrollo de una pinza intercambiable utilizando el motor DM-4310-2EC
title: DM_Gripper - Guía de Ensamblaje con Demo
keywords:
  - DM_Gripper
  - DM-4310-2EC
  - 3D Printed Gripper
  - Swappable Gripper
  - Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.webp
slug: /dm_gripper
sku: 100094243,100007512
last_update:
  date: 9/17/2025
  author: Ylson W
---

# DM_Gripper – Guía de Ensamblaje de Código Abierto

El **DM_Gripper** es una **pinza robótica impresa en 3D** de código abierto diseñada alrededor del **motor DM-4310-2EC**. Su diseño modular enfatiza la facilidad de ensamblaje y desensamblaje, permitiendo tanto a aficionados como a desarrolladores de robótica **crear prototipos rápidamente, personalizar y escalar** sus proyectos.  

Totalmente compatible con **actuadores DAMIAO**, el DM_Gripper también proporciona flexibilidad para la integración con otras marcas de actuadores. Su único **sistema de garras intercambiables** permite a los usuarios intercambiar rápidamente garras de diferentes formas, soportando diversas tareas robóticas y casos de uso.  

Todas las partes de la pinza son **completamente imprimibles en 3D** con requisitos mínimos de soporte, haciéndola accesible para makers, investigadores e ingenieros por igual.  

Esta wiki incluye:  

- Descripción general del diseño del mecanismo  
- Lista completa de materiales (BOM)  
- Guía de impresión 3D y configuración  
- Instrucciones de ensamblaje paso a paso  
- Demo y casos de uso prácticos

<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/1-100094243--Seeed-Gripper-01.jpg"/>  
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Gripper-01-p-6561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
</a></div>

## Dimensiones/Rango de Operación

Las dimensiones y el rango de operación se muestran a continuación en milímetros, con altura variable dependiendo de las garras utilizadas.
<div align="center">
  <img width ="720" src="https://files.seeedstudio.com/wiki/robotics/projects/end_effectors/dm_gripper/Specs.png"/>  
</div>

## Mecanismos de Accionamiento

Esta pinza presenta un mecanismo clásico de Doble Manivela y Deslizador, traduciendo el movimiento rotacional a movimiento axial.

- **Demostración de Manivela y Deslizador:**

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/SliderCrank_Mechanism.gif"
       alt="Crank slider mechanism" width="720" />
</div>

- **Demostración de Simulación de Movimiento**

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/gripper_mechanism_motion.mp4"
            type="video/mp4" />
  </video>
</div>

## BOM

#### 🔩 Sujetadores

| Nombre                                                   | Cantidad |
|--------------------------------------------------------|----------|
| Tornillo de Cabeza Redonda Phillips PM3×8                          | 8        |
| Tornillo de Cabeza Hexagonal M3×20                             | 4        |
| Tornillo de Cabeza Hexagonal M3×25                             | 6        |
| Tornillo de Cabeza Hexagonal M3×50                             | 8        |
| Tornillo de Cabeza Hexagonal M3×16                             | 12       |
| Tuerca Hexagonal Autoblocante de Nylon 304 M3 (Espesor-3.9mm × Ancho-5.5mm) | 18 |
| Arandela de Resorte – M3                                     | 4        |
| Arandela Plana – M3×7mm (DE) × 0.5mm (Espesor)          | 8        |

#### ⚙️ Rodamiento

| Nombre                                                                 | Cantidad |
|----------------------------------------------------------------------|----------|
| Rodamiento de Empuje Miniatura F3-8M (DI-3mm × DE-8mm × Espesor-3.5mm)   | 4        |

#### 🛠️ Movimiento Lineal

| Nombre                                       | Cantidad |
|--------------------------------------------|----------|
| Riel Lineal de Acero Inoxidable MGN9, 200 mm   | 1        |
| Carro de Riel Lineal MGN9C (Estándar)      | 2        |

#### 🔌 Actuador

| Nombre            | Cantidad |
|-----------------|----------|
| Motor DM4310-2EC    | 1    |

#### 🧩 Imprimibles Personalizados

| Nombre             | Cantidad |
|------------------|----------|
| **Partes Impresas en 3D** |1 conjunto |

## Guía de Ensamblaje

### Guía de Impresión 3D

- Si tienes material de soporte dedicado o PETG+PLA en tu
  <a href="https://wiki.bambulab.com/en/ams/manual/ams-function-introduction" target="_blank"><b>AMS</b></a>
  y quieres el mejor acabado superficial en las caras soportadas, por favor consulta
  <a href="https://wiki.bambulab.com/en/filament-acc/filament/h2d-pla-and-petg-mutual-support" target="_blank"><b>Esta Wiki</b></a>.  
  *Nota: tu trabajo de impresión puede tomar más tiempo.*

- Si solo tienes un filamento para imprimir, asegúrate de imprimir con las orientaciones correctas y decide si necesitas los siguientes pasos (Activa **AVANZADO** en Bambu Studio).

    :::warning
    No cambies la distancia Top Z si estás usando PETG o ABS. Manténlas como predeterminadas. Solo cambia esto si usas PLA.
    :::

  - Paso 1: Diseño de impresión con soportes mínimos requeridos  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/PrintLayout.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - Paso 2: Las configuraciones Scarf proporcionan un mejor acabado superficial como se marca en los Rectángulos Verdes.  
    <br/>
    <div align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/Scarf_Settings.png"
        alt="Crank slider mechanism" width="720" />
    </div>

    <br/>

  - Paso 3: Mis Configuraciones de Impresión: altura de capa 0.2mm, densidad de relleno 25%, Estilo – Panal 3D.  
    <p align="center">
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps1.png" alt="ps1" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps2.png" alt="ps2" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps3.png" alt="ps3" height="500" hspace="5"/>
    <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/ps4.png" alt="ps4" height="500" hspace="5"/>
    </p>

### Guía de Ensamblaje Paso a Paso

- Paso 1: Fijar los Soportes de Garra a los deslizadores MGN9C con ocho tornillos de cabeza de hongo M3×8  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S1.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 2: Apilar los rodamientos, rotores y enlaces (estilo "hamburguesa")  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S2.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 3: Colocar ocho arandelas M7 arriba y abajo de las ranuras  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S3.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 4: Colocar cuatro tuercas arriba y abajo de las arandelas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S4.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 5: Atornillar cuatro pares de tornillos M3×20 y arandelas de resorte a las tuercas (usar alicates si es necesario)  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S5.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 6: Colocar la Base y el Actuador en posición; los patrones en la placa del rotor y el actuador deben alinearse  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S6.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 7: Atornillar seis tornillos M3×16 para asegurar la placa del rotor al actuador  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S7.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 8: Empujar la base de la garra al rango máximo para los siguientes pasos  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S8.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 9: Adjuntar el soporte de leva a la parte inferior  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S9.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 10: Fijar el soporte de leva con cuatro pares de tornillos M3×25 y tuercas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S10.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 11: Fijar la base con seis tornillos M3×16 (Sacar el riel para esta etapa y deslizarlo de vuelta después)

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S11.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 12: Usar dos pares de tornillos M3×50 y tuercas para bloquear el riel en la base  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S12.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 13: Deslizar el prensador de riel y asegurar con dos pares de tornillos M3×25 y tuercas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S13.mp4"
            type="video/mp4" />
  </video>
</div>

- Paso 14: Colocar las garras en los soportes de garra, y asegurarlas con seis pares de tornillos M3×50 y tuercas  

<div align="center">
  <video controls width="720">
    <source src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/videos/S14.mp4"
            type="video/mp4" />
  </video>
</div>

## Demos y Archivos CAD

- Sigue la [**Wiki de Actuadores Damiao**](https://wiki.seeedstudio.com/es/damiao_series/) para configurar todo si no lo has hecho aún.
- Sigue el [**Demo del Controlador de Torque**](https://github.com/tianrking/DM_Gripper/tree/main) (**muchas gracias a tianrking**) para hacer que la pinza se mueva con una GUI genial.  

<div align="center">
  <img src="https://github.com/YlsonDdb/DM_Gripper/raw/main/docs/pics/DM_GripperController.gif"
       alt="Gripper Controller Demo" width="720" />
</div>

- Los recursos CAD: archivos STEP editables y STLs están disponibles [**aquí**](https://github.com/YlsonDdb/DM_Gripper).
