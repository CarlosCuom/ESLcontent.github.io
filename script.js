document.addEventListener('DOMContentLoaded', () => {
const nounsEnglish = [
  "Taxation",
  "Financial health",
  "Businesses",
  "Individuals",
  "Revenue",
  "Public services",
  "Infrastructure",
  "Economy",
  "Income inequalities",
  "Social welfare programs"
];

const nounsSpanish = [
  "Impuestos",
  "Salud financiera",
  "Empresas",
  "Individuos",
  "Ingresos",
  "Servicios públicos",
  "Infraestructura",
  "Economía",
  "Desigualdades de ingresos",
  "Programas de bienestar social"
];
const verbsEnglish = [
    "Collect",
    "Fund",
    "Thrive",
    "Impose",
    "Generate",
    "Contribute",
    "Secure",
    "Reduce",
    "Provide",
    "Drive"
  ];
  const verbsSpanish = [
    "Recaudar",
    "Financiar",
    "Prosperar",
    "Imponer",
    "Generar",
    "Contribuir",
    "Asegurar",
    "Reducir",
    "Proporcionar",
    "Impulsar"
  ];
  const adjectivesEnglish = [
    "Essential",
    "Crucial",
    "Public",
    "Stable",
    "Necessary",
    "Economic",
    "Significant",
    "Fiscal",
    "Stable",
    "Overall"
  ];
  
  const adjectivesSpanish = [
    "Esencial",
    "Crucial",
    "Público",
    "Estable",
    "Necesario",
    "Económico",
    "Significativo",
    "Fiscal",
    "Estable",
    "General"
  ];

  const adverbsEnglish = [
    "Smoothly",
    "Additionally",
    "Particularly",
    "Utmost",
    "Vital",
    "Essentially",
    "Practically",
    "Significantly",
    "Securely",
    "Finally"
  ];
  
  const adverbsSpanish = [
    "Fluidamente",
    "Adicionalmente",
    "Particularmente",
    "Máximo",
    "Vital",
    "Esencialmente",
    "Prácticamente",
    "Significativamente",
    "De manera segura",
    "Finalmente"
  ]; 
  const taxationText = `Taxation is an essential component of any economy, playing a crucial role in the financial health of businesses and individuals in Mexico. Taxes are collected by the government to fund various public services and infrastructure projects. By imposing taxes, the government can generate revenue and ensure the smooth functioning of the country. <Br>

For businesses, taxation is important as it helps finance public services such as education, healthcare, and transportation, which are necessary for a thriving economy. Additionally, taxation helps promote economic stability by reducing income inequalities and providing a safety net for those in need. <Br>

Individuals also contribute to taxation through income tax, sales tax, and property tax. These contributions play a significant role in securing social welfare programs, infrastructure development, and the overall growth of the country. Taxation is also vital for managing public debt and maintaining fiscal discipline, ensuring a stable economic environment. <Br>

In conclusion, taxation is of utmost importance to businesses and individuals in Mexico, as it serves as a financial backbone for the government, enabling the provision of essential services and driving economic growth.`;

const title = "Taxation Culture in Mexico";

//constantes que hacen referencia a las celdas de las tablas
const celdasN = ["N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8", "N9", "N10"];
const celdasNA = ["N1a", "N2a", "N3a", "N4a", "N5a", "N6a", "N7a", "N8a", "N9a", "N10a"];
const celdasV = ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"];
const celdasVA = ["V1a", "V2a", "V3a", "V4a", "V5a", "V6a", "V7a", "V8a", "V9a", "V10a"];
const celdasA = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
const celdasAA = ["A1a", "A2a", "A3a", "A4a", "A5a", "A6a", "A7a", "A8a", "A9a", "A10a"];
const celdasAd = ["Ad1", "Ad2", "Ad3", "Ad4", "Ad5", "Ad6", "Ad7", "Ad8", "Ad9", "Ad10"];
const celdasAdA = ["Ad1a", "Ad2a", "Ad3a", "Ad4a", "Ad5a", "Ad6a", "Ad7a", "Ad8a", "Ad9a", "Ad10a"];

//llenado automático de la página
document.getElementById("tituloDoc").innerHTML = title;
document.getElementById("texto").innerHTML = taxationText;

for (let i = 0; i < celdasN.length; i++) {
    document.getElementById(celdasN[i]).innerHTML = nounsEnglish[i];
    document.getElementById(celdasNA[i]).innerHTML = "--> " + "<i>" + nounsSpanish[i] + "</i>";
    document.getElementById(celdasV[i]).innerHTML = verbsEnglish[i];
    document.getElementById(celdasVA[i]).innerHTML = "-->" + "<i>" + verbsSpanish[i] + "</i>";
    document.getElementById(celdasA[i]).innerHTML = adjectivesEnglish[i];
    document.getElementById(celdasAA[i]).innerHTML = "-->" + "<i>" + adjectivesSpanish[i] + "</i>";
    document.getElementById(celdasAd[i]).innerHTML = adverbsEnglish[i];
    document.getElementById(celdasAdA[i]).innerHTML = "-->" + "<i>" + adjectivesSpanish[i] + "</i>";
}


})