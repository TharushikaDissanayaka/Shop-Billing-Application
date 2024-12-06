document.addEventListener("DOMContentLoaded", () => {
    const addItemButton = document.getElementById("add-item");
    const billTableBody = document.querySelector("#bill-table tbody");
    const totalBillElement = document.getElementById("total-bill");
  
    let totalBill = 0;
  
    addItemButton.addEventListener("click", () => {
      const itemName = document.getElementById("item-name").value;
      const quantity = parseInt(document.getElementById("quantity").value);
      const price = parseFloat(document.getElementById("price").value);
  
      if (!itemName || quantity <= 0 || price <= 0) {
        alert("Please enter valid details for the item.");
        return;
      }
  
      const itemTotal = quantity * price;
      totalBill += itemTotal;
  
      // Add a new row to the table
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td>${price.toFixed(2)}</td>
        <td>${itemTotal.toFixed(2)}</td>
        <td><span class="action-btn" onclick="removeItem(this, ${itemTotal.toFixed(
          2
        )})">Remove</span></td>
      `;
  
      billTableBody.appendChild(row);
      updateTotalBill();
  
      // Clear form fields
      document.getElementById("item-name").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("price").value = "";
    });
  
    window.removeItem = (btn, itemTotal) => {
      const row = btn.parentElement.parentElement;
      billTableBody.removeChild(row);
      totalBill -= itemTotal;
      updateTotalBill();
    };
  
    function updateTotalBill() {
      totalBillElement.textContent = totalBill.toFixed(2);
    }
  });
  