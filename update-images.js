const fs = require('fs');
const path = require('path');

const productsFile = 'src/data/products.ts';
let content = fs.readFileSync(productsFile, 'utf8');

const mappings = {
  'retinol-collagen-double-serum': '/images/products/retinol-collagen-serum.jpg',
  'rice-niacinamide-serum': '/images/products/rice-niacinamide-serum.jpg',
  'rice-cleansing-oil': '/images/products/rice-niacinamide-cleansing-oil-brightening-and-hydrating.jpg',
  'rice-toner': '/images/products/rice-niacinamide-toner.jpg',
  'ginseng-collagen-mask': '/images/products/ginseng-collagen-wrap-mask.jpg',
  'ginseng-peptide-cream': '/images/products/ginseng-peptide-face-cream.jpg',
  'retinol-facial-cream': '/images/products/facial-cream-with-retinol-and-collagen.jpg',
  'ginseng-black-rice-cleanser': '/images/products/ginseng-black-rice-low-ph-cleanser.jpg',
  'rice-toner-pad': '/images/products/rice-niacinamide-skin-pad.jpg',
  'rice-foam-cleanser': '/images/products/rice-niacinamide-foaming-cleanser.jpg',
  'retinol-double-glow-cream': '/images/products/retinol-collagen-double-glow-cream.jpg',
  'retinol-hyaluronic-serum': '/images/products/retinol-collagen-double-effect.jpg',
  'red-bean-eye-cream': '/images/products/red-bean-collagen-eye-cream.jpg',
  'ginseng-pdrn-serum': '/images/products/ginseng-revive-pdrn-vegan-topical-serum.jpg',
  'prettyskin-cleansing-oil': '/images/products/ginseng-multi-peptide-eye-cream.jpg',
  'heritage-set': '/images/products/heritage-set-niacinamide-peptide.jpg',
  'matcha-retinol-serum': '/images/products/matcha-retinol-ceramide-face-serum.jpg',
  'matcha-retinol-cream': '/images/products/matcha-retinol-ceramide-renewal-cream.jpg',
  'rice-clay-stick': '/images/products/rice-niacinamide-clay-stick-mask.jpg',
  'ginseng-pdrn-cream': '/images/products/ginseng-revive-vegan-topical-pdrn-face-cream.jpg'
};

for (const [id, imagePath] of Object.entries(mappings)) {
  const regex = new RegExp('(id:\\s*"' + id + '"[\\s\\S]*?imageCategory:\\s*"[^"]+")');
  content = content.replace(regex, `$1,\n    image: "${imagePath}"`);
}

fs.writeFileSync(productsFile, content);
console.log('Updated products.ts');
