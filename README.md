### Projet Spotify
Ce projet doit:

  # Login
  Grace à l'email et un mot de passe je reçois un token JWT me permettant d'accéder aux routes
  privées.

  # Sign Up
  En renseignant email et mot de passe je créer mon compte et je reçois un token JWT me
  permettant d'accéder aux routes privées.
  # Lister les utilisateurs
  Permet de consulter l’ensemble des inscrits sur la plateforme, en prenant garde de masquer les
  informations sensibles. Cette action n'est permise qu'aux administrateurs.

  # Supprimer un utilisateur
  Cette action n'est permise qu'aux utilisateurs connectés et administrateurs. Attention: cette
  action doit supprimer toutes les ressources attachées à cet utilisateurs.
  # Mettre à jours un utilisateur
  Cette action n'est permise qu'aux utilisateurs connectés et administrateurs.
  # Mettre à jours mon utilisateur
  Cette action n'est permise que pour l'utilisateur connecté.
  # Voir mes infos utilisateur
  Cette action me permet d’accéder à mes information personnelles.

## Action sur spotify

  # Rechercher un album
  Ce endpoint doit permettre de rechercher des albums afin de récupérer un ID. N'oubliez pas les
  paramètres de pagination.

  # Ajouter un album à mes favoris
  Après avoir récupéré un ID d'album vous devez sauvegarder en base de donnée cet album en
  favoris et l'attribuer à l'utilisateur en cours.

  # Lister mes favoris
  Cette action n'est permise que pour l'utilisateur connecté.

  # Voir un de mes favoris
  Cette action n'est permise que pour l'utilisateur connecté et si seulement le favoris lui appartient.

  # Supprimer un de mes favoris
  Cette action n'est permise que pour l'utilisateur connecté et si seulement le favoris lui appartient.


