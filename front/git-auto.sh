#!/bin/sh

# Demander le message de commit
read -p "Entrez le message de commit: " message

# Ajouter tous les fichiers modifiés ou nouveaux
git add .

# Effectuer le commit avec le message fourni par l'utilisateur
git commit -m "$message"

# Pousser les modifications vers la branche actuelle
git push
