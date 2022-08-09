# LEAME

Pequeña aplicación Angular consumiendo datos de una API externa: https://mindicador.cl.

## Comandos

Crear y correr proyecto en blanco

```bash
ng new angular-http-simple
cd angular-http-simple
ng serve --open
ng s -o # versión corta
```

Instalación de [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) (para uso de estilos CSS) editar `angular.json` y agregar en el nodo `projects > [name-project] > architect > build > options > style`

```bash
"styles": [
  "node_modules/bootstrap/scss/bootstrap.scss",
  "src/styles.scss"
],
```

Para la creación del componente

```bash
ng generate component componente/valores
ng g c componente/valores # versión corta
```
