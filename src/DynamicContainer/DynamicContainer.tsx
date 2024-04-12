import React, { useEffect, useState } from 'react';
import './DynamicContainer.css';
import { DynamicContainerProps } from '../interfaces';

export const DynamicContainer = (parent: DynamicContainerProps) => {
  const { className, props } = parent;

  interface Item {
    name: string;
    price?: number;
  };

  const priceProtein = 2;
  const priceVegetableCheese = 1;

  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedBase, setSelectedBase] = useState<Item>();
  const [selectedProtein, setSelectedProtein] = useState<Item[]>([]);
  const [selectedVegetableCheese, setSelectedVegetableCheese] = useState<Item[]>([]);

  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>, key: string, ingredient: any) => {
    const isChecked = e.target.checked;
  
    switch (key) {
      case "Base":
        if (isChecked) setSelectedBase({ name: ingredient.name, price: parseFloat(ingredient.price || undefined) });
        else setSelectedBase(undefined);
        break;
        
      case "Protéine":
        updateSelection(selectedProtein, setSelectedProtein, ingredient, isChecked);
        break;
  
      case "Végétaux":
        updateSelection(selectedVegetableCheese, setSelectedVegetableCheese, ingredient, isChecked);
        break;

      case "Fromage":
        updateSelection(selectedVegetableCheese, setSelectedVegetableCheese, ingredient, isChecked);
        break;
  
      default:
        break;
    }
  };
  
  const updateSelection = (selectedItems: any[], setSelectedItems: React.Dispatch<React.SetStateAction<any[]>>, ingredient: any, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems(selectedItems ? [...selectedItems, { name: ingredient.name, price: parseFloat(ingredient.price || "0") }] : [{ name: ingredient.name, price: parseFloat(ingredient.price || undefined) }]);
    } else {
      setSelectedItems(selectedItems?.filter(item => item.name !== ingredient.name) || []);
    }
  };
  

  useEffect(() => {
    let vegetableCheeseSupplement = 0;
    let proteinSupplement = 0;
    let supplement = selectedProtein.length + selectedVegetableCheese.length;
    let length1 = selectedProtein.length;
    let length2 = selectedVegetableCheese.length;
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
  }, [selectedBase, selectedProtein, selectedVegetableCheese]);

  return (
    <div className={className}>
      <div className='compose-sub'>
        {props?.map((cat, index) => (
          <div className="category" key={index}>
            <h1 key={index}>{cat.name}</h1>
            <div className='bullet-point'>
              {cat.items.map((item, idx) => (
                <div className='line'>
                  <div>
                    {!index ? 
                      <input
                        type="radio"
                        name={`item-${idx}`}
                        onChange={(e) => handleCheckboxClick(e, cat.name, item)}
                        checked={selectedBase?.name === item.name}
                      />
                    :
                      <input
                        type={"checkbox"}
                        name={`item-${idx}`}
                        onChange={(e) => handleCheckboxClick(e, cat.name, item)}
                      />
                    }
                    <label htmlFor={`item-${idx}`}>{item.name}</label>
                  </div>
                  {item.price && <p key={idx}>{item.price}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h1 className="">{totalPrice.toFixed(2)}</h1>
    </div>
  );
}
