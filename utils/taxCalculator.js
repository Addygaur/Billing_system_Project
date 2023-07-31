// utils/taxCalculator.js
const calculateProductTax = (price) => {
    if (price > 1000 && price <= 5000) {
      return price * 0.12; // 12% tax for price range 1001 to 5000
    } else if (price > 5000) {
      return price * 0.18; // 18% tax for price above 5000
    } else {
      return 0; // No tax for price below or equal to 1000
    }
  };
  
  const calculateServiceTax = (price) => {
    if (price > 1000 && price <= 8000) {
      return price * 0.1; // 10% tax for price range 1001 to 8000
    } else if (price > 8000) {
      return price * 0.15; // 15% tax for price above 8000
    } else {
      return 0; // No tax for price below or equal to 1000
    }
  };
  
  module.exports = {
    calculateProductTax,
    calculateServiceTax,
  };
  