window.initializeDragAndDrop = () => {
    //const cells = document.querySelectorAll('.draggable-cell');
    const orderSheetContainer = document.getElementById('order-sheet-cards-container');

    const table = document.getElementById('dispatch-ui-table');
    const cards = document.querySelectorAll('.order-sheet-card');

    let draggedCard = null;
    //cards.forEach(card => {
    //    card.addEventListener('dragstart', dragStart);
    //});

    function attachDragListenerToNewCards() {
        const newCards = document.querySelectorAll('.order-sheet-card:not(.initialized)');
        newCards.forEach(newCard => {
            newCard.addEventListener('dragstart', dragStart);
            newCard.classList.add('initialized');
        });
    }

    //cells.forEach(cell => {
    //    cell.addEventListener('dragover', dragOver);
    //    cell.addEventListener('drop', drop);
    //});

    table.addEventListener('dragover', dragOver);
    table.addEventListener('drop', drop);
    orderSheetContainer.addEventListener('dragover', dragOver);
    orderSheetContainer.addEventListener('drop', dropOrderSheet);

    function dragStart(event) {
        draggedCard = event.target;
    }

    function dragOver(event) {
        event.preventDefault();
    }

    function drop(event) {
        event.preventDefault();
        const targetCell = event.target.closest('td');
        const existingCard = targetCell.querySelector('.order-sheet-card');
        const sourceCell = draggedCard.parentNode;

        if (draggedCard && targetCell !== sourceCell) {
            if (existingCard) {
                sourceCell.appendChild(existingCard);
            }
            targetCell.appendChild(draggedCard);
            draggedCard = null;
            sourceCell = null;
        }
    }

    function dropOrderSheet(event) {
        event.preventDefault();

        const targetIsCard = event.target.classList.contains('order-sheet-card-text') || event.target.classList.contains('order-sheet-card');

        if (targetIsCard) {
            return;
        }

        if (draggedCard) {
            event.target.appendChild(draggedCard);
            draggedCard = null;
        }
    }

    window.attachDragListenerToNewCards = attachDragListenerToNewCards;
    attachDragListenerToNewCards();
};

//window.addEventListener('load', function () {
//    const deleteButtons = document.querySelectorAll('.delete-btn');
//    deleteButtons.forEach(button => {
//        button.addEventListener('click', function () {
//            const card = button.closest('.card');
//            card.remove();
//        });
//    });
//});

window.removeParentByContent = (content) => {
    const cards = document.querySelectorAll('.order-sheet-card');
    cards.forEach(card => {
        const cardText = card.querySelector('.order-sheet-card-text').textContent.trim();
        if (cardText === content) {
            card.remove();
        }
    });
}
