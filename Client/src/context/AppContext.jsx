import React, { createContext, useState, useContext, useEffect } from "react";
import { translations } from "../data/translations";

const AppContext = createContext();

const currencyRates = {
  USD: { symbol: "$", rate: 1.0, suffix: "" },
  EUR: { symbol: "€", rate: 0.92, suffix: "" },
  INR: { symbol: "₹", rate: 83.3, suffix: "" },
  AED: { symbol: "AED ", rate: 3.67, suffix: "" },
  SGD: { symbol: "S$", rate: 1.35, suffix: "" }
};

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem("currency") || "USD";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  // Translation helper
  const t = (key) => {
    const langDict = translations[lang] || translations["en"];
    return langDict[key] || translations["en"][key] || key;
  };

  // Price conversion helper (assumes input base is USD)
  const formatVal = (value, unit = "") => {
    const config = currencyRates[currency] || currencyRates["USD"];
    const convertedValue = Math.round(value * config.rate);
    const formatted = new Intl.NumberFormat(lang === "ta" ? "ta-IN" : "en-US").format(convertedValue);
    return `${config.symbol}${formatted}${unit ? ` ${unit}` : ""}${config.suffix}`;
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        currency,
        setCurrency,
        t,
        formatVal,
        currencyList: Object.keys(currencyRates),
        currencyRates
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
