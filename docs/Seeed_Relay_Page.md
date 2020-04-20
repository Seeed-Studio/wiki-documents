![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg)

Gas sensor is a device which can detect the presence of various toxic and combustible gases present in the environment. 

## Operating Principle

The interaction between the test gas and the sensing surface can be detected by the measurements of change in resistance, capacitance, work function, mass, optical characteristics etc. Below table is from Source[^1].


| Class of gas sensors        | Operating principle                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Electrochemical             | Changes in current, voltage, capacitance/impedance: 1. Voltammetry (including amperometry) 2. Potentiometry 3. Chemically sensitized field-effect transistor 4. Potentiometry with solid electrolytes for gas sensing  |
| Electrical                  | Metal oxide conductivity Organic conductivity Electrolytic conductivity Heterojunction conductivity (Schottky diode, FET, MOS) Work function Electric permittivity (capacitance)                                       |
| Mass sensitive              | Changes in the weight, amplitude, phase or frequency, size, shape, or position: 1. Quartz crystal microbalance 2. Surface acoustic wave propagation 3. Cantilever                                                      |
| Magnetic                    | Changes of paramagnetic gas properties                                                                                                                                                                                 |
| Optical devices             | Changes in light intensity, color, or emission spectra: 1. Absorbance 2. Reflectance 3. Luminescence 4. Refractive index 5. Optothermal effect 6. Light scattering (Raman scattering, plasmon resonance)               |
| Thermometric (calorimetric) | Heat effects of a specific chemical reaction. Changes in temperature, heat flow, heat content: 1. Thermoelectric 2. Pyroelectric 3. Catalytic bead (pellistors) 4. Thermal conductivity                                |

<div align="center"><b>Table 1.</b><i>The classification of gas sensors suggested in 1991 by Analytical Chemistry Division of IUPAC, </i></div>

[^1]: Source: Reprinted from I lulanicki et al. (1991). Published by International Union of Pure and Applied Chemistry.


## Field of Applicaitons

There are a numerous use of these gas sensors. Particularly, using these gas sensors human beings can be saved from potential dangers. Hence the gas sensors play important roles in various sectors, which include industry, medical, environmental applications, and domestic applications for monitoring toxic and flammable gases. Below table is from Source[^2].


| Field of application                                          | Function                                                                                                                                                                                                                                       | Examples of detected gases                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Environment                                                   | Monitoring toxic gases present in the atmosphere, due to industrial emissions (weather stations, pollutionmonitoring)                                                                                                                          | CO, CH4, humidity, CO2, O3, VOCs, SOx                           |
| Safety at work                                                | Control of indoor air quality; monitoring toxic gases in a working environment, for instance in a factory where dangerous chemicals are used                                                                                                   | Toxic gases, combustible gases, O2                              |
| Domestic safety/household application                         | Detection of poisonous gases or smoke in households, due to accidents such as fires and explosions; intelligent refrigera­tor or oven; fire alarm; natural gas heating; leak detection; air quality control; air purifiers; cooking control    | CO, humidity, CO2, VOCs                                         |
| Safety in car                                                 | Car ventilation control; gasoline vapor detection; alcohol breath tests                                                                                                                                                                        | CO, LPG, VOCs, CH4                                              |
| Public security                                               | Control of indoor air quality, detection of substances dangerous for the safety of the general public                                                                                                                                          | Toxic gases, combustible gases, flammable gases, explosives, O2 |
| Medical/clinical                                              | Diagnostics(breath analysis, disease detection); point-of-care patient monitoring; drug monitoring; artificial organs and prostheses; new drug discovery                                                                                       | O2, NH, NOx, CO2, H2S, H2, CL2, anesthesia gases                |
| Agriculture                                                   | Plant/animal diagnostics; soil and water testing; meat/poultry inspect ion; waste/sewage monitoring                                                                                                                                            | amines, humidity, CO                                            |
| Food quality   control                                        | Detection of particular molecules, which are formed when food starts to rot and it is no longer good for consumption                                                                                                                           | humidity, CO2                                                   |
| Utilities/automotive/power plants                             | Control of the concentration of the gases in the engine and gas boiler, to guarantee the highest possible efficiency of the combustion process. The same concept can also be applied to power plants, as the energy is generated by combustion | O2, CO, HCs, NOx, SOx, CO2, H2, HCs                             |
| Industry:  Petrochemical Steel/Water treatment/Semiconductor  | Process monitoring and control; quality control; workplace monitoring; waste stream monitoring; leakage alarm                                                                                                                                  | HCs, conventional pollutants, O2, H2, O3, CO2, CL2, CH4,H2S     |
| Defense/military                                              | Detection of chemical, biological, and toxin warfare agents; treaty verification                                                                                                                                                               | Agents, explosives, propellants                                 |
| Aerospace                                                     | Monitoring of oxygen and toxic and flammable gases in the environ­ment atmosphere                                                                                                                                                              | H2, O2, CO3, humidity                                           |
| Traffic/tunnels/car parks                                     | City traffic control and management; air quality monitoring in tunnels or underground parking garages                                                                                                                                          |                                                                 |


<div align="center"><b>Table 2.</b><i>Some examples of gas sensor applications</i></div>

[^2]: Source: Data from Taylor (1996), Stcttcr et al. (2003), Capone ct al. (2003), etc. HCs hydrocarbons, VOCs volatile organic compounds.


## Seeed Gas Sensor

For all the Grove Gas sensors in our bazaar, please click [bazaar Grove Gas sensors tag](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all) to check.

Or you can click **[here](http://wiki.seeedstudio.com/gas_sensor_selection/)** to get better view of the table. 


| Name                                                            | Target Gas                                                                                   | Class of gas sensors | Field of application                                                                                                                                 | Sensor     | Detecting Range                                                                                                                    | Accuracy                                                                                                                                                                                   | Operate voltage | Interface | Click to Buy                                                                                                            |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| Grove - Air Quality Sensor v1.3                                 | Alcohol, Smoke                                                                               | Electrochemical      | Environment                                                                                                                                          | MP503      | 10-1000ppm(Alcohol)                                                                                                                | NA                                                                                                                                                                                         | 3.3V 5V         | Analog    | [Order](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)                                          |
| Grove - Alcohol Sensor                                          | Alcohol                                                                                      | Electrochemical      | Safety in car  Public security                                                                                                                       | MQ303A     |  20-1000ppm Alcohol                                                                                                                | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)                                                    |
| Grove - CO2 Sensor                                              | CO2                                                                                          | Electrochemical      | Environment  Agriculture                                                                                                                             | MH-Z16     | 0-5000ppm                                                                                                                          | ±(50ppm +5%)                                                                                                                                                                               | 5V              | UART      | [Order](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html)                                      |
| Grove - CO2 & Temperature & Humidity Sensor (SCD30)             | CO2                                                                                          | Optical devices      | Environment  Agriculture                                                                                                                             | SCD30      | 0-40000ppm                                                                                                                         | ±(30 ppm + 3%)                                                                                                                                                                             | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
| Grove - VOC and eCO2 Gas Sensor (SGP30)                         | VOC,CO2                                                                                      | Electrical           | Environment  Agriculture                                                                                                                             | SGP30      | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm                                                                                  | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html)                                    |
| Grove - Gas Sensor(MQ2)                                         | LPG, i-butane, propane, methane, alcohol, Hydrogen, smoke                                    | Electrochemical      | Domestic safety/household application  Safety at work                                                                                                | MQ2        | LPG and propane: 200ppm-5000ppm  Butane: 300ppm-5000ppm  Methane: 5000ppm-20000ppm  H2: 300ppm-5000ppm  Alcohol:100ppm-2000ppm     | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)                                                     |
![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg)

