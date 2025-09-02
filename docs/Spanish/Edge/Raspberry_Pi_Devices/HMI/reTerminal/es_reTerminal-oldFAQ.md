---
description: reTerminal-FAQ
title: Preguntas Frecuentes sobre reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-FAQ
last_update:
  date: 04/03/2025
  author: Erick González
---

# Preguntas Frecuentes sobre reTerminal

Este documento contiene todas las preguntas frecuentes relacionadas con reTerminal. Será muy útil si presentas algún problema al usar reTerminal.

## P1: ¿Cómo puedo actualizar el firmware STM32 para la LCD de reTerminal?

**Nota:** Si tu reTerminal se fabrica después del 26/09/2021, el STM32 lleva el firmware V1.8 preinstalado.

Es muy importante asegurarse de que tengas el firmware más reciente en el chip **STM32G030** del reTerminal, responsable de gestionar la LCD. Actualizar el firmware a la última versión resolverá la mayoría de los problemas que puedas tener con la LCD.

Hay 2 métodos para flashear el chip STM32:

- **Método 1:** Conectar directamente al chip STM32 usando el CM4 del reTerminal y flashear el firmware.
- **Método 2:** Conectar físicamente los pines del chip STM32 a los pines GPIO de 40 pines del reTerminal mediante cables puente y luego usar OpenOCD.

**Método 1** aplica si tu STM32 ya tiene **v1.7 o superior** y **método 2** solo si tu STM32 es **anterior (menor que v1.7)**.

### Decidir qué método de flasheo usar

Veamos cómo saber qué versión de firmware tiene, para elegir método.

1. En la ventana de terminal del reTerminal, teclea:

```sh
sudo nano /boot/config.txt
```

2. Al final del archivo, comenta la línea con **dtoverlay=reTerminal**:

```sh
#dtoverlay=reTerminal
```

**Nota:** Esto descarga todos los drivers de reTerminal. Al reiniciar, no se cargarán.

3. Reinicia reTerminal:

```sh
sudo reboot
```

4. Pon el STM32 en **modo boot** usando **i2c-tools**:

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

5. Lista dispositivos I2C:

```sh
i2cdetect -y 1
```

Si ves la dirección I2C **0x56**, quiere decir que ya tienes **STM32 v1.7 o superior**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

De lo contrario, si ves la dirección **0x45**, tienes la **versión antigua (< v1.7)**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

6. Abre de nuevo `config.txt`:

```sh
sudo nano /boot/config.txt
```

7. Descomenta la línea con **dtoverlay=reTerminal**:

```sh
dtoverlay=reTerminal
```

8. Apaga reTerminal:

```sh
sudo poweroff
```

**Nota:** Si ya tienes **firmware STM32 v1.8**, al entrar en modo boot mediante i2c-tools solo podrás salir flasheando el firmware.

### Conectar a STM32 usando CM4 y flashear el firmware

Si tu STM32 es **v1.7 o superior**, sigue este método.

1. En la terminal del reTerminal, escribe:

```sh
sudo nano /boot/config.txt
```

2. Al final del archivo, comenta la línea **dtoverlay=reTerminal**:

```sh
#dtoverlay=reTerminal
```

3. Reinicia:

```sh
sudo reboot
```

4. Crea y entra a un directorio nuevo:

```sh
mkdir STM32
cd STM32
```

5. Descarga **stm32flash** y **STM32G030F6_R2.bin**:

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

6. Desempaqueta **stm32flash-0.7.tar.gz**:

```sh
tar -xvf stm32flash-0.7.tar.gz
```

7. Ve a la carpeta stm32flash-0.7 y compila la herramienta:

```sh
cd stm32flash-0.7/
make
```

8. Pon STM32 en modo boot:

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

9. Borra la flash del chip STM32:

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

10. Flashea el firmware:

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Nota:** **STM32G030F6_R2.bin** es el firmware nuevo.

