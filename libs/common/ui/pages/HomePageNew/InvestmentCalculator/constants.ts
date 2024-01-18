export const MAX_INVEST = 100000
export const MIN_INVEST = 100
export const DEFAULT_INVEST = 50000



export const INITIAL_STATE = {
  appreciationRate: 0.062,
  capRate: 0.0526,
  price: 500000,
  yield: 0.115,
};


export const EN_DATA: { [k: string]: string } = {
  caption: "Investment Calculator",
  headTooltip:
    "All projected values are before any property costs and platforms fees, and based on a 5-year holding period. We expect the asset value to grow <strong>30% over the next 5 years.</strong>",
  title: "Projected return on investment in",
  titleStrong: "5 years",
  labelInvestment: "Investment",
  labelRental: "Total rental income",
  labelAppreciation: "Value appreciation",
  labelRInvestment: "Initial Investment",
  labelRGrowth: "Property value growth (5 year)",
  bottomHead: "Expected annual yield ",
  bottomTooltip:
    "Use this calculator to estimate the potential returns from your real estate investment. Simply adjust the sliders to see how the variables will impact your estimated returns.",
};

export const ES_DATA = {
  caption: "Calculadora de Inversión",
  headTooltip:
    "Todos los valores previstos no incluyen costos de propiedad y comisiones de plataformas, y se basan en un periodo de tenencia de 5 años. Esperamos que el valor de los activos crezca un <strong>30% durante los próximos 5 años.</strong>",
  title: "Retorno de la inversión previsto en",
  titleStrong: "5 años",
  labelInvestment: "Inversión",
  labelRental: "Ingresos totales por alquiler",
  labelAppreciation: "Revalorización",
  labelRInvestment: "Inversión Inicial",
  labelRGrowth: "Aumento del valor de la propiedad (5 años)",
  bottomHead: "Renta anual esperada",
  bottomTooltip:
    "Utiliza esta calculadora para estimar la rentabilidad potencial de tu inversión inmobiliaria. Basta con ajustar los controles deslizantes para ver el impacto de las variables en la rentabilidad estimada.",
};

