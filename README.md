<img src="https://github.com/camiloadominguez/peliculas-backend/blob/master/logo.png" alt="logo_inssa.png">

# Especificación tramas Inssa CS

## Información general

**API GATEWAY AWS Y LAMBDA AWS**

Existe un servicio de API Gateway, donde se establece un recurso por trama, donde cada uno se conecta a una función Lambda AWS. Se enviará la información por métodos POST. 

El API GATEWAY solicitara un header para permitir la recepción de la trama. Se debe configurar con el siguiente key-value 

authorizationToken: CrNnX#3jBTR1 


**BASE DE DATOS.** 

Tipo de Base de Datos: No relacional (NoSQL). 

Base de Datos: MongoDB. 

 

**CLUSTER DE ATLAS MONGO DB.**

mongo "mongodb+srv://inssacs.rekt9.mongodb.net/<dbname>" --username <username> 

## Trama R Inicio

| Generación | Indicador trama(2) | Serial Dispensadora(10) | Ejemplo |
| --- | --- | --- | --- |
| **3ra** | R1 | 0211234567 | R10211234567 |

| Generación | Indicador trama(2) | Indicador inicio (1) | Tiempo respuesta(2) | Fecha (12) | Serial (10) | Ejemplo |
| --- | --- | --- | --- | --- | --- | --- |
| **5ta** | R | 1 | 01 | 100920090605 | 0211234567 | R1011009200906050211234567 |

## Trama R Configuración

| Generación | Indicador de trama (2) | Manufactura billetero (3) | Serial billetero (12) | Modelo billetero (12) | Manufactura monedero (3) | Serial monedero (12) | Modelo monedero (12) | Versión FW PIC18F8722 (2) | Versión FW PIC18F4550 (2) | Intensidad de señal (2) | Calidad de señal (1) | Serial dispensadora (10) | Ejemplo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **3ra** | R2 | CCD | 23KG39101321 | SMV-CO-MDB | MEI | 2669G600954  | CF7600MDB    | 51 | 27 | 31 | 0 | 0211234567 | R2CCD23KG39101321SMV-CO-MDB  MEI2669G600954 CF7600MDB   51273100211234567 |

| Generación | Indicador de trama (1) | Manufactura billetero (3) | Serial billetero (12) | Modelo billetero (12) | Manufactura monedero (3) | Serial monedero (12) | Modelo monedero (12) | Versión FW PIC18F4550 (2) | IMEI (15) | ICCID (19) | Tiempo de respuesta (2) | Fecha de tarjeta (12) | Serial de tarjeta (10) | Ejemplo |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **5ta** | R | CCD | 23KG39101321 | SMV-CO-MDB | MEI | 2669G600954  | CF7600MDB    | 01 | 861585044136297 | 8957123311907700000 | 00 | 100920090604 | 4512002120 | RCCD23KG39101321SMV-CO-MDB  MEI2669G600954 CF7600MDB   018615850441362978957123311907700000001009200906044512002120 |

## Trama T Alertas de billetero

| Generación | Indicador de trama (1) | Estado del billetero (1) | Fecha (12) | Estado SD (1) | Tiempo de respuesta (2) | Serial dispensadora (10) |
| --- | --- | --- | --- | --- | --- | --- |
| **3ra** | T | 1 | 011216243030 | 1 | 01 | 0211234567 |
