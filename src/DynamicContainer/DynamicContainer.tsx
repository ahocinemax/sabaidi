import React, { useEffect, useState } from 'react';
import './DynamicContainer.css';
import { CartItemProps, DynamicContainerProps } from '../interfaces';
import { useCart } from '../Context/CartContext';

export const DynamicContainer = (parent: DynamicContainerProps) => {
  const { className, props } = parent;

  interface Item {
    name: string;
    price?: number;
    imageURL?: string;
    checked: boolean;
  };

  const priceProtein: number = 2;
  const priceVegetableCheese: number = 1;

  const { addToCart } = useCart();

  const [step, setStep] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedBase, setSelectedBase] = useState<Item>();
  const [selectedProtein, setSelectedProtein] = useState<Item[]>([]);
  const [selectedVegetableCheese, setSelectedVegetableCheese] = useState<Item[]>([]);
  let actual = props ? props[step] : undefined;

  const displayAlert = (message: string) => {
    let text: string = message;
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

  const handleAddToCart = () => {
    if (selectedBase) {
      let description = "Recette :";

      const proteinText = selectedProtein.map(p => p.name).join(', ');
      const vegetableText = selectedVegetableCheese.map(v => v.name).join(', ');

      if (proteinText) {
        description += ` ${proteinText}`;
      }

      if (vegetableText) {
        description += proteinText ? ` avec ${vegetableText}` : ` ${vegetableText}`;
      }

      let cartItem: CartItemProps = {
        imageUrl: 'coming-soon.jpg',
        title: "Rouleau " + selectedBase?.name,
        description: description,
        price: totalPrice.toFixed(2),
        category: "Jap'",
        quantity: 1
      };
      addToCart(cartItem);
    }
    // vider les variables pour reprendre à 0
    setStep(0);
    setTotalPrice(0);
    setSelectedBase(undefined);
    setSelectedProtein([]);
    setSelectedVegetableCheese([]);
  }

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

  // Calculate total price
  useEffect(() => {
    let totalSupplements: number = selectedProtein.length + selectedVegetableCheese.length;

    // Prix de base
    let newTotalPrice: number = selectedBase?.price ? Number(selectedBase.price) : 0;

    // Vérification des suppléments payants (seulement à partir du 3ème)
    if (totalSupplements > 2) {
      let paidSupplements = totalSupplements - 2;

      // Calcul du prix des suppléments en fonction des catégories
      let vegetableCheeseToCharge = Math.min(paidSupplements, selectedVegetableCheese.length);
      let proteinToCharge = paidSupplements - vegetableCheeseToCharge;
      newTotalPrice += (proteinToCharge * priceProtein) + (vegetableCheeseToCharge * priceVegetableCheese);
    }

    setTotalPrice(newTotalPrice);

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
        {step < 3 ?
          <button className="btn-compose" onClick={() => setStep(step + 1)}>Suivant</button>
          :
          <button className="btn-compose" onClick={() => handleAddToCart()}>Ajouter</button>
        }
      </div>
    </div>
  );
}
