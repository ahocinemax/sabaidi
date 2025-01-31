import React, { useEffect, useState } from 'react';
import './DynamicContainer.css';
import { DynamicContainerProps } from '../interfaces';
import { useCart } from '../Context/CartContext';

export const DynamicContainer = (parent: DynamicContainerProps) => {
  const { className, props } = parent;

  interface Item {
    name: string;
    price?: number;
    imageURL?: string;
    checked: boolean;
  };

  const priceProtein = 2;
  const priceVegetableCheese = 1;

  const { addToCart } = useCart();

  const [step, setStep] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedBase, setSelectedBase] = useState<Item>();
  const [selectedProtein, setSelectedProtein] = useState<Item[]>([]);
  const [selectedVegetableCheese, setSelectedVegetableCheese] = useState<Item[]>([]);
  let actual = props ? props[step] : undefined;

  const displayAlert = (message: string) => {
    let text = message;
    text += " voici les ingrédients sélectionnés : ";
    if (selectedBase) text += selectedBase.name + ", ";
    selectedProtein.forEach((item) => text += item.name + ", ");
    selectedVegetableCheese.forEach((item) => text += item.name + ", ");
    alert(text);
  }

  const handleCheckboxClick = (e: any, key: string | undefined, ingredient: any) => {
    // Check number of total selected items
    if (key !== "Base" && selectedProtein.length + selectedVegetableCheese.length >= 4) {
      // Check if the ingredient is already selected
      if ((selectedProtein.some(item => item.name === ingredient.name) || selectedVegetableCheese.some(item => item.name === ingredient.name)) && key) {
        updateSelection(key, ingredient);
      } else return displayAlert("Vous avez déjà sélectionné 4 suppléments.");
    }
    switch (key) {
      case "Base":
        setSelectedBase(ingredient.name !== selectedBase?.name ? { ...ingredient, checked: true } : undefined);
        setStep((prevStep) => prevStep + 1);
        break;
      case "Protéine":
      case "Végétaux":
      case "Fromage":
        updateSelection(key, ingredient);
        break;
      default:
        break;
    }
  };

  const updateSelection = (key: string, ingredient: any) => {
    let currentSelection = [];
    const setSelectedItems = {
      'Protéine': setSelectedProtein,
      'Végétaux': setSelectedVegetableCheese,
      'Fromage': setSelectedVegetableCheese // vegetables and cheese are in the same category
    }[key];

    switch (key) {
      case 'Protéine':
        currentSelection = selectedProtein;
        break;
      case 'Végétaux':
      case 'Fromage':
        currentSelection = selectedVegetableCheese;
        break;
      default:
        return;
    }
    if (!setSelectedItems) return null;
    else {
      if (currentSelection.some(item => item.name === ingredient.name)) {
        setSelectedItems(currentSelection.filter(item => item.name !== ingredient.name));
      } else {
        setSelectedItems([...currentSelection, { ...ingredient, checked: true }]);
      }
    }
  };

  const isSelected = (category: string, item: any) => {
    switch (category) {
      case "Base":
        return selectedBase?.name === item.name;
      case "Protéine":
        return selectedProtein.some(p => p.name === item.name);
      case "Végétaux":
      case "Fromage":
        return selectedVegetableCheese.some(v => v.name === item.name);
      default:
        return false;
    }
  };

  // useEffect(() => {
  //   console.log(selectedBase);
  //   console.log(selectedProtein);
  //   console.log(selectedVegetableCheese);
  // }, [selectedBase, selectedProtein, selectedVegetableCheese]);

  // Calculate total price
  useEffect(() => {
    let vegetableCheeseSupplement = 0;
    let proteinSupplement = 0;
    let length1 = selectedProtein?.length || 0;
    let length2 = selectedVegetableCheese?.length || 0;
    let supplement = length1 + length2;

    // Si aucun supplément, on ne fait rien
    if (!supplement) return;

    // Si la somme des suppléments est inférieure ou égale à 2, on applique juste le prix de base
    if (supplement <= 2) {
      setTotalPrice(selectedBase?.price || 0);
    } else {
      // Calcul des suppléments pour les fromages et protéines
      while (length1 > 0 || length2 > 0) {
        if (length2 > 0) {
          length2--;
          vegetableCheeseSupplement++;
        } else if (length1 > 0) {
          length1--;
          proteinSupplement++;
        }
      }

      // Calcul du prix total
      const basePrice = selectedBase?.price || 0;
      setTotalPrice(basePrice + vegetableCheeseSupplement * priceVegetableCheese + proteinSupplement * priceProtein);
    }
  }, [selectedBase, selectedProtein, selectedVegetableCheese]);


  return (
    <div className={className}>
      <h3>{actual?.name}</h3>
      <div className='compose-sub'>
        {actual?.items.map((item: any, index: number) => (
          <div key={index} className={`compose-item ${actual && isSelected(actual.name, item) ? 'selected' : ''}`} onClick={(e) => handleCheckboxClick(e, actual?.name, item)}>
            {/* <img className='compose-image-base' src={item.imageURL} alt={item.name} /> */}
            <div className='compose-item-details'>
              <h3>{item.name}</h3>
              {item.price ? <p>{item.price}€</p> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="footer-compose">
        {step ? <button className="btn-compose" onClick={() => setStep(step - 1)}>Précédent</button> : <button className="btn-compose" style={{ opacity: 0, cursor: 'auto' }}>Précédent</button>}
        <h1 className="">
          {isNaN(Number(totalPrice)) ? 0.00 : Number(totalPrice).toFixed(2)}
        </h1>
        {step < 3 ? <button className="btn-compose" onClick={() => setStep(step + 1)}>Suivant</button> : <button className="btn-compose" style={{ opacity: 0, cursor: 'auto' }} />}
        {/* <div className="add-to-cart" onClick={(e) => addToCart()}></div> */}
      </div>
    </div>
  );
}