Gas sensor is a device which can detect the presence of various toxic and combustible gases present in the environment. 

## Operating Principle

The interaction between the test gas and the sensing surface can be detected by the measurements of change in resistance, capacitance, work function, mass, optical characteristics etc. Below table is from Source[^1].


| Class of gas sensors        | Operating principle                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Electrochemical             | Changes in current, voltage, capacitance/impedance: 1. Voltammetry (including amperometry) 2. Potentiometry 3. Chemically sensitized field-effect transistor 4. Potentiometry with solid electrolytes for gas sensing  |
| Electrical                  | Metal oxide conductivity Organic conductivity Electrolytic conductivity Heterojunction conductivity (Schottky diode, FET, MOS) Work function Electric permittivity (capacitance)                                       |
| Mass sensitive              | Changes in the weight, amplitude, phase or frequency, size, shape, or position: 1. Quartz crystal microbalance 2. Surface acoustic wave propagation 3. Cantilever                                                      |
| Magnetic                    | Changes of paramagnetic gas properties                                                                                                                                                                                 |
| Optical devices             | Changes in light intensity, color, or emission spectra: 1. Absorbance 2. Reflectance 3. Luminescence 4. Refractive index 5. Optothermal effect 6. Light scattering (Raman scattering, plasmon resonance)               |
| Thermometric (calorimetric) | Heat effects of a specific chemical reaction. Changes in temperature, heat flow, heat content: 1. Thermoelectric 2. Pyroelectric 3. Catalytic bead (pellistors) 4. Thermal conductivity                                |

<div align="center"><b>Table 1.</b><i>The classification of gas sensors suggested in 1991 by Analytical Chemistry Division of IUPAC, </i></div>

[^1]: Source: Reprinted from I lulanicki et al. (1991). Published by International Union of Pure and Applied Chemistry.


## Field of Applicaitons

There are a numerous use of these gas sensors. Particularly, using these gas sensors human beings can be saved from potential dangers. Hence the gas sensors play important roles in various sectors, which include industry, medical, environmental applications, and domestic applications for monitoring toxic and flammable gases. Below table is from Source[^2].


| Field of application                                          | Function                                                                                                                                                                                                                                       | Examples of detected gases                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Environment                                                   | Monitoring toxic gases present in the atmosphere, due to industrial emissions (weather stations, pollutionmonitoring)                                                                                                                          | CO, CH4, humidity, CO2, O3, VOCs, SOx                           |
| Safety at work                                                | Control of indoor air quality; monitoring toxic gases in a working environment, for instance in a factory where dangerous chemicals are used                                                                                                   | Toxic gases, combustible gases, O2                              |
| Domestic safety/household application                         | Detection of poisonous gases or smoke in households, due to accidents such as fires and explosions; intelligent refrigera­tor or oven; fire alarm; natural gas heating; leak detection; air quality control; air purifiers; cooking control    | CO, humidity, CO2, VOCs                                         |
| Safety in car                                                 | Car ventilation control; gasoline vapor detection; alcohol breath tests                                                                                                                                                                        | CO, LPG, VOCs, CH4                                              |
| Public security                                               | Control of indoor air quality, detection of substances dangerous for the safety of the general public                                                                                                                                          | Toxic gases, combustible gases, flammable gases, explosives, O2 |
| Medical/clinical                                              | Diagnostics(breath analysis, disease detection); point-of-care patient monitoring; drug monitoring; artificial organs and prostheses; new drug discovery                                                                                       | O2, NH, NOx, CO2, H2S, H2, CL2, anesthesia gases                |
| Agriculture                                                   | Plant/animal diagnostics; soil and water testing; meat/poultry inspect ion; waste/sewage monitoring                                                                                                                                            | amines, humidity, CO                                            |
| Food quality   control                                        | Detection of particular molecules, which are formed when food starts to rot and it is no longer good for consumption                                                                                                                           | humidity, CO2                                                   |
| Utilities/automotive/power plants                             | Control of the concentration of the gases in the engine and gas boiler, to guarantee the highest possible efficiency of the combustion process. The same concept can also be applied to power plants, as the energy is generated by combustion | O2, CO, HCs, NOx, SOx, CO2, H2, HCs                             |
| Industry:  Petrochemical Steel/Water treatment/Semiconductor  | Process monitoring and control; quality control; workplace monitoring; waste stream monitoring; leakage alarm                                                                                                                                  | HCs, conventional pollutants, O2, H2, O3, CO2, CL2, CH4,H2S     |
| Defense/military                                              | Detection of chemical, biological, and toxin warfare agents; treaty verification                                                                                                                                                               | Agents, explosives, propellants                                 |
| Aerospace                                                     | Monitoring of oxygen and toxic and flammable gases in the environ­ment atmosphere                                                                                                                                                              | H2, O2, CO3, humidity                                           |
| Traffic/tunnels/car parks                                     | City traffic control and management; air quality monitoring in tunnels or underground parking garages                                                                                                                                          |                                                                 |


<div align="center"><b>Table 2.</b><i>Some examples of gas sensor applications</i></div>

[^2]: Source: Data from Taylor (1996), Stcttcr et al. (2003), Capone ct al. (2003), etc. HCs hydrocarbons, VOCs volatile organic compounds.


## Seeed Gas Sensor

For all the Grove Gas sensors in our bazaar, please click [bazaar Grove Gas sensors tag](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all) to check.

Or you can click **[here](http://wiki.seeedstudio.com/gas_sensor_selection/)** to get better view of the table. 


| Name                                                            | Target Gas                                                                                   | Class of gas sensors | Field of application                                                                                                                                 | Sensor     | Detecting Range                                                                                                                    | Accuracy                                                                                                                                                                                   | Operate voltage | Interface | Click to Buy                                                                                                            |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| Grove - Air Quality Sensor v1.3                                 | Alcohol, Smoke                                                                               | Electrochemical      | Environment                                                                                                                                          | MP503      | 10-1000ppm(Alcohol)                                                                                                                | NA                                                                                                                                                                                         | 3.3V 5V         | Analog    | [Order](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)                                          |
| Grove - Alcohol Sensor                                          | Alcohol                                                                                      | Electrochemical      | Safety in car  Public security                                                                                                                       | MQ303A     |  20-1000ppm Alcohol                                                                                                                | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)                                                    |
| Grove - CO2 Sensor                                              | CO2                                                                                          | Electrochemical      | Environment  Agriculture                                                                                                                             | MH-Z16     | 0-5000ppm                                                                                                                          | ±(50ppm +5%)                                                                                                                                                                               | 5V              | UART      | [Order](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html)                                      |
| Grove - CO2 & Temperature & Humidity Sensor (SCD30)             | CO2                                                                                          | Optical devices      | Environment  Agriculture                                                                                                                             | SCD30      | 0-40000ppm                                                                                                                         | ±(30 ppm + 3%)                                                                                                                                                                             | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
| Grove - VOC and eCO2 Gas Sensor (SGP30)                         | VOC,CO2                                                                                      | Electrical           | Environment  Agriculture                                                                                                                             | SGP30      | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm                                                                                  | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html)                                    |
| Grove - Gas Sensor(MQ2)                                         | LPG, i-butane, propane, methane, alcohol, Hydrogen, smoke                                    | Electrochemical      | Domestic safety/household application  Safety at work                                                                                                | MQ2        | LPG and propane: 200ppm-5000ppm  Butane: 300ppm-5000ppm  Methane: 5000ppm-20000ppm  H2: 300ppm-5000ppm  Alcohol:100ppm-2000ppm     | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)                                                     |
![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg)

