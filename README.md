# IsiActivitePoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Extension VSCode utiles

- Angular schematics
- Auto import
- Auto Close Tag
- Auto Rename Tag
- typescript hero => permet de créer des compos / pipe etc... en faisant un clic droit plutôt que la console
- tslint
- eslint
- Angular 10 snippets
- Angular Essentials (Version 9)

## Conventions et bonnes pratiques

* Utiliser de préférence l'anglais pour les noms de variables, fonctions, classes etc... Les commentaires peuvent rester en français.
* Les noms de classes commencent par une majuscule
* Les noms d'interface on les préfixe avec I ex : IMonInterface
* Les noms de variables en camel case
* Typer autant que possible les variables, les paramètres de fonctions, les paramètres de retours de web services etc...
* Utilisation du mot clé "const" pour les "variables" qui ne sont pas réaffectée (normalement l'ide vous le dit)
* Ne pas utiliser le mot clé "var", on lui préfère "let" 
* Séparer au maximum les domaines fonctionnels (Chauqe 'domaine' doit avoir son composant ou groupe de composant et son / ses services associés)
* Eviter de mettre du code dans *app.component.ts*
* Tous les styles css partagés par plusieurs composants doivent être mis dans le fichier *style.scss* à la racine du projet

### Commentaires

Surtout n'hésitez pas !! :)

Pour vous faciliter la vie, après avoir créé une fonction, il suffit de se placer sur la ligne du dessus et de faire /** puis Entrer. L'IDE 
va vous générer le squelette type JSDoc qui va bien avec les paramètres.

## Architecture projet

### Répertoire shared (src/app/shared)

Ce répertoire contient les fichiers partagés de l'application :

- répertoire class : contient toutes les classes
- répertoire interfaces : contient toutes les interfaces
- répertoire models : contient toutes les constantes, enum
- répertoire services : contient tous les services
- répertoire pipes : contient tous les pipes
- répertoire guards : contient tous les guards

### Assets du projet

Toutes les images du projet doivent être contenu dans le répertoire /src/assets/imgs. Il est possible de créer des sous-répertoire pour classer si besoin

Les fonts sont stockées dans le répertoire */src/assets/fonts*

### Création d'un service

Les services sont à créer dans le répertoire *src/app/shared/services*. Créer **un service par domaine fonctionnel**

````ng g s shared/services/<monService>````

### Création d'un pipe

Les pipes sont à créer dans le répertoire *src/app/shared/services* 

````ng g p shared/pipes/<monPipe>````

### Création d'un guard

Les guards sont à créer dans le répertoire *src/app/shared/guards* 

````ng g g shared/guards/<monQuard>````

## Variables d'environnement DEV / PROD

Le répertoire environments permet de gérer les variables liées à l'environnement d'exécution comme par exemple les url des serveurs DEV / PROD

Exemple d'utilisation dans le service data.

**Surtout !** Bien s'assurer que l'import pointe sur *environments/environment* C'est angular qui se chargera lors du build en mode prod d'aller mapper l'url de Prod.
````
import { environment, SERVER_URL } from '../../environments/environment';
````

## Ecriture et appels de fonctions

Dans le cas d'une fonction utilisant beaucoup de paramètre dont certains sont facultatifs, préférer l'utilisation d'un paramètre unique de type objet json pour faciliter l'appel.

````
// Préférer l'écriture suivante :
maFunct({param1, param2 = 0, param3, param4, param5, param6}) {

}

//au lieu de l'écriture suivante qui IMPOSE un ordre de passage des paramètres
// qui peut poser problème si on a un paramètre manquant ou autre
maFunct(param1, param2 = 0, param3, param4, param5, param6) {

}

// appel se fait de la manière suivante
maFunct({param1: 'toto', param5: 12});
````

**Pour aller plus loin, il est recommandé d'ajouter le typage des paramètres de la manière suivante :**

````
maFunct({param1, param2 = 0, param3, param4, param5, param6}:
{param1?: string, param2?: number, param3?: any, param4?: string, param5?: number, param6?: number}) {

}
````

## Angular Material

Pour faciliter l'intégration des modules Angular Material, un fichier *material.module.ts* est disponible dans le répertoire app. Il permet d'y inclure tous les imports dans un fichier centralisé. Attention, certains composants Angular Material n'ont pas le même chemin d'import ````from '@angular/material'```` selon votre version d'angular. Si vous constatez une erreur d'import vérifiez donc le chemin d'import et modifiez-le au besoin. 

## Git

### Bonnes pratiques
 
Pour récupérer le projet, utiliser la commande 

````
git clone <url-repos>
````

On essaye de réintégrer tous les soirs ce qui est 
On fait **TOUJOURS** un git pull **AVANT** de faire un git push pour ne pas risquer de tout péter dans le git et créer des conflits


## Commandes

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
#   R e a d m e  
 