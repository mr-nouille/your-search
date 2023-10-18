// Fonction pour soumettre le formulaire de connexion
function submitForm() {
    // Insérez ici la logique pour valider et traiter le formulaire de connexion
    // Après validation, vous pouvez fermer le pop-up
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Fonction appelée lorsque la connexion avec Google est réussie
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Nom: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());

    // Exemple de logique pour gérer la connexion Google
    // Vous pouvez personnaliser cette logique en fonction de vos besoins spécifiques
    // Par exemple, identifiez l'utilisateur en fonction de son adresse e-mail
    if (profile.getEmail() === 'votre@email.com') {
        // L'utilisateur est autorisé
        submitForm(); // Soumettez le formulaire après avoir géré la connexion
    } else {
        // L'utilisateur n'est pas autorisé
        // Vous pouvez afficher un message d'erreur ou prendre d'autres mesures
    }
}

// Événement pour ouvrir le pop-up (par exemple, au chargement de la page)
window.onload = openPopup;

// Événement pour fermer le pop-up lorsque le bouton "Fermer" est cliqué
document.getElementById('close-popup').addEventListener('click', closePopup);

// Événement pour empêcher de cliquer à l'extérieur du pop-up pour le fermer
document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target.id === 'popup') {
        closePopup();
    }
});
