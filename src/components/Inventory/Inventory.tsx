import { useState } from "react";
import InventoryButton from "../IconButton/InventoryButton/InventoryButton";
import { AnimatePresence } from "motion/react";
import * as S from "./Inventory.styles";
import type { InventoryProps } from "./InventoryTypes";

export default function Inventory({
  inventory,
  selected,
  setSelected,
  isDarkMode = false,
}: InventoryProps) {
  const [showItems, setShowItems] = useState(false);

  const toggleInventory = () => {
    setShowItems((prev) => !prev);
  };

  const handleSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <S.InventoryWrapper>
      <InventoryButton
        size={50}
        isClicked={showItems}
        onClick={toggleInventory}
        isDarkMode={isDarkMode}
      />

      <AnimatePresence>
        {showItems && (
          <S.ItemsWrapper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {inventory.map((item) => (
              <S.ItemBox
                key={item.id}
                layout
                layoutId={`item-${item.id}`}
                isSelected={selected === item.id}
                isDarkMode={isDarkMode}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleSelect(item.id)}
              >
                {item.icon}
              </S.ItemBox>
            ))}
          </S.ItemsWrapper>
        )}
      </AnimatePresence>
    </S.InventoryWrapper>
  );
}
