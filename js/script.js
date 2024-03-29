// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else{
            button.classList.remove('disabled');
            // addPlayer(button.parentNode.children[0].innerText)
            alert('5 Played already Selected');
            return;
        }
    })
} 

// A common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    return inputField;
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){
    const perPlayerBudgetId = getInputValue('per_player_budget');
    const perPlayerBudget = perPlayerBudgetId.value;
    perPlayerBudgetId.value = '';
    if(perPlayerBudget === '' ||
        isNaN(perPlayerBudget) ||
        perPlayerBudget < 0 ||
        perPlayerBudget == 0) {
        alert('Please provide valid number');
        return;
    }
    let totalPlayerExpense =  perPlayerBudget * 5;
    getValueOfElement( 'player_expense', totalPlayerExpense)
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText);
    
    const managerBudgetId = getInputValue('manager_budget');
    const managerBudget = managerBudgetId.value;
    managerBudgetId.value = '';
    if(managerBudget === '' ||
        isNaN(managerBudget) ||
        managerBudget < 0 ||
        managerBudget == 0) {
        alert('Please provide valid number');
        return;
    }

    const coachBudgetId = getInputValue('coach_budget');
    const coachBudget = coachBudgetId.value;
    coachBudgetId.value = '';
    if(coachBudget === '' ||
        isNaN(coachBudget) ||
        coachBudget < 0 ||
        coachBudget == 0) {
        alert('Please provide valid number');
        return;
    }

    let totalExpense = parseInt(playerTotalBudget) + parseInt(managerBudget) + parseInt(coachBudget);
        getValueOfElement( 'player_total_expense', totalExpense)
})

