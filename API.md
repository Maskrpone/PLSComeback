### Liste des routes

#### Users
- GET /users --> Nous renvoie la liste de tous les utilisateurs
- GET /users/:name --> Nous renvoie l'utilisateur dont le username correspond à name
- POST /users --> Ajoute un utilisateur à la db avec 
	- username: String
	- nom: String
	- prenom: String
	- mail: String
	- isAdmin: Boolean
	- passwd: String

#### Machines
- GET /machines --> Nous renvoie la liste de toutes les machines
- GET /machines/:name --> Nous renvoie la machine dont le nom correspond à name
- POST /machines --> Ajoute une machine à la db avec 
	- name: String,
	- InStock: Number,
	- image: String
- PUT /marchines/:name --> Modifie le calendrier de réservation de la machine selectionnée

#### Tools
- GET /tools --> Nous renvoie la liste de toutes les outils
- GET /tools/:name --> Nous renvoie l'outil qui correspond à name
- POST /tools --> Ajoute un outil à la db avec 
	- name: String,
	- InStock: Number,
	- image: String
- PUT /tools/:name --> Modifie le calendrier de réservation de l'outil selectionné

#### Supplies
- GET /supplies --> Nous renvoie la liste de toutes les consommables
- GET /supplies/:name --> Nous renvoie le consommable dont le nom correspond à name
- PUT /supplies/:name/modify --> Modifie la quantité d'un consommable
	- quantity: Number
- POST /supplies --> Ajoute un consommable à la db avec 
- name: String,
	- quantity: Number,
	- image: String

#### Login
- POST /login --> Renvoie l'user ayant les identifiants correspondants ou 403
	- username: String,
	- password: String --> attention les mdp ne sont pas stockés en clair mais sous form de hash sha256, il faut donc hash le mdp avant de faire la requête

#### Reserve
- POST /reserve --> Réserve l'objet spécifié pendant une certaine durée de temps. La réservation ajoute l'objet à l'historique du membre et déduit la quantité demandée du stock des objets.
	- username: String,
	- name: String,
	- quantity: Number,
	- plannedReturnDate: String

#### Return
- POST /return --> Retourne l'objet spécifié en définissant la date de rendu et le retard, et en restituant la quantité emprunté à l'objet.
	- username: String,
	- name: String,

#### History
- GET /history --> Retourne l'historique de tous les membres
- GET /history/:name --> Retourne l'historique du membre ayant le nom d'utilisateur corresponand à name
  
- Structure:
	- username: String,
	- history: Object,
		- items: Object
			- <nom de l'item>: Object
				- quantity: String,
				- date: String,
				- plannedReturnDate: String,
				- actualReturnDate: String,
				- isLate: Boolean,
				- type: Number

