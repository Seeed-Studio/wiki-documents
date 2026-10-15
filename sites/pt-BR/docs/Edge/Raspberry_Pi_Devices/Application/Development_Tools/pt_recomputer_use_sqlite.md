---
description: Este wiki mostrará como usar SQlite no recomputer
title: Usar SQlite no reComputer
keywords:
  - Edge
  - RasberryPi 5
  - SQlite
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/recomputer_use_docker.webp
slug: /use_sqlite_on_recomputer
last_update:
  date: 09/25/2025
  author: Jiahao
no_comments: false
createdAt: '2025-09-26'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/use_sqlite_on_recomputer/
---

# Usar SQLite no reComputer

## Introdução

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite.jpg" style={{width:300, height:'auto'}}/></div>

Este wiki explica como usar o [SQlite](https://sqlite.org/) no reComputer box. SQLite é um sistema de gerenciamento de banco de dados relacional incorporado e leve, amplamente utilizado em dispositivos móveis, aplicativos de desktop e sistemas embarcados. Ele não requer um processo de servidor separado; o banco de dados é armazenado diretamente em um único arquivo comum em disco. SQLite é simples de usar e oferece excelente desempenho. Ele suporta a sintaxe SQL padrão e é adequado para necessidades de armazenamento de dados de pequeno a médio porte. Devido aos seus recursos de zero configuração e fácil implantação, o SQLite se tornou o mecanismo de banco de dados preferido para muitos projetos.

## Preparar hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparar software

### Atualizar o sistema

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Instalar SQlite

```bash
sudo apt-get install sqlite3
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_install.png" style={{width:1000, height:'auto'}}/></div>

### Criar banco de dados

```bash
sqlite3 sensordata.db
```

Com o comando `.help` você pode ser rapidamente lembrado de todos os comandos suportados e de seu respectivo uso.

```bash
sqlite> .help
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_help.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, use `.quit` para sair do shell do SQlite.

```bash
sqlite> .quit
```

## Usando SQL

### Criar tabela em SQL

```bash
sqlite3 sensordata.db
```
Em seguida, use um comando como abaixo para criar uma nova tabela.

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

### Verificar a tabela

Você pode usar o seguinte comando para visualizar a tabela criada.

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

### Inserir em SQL

Para inserir novas leituras de temperatura e umidade no banco de dados, você pode fazer algo como isto:

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.4, 48, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

### Selecionar em SQL

Para acessar os dados armazenados no banco de dados, você usa a instrução SQL SELECT:

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
```
Até agora, você tem apenas 1 leitura inserida no banco de dados. Você pode inserir uma nova leitura da seguinte forma:

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.5, 48.7, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

E quando você usa SELECT para os dados armazenados na tabela, ele retorna 2 leituras:

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
2|22.5|48.7|2025-09-26|02:06:35|manual
```

### Remover em SQL

Se você quiser excluir completamente a tabela do seu banco de dados, pode usar o comando DROP TABLE.

>NOTE: o próximo comando excluirá completamente a tabela dhtreadings:

```bash
sqlite> DROP TABLE dhtreadings;
```
Agora, se você digitar o comando ‘.tables‘:

```bash
sqlite> .tables
```
Ele não retorna nada, porque sua tabela foi completamente excluída.

### Usar Python com SQLite

Usar Python para interagir com SQLite como abaixo:


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

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
