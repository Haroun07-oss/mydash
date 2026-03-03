export function todo() {
    const todoInput = document.getElementById('todo-input');
    const btnadd = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    // --- 1. CHARGEMENT (LECTURE) ---
    // On va chercher dans le "coffre-fort" du navigateur
    // Si c'est vide, on crée un tableau vide []
    let taches = JSON.parse(localStorage.getItem('maListeDeTaches')) || [];
    
    // On affiche tout de suite ce qu'on a trouvé au démarrage
    afficher();

    function ajout() {
        let texte = todoInput.value.trim();
        if (texte === "") return alert('Entrez une tâche');

        // On ajoute au tableau
        taches.push(texte);
        
        // On enregistre et on met à jour l'écran
        sauvegarderEtAfficher();
        todoInput.value = "";
    }

    // --- 2. SAUVEGARDE (ÉCRITURE) ---
    function sauvegarderEtAfficher() {
        // localStorage ne comprend que le texte, donc on transforme le tableau en JSON
        localStorage.setItem('maListeDeTaches', JSON.stringify(taches));
        afficher();
    }

    // --- 3. DESSINER LE HTML ---
    function afficher() {
        todoList.innerHTML = "";
        taches.forEach((tache, index) => {
            todoList.innerHTML += `
            <li>
                <span>${tache}</span>
                <button class="supprimer" data-id="${index}">supprimer</button>
            </li>
            `;
        });
    }

    // --- 4. ÉCOUTEURS ---
    btnadd.addEventListener('click', ajout);

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') ajout();
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('supprimer')) {
            const index = e.target.getAttribute('data-id');
            // On retire du tableau et on relance la sauvegarde
            taches.splice(index, 1);
            sauvegarderEtAfficher();
        }
    });
}