11. Modifica el registro OPTR:

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

12. Abre `config.txt`:

```sh
sudo nano /boot/config.txt
```

13. Quita el comentario en **dtoverlay=reTerminal**:

```sh
dtoverlay=reTerminal
```

14. Reinicia:

```sh
sudo reboot
```

Ya has flasheado el firmware STM32.

### Conectar al STM32 con cables puente y OpenOCD

Si tu versión es **antigua (< v1.7)**, usa este método.

1. En reTerminal, actualiza paquetes:

```sh
sudo apt-get update
```

2. Instala:

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

3. Clona repo y entra:

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

4. Visita [este enlace](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) para descargar **STM32G030F6_R2.bin** de la última versión.

5. Desde PC, transfiere **STM32G030F6_R2.bin** a la carpeta openocd en reTerminal.

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

6. En reTerminal:

```sh
cd openocd
```

7. Ejecuta:

```sh
./bootstrap
```

8. Después:

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

9. Compila:

```sh
make
```

10. Instala:

```sh
sudo make install
```

11. Sigue esta conexión (STM32 -> pines 40-pin reTerminal).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Los pines de STM32 están en la parte trasera del reTerminal.

12. Mientras mantienes esta conexión unos ~3s, flashea el firmware:

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

Si ves ese log, se flasheó con éxito.

13. Desconecta cables y **desconecta físicamente la alimentación** sin usar `poweroff`.

Ahora STM32 está flasheado.

### Verificar versión de firmware STM32G030

1. Teclea:

```sh
sudo nano /boot/config.txt
```

2. Comenta **dtoverlay=reTerminal**:

```sh
#dtoverlay=reTerminal
```

3. Reinicia.

4. Revisa versión firmware:

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

Si obtienes **0x01 0x07** => firmware v1.7.

5. Vuelve a editar `config.txt`, quita el comentario en dtoverlay=reTerminal.

6. Reinicia.

## P2: ¿Cómo flashear Raspberry Pi OS original que trae reTerminal?

Si pasaste a otro SO y quieres volver al Raspberry Pi OS original, sigue:

1. Descarga Raspberry Pi OS:

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**Nota:** de fábrica se entrega 32-bit, pero puedes usar 64-bit.

2. Extrae el archivo .zip.

3. Abre **Raspberry Pi Imager**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

4. Pulsa **CTRL + SHIFT + X** para abrir **Advanced options**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Allí puedes configurar SSH, hostname, wifi, etc.

5. Clic en **CHOOSE OS** => **Use custom**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

6. Selecciona la imagen extraída y clic **open**.

7. **CHOOSE STORAGE** => el eMMC drive conectado.

8. Finalmente, **WRITE**.

## P3: ¿Cómo actualizar Raspberry Pi OS y paquetes instalados?

Queremos actualizar todos los paquetes y el OS.

1. En terminal:

```sh
sudo apt update
sudo apt full-upgrade
```

2. Reinstala cabeceras de kernel:

```sh
sudo apt install raspberrypi-kernel-headers
```

3. Reinicia:

```sh
sudo reboot
```

Listo, Raspberry Pi OS y paquetes están al día.

## P4: ¿Cómo flashear un SO si cambio el CM4 a uno sin eMMC?

Si usas CM4 sin eMMC, necesitas usar micro-SD:

1. Inserta la micro-SD en el PC (lectora SD o lector incorporado).

