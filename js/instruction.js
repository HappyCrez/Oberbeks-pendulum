const instruction = document.querySelector('.instruction');
const laborator = document.querySelector('.laborator');
const toggleInstructionBtn = document.querySelector('#instructionButton');
let isInstruction = false;

toggleInstructionBtn.addEventListener('click', () => {
    if (isInstruction)
        hideInstruction();
    else
        showInstruction();
    isInstruction = !isInstruction;
});

function showInstruction() {
    instruction.classList.remove('visually-hidden');
    laborator.classList.add('visually-hidden');
}

function hideInstruction() {
    instruction.classList.add('visually-hidden');
    laborator.classList.remove('visually-hidden');
}