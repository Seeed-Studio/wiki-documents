---
description: Cómo Hacer - Rápido y Simplificado
title: Pull Request Rápido
keywords:
- Community
- Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/quick_pull_request
last_update:
  date: 09/01/2024
  author: Matthew
---

### ¡Gracias por considerar contribuir a nuestros archivos de seeed-studio!

Este proceso de contribución simplificado, es para poder hacer PR de archivos rápidamente (no necesitas desplegar sitios web localmente). Si quieres verificar los cambios o la página agregada localmente, puedes hacer clic [aquí](/es/full_steps_pull_request).


## Código TODO EN UNO

Imagina que solo agregas archivos md e imágenes:

1. Por favor visita el [Repositorio de Github de la Plataforma Wiki de Seeed Studio](https://github.com/Seeed-Studio/wiki-documents/tree/docusaurus-version) y luego haz `fork` del repositorio 'wiki-documents' como tuyo.

2. Copia todo el código de una vez y ejecuta los comandos (recuerda reemplazar `{your repo}` con tu repositorio forkeado):

:::tip
Por ejemplo, si mi nombre de usuario de GitHub es `MatthewJeffson`, mi primer comando es: `git clone --no-checkout --depth 1 https://github.com/MatthewJeffson/wiki-documents.git`
:::

```bash
git clone --no-checkout --depth 1 https://github.com/{your repo}}/wiki-documents.git
cd wiki-documents
git sparse-checkout init --cone
git sparse-checkout set sidebars.js docs 
git switch docusaurus-version
git pull origin docusaurus-version
```

Habrá una carpeta llamada "wiki-documents" en tu PC.

2. Almacena todos los archivos (Los archivos markdown e imágenes) en la carpeta "Contributor_Files":

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/wiki-platform/contributor/files_stored.png" alt="pir" width={800} height="auto" /></p>

3. Sube todos los archivos a GitHub, ejecutando estos comandos:

```
git add .
git commit -m "Add new document"
git push origin docusaurus-version
```

4. Haz clic en "Pull Request" en tu repositorio lateral y todo está hecho.

<strong><font color={'8DC215'} size={"5"}>¡Hecho!</font></strong>

## Introducción PASO A PASO con Auto-Verificación

Aquí está la introducción para lo anterior, y presentando códigos de Auto-verificación.

1. Primero, clona el repositorio usando el siguiente comando:

   ```
   git clone --no-checkout --depth 1 https://github.com/Seeed-Studio/wiki-documents.git
   ```

   Aquí, usamos dos opciones:
   - `--no-checkout`: Clona el repositorio sin hacer checkout de ningún archivo, solo obteniendo los metadatos del repositorio. Esto acelera el proceso de clonado.
   - `--depth 1`: Clona solo el último commit de archivos y metadatos, sin obtener todo el historial. Esto reduce aún más la cantidad de datos descargados.

2. Después de clonar, navega al directorio del repositorio:

   ```
   cd wiki-documents
   ```

3. A continuación, habilita la función de sparse checkout de Git:

   ```
   git sparse-checkout init --cone
   ```

   Sparse checkout permite hacer checkout solo de un subconjunto de archivos en el repositorio, en lugar de todo el repositorio. La opción `--cone` habilita el modo cono, que soporta coincidencia de rutas más flexible.

4. Luego, configura las reglas de sparse checkout:

   ```
   git sparse-checkout set sidebars.js docs
   ```

   Este comando le dice a Git que haga checkout solo del archivo `sidebars.js` y del directorio `docs`. `sidebars.js` es el archivo de configuración de Docusaurus, y el directorio `docs` contiene todos los documentos Markdown.

5. Después de configurar las reglas de sparse checkout, asegúrate de cambiar a la rama `docusaurus-version`:

   ```
   git switch docusaurus-version
   ```

   Este paso es necesario porque la documentación se desarrolla y mantiene en esta rama.

6. Después de cambiar a la rama objetivo, obtén los archivos y directorios configurados:

   ```
   git pull origin docusaurus-version
   ```

   Este comando obtiene la última versión de `sidebars.js` y `docs` de la rama `docusaurus-version` del repositorio remoto.

7. Ahora, los contribuyentes pueden agregar nuevos archivos Markdown en el directorio `docs` y modificar el archivo `sidebars.js` para agregar las rutas de los nuevos documentos.

8. Después de agregar nuevos documentos, usa la herramienta Lint Markdown para verificar la sintaxis de los nuevos archivos:

   ```
   npm install -g @lint-md/cli
   npx @lint-md/cli docs/new-file.md
   ```

   Si hay errores de sintaxis o violaciones de convenciones en los nuevos archivos, Lint Markdown proporcionará avisos. Los contribuyentes pueden hacer modificaciones basadas en los avisos hasta que no haya mensajes de error.

9. Si los contribuyentes quieren corregir automáticamente algunos errores de sintaxis comunes, pueden usar la opción `--fix`:

   ```
   npx @lint-md/cli docs/new-file.md --fix
   ```

   Este comando corregirá automáticamente algunos problemas de formato comunes, como espacios faltantes entre texto chino e inglés, uso incorrecto de puntos suspensivos, etc.

10. Finalmente, después de completar todas las modificaciones, los contribuyentes pueden hacer commit de los cambios y subirlos al repositorio remoto:

    ```
    git add .
    git commit -m "Add new document"
    git push origin docusaurus-version
    ```

    Con esto, el nuevo documento se agrega exitosamente a la rama `docusaurus-version` del repositorio remoto.

Al usar la herramienta Lint Markdown en los pasos 8 y 9, podemos asegurar que los documentos recién agregados se adhieran a las convenciones, mejorando la calidad general y consistencia de la documentación.

Este proceso de contribución simplificado, junto con el uso de sparse checkout y Lint Markdown, optimiza el flujo de trabajo para los contribuyentes, haciéndolo más eficiente y fácil de usar.
