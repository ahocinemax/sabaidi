import React, { useEffect, useState } from 'react';
import './DynamicContainer.css';
import { DynamicContainerProps } from '../interfaces';

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

  const [step, setStep] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedBase, setSelectedBase] = useState<Item>();
  const [selectedProtein, setSelectedProtein] = useState<Item[]>([]);
  const [selectedVegetableCheese, setSelectedVegetableCheese] = useState<Item[]>([]);
  let actual = props ? props[step] : undefined;

  const handleCheckboxClick = (e: any, key: string | undefined, ingredient: any) => {
    switch (key) {
      case "Base":
        setSelectedBase(ingredient.name !== selectedBase?.name ? { ...ingredient, checked: true } : undefined);
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
      'Fromage': setSelectedVegetableCheese // Assuming you want vegetables and cheese in the same category, adjust if needed
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
    }}
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
    let vegetableCheeseSupplement = 0;
    let proteinSupplement = 0;
    let supplement = selectedProtein.length + selectedVegetableCheese.length;
    let length1 = selectedProtein.length;
    let length2 = selectedVegetableCheese.length;
    if (!supplement) return ;
    if (supplement <= 2) setTotalPrice(selectedBase?.price ? selectedBase.price : 0);
    else {
      while (supplement > 2) {
        if (length2) {
          length2--;
          vegetableCheeseSupplement += 1;
        } else if (length1) {
          length1--;
          proteinSupplement += 1;
        }
        supplement--;
      }
      setTotalPrice(selectedBase?.price ? selectedBase.price + vegetableCheeseSupplement * priceVegetableCheese + proteinSupplement * priceProtein : 0);
    }
  }, []);

  return (
    <div className={className}>
      <h3>{actual?.name}</h3>
      <div className='compose-sub'>
        {actual?.items.map((item: any, index: number) => (
          <div key={index} className={`compose-item ${actual && isSelected(actual.name, item) ? 'selected' : ''}`} onClick={(e) => handleCheckboxClick(e, actual?.name, item)}>
            <img className='compose-image-base' src={item.imageURL} alt={item.name} />
            <div className='compose-details'>
              <h3>{item.name}</h3>
              {item.price ? <p>{item.price}€</p> : null}
            </div>
          </div>
        ))}
      </div>
      <div className="footer-compose">
        {step ? <button className="btn-compose" onClick={() => setStep(step - 1)}>Précédent</button> : <button className="btn-compose" style={{opacity: 0, cursor: 'auto'}}>Précédent</button> }
        <h1 className="">{totalPrice?.toFixed(2)}</h1>
        {step < 3 ? <button className="btn-compose" onClick={() => setStep(step + 1)}>Suivant</button> : <button className="btn-compose" style={{opacity: 0, cursor: 'auto'}}/> }
      </div>
    </div>
  );
}
