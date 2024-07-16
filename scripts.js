const phones = [
    {
      brand: "Apple",
      model: "iPhone 13",
      price: 799,
      description: "Latest iPhone with A15 Bionic chip",
    },
    {
      brand: "Samsung",
      model: "Galaxy S21",
      price: 699,
      description: "Flagship Samsung phone with Exynos 2100",
    },
    {
      brand: "Google",
      model: "Pixel 6",
      price: 599,
      description: "Google's latest phone with Tensor chip",
    }
  ];
  
  function displayPhones() {
    const phoneList = document.getElementById('phone-list');
    phones.forEach(phone => {
      const phoneItem = document.createElement('div');
      phoneItem.className = 'phone-item';
      phoneItem.innerHTML = `
        <h2>${phone.brand} ${phone.model}</h2>
        <p>${phone.description}</p>
        <p>$${phone.price}</p>
      `;
      phoneList.appendChild(phoneItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', displayPhones);
  