Gas sensor is a device which can detect the presence of various toxic and combustible gases present in the environment. 

## Operating Principle

The interaction between the test gas and the sensing surface can be detected by the measurements of change in resistance, capacitance, work function, mass, optical characteristics etc. Below table is from Source[^1].


| Class of gas sensors        | Operating principle                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Electrochemical             | Changes in current, voltage, capacitance/impedance: 1. Voltammetry (including amperometry) 2. Potentiometry 3. Chemically sensitized field-effect transistor 4. Potentiometry with solid electrolytes for gas sensing  |
| Electrical                  | Metal oxide conductivity Organic conductivity Electrolytic conductivity Heterojunction conductivity (Schottky diode, FET, MOS) Work function Electric permittivity (capacitance)                                       |
| Mass sensitive              | Changes in the weight, amplitude, phase or frequency, size, shape, or position: 1. Quartz crystal microbalance 2. Surface acoustic wave propagation 3. Cantilever                                                      |
| Magnetic                    | Changes of paramagnetic gas properties                                                                                                                                                                                 |
| Optical devices             | Changes in light intensity, color, or emission spectra: 1. Absorbance 2. Reflectance 3. Luminescence 4. Refractive index 5. Optothermal effect 6. Light scattering (Raman scattering, plasmon resonance)               |
| Thermometric (calorimetric) | Heat effects of a specific chemical reaction. Changes in temperature, heat flow, heat content: 1. Thermoelectric 2. Pyroelectric 3. Catalytic bead (pellistors) 4. Thermal conductivity                                |

<div align="center"><b>Table 1.</b><i>The classification of gas sensors suggested in 1991 by Analytical Chemistry Division of IUPAC, </i></div>

[^1]: Source: Reprinted from I lulanicki et al. (1991). Published by International Union of Pure and Applied Chemistry.


## Field of Applicaitons

There are a numerous use of these gas sensors. Particularly, using these gas sensors human beings can be saved from potential dangers. Hence the gas sensors play important roles in various sectors, which include industry, medical, environmental applications, and domestic applications for monitoring toxic and flammable gases. Below table is from Source[^2].


| Field of application                                          | Function                                                                                                                                                                                                                                       | Examples of detected gases                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Environment                                                   | Monitoring toxic gases present in the atmosphere, due to industrial emissions (weather stations, pollutionmonitoring)                                                                                                                          | CO, CH4, humidity, CO2, O3, VOCs, SOx                           |
| Safety at work                                                | Control of indoor air quality; monitoring toxic gases in a working environment, for instance in a factory where dangerous chemicals are used                                                                                                   | Toxic gases, combustible gases, O2                              |
| Domestic safety/household application                         | Detection of poisonous gases or smoke in households, due to accidents such as fires and explosions; intelligent refrigera­tor or oven; fire alarm; natural gas heating; leak detection; air quality control; air purifiers; cooking control    | CO, humidity, CO2, VOCs                                         |
| Safety in car                                                 | Car ventilation control; gasoline vapor detection; alcohol breath tests                                                                                                                                                                        | CO, LPG, VOCs, CH4                                              |
| Public security                                               | Control of indoor air quality, detection of substances dangerous for the safety of the general public                                                                                                                                          | Toxic gases, combustible gases, flammable gases, explosives, O2 |
| Medical/clinical                                              | Diagnostics(breath analysis, disease detection); point-of-care patient monitoring; drug monitoring; artificial organs and prostheses; new drug discovery                                                                                       | O2, NH, NOx, CO2, H2S, H2, CL2, anesthesia gases                |
| Agriculture                                                   | Plant/animal diagnostics; soil and water testing; meat/poultry inspect ion; waste/sewage monitoring                                                                                                                                            | amines, humidity, CO                                            |
| Food quality   control                                        | Detection of particular molecules, which are formed when food starts to rot and it is no longer good for consumption                                                                                                                           | humidity, CO2                                                   |
| Utilities/automotive/power plants                             | Control of the concentration of the gases in the engine and gas boiler, to guarantee the highest possible efficiency of the combustion process. The same concept can also be applied to power plants, as the energy is generated by combustion | O2, CO, HCs, NOx, SOx, CO2, H2, HCs                             |
| Industry:  Petrochemical Steel/Water treatment/Semiconductor  | Process monitoring and control; quality control; workplace monitoring; waste stream monitoring; leakage alarm                                                                                                                                  | HCs, conventional pollutants, O2, H2, O3, CO2, CL2, CH4,H2S     |
| Defense/military                                              | Detection of chemical, biological, and toxin warfare agents; treaty verification                                                                                                                                                               | Agents, explosives, propellants                                 |
| Aerospace                                                     | Monitoring of oxygen and toxic and flammable gases in the environ­ment atmosphere                                                                                                                                                              | H2, O2, CO3, humidity                                           |
| Traffic/tunnels/car parks                                     | City traffic control and management; air quality monitoring in tunnels or underground parking garages                                                                                                                                          |                                                                 |


<div align="center"><b>Table 2.</b><i>Some examples of gas sensor applications</i></div>

[^2]: Source: Data from Taylor (1996), Stcttcr et al. (2003), Capone ct al. (2003), etc. HCs hydrocarbons, VOCs volatile organic compounds.


## Seeed Gas Sensor

For all the Grove Gas sensors in our bazaar, please click [bazaar Grove Gas sensors tag](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all) to check.

Or you can click **[here](http://wiki.seeedstudio.com/gas_sensor_selection/)** to get better view of the table. 


| Name                                                            | Target Gas                                                                                   | Class of gas sensors | Field of application                                                                                                                                 | Sensor     | Detecting Range                                                                                                                    | Accuracy                                                                                                                                                                                   | Operate voltage | Interface | Click to Buy                                                                                                            |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| Grove - Air Quality Sensor v1.3                                 | Alcohol, Smoke                                                                               | Electrochemical      | Environment                                                                                                                                          | MP503      | 10-1000ppm(Alcohol)                                                                                                                | NA                                                                                                                                                                                         | 3.3V 5V         | Analog    | [Order](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)                                          |
| Grove - Alcohol Sensor                                          | Alcohol                                                                                      | Electrochemical      | Safety in car  Public security                                                                                                                       | MQ303A     |  20-1000ppm Alcohol                                                                                                                | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)                                                    |
| Grove - CO2 Sensor                                              | CO2                                                                                          | Electrochemical      | Environment  Agriculture                                                                                                                             | MH-Z16     | 0-5000ppm                                                                                                                          | ±(50ppm +5%)                                                                                                                                                                               | 5V              | UART      | [Order](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html)                                      |
| Grove - CO2 & Temperature & Humidity Sensor (SCD30)             | CO2                                                                                          | Optical devices      | Environment  Agriculture                                                                                                                             | SCD30      | 0-40000ppm                                                                                                                         | ±(30 ppm + 3%)                                                                                                                                                                             | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
| Grove - VOC and eCO2 Gas Sensor (SGP30)                         | VOC,CO2                                                                                      | Electrical           | Environment  Agriculture                                                                                                                             | SGP30      | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm                                                                                  | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html)                                    |
| Grove - Gas Sensor(MQ2)                                         | LPG, i-butane, propane, methane, alcohol, Hydrogen, smoke                                    | Electrochemical      | Domestic safety/household application  Safety at work                                                                                                | MQ2        | LPG and propane: 200ppm-5000ppm  Butane: 300ppm-5000ppm  Methane: 5000ppm-20000ppm  H2: 300ppm-5000ppm  Alcohol:100ppm-2000ppm     | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)                                                     |
![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg)

