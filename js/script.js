const inputDifficulty = document.getElementById('difficulty');
console.log(inputDifficulty);
const buttonPlay = document.getElementById('play');
console.log(buttonPlay);
const targetGrid = document.querySelector('.grid');
console.log(targetGrid);
const targetTitle = document.querySelector('main h1');
console.log(targetTitle);
const properties = document.querySelector(':root');
console.log(properties);

// Funzione per la creazione delle celle
const createCell = (content) => {
    const cell = document.createElement('div');
    cell.classList.add('cell', 'flex', 'justify-center', 'align-center');
    cell.append(content);
    cell.addEventListener('click', () => {
        cell.classList.toggle('clicked');
        console.log(content);
    })
    return cell;
}

// Al click sul bottone
buttonPlay.addEventListener('click', () =>{
    console.log('press');

    // Reset della griglia
    targetGrid.innerText = '';

    // Aggiunta classe "d-none" al titolo
    targetTitle.classList.add('d-none');

    // Aggiunta classe flex alla griglia
    if (targetGrid.classList.contains('d-none')){
        targetGrid.classList.remove('d-none');
        targetGrid.classList.add('flex');
    }

    // Definisce il numero di celle da creare in base alla difficoltà selezionata
    const RequiredCellsForRow = parseInt(inputDifficulty.value);
    console.log(RequiredCellsForRow);
    const cellNumber =  RequiredCellsForRow * RequiredCellsForRow; 
    console.log(cellNumber);

    // Cambia il numero di celle per riga  in CSS in base alla difficoltà selezionata
    properties.style.setProperty('--cell-for-row', RequiredCellsForRow);
    
    // Aggiunge le celle nella griglia
    for (let i = 1; i <= cellNumber; i++){
        const cell = createCell(i);
        targetGrid.appendChild(cell);
    }
});
