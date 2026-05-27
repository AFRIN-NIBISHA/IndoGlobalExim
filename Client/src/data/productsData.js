export const categories = [
  { id: "all", labelKey: "filterAll" },
  { id: "spices", labelKey: "catSpices", labelEn: "Spices", labelTa: "மசாலா பொருட்கள்" },
  { id: "rice", labelKey: "catRice", labelEn: "Rice", labelTa: "அரிசி வகைகள்" },
  { id: "garments", labelKey: "catGarments", labelEn: "Garments", labelTa: "ஆடை வகைகள்" },
  { id: "coir", labelKey: "catCoir", labelEn: "Coir Products", labelTa: "தேங்காய் நார் பொருட்கள்" },
  { id: "handicrafts", labelKey: "catHandicrafts", labelEn: "Handicrafts", labelTa: "கைவினைப்பொருட்கள்" },
  { id: "agriculture", labelKey: "catAgri", labelEn: "Vegetables & Fruits", labelTa: "காய்கறிகள் & பழங்கள்" },
  { id: "machinery", labelKey: "catMachinery", labelEn: "Machinery", labelTa: "இயந்திரங்கள்" }
];

export const products = [
  // SPICES
  {
    id: "spices-cardamom",
    category: "spices",
    nameEn: "Premium Green Cardamom",
    nameTa: "ஏலக்காய் (Green Cardamom)",
    descriptionEn: "Highly aromatic premium green cardamom handpicked from the Western Ghats of India. Intense flavor and rich green color.",
    descriptionTa: "இந்தியாவின் மேற்கு தொடர்ச்சி மலையிலிருந்து கைமுறையாக தேர்ந்தெடுக்கப்பட்ட வாசனை மிகுந்த உயர்தர ஏலக்காய்.",
    originEn: "Kerala, India",
    originTa: "கேரளா, இந்தியா",
    sizeEn: "7mm - 8mm (Bold)",
    sizeTa: "7மிமீ - 8மிமீ (போல்டு)",
    shelfLifeEn: "12 Months (Store in cool, dry place)",
    shelfLifeTa: "12 மாதங்கள் (குளிர்ந்த, உலர்ந்த இடத்தில் வைக்கவும்)",
    specificationsEn: {
      "Grade": "AGEB (Alleppey Green Extra Bold)",
      "Moisture": "Max 11.5%",
      "Color": "Deep Greenish",
      "Foreign Matter": "Max 0.5%"
    },
    specificationsTa: {
      "தரம்": "AGEB (Extra Bold)",
      "ஈரப்பதம்": "அதிகபட்சம் 11.5%",
      "நிறம்": "அடர்ந்த பச்சை",
      "அந்நியப் பொருட்கள்": "அதிகபட்சம் 0.5%"
    },
    moqEn: "500 Kg",
    moqTa: "500 கிலோ",
    packagingEn: "10kg Jute bags with inner poly-lining / Custom cartons",
    packagingTa: "உள் பாலி-லைனிங் கொண்ட 10 கிலோ சணல் பைகள் / தனிப்பயனாக்கப்பட்ட அட்டைப்பெட்டிகள்",
    exportQualityEn: "100% natural, sorted, pesticide-free, graded.",
    exportQualityTa: "100% இயற்கையானது, தரம் பிரிக்கப்பட்டது, பூச்சிக்கொல்லி இல்லாதது.",
    shippingEn: "Air & Sea Freight (FCL/LCL)",
    shippingTa: "விமானம் & கடல்வழி சரக்கு போக்குவரத்து"
  },
  {
    id: "spices-turmeric",
    category: "spices",
    nameEn: "Organic Turmeric Finger & Powder",
    nameTa: "மஞ்சள் விரல் & தூள் (Turmeric)",
    descriptionEn: "High curcumin content turmeric finger and fine powder sourced from Erode, Tamil Nadu. Renowned for medicinal and culinary value.",
    descriptionTa: "ஈரோடு பகுதியில் இருந்து பெறப்பட்ட அதிக குர்குமின் சத்து கொண்ட மஞ்சள் மற்றும் மஞ்சள் தூள்.",
    originEn: "Erode, Tamil Nadu, India",
    originTa: "ஈரோடு, தமிழ்நாடு, இந்தியா",
    sizeEn: "Varies (Fingers: 5-8cm)",
    sizeTa: "மாறுபடும் (விரல் மஞ்சள்: 5-8செமீ)",
    shelfLifeEn: "24 Months",
    shelfLifeTa: "24 மாதங்கள்",
    specificationsEn: {
      "Curcumin Content": "Min 3.5% - 5%",
      "Type": "Erode Double Polished",
      "Moisture": "Max 9%",
      "Lead/Heavy Metals": "Nil (SGS Certified)"
    },
    specificationsTa: {
      "குர்குமின் அளவு": "குறைந்தபட்சம் 3.5% - 5%",
      "வகை": "ஈரோடு டபுள் பாலிஷ்டு",
      "ஈரப்பதம்": "அதிகபட்சம் 9%",
      "கன உலோகங்கள்": "இல்லை (SGS சான்றளிக்கப்பட்டது)"
    },
    moqEn: "1 Metric Ton",
    moqTa: "1 மெட்ரிக் டன்",
    packagingEn: "25kg / 50kg Double Layer PP Bags",
    packagingTa: "25 கிலோ / 50 கிலோ இரட்டை அடுக்கு பிபி பைகள்",
    exportQualityEn: "SGS certified curcumin level, machine polished, dust-free.",
    exportQualityTa: "SGS சான்றளிக்கப்பட்ட குர்குமின் அளவு, இயந்திரம் மூலம் மெருகூட்டப்பட்டது.",
    shippingEn: "Sea Freight (FCL/LCL)",
    shippingTa: "கடல்வழி போக்குவரத்து"
  },

  // RICE
  {
    id: "rice-basmati",
    category: "rice",
    nameEn: "Premium 1121 Sella Basmati Rice",
    nameTa: "1121 செம்பா பாசுமதி அரிசி",
    descriptionEn: "Extra-long grain Basmati Rice with exquisite aroma and fluffy texture post-cooking. Aged carefully for enhanced culinary quality.",
    descriptionTa: "அதிநவீன நறுமணமும், சமைத்த பிறகு உதிரியான நீளமான பருக்களும் கொண்ட பிரீமியம் பாசுமதி அரிசி.",
    originEn: "Haryana / Punjab, India",
    originTa: "ஹரியானா / பஞ்சாப், இந்தியா",
    sizeEn: "8.35 mm+ Average Grain Length",
    sizeTa: "8.35 மிமீ+ சராசரி நீளம்",
    shelfLifeEn: "24 Months",
    shelfLifeTa: "24 மாதங்கள்",
    specificationsEn: {
      "Purity": "95%",
      "Moisture": "Max 12.5%",
      "Broken Grain": "Max 1%",
      "Admixture": "Max 5%"
    },
    specificationsTa: {
      "தூய்மை": "95%",
      "ஈரப்பதம்": "அதிகபட்சம் 12.5%",
      "உடைந்த அரிசி": "அதிகபட்சம் 1%",
      "கலவை": "அதிகபட்சம் 5%"
    },
    moqEn: "20 Metric Tons (1 Container)",
    moqTa: "20 மெட்ரிக் டன் (1 கன்டெய்னர்)",
    packagingEn: "10kg, 20kg, 25kg Non-Woven BOPP bags / Jute bags",
    packagingTa: "10கிலோ, 20கிலோ, 25கிலோ BOPP பைகள் / சணல் பைகள்",
    exportQualityEn: "Aged for 1-2 years, sortex cleaned, double-polished.",
    exportQualityTa: "1-2 ஆண்டுகள் பழமையானது, சார்டெக்ஸ் சுத்தம் செய்யப்பட்டது.",
    shippingEn: "Sea Freight (FCL)",
    shippingTa: "கடல்வழி போக்குவரத்து (FCL)"
  },
  {
    id: "rice-ponni",
    category: "rice",
    nameEn: "Non-Basmati Ponni Rice (Boiled/Raw)",
    nameTa: "பொன்னி அரிசி (புழுங்கல் / பச்சரிசி)",
    descriptionEn: "Highly digestible, short-grain traditional Ponni rice from the fertile Cauvery delta. Starch-balanced and perfect for daily consumption.",
    descriptionTa: "காவிரி டெல்டா பகுதியில் இருந்து விளையும் பாரம்பரிய பொன்னி அரிசி. எளிதில் செரிக்கக்கூடியது மற்றும் சத்துக்கள் நிறைந்தது.",
    originEn: "Tamil Nadu, India",
    originTa: "தமிழ்நாடு, இந்தியா",
    sizeEn: "5.2 mm - 6.0 mm",
    sizeTa: "5.2 மிமீ - 6.0 மிமீ",
    shelfLifeEn: "18 Months",
    shelfLifeTa: "18 மாதங்கள்",
    specificationsEn: {
      "Type": "Steam / Parboiled / Raw",
      "Moisture": "Max 13%",
      "Broken Grain": "Max 2%",
      "Color": "Natural White"
    },
    specificationsTa: {
      "வகை": "ஸ்டீம் / புழுங்கல் / பச்சரிசி",
      "ஈரப்பதம்": "அதிகபட்சம் 13%",
      "உடைந்த அரிசி": "அதிகபட்சம் 2%",
      "நிறம்": "இயற்கை வெள்ளை"
    },
    moqEn: "20 Metric Tons",
    moqTa: "20 மெட்ரிக் டன்",
    packagingEn: "25kg / 50kg PP Bags",
    packagingTa: "25கிலோ / 50கிலோ பிபி பைகள்",
    exportQualityEn: "Double polished, silky sortex cleaned, dust-free.",
    exportQualityTa: "இரட்டை பாலிஷ், சில்கி சார்டெக்ஸ் சுத்தம் செய்யப்பட்டது.",
    shippingEn: "Sea Freight (FCL)",
    shippingTa: "கடல்வழி போக்குவரத்து"
  },

  // GARMENTS
  {
    id: "garments-tshirts",
    category: "garments",
    nameEn: "100% Organic Cotton T-Shirts",
    nameTa: "ஆர்கானிக் பருத்தி டி-சர்ட்டுகள் (Cotton T-Shirts)",
    descriptionEn: "Eco-friendly, combed ring-spun organic cotton clothing manufactured in Tirupur, India. Super soft, breathable, and colorfast.",
    descriptionTa: "திருப்பூரில் தயாரிக்கப்பட்ட சூழல் நட்பு, 100% தூய பருத்தி டி-சர்ட்டுகள். மென்மையானது மற்றும் நீடித்த நிறம் கொண்டது.",
    originEn: "Tirupur, Tamil Nadu, India",
    originTa: "திருப்பூர், தமிழ்நாடு, இந்தியா",
    sizeEn: "S, M, L, XL, XXL (Custom US/EU charts)",
    sizeTa: "S, M, L, XL, XXL (தனிப்பயனாக்கக்கூடிய அளவுகள்)",
    shelfLifeEn: "N/A",
    shelfLifeTa: "பொருந்தாது",
    specificationsEn: {
      "Fabric Weight": "160 GSM - 200 GSM",
      "Material": "100% Organic Cotton (GOTS Certified)",
      "Dyeing": "Eco-friendly Oeko-Tex Standard dyes",
      "Shrinkage": "Less than 3%"
    },
    specificationsTa: {
      "துணி எடை": "160 GSM - 200 GSM",
      "பொருள்": "100% ஆர்கானிக் காட்டன்",
      "சாயம்": "சூழல் நட்பு சாயம் (Oeko-Tex Standard)",
      "சுருக்கம்": "3% க்கும் குறைவு"
    },
    moqEn: "1000 Pcs per color/design",
    moqTa: "ஒரு நிறத்திற்கு/வடிவமைப்பிற்கு 1000 துண்டுகள்",
    packagingEn: "Individually polybagged, 100 pcs per master carton box",
    packagingTa: "தனித்தனியாக பாலிபேக் செய்யப்பட்டது, அட்டைப்பெட்டிக்கு 100 துண்டுகள்",
    exportQualityEn: "High stitch density, bio-washed, customized branding labels.",
    exportQualityTa: "உயர்தர தையல் அடர்த்தி, பயோ-வாஷ் செய்யப்பட்டது.",
    shippingEn: "Sea & Air Freight",
    shippingTa: "விமானம் & கடல்வழி போக்குவரத்து"
  },

  // COIR
  {
    id: "coir-pith",
    category: "coir",
    nameEn: "Coco Peat 5Kg Blocks (Coir Pith)",
    nameTa: "தேங்காய் நார் கழிவு கட்டிகள் (Coco Peat Blocks)",
    descriptionEn: "Organic soil conditioner and growing medium compressed into 5kg blocks. Excellent water retention capability for nurseries and hydroponics.",
    descriptionTa: "இயற்கை மண் மேம்படுத்தி மற்றும் செடி வளர்ப்பு ஊடகம். நர்சரிகள் மற்றும் ஹைட்ரோபோனிக்ஸ் பயன்பாட்டிற்கு சிறந்தது.",
    originEn: "Pollachi, Tamil Nadu, India",
    originTa: "பொள்ளாச்சி, தமிழ்நாடு, இந்தியா",
    sizeEn: "30 x 30 x 12 cm (+/- 2cm)",
    sizeTa: "30 x 30 x 12 செமீ",
    shelfLifeEn: "Indefinite if kept dry",
    shelfLifeTa: "உலர்ந்த இடத்தில் வைத்தால் பல ஆண்டுகள் நீடிக்கும்",
    specificationsEn: {
      "EC (Electrical Conductivity)": "Low EC (< 0.5 mS/cm) for agriculture / High EC",
      "pH": "5.5 - 6.5",
      "Compression Ratio": "5:1",
      "Expansion Volume": "75 - 80 Liters per block"
    },
    specificationsTa: {
      "மின் கடத்துத்திறன் (EC)": "குறைந்த EC (< 0.5 mS/cm)",
      "pH காரத்தன்மை": "5.5 - 6.5",
      "அழுத்த விகிதம்": "5:1",
      "விரிவாக்க கொள்ளளவு": "பிளாக்கிற்கு 75 - 80 லிட்டர்கள்"
    },
    moqEn: "20 Metric Tons (1 x 40ft HC Container)",
    moqTa: "20 மெட்ரிக் டன் (1 x 40ft HC கன்டெய்னர்)",
    packagingEn: "Palletized and stretch wrapped / Loose loading in container",
    packagingTa: "பேலட்டுகள் அமைத்து ஸ்ட்ரெட்ச் ரேப் செய்யப்பட்டது / கன்டெய்னரில் லூஸ் லோடிங்",
    exportQualityEn: "Weed-free, low sand content (< 2%), washed in fresh water.",
    exportQualityTa: "களை இல்லாதது, குறைந்த மணல் அளவு, நன்னீரில் கழுவப்பட்டது.",
    shippingEn: "Sea Freight (FCL)",
    shippingTa: "கடல்வழி போக்குவரத்து (FCL)"
  },

  // HANDICRAFTS
  {
    id: "handicrafts-wooden",
    category: "handicrafts",
    nameEn: "Handcrafted Rosewood & Brass Decor",
    nameTa: "கைவினை மர மற்றும் பித்தளை அலங்கார பொருட்கள்",
    descriptionEn: "Intricately carved Indian rosewood artifacts and decorative brass figurines created by traditional heritage artisans.",
    descriptionTa: "பாரம்பரிய கைவினைஞர்களால் செதுக்கப்பட்ட இந்திய ரோஸ்வுட் கலைப்பொருட்கள் மற்றும் அலங்கார பித்தளை சிலைகள்.",
    originEn: "Saharanpur / Rajasthan, India",
    originTa: "சஹாரன்பூர் / ராஜஸ்தான், இந்தியா",
    sizeEn: "Various Sizes (Customizable designs)",
    sizeTa: "பல்வேறு அளவுகள் (தேவைக்கேற்ப தனிப்பயனாக்கலாம்)",
    shelfLifeEn: "N/A",
    shelfLifeTa: "பொருந்தாது",
    specificationsEn: {
      "Material": "Sheesham Wood (Rosewood) / High-Grade Brass",
      "Finish": "Natural Wood Polish / Lacquered Brass",
      "Workmanship": "100% Handcrafted",
      "Eco-Friendly": "Yes (Sustainable Sourced Wood)"
    },
    specificationsTa: {
      "பொருள்": "சீஷாம் மரம் (ரோஸ்வுட்) / உயர்தர பித்தளை",
      "பினிஷிங்": "இயற்கை மர மெருகு / லேக்கர்டு பித்தளை",
      "வேலைப்பாடு": "100% கைவினை வேலை",
      "சூழல் பாதுகாப்பு": "ஆம் (முறையாக உரிமம் பெற்ற மரம்)"
    },
    moqEn: "100 Pcs / Minimum order value $2000 USD",
    moqTa: "100 துண்டுகள் / குறைந்தபட்ச ஆர்டர் $2000 USD",
    packagingEn: "Bubble wrap, individual cardboard inner, packed in heavy-duty shipping cartons",
    packagingTa: "பப்பில் ரேப், தனித்தனி கார்ட்போர்டு பெட்டி, பின்னர் கனரக ஷிப்பிங் அட்டைப்பெட்டிகள்",
    exportQualityEn: "Fumigated wood certification, rust-proof brass treatment.",
    exportQualityTa: "புகையூட்டப்பட்ட (Fumigated) மரச் சான்றிதழ், துருப்பிடிக்காத சிகிச்சை.",
    shippingEn: "Sea & Air Freight",
    shippingTa: "விமானம் & கடல்வழி போக்குவரத்து"
  },

  // VEGETABLES & FRUITS
  {
    id: "agri-onion",
    category: "agriculture",
    nameEn: "Fresh Red Onions",
    nameTa: "புதிய சிவப்பு வெங்காயம் (Red Onions)",
    descriptionEn: "Highly pungent, crisp, and fresh red onions sourced directly from farms in Nashik. Excellent shelf life and high quality.",
    descriptionTa: "நாசிக் பண்ணைகளில் இருந்து நேரடியாக கொள்முதல் செய்யப்படும் காரமும், புத்துணர்ச்சியும் கொண்ட சிவப்பு வெங்காயம்.",
    originEn: "Nashik, Maharashtra, India",
    originTa: "நாசிக், மகாராஷ்டிரா, இந்தியா",
    sizeEn: "45mm - 55mm / 55mm+ (Bold)",
    sizeTa: "45மிமீ - 55மிமீ / 55மிமீ+ (போல்டு)",
    shelfLifeEn: "30-45 Days (Ventilated storage)",
    shelfLifeTa: "30-45 நாட்கள் (காற்றோட்டமான சேமிப்பு)",
    specificationsEn: {
      "Variety": "Nashik Red Onion",
      "Color": "Dark Red / Crimson",
      "Skin": "Double skin intact",
      "Defects": "Less than 1% damage/sprouts"
    },
    specificationsTa: {
      "வகை": "நாசிக் சிவப்பு வெங்காயம்",
      "நிறம்": "அடர்ந்த சிவப்பு / கிரிம்சன்",
      "தோல்": "இரட்டை அடுக்கு தோல் சிதையாமல் உள்ளது",
      "குறைபாடுகள்": "1% க்கும் குறைவான சேதம்"
    },
    moqEn: "12 Metric Tons (1 x 20ft Reefer/Dry Container)",
    moqTa: "12 மெட்ரிக் டன் (1 x 20ft Reefer/Dry கன்டெய்னர்)",
    packagingEn: "5kg, 10kg, 20kg Red Mesh Bags",
    packagingTa: "5கிலோ, 10கிலோ, 20கிலோ சிவப்பு வலைப் பைகள் (Mesh Bags)",
    exportQualityEn: "Sorted, cleaned, sun-cured, and phytosanitary certified.",
    exportQualityTa: "தரம் பிரிக்கப்பட்டு, உலர்த்தப்பட்டு, தாவர சுகாதார சான்றளிக்கப்பட்டது.",
    shippingEn: "Sea Freight (Reefer Container / Dry Container)",
    shippingTa: "கடல்வழி போக்குவரத்து (Reefer / Dry)"
  },
  {
    id: "agri-coconut",
    category: "agriculture",
    nameEn: "Fully Husked & Semi-Husked Coconuts",
    nameTa: "தேங்காய் (Semi-Husked / Husked)",
    descriptionEn: "Premium semi-husked fresh coconuts with rich oil and water content, sourced from Pollachi. Highly nutritional and clean.",
    descriptionTa: "பொள்ளாச்சி பகுதியில் இருந்து பெறப்பட்ட நாரோடி உரித்த உயர்தர புதிய தேங்காய்கள். தேங்காய் எண்ணெய் மற்றும் இளநீர் சத்துக்கள் நிறைந்தது.",
    originEn: "Pollachi, Tamil Nadu, India",
    originTa: "பொள்ளாச்சி, தமிழ்நாடு, இந்தியா",
    sizeEn: "12 inches circumference, Weight: 550g - 650g+",
    sizeTa: "12 இன்ச் சுற்றளவு, எடை: 550கி - 650கி+",
    shelfLifeEn: "60 Days from harvest",
    shelfLifeTa: "அறுவடை செய்யப்பட்டதில் இருந்து 60 நாட்கள்",
    specificationsEn: {
      "Maturity": "Fully matured (10-12 months)",
      "Spoil rate": "Less than 2%",
      "Water content": "High",
      "Certification": "Phytosanitary Certificate"
    },
    specificationsTa: {
      "முதிர்ச்சி": "நன்றாக முதிர்ந்த தேங்காய் (10-12 மாதங்கள்)",
      "பழுதாகும் விகிதம்": "2% க்கும் குறைவு",
      "நீர் அளவு": "அதிகம்",
      "சான்றிதழ்": "தாவர சுகாதார சான்றிதழ்"
    },
    moqEn: "13 Metric Tons (1 x 20ft Dry Container - ~27,000 nuts)",
    moqTa: "13 மெட்ரிக் டன் (1 x 20ft கன்டெய்னர் - சுமார் 27,000 காய்கள்)",
    packagingEn: "25 Pcs packed in PP mesh bags (~15kg weight)",
    packagingTa: "பிபி வலைப் பைகளில் பேக் செய்யப்பட்ட 25 காய்கள் (~15கிலோ எடை)",
    exportQualityEn: "Fungal treatment done, properly sorted, no cracks.",
    exportQualityTa: "பூஞ்சை எதிர்ப்பு சிகிச்சை செய்யப்பட்டது, விரிசல்கள் இல்லாதது.",
    shippingEn: "Sea Freight (Dry Container)",
    shippingTa: "கடல்வழி போக்குவரத்து (உலர் கொள்கலன்)"
  },

  // MACHINERY
  {
    id: "machinery-agro",
    category: "machinery",
    nameEn: "Commercial Oil Press Machine",
    nameTa: "வணிக எண்ணெய் பிழிதல் இயந்திரம் (Oil Press Machine)",
    descriptionEn: "Industrial cold-press oil extraction machine designed for oilseeds like peanut, sesame, sunflower, and coconut. Highly efficient and power saving.",
    descriptionTa: "நிலக்கடலை, எள், சூரியகாந்தி, தேங்காய் போன்ற எண்ணெய் வித்துக்களிலிருந்து எண்ணெய் எடுக்க வடிவமைக்கப்பட்ட வணிக இயந்திரம்.",
    originEn: "Coimbatore, Tamil Nadu, India",
    originTa: "கோயம்புத்தூர், தமிழ்நாடு, இந்தியா",
    sizeEn: "1200 x 600 x 1500 mm, Weight: 450 Kg",
    sizeTa: "1200 x 600 x 1500 மிமீ, எடை: 450 கிலோ",
    shelfLifeEn: "N/A (1 Year Warranty, 10+ Years Lifetime)",
    shelfLifeTa: "பொருந்தாது (1 வருட உத்தரவாதம், 10+ வருட ஆயுள்)",
    specificationsEn: {
      "Capacity": "80 - 100 Kg/Hour input seed",
      "Power Required": "5.5 kW / 3 Phase AC",
      "Material": "Food Grade SUS304 Stainless Steel parts",
      "Oil Recovery rate": "Up to 95% of seed oil content"
    },
    specificationsTa: {
      "கொள்ளளவு": "மணிக்கு 80 - 100 கிலோ விதை உட்செலுத்துதல்",
      "மின் தேவை": "5.5 கிலோவாட் / 3 பேஸ் AC",
      "பொருள்": "உணவு தர SUS304 துருப்பிடிக்காத எஃகு பாகங்கள்",
      "எண்ணெய் எடுக்கும் வீதம்": "விதை எண்ணெய் உள்ளடக்கத்தில் 95% வரை"
    },
    moqEn: "1 Unit",
    moqTa: "1 அலகு (Unit)",
    packagingEn: "Fumigated seaworthy wooden crate box with moisture barrier lining",
    packagingTa: "ஈரப்பதம் தடுக்கும் லைனிங் கொண்ட புகையூட்டப்பட்ட கடல் தகுதி மரப்பெட்டி",
    exportQualityEn: "CE certified electricals, safety sensor compliance, ISO standard engineering.",
    exportQualityTa: "CE சான்றளிக்கப்பட்ட மின்சாதனங்கள், பாதுகாப்பு சென்சார்கள்.",
    shippingEn: "Sea Freight (FCL/LCL)",
    shippingTa: "கடல்வழி போக்குவரத்து (FCL/LCL)"
  }
];
