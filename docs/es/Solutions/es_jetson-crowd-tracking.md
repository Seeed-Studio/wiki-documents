---
description: Presenta una demostración de IA de seguimiento de multitudes con Jetson
title: Seguimiento y Conteo de Multitudes
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /es/solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
---

Esta guía es para entornos **NVIDIA Jetson Ubuntu 22 + JetPack 6.x**, ayudándote a completar rápidamente el despliegue.

## 📋 Requisitos del Entorno

- **Dispositivo**: Serie NVIDIA Jetson (Nano, Xavier, Orin, etc.)
- **Sistema**: Ubuntu 22.x + JetPack 6.x
- **Red**: Capaz de acceder a GitHub y Docker Hub
- **Permisos**: Privilegios `sudo`

> Si tu dispositivo aún no tiene instalado el entorno del sistema adecuado, consulta la guía oficial de flasheo para la instalación del sistema y preparación del entorno:  
> [Tutorial de Flasheo de JetPack (Seeed Studio)](/es/flash/jetpack_to_selected_product/)

## ⚡ Despliegue con Un Solo Clic

Ejecuta el siguiente comando en la terminal de tu dispositivo Jetson:

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 El script soporta **ejecución idempotente**, lo que significa que es seguro ejecutarlo múltiples veces.

## 🔍 Proceso de Despliegue

El script realiza automáticamente los siguientes pasos:

1. **Instalar Docker (27.x)**  
   - Verificar si Docker está instalado  
   - Si está instalado pero no es la versión 27.x → desinstalar y reinstalar automáticamente  
   - Configurar NVIDIA Container Toolkit  
   - Establecer el runtime predeterminado de Docker como `nvidia`

2. **Instalar Broker MQTT**  
   - Instalar `mosquitto` y `mosquitto-clients`  
   - Configurar para permitir acceso externo:  

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **Desplegar SenseCraft AI Server**  
   - Clonar la rama especificada a `~/sensecraft-ai_server`  
   - Ejecutar `scripts/run.sh` para iniciar el servicio  
   - Descargar el modelo YOLOv11 a `~/sensecraft-ai_server/models/yolo11n.pt`

---

## 🛡 Manejo de Excepciones

- **Ejecución idempotente**:  
  - **La mayoría de problemas** (ej., interrupciones de red, fallos de instalación parcial) pueden solucionarse **simplemente re-ejecutando el script**  
  - El script verifica las versiones de software y configuraciones, instalando solo las partes faltantes o incorrectas  
- **Problemas raros** (ej., fallo permanente de fuentes apt, repositorio externo inalcanzable) requieren intervención manual

---

## 🖥 Iniciar y Acceder al Servicio

1. **Iniciar el servicio**  

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

### 📷 Salida de Línea de Comandos (Ejemplo)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command"/></div>

2. **Acceder a la página principal**  
   - En tu navegador:  

     ```bash
     http://<JETSON_IP>:46654
     ```

   - Los parámetros predeterminados están preconfigurados; inicia para ver los resultados

### 📷 Interfaz Web (Ejemplo)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png"/></div>

3. **Acceder a la página de configuración**  
   - En tu navegador:  

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - Aquí puedes ajustar fuentes de video, modelos, parámetros de inferencia, etc., y guardarlos en el servidor

## ⚙ Resumen de la Página de Configuración

### 📷 Página de Configuración (Ejemplo)

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png"/></div>

### Fuente de Video

- Soporta **archivos de video locales**, **cámaras USB** (primer dispositivo por defecto), **transmisiones RTSP**
- Soporta cargas de MP4, AVI, MOV, MKV
- Ver y eliminar fuentes de video cargadas

### Modelo de IA

- Seleccionar de los modelos de inferencia de IA disponibles
- Soporta formatos `.pt`, `.pth`, `.onnx`, `.engine`
- Ver y eliminar modelos cargados

### Parámetros de Inferencia

- **Umbral de confianza**: 0.1–1.0
- **Detecciones máximas**: 1–1000
- **Inferencia de media precisión**: aumenta la velocidad (diferencia mínima para modelos pequeños)

### Visualización

- Mostrar cajas de detección (color personalizable, naranja por defecto)
- Marca de tiempo y FPS siempre habilitados

### Seguimiento

- Habilitar seguimiento de múltiples objetos
- Mostrar líneas de trayectoria con longitud, grosor y color personalizables

### Detección de Línea de Cruce

- Soporta línea de cruce horizontal o vertical (vertical recomendado)
- Dibujar puntos de inicio/fin; habilitar visualización para depuración en tiempo real
- Tolerancia: 1–20 píxeles
- Color y grosor personalizables
- Mostrar/ocultar y reiniciar contador (se reinicia cuando el servicio se reinicia)

### Gestión de Configuración

- Guardar configuración actual en el servidor (cargada en tiempo de ejecución)
- Exportar/importar archivos de configuración
- Restaurar configuración predeterminada

---

## 🛠 Problemas Comunes

| Problema                        | Causa                      | Solución                                                              |
| ---------------------------- | -------------------------- | --------------------------------------------------------------------- |
| `Docker installation failed` | Red inestable o fuente | Verificar red y volver a ejecutar el script                                   |
| Mosquitto no puede conectar     | Problema de firewall/configuración      | Asegurar que `/etc/mosquitto/mosquitto.conf` contenga `listener 1883 0.0.0.0` |
| Modelo YOLO no descargado    | Interrupción de red       | Eliminar `~/sensecraft-ai_server/models/yolo11n.pt` y volver a ejecutar el script |

---

## 📦 Desinstalando el Servicio

```bash
# Uninstall MQTT
sudo apt remove -y mosquitto mosquitto-clients

# Uninstall Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove service directory
rm -rf ~/sensecraft-ai_server
```

## 📚 Referencias

- [Guía de Flasheo de Jetson](/es/flash/jetpack_to_selected_product/)
- [Repositorio Fuente de SenseCraft-AI\_Server](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [Guía de NVIDIA Jetson Docker](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Documentación Oficial de Mosquitto](https://mosquitto.org/man/mosquitto-conf-5.html)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
