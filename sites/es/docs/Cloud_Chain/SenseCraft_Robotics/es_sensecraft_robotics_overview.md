---
title: Descripción general del software SenseCraft Robotics
description: Explora SenseCraft Robotics, las combinaciones de brazos compatibles, la instalación del software y la configuración de la cuenta, los flujos de trabajo de proyectos, la configuración y los créditos y la facturación.
keywords:
  - SenseCraft Robotics
  - robótica
  - brazo robótico
image: https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-en.webp
slug: /sensecraft_robotics
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

## 1. Introducción al software

SenseCraft™ Robotics es una plataforma de entrenamiento y ejecución para tareas de brazos robóticos en el mundo real. Proporciona un flujo de trabajo integrado que cubre la conexión de dispositivos, calibración, recopilación de datos, entrenamiento de modelos y validación, ayudando a los usuarios en educación, investigación y aplicaciones de robótica a pasar más rápidamente de los datos de demostración a las acciones físicas.

![Sitio web oficial de SenseCraft Robotics](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-en.webp)

### 1.1 Descripción general del software

El flujo de trabajo principal de la plataforma es el siguiente:

1. **Configuración del dispositivo**: Selecciona el modelo de brazo robótico, vincula el brazo Leader, el brazo Follower y las cámaras, y luego completa la calibración y la verificación de teleoperación.
2. **Recopilación de datos**: Usa el brazo Leader para controlar el brazo Follower durante las demostraciones de tareas y registra varios segmentos de datos.
3. **Biblioteca de acciones**: Registra, gestiona y reproduce segmentos de acción ejecutables de forma independiente.
4. **Gestión de conjuntos de datos**: Previsualiza vídeos y repara, fusiona o carga conjuntos de datos.
5. **Entrenamiento**: Selecciona un conjunto de datos y realiza entrenamiento en la nube o local.
6. **Ejecución**: Selecciona un modelo entrenado y realiza inferencia local o en la nube para que el brazo robótico pueda ejecutar tareas de forma autónoma.

### 1.2 Funciones clave

- **Flujo de trabajo guiado**: Completa paso a paso la configuración del dispositivo, la recopilación de datos, el entrenamiento y la verificación en tiempo de ejecución.
- **Entrenamiento en la nube**: Envía las principales tareas de entrenamiento a la nube para reducir los requisitos de computación local.
- **Gestión de proyectos**: Gestiona proyectos, conjuntos de datos y modelos en un solo lugar para su reutilización e iteración continua.

