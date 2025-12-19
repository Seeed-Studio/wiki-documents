---
description: This wiki will show you how to use SQlite on recomputer
title: Use SQlite on reComputer
keywords:
  - Edge
  - RasberryPi 5
  - SQlite
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/docker/recomputer_use_docker.webp
slug: /use_sqlite_on_recomputer
last_update:
  date: 09/25/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Use SQLite on reComputer

## Introduction

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite.jpg" style={{width:300, height:'auto'}}/></div>

This wiki explains how to use the [SQlite](https://sqlite.org/) on reComputer box. SQLite is a lightweight, embedded relational database management system widely used in mobile devices, desktop applications, and embedded systems. It does not require a separate server process; the database is stored directly in a single ordinary disk file. SQLite is simple to use and offers excellent performance. It supports standard SQL syntax and is suitable for small to medium-sized data storage needs. Due to its zero-configuration and easy deployment features, SQLite has become the preferred database engine for many projects.

## Prepare Hardware

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Prepare software

### update the system

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Install SQlite

```bash
sudo apt-get install sqlite3
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_install.png" style={{width:1000, height:'auto'}}/></div>

### Creat database

```bash
sqlite3 sensordata.db
```

With the `.help` command you can be quickly reminded of all the supported commands and their respective usage.

```bash
sqlite> .help
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_help.png" style={{width:1000, height:'auto'}}/></div>

Then use `.quit` to quit SQlite shell.

```bash
sqlite> .quit
```

## Using SQL

### SQL creat table

```bash
sqlite3 sensordata.db
```
Then use command like below to creat a new table.

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

### Check the table

You can use the following command to view the created table.

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

### SQL insert

To insert new temperature and humidity readings in the database, you could do something like this:

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.4, 48, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

### SQL select

To access the data stored in the database, you use the SELECT SQL statement:

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
```
So far, you only have 1 reading inserted in the database. You can insert a new reading as follows:

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.5, 48.7, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

And when you SELECT the data stored in the table, it returns 2 readings:

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
2|22.5|48.7|2025-09-26|02:06:35|manual
```

### SQL drop

If you want to completely delete the table from your database, you can use the DROP TABLE command.

>NOTE: the next command will completely delete the dhtreadings table:

```bash
sqlite> DROP TABLE dhtreadings;
```
Now, if you type the ‘.tables‘ command:

```bash
sqlite> .tables
```
It doesn’t return anything, because your table was completely deleted.

### Use Python with SQLite

Using Python to interact with SQLite like below:


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

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
