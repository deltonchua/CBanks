const centralBanks = [
  {
    country: 'Afghanistan',
    central_bank: 'Central Bank of Afghanistan',
    central_bank_alt: 'Da Afghanistan Bank',
    title: 'Da_Afghanistan_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Da_Afghanistan_Bank_Logo.svg/240px-Da_Afghanistan_Bank_Logo.svg.png',
  },
  {
    country: 'Albania',
    central_bank: 'Bank of Albania',
    central_bank_alt: 'Banka e Shqipërisë',
    title: 'Bank_of_Albania',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banka_e_Shqip%C3%ABris%C3%AB.svg/225px-Banka_e_Shqip%C3%ABris%C3%AB.svg.png',
  },
  {
    country: 'Algeria',
    central_bank: 'Bank of Algeria',
    central_bank_alt: 'بنك الجزائر',
    title: 'Bank_of_Algeria',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Logo_of_the_Bank_of_Algeria.png/213px-Logo_of_the_Bank_of_Algeria.png',
  },
  {
    country: 'Angola',
    central_bank: 'National Bank of Angola',
    central_bank_alt: 'Banco Nacional de Angola',
    title: 'National_Bank_of_Angola',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/National_Bank_of_Angola_Logo.png/126px-National_Bank_of_Angola_Logo.png',
  },
  {
    country: 'Anguilla',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Antigua and Barbuda',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Armenia',
    central_bank: 'Central Bank of Armenia',
    central_bank_alt: 'Հայաստանի Կենտրոնական Բանկ, Hayastani Kentronakan Bank',
    title: 'Central_Bank_of_Armenia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Central_Bank_of_Armenia_Logo.png/225px-Central_Bank_of_Armenia_Logo.png',
  },
  {
    country: 'Aruba',
    central_bank: 'Central Bank of Aruba',
    central_bank_alt: 'Centrale Bank van Aruba',
    title: 'Central_Bank_of_Aruba',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coat_of_arms_of_Aruba.svg/85px-Coat_of_arms_of_Aruba.svg.png',
  },
  {
    country: 'Australia',
    central_bank: 'Reserve Bank of Australia',
    central_bank_alt: null,
    title: 'Reserve_Bank_of_Australia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Reserve_Bank_of_Australia_logo.svg/165px-Reserve_Bank_of_Australia_logo.svg.png',
  },
  {
    country: 'Austria',
    central_bank: 'Oesterreichische Nationalbank',
    central_bank_alt: null,
    title: 'Oesterreichische_Nationalbank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Oesterreichische_Nationalbank_Logo.svg/165px-Oesterreichische_Nationalbank_Logo.svg.png',
  },
  {
    country: 'Azerbaijan',
    central_bank: 'Central Bank of Azerbaijan',
    central_bank_alt: 'Azərbaycan Mərkəzi Bankı',
    title: 'Central_Bank_of_Azerbaijan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Emblem_of_Azerbaijan.svg/195px-Emblem_of_Azerbaijan.svg.png',
  },
  {
    country: 'Bahamas',
    central_bank: 'Central Bank of The Bahamas',
    central_bank_alt: null,
    title: 'Central_Bank_of_The_Bahamas',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Coat_of_arms_of_the_Bahamas.svg/85px-Coat_of_arms_of_the_Bahamas.svg.png',
  },
  {
    country: 'Bahrain',
    central_bank: 'Central Bank of Bahrain',
    central_bank_alt: 'مصرف البحرين المركزي',
    title: 'Central_Bank_of_Bahrain',
    image:
      'https://upload.wikimedia.org/wikipedia/en/c/c2/CentralBankofBahrainLogo.png',
  },
  {
    country: 'Bangladesh',
    central_bank: 'Bangladesh Bank',
    central_bank_alt: 'বাংলাদেশ ব্যাংক',
    title: 'Bangladesh_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%95.svg/330px-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6_%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A7%80%E0%A6%95.svg.png',
  },
  {
    country: 'Barbados',
    central_bank: 'Central Bank of Barbados',
    central_bank_alt: null,
    title: 'Central_Bank_of_Barbados',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Coat_of_arms_of_Barbados_%283%29.svg/85px-Coat_of_arms_of_Barbados_%283%29.svg.png',
  },
  {
    country: 'Belarus',
    central_bank: 'National Bank of the Republic of Belarus',
    central_bank_alt: 'Нацыянальны банк Рэспублікі Беларусь',
    title: 'National_Bank_of_the_Republic_of_Belarus',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_Belarus_%282020%29.svg/85px-Coat_of_arms_of_Belarus_%282020%29.svg.png',
  },
  {
    country: 'Belgium',
    central_bank: 'National Bank of Belgium',
    central_bank_alt:
      'Nationale Bank van België / Banque nationale de Belgique / Belgische Nationalbank',
    title: 'National_Bank_of_Belgium',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/41/NBB_logo_%28National_Bank_of_Belgium%29.gif',
  },
  {
    country: 'Belize',
    central_bank: 'Central Bank of Belize',
    central_bank_alt: null,
    title: 'Central_Bank_of_Belize',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Belize.svg/85px-Coat_of_arms_of_Belize.svg.png',
  },
  {
    country: 'Benin',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Bermuda',
    central_bank: 'Bermuda Monetary Authority',
    central_bank_alt: null,
    title: 'Bermuda_Monetary_Authority',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/BMA-bm-logo.png/360px-BMA-bm-logo.png',
  },
  {
    country: 'Bhutan',
    central_bank: 'Royal Monetary Authority of Bhutan',
    central_bank_alt: null,
    title: 'Royal_Monetary_Authority_of_Bhutan',
    image:
      'https://upload.wikimedia.org/wikipedia/en/7/79/Royal_Monetary_Authority_of_Bhutan_logo.png',
  },
  {
    country: 'Bolivia',
    central_bank: 'Central Bank of Bolivia',
    central_bank_alt: 'Banco Central de Bolivia',
    title: 'Central_Bank_of_Bolivia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Banco_Central_de_Bolivia.svg/330px-Banco_Central_de_Bolivia.svg.png',
  },
  {
    country: 'Bosnia and Herzegovina',
    central_bank: 'Central Bank of Bosnia and Herzegovina',
    central_bank_alt: 'Centralna Banka Bosne i Hercegovine',
    title: 'Central_Bank_of_Bosnia_and_Herzegovina',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coat_of_arms_of_Bosnia_and_Herzegovina.svg/60px-Coat_of_arms_of_Bosnia_and_Herzegovina.svg.png',
  },
  {
    country: 'Botswana',
    central_bank: 'Bank of Botswana',
    central_bank_alt: null,
    title: 'Bank_of_Botswana',
    image:
      'https://upload.wikimedia.org/wikipedia/en/1/12/Bank_of_Botswana_logo.gif',
  },
  {
    country: 'Brazil',
    central_bank: 'Central Bank of Brazil',
    central_bank_alt: 'Banco Central do Brasil',
    title: 'Central_Bank_of_Brazil',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Banco_Central_Do_Brasil.svg/165px-Banco_Central_Do_Brasil.svg.png',
  },
  {
    country: 'Brunei',
    central_bank: 'Monetary Authority of Brunei Darussalam',
    central_bank_alt: 'Autoriti Monetari Brunei Darussalam',
    title: 'Monetary_Authority_of_Brunei_Darussalam',
    image:
      'https://upload.wikimedia.org/wikipedia/en/e/e3/Monetary_Authority_of_Brunei_Darussalam_logo.jpg',
  },
  {
    country: 'Bulgaria',
    central_bank: 'Bulgarian National Bank',
    central_bank_alt: 'Българска народна банка',
    title: 'Bulgarian_National_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Bulgarian_national_bank_coa.png/225px-Bulgarian_national_bank_coa.png',
  },
  {
    country: 'Burkina Faso',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Burundi',
    central_bank: 'Bank of the Republic of Burundi',
    central_bank_alt:
      "Banque de la République du Burundi / Ibanki ya Republika Y'UBurundi",
    title: 'Bank_of_the_Republic_of_Burundi',
    image:
      'https://upload.wikimedia.org/wikipedia/en/e/e1/Bank_of_the_Republic_of_Burundi_%28emblem%29.png',
  },
  {
    country: 'Cambodia',
    central_bank: 'National Bank of Cambodia',
    central_bank_alt: 'ធនាគារជាតិ នៃ កម្ពុជា',
    title: 'National_Bank_of_Cambodia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/National_Bank_of_Cambodia_logo.png/110px-National_Bank_of_Cambodia_logo.png',
  },
  {
    country: 'Cameroon',
    central_bank: 'Bank of Central African States',
    central_bank_alt: "Banque des États de l'Afrique Centrale, BEAC",
    title: 'Bank_of_Central_African_States',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Bank_of_Central_African_States_logo.png/110px-Bank_of_Central_African_States_logo.png',
  },
  {
    country: 'Canada',
    central_bank: 'Bank of Canada',
    central_bank_alt: 'Banque du Canada',
    title: 'Bank_of_Canada',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/BankOfCanada.svg/263px-BankOfCanada.svg.png',
  },
  {
    country: 'Cape Verde',
    central_bank: 'Bank of Cape Verde',
    central_bank_alt: 'Banco de Cabo Verde',
    title: 'Bank_of_Cape_Verde',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Bank_of_Cape_Verde_logo.gif/360px-Bank_of_Cape_Verde_logo.gif',
  },
  {
    country: 'Cayman Islands',
    central_bank: 'Cayman Islands Monetary Authority',
    central_bank_alt: null,
    title: 'Cayman_Islands_Monetary_Authority',
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/94/Cayman_Islands_Monetary_Authority_logo.png',
  },
  {
    country: 'Central African Republic',
    central_bank: 'Bank of Central African States',
    central_bank_alt: "Banque des États de l'Afrique Centrale, BEAC",
    title: 'Bank_of_Central_African_States',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Bank_of_Central_African_States_logo.png/110px-Bank_of_Central_African_States_logo.png',
  },
  {
    country: 'CFP franc',
    central_bank: 'Overseas Issuing Institute',
    central_bank_alt: "Institut d'émission d'Outre-Mer",
    title: "Institut_d'émission_d'outre-mer",
    image: 'https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_IEDOM.gif',
  },
  {
    country: 'Chad',
    central_bank: 'Bank of Central African States',
    central_bank_alt: "Banque des États de l'Afrique Centrale, BEAC",
    title: 'Bank_of_Central_African_States',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Bank_of_Central_African_States_logo.png/110px-Bank_of_Central_African_States_logo.png',
  },
  {
    country: 'Chile',
    central_bank: 'Central Bank of Chile',
    central_bank_alt: 'Banco Central de Chile',
    title: 'Central_Bank_of_Chile',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/fc/Central_Bank_of_Chile_logo.png',
  },
  {
    country: 'China',
    central_bank: "People's Bank of China",
    central_bank_alt: '中国人民銀行',
    title: "People's_Bank_of_China",
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Peoples_Bank_of_China_logo_small.png/225px-Peoples_Bank_of_China_logo_small.png',
  },
  {
    country: 'Colombia',
    central_bank: 'Bank of the Republic',
    central_bank_alt: 'Banco de la República',
    title: 'Bank_of_the_Republic_(Colombia)',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Banrep.svg/150px-Banrep.svg.png',
  },
  {
    country: 'Comoros',
    central_bank: 'Central Bank of the Comoros',
    central_bank_alt: 'Banque Centrale des Comores',
    title: 'Central_Bank_of_the_Comoros',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/3c/Banque_Centrale_des_Comores_%28logo%29.png',
  },
  {
    country: 'Congo, Democratic Republic of the',
    central_bank: 'Central Bank of the Congo',
    central_bank_alt: 'Banque Centrale du Congo',
    title: 'Central_Bank_of_the_Congo',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/BCCongo.jpg/360px-BCCongo.jpg',
  },
  {
    country: 'Congo, Republic of the',
    central_bank: 'Bank of Central African States',
    central_bank_alt: "Banque des États de l'Afrique Centrale, BEAC",
    title: 'Bank_of_Central_African_States',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Bank_of_Central_African_States_logo.png/110px-Bank_of_Central_African_States_logo.png',
  },
  {
    country: 'Costa Rica',
    central_bank: 'Central Bank of Costa Rica',
    central_bank_alt: 'Banco Central de Costa Rica',
    title: 'Central_Bank_of_Costa_Rica',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_Costa_Rica.svg/85px-Coat_of_arms_of_Costa_Rica.svg.png',
  },
  {
    country: "Cote d'Ivoire",
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Croatia',
    central_bank: 'Croatian National Bank',
    central_bank_alt: 'Hrvatska narodna banka',
    title: 'Croatian_National_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/8/84/Croatian_National_Bank_logo.jpg',
  },
  {
    country: 'Cuba',
    central_bank: 'Central Bank of Cuba',
    central_bank_alt: 'Banco Central de Cuba',
    title: 'Central_Bank_of_Cuba',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bancocentral-cuba.jpg/225px-Bancocentral-cuba.jpg',
  },
  {
    country: 'Curaçao',
    central_bank: 'Central Bank of Curaçao and Sint Maarten',
    central_bank_alt: 'Centrale bank van Curaçao en Sint Maarten',
    title: 'Central_Bank_of_Curaçao_and_Sint_Maarten',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Coat_of_arms_of_Cura%C3%A7ao.svg/85px-Coat_of_arms_of_Cura%C3%A7ao.svg.png',
  },
  {
    country: 'Cyprus',
    central_bank: 'Central Bank of Cyprus',
    central_bank_alt: 'Κεντρική Τράπεζα της Κύπρου / Kıbrıs Merkez Bankası',
    title: 'Central_Bank_of_Cyprus',
    image:
      'https://upload.wikimedia.org/wikipedia/en/4/40/Central_bank_of_Cyprus_Logo.png',
  },
  {
    country: 'Czech Republic',
    central_bank: 'Czech National Bank',
    central_bank_alt: 'Česká národní banka',
    title: 'Czech_National_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%C4%8Cesk%C3%A1_n%C3%A1rodn%C3%AD_banka_logo.svg/240px-%C4%8Cesk%C3%A1_n%C3%A1rodn%C3%AD_banka_logo.svg.png',
  },
  {
    country: 'Denmark',
    central_bank: 'Danmarks Nationalbank',
    central_bank_alt: null,
    title: 'Danmarks_Nationalbank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/90/DanmarksNationalbank_logo.png',
  },
  {
    country: 'Djibouti',
    central_bank: 'Central Bank of Djibouti',
    central_bank_alt: 'Banque Centrale de Djibouti',
    title: 'Central_Bank_of_Djibouti',
    image:
      'https://upload.wikimedia.org/wikipedia/en/f/f1/Banque_Centrale_de_Djibouti_LOGO.png',
  },
  {
    country: 'Dominica',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Dominican Republic',
    central_bank: 'Central Bank of the Dominican Republic',
    central_bank_alt: 'Banco Central de la República Dominicana',
    title: 'Central_Bank_of_the_Dominican_Republic',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Coat_of_arms_of_the_Dominican_Republic.svg/85px-Coat_of_arms_of_the_Dominican_Republic.svg.png',
  },
  {
    country: 'East Timor',
    central_bank: 'Central Bank of East Timor',
    central_bank_alt:
      'Banco Central de Timor-Leste / Banku Sentrál Timor-Leste',
    title: 'Banco_Central_de_Timor-Leste',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_East_Timor.svg/85px-Coat_of_arms_of_East_Timor.svg.png',
  },
  {
    country: 'Economic and Monetary Community of Central Africa',
    central_bank: 'Bank of Central African States',
    central_bank_alt: "Banque des États de l'Afrique Centrale, BEAC",
    title: 'Bank_of_Central_African_States',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Bank_of_Central_African_States_logo.png/110px-Bank_of_Central_African_States_logo.png',
  },
  {
    country: 'Ecuador',
    central_bank: 'Central Bank of Ecuador',
    central_bank_alt: 'Banco Central del Ecuador',
    title: 'Central_Bank_of_Ecuador',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f2/Escudo_del_Banco_Central_del_Ecuador.jpg',
  },
  {
    country: 'Egypt',
    central_bank: 'Central Bank of Egypt',
    central_bank_alt: 'البنك المركزي المصري',
    title: 'Central_Bank_of_Egypt',
    image:
      'https://upload.wikimedia.org/wikipedia/en/5/5f/Central_Bank_of_Egypt_CBE_Logo.jpg',
  },
  {
    country: 'El Salvador',
    central_bank: 'Central Reserve Bank of El Salvador',
    central_bank_alt: 'Banco Central de Reserva de El Salvador',
    title: 'Central_Reserve_Bank_of_El_Salvador',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Logo_Banco_Central_de_Reserva_de_El_Salvador.png/240px-Logo_Banco_Central_de_Reserva_de_El_Salvador.png',
  },
  {
    country: 'Equatorial Guinea',
    central_bank: 'Bank of Central African States',
    central_bank_alt: "Banque des États de l'Afrique Centrale, BEAC",
    title: 'Bank_of_Central_African_States',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Bank_of_Central_African_States_logo.png/110px-Bank_of_Central_African_States_logo.png',
  },
  {
    country: 'Eritrea',
    central_bank: 'Bank of Eritrea',
    central_bank_alt: null,
    title: 'Bank_of_Eritrea',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emblem_of_Eritrea_%28or_argent_azur%29.svg/128px-Emblem_of_Eritrea_%28or_argent_azur%29.svg.png',
  },
  {
    country: 'Estonia',
    central_bank: 'Bank of Estonia',
    central_bank_alt: 'Eesti Pank',
    title: 'Bank_of_Estonia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Bank_of_Estonia_new_logo.svg/360px-Bank_of_Estonia_new_logo.svg.png',
  },
  {
    country: 'Ethiopia',
    central_bank: 'National Bank of Ethiopia',
    central_bank_alt: 'የኢትዮጵያ ብሔራዊ ባንክ',
    title: 'National_Bank_of_Ethiopia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/National_Bank_of_Ethiopia_logo.png/360px-National_Bank_of_Ethiopia_logo.png',
  },
  {
    country: 'European Union',
    central_bank: 'European System of Central Banks',
    central_bank_alt: null,
    title: 'European_System_of_Central_Banks',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/188px-Flag_of_Europe.svg.png',
  },
  {
    country: 'Eurosystem',
    central_bank: 'European Central Bank',
    central_bank_alt: null,
    title: 'European_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Logo_European_Central_Bank.svg/165px-Logo_European_Central_Bank.svg.png',
  },
  {
    country: 'Fiji',
    central_bank: 'Reserve Bank of Fiji',
    central_bank_alt: null,
    title: 'Reserve_Bank_of_Fiji',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Coat_of_arms_of_Fiji.svg/85px-Coat_of_arms_of_Fiji.svg.png',
  },
  {
    country: 'Finland',
    central_bank: 'Bank of Finland',
    central_bank_alt: 'Suomen Pankki/Finlands Bank',
    title: 'Bank_of_Finland',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Logo-bof.png/225px-Logo-bof.png',
  },
  {
    country: 'France',
    central_bank: 'Bank of France',
    central_bank_alt: 'Banque de France',
    title: 'Bank_of_France',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Coat_of_arms_of_the_French_Republic.svg/75px-Coat_of_arms_of_the_French_Republic.svg.png',
  },
  {
    country: 'French Polynesia',
    central_bank: 'Overseas Issuing Institute',
    central_bank_alt: "Institut d'émission d'Outre-Mer",
    title: "Institut_d'émission_d'outre-mer",
    image: 'https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_IEDOM.gif',
  },
  {
    country: 'Gabon',
    central_bank: 'Bank of Central African States',
    central_bank_alt: "Banque des États de l'Afrique Centrale, BEAC",
    title: 'Bank_of_Central_African_States',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Bank_of_Central_African_States_logo.png/110px-Bank_of_Central_African_States_logo.png',
  },
  {
    country: 'Gambia',
    central_bank: 'Central Bank of The Gambia',
    central_bank_alt: null,
    title: 'Central_Bank_of_The_Gambia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coat_of_arms_of_The_Gambia.svg/85px-Coat_of_arms_of_The_Gambia.svg.png',
  },
  {
    country: 'Germany',
    central_bank: 'Deutsche Bundesbank',
    central_bank_alt: null,
    title: 'Deutsche_Bundesbank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Deutsche_Bundesbank_logo.svg/360px-Deutsche_Bundesbank_logo.svg.png',
  },
  {
    country: 'Georgia',
    central_bank: 'National Bank of Georgia',
    central_bank_alt: 'საქართველოს ეროვნული ბანკი',
    title: 'National_Bank_of_Georgia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/National_Bank_of_Georgia.png/225px-National_Bank_of_Georgia.png',
  },
  {
    country: 'Ghana',
    central_bank: 'Bank of Ghana',
    central_bank_alt: null,
    title: 'Bank_of_Ghana',
    image:
      'https://upload.wikimedia.org/wikipedia/en/5/55/BANK_OF_GHANA_LOGO.png',
  },
  {
    country: 'Greece',
    central_bank: 'Bank of Greece',
    central_bank_alt: 'Τράπεζα της Ελλάδος',
    title: 'Bank_of_Greece',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Bank_of_Greece_new_logo.svg/360px-Bank_of_Greece_new_logo.svg.png',
  },
  {
    country: 'Grenada',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Guatemala',
    central_bank: 'Bank of Guatemala',
    central_bank_alt: 'Banco de Guatemala',
    title: 'Bank_of_Guatemala',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Coat_of_arms_of_Guatemala.svg/85px-Coat_of_arms_of_Guatemala.svg.png',
  },
  {
    country: 'Guinea',
    central_bank: 'Central Bank of the Republic of Guinea',
    central_bank_alt: 'Banque Centrale de la République de Guinée',
    title: 'Central_Bank_of_the_Republic_of_Guinea',
    image: 'https://upload.wikimedia.org/wikipedia/en/d/db/BCRG_LOGO.png',
  },
  {
    country: 'Guinea-Bissau',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Guyana',
    central_bank: 'Bank of Guyana',
    central_bank_alt: null,
    title: 'Bank_of_Guyana',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Coat_of_arms_of_Guyana.svg/85px-Coat_of_arms_of_Guyana.svg.png',
  },
  {
    country: 'Haiti',
    central_bank: 'Bank of the Republic of Haiti',
    central_bank_alt: "Banque de la République d'Haïti",
    title: 'Bank_of_the_Republic_of_Haiti',
    image:
      'https://upload.wikimedia.org/wikipedia/en/a/ab/Banque_de_la_R%C3%A9publique_d%27Ha%C3%AFti_Logo.png',
  },
  {
    country: 'Hong Kong',
    central_bank: 'Hong Kong Monetary Authority',
    central_bank_alt: '香港金融管理局',
    title: 'Hong_Kong_Monetary_Authority',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Hong_Kong_Monetary_Authority_%28emblem%29.svg/360px-Hong_Kong_Monetary_Authority_%28emblem%29.svg.png',
  },
  {
    country: 'Honduras',
    central_bank: 'Central Bank of Honduras',
    central_bank_alt: 'Banco Central de Honduras',
    title: 'Central_Bank_of_Honduras',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coat_of_arms_of_Honduras.svg/85px-Coat_of_arms_of_Honduras.svg.png',
  },
  {
    country: 'Holy See',
    central_bank: 'Administration of the Patrimony of the Apostolic See',
    central_bank_alt: null,
    title: 'Administration_of_the_Patrimony_of_the_Apostolic_See',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Coat_of_arms_Holy_See.svg/113px-Coat_of_arms_Holy_See.svg.png',
  },
  {
    country: 'Hungary',
    central_bank: 'Hungarian National Bank',
    central_bank_alt: 'Magyar Nemzeti Bank',
    title: 'Hungarian_National_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Logo_of_the_Hungarian_National_Bank.svg/300px-Logo_of_the_Hungarian_National_Bank.svg.png',
  },
  {
    country: 'Iceland',
    central_bank: 'Central Bank of Iceland',
    central_bank_alt: 'Seðlabanki Íslands',
    title: 'Central_Bank_of_Iceland',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Se%C3%B0labanki_%C3%8Dslands.svg/360px-Se%C3%B0labanki_%C3%8Dslands.svg.png',
  },
  {
    country: 'India',
    central_bank: 'Reserve Bank of India',
    central_bank_alt: 'भारतीय रिज़र्व बैंक',
    title: 'Reserve_Bank_of_India',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Seal_of_the_Reserve_Bank_of_India.svg/225px-Seal_of_the_Reserve_Bank_of_India.svg.png',
  },
  {
    country: 'Indonesia',
    central_bank: 'Bank of Indonesia',
    central_bank_alt: 'Bank Indonesia',
    title: 'Bank_Indonesia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Bankindonesialogo.svg/220px-Bankindonesialogo.svg.png',
  },
  {
    country: 'Iran',
    central_bank: 'Central Bank of the Islamic Republic of Iran',
    central_bank_alt: 'بانک مرکزی ایران',
    title: 'Central_Bank_of_Iran',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/CB_Approximated_Logo.svg/195px-CB_Approximated_Logo.svg.png',
  },
  {
    country: 'Iraq',
    central_bank: 'Central Bank of Iraq',
    central_bank_alt: 'البنك المركزي العراقي',
    title: 'Central_Bank_of_Iraq',
    image:
      'https://upload.wikimedia.org/wikipedia/en/7/7d/Central_Bank_of_Iraq_Logo.jpg',
  },
  {
    country: 'Ireland',
    central_bank: 'Central Bank of Ireland',
    central_bank_alt:
      'Banc Ceannais agus Údarás Seirbhísí Airgeadais na hÉireann',
    title: 'Central_Bank_of_Ireland',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/72/CBFSAI_IRELAND.png',
  },
  {
    country: 'Israel',
    central_bank: 'Bank of Israel',
    central_bank_alt: 'בנק ישראל',
    title: 'Bank_of_Israel',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Bank_of_Israel_Seal.svg/225px-Bank_of_Israel_Seal.svg.png',
  },
  {
    country: 'Italy',
    central_bank: 'Bank of Italy',
    central_bank_alt: "Banca d'Italia",
    title: 'Bank_of_Italy',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_Banca_d%27Italia.png/240px-Logo_Banca_d%27Italia.png',
  },
  {
    country: 'Jamaica',
    central_bank: 'Bank of Jamaica',
    central_bank_alt: null,
    title: 'Bank_of_Jamaica',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Coat_of_arms_of_Jamaica.svg/85px-Coat_of_arms_of_Jamaica.svg.png',
  },

  {
    country: 'Japan',
    central_bank: 'Bank of Japan',
    central_bank_alt: '日本銀行',
    title: 'Bank_of_Japan',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Bank_of_Japan_logo.svg/165px-Bank_of_Japan_logo.svg.png',
  },
  {
    country: 'Jordan',
    central_bank: 'Central Bank of Jordan',
    central_bank_alt: 'البنك المركزي الاردني',
    title: 'Central_Bank_of_Jordan',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Central_Bank_of_Jordan_Logo.png/300px-Central_Bank_of_Jordan_Logo.png',
  },
  {
    country: 'Kazakhstan',
    central_bank: 'National Bank of Kazakhstan',
    central_bank_alt: 'Қазақстан Ұлттық Банкі',
    title: 'National_Bank_of_Kazakhstan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/National_Bank_of_Kazakhstan_logo.svg/360px-National_Bank_of_Kazakhstan_logo.svg.png',
  },
  {
    country: 'Kenya',
    central_bank: 'Central Bank of Kenya',
    central_bank_alt: 'Benki Kuu ya Kenya',
    title: 'Central_Bank_of_Kenya',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Coat_of_arms_of_Kenya_%28Official%29.svg/85px-Coat_of_arms_of_Kenya_%28Official%29.svg.png',
  },
  {
    country: "Korea, Democratic People's Republic of",
    central_bank: "Central Bank of the Democratic People's Republic of Korea",
    central_bank_alt: '조선민주주의인민공화국중앙은행',
    title: "Central_Bank_of_the_Democratic_People's_Republic_of_Korea",
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emblem_of_North_Korea.svg/360px-Emblem_of_North_Korea.svg.png',
  },
  {
    country: 'Korea, Republic of',
    central_bank: 'Bank of Korea',
    central_bank_alt: '한국은행',
    title: 'Bank_of_Korea',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Emblem_of_South_Korea.svg/85px-Emblem_of_South_Korea.svg.png',
  },
  {
    country: 'Kuwait',
    central_bank: 'Central Bank of Kuwait',
    central_bank_alt: 'بنك الكويت المركزي',
    title: 'Central_Bank_of_Kuwait',
    image:
      'https://upload.wikimedia.org/wikipedia/en/f/f8/Central_Bank_of_Kuwait_Logo.png',
  },
  {
    country: 'Kyrgyzstan',
    central_bank: 'National Bank of the Kyrgyz Republic ',
    central_bank_alt: 'Кыргыз Республикасынын Улуттук Банкы',
    title: 'National_Bank_of_the_Kyrgyz_Republic',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B1%D0%B0%D0%BD%D0%BA%D0%B0_%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D0%BA%D0%BE%D0%B9_%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8.jpg/300px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B1%D0%B0%D0%BD%D0%BA%D0%B0_%D0%9A%D1%8B%D1%80%D0%B3%D1%8B%D0%B7%D1%81%D0%BA%D0%BE%D0%B9_%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8.jpg',
  },
  {
    country: 'Laos',
    central_bank: "Bank of the Lao People's Democratic Republic",
    central_bank_alt: 'ທະນາຄານ ແຫ່ງ ສ. ປ. ປ. ລາວ',
    title: 'Bank_of_the_Lao_P.D.R.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Emblem_of_Laos.svg/85px-Emblem_of_Laos.svg.png',
  },
  {
    country: 'Latvia',
    central_bank: 'Bank of Latvia',
    central_bank_alt: 'Latvijas Banka',
    title: 'Bank_of_Latvia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Latvijas_Banka_logo.svg/240px-Latvijas_Banka_logo.svg.png',
  },
  {
    country: 'Lebanon',
    central_bank: 'Banque du Liban',
    central_bank_alt: 'مصرف لبنان',
    title: 'Banque_du_Liban',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Banque_du_Liban.jpg',
  },
  {
    country: 'Lesotho',
    central_bank: 'Central Bank of Lesotho',
    central_bank_alt: 'Banka e Kholo ea Lesotho',
    title: 'Central_Bank_of_Lesotho',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Coat_of_arms_of_Lesotho.svg/85px-Coat_of_arms_of_Lesotho.svg.png',
  },
  {
    country: 'Liberia',
    central_bank: 'Central Bank of Liberia',
    central_bank_alt: null,
    title: 'Central_Bank_of_Liberia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/7/72/CENTRAL_BANK_OF_LIBERIA_LOGO.png',
  },
  {
    country: 'Libya',
    central_bank: 'Central Bank of Libya',
    central_bank_alt: 'مصرف ليبيا المركزي',
    title: 'Central_Bank_of_Libya',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/LogoCBL.svg/100px-LogoCBL.svg.png',
  },
  {
    country: 'Liechtenstein',
    central_bank: 'National bank of Liechtenstein',
    central_bank_alt: 'Liechtensteinische Landesbank',
    title: 'National_Bank_of_Liechtenstein',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Logo_Liechtensteinische_Landesbank.svg/165px-Logo_Liechtensteinische_Landesbank.svg.png',
  },
  {
    country: 'Lithuania',
    central_bank: 'Bank of Lithuania',
    central_bank_alt: 'Lietuvos Bankas',
    title: 'Bank_of_Lithuania',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Lietuvos_Bankas_Logo.svg/360px-Lietuvos_Bankas_Logo.svg.png',
  },
  {
    country: 'Luxembourg',
    central_bank: 'Central Bank of Luxembourg',
    central_bank_alt: 'Banque centrale du Luxembourg',
    title: 'Central_Bank_of_Luxembourg',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coat_of_arms_of_Luxembourg.svg/85px-Coat_of_arms_of_Luxembourg.svg.png',
  },
  {
    country: 'Macau',
    central_bank: 'Monetary Authority of Macao',
    central_bank_alt: '澳門金融管理局',
    title: 'Monetary_Authority_of_Macao',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/AMCM_logo.svg/360px-AMCM_logo.svg.png',
  },
  {
    country: 'Madagascar',
    central_bank: 'Central Bank of Madagascar',
    central_bank_alt:
      "Banque Centrale de Madagascar / Banky Foiben'i Madagasikara",
    title: 'Central_Bank_of_Madagascar',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d8/Banky_Foiben%27i_Madagasikara_%28logo%29.jpg',
  },
  {
    country: 'Malawi',
    central_bank: 'Reserve Bank of Malawi',
    central_bank_alt: null,
    title: 'Reserve_Bank_of_Malawi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Coat_of_arms_of_Malawi.svg/85px-Coat_of_arms_of_Malawi.svg.png',
  },
  {
    country: 'Malaysia',
    central_bank: 'Central Bank of Malaysia',
    central_bank_alt: 'Bank Negara Malaysia',
    title: 'Central_Bank_of_Malaysia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Central_Bank_of_Malaysia_logo.png/360px-Central_Bank_of_Malaysia_logo.png',
  },
  {
    country: 'Maldives',
    central_bank: 'Maldives Monetary Authority',
    central_bank_alt: null,
    title: 'Maldives_Monetary_Authority',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Maldives_Monetary_Authority_logo.svg/225px-Maldives_Monetary_Authority_logo.svg.png',
  },
  {
    country: 'Mali',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Malta',
    central_bank: 'Central Bank of Malta',
    central_bank_alt: 'Bank Ċentrali ta’ Malta',
    title: 'Central_Bank_of_Malta',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/Central_Bank_of_Malta_logo.svg/360px-Central_Bank_of_Malta_logo.svg.png',
  },
  {
    country: 'Mauritania',
    central_bank: 'Central Bank of Mauritania',
    central_bank_alt: 'Banque Centrale de Mauritanie',
    title: 'Central_Bank_of_Mauritania',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Central_Bank_of_Mauritania_Logo.png/300px-Central_Bank_of_Mauritania_Logo.png',
  },
  {
    country: 'Mauritius',
    central_bank: 'Bank of Mauritius',
    central_bank_alt: null,
    title: 'Bank_of_Mauritius',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_arms_of_Mauritius_%28Original_version%29.svg/85px-Coat_of_arms_of_Mauritius_%28Original_version%29.svg.png',
  },
  {
    country: 'Mexico',
    central_bank: 'Bank of Mexico',
    central_bank_alt: 'Banco de México',
    title: 'Bank_of_Mexico',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Logobm.svg/255px-Logobm.svg.png',
  },
  {
    country: 'Moldova',
    central_bank: 'National Bank of Moldova',
    central_bank_alt: 'Banca Naţională a Moldovei',
    title: 'National_Bank_of_Moldova',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Coat_of_arms_of_Moldova.svg/85px-Coat_of_arms_of_Moldova.svg.png',
  },
  {
    country: 'Mongolia',
    central_bank: 'Bank of Mongolia',
    central_bank_alt: 'Монгол банк Дэлгэрсайхан',
    title: 'Bank_of_Mongolia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/State_emblem_of_Mongolia.svg/85px-State_emblem_of_Mongolia.svg.png',
  },
  {
    country: 'Montenegro',
    central_bank: 'Central Bank of Montenegro',
    central_bank_alt: 'Centralna Banka Crne Gore',
    title: 'Central_Bank_of_Montenegro',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Coat_of_arms_of_Montenegro.svg/85px-Coat_of_arms_of_Montenegro.svg.png',
  },
  {
    country: 'Montserrat',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Morocco',
    central_bank: 'Bank Al-Maghrib',
    central_bank_alt: 'بنك المغرب',
    title: 'Bank_Al-Maghrib',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Bank_Al-Maghrib_%28logo%29.jpg/225px-Bank_Al-Maghrib_%28logo%29.jpg',
  },
  {
    country: 'Mozambique',
    central_bank: 'Bank of Mozambique',
    central_bank_alt: 'Banco de Moçambique',
    title: 'Bank_of_Mozambique',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Emblem_of_Mozambique.svg/85px-Emblem_of_Mozambique.svg.png',
  },
  {
    country: 'Myanmar',
    central_bank: 'Central Bank of Myanmar',
    central_bank_alt: 'မြန်မာနိုင်ငံတော်ဗဟိုဘဏ်',
    title: 'Central_Bank_of_Myanmar',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a7/Central_Bank_of_Myanmar_seal.png',
  },
  {
    country: 'Namibia',
    central_bank: 'Bank of Namibia',
    central_bank_alt: null,
    title: 'Bank_of_Namibia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Logo_der_Bank_von_Namibia.svg/195px-Logo_der_Bank_von_Namibia.svg.png',
  },
  {
    country: 'Nepal',
    central_bank: 'Nepal Rastra Bank',
    central_bank_alt: 'नेपाल राष्ट्र बैंक',
    title: 'Nepal_Rastra_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/New_Emblem_of_Nepal.svg/120px-New_Emblem_of_Nepal.svg.png',
  },
  {
    country: 'Netherlands',
    central_bank: 'De Nederlandsche Bank',
    central_bank_alt: null,
    title: 'De_Nederlandsche_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/De_Nederlandsche_Bank_logo.svg/375px-De_Nederlandsche_Bank_logo.svg.png',
  },
  {
    country: 'Netherlands Antilles',
    central_bank: 'Bank of the Netherlands Antilles',
    central_bank_alt: 'Bank van de Nederlandse Antillen',
    title: 'Central_Bank_of_Curaçao_and_Sint_Maarten',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Coat_of_arms_of_the_Netherlands_Antilles_%281986-2010%29.svg/70px-Coat_of_arms_of_the_Netherlands_Antilles_%281986-2010%29.svg.png',
  },
  {
    country: 'New Caledonia',
    central_bank: 'Overseas Issuing Institute',
    central_bank_alt: "Institut d'émission d'Outre-Mer",
    title: "Institut_d'émission_d'outre-mer",
    image: 'https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_IEDOM.gif',
  },
  {
    country: 'New Zealand',
    central_bank: 'Reserve Bank of New Zealand',
    central_bank_alt: 'Te Pūtea Matua',
    title: 'Reserve_Bank_of_New_Zealand',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Reserve_Bank_of_New_Zealand_%28RBNZ%29_coat_of_arms.jpg/165px-Reserve_Bank_of_New_Zealand_%28RBNZ%29_coat_of_arms.jpg',
  },
  {
    country: 'Nicaragua',
    central_bank: 'Central Bank of Nicaragua',
    central_bank_alt: 'Banco Central de Nicaragua',
    title: 'Central_Bank_of_Nicaragua',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logo_bcn_azul.jpg/270px-Logo_bcn_azul.jpg',
  },
  {
    country: 'Niger',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Nigeria',
    central_bank: 'Central Bank of Nigeria',
    central_bank_alt: null,
    title: 'Central_Bank_of_Nigeria',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d2/Central_Bank_of_Nigeria_%28emblem%29.png',
  },
  {
    country: 'North Macedonia',
    central_bank: 'National Bank of North Macedonia',
    central_bank_alt: 'Народна банка на Република Северна Македонија',
    title: 'National_Bank_of_North_Macedonia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/MK_NBRM.png/110px-MK_NBRM.png',
  },
  {
    country: 'Norway',
    central_bank: 'Norges Bank',
    central_bank_alt: null,
    title: 'Norges_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Norges_Bank_Logo.png/255px-Norges_Bank_Logo.png',
  },
  {
    country: 'Oman',
    central_bank: 'Central Bank of Oman',
    central_bank_alt: 'البنك المركزي العماني',
    title: 'Central_Bank_of_Oman',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/National_emblem_of_Oman.svg/85px-National_emblem_of_Oman.svg.png',
  },
  {
    country: 'Organisation of Eastern Caribbean States',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Pakistan',
    central_bank: 'State Bank of Pakistan ',
    central_bank_alt: 'بینک دولت پاکستان',
    title: 'State_Bank_of_Pakistan',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/State_Bank_of_Pakistan_logo.svg/195px-State_Bank_of_Pakistan_logo.svg.png',
  },
  {
    country: 'Palestine',
    central_bank: 'Palestine Monetary Authority',
    central_bank_alt: 'سلطة النقد الفلسطينية',
    title: 'Palestine_Monetary_Authority',
    image:
      'https://upload.wikimedia.org/wikipedia/en/c/c8/PMA_Official_New_Logo.png',
  },
  {
    country: 'Panama',
    central_bank: 'National Bank of Panama',
    central_bank_alt: 'Banco Nacional de Panamá',
    title: 'National_Bank_of_Panama',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Logo_Banco_Nacional_de_Panam%C3%A1.png/225px-Logo_Banco_Nacional_de_Panam%C3%A1.png',
  },
  {
    country: 'Papua New Guinea',
    central_bank: 'Bank of Papua New Guinea',
    central_bank_alt: null,
    title: 'Bank_of_Papua_New_Guinea',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/National_Emblem_of_Papua_New_Guinea.svg/125px-National_Emblem_of_Papua_New_Guinea.svg.png',
  },
  {
    country: 'Paraguay',
    central_bank: 'Central Bank of Paraguay',
    central_bank_alt: 'Banco Central del Paraguay',
    title: 'Central_Bank_of_Paraguay',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Banco_Central_del_Paraguay.jpg',
  },
  {
    country: 'Peru',
    central_bank: 'Central Reserve Bank of Peru',
    central_bank_alt: 'Banco Central de Reserva del Perú',
    title: 'Central_Reserve_Bank_of_Peru',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/BCRP.gif/255px-BCRP.gif',
  },
  {
    country: 'Philippines',
    central_bank: 'Bangko Sentral ng Pilipinas',
    central_bank_alt: null,
    title: 'Bangko_Sentral_ng_Pilipinas',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bangko_Sentral_ng_Pilipinas_%28BSP%29.svg/188px-Bangko_Sentral_ng_Pilipinas_%28BSP%29.svg.png',
  },
  {
    country: 'Poland',
    central_bank: 'National Bank of Poland',
    central_bank_alt: 'Narodowy Bank Polski',
    title: 'National_Bank_of_Poland',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Narodowy_Bank_Polski_logo_and_wordmark.png/225px-Narodowy_Bank_Polski_logo_and_wordmark.png',
  },
  {
    country: 'Portugal',
    central_bank: 'Bank of Portugal',
    central_bank_alt: 'Banco de Portugal',
    title: 'Banco_de_Portugal',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Banco_de_Portugal_new_logo.svg/360px-Banco_de_Portugal_new_logo.svg.png',
  },
  {
    country: 'Qatar',
    central_bank: 'Qatar Central Bank',
    central_bank_alt: 'مصرف قطر المركزي',
    title: 'Qatar_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/90/Qatar_Central_Bank.png',
  },
  {
    country: 'Romania',
    central_bank: 'National Bank of Romania',
    central_bank_alt: 'Banca Națională a României',
    title: 'National_Bank_of_Romania',
    image: 'https://upload.wikimedia.org/wikipedia/en/6/62/Sigla_BNR.jpg',
  },
  {
    country: 'Russia',
    central_bank: 'Bank of Russia',
    central_bank_alt: 'Центральный банк Российской Федерации',
    title: 'Central_Bank_of_Russia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/CBRF_logo.svg/375px-CBRF_logo.svg.png',
  },
  {
    country: 'Rwanda',
    central_bank: 'National Bank of Rwanda',
    central_bank_alt: "Banque Nationale du Rwanda / Banki Nkuru y'u Rwanda",
    title: 'National_Bank_of_Rwanda',
    image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/BNR_LOGO.jpg',
  },

  {
    country: 'Saint Kitts and Nevis ',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Saint Lucia',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Saint Vincent and the Grenadines',
    central_bank: 'Eastern Caribbean Central Bank',
    central_bank_alt: null,
    title: 'Eastern_Caribbean_Central_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/d/d7/Eastern_Caribbean_Central_Bank_logo.png',
  },
  {
    country: 'Samoa',
    central_bank: 'Central Bank of Samoa',
    central_bank_alt: 'Faletupe Tutotonu o Samoa',
    title: 'Central_Bank_of_Samoa',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Coat_of_arms_of_Samoa.svg/85px-Coat_of_arms_of_Samoa.svg.png',
  },
  {
    country: 'San Marino',
    central_bank: 'Central Bank of the Republic of San Marino',
    central_bank_alt: 'Banca Centrale della Repubblica di San Marino',
    title: 'Central_Bank_of_San_Marino',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Coat_of_arms_of_San_Marino.svg/85px-Coat_of_arms_of_San_Marino.svg.png',
  },
  {
    country: 'São Tomé and Príncipe',
    central_bank: 'Central Bank of São Tomé and Príncipe',
    central_bank_alt: 'Banco Central de São Tomé e Príncipe',
    title: 'Central_Bank_of_São_Tomé_and_Príncipe',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/128px-Coat_of_arms_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png',
  },
  {
    country: 'Saudi Arabia',
    central_bank: 'Saudi Arabian Monetary Authority',
    central_bank_alt: 'مؤسسة النقد العربي السعودي',
    title: 'Saudi_Arabian_Monetary_Authority',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Emblem_of_Saudi_Arabia.svg/85px-Emblem_of_Saudi_Arabia.svg.png',
  },
  {
    country: 'Senegal ',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Serbia',
    central_bank: ' National Bank of Serbia',
    central_bank_alt: 'Народна банка Србије / Narodna banka Srbije',
    title: 'National_Bank_of_Serbia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_Serbia.svg/85px-Coat_of_arms_of_Serbia.svg.png',
  },
  {
    country: 'Seychelles',
    central_bank: 'Central Bank of Seychelles',
    central_bank_alt: null,
    title: 'Central_Bank_of_Seychelles',
    image:
      'https://upload.wikimedia.org/wikipedia/en/2/2c/CENTRAL_BANK_OF_SEYCHELLES_LOGO.png',
  },
  {
    country: 'Sierra Leone',
    central_bank: 'Bank of Sierra Leone',
    central_bank_alt: null,
    title: 'Bank_of_Sierra_Leone',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/3a/BANK_OF_SIERRA_LEONE_LOGO.png',
  },
  {
    country: 'Singapore',
    central_bank: 'Monetary Authority of Singapore',
    central_bank_alt: null,
    title: 'Monetary_Authority_of_Singapore',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Monetary_Authority_of_Singapore.svg/360px-Monetary_Authority_of_Singapore.svg.png',
  },
  {
    country: 'Sint Maarten',
    central_bank: 'Central Bank of Curaçao and Sint Maarten',
    central_bank_alt: 'Centrale bank van Curaçao en Sint Maarten',
    title: 'Central_Bank_of_Curaçao_and_Sint_Maarten',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Coat_of_arms_of_Sint_Maarten.svg/85px-Coat_of_arms_of_Sint_Maarten.svg.png',
  },
  {
    country: 'Slovakia',
    central_bank: 'National Bank of Slovakia',
    central_bank_alt: 'Národná banka Slovenska',
    title: 'National_Bank_of_Slovakia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/National_Bank_of_Slovakia_new_logo.svg/360px-National_Bank_of_Slovakia_new_logo.svg.png',
  },
  {
    country: 'Slovenia',
    central_bank: 'Bank of Slovenia',
    central_bank_alt: 'Banka Slovenije',
    title: 'Bank_of_Slovenia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_Banka_Slovenije.svg/225px-Logo_Banka_Slovenije.svg.png',
  },
  {
    country: 'Solomon Islands',
    central_bank: 'Central Bank of Solomon Islands',
    central_bank_alt: null,
    title: 'Central_Bank_of_Solomon_Islands',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Coat_of_arms_of_the_Solomon_Islands.svg/85px-Coat_of_arms_of_the_Solomon_Islands.svg.png',
  },
  {
    country: 'Somalia',
    central_bank: 'Central Bank of Somalia',
    central_bank_alt: 'Bankiga Dhexe ee Soomaaliya',
    title: 'Central_Bank_of_Somalia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Somcenbalogo.png/315px-Somcenbalogo.png',
  },
  {
    country: 'South Africa',
    central_bank: 'South African Reserve Bank',
    central_bank_alt: null,
    title: 'South_African_Reserve_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/South_African_Reserve_Bank_logo.svg/300px-South_African_Reserve_Bank_logo.svg.png',
  },
  {
    country: 'South Sudan',
    central_bank: 'Bank of South Sudan',
    central_bank_alt: null,
    title: 'Bank_of_South_Sudan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Coat_of_arms_of_South_Sudan.svg/85px-Coat_of_arms_of_South_Sudan.svg.png',
  },
  {
    country: 'Spain',
    central_bank: 'Bank of Spain',
    central_bank_alt: 'Banco de España',
    title: 'Bank_of_Spain',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Espa%C3%B1a_%28mazonado%29.svg/85px-Escudo_de_Espa%C3%B1a_%28mazonado%29.svg.png',
  },
  {
    country: 'Sri Lanka',
    central_bank: 'Central Bank of Sri Lanka',
    central_bank_alt: 'ශ්‍රී ලංකා මහ බැංකුව / இலங்கை மத்திய வங்கி',
    title: 'Central_Bank_of_Sri_Lanka',
    image:
      'https://upload.wikimedia.org/wikipedia/en/3/35/Central_Bank_of_Sri_Lanka_logo.png',
  },
  {
    country: 'Sudan',
    central_bank: 'Central Bank of Sudan',
    central_bank_alt: 'بنك السودان المركزي',
    title: 'Central_Bank_of_Sudan',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/ab/BOS_LOGO.png',
  },
  {
    country: 'Suriname',
    central_bank: 'Central Bank of Suriname',
    central_bank_alt: 'Centrale Bank van Suriname',
    title: 'Central_Bank_of_Suriname',
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/9d/Centrale_Bank_van_Suriname_logo.jpg',
  },
  {
    country: 'Swaziland',
    central_bank: 'Central Bank of Swaziland ',
    central_bank_alt: 'Umntsholi Wemaswati',
    title: 'Central_Bank_of_Eswatini',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Central_Bank_of_Eswatini-Logo.png/360px-Central_Bank_of_Eswatini-Logo.png',
  },
  {
    country: 'Sweden',
    central_bank: 'Sveriges Riksbank',
    central_bank_alt: null,
    title: 'Sveriges_riksbank',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Riksbanken_Logo.svg/165px-Riksbanken_Logo.svg.png',
  },
  {
    country: 'Switzerland',
    central_bank: 'Swiss National Bank',
    central_bank_alt:
      'Schweizerische Nationalbank / Banque Nationale Suisse / Banca Nazionale Svizzera / Banca Naziunala Svizra',
    title: 'Swiss_National_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SNB-Logo-positiv-blau.svg/360px-SNB-Logo-positiv-blau.svg.png',
  },
  {
    country: 'Syria',
    central_bank: 'Central Bank of Syria ',
    central_bank_alt: 'مصرف سورية المركزي',
    title: 'Central_Bank_of_Syria',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Coat_of_arms_of_Syria.svg/85px-Coat_of_arms_of_Syria.svg.png',
  },
  {
    country: 'Tajikistan',
    central_bank: 'National Bank of Tajikistan',
    central_bank_alt: 'Бонки миллии Тоҷикистон',
    title: 'National_Bank_of_Tajikistan',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/National_Bank_of_Tajikistan_logo.svg/360px-National_Bank_of_Tajikistan_logo.svg.png',
  },
  {
    country: 'Tanzania',
    central_bank: 'Bank of Tanzania',
    central_bank_alt: 'Benki Kuu ya Tanzania',
    title: 'Bank_of_Tanzania',
    image:
      'https://upload.wikimedia.org/wikipedia/en/1/1c/Bank_of_Tanzania_Logo.png',
  },
  {
    country: 'Thailand',
    central_bank: 'Bank of Thailand',
    central_bank_alt: 'ธนาคารแห่งประเทศไทย',
    title: 'Bank_of_Thailand',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Seal_of_the_Bank_of_Thailand.png/173px-Seal_of_the_Bank_of_Thailand.png',
  },
  {
    country: 'Timor-Leste',
    central_bank: 'Banco Central de Timor-Leste',
    central_bank_alt: null,
    title: 'Banco_Central_de_Timor-Leste',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Coat_of_arms_of_East_Timor.svg/85px-Coat_of_arms_of_East_Timor.svg.png',
  },
  {
    country: 'Togo',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Tonga',
    central_bank: 'National Reserve Bank of Tonga',
    central_bank_alt: null,
    title: 'National_Reserve_Bank_of_Tonga',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Coat_of_arms_of_Tonga.svg/85px-Coat_of_arms_of_Tonga.svg.png',
  },
  {
    country: 'Trinidad and Tobago',
    central_bank: 'Central Bank of Trinidad and Tobago',
    central_bank_alt: null,
    title: 'Central_Bank_of_Trinidad_and_Tobago',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Coat_of_arms_of_Trinidad_and_Tobago.svg/85px-Coat_of_arms_of_Trinidad_and_Tobago.svg.png',
  },
  {
    country: 'Tunisia',
    central_bank: 'Central Bank of Tunisia',
    central_bank_alt: 'البنك المركزي التونسي / Banque Centrale de Tunisie',
    title: 'Central_Bank_of_Tunisia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Central_Bank_of_Tunisia.png/450px-Central_Bank_of_Tunisia.png',
  },
  {
    country: 'Turkey',
    central_bank: 'Central Bank of the Republic of Turkey',
    central_bank_alt: 'Türkiye Cumhuriyet Merkez Bankası',
    title: 'Central_Bank_of_the_Republic_of_Turkey',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_CBRT_Logo.jpg/165px-The_CBRT_Logo.jpg',
  },
  {
    country: 'Turkmenistan',
    central_bank: 'Central Bank of Turkmenistan',
    central_bank_alt: 'Türkmenistanyň Merkezi Banky',
    title: 'Central_Bank_of_Turkmenistan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Emblem_of_Turkmenistan.svg/85px-Emblem_of_Turkmenistan.svg.png',
  },
  {
    country: 'Uganda',
    central_bank: 'Bank of Uganda',
    central_bank_alt: 'Benki Kuu ya Uganda',
    title: 'Bank_of_Uganda',
    image:
      'https://upload.wikimedia.org/wikipedia/en/8/89/Bank_of_Uganda_logo.png',
  },
  {
    country: 'Ukraine',
    central_bank: 'National Bank of Ukraine',
    central_bank_alt: 'Національний банк України',
    title: 'National_Bank_of_Ukraine',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NBU_logo.svg/165px-NBU_logo.svg.png',
  },
  {
    country: 'United Arab Emirates',
    central_bank: 'Central Bank of the United Arab Emirates',
    central_bank_alt: 'مصرف الإمارات العربية المتحدة المركزي',
    title: 'Central_Bank_of_the_United_Arab_Emirates',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Emblem_of_the_United_Arab_Emirates.svg/85px-Emblem_of_the_United_Arab_Emirates.svg.png',
  },
  {
    country: 'United Kingdom',
    central_bank: 'Bank of England',
    central_bank_alt: null,
    title: 'Bank_of_England',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Bank_of_England.svg/225px-Bank_of_England.svg.png',
  },
  {
    country: 'United States',
    central_bank: 'Federal Reserve',
    central_bank_alt: null,
    title: 'Federal_Reserve',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Seal_of_the_United_States_Federal_Reserve_System.svg/173px-Seal_of_the_United_States_Federal_Reserve_System.svg.png',
  },
  {
    country: 'Uruguay',
    central_bank: 'Central Bank of Uruguay',
    central_bank_alt: 'Banco Central del Uruguay',
    title: 'Central_Bank_of_Uruguay',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Coat_of_arms_of_Uruguay.svg/85px-Coat_of_arms_of_Uruguay.svg.png',
  },
  {
    country: 'Uzbekistan',
    central_bank: 'Central Bank of the Republic of Uzbekistan',
    central_bank_alt:
      "O'zbekiston Respublikasi Markaziy Banki / Ўзбекистон Республикаси Марказий Банки",
    title: 'Central_Bank_of_Uzbekistan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/85px-Emblem_of_Uzbekistan.svg.png',
  },
  {
    country: 'Vanuatu',
    central_bank: 'Reserve Bank of Vanuatu',
    central_bank_alt: 'Reserve Bank blong Vanuatu',
    title: 'Reserve_Bank_of_Vanuatu',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coat_of_arms_of_Vanuatu.svg/85px-Coat_of_arms_of_Vanuatu.svg.png',
  },
  {
    country: 'Venezuela',
    central_bank: 'Central Bank of Venezuela',
    central_bank_alt: 'Banco Central de Venezuela',
    title: 'Central_Bank_of_Venezuela',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Banco_Central_de_Venezuela_logo.svg/150px-Banco_Central_de_Venezuela_logo.svg.png',
  },
  {
    country: 'Vietnam',
    central_bank: 'State Bank of Vietnam',
    central_bank_alt: null,
    title: 'State_Bank_of_Vietnam',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Logo_of_State_Bank_of_Vietnam.svg/165px-Logo_of_State_Bank_of_Vietnam.svg.png',
  },
  {
    country: 'Wallis and Futuna',
    central_bank: 'Overseas Issuing Institute',
    central_bank_alt: "Institut d'émission d'Outre-Mer",
    title: "Institut_d'émission_d'outre-mer",
    image: 'https://upload.wikimedia.org/wikipedia/fr/3/33/Logo_IEDOM.gif',
  },

  {
    country: 'West African Economic and Monetary Union',
    central_bank: 'Central Bank of West African States',
    central_bank_alt:
      "Banque Centrale des États de l'Afrique de l'Ouest, BCEAO",
    title: 'Central_Bank_of_West_African_States',
    image: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
  },
  {
    country: 'Yemen',
    central_bank: 'Central Bank of Yemen',
    central_bank_alt: 'البنك المركزي اليمني',
    title: 'Central_Bank_of_Yemen',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Emblem_of_Yemen.svg/110px-Emblem_of_Yemen.svg.png',
  },
  {
    country: 'Zambia',
    central_bank: 'Bank of Zambia',
    central_bank_alt: null,
    title: 'Bank_of_Zambia',
    image:
      'https://upload.wikimedia.org/wikipedia/en/a/af/BANK_OF_ZAMBIA_LOGO.jpg',
  },
  {
    country: 'Zimbabwe',
    central_bank: 'Reserve Bank of Zimbabwe',
    central_bank_alt: null,
    title: 'Reserve_Bank_of_Zimbabwe',
    image:
      'https://upload.wikimedia.org/wikipedia/en/0/0d/RESERVE_BANK_OF_ZIMBABWE_LOGO.png',
  },
  {
    country: 'Abkhazia',
    central_bank: 'National Bank of the Republic of Abkhazia',
    central_bank_alt: 'Аҧсны Аҳәынҭқарра Амилаҭтә Банк',
    title: 'National_Bank_of_the_Republic_of_Abkhazia',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Nbra.svg/165px-Nbra.svg.png',
  },
  {
    country: 'Artsakh',
    central_bank: 'Artsakhbank',
    central_bank_alt: null,
    title: 'Artsakhbank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Coat_of_arms_of_Artsakh.svg/85px-Coat_of_arms_of_Artsakh.svg.png',
  },
  {
    country: "Donetsk People's Republic",
    central_bank: 'Central Republican Bank',
    central_bank_alt: 'Центральный Республиканский Банк',
    title: null,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Official_Donetsk_People%27s_Republic_coat_of_arms.svg/128px-Official_Donetsk_People%27s_Republic_coat_of_arms.svg.png',
  },
  {
    country: 'Republic of Kosovo',
    central_bank: 'Central Bank of Kosovo',
    central_bank_alt: 'Banka Qendrore e Kosovës',
    title: 'Central_Bank_of_Kosovo',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/BankaeKosoves.svg/240px-BankaeKosoves.svg.png',
  },
  {
    country: "Luhansk People's Republic",
    central_bank: 'Gosbank',
    central_bank_alt: 'Госбанк, Государственный банк',
    title: null,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/COA_LPR_oct_2014.svg/128px-COA_LPR_oct_2014.svg.png',
  },
  {
    country: 'Northern Cyprus',
    central_bank: 'Central Bank of the Turkish Republic of Northern Cyprus',
    central_bank_alt: 'Kuzey Kıbrıs Türk Cumhuriyeti Merkez Bankası',
    title: 'Central_Bank_of_the_Turkish_Republic_of_Northern_Cyprus',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Coat_of_arms_of_the_Turkish_Republic_of_Northern_Cyprus.svg/128px-Coat_of_arms_of_the_Turkish_Republic_of_Northern_Cyprus.svg.png',
  },
  {
    country: 'South Ossetia',
    central_bank: 'National Bank of South Ossetia',
    central_bank_alt: null,
    title: null,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Coat_of_arms_of_South_Ossetia.svg/128px-Coat_of_arms_of_South_Ossetia.svg.png',
  },
  {
    country: 'Somaliland',
    central_bank: 'Bank of Somaliland',
    central_bank_alt: 'Baanka Somaliland',
    title: 'Bank_of_Somaliland',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BankofSomalilandlogo.png/360px-BankofSomalilandlogo.png',
  },
  {
    country: 'Taiwan',
    central_bank: 'Central Bank of the Republic of China (Taiwan) ',
    central_bank_alt: '中華民國中央銀行',
    title: 'Central_Bank_of_the_Republic_of_China_(Taiwan)',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ROC_Central_Bank_Seal.svg/300px-ROC_Central_Bank_Seal.svg.png',
  },
  {
    country: 'Transnistria',
    central_bank: 'Transnistrian Republican Bank',
    central_bank_alt: 'Приднестровский Республиканский Банк',
    title: 'Transnistrian_Republican_Bank',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coat_of_arms_of_Transnistria.svg/85px-Coat_of_arms_of_Transnistria.svg.png',
  },
];

export default centralBanks;
