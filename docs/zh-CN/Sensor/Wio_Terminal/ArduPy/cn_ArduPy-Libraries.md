---
description: 如何编写 ArduPy 库
title: 如何编写 ArduPy 库
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/ArduPy-Libraries
last_update:
  date: 11/20/2022
  author: Matthew
---

# 如何编写 ArduPy 库

![](https://files.seeedstudio.com/ardupy/ardupy_logo.png)

在这个教程中，我们将介绍如何从零开始编写一个 ArduPy 库，并使用一个示例来完整演示整个工作流程。通过学习本教程，您将了解如何编写 ArduPy 库并将其实现到您的 ArduPy 项目中！您可以将您喜欢的 Arduino 库转换为 MicroPython 形式，并在 ArduPy 下使用它！

这需要一些软件编程知识，但通过一些关键要点应该很容易理解。

## 所需硬件
  
- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## 开始使用

让我们通过一个示例来帮助您更好地理解！

### 1. Arduino 库

首先，要编写 ArduPy 库，您需要找到已经以 **Arduino 库** 形式编写的库。这应该很容易，因为我们的大多数模块都支持 Arduino，并且在我们的 [github](https://github.com/Seeed-Studio) 上都有 Arduino 库。只需在 github 上搜索模块并找到相应的仓库。

在这个教程中，我将以 [**Grove - 温湿度气压传感器 (BME280)**](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) 为例，这里是 [**Grove-BME280 Arduino 库**](https://github.com/Seeed-Studio/Grove_BME280)。

!!!Note
        首先要做的是最好检查库在 Arduino 上是否正常工作，这样以后就不会出现程序问题。只需上传其中一个示例，看看是否有任何错误。

### 2. ArduPy 库结构

让我们首先了解 ArduPy 库结构，这样我们就知道需要什么！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/structure.png" /></div>


这是 [Grove-BME280 的 ArduPy 库](https://github.com/Seeed-Studio/seeed-ardupy-bme280)，这就是 ArduPy 库的组成：

- **`.gitigore`** - 指定 git 要忽略的未跟踪文件

- **`.travis.yml`** - 我们的 CI 测试文件，可以忽略

- **`LICENSE`** - 库的许可证

- **`README.md`** - README 文档

- **`library.json`** - 库的 ArduPy json 文件

- **`mod_ardupy_bme280.c`** - 将 c 转换为 micropython 的核心代码

- **`wrapper_ardupy_bme280.cpp`** - 代码的包装器

因此重要的文件只有 **`library.json`**、**`mod_ardupy_bme280.c`** 和 **`wrapper_ardupy_bme280.cpp`**，如果您为自己编写 ArduPy 库，其他文件不是必需的。

!!!Note
        虽然不是必需的，但最好也包含上面列出的所有文件（LICENSE 和 README 使其更加用户友好）

### 3. 编写 `library.json`

让我们首先编写 [`library.json`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/library.json)。这是用于定位依赖库的 json 文件。对于 Grove-BME280，它看起来像这样：

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

其中 `name` 是 ArduPy 库的名称，`repository` 下的 `url` 是库的 url。这个 `url` 被 ArduPy-aip 用于搜索。您可以替换为您自己的 github 仓库。

在 `dependencies` 下，这是依赖库（Arduino 库）：

- `name` 是 Arduino 库的名称，供以后使用，您也可以使用格式 **`Seeed_Arduino_MODULE-NAME`**。
- `url` 是依赖 Arduino 库的 url。

### 4. 编写 `wrapper_ardupy_MODULE.cpp`

这是将 `c` 转换为 `MicroPython` 代码的包装器。让我们以 [`wrapper_ardupy_bme280.cpp`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp) 为例。

首先，需要包含依赖库，像这样：

```cpp
#include "Seeed_Arduino_BME280/Seeed_BME280.h"
```

!!!Note
    确保名称匹配。

包含共享绑定：

```cpp
extern "C"{
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "shared-bindings/util.h"
}
```

按照以下格式初始化模块：

```cpp
#define bme280 (*(BME280*)self->module)
void * operator new(size_t, void *);
```

其中 `bme280` 和 `BME280` 将被替换为您的模块名称。

接下来会变得有点复杂。按照相同的格式从 [Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h) 映射函数。

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

其中 `common_hal_bme280_construct` 是创建对象的初始化函数，它的格式为：

```cpp
self->module = new (m_new_obj(BME280)) BME280();
bme280.init()
```

将 `BME280` 替换为您的模块。使用 `bme280.init()` 初始化模块，这来自[这里](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L47)。

对于函数，它只是从 Arduino 端调用，看起来像这样：

```cpp
float common_hal_bme280_get_temperature(abstract_module_t *self){
    return bme280.getTemperature();
}
```

`getTemperature()` 来自[这里](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L48)。

您应该能够看到这里的模式，您只需按照上述格式从[Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L45)映射函数即可。

#### 带参数的函数

- 如果您的**模块有带参数的函数**，请阅读这里。

让我们以[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/blob/master/src/LIS3DHTR.h#L208)中的一个例子为例，它接受一个参数。这个函数将在[seeed-ardupy-lis3dhtr](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/wrapper_ardupy_lis3dhtr.cpp#L83)中转换为这样。

从这个：

```cpp
void setHighSolution(bool enable);
```

转换为：

```cpp
void common_hal_lis3dhtr_setHighSolution(abstract_module_t *self, bool enable)
{
    lis.setHighSolution(enable);
}
```

您应该能够看到这里的模式。这里提供了一个[接受2个参数的例子](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/wrapper_my9221.cpp#L58)。

### 5. 编写 `mod_ardupy_MODULE.c`

一旦包装器完成，让我们开始核心工作，将以[`mod_ardupy_bme280.c`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/mod_ardupy_bme280.c)为例。

首先，也包含共享绑定：

```cpp
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "py/obj.h"
#include "shared-bindings/util.h"
```

声明之前从[包装器](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp)定义的函数：

```cpp
void common_hal_bme280_construct(abstract_module_t *self);
void common_hal_bme280_deinit(abstract_module_t *self);
float common_hal_bme280_get_temperature(abstract_module_t *self);
uint32_t common_hal_bme280_get_pressure(abstract_module_t *self);
uint32_t common_hal_bme280_get_humidity(abstract_module_t *self);
extern const mp_obj_type_t grove_bme280_type;
```

初始化模块：

```cpp
m_generic_make(bme280) {
    abstract_module_t * self = new_abstruct_module(type);
    mp_arg_check_num(n_args, n_kw, 0, 0, false);
    common_hal_bme280_construct(self);
    return self;
}
```

您可以按照相同的格式并替换为您的函数和模块名称。

接下来是对象属性，您也应该按照以下格式编写：

```cpp
void bme280_obj_attr(mp_obj_t self_in, qstr attr, mp_obj_t *dest){
    abstract_module_t *self = (abstract_module_t *)self_in;
    uint32_t value;
    float number;
    if (dest[0] == MP_OBJ_NULL) {
        if (attr == MP_QSTR_temperature) {
            number = common_hal_bme280_get_temperature(self); // 调用之前定义的函数
            dest[0] = mp_obj_new_float(number); // 这是MicroPython浮点类型，应该与数据类型匹配
            return;
        }
        else if (attr == MP_QSTR_pressure) {
            value = common_hal_bme280_get_pressure(self); // 调用之前定义的函数
            dest[0] = mp_obj_new_int(value); // 这是MicroPython整数类型，应该与数据类型匹配
            return;
        }
        else if (attr == MP_QSTR_humidity) {
            value = common_hal_bme280_get_humidity(self); // 调用之前定义的函数
            dest[0] = mp_obj_new_int(value);
            return;
        }
    }
    generic_method_lookup(self_in, attr, dest);
}
```

您可以看到它只是通过以下方式返回函数：

```cpp
if (attr == MP_QSTR_temperature) {
    number = common_hal_bme280_get_temperature(self); // 调用之前定义的函数
    dest[0] = mp_obj_new_float(number); // 这是MicroPython浮点类型，应该与数据类型匹配
    return;
}
```

这基本上转换为使用中的`.temperature`方法（即`MP_QSTR_[Function-name]`）。您也应该能够看到这里的模式。

!!!Note
        `dest[0]`数据类型应该在这里匹配。有`mp_obj_new_float`、`mp_obj_new_int`、`mp_obj_new_bool`、`mp_obj_new_str`等。


定义查找表：

```cpp
const mp_rom_map_elem_t bme280_locals_dict_table[] = {
    // instance methods
    { MP_ROM_QSTR(MP_QSTR_deinit),    MP_ROM_PTR(&bme280_deinit_obj) },
    { MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj) },
    { MP_ROM_QSTR(MP_QSTR___exit__),  MP_ROM_PTR(&bme280_obj___exit___obj) },
};

MP_DEFINE_CONST_DICT(bme280_locals_dict, bme280_locals_dict_table);
```

定义初始模块类型：

```cpp
const mp_obj_type_t grove_bme280_type = {
    {&mp_type_type},
    .name = MP_QSTR_grove_bme280,
    .make_new = bme280_make_new,
    .locals_dict = (mp_obj_t)&bme280_locals_dict,
    .attr = bme280_obj_attr,
};
```

这起初可能看起来很复杂，但实际上只是替换模块名称和很少的编程。

#### 带参数的函数

- 如果您的**模块有带参数的函数**，请阅读这里。

让我们也以之前相同的例子来演示。这是在`mod_ardupy_[MODULE].c`中实现函数的代码。按照以下相同格式映射函数：

- 对于[接受1个参数](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L97)的函数：

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

- 对于[接受2个参数](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/mod_ardupy_my9221.c#L85)的函数（**这不是lis3dhtr的代码，只是为了演示**）：

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

!!!Note
    同样，数据类型应该匹配，有 `mp_obj_is_true`、`mp_obj_get_int`、`mp_obj_get_float`、`mp_obj_get_str` 等等。

记住要将函数添加到[查找表](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L169)中，如下所示：

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

现在一旦你编写了 ArduPy 库，你需要构建它，当然如果在构建过程中有任何错误，还需要调试！你现在可以将整个项目草图上传到你的 github 仓库，例如：https://github.com/Seeed-Studio/seeed-ardupy-bme280。

- 下载并安装 `ardupy-aip` 工具集来构建 ArduPy 库，按照这个[**教程**](https://wiki.seeedstudio.com/cn/ArduPy/#install-aip-with-macos)。

一旦你安装了 `ardupy-aip`，你可以运行以下命令来构建你的 ArduPy 固件：

```sh
aip install [Your ArduPy library url]
# For example: aip install https://github.com/Seeed-Studio/seeed-ardupy-bme280
```

使用固件构建 ArduPy 库：

```sh
aip build
```

如果一切顺利，你应该看到如下屏幕，这意味着 ArduPy 库中没有错误！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/build.png" /></div>


## 测试库

一旦你的构建成功，你可以使用以下命令将固件刷写到你的设备并测试库：

```sh
aip flash
```

**注意：** 确保你的设备事先连接到你的 PC。

一旦刷写完成，你可以使用 shell 功能进入 repl 模式：

```cpp
aip shell -c "repl"
```

- 使用以下格式导入编写的模块：

```py
from arduino import grove_bme280
```

其中 `grove_bme280` 将被替换为你的库模块名称。

- 初始化库并调用函数如下：

```py
bme280 = grove_bme280()
print ("Temperature: ", bme280.temperature, "C")
print ("Humidity: ", bme280.humidity, "%")
print ("Pressure: ", bme280.pressure, "Pa")
```

如果你已经走到这一步，你已经成功编写了一个 ArduPy 库！这允许你将任何 Arduino 库转换为 ArduPy 库。

!!!Note
        如果你的库在任何时候卡住或没有得到结果返回，代码中可能有一些错误。请仔细检查。

## 资源

已经有许多 ArduPy 库可用，您可以轻松安装并使用这些库构建您的 ArduPy 固件。您也可以将这些库作为模板来编写您自己的 ArduPy 库！

- [可用的 ArduPy 库](https://github.com/Seeed-Studio?q=ardupy&type=&language=)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>