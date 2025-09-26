---
description: Cómo escribir una biblioteca ArduPy
title: Cómo escribir una biblioteca ArduPy
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/ArduPy-Libraries
last_update:
  date: 11/20/2022
  author: Matthew
---

# Cómo escribir una biblioteca ArduPy

![](https://files.seeedstudio.com/ardupy/ardupy_logo.png)

En este wiki, introduciremos cómo escribir una biblioteca ArduPy desde cero y usaremos un ejemplo para recorrer completamente el flujo de trabajo. Al final de esto, tendrás una comprensión de cómo escribir una biblioteca ArduPy e implementarla en tus proyectos ArduPy! Puedes convertir tu biblioteca Arduino favorita al formato MicroPython y usarla bajo ArduPy!

Esto requeriría algunos conocimientos de programación de software, pero debería ser simple seguir algunos puntos clave.

## Hardware requerido
  
- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Comenzar

¡Vamos a guiarte a través de un ejemplo y que obtengas una mejor comprensión!

### 1. Bibliotecas Arduino

Primero lo primero, para escribir una biblioteca ArduPy, necesitarás encontrar la biblioteca que ya esté escrita en forma de **biblioteca Arduino**. Esto debería ser muy fácil ya que la mayoría de nuestros módulos soportarán Arduino y tendrán una biblioteca Arduino en nuestro [github](https://github.com/Seeed-Studio). Simplemente busca el módulo en github y encuentra el repositorio.

En este wiki, tomaré el [**Grove - Sensor de Temp&Humi&Barómetro (BME280)**](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) como ejemplo y aquí está la [**Biblioteca Arduino Grove-BME280**](https://github.com/Seeed-Studio/Grove_BME280).

!!!Note
        Lo primero que hay que hacer es mejor verificar que la biblioteca esté funcionando en Arduino, para que no sea un problema más adelante. Simplemente sube uno de los ejemplos para ver si hay algún error.

### 2. Estructura de biblioteca ArduPy

¡Primero recorramos la estructura de una biblioteca ArduPy para saber qué se necesita!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/structure.png" /></div>

Esta es la [biblioteca ArduPy para Grove-BME280](https://github.com/Seeed-Studio/seeed-ardupy-bme280) y esto es lo que consiste una biblioteca ArduPy:

- **`.gitigore`** - especifica archivos intencionalmente no rastreados para ignorar en git

- **`.travis.yml`** - nuestros archivos de prueba CI que pueden ser ignorados

- **`LICENSE`** - la licencia de la biblioteca

- **`README.md`** - documento README

- **`library.json`** - archivo json ArduPy para la biblioteca

- **`mod_ardupy_bme280.c`** - código central que convierte c a micropython

- **`wrapper_ardupy_bme280.cpp`** - Un wrapper para código

Por lo tanto, los archivos importantes son solo **`library.json`**, **`mod_ardupy_bme280.c`** y **`wrapper_ardupy_bme280.cpp`** donde otros no son necesarios si estás escribiendo para tu propia biblioteca ArduPy.

!!!Note
        Aunque no es necesario, también es mejor contener todos los archivos listados arriba (LICENSE y README lo hace amigable al usuario)

### 3. Escribiendo el `library.json`

Comencemos escribiendo primero el [`library.json`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/library.json). Este es el archivo json para localizar las bibliotecas dependientes. Para el Grove-BME280 se ve así:

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

donde `name` es el nombre de la biblioteca ArduPy y la `url` bajo `repository` es la url de la biblioteca. Esta `url` es utilizada por ArduPy-aip para buscar. Reemplázala con tu propio repositorio de github.

Bajo `dependencies`, esta es la biblioteca dependiente (biblioteca Arduino):

- `name` es el nombre de la biblioteca Arduino para uso posterior, también puedes usar el formato **`Seeed_Arduino_MODULE-NAME`**.
- `url` es la url para la biblioteca Arduino dependiente.

### 4. Escribiendo el `wrapper_ardupy_MODULE.cpp`

Este es el wrapper para convertir código `c` a `MicroPython`. Revisemos [`wrapper_ardupy_bme280.cpp`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp) como ejemplo.

Primero, necesitas incluir la biblioteca dependiente, algo como esto:

```cpp
#include "Seeed_Arduino_BME280/Seeed_BME280.h"
```

!!!Note
    Asegúrate de que el nombre coincida.

Incluye los bindings compartidos:

```cpp
extern "C"{
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "shared-bindings/util.h"
}
```

Inicializando el módulo con el formato siguiente:

```cpp
#define bme280 (*(BME280*)self->module)
void * operator new(size_t, void *);
```

donde `bme280` y `BME280` serán reemplazados por el nombre de tu módulo.

Lo siguiente se vuelve un poco complicado. Sigue el mismo formato como se muestra a continuación para mapear funciones desde el [Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h).

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

donde `common_hal_bme280_construct` es la función de inicialización para crear un objeto y tiene un formato de:

```cpp
self->module = new (m_new_obj(BME280)) BME280();
bme280.init()
```

Reemplaza `BME280` por tu módulo. Inicializa el módulo usando `bme280.init()` que proviene de [aquí](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L47).

Para las funciones, simplemente se llaman desde el lado de Arduino que se ve así:

```cpp
float common_hal_bme280_get_temperature(abstract_module_t *self){
    return bme280.getTemperature();
}
```

`getTemperature()` proviene de [aquí](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L48).

Deberías poder ver el patrón aquí donde simplemente mapeas las funciones de [Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L45) siguiendo el formato anterior.

#### Funciones que Toman Parámetros

- Si tu **módulo tiene funciones que toman parámetros**, por favor lee a través de aquí.

Tomemos un ejemplo aquí en el [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/blob/master/src/LIS3DHTR.h#L208) donde toma un parámetro. Esta función se convertiría a esto en el [seeed-ardupy-lis3dhtr](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/wrapper_ardupy_lis3dhtr.cpp#L83).

De esto:

```cpp
void setHighSolution(bool enable);
```

se convierte en:

```cpp
void common_hal_lis3dhtr_setHighSolution(abstract_module_t *self, bool enable)
{
    lis.setHighSolution(enable);
}
```

Deberías poder ver el patrón aquí. Aquí se proporciona [un ejemplo](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/wrapper_my9221.cpp#L58) que toma 2 parámetros.

### 5. Escribiendo el `mod_ardupy_MODULE.c`

Una vez que el wrapper esté terminado, trabajemos en el núcleo, tomaremos [`mod_ardupy_bme280.c`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/mod_ardupy_bme280.c) como ejemplo.

Primero, también incluye los bindings compartidos:

```cpp
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "py/obj.h"
#include "shared-bindings/util.h"
```

Declara las funciones previamente definidas del [wrapper](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp):

```cpp
void common_hal_bme280_construct(abstract_module_t *self);
void common_hal_bme280_deinit(abstract_module_t *self);
float common_hal_bme280_get_temperature(abstract_module_t *self);
uint32_t common_hal_bme280_get_pressure(abstract_module_t *self);
uint32_t common_hal_bme280_get_humidity(abstract_module_t *self);
extern const mp_obj_type_t grove_bme280_type;
```

Inicializar el módulo:

```cpp
m_generic_make(bme280) {
    abstract_module_t * self = new_abstruct_module(type);
    mp_arg_check_num(n_args, n_kw, 0, 0, false);
    common_hal_bme280_construct(self);
    return self;
}
```

donde podrías seguir el mismo formato y reemplazar con tus nombres de funciones y módulos.

A continuación están los atributos del objeto, también deberías escribir en el siguiente formato:

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

Puedes ver que simplemente devuelve las funciones haciendo lo siguiente:

```cpp
if (attr == MP_QSTR_temperature) {
    number = common_hal_bme280_get_temperature(self); // Call previously defined unction
    dest[0] = mp_obj_new_float(number); // This the MicroPython float type, should match with the data type
    return;
}
```

Esto básicamente se convierte en el método `.temperature` en el uso (es decir, `MP_QSTR_[Nombre-de-función]`). También deberías poder ver el patrón aquí.

!!!Note
        El tipo de datos de `dest[0]` debe coincidir aquí. Hay `mp_obj_new_float`, `mp_obj_new_int`, `mp_obj_new_bool`, `mp_obj_new_str` y etc.

Define una tabla de búsqueda:

```cpp
const mp_rom_map_elem_t bme280_locals_dict_table[] = {
    // instance methods
    { MP_ROM_QSTR(MP_QSTR_deinit),    MP_ROM_PTR(&bme280_deinit_obj) },
    { MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj) },
    { MP_ROM_QSTR(MP_QSTR___exit__),  MP_ROM_PTR(&bme280_obj___exit___obj) },
};

MP_DEFINE_CONST_DICT(bme280_locals_dict, bme280_locals_dict_table);
```

Define el tipo de módulo inicial:

```cpp
const mp_obj_type_t grove_bme280_type = {
    {&mp_type_type},
    .name = MP_QSTR_grove_bme280,
    .make_new = bme280_make_new,
    .locals_dict = (mp_obj_t)&bme280_locals_dict,
    .attr = bme280_obj_attr,
};
```

Esto puede parecer complicado al principio, pero en realidad es reemplazar nombres de módulos y muy poca programación.

#### Funciones que Toman Parámetros

- Si tu **módulo tiene funciones que toman parámetros**, por favor lee esto.

Tomemos también el mismo ejemplo que antes para demostrar. Este es el código para implementar la función en `mod_ardupy_[MODULE].c`. Sigue el mismo formato que se muestra a continuación para mapear funciones:

- Para función que [toma 1 parámetro](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L97):

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

- Para función que [toma 2 parámetros](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/mod_ardupy_my9221.c#L85) (**este no es el código para lis3dhtr, solo para demostrar**):

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
    Lo mismo aquí, los tipos de datos deben coincidir, hay `mp_obj_is_true`, `mp_obj_get_int`, `mp_obj_get_float`, `mp_obj_get_str` y etc.

Recuerda añadir la función a la [tabla de búsqueda](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L169), que se ve así:

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

### 6. Construyendo el Firmware

Ahora que has escrito la biblioteca ArduPy, necesitarás construirla y por supuesto depurar si hay algún error durante la construcción. Ahora puedes subir todo el proyecto sketch a tu repositorio de github, por ejemplo: https://github.com/Seeed-Studio/seeed-ardupy-bme280.

- Descarga e Instala `ardupy-aip` el conjunto de herramientas para construir bibliotecas ArduPy siguiendo este [**tutorial**](https://wiki.seeedstudio.com/es/ArduPy/#install-aip-with-macos).

Una vez que tengas `ardupy-aip` instalado, puedes ejecutar lo siguiente para construir tu firmware ArduPy:

```sh
aip install [Your ArduPy library url]
# For example: aip install https://github.com/Seeed-Studio/seeed-ardupy-bme280
```

Construye la biblioteca ArduPy con el firmware:

```sh
aip build
```

Si todo va bien, deberías ver una pantalla como la siguiente, lo que significa que no hay errores en la biblioteca ArduPy!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/build.png" /></div>

## Probando las Bibliotecas

Una vez que tu compilación fue exitosa, puedes usar el siguiente comando para flashear el firmware a tu dispositivo y probar la biblioteca:

```sh
aip flash
```

**Nota:** Asegúrate de que tu dispositivo esté conectado a tu PC de antemano.

Una vez flasheado puedes usar la función shell para entrar al modo repl:

```cpp
aip shell -c "repl"
```

- Importa el módulo escrito usando el siguiente formato:

```py
from arduino import grove_bme280
```

donde `grove_bme280` será reemplazado con el nombre de tu módulo de biblioteca.

- Inicializa la biblioteca y llama a la función como sigue:

```py
bme280 = grove_bme280()
print ("Temperature: ", bme280.temperature, "C")
print ("Humidity: ", bme280.humidity, "%")
print ("Pressure: ", bme280.pressure, "Pa")
```

Si has llegado hasta aquí, ¡has escrito una biblioteca ArduPy exitosamente! Esto te permite convertir cualquier biblioteca de Arduino en una biblioteca ArduPy.

!!!Note
        Si tu biblioteca se atasca en algún punto o no obtienes resultados, podría haber algunos errores en el código. Por favor, revisa cuidadosamente.

## Recursos

Hay una gran cantidad de bibliotecas ArduPy ya disponibles, puedes instalarlas y construir tu firmware ArduPy con estas fácilmente. ¡También puedes usarlas como plantillas para escribir tus propias bibliotecas ArduPy!

- [Bibliotecas ArduPy disponibles](https://github.com/Seeed-Studio?q=ardupy&type=&language=)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
