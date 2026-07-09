export type ImageCategory =
  | "hero"
  | "skincare"
  | "bodycare"
  | "eye_care"
  | "serum"
  | "cleanser"
  | "toner"
  | "mask"
  | "cream"
  | "set";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  price: string;
  vendor?: string;
  amazonLink: string;
  imageCategory: ImageCategory;
  tags?: string[];
  image?: string;
  rating?: number;
  reviewCount?: number;
}

export const products: Product[] = [
  {
    id: "retinol-collagen-double-serum",
    name: "Retinol + Collagen Double Effect Serum",
    shortDescription: "Firming, hydrating, and revitalizing facial serum with visible results.",
    price: "$24.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/GlamFox-Retinol-suero-col%C3%A1geno-efecto/dp/B08QS7JQ52/ref=sr_1_2?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-2",
    imageCategory: "serum",
    image: "/images/products/retinol-collagen-double-effect.jpg"
  },
  {
    id: "rice-niacinamide-serum",
    name: "Rice Niacinamide Serum",
    shortDescription: "Hydrating and revitalizing facial serum designed to promote glowing skin.",
    price: "$24.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-niacinamida-facial-hidratante-revitalizante/dp/B0FX1DTSZT/ref=sr_1_5?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-5",
    imageCategory: "serum",
    image: "/images/products/rice-niacinamide-serum.jpg"
  },
  {
    id: "rice-cleansing-oil",
    name: "Rice Niacinamide Cleansing Oil",
    shortDescription: "Illuminating and hydrating cleansing oil for gentle makeup removal.",
    price: "$22.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Aceite-limpiador-niacinamida-arroz/dp/B0G9Z2Z55X/ref=sr_1_8?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-8",
    imageCategory: "cleanser",
    image: "/images/products/rice-niacinamide-cleansing-oil-brightening-and-hydrating.jpg"
  },
  {
    id: "rice-toner",
    name: "Rice Niacinamide Toner",
    shortDescription: "Illuminating and hydrating facial toner formulated with Korean rice extract.",
    price: "$20.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-niacinamida-extracto-iluminador-hidratante/dp/B0FRPYCTQF/ref=sr_1_11?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-11",
    imageCategory: "toner",
    image: "/images/products/rice-niacinamide-toner.jpg"
  },
  {
    id: "ginseng-collagen-mask",
    name: "Ginseng Collagen Wrapping Mask",
    shortDescription: "Revitalizing facial mask that locks in moisture. Includes silicone application brush.",
    price: "$20.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-M%C3%A1scara-envoltura-col%C3%A1geno-ginseng/dp/B0GBKKSF5W/ref=sr_1_13?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-13",
    imageCategory: "mask",
    image: "/images/products/ginseng-collagen-wrap-mask.jpg"
  },
  {
    id: "ginseng-peptide-cream",
    name: "Ginseng Peptide Face Cream",
    shortDescription: "Anti-aging cream with 86% ginseng extract, 9 peptides, and 5 ceramides.",
    price: "$22.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Ginseng-P%C3%A9ptido-Rodillo-Masaje/dp/B0FPF91KQC/ref=sr_1_14?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-14",
    imageCategory: "cream",
    image: "/images/products/ginseng-peptide-face-cream.jpg"
  },
  {
    id: "retinol-facial-cream",
    name: "Retinol & Collagen Facial Cream",
    shortDescription: "Anti-aging facial cream designed to help unbalanced skin recover its natural texture.",
    price: "$25.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Crema-Facial-equilibrio-encontrar/dp/B0D852YVBC/ref=sr_1_15?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-15",
    imageCategory: "cream",
    image: "/images/products/facial-cream-with-retinol-and-collagen.jpg"
  },
  {
    id: "ginseng-black-rice-cleanser",
    name: "Ginseng Black Rice Low pH Cleanser",
    shortDescription: "Gentle facial wash with fermented ginseng and black rice to maintain skin balance.",
    price: "$22.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Limpiador-fermentado-extracto-sensibles/dp/B0FQ51KL8L/ref=sr_1_16?dib=eyJ2IjoiMSJ9.fTJHshtVxkeGQ4i2ZWjbgoJkTMOEMcTJuv1--0qznNqUXbDJO6hbgEK9ZE8-6-9qEzMdUrjDLoETQEO9W_Oc-L0hsucbdApkUVzGkVDfAIvFdc74Q9FCsVoG5BEZZ3lQ21_s1OX6D-L7C_X7xL82zpiVQtrClT2nv8aW2tYjDf-Ie3mHN5oEFZ_bKWHQqQVKxMfhqjXpeiPqqS6ejze5OA9n6IN1JRX-llvqkMj7_kQ._E9lnEyEydKEHcSi2Xuermhy7-Z1XDgqDCO8MlDdD5U&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577015&s=merchant-items&sr=1-16",
    imageCategory: "cleanser",
    image: "/images/products/ginseng-black-rice-low-ph-cleanser.jpg"
  },
  {
    id: "rice-toner-pad",
    name: "Rice Niacinamide Toner Pad",
    shortDescription: "90 illuminating and hydrating pads, ideal for normal, dry, or dull skin types.",
    price: "$20.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Almohadilla-niacinamida-iluminadora-almohadillas/dp/B0GBW53B3H/ref=sr_1_18?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "toner",
    image: "/images/products/rice-niacinamide-skin-pad.jpg"
  },
  {
    id: "rice-foam-cleanser",
    name: "Rice Niacinamide Foam Cleanser",
    shortDescription: "Foam cleanser infused with rice powder for gentle exfoliation and brightening.",
    price: "$24.95",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-niacinamida-hidratante-exfoliante-iluminador/dp/B0GMW3372K/ref=sr_1_19?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "cleanser",
    image: "/images/products/rice-niacinamide-foaming-cleanser.jpg"
  },
  {
    id: "retinol-double-glow-cream",
    name: "Retinol + Collagen Double Glow Cream",
    shortDescription: "Korean moisturizing cream focused on diminishing fine lines and achieving glass skin.",
    price: "$27.95",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Retinol-Collagen-Double-Cream/dp/B0H2H7G218/ref=sr_1_20?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "cream",
    image: "/images/products/retinol-collagen-double-glow-cream.jpg"
  },
  {
    id: "retinol-hyaluronic-serum",
    name: "Retinol + Collagen Double Effect (Hyaluronic Acid)",
    shortDescription: "Revitalizing and firming serum with deep hydration, enriched with natural oils.",
    price: "$23.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-revitalizante-reafirmante-hidrataci%C3%B3n-hialur%C3%B3nico/dp/B0FRB4Z11C/ref=sr_1_21?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "serum",
    image: "/images/products/retinol-collagen-double-effect.jpg"
  },
  {
    id: "red-bean-eye-cream",
    name: "Red Bean Collagen Eye Cream",
    shortDescription: "Eye contour cream focused on depuffing and revitalizing tired eyes.",
    price: "$23.95",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Bean-Col%C3%A1geno-Crema-para/dp/B0GH8K3T32/ref=sr_1_22?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "eye_care",
    image: "/images/products/red-bean-collagen-eye-cream.jpg"
  },
  {
    id: "ginseng-pdrn-serum",
    name: "Ginseng Revive Vegan Topical PDRN Serum",
    shortDescription: "Advanced complex of 7 peptides and Korean ginseng root for intense elasticity.",
    price: "$29.98",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Ginseng-Revive-Hidrataci%C3%B3n-elasticidad/dp/B0GRWZBPHF/ref=sr_1_23?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "serum",
    image: "/images/products/ginseng-revive-pdrn-vegan-topical-serum.jpg"
  },
  {
    id: "prettyskin-cleansing-oil",
    name: "PRETTYSKIN Rice Cleansing Oil",
    shortDescription: "Deep hydration and smooth makeup removal oil for daily use.",
    price: "$22.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox/dp/B0H2GYG9NS/ref=sr_1_25?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "cleanser",
    image: "/images/products/ginseng-multi-peptide-eye-cream.jpg"
  },
  {
    id: "heritage-set",
    name: "Glamfox Heritage Set",
    shortDescription: "Premium 'Glass Skin' set featuring Ginseng Peptide Cream and Rice Niacinamide Cream.",
    price: "$35.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox-Heritage-P%C3%A9ptido-Niacinamida-Ginseng/dp/B0GJK5FBX4/ref=sr_1_32?dib=eyJ2IjoiMSJ9.Kjadz_FFd35uUkYlKC5FtOGqxw0IMCXuxrbPnIIxOOtMZCup68h7Po7ndvCSBEEJQz7amE1fAJPeyyHhu0c5dMSb0CzzG39KwjvhoRoZwJas23nIa_5ECvpchv_QU4cL6D9E00LYe3XPYnMyRKQbRMjtdjVk_OrEam8piWPEZwxyyTyB7EAgeSIJ3-96d57831xhOtxLst0RImxlwzl4pTzQspUmnVCU4YvjNL9qlK4.KPN14izhVKQFYwvTdjVrmO4avAjaZ68gbcTRA0EuFZI&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577119&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "set",
    image: "/images/products/heritage-set-niacinamide-peptide.jpg"
  },
  {
    id: "matcha-retinol-serum",
    name: "Matcha Retinol Ceramide Face Serum",
    shortDescription: "Daily renewal with Hyaluronic Acid & Panthenol for barrier repair and smooth texture.",
    price: "$29.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox/dp/B0H7FK4PVQ/ref=sr_1_33?dib=eyJ2IjoiMSJ9.ch7l9Mr3hwLCsvJ16o9DMD9qIHAyFmXXkjtSEIghoJObJqbwPDFdrRs0Iq2SaIZ4bZOQWrCJU9rRtCYRVynuSg.PSyQxvcg9d1pWYUYDP0FMHe6gAu56Clvd15pZBbiBcg&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577188&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "serum",
    image: "/images/products/matcha-retinol-ceramide-face-serum.jpg"
  },
  {
    id: "matcha-retinol-cream",
    name: "Matcha Retinol Ceramide Renewal Cream",
    shortDescription: "Deeply moisturizing renewal cream infused with Matcha and Ceramides.",
    price: "$26.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox/dp/B0H6CM9H55/ref=sr_1_34?dib=eyJ2IjoiMSJ9.ch7l9Mr3hwLCsvJ16o9DMD9qIHAyFmXXkjtSEIghoJObJqbwPDFdrRs0Iq2SaIZ4bZOQWrCJU9rRtCYRVynuSg.PSyQxvcg9d1pWYUYDP0FMHe6gAu56Clvd15pZBbiBcg&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577188&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "cream",
    image: "/images/products/matcha-retinol-ceramide-renewal-cream.jpg"
  },
  {
    id: "rice-clay-stick",
    name: "Rice Niacinamide Clay Stick Mask",
    shortDescription: "Convenient clay stick mask to brighten and hydrate all skin types.",
    price: "$20.00",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox/dp/B0H4J176BP/ref=sr_1_35?dib=eyJ2IjoiMSJ9.ch7l9Mr3hwLCsvJ16o9DMD9qIHAyFmXXkjtSEIghoJObJqbwPDFdrRs0Iq2SaIZ4bpI_dmOIef4p84oEonqJBkge0ltTw8Y7wvT74y3HsJihqSlXT9YHr16Yhw39NxXp.KuV-Ya-TMVyY2SJkksqRQJFuo0GZiTb7LW-ZM1KgtWk&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577214&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "mask",
    image: "/images/products/rice-niacinamide-clay-stick-mask.jpg"
  },
  {
    id: "ginseng-pdrn-cream",
    name: "Ginseng Revive Vegan Topical PDRN Face Cream",
    shortDescription: "Regenerating and nourishing vegan moisturizer infused with topical PDRN.",
    price: "$29.99",
    vendor: "ARCA Group USA LLC",
    amazonLink: "https://www.amazon.com/-/es/Glamfox/dp/B0GXYC8N19/ref=sr_1_36?dib=eyJ2IjoiMSJ9.ch7l9Mr3hwLCsvJ16o9DMD9qIHAyFmXXkjtSEIghoJObJqbwPDFdrRs0Iq2SaIZ4bpI_dmOIef4p84oEonqJBkge0ltTw8Y7wvT74y3HsJihqSlXT9YHr16Yhw39NxXp.KuV-Ya-TMVyY2SJkksqRQJFuo0GZiTb7LW-ZM1KgtWk&dib_tag=se&m=A10U9JZBG90RWV&marketplaceID=ATVPDKIKX0DER&nsdOptOutParam=true&qid=1783577214&s=merchant-items&xpid=IsdS2Jorw4w8e",
    imageCategory: "cream",
    image: "/images/products/ginseng-revive-vegan-topical-pdrn-face-cream.jpg"
  }
];

export const featuredProduct = products[0];
