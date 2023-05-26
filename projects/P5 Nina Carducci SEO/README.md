# P5_Nina_Carducci_SEO

**OpenClassrooms Project #5 : version by Sinematic**

Voici le rapport d'incident du site : [Nina Carducci](https://nina-carducci.github.io/) dans le but de le débugger puis de l'optimiser pour le référencement naturel ainsi que son accessibilité Web selon les critères du WCAG.


## Débug et corrections

### Le HTML

Il est possible de faire plusieurs modifications qui aideront le site autant sur l'accessibilité que le référencement naturel :

- Ajouter un titre à la page (`<title>` dans la balise `<head>`)
- Ajouter du texte alternatif à toutes les images du site web (y compris à l'icône d'Instagram)
- Corriger les erreurs des balises `<img>`
- Corriger les erreurs de la balise `<form>`
- Utiliser du HTML sémantique (HTML landmarks)
- Ajouter la langue au site 
- Modifier certains guillemets `’` et les remplacer par des guillemets traditionnels
- Corriger les différents labels du formulaire de contact


### Le CSS

Il existe des modifications à effectuer également concernant le CSS :

- Utiliser des noms de classes et d'identifiants plus clairs (`visually-hidden`)
- Minifier le fichier CSS
- Utiliser un fichier Bootstrap minifié
- Ne pas dépasser 75 caractères par ligne dans certains paragraphes (About-me notamment)
- Éviter d'utiliser du CSS et de jouer avec le display dans le HTML
- Corriger l'erreur dans le fichier CSS


### Le JavaScript

- Corriger le bug dans la modale


## Performances 

- Redimensionner les images afin qu'elles demandent moins de ressources sur tablette et mobile
- Utiliser un format plus adapté afin de garantir des temps de chargement plus courts
- Supprimer le code CSS inutilisé
- Supprimer le code JavaScript inutilisé
- Définir explicitement une largeur et une hauteur aux images
- Réduire l'impact des services tiers
- Utiliser l'attribut `defer` pour les fichiers JavaScript non-prioritaires qui bloquent le chargement du Paint

## Référencement & Bonnes pratiques

- Renommer les photos avec des noms plus explicites qui sauront donner des informations au crawler de Google
- Remplacer l'évènement `unload` par un changement de visibilité ou un pagehide


## Accessibilité

Il y a encore beaucoup de choses à faire afin de rendre l'ensemble plus approprié aux utilisateurs handicapés :

- Indiquer où se situe le contenu principal (`<main>`) et permettre aux utilisateurs d'accéder directement au contenu principal sans avoir à parcourir les éléments répétitifs
- Ajuster les contrastes de couleurs entre la couleur de fond du bouton de filtre dans le portfolio
- Régler le problème de sauts de niveau dans le `<hgroup>`
- Remplacer éventuellement l'image d'Instagram par du texte
- Remplacer le texte alternatif existant par du contenu pertinent
- Utiliser des termes compréhensibles dans les liens

À vérifier : 
- Adopter un ordre logique de tab
- Pouvoir utiliser le clavier pour les éléments interactifs
- Les éléments interactifs indiquent leur fonction
- Le focus de l'utilisateur est renvoyé directement vers le nouveau contenu ajouté à la page
- Le focus ne peut se retrouver bloqué dans une section de la page
- Proprement cacher des technologies d'assistance les éléments en dehors du flux
- Les éléments de contrôle interactifs ont des rôles ARIA
