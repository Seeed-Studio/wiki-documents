---
title: NFC para Seeed Studio XIAO nRF54L15 Serie
description: Usa la interfaz NFC en XIAO nRF54L15 y XIAO nRF54L15 Sense con el nRF Connect SDK.
keywords:
  - xiao
  - nrf54l15
  - nfc
  - ncs
slug: /xiao_nrf54l15_nfc
url: https://wiki.seeedstudio.com/es/xiao_nrf54l15_nfc/
---

<div className="get_one_now_container" style={{textAlign: 'center'}}>
  <a
    className="get_one_now_item"
    href="https://www.seeedstudio.com/XIAO-nRF54L15-p-6493.html"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong>
      <span>
        <font color="#FFFFFF" size="4">
          Consigue uno ahora 🖱️
        </font>
      </span>
    </strong>
  </a>
</div>

## Introducción

Near Field Communication (NFC) es una tecnología para transferir de forma inalámbrica pequeñas cantidades de datos entre dos dispositivos. Utiliza protocolos muy simples, por lo que se conecta más rápido que Bluetooth Low Energy, pero como se basa en la inducción magnética, los dos dispositivos deben estar muy cerca — a menos de 10 cm — para conectarse. El XIAO nRF54L15 expone el periférico NFCT integrado del nRF54L15 en dos pines, lo que te permite usar la placa como una etiqueta NFC que un teléfono o lector puede acercar para leer o escribir. El periférico es compatible tanto con etiquetas Tipo 2 como Tipo 4: el ejemplo de registro de texto que se muestra a continuación es una etiqueta de texto de solo lectura Tipo 2, mientras que el ejemplo NDEF grabable es una etiqueta Tipo 4 de lectura/escritura.

Para la referencia del protocolo NFC de Nordic, consulta [Near Field Communication (NFC)](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/nfc/index.html); para la especificación en sí, consulta la [visión general de las especificaciones del NFC Forum](https://nfc-forum.org/build/specifications).


## Preparación de hardware

Necesitas un XIAO nRF54L15 y una antena NFC. La placa L15 desnuda **no tiene bobina NFC integrada** — los pines NFC solo están conectados a las almohadillas N1 y N2 — por lo que se requiere una antena externa para que cualquiera de los ejemplos siguientes pueda ser escaneado.

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

:::tip
La antena NFC de Nordic no se vende por separado en Seeed Studio Bazaar, por lo que tendrás que comprarla en otras fuentes.
:::


### Soldar la antena

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/0.png" style={{width:600, height:'auto'}}/></div>

En el XIAO nRF54L15 los pines NFC son P1.02 y P1.03. Suelda tu antena externa a las almohadillas N1 y N2; su ubicación en la placa se muestra arriba.

:::caution
Los pines NFC no distinguen positivo y negativo. Soldar puntos de prueba de paso fino es un reto: toma precauciones de seguridad para evitar lesiones personales y daños al equipo, o utiliza en su lugar cables voladores.
:::

## Software

### Registros de texto NFC (etiqueta de texto de solo lectura Tipo 2)

Este ejemplo demuestra la lectura de información de texto mediante NFC.

1. Dentro de la extensión, crea una rutina en blanco y elige copiar una rutina existente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/nfc_3.png" style={{width:800, height:'auto'}}/></div>

2. Escribe nfc, selecciona el ejemplo NFC text Records

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/1.png" style={{width:800, height:'auto'}}/></div>

3. Selecciona la ruta de almacenamiento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/2.png" style={{width:800, height:'auto'}}/></div>

4. Abre el proyecto, añade la configuración de XIAO nRF54L15 en la extensión correspondiente y compila.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/1.png" alt="Adding the XIAO nRF54L15 board configuration and compiling" style={{width:1000, height:'auto'}}/></div>


5. Abre la terminal e introduce el comando `west flash` para grabar el firmware en el XIAO nRF54L15.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/2.png" alt="Flashing the XIAO nRF54L15 with west flash" style={{width:1000, height:'auto'}}/></div>


#### Resultado

Selecciona un teléfono con funcionalidad NFC para intentar este experimento.

1. Para ver la información leída por NFC con más detalle, necesitas descargar la aplicación correspondiente para tu sistema.

- iOS :[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android：[nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Coloca el área NFC de tu teléfono cerca de la antena NFC para leer la información NFC detallada.

La información de texto que se muestra en tu teléfono es:

```txt
Hello World!
Hallo Verden!
Witaj świecie!
```
<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/10.gif"
    alt="NFC tag read on a phone"
    style={{width: 800, height: 'auto'}}
  />
</div>

### Ejemplo de lectura/escritura NFC: mensaje NDEF grabable (etiqueta Tipo 4 de lectura/escritura)

Este es el ejemplo de **[mensaje NDEF grabable](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/samples/nfc/writable_ndef_msg/README.html)** del Nordic Connect SDK, compilado para el XIAO nRF54L15. 



1. Obtén el ejemplo desde el nRF Connect SDK oficial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/1.png" style={{width:600, height:'auto'}}/></div>




2. Compila el ejemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/4.png" alt="Building the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>


3. Graba 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/NFC/5.png" alt="Flashing the writable NDEF message sample" style={{width:1000, height:'auto'}}/></div>
<br/>


#### Resultado

1. Para inspeccionar el contenido NFC en detalle, instala la aplicación correspondiente para tu teléfono.

- iOS: [NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
- Android: [nRF NFC Toolbox](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nfc)

2. Alimenta la placa y acerca el área NFC de tu teléfono a la antena. El navegador abrirá `http://www.nordicsemi.com`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-4.jpg" style={{width:200, height:'auto'}}/></div>



3. Sobrescribe la etiqueta con tu propio mensaje NDEF usando NFC Tools (o equivalente). Como este es un ejemplo de lectura/escritura, puedes introducir una URL diferente propia y acercar la etiqueta para escribirla: la próxima vez que leas la etiqueta, el contenido habrá cambiado.

<div className="table-center">
<table align="center">
<tr>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-2.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-5.jpg" style={{width:200, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/NFC/20261111-143425.630-1.jpg" style={{width:200, height:'auto'}}/></div></td>
</tr>
</table>
</div>




## Resumen

NFC se puede reutilizar en muchos escenarios — transferencia de datos, activación de bajo consumo, emparejamiento — y el nRF Connect SDK incluye ejemplos correspondientes para cada uno. Puedes ampliar este ejemplo de lectura/escritura en aplicaciones reales, por ejemplo combinando la activación NFC de bajo consumo con el control de un motor para construir una cerradura inteligente sencilla. Con la antena soldada y el ejemplo en ejecución, el resto depende de tus propias ideas y de tus contribuciones de vuelta a la comunidad de código abierto.




## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
