document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#addBtn');
  const modal = document.querySelector('#inputModal');
  const modalTitle = document.querySelector('#modalTitle');
  const modalInput = document.querySelector('#modalInput');
  const confirmBtn = document.querySelector('#confirmBtn');
  const cancelBtn = document.querySelector('#cancelBtn');
  const listName = document.querySelector('#listName');
  const totalAmount = document.querySelector('#totalAmount');
  const itemsContainer = document.querySelector('#itemsContainer');
  const themeIcon = document.querySelector('#themeIcon');

  let currentListName = '';
  let items = [];
  let longPressTimer;

  // Theme toggle
  themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // Add button
  addBtn.addEventListener('click', () => {
    if (!currentListName) {
      openModal('Create New List', 'Enter list name');
    } else {
      openModal('Add Item', 'Item name and price (e.g. Rice 2500)');
    }
  });

  // Modal controls
  cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  confirmBtn.addEventListener('click', () => {
    const input = modalInput.value.trim();
    
    if (!currentListName) {
      if (input) {
        currentListName = input;
        listName.textContent = currentListName;
        modal.classList.add('hidden');
      }
    } else {
     // Updated parsing logic for item input
            const lastSpace = input.lastIndexOf(' ');
            if (lastSpace !== -1) {
                const name = input.substring(0, lastSpace).trim();
                const price = parseFloat(input.substring(lastSpace + 1));
                
                if (name && !isNaN(price)) {
                    addItem(name, price);
                    modal.classList.add('hidden');
                    modalInput.value = '';
                } else {
                    alert('Please enter a valid item name and price (e.g. Rice 2500)');
                }
            } else {
                alert('Please enter a valid item name and price (e.g. Rice 2500)');
            }
        }
    });

  function openModal(title, placeholder) {
    modalTitle.textContent = title;
    modalInput.placeholder = placeholder;
    modal.classList.remove('hidden');
    modalInput.focus();
  }

  function addItem(name, price) {
    items.push({ name, price });
    renderItems();
  }

  function renderItems() {
    itemsContainer.innerHTML = '';
    let total = 0;

    const template = document.querySelector('#itemTemplate');

    items.forEach(item => {
        const clone = template.content.cloneNode(true);
        
        // Update image based on item name
        const itemImage = clone.querySelector('.item-image img');
        itemImage.src = getImageForItem(item.name);
        itemImage.alt = item.name;

        clone.querySelector('.item-name').textContent = item.name;
        clone.querySelector('.item-price').textContent = `₦${item.price.toFixed(2)}`;
        itemsContainer.appendChild(clone);
        total += item.price;
    });

    totalAmount.textContent = `₦${total.toFixed(2)}`;
}
});