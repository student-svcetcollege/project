let expenses = [];

function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    const date = document.getElementById("expenseDate").value;

    if (!name || isNaN(amount) || amount <= 0 || !date) {
        alert("Please enter a valid expense name, a positive amount, and a date.");
        return;
    }
  
    const expense = { name, amount, date };
    expenses.push(expense);
    updateExpenseTable();
    updateTotal();
    clearInputs();
}



        function deleteExpense(index) {
            expenses.splice(index, 1);
            updateExpenseTable();
            updateTotal();
        }

        function updateExpenseTable() {
            const expenseTableBody = document.getElementById("expenseTable").querySelector("tbody");  // in place of query select we can write getElementByTagName('tbody')[0];
            expenseTableBody.innerHTML = "";

            expenses.forEach((expense, index) => {
                const row = expenseTableBody.insertRow();
                const nameCell = row.insertCell(0);
                const amountCell = row.insertCell(1);
                const dateCell = row.insertCell(2);
                const actionCell = row.insertCell(3);

                nameCell.textContent = expense.name;
                amountCell.textContent = expense.amount.toFixed(2);
                dateCell.textContent = expense.date;

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.onclick = () => deleteExpense(index);

                actionCell.appendChild(deleteBtn);
            });
        }

        function updateTotal() {
            const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
            document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
        }

        function clearInputs() {
            document.getElementById("expenseName").value = "";
            document.getElementById("expenseAmount").value = "";
            document.getElementById("expenseDate").value = "";
        }