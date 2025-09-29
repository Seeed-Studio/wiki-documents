---
description: ArduPyライブラリの書き方
title: ArduPyライブラリの書き方
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/ArduPy-Libraries
last_update:
  date: 05/15/2025
  author: Matthew
---


# ArduPyライブラリの書き方

![](https://files.seeedstudio.com/ardupy/ardupy_logo.png)

このWikiでは、ゼロからArduPyライブラリを書く方法を紹介し、例を用いてワークフローを完全に説明します。これを終えると、ArduPyライブラリを書く方法とそれをArduPyプロジェクトに実装する方法を理解できるようになります！お気に入りのArduinoライブラリをMicroPython形式に変換し、ArduPyで使用することができます。

これにはある程度のソフトウェアプログラミングの知識が必要ですが、いくつかの重要なポイントを追うことで簡単に理解できるはずです。

## 必要なハードウェア
  
- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 始めましょう

例を通じて説明し、理解を深めましょう！

### 1. Arduinoライブラリ

まず最初に、ArduPyライブラリを書くには、すでに**Arduinoライブラリ**形式で書かれているライブラリを見つける必要があります。これは非常に簡単で、ほとんどのモジュールがArduinoをサポートしており、[github](https://github.com/Seeed-Studio)にArduinoライブラリがあります。githubでモジュールを検索し、リポジトリを見つけてください。

このWikiでは、[**Grove - Temp&Humi&Barometer Sensor (BME280)**](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)を例として取り上げ、こちらが[**Grove-BME280 Arduinoライブラリ**](https://github.com/Seeed-Studio/Grove_BME280)です。

!!!注意
        最初にArduinoでライブラリが動作することを確認するのが良いです。後で問題が発生しないように、例を1つアップロードしてエラーがないか確認してください。

### 2. ArduPyライブラリ構造

まず、ArduPyライブラリの構造を確認し、必要なものを理解しましょう！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/structure.png" /></div>

こちらは[Grove-BME280用のArduPyライブラリ](https://github.com/Seeed-Studio/seeed-ardupy-bme280)で、ArduPyライブラリが以下を含んでいます：

- **`.gitignore`** - gitで意図的に追跡しないファイルを指定
- **`.travis.yml`** - CIテストファイル（無視しても構いません）
- **`LICENSE`** - ライブラリのライセンス
- **`README.md`** - READMEドキュメント
- **`library.json`** - ライブラリ用のArduPy JSONファイル
- **`mod_ardupy_bme280.c`** - CコードをMicroPythonに変換するコアコード
- **`wrapper_ardupy_bme280.cpp`** - コードのラッパー

したがって、重要なファイルは**`library.json`**、**`mod_ardupy_bme280.c`**、**`wrapper_ardupy_bme280.cpp`**のみで、他のファイルは自分のArduPyライブラリを書く場合には必要ありません。

!!!注意
        必須ではありませんが、上記のすべてのファイルを含めると（LICENSEやREADMEがあるとユーザーフレンドリーになります）、より良いです。

### 3. `library.json`を書く

まず[`library.json`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/library.json)を書き始めましょう。このJSONファイルは依存ライブラリを指定するためのものです。Grove-BME280の場合、以下のようになります：

```json
{
    "name": "Seeed ArduPy BME280 ",
    "version": "1.0.0",
    "repository": {
        "type": "git",
        "url": "https://github.com/Seeed-Studio/seeed-ardupy-bme280.git"
    },
    "dependencies": [{
        "name": "Seeed_Arduino_BME280",
        "url": "https://github.com/Seeed-Studio/Grove_BME280.git"
    }]
}
```

ここで`name`はArduPyライブラリの名前で、`repository`内の`url`はライブラリのURLです。この`url`はArduPy-aipで検索されます。自分のgithubリポジトリに置き換えてください。

`dependencies`では、依存ライブラリ（Arduinoライブラリ）を指定します：

- `name`は後で使用するArduinoライブラリの名前で、**`Seeed_Arduino_MODULE-NAME`**形式を使用することもできます。
- `url`は依存するArduinoライブラリのURLです。

### 4. `wrapper_ardupy_MODULE.cpp`を書く

これは`c`を`MicroPython`コードに変換するためのラッパーです。[`wrapper_ardupy_bme280.cpp`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp)を例として確認しましょう。

まず、依存ライブラリをインクルードする必要があります。以下のようになります：

```cpp
#include "Seeed_Arduino_BME280/Seeed_BME280.h"
```

!!!注意
    名前が一致していることを確認してください。

共有バインディングをインクルードします：

```cpp
extern "C"{
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "shared-bindings/util.h"
}
```

以下の形式でモジュールを初期化します：

```cpp
#define bme280 (*(BME280*)self->module)
void * operator new(size_t, void *);
```

ここで`bme280`と`BME280`はモジュール名に置き換えます。

次に少し複雑になります。[Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h)から関数をマッピングするために、以下の形式に従います：

```cpp
extern "C" {
    void common_hal_bme280_construct(abstract_module_t *self){
        self->module = new (m_new_obj(BME280)) BME280();
        bme280.init();
    }
    void common_hal_bme280_deinit(abstract_module_t *self){
        bme280.~BME280();
    }
    float common_hal_bme280_get_temperature(abstract_module_t *self){
        return bme280.getTemperature();
    }
    uint32_t common_hal_bme280_get_pressure(abstract_module_t *self){
        return bme280.getPressure();
    }
    uint32_t common_hal_bme280_get_humidity(abstract_module_t *self){
        return bme280.getHumidity();
    }
}
```

ここで`common_hal_bme280_construct`はオブジェクトを作成する初期化関数で、以下の形式を持ちます：

```cpp
self->module = new (m_new_obj(BME280)) BME280();
bme280.init()
```

`BME280`をモジュール名に置き換えます。[こちら](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L47)から`bme280.init()`を使用してモジュールを初期化します。

関数については、Arduino側から単純に呼び出されます。以下のようになります：

```cpp
float common_hal_bme280_get_temperature(abstract_module_t *self){
    return bme280.getTemperature();
}
```

`getTemperature()`は[こちら](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L48)から来ています。

上記の形式に従って、[Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L45)の関数を単純にマッピングするパターンが見て取れるはずです。

#### パラメータを取る関数

- **モジュールにパラメータを取る関数がある場合**は、こちらをよく読んでください。

ここでは、1つのパラメータを取る[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/blob/master/src/LIS3DHTR.h#L208)の例を取り上げます。この関数は[seeed-ardupy-lis3dhtr](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/wrapper_ardupy_lis3dhtr.cpp#L83)で以下のように変換されます。

元のコード:

```cpp
void setHighSolution(bool enable);
```

変換後:

```cpp
void common_hal_lis3dhtr_setHighSolution(abstract_module_t *self, bool enable)
{
    lis.setHighSolution(enable);
}
```

ここでもパターンが見て取れるはずです。2つのパラメータを取る[例](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/wrapper_my9221.cpp#L58)も提供されています。

### 5. `mod_ardupy_MODULE.c`の作成

ラッパーが完成したら、次はコア部分に取り掛かります。[`mod_ardupy_bme280.c`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/mod_ardupy_bme280.c)を例として使用します。

まず、共有バインディングをインクルードします:

```cpp
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "py/obj.h"
#include "shared-bindings/util.h"
```

[ラッパー](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp)で定義した関数を宣言します:

```cpp
void common_hal_bme280_construct(abstract_module_t *self);
void common_hal_bme280_deinit(abstract_module_t *self);
float common_hal_bme280_get_temperature(abstract_module_t *self);
uint32_t common_hal_bme280_get_pressure(abstract_module_t *self);
uint32_t common_hal_bme280_get_humidity(abstract_module_t *self);
extern const mp_obj_type_t grove_bme280_type;
```

モジュールを初期化します:

```cpp
m_generic_make(bme280) {
    abstract_module_t * self = new_abstruct_module(type);
    mp_arg_check_num(n_args, n_kw, 0, 0, false);
    common_hal_bme280_construct(self);
    return self;
}
```

ここでは同じ形式に従い、関数やモジュール名を置き換えることができます。

次にオブジェクト属性を記述します。以下の形式で記述してください:

```cpp
void bme280_obj_attr(mp_obj_t self_in, qstr attr, mp_obj_t *dest){
    abstract_module_t *self = (abstract_module_t *)self_in;
    uint32_t value;
    float number;
    if (dest[0] == MP_OBJ_NULL) {
        if (attr == MP_QSTR_temperature) {
            number = common_hal_bme280_get_temperature(self); // 以前に定義した関数を呼び出す
            dest[0] = mp_obj_new_float(number); // MicroPythonのfloat型に一致する必要がある
            return;
        }
        else if (attr == MP_QSTR_pressure) {
            value = common_hal_bme280_get_pressure(self); // 以前に定義した関数を呼び出す
            dest[0] = mp_obj_new_int(value); // MicroPythonのint型に一致する必要がある
            return;
        }
        else if (attr == MP_QSTR_humidity) {
            value = common_hal_bme280_get_humidity(self); // 以前に定義した関数を呼び出す
            dest[0] = mp_obj_new_int(value);
            return;
        }
    }
    generic_method_lookup(self_in, attr, dest);
}
```

ここでは以下のように関数を返すだけです:

```cpp
if (attr == MP_QSTR_temperature) {
    number = common_hal_bme280_get_temperature(self); // 以前に定義した関数を呼び出す
    dest[0] = mp_obj_new_float(number); // MicroPythonのfloat型に一致する必要がある
    return;
}
```

これにより、使用時に`.temperature`メソッドに変換されます（例: `MP_QSTR_[Function-name]`）。ここでもパターンが見て取れるはずです。

!!!注意
        `dest[0]`のデータ型はここで一致する必要があります。`mp_obj_new_float`、`mp_obj_new_int`、`mp_obj_new_bool`、`mp_obj_new_str`などがあります。

ルックアップテーブルを定義します:

```cpp
const mp_rom_map_elem_t bme280_locals_dict_table[] = {
    // インスタンスメソッド
    { MP_ROM_QSTR(MP_QSTR_deinit),    MP_ROM_PTR(&bme280_deinit_obj) },
    { MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj) },
    { MP_ROM_QSTR(MP_QSTR___exit__),  MP_ROM_PTR(&bme280_obj___exit___obj) },
};

MP_DEFINE_CONST_DICT(bme280_locals_dict, bme280_locals_dict_table);
```

初期モジュールタイプを定義します:

```cpp
const mp_obj_type_t grove_bme280_type = {
    {&mp_type_type},
    .name = MP_QSTR_grove_bme280,
    .make_new = bme280_make_new,
    .locals_dict = (mp_obj_t)&bme280_locals_dict,
    .attr = bme280_obj_attr,
};
```

最初は難しく見えるかもしれませんが、実際にはモジュール名を置き換えるだけで、プログラミングはほとんどありません。

#### パラメータを取る関数

- **モジュールにパラメータを取る関数がある場合**は、こちらをよく読んでください。

前述の例を使用して説明します。以下は`mod_ardupy_[MODULE].c`で関数を実装するコードです。以下の形式に従って関数をマッピングしてください:

- [1つのパラメータを取る関数](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L97):

```cpp
mp_obj_t lis3dhtr_setHighSolution(size_t n_args, const mp_obj_t *pos_args, mp_map_t *kw_args)
{
    abstract_module_t *self = (abstract_module_t *)pos_args[0];
    bool enable = mp_obj_is_true(pos_args[1]);
    common_hal_lis3dhtr_setHighSolution(self, enable);
    return mp_const_none;
}
MP_DEFINE_CONST_FUN_OBJ_KW(lis3dhtr_setHighSolution_obj, 1, lis3dhtr_setHighSolution);
```

- [2つのパラメータを取る関数](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/mod_ardupy_my9221.c#L85)（**これはlis3dhtrのコードではなく、説明のための例です**）:

```cpp
mp_obj_t led_bar_set_brightness(size_t n_args, const mp_obj_t *pos_args, mp_map_t *kw_args){
    abstract_module_t * self = (abstract_module_t *)(pos_args[0]);
    uint32_t led_no = mp_obj_get_int(pos_args[1]);
    float value = mp_obj_get_float(pos_args[2]);
    common_hal_led_bar_set_brightness(self, led_no, value);
    return mp_const_none;
}

MP_DEFINE_CONST_FUN_OBJ_KW(led_bar_set_brightness_obj, 2, led_bar_set_brightness);
```

!!!注意
    同様に、データ型は一致する必要があります。`mp_obj_is_true`、`mp_obj_get_int`、`mp_obj_get_float`、`mp_obj_get_str`などがあります。

[ルックアップテーブル](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L169)に関数を追加することを忘れないでください。このテーブルは以下のようになります：

```cpp
const mp_rom_map_elem_t lis3dhtr_locals_dict_table[] = {
    // インスタンスメソッド
    {MP_ROM_QSTR(MP_QSTR_deinit), MP_ROM_PTR(&lis3dhtr_deinit_obj)},
    {MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj)},
    {MP_ROM_QSTR(MP_QSTR___exit__), MP_ROM_PTR(&lis3dhtr_obj___exit___obj)},
    {MP_ROM_QSTR(MP_QSTR_available), MP_ROM_PTR(&lis3dhtr_available_obj)},
    {MP_ROM_QSTR(MP_QSTR_setPowerMode), MP_ROM_PTR(&lis3dhtr_setPowerMode_obj)},
    {MP_ROM_QSTR(MP_QSTR_setFullScaleRange), MP_ROM_PTR(&lis3dhtr_setFullScaleRange_obj)},
    {MP_ROM_QSTR(MP_QSTR_setOutputDataRate), MP_ROM_PTR(&lis3dhtr_setOutputDataRate_obj)},
    {MP_ROM_QSTR(MP_QSTR_setHighSolution), MP_ROM_PTR(&lis3dhtr_setHighSolution_obj)},
    {MP_ROM_QSTR(MP_QSTR_openTemp), MP_ROM_PTR(&lis3dhtr_openTemp_obj)},
    {MP_ROM_QSTR(MP_QSTR_closeTemp), MP_ROM_PTR(&lis3dhtr_closeTemp_obj)},
};
```

### 6. ファームウェアのビルド

ArduPyライブラリを書き終えたら、それをビルドし、ビルド中にエラーが発生した場合はデバッグする必要があります！プロジェクト全体のスケッチをGitHubリポジトリにアップロードできます。例えば：https://github.com/Seeed-Studio/seeed-ardupy-bme280。

- `ardupy-aip`をダウンロードしてインストールします。このツールセットを使用してArduPyライブラリをビルドします。[**チュートリアル**](https://wiki.seeedstudio.com/ja/ArduPy/#install-aip-with-macos)に従ってください。

`ardupy-aip`をインストールしたら、以下のコマンドを実行してArduPyファームウェアをビルドできます：

```sh
aip install [Your ArduPy library url]
# 例: aip install https://github.com/Seeed-Studio/seeed-ardupy-bme280
```

ファームウェアとともにArduPyライブラリをビルドします：

```sh
aip build
```

すべてが正常に進むと、以下のような画面が表示され、ArduPyライブラリにエラーがないことを意味します！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/build.png" /></div>


## ライブラリのテスト

ビルドが成功したら、以下のコマンドを使用してファームウェアをデバイスにフラッシュし、ライブラリをテストできます：

```sh
aip flash
```

**注意:** 事前にデバイスがPCに接続されていることを確認してください。

フラッシュ後、以下のシェル機能を使用してREPLモードに入ることができます：

```cpp
aip shell -c "repl"
```

- 以下の形式で作成したモジュールをインポートします：

```py
from arduino import grove_bme280
```

ここで、`grove_bme280`はライブラリモジュール名に置き換えられます。

- ライブラリを初期化し、以下のように関数を呼び出します：

```py
bme280 = grove_bme280()
print ("Temperature: ", bme280.temperature, "C")
print ("Humidity: ", bme280.humidity, "%")
print ("Pressure: ", bme280.pressure, "Pa")
```

ここまで進めば、ArduPyライブラリを正常に作成できたことになります！これにより、任意のArduinoライブラリをArduPyライブラリに変換することができます。

!!!注意
        ライブラリがどこかで停止したり、結果が返ってこない場合、コードにバグがある可能性があります。慎重に確認してください。

## リソース

すでに利用可能な多数の ArduPy ライブラリがあります。これらを簡単にインストールして、ArduPy ファームウェアを構築することができます。また、これらをテンプレートとして使用して、独自の ArduPy ライブラリを作成することも可能です！

- [利用可能な ArduPy ライブラリ](https://github.com/Seeed-Studio?q=ardupy&type=&language=)

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>