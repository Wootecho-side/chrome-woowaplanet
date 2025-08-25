import { useState } from "react";
import InventoryButton from "../IconButton/InventoryButton/InventoryButton";
import { AnimatePresence } from "motion/react";
import * as S from "./Inventory.styles";
import type { InventoryProps, Satellite } from "./InventoryTypes";
import IconButton from "../IconButton/IconButton";
import useSatellitePagination from "../../hooks/useSatellitePagination";

export default function Inventory({
  inventory,
  selected,
  setSelected,
  isDarkMode = false,
  amount = 8,
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
            <SatelliteItemPagination
              inventory={inventory}
              amount={amount}
              selected={selected}
              handleSelect={handleSelect}
              isDarkMode={isDarkMode}
            />
          </S.ItemsWrapper>
        )}
      </AnimatePresence>
    </S.InventoryWrapper>
  );
}

interface SatelliteItemPaginationProps {
  inventory: Satellite[];
  amount: number;
  selected: number | null;
  handleSelect: (id: number) => void;
  isDarkMode?: boolean;
}

const SatelliteItemPagination = ({
  inventory,
  amount,
  selected,
  handleSelect,
  isDarkMode = false,
}: SatelliteItemPaginationProps) => {
  const ICON_SIZE = 50;
  const rowLength = ICON_SIZE * amount + 10 * amount;
  const { page, separatedItems, movePrevPage, moveNextPage } =
    useSatellitePagination(inventory, amount, selected);

  return (
    <S.Container>
      <IconButton
        name="left"
        size={40}
        onClick={movePrevPage}
        isDarkMode={isDarkMode}
        disabled={page === 0}
      />

      <S.PaginationContainer iconSize={ICON_SIZE} rowLength={rowLength}>
        <S.RowContainer startX={rowLength * page}>
          {separatedItems.map((separatedItem, index) => (
            <S.ItemRow
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {separatedItem.map((item) => (
                <S.ItemBox
                  key={item.id}
                  iconSize={ICON_SIZE}
                  layout
                  layoutId={`item-${item.id}`}
                  isSelected={selected === item.id}
                  isDarkMode={isDarkMode}
                  onClick={() => handleSelect(item.id)}
                >
                  {item.icon}
                </S.ItemBox>
              ))}
            </S.ItemRow>
          ))}
        </S.RowContainer>
      </S.PaginationContainer>
      <IconButton
        name="right"
        size={40}
        onClick={moveNextPage}
        isDarkMode={isDarkMode}
        disabled={page === separatedItems.length - 1}
      />
    </S.Container>
  );
};
