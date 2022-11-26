import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function GoBackButton() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
      <>
      <button onClick={() => navigate(-1)}>
        Voltar
      </button>
      <button onClick={() => navigate('/abacate') }>
        Voltar
      </button>
    </>
    )
}

export default GoBackButton;