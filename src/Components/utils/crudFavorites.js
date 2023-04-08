export const addFav = (dentist) => {
    localStorage.setItem(`card_${dentist.id}`, JSON.stringify(dentist));
    alert('Added to favorites')
    getFav()
}

export const favorite = (id) => {
    if (localStorage.getItem(`card_${id}`) !== undefined && localStorage.getItem(`card_${id}`)) {
        return true
    } else {
        return false
    }
}

export const getFav = () => {
    const favs = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('card_')) {
            const cardInfo = JSON.parse(localStorage.getItem(key));
            favs.push(cardInfo);
        }
    }
    return favs;
}

export const deleteFav = (id) => {
    localStorage.removeItem(`card_${id}`);
    alert('Remove from favorites')
};