Gas sensor is a device which can detect the presence of various toxic and combustible gases present in the environment. 

## Operating Principle

The interaction between the test gas and the sensing surface can be detected by the measurements of change in resistance, capacitance, work function, mass, optical characteristics etc. Below table is from Source[^1].


| Class of gas sensors        | Operating principle                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Electrochemical             | Changes in current, voltage, capacitance/impedance: 1. Voltammetry (including amperometry) 2. Potentiometry 3. Chemically sensitized field-effect transistor 4. Potentiometry with solid electrolytes for gas sensing  |
| Electrical                  | Metal oxide conductivity Organic conductivity Electrolytic conductivity Heterojunction conductivity (Schottky diode, FET, MOS) Work function Electric permittivity (capacitance)                                       |
| Mass sensitive              | Changes in the weight, amplitude, phase or frequency, size, shape, or position: 1. Quartz crystal microbalance 2. Surface acoustic wave propagation 3. Cantilever                                                      |
| Magnetic                    | Changes of paramagnetic gas properties                                                                                                                                                                                 |
| Optical devices             | Changes in light intensity, color, or emission spectra: 1. Absorbance 2. Reflectance 3. Luminescence 4. Refractive index 5. Optothermal effect 6. Light scattering (Raman scattering, plasmon resonance)               |
| Thermometric (calorimetric) | Heat effects of a specific chemical reaction. Changes in temperature, heat flow, heat content: 1. Thermoelectric 2. Pyroelectric 3. Catalytic bead (pellistors) 4. Thermal conductivity                                |

<div align="center"><b>Table 1.</b><i>The classification of gas sensors suggested in 1991 by Analytical Chemistry Division of IUPAC, </i></div>

[^1]: Source: Reprinted from I lulanicki et al. (1991). Published by International Union of Pure and Applied Chemistry.


## Field of Applicaitons

There are a numerous use of these gas sensors. Particularly, using these gas sensors human beings can be saved from potential dangers. Hence the gas sensors play important roles in various sectors, which include industry, medical, environmental applications, and domestic applications for monitoring toxic and flammable gases. Below table is from Source[^2].


| Field of application                                          | Function                                                                                                                                                                                                                                       | Examples of detected gases                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Environment                                                   | Monitoring toxic gases present in the atmosphere, due to industrial emissions (weather stations, pollutionmonitoring)                                                                                                                          | CO, CH4, humidity, CO2, O3, VOCs, SOx                           |
| Safety at work                                                | Control of indoor air quality; monitoring toxic gases in a working environment, for instance in a factory where dangerous chemicals are used                                                                                                   | Toxic gases, combustible gases, O2                              |
| Domestic safety/household application                         | Detection of poisonous gases or smoke in households, due to accidents such as fires and explosions; intelligent refrigera­tor or oven; fire alarm; natural gas heating; leak detection; air quality control; air purifiers; cooking control    | CO, humidity, CO2, VOCs                                         |
| Safety in car                                                 | Car ventilation control; gasoline vapor detection; alcohol breath tests                                                                                                                                                                        | CO, LPG, VOCs, CH4                                              |
| Public security                                               | Control of indoor air quality, detection of substances dangerous for the safety of the general public                                                                                                                                          | Toxic gases, combustible gases, flammable gases, explosives, O2 |
| Medical/clinical                                              | Diagnostics(breath analysis, disease detection); point-of-care patient monitoring; drug monitoring; artificial organs and prostheses; new drug discovery                                                                                       | O2, NH, NOx, CO2, H2S, H2, CL2, anesthesia gases                |
| Agriculture                                                   | Plant/animal diagnostics; soil and water testing; meat/poultry inspect ion; waste/sewage monitoring                                                                                                                                            | amines, humidity, CO                                            |
| Food quality   control                                        | Detection of particular molecules, which are formed when food starts to rot and it is no longer good for consumption                                                                                                                           | humidity, CO2                                                   |
| Utilities/automotive/power plants                             | Control of the concentration of the gases in the engine and gas boiler, to guarantee the highest possible efficiency of the combustion process. The same concept can also be applied to power plants, as the energy is generated by combustion | O2, CO, HCs, NOx, SOx, CO2, H2, HCs                             |
| Industry:  Petrochemical Steel/Water treatment/Semiconductor  | Process monitoring and control; quality control; workplace monitoring; waste stream monitoring; leakage alarm                                                                                                                                  | HCs, conventional pollutants, O2, H2, O3, CO2, CL2, CH4,H2S     |
| Defense/military                                              | Detection of chemical, biological, and toxin warfare agents; treaty verification                                                                                                                                                               | Agents, explosives, propellants                                 |
| Aerospace                                                     | Monitoring of oxygen and toxic and flammable gases in the environ­ment atmosphere                                                                                                                                                              | H2, O2, CO3, humidity                                           |
| Traffic/tunnels/car parks                                     | City traffic control and management; air quality monitoring in tunnels or underground parking garages                                                                                                                                          |                                                                 |


<div align="center"><b>Table 2.</b><i>Some examples of gas sensor applications</i></div>

[^2]: Source: Data from Taylor (1996), Stcttcr et al. (2003), Capone ct al. (2003), etc. HCs hydrocarbons, VOCs volatile organic compounds.


## Seeed Gas Sensor

For all the Grove Gas sensors in our bazaar, please click [bazaar Grove Gas sensors tag](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all) to check.

Or you can click **[here](http://wiki.seeedstudio.com/gas_sensor_selection/)** to get better view of the table. 


| Name                                                            | Target Gas                                                                                   | Class of gas sensors | Field of application                                                                                                                                 | Sensor     | Detecting Range                                                                                                                    | Accuracy                                                                                                                                                                                   | Operate voltage | Interface | Click to Buy                                                                                                            |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| Grove - Air Quality Sensor v1.3                                 | Alcohol, Smoke                                                                               | Electrochemical      | Environment                                                                                                                                          | MP503      | 10-1000ppm(Alcohol)                                                                                                                | NA                                                                                                                                                                                         | 3.3V 5V         | Analog    | [Order](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)                                          |
| Grove - Alcohol Sensor                                          | Alcohol                                                                                      | Electrochemical      | Safety in car  Public security                                                                                                                       | MQ303A     |  20-1000ppm Alcohol                                                                                                                | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)                                                    |
| Grove - CO2 Sensor                                              | CO2                                                                                          | Electrochemical      | Environment  Agriculture                                                                                                                             | MH-Z16     | 0-5000ppm                                                                                                                          | ±(50ppm +5%)                                                                                                                                                                               | 5V              | UART      | [Order](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html)                                      |
| Grove - CO2 & Temperature & Humidity Sensor (SCD30)             | CO2                                                                                          | Optical devices      | Environment  Agriculture                                                                                                                             | SCD30      | 0-40000ppm                                                                                                                         | ±(30 ppm + 3%)                                                                                                                                                                             | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
| Grove - VOC and eCO2 Gas Sensor (SGP30)                         | VOC,CO2                                                                                      | Electrical           | Environment  Agriculture                                                                                                                             | SGP30      | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm                                                                                  | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html)                                    |
| Grove - Gas Sensor(MQ2)                                         | LPG, i-butane, propane, methane, alcohol, Hydrogen, smoke                                    | Electrochemical      | Domestic safety/household application  Safety at work                                                                                                | MQ2        | LPG and propane: 200ppm-5000ppm  Butane: 300ppm-5000ppm  Methane: 5000ppm-20000ppm  H2: 300ppm-5000ppm  Alcohol:100ppm-2000ppm     | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)                                                     |
![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg)

