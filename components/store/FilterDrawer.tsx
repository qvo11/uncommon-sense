"use client";

import { X } from "lucide-react";

const SIZES = ["S", "M", "L", "XL"];
const TYPES = ["hoodies", "tees"];

type Props = {
  open: boolean;
  onClose: () => void;
  activeColors: Set<string>;
  activeSizes: Set<string>;
  activeTypes: Set<string>;
  showTypeFilter: boolean;
  availableColors: string[];
  onColorChange: (color: string, checked: boolean) => void;
  onSizeChange: (size: string, checked: boolean) => void;
  onTypeChange: (type: string, checked: boolean) => void;
};

export default function FilterDrawer({
  open,
  onClose,
  activeColors,
  activeSizes,
  activeTypes,
  showTypeFilter,
  availableColors,
  onColorChange,
  onSizeChange,
  onTypeChange,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255, 255, 255, 0.6)" }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute left-0 top-0 h-full w-1/5 bg-white shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <span className="text-xs tracking-widest uppercase">Filter</span>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-950 transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Color */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-3">Color</p>
            <div className="space-y-2">
              {availableColors.map((color) => (
                <label key={color} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeColors.has(color)}
                    onChange={(e) => onColorChange(color, e.target.checked)}
                  />
                  <span className="text-sm capitalize">{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-3">Size</p>
            <div className="space-y-2">
              {SIZES.map((size) => (
                <label key={size} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeSizes.has(size)}
                    onChange={(e) => onSizeChange(size, e.target.checked)}
                  />
                  <span className="text-sm">{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type — /shop only */}
          {showTypeFilter && (
            <div>
              <p className="text-xs tracking-widest uppercase mb-3">Type</p>
              <div className="space-y-2">
                {TYPES.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeTypes.has(type)}
                      onChange={(e) => onTypeChange(type, e.target.checked)}
                    />
                    <span className="text-sm capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
