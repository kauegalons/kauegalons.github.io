import { useState } from "react";

// Foto da seção "sobre". Coloque o arquivo em public/sobre.jpg;
// enquanto ele não existir, aparece o quadro com "KG".
export default function AboutPhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="photo">
      {failed ? (
        <div className="photo__placeholder">KG</div>
      ) : (
        <img src="/sobre.jpg" alt="Kauê Galon" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
