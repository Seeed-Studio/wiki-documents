---
description: EL Shield
title: EL Shield
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/EL_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: EL Shield
category: Shield
bzurl: https://seeedstudio.com/EL-Shield-p-1287.html
oldwikiname: EL_Shield
prodimagename: EL_Shield_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/104030000 1.jpg
surveyurl: https://www.research.net/r/EL_Shield
sku: 104030000
--- -->

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_02.jpg)

Este shield se utiliza para controlar dispositivos EL. Puede controlar 4 dispositivos EL simultáneamente. El método de control es tan simple como controlar un LED. Impulsado por PWM, puede crear un efecto colorido y florido controlando cada cable EL con un programa simple. Combinado con nuestro Inversor EL, puede impulsar un cable EL de hasta 15m de longitud, lo que proporciona infinitas posibilidades para tu diseño. Además, el Shield está cubierto por una placa acrílica, lo que mejora la seguridad del usuario.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/el-shield-p-1287.html)

Especificaciones
--------------

- Voltaje de Operación: 5V
- Interfaz del inversor: JST 2.0
- Interfaz del canal de control: conector 2P - 2.5SM

Descripción del Hardware
---------

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_interface.jpg)

Demostración
-------------

Aquí hay una demostración simple que involucra el shield EL, 4 cintas EL y el inversor personalizado que acompaña al shield EL.
Conecta todas las cosas como en la imagen de abajo.

![](https://files.seeedstudio.com/wiki/EL_Shield/img/EL_Shield_Hardware_Installation.jpg)

Sube el código de abajo a tu microcontrolador.

```
// EL test code
 
void setup(){
 for(int i = 4; i<8; i++)
 {
  pinMode(i, OUTPUT);
 }
}
 
void setEL(int ch) // set a certain EL on
{
 for(int i = 4; i<8; i++) // all off
 digitalWrite(i, LOW);
 digitalWrite(ch+3, HIGH); // ch on
}
 
int count = 0;
 
void loop()
{
 setEL(count%4 + 1);
 delay(200);
 if(count++ == 1000)
 {
  count = 0;
 }
}
```

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Archivo eagle del EL Shield](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Eagle_File.zip)
- [Archivo de código fuente del EL Shield para Arduino 1.0](https://files.seeedstudio.com/wiki/EL_Shield/res/EL_Shield_Test_code.zip)
- [Hoja de datos BT134W-600D](https://files.seeedstudio.com/wiki/EL_Shield/res/BT134W-600D.pdf)
- [Hoja de datos MOC 3063](https://files.seeedstudio.com/wiki/EL_Shield/res/MOC3063M.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/EL_Shield -->

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