Gas sensor is a device which can detect the presence of various toxic and combustible gases present in the environment. 

## Operating Principle

The interaction between the test gas and the sensing surface can be detected by the measurements of change in resistance, capacitance, work function, mass, optical characteristics etc. Below table is from Source[^1].


| Class of gas sensors        | Operating principle                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Electrochemical             | Changes in current, voltage, capacitance/impedance: 1. Voltammetry (including amperometry) 2. Potentiometry 3. Chemically sensitized field-effect transistor 4. Potentiometry with solid electrolytes for gas sensing  |
| Electrical                  | Metal oxide conductivity Organic conductivity Electrolytic conductivity Heterojunction conductivity (Schottky diode, FET, MOS) Work function Electric permittivity (capacitance)                                       |
| Mass sensitive              | Changes in the weight, amplitude, phase or frequency, size, shape, or position: 1. Quartz crystal microbalance 2. Surface acoustic wave propagation 3. Cantilever                                                      |
| Magnetic                    | Changes of paramagnetic gas properties                                                                                                                                                                                 |
| Optical devices             | Changes in light intensity, color, or emission spectra: 1. Absorbance 2. Reflectance 3. Luminescence 4. Refractive index 5. Optothermal effect 6. Light scattering (Raman scattering, plasmon resonance)               |
| Thermometric (calorimetric) | Heat effects of a specific chemical reaction. Changes in temperature, heat flow, heat content: 1. Thermoelectric 2. Pyroelectric 3. Catalytic bead (pellistors) 4. Thermal conductivity                                |

<div align="center"><b>Table 1.</b><i>The classification of gas sensors suggested in 1991 by Analytical Chemistry Division of IUPAC, </i></div>

[^1]: Source: Reprinted from I lulanicki et al. (1991). Published by International Union of Pure and Applied Chemistry.


## Field of Applicaitons

There are a numerous use of these gas sensors. Particularly, using these gas sensors human beings can be saved from potential dangers. Hence the gas sensors play important roles in various sectors, which include industry, medical, environmental applications, and domestic applications for monitoring toxic and flammable gases. Below table is from Source[^2].


| Field of application                                          | Function                                                                                                                                                                                                                                       | Examples of detected gases                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Environment                                                   | Monitoring toxic gases present in the atmosphere, due to industrial emissions (weather stations, pollutionmonitoring)                                                                                                                          | CO, CH4, humidity, CO2, O3, VOCs, SOx                           |
| Safety at work                                                | Control of indoor air quality; monitoring toxic gases in a working environment, for instance in a factory where dangerous chemicals are used                                                                                                   | Toxic gases, combustible gases, O2                              |
| Domestic safety/household application                         | Detection of poisonous gases or smoke in households, due to accidents such as fires and explosions; intelligent refrigera­tor or oven; fire alarm; natural gas heating; leak detection; air quality control; air purifiers; cooking control    | CO, humidity, CO2, VOCs                                         |
| Safety in car                                                 | Car ventilation control; gasoline vapor detection; alcohol breath tests                                                                                                                                                                        | CO, LPG, VOCs, CH4                                              |
| Public security                                               | Control of indoor air quality, detection of substances dangerous for the safety of the general public                                                                                                                                          | Toxic gases, combustible gases, flammable gases, explosives, O2 |
| Medical/clinical                                              | Diagnostics(breath analysis, disease detection); point-of-care patient monitoring; drug monitoring; artificial organs and prostheses; new drug discovery                                                                                       | O2, NH, NOx, CO2, H2S, H2, CL2, anesthesia gases                |
| Agriculture                                                   | Plant/animal diagnostics; soil and water testing; meat/poultry inspect ion; waste/sewage monitoring                                                                                                                                            | amines, humidity, CO                                            |
| Food quality   control                                        | Detection of particular molecules, which are formed when food starts to rot and it is no longer good for consumption                                                                                                                           | humidity, CO2                                                   |
| Utilities/automotive/power plants                             | Control of the concentration of the gases in the engine and gas boiler, to guarantee the highest possible efficiency of the combustion process. The same concept can also be applied to power plants, as the energy is generated by combustion | O2, CO, HCs, NOx, SOx, CO2, H2, HCs                             |
| Industry:  Petrochemical Steel/Water treatment/Semiconductor  | Process monitoring and control; quality control; workplace monitoring; waste stream monitoring; leakage alarm                                                                                                                                  | HCs, conventional pollutants, O2, H2, O3, CO2, CL2, CH4,H2S     |
| Defense/military                                              | Detection of chemical, biological, and toxin warfare agents; treaty verification                                                                                                                                                               | Agents, explosives, propellants                                 |
| Aerospace                                                     | Monitoring of oxygen and toxic and flammable gases in the environ­ment atmosphere                                                                                                                                                              | H2, O2, CO3, humidity                                           |
| Traffic/tunnels/car parks                                     | City traffic control and management; air quality monitoring in tunnels or underground parking garages                                                                                                                                          |                                                                 |


<div align="center"><b>Table 2.</b><i>Some examples of gas sensor applications</i></div>

[^2]: Source: Data from Taylor (1996), Stcttcr et al. (2003), Capone ct al. (2003), etc. HCs hydrocarbons, VOCs volatile organic compounds.


## Seeed Gas Sensor

For all the Grove Gas sensors in our bazaar, please click [bazaar Grove Gas sensors tag](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all) to check.

