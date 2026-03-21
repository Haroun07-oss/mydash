
export async function meteo() {
    const contentArea = document.getElementById('weather-content');
    const headerIcon = document.querySelector('.card.weather .icon');
    let longitude;
    let latitude;
    try {
        // 1. On attend d'avoir la position avant de continuer
        const position = await new Promise((resolve, reject) => {
            if (!("geolocation" in navigator)) {
                reject(new Error("Géolocalisation non supportée"));
            }
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        // 2. On stocke les coordonnées
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        // 3. On fait l'appel API avec les bonnes coordonnées
        const meteorep = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        
        if (!meteorep.ok) throw new Error("Erreur lors de la récupération météo");

        const meteodonnee = await meteorep.json();
        const info = meteodonnee.current_weather;

        // 4. On met à jour ton HTML
        // On change l'icône de base (☁️) par une icône dynamique
        if (info.weathercode === 0) headerIcon.textContent = "☀️";
        else if (info.weathercode > 0 && info.weathercode < 4) headerIcon.textContent = "⛅";
        else headerIcon.textContent = "🌧️";

        contentArea.innerHTML = `
            <p style="font-size: 1.5rem; font-weight: bold; margin: 0;">${Math.round(info.temperature)}°C</p>
            <p style="margin: 0; color: #666;">Vent: ${info.windspeed} km/h</p>
        `;

    } catch (error) {
        console.error("Erreur :", error.message);
        contentArea.innerHTML = `<p>Impossible de charger la météo</p>`;
    }
}