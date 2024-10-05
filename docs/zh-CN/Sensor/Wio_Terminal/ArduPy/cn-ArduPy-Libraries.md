---
description: 如何编写 ArduPy 库
title: 如何编写 ArduPy 库
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/ArduPy-Libraries
last_update:
  date: 3/04/2024
  author: 金菊
---

# 如何编写 ArduPy 库

![](https://files.seeedstudio.com/ardupy/ardupy_logo.png)

在这个wiki中，我们将介绍如何从头开始编写一个ArduPy库，并使用一个示例完整地介绍工作流程。通过阅读本文，您将了解如何编写一个ArduPy库并将其应用到您的ArduPy项目中！您可以将您喜欢的Arduino库转换为MicroPython格式，并在ArduPy下使用它！

这需要一些软件编程知识，但是按照一些关键点进行操作应该很简单。

## 需要的硬件
  
- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 入门

让我们通过一个示例来帮助您更好地理解

### 1. Arduino 库

首先，要编写一个ArduPy库，您需要找到已经以 **Arduino 库** 形式编写的库。这应该很容易，因为我们的大多数模块都支持Arduino，并且在我们的[github](https://github.com/Seeed-Studio)上有一个Arduino库。只需在github上搜索模块并找到存储库即可。

在本wiki中，我将以 [**Grove - Temp&Humi&Barometer Sensor (BME280)**](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) 为例，并提供 [**Grove-BME280 Arduino 库**](https://github.com/Seeed-Studio/Grove_BME280) 。

!!!注
        首先要做的是最好检查该库在Arduino上是否工作，以免后面出现问题。只需上传其中一个示例以查看是否有任何错误。

### 2. ArduPy 库结构

让我们首先介绍ArduPy库的结构，以便了解所需的内容!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/structure.png" /></div>


这是 [ Grove-BME280的ArduPy库](https://github.com/Seeed-Studio/seeed-ardupy-bme280) 一个ArduPy库包括以下内容:

- **`.gitigore`** - 指定要在git中忽略的意图不跟踪的文件

- **`.travis.yml`** - 我们的CI测试文件，可以忽略不

- **`LICENSE`** - 库的许可证y

- **`README.md`** - 说明文

- **`library.json`** - ArduPy库的json文件

- **`mod_ardupy_bme280.c`** - 将C代码转换为MicroPython的核心代码

- **`wrapper_ardupy_bme280.cpp`** - 代码的包装器，因此，重要的文件只有 **`library.json`**, **`mod_ardupy_bme280.c`** 和 **`wrapper_ardupy_bme280.cpp`** ，其他文件在编写自己的ArduPy库时不需要。

!!!注
        虽然不是必需的，但最好包含上述所有文件（许可证和README使其更加用户友好）

### 3. 编写 `library.json`

我们首先从编写 [`library.json`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/library.json) 开始。这是定位依赖库的json文件。对于Grove-BME280，它的内容如下所示 :

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

其中， `name` 是ArduPy库的名称，`repository`下的 `url` 是库的URL。这个  `url` 用于ArduPy-aip进行搜索。你可以替换为你自己的GitHub仓库。

在 `dependencies`下，这是依赖的库（Arduino库）:

- `name` 是以后使用的Arduino库的名称，您也可以使用格式 **`Seeed_Arduino_MODULE-NAME`**。
- `url` 是依赖的Arduino库的URL。

### 4. 编写 `wrapper_ardupy_MODULE.cpp`

这是将 `c` 代码转换为 `MicroPython` 代码的包装器。让我们以 [`wrapper_ardupy_bme280.cpp`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp) 为例进行说明。

首先，需要包含依赖库，类似于以下内容:

```cpp
#include "Seeed_Arduino_BME280/Seeed_BME280.h"
```

!!!注意
    请确保名称匹配。

包含共享绑定:

```cpp
extern "C"{
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "shared-bindings/util.h"
}
```

使用以下格式初始化模块:

```cpp
#define bme280 (*(BME280*)self->module)
void * operator new(size_t, void *);
```

其中， `bme280` 和 `BME280` 将替换为您的模块名称。

接下来有一点复杂。按照相同的格式，从[Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h)映射函数 。

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

其中， `common_hal_bme280_construct` 是用于创建对象的初始化函数，格式如下：

```cpp
self->module = new (m_new_obj(BME280)) BME280();
bme280.init()
```

将 `BME280` 替换为您的模块。使用`bme280.init()` 初始化模块，该函数来自 [这里](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L47).

对于函数, 它只是从Arduino端调用，格式如下所示:

```cpp
float common_hal_bme280_get_temperature(abstract_module_t *self){
    return bme280.getTemperature();
}
```

`getTemperature()` 来自 [这里](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L48).

你应该能够看到这里的模式，你只需要从 [Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L45) 映射函数即可。

#### 带有参数的函数

- 如果您的 **模块具有带有参数的函数**,请阅读以下内容。

让我们以 [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/blob/master/src/LIS3DHTR.h#L208)为例，其中有一个带有一个参数的函数。这个函数将转换为 [seeed-ardupy-lis3dhtr](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/wrapper_ardupy_lis3dhtr.cpp#L83)中的这样一个函数。

从这个:

```cpp
void setHighSolution(bool enable);
```

转换为:

```cpp
void common_hal_lis3dhtr_setHighSolution(abstract_module_t *self, bool enable)
{
    lis.setHighSolution(enable);
}
```

你应该能够看到这里的模式。这里提供了一个带有两个参数的[示例](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/wrapper_my9221.cpp#L58) 。

### 5. 编写 `mod_ardupy_MODULE.c`

一旦包装器完成，让我们开始核心部分，以[`mod_ardupy_bme280.c`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/mod_ardupy_bme280.c) 为例。

首先，也要包含共享绑定:

```cpp
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "py/obj.h"
#include "shared-bindings/util.h"
```

声明来自 [wrapper](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp)中先前定义的函数:

```cpp
void common_hal_bme280_construct(abstract_module_t *self);
void common_hal_bme280_deinit(abstract_module_t *self);
float common_hal_bme280_get_temperature(abstract_module_t *self);
uint32_t common_hal_bme280_get_pressure(abstract_module_t *self);
uint32_t common_hal_bme280_get_humidity(abstract_module_t *self);
extern const mp_obj_type_t grove_bme280_type;
```

初始化模块:

```cpp
m_generic_make(bme280) {
    abstract_module_t * self = new_abstruct_module(type);
    mp_arg_check_num(n_args, n_kw, 0, 0, false);
    common_hal_bme280_construct(self);
    return self;
}
```

在这里，您可以按照相同的格式进行操作，并替换为您的函数和模块名称。

接下来是对象属性，您应该按照以下格式编写:

```cpp
void bme280_obj_attr(mp_obj_t self_in, qstr attr, mp_obj_t *dest){
    abstract_module_t *self = (abstract_module_t *)self_in;
    uint32_t value;
    float number;
    if (dest[0] == MP_OBJ_NULL) {
        if (attr == MP_QSTR_temperature) {
            number = common_hal_bme280_get_temperature(self); // Call previously defined unction
            dest[0] = mp_obj_new_float(number); // This the MicroPython float type, should match with the data type
            return;
        }
        else if (attr == MP_QSTR_pressure) {
            value = common_hal_bme280_get_pressure(self); // Call previously defined unction
            dest[0] = mp_obj_new_int(value); // This the MicroPython int type, should match with the data type
            return;
        }
        else if (attr == MP_QSTR_humidity) {
            value = common_hal_bme280_get_humidity(self); // Call previously defined unction
            dest[0] = mp_obj_new_int(value);
            return;
        }
    }
    generic_method_lookup(self_in, attr, dest);
}
```

您可以看到它只需按照以下方式返回函数:

```cpp
if (attr == MP_QSTR_temperature) {
    number = common_hal_bme280_get_temperature(self); // Call previously defined unction
    dest[0] = mp_obj_new_float(number); // This the MicroPython float type, should match with the data type
    return;
}
```

这基本上转换为使用中的 `.temperature` 方法 (例如 `MP_QSTR_[Function-name]`)。您应该也能够看到这里的模式。

!!!注
        `dest[0]` 的数据类型应该匹配。 有 `mp_obj_new_float`, `mp_obj_new_int`, `mp_obj_new_bool`, `mp_obj_new_str` 等。


定义查找表:

```cpp
const mp_rom_map_elem_t bme280_locals_dict_table[] = {
    // instance methods
    { MP_ROM_QSTR(MP_QSTR_deinit),    MP_ROM_PTR(&bme280_deinit_obj) },
    { MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj) },
    { MP_ROM_QSTR(MP_QSTR___exit__),  MP_ROM_PTR(&bme280_obj___exit___obj) },
};

MP_DEFINE_CONST_DICT(bme280_locals_dict, bme280_locals_dict_table);
```

定义初始模块类型:

```cpp
const mp_obj_type_t grove_bme280_type = {
    {&mp_type_type},
    .name = MP_QSTR_grove_bme280,
    .make_new = bme280_make_new,
    .locals_dict = (mp_obj_t)&bme280_locals_dict,
    .attr = bme280_obj_attr,
};
```

这可能一开始看起来有些棘手，但实际上只涉及替换模块名称和很少的编。

#### 接受参数的函数

- 如果您的， **模块有接受参数的函数**, 请阅读以下内容。

我们将继续使用之前的示例来进行演示。下面是在`mod_ardupy_[MODULE].c`中实现该函数的代码。按照以下格式映射函数:

- 对于数 [接受1个参数](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L97)的函数:

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

- 对于 [接受2个参数](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/mod_ardupy_my9221.c#L85) 的函数(**这个示例代码并不是针对lis3dhtr的，只是用来演示的**):

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
    在这里，数据类型应该匹配，例如`mp_obj_is_true`, `mp_obj_get_int`, `mp_obj_get_float`, `mp_obj_get_str` 等。

记得将函数添加到 [look-up table](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L169)中,格式如下:

```cpp
const mp_rom_map_elem_t lis3dhtr_locals_dict_table[] = {
    // instance methods
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

### 6. 构建固件

现在，一旦您编写了ArduPy库，您将需要构建它，并在构建过程中调试任何错误！您现在可以将整个项目的代码上传到您的GitHub存储库中，例如: https://github.com/Seeed-Studio/seeed-ardupy-bme280.

- 下载并安装 `ardupy-aip` 工具集以构建ArduPy库，按照以下 [**教程**](https://wiki.seeedstudio.com/ArduPy/#install-aip-with-macos) 操作。

安装了 `ardupy-aip` 之后，可以运行以下命令构建ArduPy固件:

```sh
aip install [Your ArduPy library url]
# For example: aip install https://github.com/Seeed-Studio/seeed-ardupy-bme280
```

使用固件构建ArduPy库:

```sh
aip build
```

如果一切顺利，您将看到以下屏幕，表示ArduPy库没有错误!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/build.png" /></div>


## 测试库

一旦构建成功，您可以使用以下命令将固件烧录到设备并测试库的功能:

```sh
aip flash
```

**注:** 确保设备在连接到计算机之前已连接。

烧录固件后，可以使用shell函数进入REPL模式:

```cpp
aip shell -c "repl"
```

- 使用以下格式导入编写的模块:

```py
from arduino import grove_bme280
```

其中`grove_bme280` 将被替换为您的库模块名称。

- 初始化库并调用函数:

```py
bme280 = grove_bme280()
print ("Temperature: ", bme280.temperature, "C")
print ("Humidity: ", bme280.humidity, "%")
print ("Pressure: ", bme280.pressure, "Pa")
```

如果您已经成功进行到这一步，那么您已经成功编写了一个ArduPy库！这使您能够将任何Arduino库转换为ArduPy库。

!!!注
        如果您的库在任何时候停止响应或无法返回结果，可能是代码中存在一些错误。请仔细检查。

## 资源

已经有许多ArduPy库可供使用，您可以轻松安装和构建您的ArduPy固件。您还可以将它们用作编写自己的ArduPy库的模板！

- [可用ArduPy库](https://github.com/Seeed-Studio?q=ardupy&type=&language=)

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们将为您提供各种支持，以确保您与我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
