---
description: このwikiでは、reComputer上でSQliteを使用する方法を説明します
title: reComputer上でSQliteを使用する
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
updatedAt: '2025-12-17'
url: https://wiki.seeedstudio.com/ja/use_sqlite_on_recomputer/
---

# reComputer上でSQLiteを使用する

## はじめに

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite.jpg" style={{width:300, height:'auto'}}/></div>

このwikiでは、reComputerボックス上で[SQlite](https://sqlite.org/)を使用する方法について説明します。SQLiteは軽量で組み込み型のリレーショナルデータベース管理システムで、モバイルデバイス、デスクトップアプリケーション、組み込みシステムで広く使用されています。別のサーバープロセスを必要とせず、データベースは単一の通常のディスクファイルに直接保存されます。SQLiteは使いやすく、優れたパフォーマンスを提供します。標準的なSQL構文をサポートし、小規模から中規模のデータストレージニーズに適しています。ゼロ設定と簡単なデプロイメント機能により、SQLiteは多くのプロジェクトで好まれるデータベースエンジンとなっています。

## ハードウェアの準備

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ソフトウェアの準備

### システムの更新

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### SQliteのインストール

```bash
sudo apt-get install sqlite3
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_install.png" style={{width:1000, height:'auto'}}/></div>

### データベースの作成

```bash
sqlite3 sensordata.db
```

`.help`コマンドを使用すると、サポートされているすべてのコマンドとそれぞれの使用方法を素早く確認できます。

```bash
sqlite> .help
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/sqlite/sqlite_help.png" style={{width:1000, height:'auto'}}/></div>

次に`.quit`を使用してSQliteシェルを終了します。

```bash
sqlite> .quit
```

## SQLの使用

### SQLテーブル作成

```bash
sqlite3 sensordata.db
```
次に、以下のようなコマンドを使用して新しいテーブルを作成します。

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

### テーブルの確認

以下のコマンドを使用して、作成されたテーブルを表示できます。

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

### SQL挿入

データベースに新しい温度と湿度の読み取り値を挿入するには、次のようにします：

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.4, 48, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

### SQL選択

データベースに保存されたデータにアクセスするには、SELECT SQL文を使用します：

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
```
これまでのところ、データベースに挿入された読み取り値は1つだけです。次のように新しい読み取り値を挿入できます：

```bash
sqlite> BEGIN;
sqlite> INSERT INTO dhtreadings(temperature, humidity, currentdate, currenttime, device) values(22.5, 48.7, date('now'), time('now'), "manual");
sqlite> COMMIT;
```

そして、テーブルに保存されたデータをSELECTすると、2つの読み取り値が返されます：

```bash
sqlite> SELECT * FROM dhtreadings;
1|22.4|48|2025-09-26|01:23:37|manual
2|22.5|48.7|2025-09-26|02:06:35|manual
```

### SQL削除

データベースからテーブルを完全に削除したい場合は、DROP TABLEコマンドを使用できます。

>注意：次のコマンドはdhtreadingsテーブルを完全に削除します：

```bash
sqlite> DROP TABLE dhtreadings;
```
今、'.tables'コマンドを入力すると：

```bash
sqlite> .tables
```
テーブルが完全に削除されたため、何も返されません。

### PythonでSQLiteを使用する

PythonでSQLiteと対話する方法は以下の通りです：


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

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