Entrada oficial: [SenseCraft Robotics](https://sensecraft.seeed.cc/en?utm_source=sensecraft_wiki&utm_medium=socil)

### 1.3 Casos de uso

- **Organizaciones de educación y formación / educación STEM**: Organizar cursos de robótica con IA, aprendizaje basado en proyectos y demostraciones de proyectos estudiantiles.
- **Universidades / instituciones de investigación / laboratorios**: Apoyar la inteligencia encarnada, el aprendizaje por imitación, la recopilación de datos robóticos y la validación de modelos.
- **Centros de innovación / equipos de demostración y soluciones**: Crear prototipos demostrables de aplicaciones de robótica con IA para educación pública, experiencias de clientes y diseño de soluciones basadas en escenarios.

<span id="supported-devices"></span>

## 2. Dispositivos compatibles

### 2.1 Brazos robóticos compatibles

![Tres recomendaciones de selección de brazos robóticos](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/device-model-selection.webp)

Elige un dispositivo según tus objetivos: selecciona un modelo de nivel de entrada para aprendizaje introductorio y desarrollo básico; elige un modelo avanzado cuando se requiera un rendimiento más potente y capacidades de desarrollo secundario; selecciona un modelo de aplicación de alta precisión cuando la precisión de posicionamiento y la estabilidad de movimiento sean importantes.

| Modelo | Combinación de dispositivos (Leader + Follower) | Enlace de compra | Guía dedicada |
|---|---|---|---|
| 01 | SO-ARM101 + SO-ARM101 | [Buy now](https://www.seeedstudio.com/SO-101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html?utm_source=sensecraft_wiki&utm_medium=socil) | [Guía SO-ARM101](/es/sensecraft_robotics_so_arm101/) |
| 02 | reBot Arm 102 + B601 DM | [Buy now](https://www.seeedstudio.com/reBot-Arm-B601-DM-p-6740.html?utm_source=sensecraft_wiki&utm_medium=socil) | [Guía DM](/es/sensecraft_robotics_rebot_arm_102_b601_dm/) |
| 03 | reBot Arm 102 + B601 RS | [Buy now](https://www.seeedstudio.com/reBot-Arm-B601-RS-Assembled-Kit-with-Gripper-p-6865.html?utm_source=sensecraft_wiki&utm_medium=socil) | [Guía RS](/es/sensecraft_robotics_rebot_arm_102_b601_rs/) |

> Este artículo describe el flujo de trabajo de software común para las tres combinaciones de dispositivos. Para la instalación del brazo robótico, el cableado y los requisitos de alimentación, consulta la guía dedicada para la combinación de dispositivos correspondiente.

### 2.2 Requisitos de ordenador y software

- Un ordenador con Windows o macOS.
- Una conexión de red estable para el inicio de sesión, la gestión de proyectos, el entrenamiento en la nube y la verificación de inferencias.
- La última versión del cliente SenseCraft Robotics.
- Una cuenta registrada de SenseCraft. Consulta la página oficial de descarga de software para conocer los requisitos específicos del sistema operativo y del hardware.

<span id="download-and-account"></span>

## 3. Descarga e instalación del software

![Descarga de software](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/software-overview-en.webp)

### 3.1 Descargar el software

Abre la [página oficial de SenseCraft Robotics](https://sensecraft.seeed.cc/en?utm_source=sensecraft_wiki&utm_medium=socil), ve a la sección de descarga de software y selecciona el instalador para tu sistema operativo.

### 3.2 Instalar el software

Ejecuta el instalador y sigue el asistente de instalación. Después de la instalación, inicia el cliente SenseCraft Robotics. Recomendamos reservar suficiente espacio en disco para vídeos, conjuntos de datos y archivos de modelos.

### 3.3 Crear una cuenta

En el centro de usuario, selecciona **Sign up** o **Create account**, y luego sigue las instrucciones en pantalla para verificar tu dirección de correo electrónico y establecer una contraseña. Después del registro, vuelve al cliente SenseCraft Robotics.

![Registro de cuenta](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/sign-up-en.webp)

### 3.4 Iniciar sesión en el software

El cliente SenseCraft Robotics abre el centro de usuario de SenseCraft en el navegador de tu sistema para completar el inicio de sesión. El propio cliente no recopila directamente tu contraseña.

1. Inicia el cliente SenseCraft Robotics y haz clic en **Log in** en la ventana de inicio de sesión.
2. El navegador del sistema abre el centro de usuario de SenseCraft. Inicia sesión con tu dirección de correo electrónico registrada y contraseña, y completa cualquier paso de verificación o autorización de cuenta que se muestre.
3. Después de iniciar sesión, entrarás en la página de **Projects**, donde puedes crear un nuevo proyecto o abrir uno existente.



## 4. Vista rápida del software

<span id="home"></span>

### 4.1 Inicio

La página de Inicio proporciona acceso a la plataforma, al estado de los proyectos y a las funciones de uso frecuente. Al usar la plataforma por primera vez, puedes entrar en un proyecto o ver la información de ayuda desde la página de Inicio.

![Descripción general de la página de inicio](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/overview-en.webp)

<span id="projects"></span>

### 4.2 Proyectos

Un proyecto es un espacio de trabajo unificado para gestionar dispositivos, tareas, conjuntos de datos y modelos. Después de iniciar sesión, sigue estos pasos para tu primer uso:

1. Crea un proyecto y selecciona una combinación de brazos robóticos.
2. Conecta el brazo Leader, el brazo Follower y las cámaras.
3. Completa la calibración del dispositivo y la verificación de teleoperación.
4. Registra un segmento de datos de demostración.
5. Revisa el conjunto de datos y súbelo o utilízalo para entrenamiento.
6. Selecciona un modelo para la verificación en tiempo de ejecución.

![Configuración del proyecto](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/project-settings-en.webp)

<span id="settings"></span>

### 4.3 Configuración

Haz clic en **Settings** en la barra de navegación superior para abrir la página de Configuración. Principalmente contiene los siguientes tres módulos:

- **Información personal**: Ver y **editar** tu información básica de cuenta, incluyendo tu avatar, nombre de usuario, dirección de correo electrónico vinculada y ocupación.
- **Configuración de contraseña**: Cambiar la contraseña de tu cuenta. Introduce tu **contraseña actual** para verificar tu identidad y luego establece y confirma una **nueva contraseña**.
- **Software y servicios**:
  - **Conexiones de servicio**: Gestionar las conexiones autorizadas a plataformas de IA de terceros como Hugging Face.
  - **Gestión de versiones**: Ver la versión actual del software y buscar actualizaciones. Puedes **Check for updates**, **Download update** o **Restart and update**. Si se producen problemas de verificación, utiliza el mensaje para visitar la página oficial de descarga.

![Configuración](https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/overview/software-settings-en.webp)

<span id="credits"></span>

## 5. Créditos y facturación

### 5.1 Modelo de facturación

SenseCraft Robotics utiliza un modelo basado en créditos en el que el uso de GPU se cobra según el uso real.

> Los precios de los créditos, las fechas de vencimiento, el momento de facturación, las reglas de reembolso y las ofertas educativas pueden variar según la región, la versión del software y la promoción. Esta sección se proporciona solo como referencia funcional. Para conocer las reglas más recientes, consulta la página de facturación actual de SenseCraft Robotics, la página de confirmación de tareas y los términos de servicio.

- Los créditos comprados o canjeados se pueden utilizar para tareas de entrenamiento e inferencia.
- Los cargos se basan en el modelo de GPU seleccionado y el tiempo de ejecución real.
- La espera en cola y la preparación de recursos generalmente no generan cargos; la facturación comienza cuando la tarea realmente se ejecuta.
- Consulta la página actual de la plataforma para conocer los precios específicos.

### 5.2 Añadir créditos

Los usuarios pueden obtener créditos mediante recargas en la plataforma, códigos de canje o códigos de cursos educativos.

- Las recargas de mayor importe pueden incluir más créditos de bonificación.
- Los nuevos usuarios pueden recibir un bono de créditos por única vez.
- Los usuarios de educación pueden utilizar créditos compartidos proporcionados por una escuela u organización a través de un código de curso.
- Los diferentes tipos de créditos pueden tener diferentes reglas de vencimiento y reembolso.

### 5.3 Cargos por entrenamiento e inferencia

Cuando se crea una tarea, la plataforma estima el consumo esperado en función del tipo de tarea, el modelo de GPU y el número de pasos de entrenamiento. El cargo final se liquida según el tiempo de ejecución real.

- Las tareas de entrenamiento estiman el tiempo de ejecución en función del número de pasos de entrenamiento.
- Las tareas de inferencia se cobran según el tiempo de ejecución real.
- El cargo final puede ser inferior o superior a la estimación.
- Si el saldo es insuficiente, la tarea puede detenerse automáticamente. La cuenta no incurrirá en un saldo de créditos negativo.

### 5.4 Reembolsos y vencimiento de créditos

- Los créditos comprados, de bonificación y educativos se gestionan de acuerdo con las reglas de la plataforma.
- Si una tarea no se inicia o se produce un problema con la plataforma o la GPU, los créditos no utilizados generalmente pueden ser devueltos.
- Si un usuario cancela una tarea, la parte que ya se ha ejecutado se cobra según el uso real.
- Los créditos utilizados generalmente no son reembolsables.
- Consulta la información actual de la plataforma para conocer las reglas específicas de vencimiento y reembolso.
