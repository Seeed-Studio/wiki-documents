---
description: Potencia tus proyectos IoT con FTP y 4G. Aprende a transferir archivos de forma segura, automatizar tareas y monitorear dispositivos remotos usando tu HAT 4G LTE de Raspberry Pi.

title: Conecta y Transfiere FTP en tu HAT 4G LTE para Raspberry Pi 
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - FTP
  - 4G LTE
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /es/ftp_with_raspberry_pi_4g_lte_hat
last_update:
  date: 04/06/2025
  author: Guillermo
---

## Introducción

FTP es útil para aplicaciones con el HAT 4G LTE de Raspberry Pi, ya que permite transferencias de archivos confiables entre sistemas embebidos y servidores remotos. Facilita la **gestión de registros, configuraciones o archivos de datos** en configuraciones de comunicación IoT y M2M. Gracias a su compatibilidad y comandos sencillos, FTP garantiza una integración eficiente para proyectos conectados.

## Requisitos Previos

### Requisitos de Hardware 

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Requisitos de Software

Si no has instalado los controladores y herramientas de comunicación necesarias, revisa primero esta [guía](https://wiki.seeedstudio.com/getting_started_raspberry_pi_4g_lte_hat/#software-preparation):

### Requisitos Adicionales

Necesitarás un servidor FTP preconfigurado con los siguientes detalles:

- **Host**: Por ejemplo, https://ftp.drivehq.com o un servidor FileZilla.
- **Puerto**: 21.
- **Usuario y Contraseña**: Credenciales necesarias para la autenticación.

## Referencia de Comandos AT

### Configuración del Contexto de Red

Antes de iniciar operaciones FTP, configura el contexto PDP para tener conectividad de red.

| **Comando**                          | **Descripción**                                                                 |
|-------------------------------------|---------------------------------------------------------------------------------|
| `AT+QICSGP=1,1,"apn_name","","",1`  | Establece el contexto PDP para la conexión FTP. Reemplaza `apn_name` con el APN de tu operador. |
| `AT+QIACT=1`                        | Activa el contexto PDP.                                                        |
| `AT+QIACT?`                         | Verifica que el contexto PDP esté activado.                                    |

---

### Configuración de FTP

Configura la sesión FTP con los parámetros necesarios.

| **Comando**                                  | **Descripción**                                                     |
|----------------------------------------------|---------------------------------------------------------------------|
| `AT+QFTPCFG="contextid",1`                   | Asocia la conexión FTP al contexto PDP 1.                           |
| `AT+QFTPCFG="account","usuario","contraseña"`| Establece las credenciales FTP. Reemplaza `usuario` y `contraseña` por tus datos. |
| `AT+QFTPCFG="filetype",1`                    | Define el tipo de archivo (1 para binario, 0 para ASCII).           |
| `AT+QFTPCFG="transmode",1`                   | Define el modo de transferencia (1 para pasivo, 0 para activo).     |
| `AT+QFTPCFG="rsptimeout",90`                 | Establece el tiempo de espera de respuesta FTP (90 segundos).       |

### Abrir una Sesión FTP

Conéctate al servidor FTP y navega por los directorios.

| **Comando**                            | **Descripción**                                                                 |
|----------------------------------------|---------------------------------------------------------------------------------|
| `AT+QFTPOPEN="ftp.drivehq.com",21`     | Conéctate al servidor FTP. Reemplaza `ftp.drivehq.com` con la dirección de tu servidor. |
| `AT+QFTPCWD="/"`                       | Cambia al directorio raíz.                                                     |
| `AT+QFTPLIST="."`                      | Lista archivos y directorios en la ruta actual.                                |

---

### Operaciones con Archivos

Puedes enviar y recibir archivos mediante el puerto USB COM, la RAM o el sistema de archivos UFS.

| **Comando**                             | **Descripción**                                                                 |
|-----------------------------------------|---------------------------------------------------------------------------------|
| `AT+QFTPPUT="nombre_archivo","COM:",0`  | Sube un archivo. Reemplaza `nombre_archivo` con el nombre deseado en el servidor. |
| `AT+QFTPGET="nombre_archivo","COM:"`    | Descarga un archivo. Reemplaza `nombre_archivo` con el nombre del archivo en el servidor. |
| `AT+QFTPLEN`                            | Consulta la longitud del último archivo subido.                                |
| `AT+QFTPSIZE="nombre_archivo"`          | Obtiene el tamaño de un archivo específico. Reemplaza `nombre_archivo` por el archivo objetivo. |

### Cerrar la Sesión FTP

Finaliza la sesión FTP y desactiva el contexto PDP.

| **Comando**        | **Descripción**                     |
|--------------------|-------------------------------------|
| `AT+QFTPCLOSE`     | Cierra la sesión FTP.               |
| `AT+QIDEACT=1`     | Desactiva el contexto PDP.          |

---

## Flujo de Trabajo de Ejemplo

Si estás usando Windows, abre la herramienta **WinCOM**. Para Raspberry Pi, lanza **Minicom** ejecutando el siguiente comando:

```bash
sudo minicom -D /dev/ttyUSB2
```
### Paso a Paso

1. **Configurar el Contexto de Red**:
   
```bash
    AT+QICSGP=1,1,"dialogbb","","",1
    AT+QIACT=1
    AT+QIACT?
 ```
2. **Configurar el FTP**:
   
```bash
    AT+QFTPCFG="contextid",1
    AT+QFTPCFG="account","your_username","your_password"
    AT+QFTPCFG="filetype",1
    AT+QFTPCFG="transmode",1
    AT+QFTPCFG="rsptimeout",90
```
3. **Conectarse al Servidor FTP**:
   
```bash
    AT+QFTPOPEN="ftp.drivehq.com",21
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp1.PNG" 
    style={{ width: 500}} 
  />
</div>

4. **Navegar Directorios**:

```bash
    AT+QFTPCWD="/"
    AT+QFTPLIST="."
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/ftp2.PNG" 
    style={{ width: 500}} 
  />
</div>

5. **Subir Archivo**:

```bash
    AT+QFTPPUT="test_my2.txt","COM:",0
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/upload_ftp.PNG" 
    style={{ width: 600}} 
  />
</div>

6. **Descargar Archivo**:

```bash
    AT+QFTPGET="test_my2.txt","COM:"
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/download_ftp.PNG" 
    style={{ width: 500}} 
  />
</div>

7. **Cerrar la Sesión FTP**:

```bash
    AT+QFTPCLOSE
    AT+QIDEACT=1
```

---

## Recursos

Recomendamos encarecidamente revisar la guía de TCP de Quectel para este módulo, ya que cubre temas avanzados. Esta guía puede ayudarte a adaptar tu proyecto IoT a requisitos específicos.

- **[Página Web]** [Guía de Aplicación FTP](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_ftps_application_note_v1-3/)

## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>