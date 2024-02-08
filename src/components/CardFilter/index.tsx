import { ChangeEvent, useState } from "react";
import "./styles.css";

type FormData = {
  minPrice: number;
  maxPrice: number;
};

export default function CardFilter() {
  const [formData, setFormData] = useState<FormData>({
    minPrice: 0,
    maxPrice: 0,
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

  return (
    <section className="form-card">
      <form className="form-container">
        <input
          name="minPrice"
          value={formData.minPrice}
          type="text"
          placeholder="Preço mínimo"
          onChange={handleInputChange}
        />
        <input
          name="maxPrice"
          value={formData.maxPrice}
          type="text"
          placeholder="Preço máximo"
          onChange={handleInputChange}
        />
        <button>Filtrar</button>
      </form>
    </section>
  );
}
