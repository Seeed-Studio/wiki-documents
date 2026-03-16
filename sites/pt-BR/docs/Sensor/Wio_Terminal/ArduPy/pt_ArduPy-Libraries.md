---
description: Como Escrever uma Biblioteca ArduPy
title: Como Escrever uma Biblioteca ArduPy
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ArduPy-Libraries
last_update:
  date: 11/20/2022
  author: Matthew
createdAt: '2023-11-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ArduPy-Libraries/
---

# Como Escrever uma Biblioteca ArduPy

![](https://files.seeedstudio.com/ardupy/ardupy_logo.png)

Neste wiki, apresentaremos como escrever uma biblioteca ArduPy do zero e usaremos um exemplo para percorrer completamente o fluxo de trabalho. Ao final, você terá um entendimento de como escrever uma biblioteca ArduPy e implementá‑la em seus projetos ArduPy! Você pode converter sua biblioteca Arduino favorita para o formato MicroPython e usá‑la no ArduPy!

Isso exigirá algum conhecimento de programação de software, mas deve ser simples de acompanhar com alguns pontos‑chave.

## Hardware Necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Começando

Vamos guiá‑lo através de um exemplo para que você tenha um melhor entendimento!

### 1. Bibliotecas Arduino

Antes de tudo, para escrever uma biblioteca ArduPy, você precisará encontrar a biblioteca que já está escrita em forma de **biblioteca Arduino**. Isso deve ser muito fácil, pois a maioria dos nossos módulos oferece suporte a Arduino e terá uma biblioteca Arduino no nosso [github](https://github.com/Seeed-Studio). Simplesmente pesquise o módulo no github e encontre o repositório.

Neste wiki, vou usar o [**Grove - Temp&Humi&Barometer Sensor (BME280)**](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) como exemplo e aqui está a [**Grove-BME280 Arduino Library**](https://github.com/Seeed-Studio/Grove_BME280).

!!!Note
        A primeira coisa a fazer é verificar se a biblioteca está funcionando no Arduino, para que isso não vire um problema mais tarde. Simplesmente envie um dos exemplos para ver se há algum erro.

### 2. Estrutura da Biblioteca ArduPy

Vamos primeiro passar por uma estrutura de biblioteca ArduPy para sabermos o que é necessário!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/structure.png" /></div>


Esta é a [biblioteca ArduPy para o Grove-BME280](https://github.com/Seeed-Studio/seeed-ardupy-bme280) e isto é do que uma biblioteca ArduPy consiste:

- **`.gitigore`** - especifica arquivos não rastreados intencionalmente a serem ignorados pelo git

- **`.travis.yml`** - nossos arquivos de teste de CI, que podem ser ignorados

- **`LICENSE`** - a licença da biblioteca

- **`README.md`** - documento README

- **`library.json`** - arquivo json ArduPy para a biblioteca

- **`mod_ardupy_bme280.c`** - código principal que converte C em MicroPython

- **`wrapper_ardupy_bme280.cpp`** - um wrapper para o código

Portanto, os arquivos importantes são apenas **`library.json`**, **`mod_ardupy_bme280.c`** e **`wrapper_ardupy_bme280.cpp`**, enquanto os outros não são necessários se você estiver escrevendo sua própria biblioteca ArduPy.

!!!Note
        Embora não seja necessário, também é melhor incluir todos os arquivos listados acima (LICENSE e README o tornam mais amigável para o usuário)

### 3. Escrevendo o `library.json`

Vamos começar escrevendo primeiro o [`library.json`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/library.json). Este é o arquivo json para localizar as bibliotecas dependentes. Para o Grove-BME280, ele se parece com isto:

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

onde `name` é o nome da biblioteca ArduPy e a `url` em `repository` é a url da biblioteca. Esta `url` é usada pelo ArduPy-aip para procurar. Você a substitui pelo seu próprio repositório do github.

Em `dependencies`, fica a biblioteca dependente (biblioteca Arduino):

- `name` é o nome da biblioteca Arduino para uso posterior; você também pode usar o formato **`Seeed_Arduino_MODULE-NAME`**.
- `url` é a url da biblioteca Arduino dependente.

### 4. Escrevendo o `wrapper_ardupy_MODULE.cpp`

Este é o wrapper para converter código `c` em código `MicroPython`. Vamos conferir o [`wrapper_ardupy_bme280.cpp`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp) como exemplo.

Primeiro, é preciso incluir a biblioteca dependente, algo como isto:

```cpp
#include "Seeed_Arduino_BME280/Seeed_BME280.h"
```

!!!Note
    Certifique‑se de que o nome corresponda.

Inclua os bindings compartilhados:

```cpp
extern "C"{
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "shared-bindings/util.h"
}
```

Inicializando o módulo com o seguinte formato:

```cpp
#define bme280 (*(BME280*)self->module)
void * operator new(size_t, void *);
```

onde `bme280` e `BME280` serão substituídos pelo nome do seu módulo.

Em seguida, fica um pouco mais complicado. Siga o mesmo formato a seguir para mapear funções a partir do [Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h).

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

onde `common_hal_bme280_construct` é a função de inicialização para criar um objeto e tem o seguinte formato:

```cpp
self->module = new (m_new_obj(BME280)) BME280();
bme280.init()
```

Substitua `BME280` pelo seu módulo. Inicialize o módulo usando `bme280.init()`, que vem de [aqui](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L47).

Para funções, elas são simplesmente chamadas do lado Arduino, o que se parece com isto:

```cpp
float common_hal_bme280_get_temperature(abstract_module_t *self){
    return bme280.getTemperature();
}
```

`getTemperature()` vem de [aqui](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L48).

Você deve conseguir ver o padrão aqui, em que você simplesmente mapeia as funções do [Grove-BME280](https://github.com/Seeed-Studio/Grove_BME280/blob/master/Seeed_BME280.h#L45) seguindo o formato acima.

#### Funções que recebem Parâmetros

- Se o seu **módulo tiver funções que recebem parâmetros**, leia esta parte.

Vamos pegar um exemplo aqui no [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/blob/master/src/LIS3DHTR.h#L208), onde ele recebe um parâmetro. Esta função seria convertida para isto em [seeed-ardupy-lis3dhtr](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/wrapper_ardupy_lis3dhtr.cpp#L83).

Disto:

```cpp
void setHighSolution(bool enable);
```

converte para:

```cpp
void common_hal_lis3dhtr_setHighSolution(abstract_module_t *self, bool enable)
{
    lis.setHighSolution(enable);
}
```

Você deve conseguir ver o padrão aqui. Aqui há [um exemplo](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/wrapper_my9221.cpp#L58) que recebe 2 parâmetros.

### 5. Escrevendo o `mod_ardupy_MODULE.c`

Quando o wrapper estiver pronto, vamos trabalhar no núcleo; tomaremos [`mod_ardupy_bme280.c`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/mod_ardupy_bme280.c) como exemplo.

Primeiro, também inclua os bindings compartilhados:

```cpp
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "py/obj.h"
#include "shared-bindings/util.h"
```

Declare as funções previamente definidas no [wrapper](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp):

```cpp
void common_hal_bme280_construct(abstract_module_t *self);
void common_hal_bme280_deinit(abstract_module_t *self);
float common_hal_bme280_get_temperature(abstract_module_t *self);
uint32_t common_hal_bme280_get_pressure(abstract_module_t *self);
uint32_t common_hal_bme280_get_humidity(abstract_module_t *self);
extern const mp_obj_type_t grove_bme280_type;
```

Inicialize o módulo:

```cpp
m_generic_make(bme280) {
    abstract_module_t * self = new_abstruct_module(type);
    mp_arg_check_num(n_args, n_kw, 0, 0, false);
    common_hal_bme280_construct(self);
    return self;
}
```

onde você pode seguir o mesmo formato e substituir pelas suas funções e nomes de módulo.

Em seguida, vêm os atributos do objeto; você também deve escrevê‑los no seguinte formato:

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

Você pode ver que ele simplesmente retorna as funções fazendo o seguinte:

```cpp
if (attr == MP_QSTR_temperature) {
    number = common_hal_bme280_get_temperature(self); // Call previously defined unction
    dest[0] = mp_obj_new_float(number); // This the MicroPython float type, should match with the data type
    return;
}
```

Isso basicamente se converte no método `.temperature` em uso (isto é, `MP_QSTR_[Function-name]`). Você também deve conseguir ver o padrão aqui.

!!!Note
        O tipo de dado de `dest[0]` deve corresponder aqui. Existem `mp_obj_new_float`, `mp_obj_new_int`, `mp_obj_new_bool`, `mp_obj_new_str` e etc.


Defina uma tabela de consulta:

```cpp
const mp_rom_map_elem_t bme280_locals_dict_table[] = {
    // instance methods
    { MP_ROM_QSTR(MP_QSTR_deinit),    MP_ROM_PTR(&bme280_deinit_obj) },
    { MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj) },
    { MP_ROM_QSTR(MP_QSTR___exit__),  MP_ROM_PTR(&bme280_obj___exit___obj) },
};

MP_DEFINE_CONST_DICT(bme280_locals_dict, bme280_locals_dict_table);
```

Defina o tipo de módulo inicial:

```cpp
const mp_obj_type_t grove_bme280_type = {
    {&mp_type_type},
    .name = MP_QSTR_grove_bme280,
    .make_new = bme280_make_new,
    .locals_dict = (mp_obj_t)&bme280_locals_dict,
    .attr = bme280_obj_attr,
};
```

Isso pode parecer complicado à primeira vista, mas na verdade está apenas substituindo nomes de módulos e escrevendo muito pouco código.

#### Funções que recebem Parâmetros

- Se o seu **módulo tiver funções que recebem parâmetros**, leia esta parte.

Vamos também usar o mesmo exemplo de antes para demonstrar. Este é o código para implementar a função em `mod_ardupy_[MODULE].c`. Siga o mesmo formato abaixo para mapear funções:

- Para função que [recebe 1 parâmetro](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L97):

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

- Para função que [recebe 2 parâmetros](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/mod_ardupy_my9221.c#L85) (**este não é o código para lis3dhtr, é apenas para demonstrar**):

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
    Mesmo aqui, os tipos de dados devem corresponder, existem `mp_obj_is_true`, `mp_obj_get_int`, `mp_obj_get_float`, `mp_obj_get_str` e etc.

Lembre-se de adicionar a função à [tabela de consulta](https://github.com/Seeed-Studio/seeed-ardupy-lis3dhtr/blob/master/mod_ardupy_lis3dhtr.c#L169), que se parece com isto:

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

### 6. Compilando o Firmware

Agora, depois de escrever a biblioteca ArduPy, você precisará compilá-la e, claro, depurar se houver algum erro durante a compilação! Agora você pode enviar todo o sketch do projeto para o seu repositório do github, por exemplo: https://github.com/Seeed-Studio/seeed-ardupy-bme280.

- Baixe e instale `ardupy-aip`, o conjunto de ferramentas para compilar a biblioteca ArduPy seguindo este [**tutorial**](https://wiki.seeedstudio.com/pt-br/ArduPy/#install-aip-with-macos).

Depois que você tiver `ardupy-aip` instalado, poderá executar o seguinte para compilar seu firmware ArduPy:

```sh
aip install [Your ArduPy library url]
# For example: aip install https://github.com/Seeed-Studio/seeed-ardupy-bme280
```

Compile a biblioteca ArduPy com o firmware:

```sh
aip build
```

Se tudo correr bem, você deverá ver uma tela como a seguinte, significando que não há erro na biblioteca ArduPy!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/build.png" /></div>


## Testando as Bibliotecas

Depois que sua compilação for bem-sucedida, você pode usar o seguinte comando para gravar o firmware em seu dispositivo e testar a biblioteca:

```sh
aip flash
```

**Nota:** Certifique-se de que seu dispositivo esteja conectado ao PC antecipadamente.

Depois de gravar, você pode usar a função shell para entrar no modo repl:

```cpp
aip shell -c "repl"
```

- Importe o módulo escrito usando o seguinte formato:

```py
from arduino import grove_bme280
```

onde `grove_bme280` será substituído pelo nome do módulo da sua biblioteca.

- Inicialize a biblioteca e chame a função da seguinte forma:

```py
bme280 = grove_bme280()
print ("Temperature: ", bme280.temperature, "C")
print ("Humidity: ", bme280.humidity, "%")
print ("Pressure: ", bme280.pressure, "Pa")
```

Se você chegou até aqui, você escreveu uma biblioteca ArduPy com sucesso! Isso permite converter qualquer biblioteca Arduino em uma biblioteca ArduPy.

!!!Note
        Se sua biblioteca travar em algum ponto ou não estiver retornando resultados, pode haver alguns bugs no código. Verifique com atenção.

## Recursos

Já existem várias bibliotecas ArduPy disponíveis, você pode instalá-las e compilar seu firmware ArduPy com elas facilmente. Você também pode usá-las como modelos para escrever suas próprias bibliotecas ArduPy!

- [Bibliotecas ArduPy disponíveis](https://github.com/Seeed-Studio?q=ardupy&type=&language=)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>