        // Liste d'exemples de pays (Vous pouvez ajouter tous les pays nécessaires ici)

function addToCart() {
    // Récupérer le nom du produit à partir de l'élément parent
    const productCard = event.target.closest('.card');
    const productName = productCard.querySelector('.card-title').textContent.trim();
    
    window.alert(`"${productName}" has been added to your cart!`);

    
}
    