<img src="https://github.com/camiloadominguez/peliculas-backend/blob/master/logo.png" alt="logo_inssa.png">

# Especificación tramas ICS

## * **Trama R Inicio

| Generación | Indicador trama(2) | Serial Dispensadora(10) | Ejemplo |
| --- | --- | --- | --- |
| 3ra | R1 | 0211234567 | R10211234567 |

| Generación | Indicador trama(2) | Indicador inicio (1) | Tiempo respuesta(2) | Fecha (12) | Serial (10) | Ejemplo |
| --- | --- | --- | --- | --- | --- | --- |
| 5ra | R | 1 | 01 | 100920090605 | 0211234567 | R1011009200906050211234567 |

* **Trama R Configuración

| Generación | Indicador de trama (2) | Manufactura billetero (3) | Serial billetero (12) | Modelo billetero (12) | Manufactura monedero (3) | Serial monedero (12) | Modelo monedero (12) | Versión FW PIC18F8722 (2) | Versión FW PIC18F4550 (2) | Intensidad de señal (2) | Calidad de señal (1) | Serial dispensadora (10) | Ejemplo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3ra | R2 | CCD | 23KG39101321 | SMV-CO-MDB | MEI | 2669G600954  | CF7600MDB    | 51 | 27 | 31 | 0 | 0211234567 | R2CCD23KG39101321SMV-CO-MDB  MEI2669G600954 CF7600MDB   51273100211234567 |

| Generación | Indicador trama(2) | Indicador inicio (1) | Tiempo respuesta(2) | Fecha (12) | Serial (10) | Ejemplo |
| --- | --- | --- | --- | --- | --- | --- |
| 5ra | R | 1 | 01 | 100920090605 | 0211234567 | R1011009200906050211234567 |
