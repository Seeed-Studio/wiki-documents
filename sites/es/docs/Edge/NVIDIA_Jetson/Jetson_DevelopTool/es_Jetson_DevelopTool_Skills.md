---
description: Utiliza el módulo Skills en Seeed Jetson DevelopTool para ejecutar más de 50 scripts de automatización integrados para controladores, frameworks de IA y ajuste del sistema en tu dispositivo Jetson.
title: Skills
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - Skills
  - automation
  - OpenClaw
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_skills
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/es/jetson_developtool_skills/
---

El módulo **Skills** proporciona más de 50 scripts de automatización integrados que se encargan de tareas comunes de configuración y ajuste de Jetson — desde la instalación de controladores hasta el despliegue de frameworks de IA — con un solo clic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-skills.png" style={{width:800, height:'auto'}}/></div>

## Categorías de Skills

### Controladores y correcciones
| Skill | Descripción |
|-------|-------------|
| USB-WiFi (88x2bu) | Instala el controlador para adaptadores Wi-Fi RTL88x2BU |
| 5G Module Support | Configura la conectividad del módulo celular 5G |
| Bluetooth Conflict Fix | Resuelve problemas comunes de coexistencia Bluetooth + Wi-Fi |
| NVMe Boot | Configura el sistema para arrancar desde un SSD NVMe |
| Docker Cleanup | Elimina imágenes y contenedores de Docker no utilizados para liberar espacio |

### IA / LLM
| Skill | Descripción |
|-------|-------------|
| PyTorch (Jetson) | Instala la rueda de PyTorch optimizada por NVIDIA para JetPack |
| Ollama | Instala el motor de inferencia LLM Ollama |
| DeepSeek | Despliega modelos DeepSeek en Jetson |
| Qwen2 | Instala Qwen2 LLM con optimizaciones para Jetson |
| LeRobot | Configura Hugging Face LeRobot para IA encarnada |
| vLLM | Instala el servidor de inferencia de alto rendimiento vLLM |

### Visión / YOLO
| Skill | Descripción |
|-------|-------------|
| YOLOv8 | Instala Ultralytics YOLOv8 con exportación a TensorRT |
| DeepStream | Configura el SDK NVIDIA DeepStream |
| NVBLOX | Instala NVBLOX para reconstrucción de escenas 3D |
| Depth Estimation | Configura la canalización de estimación de profundidad |

### Red y acceso remoto
| Skill | Descripción |
|-------|-------------|
| VS Code Server | Instala code-server para un IDE basado en navegador |
| VNC Server | Configura el escritorio remoto noVNC |
| SSH Key Setup | Configura la autenticación SSH sin contraseña mediante claves |
| Proxy Config | Configura el proxy HTTP/HTTPS a nivel de sistema |

### Ajuste del sistema
| Skill | Descripción |
|-------|-------------|
| Max Performance Mode | Establece Jetson a las máximas frecuencias de CPU/GPU (`nvpmodel`) |
| Swap Config | Crea o redimensiona el espacio de intercambio (swap) |
| Fan Control | Configura la curva del ventilador y el perfil de refrigeración |
| Cache Cleanup | Limpia las cachés de paquetes y de pip para recuperar espacio en disco |

## Ejecución de un Skill

1. Conecta tu dispositivo Jetson.
2. Abre la pestaña **Skills**.
3. Navega por categoría o busca por palabra clave.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-header.png" style={{width:800, height:'auto'}}/></div>

4. Haz clic en **Run** en el skill deseado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/skills-cards.png" style={{width:800, height:'auto'}}/></div>

5. Una ventana de registro muestra la salida de la ejecución en tiempo real.

## Skills de la comunidad (OpenClaw)

Los Skills utilizan el formato [OpenClaw](https://github.com/Seeed-Studio/openclaw). Puedes añadir tus propios skills personalizados colocándolos en el directorio `skills/openclaw/` — la herramienta los carga automáticamente al iniciar.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
