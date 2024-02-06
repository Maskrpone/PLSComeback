# Installation

L'application est divisée en deux parties:
- Le back-end dans */server*
- Le front-end dans /Front

### A. Mise en place du back

1. Naviguez dans le dossier */server*
2. Lancez MongoDB avec la commande suivante:
   ```bash
   $ docker-compose up -d
   ```
   MongoDB devrait être lancé en local et accessible depuis l'adresse suivante:
   `mongodb://localhost:27017/PlsComeBack`
3. Naviguez dans */server/api* et entrez les commandes suivantes:
   ```bash
   $ npm install
   $ npm start
	```

Le back devrait maintenant être lancé et afficher ces lignes:
```shell
$ npm start

> api@0.0.0 start
> node ./bin/www

Connected to MongoDB !

```
### B. Mise en place du front

- Naviguez dans le dossier */Front*
- Entrez la commande suivante: 
   ```bash
   $ npm install
	```
- Changez les ip dans le fichier *Constants.js* (*/Front/src/Constants.js*)
  ```javascript
  export const API_IP = "<ip_du_back>";
  export const FRONT_IP = "<ip_du_front>:<port_du_front>";
	```
	
	La seconde ligne est importante car lors du scan du qr-code avec un téléphone, une redirection vers la page de réservation est effectuée. Une ip locale ($\neq$ localhost) est donc nécessaire pour correctement rediriger.
	

- Lancez le front
  ```bash
  $ npm start
	```

## Attention
Si jamais le back et le front sont lancés sur le même ordinateur, il y aura un conflit de ports, l'api et react utilisants tous les deux par défaut le port 3000. Pour y remédier, lancez d'abord le back, le front detectera le conflit et se lancera sur le prochain port disponible.
