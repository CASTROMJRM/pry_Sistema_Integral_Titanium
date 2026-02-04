import { useEffect, useMemo, useState } from "react";
import styles from "./ProductModal.module.css";

type ProductStatus = "Activo" | "Inactivo";

export type ProductFormData = {
  name: string;
  category: string;
  price: number;
  stock: number;
  status: ProductStatus;
  image?: string;
};

interface Props {
  open: boolean;
  title?: string;
  initial?: Partial<ProductFormData>;
  onClose: () => void;
  onSave: (data: ProductFormData) => void;
}

const defaultData: ProductFormData = {
  name: "",
  category: "Proteína",
  price: 0,
  stock: 0,
  status: "Activo",
  image: "",
};

export default function ProductModal({
  open,
  title = "Nuevo producto",
  initial,
  onClose,
  onSave,
}: Props) {
  const [data, setData] = useState<ProductFormData>(defaultData);

  useEffect(() => {
    if (open) {
      setData({ ...defaultData, ...initial } as ProductFormData);
    }
  }, [open, initial]);

  const canSave = useMemo(() => {
    return (
      data.name.trim().length >= 3 &&
      data.category.trim().length >= 2 &&
      Number.isFinite(data.price) &&
      data.price > 0 &&
      Number.isFinite(data.stock) &&
      data.stock >= 0
    );
  }, [data]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  const handleSave = () => {
    if (!canSave) return;
    onSave({
      ...data,
      name: data.name.trim(),
      category: data.category.trim(),
      image: data.image?.trim() || "",
    });
  };

  return (
    <div className={styles.backdrop} onMouseDown={onClose}>
      <div
        className={styles.modal}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>Completa los datos del producto.</p>
          </div>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Nombre</span>
              <input
                value={data.name}
                onChange={(e) =>
                  setData((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Ej. Creatina Monohidratada"
              />
            </label>

            <label className={styles.field}>
              <span>Categoría</span>
              <input
                value={data.category}
                onChange={(e) =>
                  setData((p) => ({ ...p, category: e.target.value }))
                }
                placeholder="Ej. Proteína / Creatina / Pre-entreno"
              />
            </label>

            <label className={styles.field}>
              <span>Precio (MXN)</span>
              <input
                type="number"
                min={0}
                step="0.01"
                value={data.price}
                onChange={(e) =>
                  setData((p) => ({ ...p, price: Number(e.target.value) }))
                }
              />
            </label>

            <label className={styles.field}>
              <span>Stock</span>
              <input
                type="number"
                min={0}
                step="1"
                value={data.stock}
                onChange={(e) =>
                  setData((p) => ({ ...p, stock: Number(e.target.value) }))
                }
              />
            </label>

            <label className={styles.field}>
              <span>Estado</span>
              <select
                value={data.status}
                onChange={(e) =>
                  setData((p) => ({ ...p, status: e.target.value as any }))
                }
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </label>

            <label className={styles.field}>
              <span>Imagen (URL)</span>
              <input
                value={data.image || ""}
                onChange={(e) =>
                  setData((p) => ({ ...p, image: e.target.value }))
                }
                placeholder="https://..."
              />
            </label>
          </div>

          {!!data.image?.trim() && (
            <div className={styles.preview}>
              <img
                src={data.image}
                alt="Vista previa"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button className={styles.btnGhost} onClick={onClose}>
            Cancelar
          </button>
          <button
            className={styles.btnPrimary}
            onClick={handleSave}
            disabled={!canSave}
            title={!canSave ? "Completa los campos obligatorios" : "Guardar"}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
