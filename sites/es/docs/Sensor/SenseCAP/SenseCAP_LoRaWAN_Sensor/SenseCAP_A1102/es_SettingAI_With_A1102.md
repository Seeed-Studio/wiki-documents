---
description: Set_AI_With_A1102
title: Configuración de Modelos de IA en SenseCAP A1102 Usando la APP SenseCraft
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /es/setting_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 12/31/2025
  author: Twelve
---

# Configuración de Modelos de IA en SenseCAP A1102 Usando la APP SenseCraft

El SenseCAP A1102 es un dispositivo sensor potente que combina capacidades avanzadas de IA con facilidad de implementación. Esta guía te llevará a través del despliegue de modelos de IA en el A1102 usando la app **SenseCraft**, ofreciendo instrucciones paso a paso para el emparejamiento, configuración y pruebas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" style={{width:800, height:'auto'}}/></div>

## **Introducción al SenseCAP A1102**

### **¿Qué es el SenseCAP A1102?**

El SenseCAP A1102 es un sensor de cámara inteligente diseñado para aplicaciones de IA en el borde. Equipado con 8GB de memoria, puede:

- Desplegar modelos de IA personalizados.
- Guardar automáticamente imágenes reconocidas.
- Habilitar reconocimiento en tiempo real con alta precisión.

### **Requisitos**

Antes de comenzar, asegúrate de tener:

- El dispositivo SenseCAP A1102.
- La app **SenseCraft AI** instalada en tu smartphone.
- Cualquier modelo de IA pre-entrenado para despliegue.

## **Configuración del SenseCAP A1102**

### Encender la cámara Vision AI

:::tip
Si necesitas modificar la configuración de la cámara de IA, debes seguir los pasos a continuación para encender la cámara de IA.

Si solo necesitas modificar configuraciones relacionadas con la transmisión LoRaWAN, puedes omitir esta sección.
:::

Conecta el puerto Type-C al A1102 a tu computadora según las siguientes instrucciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:700, height:'auto'}}/></div>

Si está conectado correctamente, puedes ver dos indicadores encenderse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" style={{width:400, height:'auto'}}/></div>

### **Acceder a Configuraciones Avanzadas**

Selecciona "User" en la barra de navegación inferior y haz clic en "Device Bluetooth Configuration".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" style={{width:400, height:'auto'}}/></div>

Desliza hacia abajo y selecciona "SenseCAP A1102".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" style={{width:400, height:'auto'}}/></div>

Mantén presionado el botón de encendido en el SenseCAP A1102 durante **tres segundos** para habilitar el modo de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" style={{width:400, height:'auto'}}/></div>

Una vez emparejado, haz clic en **Advanced Settings** en la app SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" style={{width:400, height:'auto'}}/></div>

Navega a opciones de configuración adicionales haciendo clic en **Advanced Settings** nuevamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" style={{width:400, height:'auto'}}/></div>

Selecciona las opciones del A1102 haciendo clic en **AI Camera** nuevamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/picture10.png" style={{width:400, height:'auto'}}/></div>

## **Desplegando un Modelo de IA**

### **Seleccionando un Modelo de IA**

Desde el menú de configuraciones, selecciona tu modelo de IA deseado para despliegue. Elige entre modelos precargados o sube un modelo personalizado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" style={{width:400, height:'auto'}}/></div>

### **Configurando Parámetros del Modelo**

