---
description: Cómo Hacer - Rápido y Simplificado
title: Pasos Completos Pull Request
keywords:
- Contributor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/full_steps_pull_request
last_update:
  date: 09/01/2024
  author: Matthew
---

### ¡Gracias por considerar contribuir a nuestros archivos de seeed-studio!

Este proceso de contribución simplificado, es para poder ofrecer pasos completos para hacer PR de los archivos. Si solo quieres agregar archivo md e imágenes, puedes revisar [aquí](/es/quick_pull_request).


## Paso a paso enviar los archivos al repositorio

### Prerrequisito: `git clone` repo y desplegar los sitios web localmente

<strong><a href="/es/Deploy_Page_Locally"><span><font color={'8DC215'} size={"4"}>¡Puedes desplegar el sitio web localmente y ver los cambios haciendo clic aquí!</font></span></a></strong>

### 1. Actualiza tu rama bifurcada

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/1.jpg" /></div>

### 2. Actualiza los archivos descargados

Usa el código de abajo y actualiza los archivos descargados.

```
git checkout docusaurus-version
git pull
```

### 3. Modifica el contenido de los archivos existentes

Todos los archivos en la plataforma wiki están almacenados en la carpeta "docs".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/2.jpg" /></div>

:::note
El nombre del archivo que quieres cambiar usualmente es la última parte de la url(toma Seeed Studio XIAO ESP32C3 como ejemplo).
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/3.jpg" /></div>
:::

#### Si vas a agregar archivos

Almacena todos los archivos agregados(Los archivos markdown y las imágenes) en la carpeta "Contributor_Files":

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>


### 4. Verifica los archivos cambiados localmente

Una vez que hayas terminado de actualizar, puedes usar el comando de abajo para ver si se muestra bien.

```
yarn start
```

En la plataforma de edición:

![image4](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/4.jpg)

En la página local:

![image5](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/5.jpg)

### 5. Guarda y empuja los cambios a tu repositorio github bifurcado


Si todo está bien, puedes usar el comando de abajo para empujar los cambios a tu repositorio github bifurcado.

```
git add "the files that you changed"
git commit -m "Update：I have updated ..."
git push
```

### 5. Pull request al Repositorio de Seeed Studio

Una vez que hayas empujado los cambios a tu repositorio github, aparece una columna automáticamente. Haz clic en el botón "Compare & Pull Request":

![image6](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/6.jpg)

Muéstranos lo que has editado y haz clic en el botón "create pull request" para nosotros.

![image7](https://files.seeedstudio.com/wiki/wiki-platform/contributor/PR_Guide/7.jpg)

¡Gracias por tus contribuciones!