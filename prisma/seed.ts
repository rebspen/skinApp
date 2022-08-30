import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "CeraVe SA Smoothing Cleanser",
        ingredients: [
          "Water",
          "Sodium Lauroyl Sarcosinate",
          "Cocamidopropyl Hydroxysultaine",
          "Glycerin",
          "Niacinamide",
          "Gluconolactone",
          "Sodium Methyl Cocoyl Taurate",
          "Peg-150 Pentaerythrityl Tetrastearate",
          "Ceramide Np",
          "Ceramide Ap",
          "Ceramide Eop",
          "Carbomer",
          "Calcium Gluconate",
          "Salicylic Acid",
          "Sodium Benzoate",
          "Sodium Lauroyl Lactylate",
          "Cholesterol",
          "Phenoxyethanol",
          "Disodium Edta",
          "Tetrasodium Edta",
          "Hydrolyzed Hyaluronic Acid",
          "Phytosphingosine",
          "Xanthan Gum",
          "Ethylhexylglycerin",
        ],
      },
      {
        name: "Effaclar Purifying Cleansing Gel by La Roche-Posay",
        ingredients: [
          "Water",
          "Decyl Glycoside",
          "Sodium Laureth Sulfate",
          "Peg-120 Methyl Glucose Dioleate",
          "3-Hydroxylyl Polyglyceryl Ether",
          "Peg-4 Dilaurate",
          "Peg-4 Laurate",
          "Pca Zinc",
          "Disodium EDTA",
          "Citric Acid",
          "Polyquaternium-7",
          "Iodopropynyl Butylcarbamate",
          "Peg-4, Methylparaben",
          "Propylparaben",
        ],
      },
      {
        name: "Garnier Micellar Water",
        ingredients: [
          "Water",
          "Hexylene Glycol",
          "Glycerin",
          "Disodium Cocoamphodiacetate",
          "Disodium EDTA",
          "Poloxamer 184",
          "Polyaminopropyl Biguanide",
          "(B162919/4)",
        ],
      },
      {
        name: "Caudalie Vinoclean Instant Foaming Cleanser",
        ingredients: [
          "Water",
          "Glycerin",
          "Sodium Cocoyl Glutamate",
          "Caprylyl/Capryl Glucoside",
          "Cocamidopropyl Betaine",
          "Coco-Betaine",
          "Caprylyl Glycol",
          "Citric Acid",
          "Potassium Sorbate",
          "Sodium Cocoyl Isethionate",
        ],
      },
      {
        name: "Avene Gentle Cleansing Milk",
        ingredients: [
          "Water",
          "Mineral Oil (Paraffinum Liquidum)",
          "Propylene Glycol",
          "Peg-6 Stearate",
          "Peg-32 Stearate",
          "1,2-Hexanediol",
          "Acrylates/C10-30 Alkyl Acrylate Crosspolymer",
          "C12-20 Alkyl Glucoside",
          "C14-22 Alcohols",
          "Caprylyl Glycol Carbomer",
          "Fragrance (Parfum)",
          "Palmitic Acid",
          "Sodium Hyaluronate",
          "Sodium Hydroxide",
          "Stearic Acid",
        ],
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