:::warning note
Si necesitas modificar la configuración de la cámara de IA, debes seguir los pasos para encender la cámara de IA.  
Por favor consulta [Encender la cámara Vision AI](#encender-la-cámara-vision-ai).
:::

Configura parámetros como:

- **Nivel de Confianza**: Ajusta el umbral para el reconocimiento de objetos (ej., 80% de confianza).
- **Guardar Imágenes Reconocidas**: Habilita o deshabilita el guardado de imágenes reconocidas en la tarjeta de memoria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" style={{width:400, height:'auto'}}/></div>

## **Probando y Ejecutando el Modelo**

### **Vista Previa de Captura de Cámara**

Después de desplegar el modelo, previsualiza las imágenes capturadas por la cámara directamente en la app para asegurar que el modelo esté funcionando como se espera.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" style={{width:400, height:'auto'}}/></div>

### **Ver Información del Dispositivo**

Escanea el código QR en el Sensor LoRaWAN S2100 para vincular el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture1.png" style={{width:400, height:'auto'}}/></div>

Regresa a la página principal de la app para verificar la información del dispositivo del A1102, como el estado del modelo, conectividad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" style={{width:400, height:'auto'}}/></div>

### **Revisar Resultados de Reconocimiento**

Ve los datos de reconocimiento y registros. Por ejemplo, establece un intervalo de reporte (ej., cada 5 minutos) para rastrear objetos reconocidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" style={{width:400, height:'auto'}}/></div>

### **Accediendo a la Tarjeta SD**

Localiza la ranura en la unidad A1102 e inserta suavemente un destornillador. Aplica un poco de fuerza para abrirla.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" style={{width:400, height:'auto'}}/></div>

Localiza los cuatro orificios de tornillo y gira las perillas para abrirlos. Asegúrate de aplicar presión constante mientras giras para asegurar que se aflojen.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" style={{width:400, height:'auto'}}/></div>

Una vez que los tornillos estén aflojados, retira la cubierta para acceder a la ranura de la tarjeta SD. Luego puedes sacar la tarjeta SD para leer la información almacenada dentro.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" style={{width:400, height:'auto'}}/></div>

### **Guardado Automático de Imágenes**

Con 8GB de memoria interna, el A1102 puede guardar automáticamente imágenes reconocidas en una tarjeta de memoria. Accede y recupera estas imágenes más tarde para análisis o reportes.

:::tip
Equipado con 8GB de memoria, el A1102 es capaz de guardar automáticamente imágenes en la tarjeta de memoria cuando se reconoce un objetivo. Cuando necesitamos acceder a esta información de imagen, podemos extraer y acceder a los datos de imagen requeridos directamente desde la tarjeta de memoria.
:::

## **Solución de Problemas**

### Problemas Comunes

1. **Dos métodos para configurar modelos de IA**
  - Usando la APP SenseCraft para configurar los modelos integrados de la cámara de IA
    - Conecta al puerto ESP32 inferior, que se usa para proporcionar energía al dispositivo.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" style={{width:400, height:'auto'}}/></div>
  - [Usando el sitio web SenseCraft AI](https://sensecraft.seeed.cc/ai) para configurar modelos de IA que no están precargados de fábrica
    - Conecta al puerto Himax superior, que se usa para flashear el modelo al chip Himax.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:300, height:'auto'}}/></div>

2. **La cámara de IA está conectada pero la app muestra que no lo está**
  - verifica el estado del datalogger y asegúrate de configurarlo primero en Settings antes de regresar a Information.
  - explicación: Para ahorrar energía, el datalogger solo suministra energía a la cámara de IA cuando entra a la página de Settings.

3. **Luz respiratoria vs. luz parpadeante**
  - Un efecto de luz respiratoria indica que el dispositivo está **buscando una red**.
  - Una luz parpadeante indica que el dispositivo ha entrado al **modo de configuración Bluetooth**.
  - Si el dispositivo está en modo de luz respiratoria, presiona el botón una vez para cambiar a la luz roja, luego mantén presionado el botón para entrar al **modo de configuración Bluetooth** (luz parpadeante).

4. **La cámara de IA se enciende exitosamente, pero no puede ser encontrada vía configuración Bluetooth de la APP**
  - Cuando la cámara de IA está encendida, pero:
    - La APP SenseCraft no puede buscar el dispositivo.
    - Intenta buscar **Vision AI V2**, y aún no detecta el dispositivo. 
  - Esto indica que el **firmware del ESP32 puede no estar funcionando correctamente** (el ESP32 es responsable de la transmisión Bluetooth).
  - **Solución:**  
    - Conecta el cable al **puerto ESP32** y abre un monitor serial para verificar si el ESP32 está funcionando normalmente.  
    - Si aparecen registros anormales o errores de arranque, contacta al soporte técnico para instrucciones sobre **re-flashear el firmware del ESP32**.

## **Soporte Técnico y Discusión de Productos**

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
