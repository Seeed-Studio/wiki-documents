---
description: Este wiki te mostrará cómo usar SQLite en recomputer
title: Usar SQLite en reComputer
keywords:
  - Edge
  - RasberryPi 5
  - SQlite
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/recomputer_use_docker.webp
slug: /es/use_sqlite_on_recomputer
last_update:
  date: 09/25/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Usar SQLite en reComputer

## Introducción

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite.jpg" style={{width:300, height:'auto'}}/></div>

Este wiki explica cómo usar [SQLite](https://sqlite.org/) en la caja reComputer. SQLite es un sistema de gestión de bases de datos relacionales ligero e integrado ampliamente utilizado en dispositivos móviles, aplicaciones de escritorio y sistemas embebidos. No requiere un proceso de servidor separado; la base de datos se almacena directamente en un solo archivo de disco ordinario. SQLite es simple de usar y ofrece un excelente rendimiento. Soporta sintaxis SQL estándar y es adecuado para necesidades de almacenamiento de datos pequeñas a medianas. Debido a sus características de configuración cero y fácil implementación, SQLite se ha convertido en el motor de base de datos preferido para muchos proyectos.

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparar software

### actualizar el sistema

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Instalar SQLite

```bash
sudo apt-get install sqlite3
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_install.png" style={{width:1000, height:'auto'}}/></div>

### Crear base de datos

```bash
sqlite3 sensordata.db
```

Con el comando `.help` puedes recordar rápidamente todos los comandos soportados y su respectivo uso.

```bash
sqlite> .help
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_help.png" style={{width:1000, height:'auto'}}/></div>

Luego usa `.quit` para salir del shell de SQLite.

```bash
sqlite> .quit
```

## Usando SQL

### SQL crear tabla

```bash
sqlite3 sensordata.db
```
Luego usa un comando como el siguiente para crear una nueva tabla.

```bash
ain@raspberrypi:~ $ sqlite3 sensordata.db
SQLite version 3.40.1 2022-12-28 14:03:47
Enter ".help" for usage hints.
sqlite> BEGIN;
sqlite> CREATE TABLE dhtreadings (
   ...> id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...> temperature NUMERIC,
   ...> humidity NUMERIC,
   ...> currentdate DATE,
   ...> currenttime TIME,
   ...> device TEXT
   ...> );
sqlite> COMMIT;
```

### Verificar la tabla

Puedes usar el siguiente comando para ver la tabla creada.

```bash
sqlite> .tables
dhtreadings
sqlite> .fullschema
CREATE TABLE dhtreadings (
id INTEGER PRIMARY KEY AUTOINCREMENT,

temperature NUMERIC,
humidity NUMERIC,
currentdate DATE,
currenttime TIME,
device TEXT
);
/* No STAT tables available */
```

### SQL insertar

Para insertar nuevas lecturas de temperatura y humedad en la base de datos, podrías hacer algo como esto:

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.4, 48, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

### SQL seleccionar

Para acceder a los datos almacenados en la base de datos, usas la declaración SQL SELECT:

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
```
Hasta ahora, solo tienes 1 lectura insertada en la base de datos. Puedes insertar una nueva lectura de la siguiente manera:

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.5, 48.7, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

Y cuando haces SELECT de los datos almacenados en la tabla, devuelve 2 lecturas:

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
2|22.5|48.7|2025-09-26|02:06:35|manual
```

### SQL eliminar

Si quieres eliminar completamente la tabla de tu base de datos, puedes usar el comando DROP TABLE.

>NOTA: el siguiente comando eliminará completamente la tabla dhtreadings:

```bash
sqlite> DROP TABLE dhtreadings;
```
Ahora, si escribes el comando '.tables':

```bash
sqlite> .tables
```
No devuelve nada, porque tu tabla fue completamente eliminada.

### Usar Python con SQLite

Usar Python para interactuar con SQLite como se muestra a continuación:


<details>
  <summary>test_sqlite.py</summary>

```python
import sqlite3
from datetime import datetime
import os

def create_connection(db_file="dht_readings.db"):
    """Create a database connection to the SQLite database"""
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(f"Connected to SQLite database: {db_file}")
    except sqlite3.Error as e:
        print(f"Error connecting to database: {e}")
    return conn

def create_table(conn):
    """Create the dhtreadings table if it doesn't exist"""
    try:
        sql_create_dhtreadings_table = """
        CREATE TABLE IF NOT EXISTS dhtreadings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            temperature REAL NOT NULL,
            humidity REAL NOT NULL,
            currentdate TEXT NOT NULL,
            currenttime TEXT NOT NULL,
            device TEXT NOT NULL
        );
        """
        conn.cursor().execute(sql_create_dhtreadings_table)
        conn.commit()
        print("DHT readings table created successfully")
    except sqlite3.Error as e:
        print(f"Error creating table: {e}")

def insert_dht_reading(conn, temperature, humidity, device):
    """Insert a new DHT reading into the dhtreadings table"""
    sql_insert = """INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) 
                    VALUES(?, ?, date('now'), time('now'), ?);"""
    try:
        cursor = conn.cursor()
        cursor.execute(sql_insert, (temperature, humidity, device))
        conn.commit()
        print(f"New record created successfully with ID: {cursor.lastrowid}")
        return cursor.lastrowid
    except sqlite3.Error as e:
        print(f"Error inserting data: {e}")
        return None

def select_all_readings(conn):
    """Query all DHT readings in the dhtreadings table"""
    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM dhtreadings ORDER BY currentdate DESC, currenttime DESC")

        rows = cursor.fetchall()
        print("\nAll DHT readings:")
        print("ID | Temperature | Humidity | Date | Time | Device")
        print("-" * 60)
        for row in rows:
            print(f"{row[0]} | {row[1]} | {row[2]} | {row[3]} | {row[4]} | {row[5]}")
    except sqlite3.Error as e:
        print(f"Error fetching data: {e}")

def main():
    # Create a database connection
    database = "dht_readings.db"
    conn = create_connection(database)

    # Create table
    if conn is not None:
        create_table(conn)

        # Insert a sample reading as specified in your requirement
        insert_dht_reading(conn, 22.5, 48.7, "manual")

        # Insert some additional sample data for testing
        insert_dht_reading(conn, 23.1, 45.2, "sensor1")
        insert_dht_reading(conn, 21.8, 50.3, "sensor2")

        # Display all readings
        select_all_readings(conn)

        # Close the connection
        conn.close()
        print("\nDatabase connection closed.")
    else:
        print("Error! Cannot create database connection.")

if __name__ == '__main__':
    main()

```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_python.png" style={{width:1000, height:'auto'}}/></div>

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
