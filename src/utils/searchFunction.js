export const searchFunction = (querry, data) => {
  const tempArr = [];
  if (!querry) {
    return data;
  } else {
    if (querry == "gainer") {
      data.map((product) => {
        product.featured_product_id.map((fp) => {
          if (fp.auth_code == "Gainer") {
            tempArr.push(product);
            return;
          }
        });
      });
    } else if (querry == "whey-protein") {
      data.map((product) => {
        product.featured_product_id.map((fp) => {
          if (fp.auth_code == "Whey Protein") {
            tempArr.push(product);
            return;
          }
        });
      });
    } else if (querry == "support-suppliments") {
      data.map((product) => {
        product.featured_product_id.map((fp) => {
          if (fp.auth_code == "Daily Support") {
            tempArr.push(product);
            return;
          }
        });
      });
    } else if (querry == "peanut-butter") {
      data.map((product) => {
        product.featured_product_id.map((fp) => {
          if (fp.auth_code == "Peanut Butter") {
            tempArr.push(product);
            return;
          }
        });
      });
    } else {
      data.map((product) => {
        product.featured_product_id.map((fp) => {
          if (fp.flavour.includes(querry)) {
            tempArr.push(product);
            return;
          } else if (product.name.includes(querry)) {
            tempArr.push(product);
            return;
          }
        });
      });
    }
  }

  return tempArr;
};
