import React from "react";
import { useNavigate } from "react-router-dom";

function GoBackButton() {
    const navigate = useNavigate();
    return (
      <>
      <button onClick={() => navigate(-1)}>
        Voltar
      </button>
      <button onClick={() => navigate('/aaaaaa') }>
        Voltar
      </button>
    </>
    )
}

export default GoBackButton;