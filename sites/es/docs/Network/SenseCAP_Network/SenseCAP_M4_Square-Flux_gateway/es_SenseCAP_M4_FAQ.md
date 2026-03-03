---
description: SenseCAP M4 FAQ
title: SenseCAP M4 FAQ
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

# FAQ

### **¿Cuál es el tiempo promedio de sincronización de la cadena flux para el nodo?**

Descargar y cargar un archivo de instantánea de 20GB, y sincronización de cadena durante aproximadamente una hora para ponerse al día con el último bloque. El tiempo de sincronización correcto depende de la red del dispositivo, asegúrese de que el dispositivo tenga una buena red.

### **¿SenseCAP M4 Square soporta NIMBUS y STRATUS?**

**No**, SenseCAP M4 Square solo soporta CUMULUS. Si necesita NIMBUS, por favor haga clic [aquí](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)

### **¿Cómo verificar si mi puerto está abierto?**

SenseCAP M4 Square abre todos los puertos requeridos por Flux. La aplicación SenseCAP Hotspot proporciona detección UPNP. Si el estado UPNP está ENCENDIDO, los puertos están abiertos. Si el estado está APAGADO, por favor verifique el UPNP de su router. Para más detalles, por favor visite [Configuración de Red del Nodo Flux](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

### **¿M4 necesita IP estática y es posible ejecutar múltiples SenseCAP M4 Squares en la misma IP externa?**

Se requiere una IP externa.

Máximo ejecutar 8 dispositivos por IP, y asegúrese de que su router soporte UPnP o reenvío de puertos.

### **¿Cómo probar el ancho de banda de la red para cumplir con el requisito?**

https://www.speedtest.net

### **¿Cuál es la diferencia entre flux y tokens flux?**

Los tokens flux son Flux. Los tokens flux son Activos Paralelos que se pagan en diferentes blockchains, como ETH Flux, BSC Flux, etc. Son reclamables en la aplicación Fusion dentro de Zelcore. Seleccione "Reclamación de Minería Paralela" desde los tres puntos en la parte superior derecha. Solo verá una cantidad reclamable si su cantidad de Flux-Token es mayor que las tarifas requeridas para reclamar.

### **Si soy un usuario profesional, ¿puedo borrar el sistema original e instalar otro?**

Esta no es una operación recomendada. Sin embargo, es un dispositivo basado en x86 y puede reinstalar cualquier sistema que desee, antes de eso, por favor asegúrese de que sabe lo que está haciendo.

Pero tenga en cuenta que si borra el sistema estándar, perderá su garantía, y es difícil volver al sistema original.

### **¿Necesito elegir el enchufe de alimentación yo mismo?**

M4 Square incluye un adaptador de alimentación de entrada de amplio rango y tiene enchufe US/AU/UK/EU.

### **¿Necesita una antena externa?**

La antena wifi está dentro del dispositivo. SenseCAP M4 Square-Fluxnode no requiere una antena externa.

### **¿Necesito apostar los 1000 Flux?**

**Sí**, los 1000 Flux no están incluidos en el hardware, por lo que necesita apostarlos usted mismo.

### **¿Puede mi M1 convertirse en FluxNode, y convertir un Pi de 8GB en un FluxNode?**

En la actualidad, Raspi 8GB es soportado por Flux, pero requiere un SSD externo, y la estabilidad no puede ser garantizada, lo que puede afectar el funcionamiento estable del equipo.