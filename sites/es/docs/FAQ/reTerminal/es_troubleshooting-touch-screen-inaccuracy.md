---
description: reTerminal-FAQ
title: Solución de Problemas de Inexactitud de la Pantalla Táctil
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/troubleshooting-touch-screen-inaccuracy
last_update:
  date: 6/21/2023
  author: Seraphina
---

 <!-- Q12: Troubleshooting Touch Screen Inaccuracy -->

Después de configurar la pantalla con la orientación correcta, la posición táctil puede seguir siendo inexacta, causando que el cursor se mueva en direcciones inesperadas cuando tocas un área específica en la pantalla. Para abordar este problema, es esencial seguir los siguientes pasos.

- **Paso 1** : Abre la terminal e ingresa a la carpeta xorg.conf.d escribiendo

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 2** : Tendrás acceso al archivo "40-libinput.conf", que puede ser editado usando el comando.

```sh
sudo nano 40-libinput.conf
```

- **Paso 3**: Encuentra la sección InputClass de **touchscreen** InputClass.

- **Paso 4**: Añade la siguiente frase. Puedes consultar la captura de pantalla

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 5** : Guarda con Ctrl+O y presiona enter luego Ctrl+X después de eso Reinicia

```sh
Sudo reboot 
```

Después de reiniciar, puedes notar que la posición táctil ahora es precisa. Esto significa que cuando tocas un área específica en la pantalla, el cursor se mueve en la dirección deseada.