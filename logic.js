// Данные игр
let TradingGames = [
    { name: 'Colisium Online', type: 'Action', image: 'materials/trending-01.jpg' },
    { name: 'Genshin Impact', type: 'Adventure', image: 'materials/trending-02.jpg' },
    { name: 'Fortnite', type: 'Shooter', image: 'materials/trending-03.jpg' },
    { name: 'DragonFight', type: 'Fighting', image: 'materials/trending-04.jpg' }
];

let MostPlayedGames = [
    { name: 'War Frame', type: 'Action', image: 'materials/top-game-01.jpg' },
    { name: 'Pubg', type: 'Battle Royale', image: 'materials/top-game-02.jpg' },
    { name: 'Apex Legends', type: 'Shooter', image: 'materials/top-game-03.jpg' },
    { name: 'Sims 4', type: 'Sandbox', image: 'materials/top-game-04.jpg' }
];

let TopGames = [
    { name: 'BrawlHalla', type: 'Action', image: 'materials/categories-01.jpg' },
    { name: 'Tower Of Fantasy', type: 'Battle Royale', image: 'materials/top-game-02.jpg' },
    { name: 'War Frame', type: 'Action', image: 'materials/top-game-01.jpg' },
    { name: 'Apex Legends', type: 'Shooter', image: 'materials/top-game-03.jpg' }
];

// Корзина
let cart = [];

// Модальное окно
const modal = document.getElementById('cartModal');
const cartContent = modal.querySelector('.flex-1');

function openCart() {
    renderCart();
    modal.classList.remove('hidden');
}

function closeCart() {
    modal.classList.add('hidden');
}

function renderCart() {
    cartContent.innerHTML = '';
    cartContent.style.display = 'flex';
    cartContent.style.flexDirection = 'column';
    cartContent.style.padding = '1rem';

    if (cart.length === 0) {
        cartContent.innerHTML = '<div style="flex:1; display:flex; align-items:center; justify-content:center; color:rgb(156,163,175); font-size:1.25rem;">Your Cart is empty</div>';
    } else {
        cart.forEach((game, index) => {
            const item = document.createElement('div');
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.gap = '1rem';
            item.style.padding = '1rem';
            item.style.borderBottom = '1px solid rgb(229,231,235)';

            const img = document.createElement('img');
            img.src = game.image;
            img.style.width = '6rem';
            img.style.height = '6rem';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '0.25rem';
            item.appendChild(img);

            const desc = document.createElement('div');
            desc.style.flex = '1';

            const name = document.createElement('p');
            name.textContent = game.name;
            name.style.fontWeight = '700';
            name.style.fontSize = '1.25rem';
            desc.appendChild(name);

            const type = document.createElement('p');
            type.textContent = game.type;
            type.style.color = 'rgb(75,85,99)';
            desc.appendChild(type);

            item.appendChild(desc);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Delete';
            removeBtn.style.color = 'rgb(239,68,68)';
            removeBtn.style.fontWeight = '600';
            removeBtn.onclick = () => {
                cart.splice(index, 1);
                renderCart();
            };
            item.appendChild(removeBtn);

            cartContent.appendChild(item);
        });
    }
}

function addToCart(game) {
    cart.push(game);
    renderCart();
}

// Привязка кнопки корзины
document.getElementById('CartBtn').addEventListener('click', openCart);
document.querySelector('nav .md\\:hidden button:first-child').addEventListener('click', openCart);

// Функция для создания карточки
function createCard(game) {
    const card = document.createElement('div');
    card.style.backgroundColor = '#eee';
    card.style.borderRadius = '1.5rem';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.paddingBottom = '1.25rem';
    card.style.gap = '1.25rem';
    card.style.width = '100%';
    card.style.maxWidth = '450px';
    card.style.boxSizing = 'border-box';
    card.style.margin = 'auto';

    const img = document.createElement('img');
    img.src = game.image;
    img.style.borderRadius = '1.5rem';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.objectFit = 'cover';
    card.appendChild(img);

    const cardMenu = document.createElement('div');
    cardMenu.style.display = 'flex';
    cardMenu.style.justifyContent = 'space-between';
    cardMenu.style.alignItems = 'center';
    cardMenu.style.padding = '0 1.25rem';

    const description = document.createElement('div');
    description.style.display = 'flex';
    description.style.flexDirection = 'column';

    const name = document.createElement('p');
    name.textContent = game.name;
    name.style.fontWeight = '700';
    name.style.fontSize = '1.25rem';
    name.style.lineHeight = '1.75rem';

    const type = document.createElement('p');
    type.textContent = game.type;
    type.style.fontWeight = '600';
    type.style.color = '#7a7a7a';

    const cartBtn = document.createElement('button');
    const cartIcon = document.createElement('i');
    cartIcon.className = "fa-solid fa-bag-shopping";
    cartIcon.style.color = 'white';
    cartIcon.style.padding = '0.75rem';
    cartIcon.style.backgroundColor = '#ee626b';
    cartIcon.style.borderRadius = '9999px';
    cartBtn.appendChild(cartIcon);
    cartBtn.onclick = () => addToCart(game);

    description.appendChild(type);
    description.appendChild(name);

    cardMenu.appendChild(description);
    cardMenu.appendChild(cartBtn);
    card.appendChild(cardMenu);

    return card;
}

// Рендер контейнеров
function renderGames(games, containerId) {
    const container = document.getElementById(containerId);
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';
    container.style.gap = '1.25rem';

    games.forEach(game => {
        container.appendChild(createCard(game));
    });
}

// Заполняем все секции
renderGames(TradingGames, "TradingGamesContainer");
renderGames(MostPlayedGames, "MostPlayedGamesContainer");
renderGames(TopGames, "TopGamesContainer");
