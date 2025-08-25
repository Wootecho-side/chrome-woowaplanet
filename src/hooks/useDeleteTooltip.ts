import { useEffect, useState } from "react";

const useDeleteTooltip = (
  tooltipRef: React.RefObject<HTMLDivElement | null>
) => {
  const [contextTarget, setContextTarget] = useState<number | null>(null);

  const handleContextMenu = (e: React.MouseEvent, bookmarkId: number) => {
    e.preventDefault();
    setContextTarget(bookmarkId);
  };

  const handleDelete = (bookmarkId: number) => {
    console.log("삭제:", bookmarkId);
    setContextTarget(null);
  };

  const handleCancel = () => {
    setContextTarget(null);
  };

  const checkIsShowDeleteTooltip = (bookmarkId: number) =>
    bookmarkId === contextTarget;

  useEffect(() => {
    if (!contextTarget) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setContextTarget(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contextTarget, tooltipRef]);

  return {
    tooltipRef,
    checkIsShowDeleteTooltip,
    handleContextMenu,
    handleDelete,
    handleCancel,
  };
};

export default useDeleteTooltip;
