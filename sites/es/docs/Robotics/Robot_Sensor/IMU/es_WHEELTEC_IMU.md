---
description: Este wiki proporciona un tutorial para el Sensor IMU WHEELTEC.
title: Sensor IMU WHEELTEC
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg
slug: /es/wheeltec_imu
last_update:
  date: 01/12/2025
  author: ZhuYaoHui
---

# Introducción al Sensor IMU WHEELTEC IMU

El WHEELTEC H30 es un sensor de actitud de alta precisión diseñado para medir con precisión datos clave de portadores, incluyendo ángulos de actitud 3D, aceleración, velocidad angular y fuerza del campo magnético. Diseñado con confiabilidad de grado industrial, este sensor integra un giroscopio MEMS de 3 ejes, un acelerómetro MEMS de 3 ejes y un sensor magnético de 3 ejes, ofreciendo un rendimiento robusto para aplicaciones profesionales.


<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wheeltec_imu.jpg" />
</div>

## Especificaciones


| Parámetro                  | H30 MINI                          | H30WP                              |
|----------------------------|-----------------------------------|------------------------------------|
| Modelo                     | H30 MINI                          | H30WP                              |
| Dimensiones                | 24.5×24.5×14.5mm                  | 63×55×24.5mm                       |
| Carcasa                    | Carcasa metálica ultra compacta   | Carcasa metálica estándar          |
| Interfaz de Salida         | Type-C/SH1.0 6PIN                 | Conector impermeable de aviación   |
| Consumo de Energía         | 186mW                             | 210mW                              |
| Interfaz Reservada         | UART                              | UART/RS485                         |
| Voltaje de Entrada         | 4.5–5.2V DC                       | 5–26V DC                           |
| Número de Ejes             | 9 ejes (todos los modelos)        | 9 ejes (todos los modelos)         |
| Temperatura de Operación   | -40°C–85°C (todos los modelos)    | -40°C–85°C (todos los modelos)     |
| Configuración de Comandos  | Soporta configuración de comandos serie: calibración, configuración, cambio de modo, etc. (todos los modelos) | Soporta configuración de comandos serie: calibración, configuración, cambio de modo, etc. (todos los modelos) |
| Tasa Máxima de Salida de Datos IMU | 400Hz                        | 400Hz                              |


### **Versión de ROS Soportada**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### Diagrama de dimensiones de instalación
H30 Mini
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/mini_install.png"/>
</div>

H30WP:
<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/wheeltec/wp_install.png"/>
</div>

## Introducción al IMU
Para materiales como el manual del usuario, controladores y SDK, consulte nuestra [documentación de GitHub](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU).

[1. Manual del Usuario de la Serie H30](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/1.WHEELTEC%20H30%20Series%20Inertial%20Navigation%20User%20Manual%EF%BC%88English%EF%BC%89.pdf)

[2. Documento del Protocolo de Comunicación YESENSE](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/blob/main/1.User%20Manual/4.YESENSE%20Communication%20Protocol%20Document%EF%BC%88English%EF%BC%89.pdf)

[3. SDK ROS1/ROS2](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/2.ROS_SDK)

[4. Herramientas de software](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/3.Software%20tools)

[5. Archivos de modelo mecánico](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/5.Mechanical%20model%20files)

[6. Rutinas relacionadas con el módulo de navegación inercial](https://github.com/Seeed-Projects/WHEELTEC-H30-IMU/tree/main/6.Routines%20related%20to%20the%20inertial%20navigation%20module)


## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
