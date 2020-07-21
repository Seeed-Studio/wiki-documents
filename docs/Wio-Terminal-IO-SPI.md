# Using SPI on Wio Terminal

This Repo will demonstrate how to use SPI on Wio Terminal. You can use this to control other devices!

## Port Configurations

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-09.jpg"/></div>

As you can see, the physical SPI Pins are as follow:

- **MOSI** -> `GPIO 19`

- **MISO** -> `GPIO 21`

- **SCK** -> `GPIO 23`

- **SS** -> `GPIO 24`

## Software Configurations

In Arduino, all SPI pins are pre-defined and you can access the pins as follow:

- **MOSI** -> `PIN_SPI_MOSI`

- **MISO** -> `PIN_SPI_MISO`

- **SCK** -> `PIN_SPI_SCK`

- **SS** -> `PIN_SPI_SS`
