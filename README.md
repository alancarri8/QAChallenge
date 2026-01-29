# QA Challenge

Repositorio que contiene un framework pruebas de UI y API realizado con **Cypress/JavaScript**, utilizando como reporteria **Mchawesome** aplicando **POM (page object model)**

## Requisitos previos para su uso

> npm - node.js

## Configuaración del proyecto

```
1 - Clonar repositorio: git clone https://github.com/alancarri8/QAChallenge.git
2 - Ingresar al directorio: cd QAChallenge
3 - Instalar dependencias: npm install
```

## Ejecución de pruebas

```
Para ejecutar pruebas UI
npm run cy:run:chrome

Para ejecutar prueba de API
npm run cy:run:api

Al finalizar cada prueba, ejecutar para generar el reporte:
start cypress\reports\html\index.html

Ubicación del reporte: cypress/reports/html/index.html

Las evidencias se almacenan en cypress/screenshots/
```

## Sección 1: Pruebas y reporte de errores

> La carpeta docs contiene información acerca de los puntos realizados, ruta de la carpeta:cypress\docs

## Archivos

```
 Punto 1 - TestPlan => Contiene el TestPlan realizado
 Punto 2 - TestCases.xlsx => Contiene el diseño de los casos de pruebas realizados
 Punto 4 - Bug.xlsx => Contiene el diseño de un bug con su respectiva evidencia
 Punto 3,5 y 6 => Contiene el punto 3 donde se seleccionaron casos de smoke y regression, punto 5 donde explicó realizo las pruebas de API, y el punto 6 donde diseño un test de API

```
