---
description: La Guía de Instalación de ThingsBoard para reComputer proporciona instrucciones paso a paso para configurar ThingsBoard v3.8 y PostgreSQL en un dispositivo reComputer. Cubre la instalación de Java 17, configuración del servicio ThingsBoard, configuración de PostgreSQL y consejos de solución de problemas para una gestión fluida de datos IoT.

title: Primeros Pasos con ThingsBoard en reComputer R1000
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_r1000_thingsboard_ce
last_update:
  date: 10/14/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:600}}/></div>

## Introducción

[ThingsBoard](https://thingsboard.io/) es una plataforma IoT de código abierto diseñada para el desarrollo rápido, gestión y escalado de proyectos IoT. Ofrece una solución lista para usar tanto para infraestructura IoT en la nube como local, permitiéndote aprovisionar dispositivos, gestionar activos, recopilar y visualizar datos, y analizar telemetría con facilidad. En esta guía, recorreremos la instalación de ThingsBoard Community Edition en un reComputer, proporcionando una base sólida para tus aplicaciones IoT.

## Prerrequisitos

### Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

:::note
Los requisitos de hardware dependen de la base de datos elegida y del número de dispositivos conectados al sistema. Para ejecutar ThingsBoard con PostgreSQL, necesitarás **al menos 4 GB de RAM**.
:::

## Paso 1: Instalar Java 17 (OpenJDK)

ThingsBoard requiere Java 17 para ejecutarse. Abrir Terminal.

1. Actualiza tu índice de paquetes:

   ```bash
   sudo apt update
   ```

2. Instalar OpenJDK 17:

   ```bash
   sudo apt install openjdk-17-jdk
   ```

3. Configura tu sistema para usar OpenJDK 17 por defecto:

   ```bash
   sudo update-alternatives --config java
   ```

4. Verificar la instalación:

   ```bash
   java -version
   ```

## Paso 2: Instalar el Servicio ThingsBoard

1. Descargar el paquete `.deb` de ThingsBoard:

   ```bash
   wget https://github.com/thingsboard/thingsboard/releases/download/v3.8/thingsboard-3.8.deb
   ```

2. Instalar ThingsBoard como un servicio:

   ```bash
   sudo dpkg -i thingsboard-3.8.deb
   ```

## Paso 3: Instalar la Base de Datos PostgreSQL

1. Instalar **wget** si no está ya instalado:

   ```bash
   sudo apt install -y wget
   ```

2. Añade el repositorio de PostgreSQL e instala el servicio:

   ```bash
   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
   echo "deb https://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
   sudo apt update
   sudo apt -y install postgresql
   sudo service postgresql start
   ```

3. Establece la contraseña para el usuario `postgres`:

   ```bash
   sudo -u postgres psql
   \password
   ```

4. Crear la base de datos de ThingsBoard:

   ```bash
   psql -U postgres -d postgres -h 127.0.0.1 -W
   CREATE DATABASE thingsboard;
   ```

## Paso 4: Configurar ThingsBoard

1. Abra el archivo de configuración de ThingsBoard:

   ```bash
   sudo nano /etc/thingsboard/conf/thingsboard.conf
   ```

2. Añade la siguiente configuración de base de datos (reemplaza `PUT_YOUR_POSTGRESQL_PASSWORD_HERE` con la contraseña establecida para el usuario `postgres`):

   ```bash
   # DB Configuration 
   export DATABASE_TS_TYPE=sql
   export SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/thingsboard
   export SPRING_DATASOURCE_USERNAME=postgres
   export SPRING_DATASOURCE_PASSWORD=PUT_YOUR_POSTGRESQL_PASSWORD_HERE
   export SQL_POSTGRES_TS_KV_PARTITIONING=MONTHS
   ```

3. (Opcional) Actualizar la configuración de memoria para máquinas con 4GB de RAM:

   ```bash
   export JAVA_OPTS="$JAVA_OPTS -Xms2G -Xmx2G"
   ```

## Paso 5: Ejecutar Script de Instalación

1. Ejecuta el script de instalación de ThingsBoard:

   ```bash
   sudo /usr/share/thingsboard/bin/install/install.sh --loadDemo
   ```

   La opción `--loadDemo` cargará datos de demostración como usuarios, dispositivos, activos y más.

## Paso 6: Iniciar el Servicio de ThingsBoard

Inicia el servicio de ThingsBoard:

```bash
sudo service thingsboard start
```

Una vez iniciado, puedes acceder a la interfaz web de ThingsBoard usando el siguiente enlace:

- **URL:** [http://localhost:8080](http://localhost:8080)

#### Credenciales por defecto

- **Administrador del sistema:** sysadmin@thingsboard.org / sysadmin
- **Administrador del inquilino:** tenant@thingsboard.org / tenant
- **Usuario cliente:** customer@thingsboard.org / customer

## Solución de problemas

Si encuentras algún problema, revisa los registros de ThingsBoard para ver errores:

```bash
cat /var/log/thingsboard/thingsboard.log | grep ERROR
```

Para archivos de registro adicionales:

```bash
/var/log/thingsboard
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/openingwindow.PNG" style={{width:600}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
