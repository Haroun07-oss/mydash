// Dans ton fichier de module (ex: clock.js ou utils.js)
export function horloge() {
    const clockElement = document.getElementById('real-time-clock');

    setInterval(() => {
        const maintenant = new Date();
        
        // Formate l'heure proprement selon la langue locale (ex: 14:30:05)
        const heureAffichee = maintenant.toLocaleTimeString('fr-FR');
        
        // Mise à jour du DOM au lieu du simple console.log
        clockElement.innerText = heureAffichee;
    }, 1000);
}