2. Descarga **Raspberry Pi Imager** de [este enlace](https://www.raspberrypi.org/software/).

**Nota:** disponible para Windows, Mac, Ubuntu.

3. Abre **Raspberry Pi Imager**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

4. Pulsa **CTRL + SHIFT + X** => **Advanced options**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Configura SSH, wifi, etc.

5. **CHOOSE OS**, selecciona OS preferido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Para **64-bit Ubuntu**, ve a "Other general purpose OS".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

6. **CHOOSE STORAGE** => micro-SD.

7. **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

Espera unos minutos.

8. Quita la micro-SD del PC e insértala en reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**Nota:** Debes abrir la carcasa del reTerminal para acceder a la ranura micro-SD.

## P5: ¿Cómo iniciar sesión en Raspberry Pi OS/ Ubuntu OS u otro usando un convertidor USB a serial?

Si tienes un **USB a Serial Converter**, sigue:

Conecta cables jumper desde el convertidor USB a serial a los pines **UART** en el conector de 40 pines del reTerminal:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

Configura el software en tu PC:

### Windows

1. Conecta el convertidor USB a serial al PC.
2. Abre **Device Manager**, bajo "Ports (COM & LPT)" verás **COM7** (ejemplo).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

3. Descarga e instala [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) si no lo tienes.

4. Abre Putty, elige "Serial" como tipo de conexión.

5. Configura:
   - Serial line: COM7
   - Speed: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

6. Clic en **Open**.

7. En la ventana de Putty, inicia sesión:

```sh
Username: pi
Password: raspberry
```

8. Si entras en Raspberry Pi OS con éxito, verás algo así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### Mac/Linux

1. Conecta convertidor USB a serial al PC.
2. Abre **terminal** en Mac/Linux.
3. `sudo apt-get update`
4. `sudo apt-get install minicom`
5. Verifica dispositivos serial:

```sh
dmesg | grep tty
```

> Ej:

```sh
[ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device
```

6. Conéctate:

```sh
minicom -D /dev/ttyACM0 -b 9600
```

7. Tras la conexión de cables, enciende reTerminal y listo. Has iniciado sesión en Raspberry Pi OS.

## P6: No puedo reactivar la LCD tras suspender

Abre SSH o VNC y:

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

Esto reinicializa la LCD del reTerminal.

## P7: ¿Cómo arrancar un SO desde USB Flash Drive?

Podemos cambiar el orden de arranque a **USB > eMMC**, si falla USB, arranca eMMC.

**Nota:** Debes usar Ubuntu o MacOS como PC host.

1. Quita 4 tapones de goma, desatornilla la carcasa trasera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

2. Quita 2 tornillos del disipador y 4 tornillos para desmontar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

3. Mueve el interruptor de modo arranque (boot mode) abajo según la imagen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

4. En la PC Host (Ubuntu/Mac), abre terminal:

```sh
sudo apt update
sudo apt install git
```

5. Git puede dar error si la fecha está mal. Ajusta con:

```sh
sudo date MMDDhhmm
```

6. Clona y entra a **usbboot**:

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

7. Instala libusb:

```sh
sudo apt install libusb-1.0-0-dev
```

8. Compila usbboot:

```sh
make
```

9. Abre `recovery/boot.conf`:

```sh
sudo nano recovery/boot.conf
```

10. Cambia **BOOT_ORDER=0xf15** (USB primero, luego eMMC).

11. Actualiza la imagen EEPROM:

```sh
cd recovery
./update-pieeprom.sh
```

Se genera `pieeprom.bin` listo para flashear en CM4.

12. Vuelve a usbboot:

```sh
cd ..
```

13. Ejecuta:

```sh
sudo ./rpiboot -d recovery
```

14. Conecta reTerminal al PC via USB-C.

Espera unos segundos a que transfiera archivos.

15. Apaga reTerminal, pon el interruptor boot mode de nuevo en posición original, ensambla la carcasa.

16. Conecta una USB flash drive booteable con SO y enciende reTerminal.

Arrancará desde la USB.

## P8: ¿Por qué hay pegamento negro alrededor de los chips en el CM4?

Hemos aplicado **resina epoxi** (que luce como pegamento negro) para proteger los IC y hacer el CM4 más fiable.

## P9: ¿Por qué buzzer, LEDs y botones no funcionan tras instalar drivers de reTerminal?

Existen 2 versiones de chip de expansión I/O en reTerminal: MCP23008 y PCA9554. Si [instalaste drivers manualmente](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os), comprueba cuál chip lleva tu reTerminal.

1. `i2cdetect -y 1`

Si ves dirección **0x20**, es **MCP23008**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

Si ves **0x38**, es **PCA9554**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

Para reTerminal con MCP23008:

```sh
sudo nano /boot/config.txt
```

Agrega:

```sh
dtoverlay=reTerminal,addr=0x20,mcp23008
```

Guarda y reinicia. Para PCA9554 no necesitas nada.

## P10: ¿Cómo instalar Ubuntu en reTerminal?

1. Flashea [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) en la eMMC. Sigue [estos pasos](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). En Raspberry Pi Imager => "CHOOSE OS > Use custom", selecciona la imagen.

2. Haz SSH al reTerminal, usuario=ubuntu, pass=ubuntu:

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

3. Ahora reTerminal inicia Ubuntu Desktop, pero con orientación incorrecta:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

4. Clic ícono de encendido arriba a la derecha => **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

5. Selecciona **Displays** => **Orientation: Portrait Left** => **Apply**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

Ya verás Ubuntu Desktop en orientación correcta:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## P11: Orientación de pantalla incorrecta tras instalar Raspberry Pi OS Bullseye

1. Tras flashear Bullseye en la eMMC, [instala drivers reTerminal](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os).

2. Crea **monitors.xml** en **.config**:

```sh
sudo vi ~/.config/monitors.xml
```

3. Copia:

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

4. Edita **/boot/config.txt**:

```sh
sudo vi /boot/config.txt
```

5. Añade:

```sh
dtoverlay=reTerminal,tp_rotate=1
```

6. Reinicia:

```sh
sudo reboot
```

La pantalla estará en la orientación correcta.

## P12: Resolver inexactitud en pantalla táctil

Tras configurar la orientación, el tacto puede ser impreciso. Para corregirlo:

1. `cd /usr/share/X11/xorg.conf.d`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width="1000" height="auto" /></p>

2. Edita **40-libinput.conf**:

```sh
sudo nano 40-libinput.conf
```

3. Busca la sección InputClass para "touchscreen".

4. Agrega:

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width="1000" height="auto" /></p>

5. Guarda (Ctrl+O) y cierra (Ctrl+X). Reinicia:

```sh
sudo reboot
```

El tacto será preciso tras reiniciar.

## P13: LEDs y Buzzer no funcionan tras instalar drivers reTerminal

Este problema se resolverá en futuras actualizaciones.

1. Edita /boot/config.txt:

```sh
sudo vi /boot/config.txt
```

2. Comenta la línea:

```sh
#dtoverlay=reTerminal-bridge
```

3. Reinicia:

```sh
sudo reboot
```

Ahora LEDs y Buzzer funcionarán.

## P14: ¿Cómo saber si mi chip de encriptación es ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G?

| Fecha de lanzamiento | Versión IC |
|---|---|
| Antes 09/03/2021 | ATECC608A-SSHDA-B |
| Sept 2021 - Ene 2022 | ATECC608A-SSHDA-B o ATECC608A-TNGTLSS-G |
| Después 01/02/2022 | ATECC608A-TNGTLSS-G |

Para revisarlo:

```sh
i2cdetect -y 3
```

Si ves `0x35`, es **ATECC608A-TNGTLSS-G**; de lo contrario, **ATECC608A-SSHDA-B**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## Recursos

- **[PDF]** [Esquemáticos reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)
- **[ZIP]** [Esquemáticos reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)
- **[PDF]** [Datasheet CM4 de Raspberry Pi](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)
- **[Web Page]** [Documentación oficial Raspberry Pi](https://www.raspberrypi.org/documentation/)

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes soportes y asegurar que tu experiencia sea fluida. Ofrecemos varios canales de comunicación para distintas preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