Or you can click **[here](http://wiki.seeedstudio.com/gas_sensor_selection/)** to get better view of the table. 


| Name                                                            | Target Gas                                                                                   | Class of gas sensors | Field of application                                                                                                                                 | Sensor     | Detecting Range                                                                                                                    | Accuracy                                                                                                                                                                                   | Operate voltage | Interface | Click to Buy                                                                                                            |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| Grove - Air Quality Sensor v1.3                                 | Alcohol, Smoke                                                                               | Electrochemical      | Environment                                                                                                                                          | MP503      | 10-1000ppm(Alcohol)                                                                                                                | NA                                                                                                                                                                                         | 3.3V 5V         | Analog    | [Order](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)                                          |
| Grove - Alcohol Sensor                                          | Alcohol                                                                                      | Electrochemical      | Safety in car  Public security                                                                                                                       | MQ303A     |  20-1000ppm Alcohol                                                                                                                | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)                                                    |
| Grove - CO2 Sensor                                              | CO2                                                                                          | Electrochemical      | Environment  Agriculture                                                                                                                             | MH-Z16     | 0-5000ppm                                                                                                                          | ±(50ppm +5%)                                                                                                                                                                               | 5V              | UART      | [Order](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html)                                      |
| Grove - CO2 & Temperature & Humidity Sensor (SCD30)             | CO2                                                                                          | Optical devices      | Environment  Agriculture                                                                                                                             | SCD30      | 0-40000ppm                                                                                                                         | ±(30 ppm + 3%)                                                                                                                                                                             | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
| Grove - VOC and eCO2 Gas Sensor (SGP30)                         | VOC,CO2                                                                                      | Electrical           | Environment  Agriculture                                                                                                                             | SGP30      | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm                                                                                  | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html)                                    |
| Grove - Gas Sensor(MQ2)                                         | LPG, i-butane, propane, methane, alcohol, Hydrogen, smoke                                    | Electrochemical      | Domestic safety/household application  Safety at work                                                                                                | MQ2        | LPG and propane: 200ppm-5000ppm  Butane: 300ppm-5000ppm  Methane: 5000ppm-20000ppm  H2: 300ppm-5000ppm  Alcohol:100ppm-2000ppm     | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)                                                     |
![](https://files.seeedstudio.com/wiki/Seeed_Gas_Sensor_Selection_Guide/img/Seeed_Gas_Sensor_Selection_Guide.jpg)

Gas sensor is a device which can detect the presence of various toxic and combustible gases present in the environment. 

## Operating Principle

The interaction between the test gas and the sensing surface can be detected by the measurements of change in resistance, capacitance, work function, mass, optical characteristics etc. Below table is from Source[^1].


| Class of gas sensors        | Operating principle                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Electrochemical             | Changes in current, voltage, capacitance/impedance: 1. Voltammetry (including amperometry) 2. Potentiometry 3. Chemically sensitized field-effect transistor 4. Potentiometry with solid electrolytes for gas sensing  |
| Electrical                  | Metal oxide conductivity Organic conductivity Electrolytic conductivity Heterojunction conductivity (Schottky diode, FET, MOS) Work function Electric permittivity (capacitance)                                       |
| Mass sensitive              | Changes in the weight, amplitude, phase or frequency, size, shape, or position: 1. Quartz crystal microbalance 2. Surface acoustic wave propagation 3. Cantilever                                                      |
| Magnetic                    | Changes of paramagnetic gas properties                                                                                                                                                                                 |
| Optical devices             | Changes in light intensity, color, or emission spectra: 1. Absorbance 2. Reflectance 3. Luminescence 4. Refractive index 5. Optothermal effect 6. Light scattering (Raman scattering, plasmon resonance)               |
| Thermometric (calorimetric) | Heat effects of a specific chemical reaction. Changes in temperature, heat flow, heat content: 1. Thermoelectric 2. Pyroelectric 3. Catalytic bead (pellistors) 4. Thermal conductivity                                |

<div align="center"><b>Table 1.</b><i>The classification of gas sensors suggested in 1991 by Analytical Chemistry Division of IUPAC, </i></div>

[^1]: Source: Reprinted from I lulanicki et al. (1991). Published by International Union of Pure and Applied Chemistry.


## Field of Applicaitons

There are a numerous use of these gas sensors. Particularly, using these gas sensors human beings can be saved from potential dangers. Hence the gas sensors play important roles in various sectors, which include industry, medical, environmental applications, and domestic applications for monitoring toxic and flammable gases. Below table is from Source[^2].


| Field of application                                          | Function                                                                                                                                                                                                                                       | Examples of detected gases                                      |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Environment                                                   | Monitoring toxic gases present in the atmosphere, due to industrial emissions (weather stations, pollutionmonitoring)                                                                                                                          | CO, CH4, humidity, CO2, O3, VOCs, SOx                           |
| Safety at work                                                | Control of indoor air quality; monitoring toxic gases in a working environment, for instance in a factory where dangerous chemicals are used                                                                                                   | Toxic gases, combustible gases, O2                              |
| Domestic safety/household application                         | Detection of poisonous gases or smoke in households, due to accidents such as fires and explosions; intelligent refrigera­tor or oven; fire alarm; natural gas heating; leak detection; air quality control; air purifiers; cooking control    | CO, humidity, CO2, VOCs                                         |
| Safety in car                                                 | Car ventilation control; gasoline vapor detection; alcohol breath tests                                                                                                                                                                        | CO, LPG, VOCs, CH4                                              |
| Public security                                               | Control of indoor air quality, detection of substances dangerous for the safety of the general public                                                                                                                                          | Toxic gases, combustible gases, flammable gases, explosives, O2 |
| Medical/clinical                                              | Diagnostics(breath analysis, disease detection); point-of-care patient monitoring; drug monitoring; artificial organs and prostheses; new drug discovery                                                                                       | O2, NH, NOx, CO2, H2S, H2, CL2, anesthesia gases                |
| Agriculture                                                   | Plant/animal diagnostics; soil and water testing; meat/poultry inspect ion; waste/sewage monitoring                                                                                                                                            | amines, humidity, CO                                            |
| Food quality   control                                        | Detection of particular molecules, which are formed when food starts to rot and it is no longer good for consumption                                                                                                                           | humidity, CO2                                                   |
| Utilities/automotive/power plants                             | Control of the concentration of the gases in the engine and gas boiler, to guarantee the highest possible efficiency of the combustion process. The same concept can also be applied to power plants, as the energy is generated by combustion | O2, CO, HCs, NOx, SOx, CO2, H2, HCs                             |
| Industry:  Petrochemical Steel/Water treatment/Semiconductor  | Process monitoring and control; quality control; workplace monitoring; waste stream monitoring; leakage alarm                                                                                                                                  | HCs, conventional pollutants, O2, H2, O3, CO2, CL2, CH4,H2S     |
| Defense/military                                              | Detection of chemical, biological, and toxin warfare agents; treaty verification                                                                                                                                                               | Agents, explosives, propellants                                 |
| Aerospace                                                     | Monitoring of oxygen and toxic and flammable gases in the environ­ment atmosphere                                                                                                                                                              | H2, O2, CO3, humidity                                           |
| Traffic/tunnels/car parks                                     | City traffic control and management; air quality monitoring in tunnels or underground parking garages                                                                                                                                          |                                                                 |


<div align="center"><b>Table 2.</b><i>Some examples of gas sensor applications</i></div>

[^2]: Source: Data from Taylor (1996), Stcttcr et al. (2003), Capone ct al. (2003), etc. HCs hydrocarbons, VOCs volatile organic compounds.


## Seeed Gas Sensor

For all the Grove Gas sensors in our bazaar, please click [bazaar Grove Gas sensors tag](https://www.seeedstudio.com/tag/index/index/tag/GAS-SENSOR/?product_list_limit=all) to check.

Or you can click **[here](http://wiki.seeedstudio.com/gas_sensor_selection/)** to get better view of the table. 


| Name                                                            | Target Gas                                                                                   | Class of gas sensors | Field of application                                                                                                                                 | Sensor     | Detecting Range                                                                                                                    | Accuracy                                                                                                                                                                                   | Operate voltage | Interface | Click to Buy                                                                                                            |
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|
| Grove - Air Quality Sensor v1.3                                 | Alcohol, Smoke                                                                               | Electrochemical      | Environment                                                                                                                                          | MP503      | 10-1000ppm(Alcohol)                                                                                                                | NA                                                                                                                                                                                         | 3.3V 5V         | Analog    | [Order](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)                                          |
| Grove - Alcohol Sensor                                          | Alcohol                                                                                      | Electrochemical      | Safety in car  Public security                                                                                                                       | MQ303A     |  20-1000ppm Alcohol                                                                                                                | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Alcohol-Sensor-p-764.html)                                                    |
| Grove - CO2 Sensor                                              | CO2                                                                                          | Electrochemical      | Environment  Agriculture                                                                                                                             | MH-Z16     | 0-5000ppm                                                                                                                          | ±(50ppm +5%)                                                                                                                                                                               | 5V              | UART      | [Order](https://www.seeedstudio.com/Grove-Carbon-Dioxide-Sensor-MH-Z1-p-1863.html)                                      |
| Grove - CO2 & Temperature & Humidity Sensor (SCD30)             | CO2                                                                                          | Optical devices      | Environment  Agriculture                                                                                                                             | SCD30      | 0-40000ppm                                                                                                                         | ±(30 ppm + 3%)                                                                                                                                                                             | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/catalog/product/view/id/2911/s/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911/) |
| Grove - VOC and eCO2 Gas Sensor (SGP30)                         | VOC,CO2                                                                                      | Electrical           | Environment  Agriculture                                                                                                                             | SGP30      | VOC: 0 ppb to 60000ppb  CO2: 400 ppm to 60000 ppm                                                                                  | VOC: (0-2008ppb/1ppb, 2008-11110ppb/6ppb, 11110-60000ppb/32ppb)  CO2: (400-1479ppm/1ppm, 1479-5144ppm/3ppm, 5144-17597ppm/9ppm, 17597-60000ppm/31ppm) | 3.3V 5V         | I2C       | [Order](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-SGP30-p-3071.html)                                    |
| Grove - Gas Sensor(MQ2)                                         | LPG, i-butane, propane, methane, alcohol, Hydrogen, smoke                                    | Electrochemical      | Domestic safety/household application  Safety at work                                                                                                | MQ2        | LPG and propane: 200ppm-5000ppm  Butane: 300ppm-5000ppm  Methane: 5000ppm-20000ppm  H2: 300ppm-5000ppm  Alcohol:100ppm-2000ppm     | NA                                                                                                                                                                                         | 5V              | Analog    | [Order](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)                                                     |
![](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/back.jpg)

We have released various types of relays on our website. You may find it difficult to make a choice. We feel you pain, let's talk about what's the difference between all those relays, and what's the advantage or disadvantage among them. 


For all the relay in our bazaar, please click [bazaar relay tag](https://www.seeedstudio.com/tag/relay.html) to check.


Before the start, let's check the seeed relay quick selection diagram.



<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Relay_Select.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Relay_Select.png" alt="Seeed relay quick selection diagram" title="Seeed relay quick selection diagram" />
  <figcaption><b>Figure 1</b>. <i>Seeed relay quick selection diagram, you can click the diagram to view the original file</i></figcaption></a>
</figure>
</div>



For more detail, please refer to the following table, perhaps, all you need is just a table.


|Name|Thumbnail|Operate voltage|Input current|Rated load|Contact resistance|Insulation resistance|Operate time|Release time|Input interface|Type|Click to buy|
|----|-----|-----|------|------|------|-------|------|------|------|---|---|
|[Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/grove_relay.jpg" />|3.3V-5V|100mA|5A@250VAC<br>5A@30VDC|50mΩ<br>@6VDC 1A|100MΩ|10ms Max.|5ms Max.|Digital|Electromechanical|[Buy Now](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|[Grove - SPDT Relay(30A)](https://www.seeedstudio.com/Grove-SPDT-Relay-30-p-1473.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/spdt30.jpg" />|5V|185mA|30A@250VAC<br>30A@30VDC|100mΩ Max.|100MΩ Min.@500VDC|15ms Max.|10ms Max.|Digital|Electromechanical|[Buy Now](https://www.seeedstudio.com/Grove-SPDT-Relay-30-p-1473.html)|
|[Grove - 2-Channel SPDT Relay](https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/spdt2.jpg" />|5V|90mA|10A@250VAC<br> 10A@30VDC|100mΩ Max.|100MΩ Min.@500VDC|10ms Max.|5ms Max.|Digital|Electromechanical|[Buy Now](https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html)|
|[Grove - 4-Channel SPDT Relay](https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/spdt4.jpg" />|5V|90mA|10A@250VAC<br> 10A@30VDC|100mΩ Max.|100MΩ Min.@500VDC|10ms Max.|5ms Max.|I2C|Electromechanical|[Buy Now](https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html)|
|[Grove - Solid State Relay](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr1.jpg" />|3V-5V|16mA Min.<br>20mA Typ.<br>50mA Max.|4A@220VAC||1000MΩ|10ms|10ms|Digital|Solid State|[Buy Now](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html)|
|[Grove - Solid State Relay V2](https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr.jpg" />|4V-6V||2A@100VAC to 240VAC||1000MΩ Min.@500VDC|1/2 of load power source cycle +1 ms max|1/2 of load power source cycle + 1 ms max|Digital|Solid State|[Buy Now](https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html)|
|[Grove - 2-Channel Solid State Relay](https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ss2.jpg" />|4V-6V||2A@100VAC to 240VAC||1000MΩ Min.@500VDC|1/2 of load power source cycle +1 ms max|1/2 of load power source cycle + 1 ms max|Digital|Solid State|[Buy Now](https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html)|
|[Grove - 4-Channel Solid State Relay](https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr4.jpg" />|4V-6V||2A@100VAC to 240VAC||1000MΩ Min.@500VDC|1/2 of load power source cycle +1 ms max|1/2 of load power source cycle + 1 ms max|I2C|Solid State|[Buy Now](https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay-p-3130.html)|
|[Grove - 8-Channel Solid State Relay](https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/ssr8.jpg" />|4V-6V||2A@100VAC to 240VAC||1000MΩ Min.@500VDC|1/2 of load power source cycle +1 ms max|1/2 of load power source cycle + 1 ms max|I2C|Solid State|[Buy Now](https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html)|
|[Grove - 2-Coil Latching Relay](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/2coil.jpg" />|5V||1A@125VAV<br>3A@30VDC|50mΩ Max.|1000MΩ@500VDC|4.5ms Max.|3.5ms Max.|Digital|Electromechanical|[Buy Now](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)|
|[Grove - Dry-Reed Relay](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)|<img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/dry-reed.jpg" />|5V||0.1A@100VAC<br>0.5A@24VDC|150mΩ Max.|100MΩ @500VDC<br>1000MΩ @100VDC|1ms Max.|0.5ms Max.|Digital|Reed Relays|[Buy Now](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html)|

<div align="center"><b>Table 1.</b><i>Seeed Relay Parameter</i></div>



You can click the following button to download the zip file of both the diagram and the table:


<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/res/Seeed_relay_select.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/download.jpg" alt="Seeed relay quick selection diagram" title="Seeed relay quick selection diagram" />
  </a>
</figure>
</div>



## Glossary 

A relay is an electrically operated switch, the relay opens when the two contacts are disconnected, and the relay turns on when the two contacts touch.


<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/relay.jpg" alt="Relay" title="Relay" />
  <figcaption><b>Figure 2</b>. <i>Relay Contacts</i></figcaption>
</figure>
</div>


Each contact connects to an input or output terminal. The input terminal is called **Pole**, and the output terminal is called **Throw**. According to the number of terminals, the relay is divided into several types. which is **SPST**,**SPDT**,**DPDT**, and so on.

**SPST(Single Pole Single Throw):**  
SPST is the simplest relay, you can consider it as a button.  This 'button' is normally open, when the trigger signal comes, the pole contact will connect to the throw contact, we call it close.  It is great for applications that need only an on or off state. A typical representative of SPST is our [Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html)

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/SPST.jpg" alt="SPST" title="SPST" />
  <figcaption><b>Figure 3</b>. <i>SPST Relay</i></figcaption>
</figure>
</div>


**SPDT(Single Pole Double Throw):**  
SPDT relay is ofen called A/B swicth, as you can see in the figure 3, there are two throws, this kind of relay is great for selecting between two options.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/SPDT.jpg" alt="SPDT" title="SPDT" />
  <figcaption><b>Figure 4</b>. <i>SPDT Relay</i></figcaption>
</figure>
</div>

You may find that these two throws are called **NC** and **NO** respectively, and the pole is called **COM**. NC means normally connected, NO means normally open. Which means if there is no trigger signal, the NC terminal will be connected to the COM terminal, once the trigger signal comes, the NC terminal will be disconnected and the NO terminal will be connected to the COM termianl. For instance, you can refer to our [Grove - 2-Channel SPDT Relay](https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html).

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/pin_map.jpg" alt="Grove - 2-Channel SPDT Relay" title="Grove - 2-Channel SPDT Relay" />
  <figcaption><b>Figure 5</b>. <i>Grove - 2-Channel SPDT Relay</i></figcaption>
</figure>
</div>



We only have SPST and SPDT relays in our website now, if you want to check other types of relays please refer to the relay page by [NATIONAL INSTRUMENTS](http://www.ni.com/white-paper/3960/en/).



**Latching Relay**

Latching Relay is a relay that is set (ON) or reset (OFF) by the input of a pulse voltage. Even after the input voltage is interrupted, this relay maintains its set or reset condition until it receives the next inverting input. It is also called a keep relay.
Conversely, a non-latching relay maintains its state only while being actuated, most of relays in our website is non-latching relay except the [Grove - 2-Coil Latching Relay](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html).



## Types of Relays

Although there are more than a dozen relays in our website, in general, there are only three types: **Electromechanical Relay**, **Solid State Relay** and **Reed Relay**. You can see the classification information in the last column of **Table 1.**


### Electromechanical Relay

#### Principle

Most relays in our bazaar are Electromechanical Relay. Normally a Electromechanical Relay is consisted of coils, armatures and contacts.


<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Electromechanical_Relays.JPG" alt="Electromechanical Relay" title="Electromechanical Relay" />
  <figcaption><b>Figure 6</b>. <i>Electromechanical Relay</i></figcaption>
</figure>
</div>

When the coil is energized, the induced magnetic field moves the armature, which opens or closes the contact.  


#### Advantage and Disadvantage  


**Advantage:**

- Able to withstand large inrush currents
- High mechanical structure reliability, not susceptible to external electromagnetic environment
- Cheap and cost-effective
- Relatively speaking, it can carry high voltage, high current load


**Disadvantage:**

- Electromechanical relays are slower than other types of relays, typical switch and settle in 5 to 15 ms
- Larger package sizes, not suitable for size sensitive occasions
- In general, Electromechanical relays have a shorter life than other types of relays due to mechanical wear



### Solid State Relays


#### Principle

Solid State Relays is also known as SSR, which is an electronic switching device that switches on or off when a small external voltage is applied across its control terminals. Solid state relays typically use semiconductor devices to switch the conduction and disconnection of high voltage loads. Normally a Solid State Relay is consisted of a LED driver and a photosensitive MOSFET. When the trigger signal comes the LED light up to actuate the photosensitive MOSFET, then the high voltage circuit will be turned on.


<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/SSR_IN.JPG" alt="Solid State Relay" title="Solid State Relay" />
  <figcaption><b>Figure 7</b>. <i>Solid State Relay</i></figcaption>
</figure>
</div>



#### Advantage and Disadvantage  


**Advantage:**

- Fast switching speed, the switching time is dependent on the time required to power the LED on and off—approximately 1 ms and 0.5 ms. For instand the G3MC202p serial SSR we use is 1/2 of load power source cycle +1 ms.
- Totally silent operation, almost no noise
- No physical contacts means no sparking, allows it to be used in explosive environments, where it is critical that no spark is generated during switching.
- Increased lifetime, even if it is activated many times, as there are no moving parts to wear and no contacts to pit or build up carbon
- Compact, thin-profile SSR of monoblock construction with an all-in-one lead frame incorporates a PCB, terminals and heat sink, which is much smaller than mechanical relays, and can integrate more channels
- Not susceptible to physical shock




**Disadvantage:**

- Contact resistance is relatively large, usually above 100 ohms, which will generat more heat, so it need to be used with fan heat.
- High cost and low cost performance
- Only works for AC laod



!!!Tips
        Please note that some kind of solid state relays support DC load, but all the solid state relays currently sold by seeed do not support DC load.




### Reed Relays


#### Principle

Reed relays are switches that use electromagnets to control one or more reed switch. The contacts are of magnetic material and the electromagic acts directly on them without requiring an armature to move them. Sealed in a long, narrow glass tube, Fill the glass tube with inert gas so that the contacts are protected from corrosion.



<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Reed_Relay.JPG" alt="Reed Relay" title="Reed Relay" />
  <figcaption><b>Figure 8</b>. <i>Reed Relay</i></figcaption>
</figure>
</div>


As shown in Figure 7, there is no axial magnetic field generated when there is no trigger signal excitation, the reed blade will be disconnected because of the rigidity. When the signal is triggered, a transverse magnetic field will be generated and the reed will be magnetized. One contact turns N pole and the other turns S pole, they will be connected.



#### Advantage and Disadvantage  


**Advantage:**

- Low power consumption, small size
- Because it is sealed in an inert gas, very little affected by environmental factors such as temperature and humidity , high environmental adaptability
- Switching speed is fast, about 10 times higher than electromechanical relay


**Disadvantage:**

- Low load voltage and low current
- Susceptible to inductive loads

!!!Note
        If you need to use reed relay with an inductive load (such as a motor), you need to add a protection circuit between the relay and the load.



## Special Function Relays


In addition to the typical relays described above, we have several special-function relays in our website.


**1.Relay Shield v3.0**

We also provide a relay shield for arduino, this shield integrates four mechanical relays, can carry 8A, 30V load.

<div align="center">
<figure>
  <a href="https://www.seeedstudio.com/Relay-Shield-v3-0-p-2440.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/seeed_relay_shield.jpg" alt="Relay Shield v3.0" title="Relay Shield v3.0" />
  <figcaption><b>Figure 9</b>. <i>Relay Shield, you can click this figure to check</i></figcaption></a>
</figure>
</div>



**2.Heelight Relay**

You can control the relay through a sound command, isn't it interesting!?

<div align="center">
<figure>
  <a href="https://www.seeedstudio.com/Heelight-Relay-p-2935.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/Heelight_Relay.jpg" alt="Heelight Relay" title="Heelight Relay" />
  <figcaption><b>Figure 10</b>. <i>Heelight Relay, you can click this figure to check this magic relay</i></figcaption></a>
</figure>
</div>


**3.315MHz Codec-Adaptive Wireless Relay**

A wireless relay is a codec-adaptive RF receiver with single channel relay.


<div align="center">
<figure>
  <a href="https://www.seeedstudio.com/315MHz-Codec-Adaptive-Wireless-Relay-p-550.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed_Relay_Page/img/315MHz%20Codec-Adaptive%20Wireless%20Relay.jpg" alt="Wireless Relay" title="Wireless Relay" />
  <figcaption><b>Figure 11</b>. <i>Wireless Relay, you can click this figure to check</i></figcaption></a>
</figure>
</div>





## Resource

- **[PDF]** [Seeed Relay Page PDF Version](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/Datasheet/Seeed_Relay_Page.pdf)

- **[ZIP]** [Seeed Relay Module Datasheet](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/Datasheet/Seeed_Relay_Module_Datasheet.zip)

- **[ZIP]** [Seeed Relay Quick Selection Table&Diagram](https://files.seeedstudio.com/wiki/Seeed_Relay_Page/res/Seeed_relay_select.zip)



## Tech Support
If you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 


<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>