// credit: https://github.com/GoogleChromeLabs/sample-pie-shop/blob/master/src/data/products.json
const products = [
  {
    id: 'GGOEAFKA087499',
    name: 'Android Small Removable Sticker Sheet',
    description:
      'Show your Android pride by placing these 8 fun stickers on your technology products or accessories!',
    features: '<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>',
    price: '2.99',
    keywords:
      'Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet',
    url: 'Android+Small+Removable+Sticker+Sheet',
    category: 'accessories',
    subcategory: 'accessories'
  },
  {
    id: 'GGOEAFKA087599',
    name: 'Android Large Removable Sticker Sheet',
    description:
      'Show your quirky side by placing these fun Android stickers on your personal belongings.',
    features: '<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>',
    price: '2.99',
    keywords:
      'Android Large Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, large sticker sheet, android large sticker sheets, Android Sheet',
    url: 'Android+Large+Removable+Sticker+Sheet',
    category: 'accessories',
    subcategory: 'accessories'
  },
  {
    id: 'GGOEGEBK094499',
    name: 'Google Bot',
    description:
      'This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.',
    features:
      '<p>Made of wood</p>\n<p>2.5 x 2.5 inch cube</p>\n<p>6.75 inch tall</p>\n<p>Recommended for Ages 3+</p>',
    price: '9.99',
    keywords:
      'Google Bot, google bot, bots, natural bots, wood bot, google wood bot',
    url: 'Google+Bot',
    category: 'accessories',
    subcategory: 'accessories'
  },
  {
    id: 'GGOEGFKA086699',
    name: 'Google Emoji Sticker Pack',
    description:
      "Who doesn't use emojis? Decorate your space with your current mood!",
    features:
      '<p>Pack contains two sticker sheets</p>\n<p>Each Sheet has different emojis</p>\n<p><span>Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.</span></p>',
    price: '4.99',
    keywords:
      'Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers',
    url: 'Google+Emoji+Sticker+Pack+2+sheet',
    category: 'accessories',
    subcategory: 'accessories'
  },
  {
    id: 'GGOEWCKQ085457',
    name: 'Waze Pack of 9 Decal Set',
    description:
      "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
    features:
      '<p>Pack of 9 includes:</p>\n<p>3 Waze Mood Happy decals</p>\n<p>3 Waze Mood Original decals</p>\n<p>3 Waze Mood Ninja decals</p>',
    price: '16.99',
    keywords:
      'Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze',
    url: 'Waze+Pack+of+9+decal+set',
    category: 'accessories',
    subcategory: 'accessories'
  },
  {
    id: 'GGOEGHPB071610',
    name: 'Google Twill Cap',
    description:
      'Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.',
    features:
      '<p>Heavy weight brushed twill</p>\n<p>Adjustable velcro closure</p>\n<p>One size fits all</p>',
    price: '10.99',
    keywords:
      'Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps',
    url: 'Google+Twill+Cap',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEGHPJ094299',
    name: 'Google Fold-over Beanie Grey',
    description:
      'Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.',
    features: '<p>100% acrylic</p>\n<p>One size fits all</p>',
    price: '9.99',
    keywords:
      'Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear',
    url: 'Google+Fold+over+beanie+grey',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEGHPJ094399',
    name: 'Google Pom Beanie Charcoal',
    description:
      'Stay stylish and warm this winter season with this Google Pom Beanie.',
    features:
      '<p>Thick knit texture outside</p>\n<p>Soft plush inside</p>\n<p>Faux fur pom on top</p>',
    price: '19.99',
    keywords:
      'Google Pom Beanie Charcoal, pom beanie, charcoal pom beanies, Google Beanies, Pom Beanies, charcoal Google pom, beanies, headgear',
    url: 'Google+Pom+Beanie+Charcoal',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEWXXX0827',
    name: "Waze Women's Short Sleeve Tee",
    description:
      'Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.',
    features:
      '<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>',
    price: '18.99',
    keywords:
      "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
    url: 'Waze+Womens+Short+Sleeve+Tee',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEWXXX0828',
    name: "Waze Men's Short Sleeve Tee",
    description:
      'Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.',
    features:
      '<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>',
    price: '18.99',
    keywords:
      "Waze Men's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Men's Tees, Waze Men's tee, waze mens tees, waze mens tee, waze short sleeve tees, waze short sleeve tee",
    url: 'Waze+Mens+Short+Sleeve+Tee',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEGBRJ037399',
    name: 'Google Rucksack',
    description:
      'Choose to carry your belongings and presentations to your next meeting with the Google Mistral Rucksack!',
    features:
      '<p>Size: 13.5 x 6.5 x 17.5</p>\n<p>Ergonomic padded shoulder straps</p>\n<p>Large main compartment with internal laptop compartment</p>\n<p>Easy Snap and Adjustable straps for main compartment access</p>',
    price: '79.99',
    keywords:
      'Mistral Rucksack, Mistral backpack, Mistral Backpack, backpack, bags, bag, Backpack, backpacks, packs, office gear, Bag, Bags, Google Backpack, google backpack, g, google',
    url: 'Google+Rucksack',
    category: 'bags',
    subcategory: 'bags'
  },
  {
    id: 'GGOEGDHJ087399',
    name: 'Google Rolltop Backpack Blue',
    description:
      "This stylish Google rolltop backpack will help keep all of your favorite items organized and together while you're on the move.",
    features:
      '<p>Size: 12 inches wide x 18.5 inches height x 5.3 inches depth</p>\n<p>TPU Liner</p>\n<p>Internal Organizer for Pens, Phones and Other Small Items</p>\n<p>Large Main Compartment</p>\n<p>Flap Closure for Quick Access or Roll-Top for Expandable Volume and Weather Protection</p>',
    price: '149.99',
    keywords:
      'Google Rolltop Backpack Blue, google backpack, google blue backpack, blue rolltop, Google rolltop, Blue Backpack, backpack, rolltop',
    url: 'Google+Rolltop+Backpack+Blue',
    category: 'bags',
    subcategory: 'bags'
  },
  {
    id: 'GGOEADHB085999',
    name: 'Android Trace Bottle Black',
    description:
      'Stay hydrated throughout the day with this Android Trace Bottle. 17 oz.',
    features:
      '<p>17 oz. double wall thermal bottle</p>\n<p>Stainless steel</p>\n<p>Threaded stainless steel insulated lid</p>\n<p>Copper vacuum insulation</p>',
    price: '23.99',
    keywords:
      'Android Black Force 17 oz Bottle, android bottles, android black bottle, android 17 oz bottle, android black force bottle, android 17 oz Android Black Force Bottle, Android Trace Bottle Black',
    url: 'Android+Black+Force+17oz+bottle',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEADHB086299',
    name: 'Android Trace Mug Black',
    description:
      'Start your day off right with that perfect cup of coffee using this Android Trace Mug Black.',
    features: '<p>12 oz. stoneware</p>\n<p>Matte finish</p>',
    price: '9.99',
    keywords:
      'Android Black C-Handle Mug, android mugs, black android mug, c handle mug, android c handle,Android Trace Mug Black,',
    url: 'Android+Trace+Mug+Black',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGDHC087099',
    name: 'Google Thermal Bottle Blue',
    description:
      'Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.',
    features:
      '<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>',
    price: '23.99',
    keywords:
      'Google Thermal Bottle Blue, Google, google thermal bottle blue, Google Blue, Thermal Bottle Blue,',
    url: 'Google+Thermal+Bottle+Blue',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGDHH087299',
    name: 'Google Thermal Bottle Green',
    description:
      'Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.',
    features:
      '<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>',
    price: '23.99',
    keywords:
      'Google Thermal Bottle Green, Google, google thermal bottle green, Google Green, Thermal Bottle Green,',
    url: 'Google+Thermal+Bottle+Green',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGDHQ093399',
    name: 'Google Thermal Bottle White',
    description:
      'Insulated to keep contents hot or cold for hours, this Google bottle is a great year-round companion. 17 oz.',
    features:
      '<p>17 oz</p>\n<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>',
    price: '23.99',
    keywords:
      'Google Thermal Bottle White , Google bottles, white bottle, thermal bottle white, thermal bottle with box, thermal bottle white with box, Google drinkware',
    url: 'Google+Thermal+Bottle+White+with+box',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGDHR086999',
    name: 'Google Thermal Bottle Red',
    description:
      'Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.',
    features:
      '<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>',
    price: '23.99',
    keywords:
      'Google Thermal Bottle Red, Google, google thermal bottle red, Google Red, Thermal Bottle Red,',
    url: 'Google+Thermal+Bottle+Red',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGDHT087199',
    name: 'Google Thermal Bottle Yellow',
    description:
      'Insulated to keep contents hot or cold for hours, this beautiful bottle is a great year-round companion. 17 oz.',
    features:
      '<p>Double wall construction</p>\n<p>Stainless steel thermal bottle with copper vacuum insulation</p>\n<p>Threaded stainless steel lid</p>',
    price: '23.99',
    keywords:
      'Google Thermal Bottle Yellow, Google, google thermal bottle yellow, Google Yellow, Thermal Bottle Yellow,',
    url: 'Google+Thermal+Bottle+Yellow',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGDWQ087699',
    name: 'Google Hub Mug White',
    description: 'Enjoy a cup of coffee or tea with this Google stoneware mug.',
    features:
      '<p>16 oz. Stoneware</p>\n<p>Hand wash recommended</p>\n<p>Microwave safe</p>',
    price: '12.99',
    keywords:
      'Google Hub Mug White, Google Mugs, hub mug white, Google White Mugs, mugs, white mug, hub white mug, Google White Hub Mug',
    url: 'Google+Hub+Mug+White',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEYDHB086099',
    name: 'YouTube Transmission Bottle Black',
    description:
      'Keep your favorite drink cold during those long workouts with this YouTube Transmission Bottle. 17 oz.',
    features:
      '<p>17 oz. double wall thermal bottle</p>\n<p>Stainless steel</p>\n<p>Threaded stainless steel insulated lid</p>\n<p>Copper vacuum insulation</p>',
    price: '23.99',
    keywords:
      'Play Black Force 17oz Bottle, youtube 17 oz bottle, play back bottle, play back force bottle, 17 oz bottles, youtube black force YouTube Play Black Force Bottle YouTube Transmission Bottle Black',
    url: 'Play+Black+Force+17oz+bottle',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGAPB087899',
    name: 'Google Snapback Black Cap',
    description:
      'Stay shaded on those sunny days wearing this stylish Google snapback hat.',
    features: '<p>Snapback Closure</p>\n<p>One size fits most</p>',
    price: '19.99',
    keywords:
      'Google Snapback Black Cap, google caps, google snapback, google black cap, snapback black caps, google cap, black cap, black hat, Google Hat',
    url: 'Google+Snapback+Black+Cap',
    category: 'apparel',
    subcategory: 'headgear'
  },
  {
    id: 'GGOEGAPL087999',
    name: 'Google Snapback Navy Cap',
    description:
      'Stay shaded on those sunny days wearing this stylish Google snapback hat.',
    features: '<p>Snapback Closure</p>\n<p>One size fits most</p>',
    price: '19.99',
    keywords:
      'Google Snapback navy Cap, google caps, google snapback, google navy cap, snapback navy caps, google cap, navy cap, navy hat, Google Hat',
    url: 'Google+Snapback+Navy+Cap',
    category: 'apparel',
    subcategory: 'headgear'
  },
  {
    id: 'GGOEGAMC088199',
    name: 'Google Cappy Bib Blue',
    description:
      'Keep your little Googler stain free with this Google Cappy Bib.',
    features: '<p>Machine washable</p>\n<p>100% cotton</p>',
    price: '13.99',
    keywords:
      'Google Cappy Bib Blue, Google bibs, blue bib, cappy bib, cappy blue bib, blue google bib',
    url: 'Google+Cappy+Bib+Blue',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGAMC088399',
    name: 'Google Mustachio Bib Blue',
    description:
      'Avoid food ending up on your little one with this Google Mustachio Bib.',
    features: '<p>Machine washable</p>\n<p>100% cotton</p>',
    price: '13.99',
    keywords:
      'Google Mustachio Bib Blue, Google bibs, blue bib, mustachio bib, mustachio blue bib, blue google bib',
    url: 'Google+Mustachio+Bib+Blue',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGAMQ088099',
    name: 'Google Cappy Bib White',
    description:
      'Keep your little Googler stain free with this Google Cappy Bib.',
    features: '<p>Machine washable</p>\n<p>100% cotton</p>',
    price: '13.99',
    keywords:
      'Google Cappy Bib White, Google bibs, white bib, cappy bib, cappy white bib, white google bib',
    url: 'Google+Cappy+Bib+White',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGAMQ088299',
    name: 'Google Mustachio Bib White',
    description:
      'Avoid food ending up on your little one with this Google Mustachio Bib.',
    features: '<p>Machine washable</p>\n<p>100% cotton</p>',
    price: '13.99',
    keywords:
      'Google Mustachio Bib White, Google bibs, white bib, mustachio bib, cappy white bib, white google bib',
    url: 'Google+Mustachio+Bib+White',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGAMR088499',
    name: 'Google Standard Bib Red',
    description: 'Catch the Goo Goo with this Google Bib.',
    features: '<p>Machine washable</p>\n<p>100% cotton</p>',
    price: '13.99',
    keywords:
      'Google Standard Bib Red, google bibs, standard red bib, google red bib, standard bib red, google standard bib, google bib,',
    url: 'Google+Standard+Bib+Red',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0886',
    name: 'Google Protector Onesie Navy',
    description:
      'This Google Protector Onesie moves with your baby with non-binding sleeves for full freedom of movement.',
    features:
      '<p>100% cotton</p>\n<p>Snaps at crotch</p>\n<p>Non-binding sleeves and neck</p>',
    price: '25.99',
    keywords:
      'Google Protector Onesie Navy, protector with freedom, non-bin sheets, removable sticker sheets, protector onesie navy, google protector non-bin Sheets, Google Navy',
    url: 'Google+Protector+Onesie+Navy',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0887',
    name: 'Google Standard Onesie Grey',
    description:
      'This Google onesie moves with your baby with non-binding sleeves for full freedom of movement.',
    features:
      '<p>100% cotton</p>\n<p>Snaps at crotch</p>\n<p>Non-binding sleeves and neck</p>',
    price: '25.99',
    keywords:
      'Google Standard Onesie Grey, google grey onesie, google standard grey onesie, standard onesie grey, google onesie',
    url: 'Google+Standard+Onesie+Grey',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0888',
    name: 'Google Standard Onesie Green',
    description:
      'This Google onesie moves with your baby with non-binding sleeves for full freedom of movement.',
    features:
      '<p>100% cotton</p>\n<p>Snaps at crotch</p>\n<p>Non-binding sleeves and neck</p>',
    price: '25.99',
    keywords:
      'Google Standard Onesie Green, google green onesie, google standard green onesie, standard onesie green, google onesie',
    url: 'Google+Standard+Onesie+Green',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0889',
    name: 'Google Kids Tee Blue',
    description:
      'Simple, stylish, and comfy — this Google kids t-shirt is 100% cotton for gentle comfort and ease of care.',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'Google Kids Tee Blue, google kids, google tee blue, blue tee, google blue tee, google kids tee, kids blue google tee',
    url: 'Google+Kids+Tee+Blue',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0890',
    name: 'Google Kids Tee Green',
    description:
      'Simple, stylish, and comfy — this Google kids t-shirt is 100% cotton for gentle comfort and ease of care.',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'Google Kids Tee Green, google kids, google tee green, green tee, google green tee, google kids tee, kids green google tee',
    url: 'Google+Kids+Tee+Green',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0891',
    name: 'Google Kids Tee White',
    description:
      'Simple, stylish, and comfy — this Google kids t-shirt is 100% cotton for gentle comfort and ease of care.',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'Google Kids Tee White, google kids, google tee white, white tee, google white tee, google kids tee, kids white google tee',
    url: 'Google+Kids+Tee+White',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0892',
    name: 'Google Trike Tee Black',
    description:
      'This Google t-shirt is perfect for a kid to have fun and play in — 100% cotton comfort, short sleeves, and Google decoration!',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'Google Trike Tee Black, google tee black, google trike tee, black trike tee, google tee, trike tee black, google tees',
    url: 'Google+Trike+Tee+Black',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0893',
    name: 'Google Flower Tee Purple',
    description:
      'This Google t-shirt is everything a demanding kid could want — 100% cotton comfort, short sleeves, and Google decoration!',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'Google Flower Tee Purple, Google Tee, Google Purple Tee, Flower Tee Purple, google flower tee',
    url: 'Google+Flower+Tee+Purple',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEGXXX0894',
    name: 'Google Protector Tee Navy',
    description:
      'This 100% cotton Google Protector is perfect for school, fun or lounging for kids.',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'Google Protector Tee Navy, google fun, protector tee navy, protector fun, google protector fun, Google Navy',
    url: 'Google+Tee+Yellow',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEYXXX0895',
    name: 'YouTube Kids Tee White',
    description:
      'This 100% cotton YouTube short sleeve t-shirt is perfect for kids to wear to school or while playing.',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'YouTube Kids Tee White, YouTube Tee, YouTube Kids Tee, YouTube White Tee, Kids Tee White, White Kids Tee, YouTube Kids Tee White',
    url: 'YouTube+Kids+Tee+White',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEYXXX0896',
    name: 'YouTube Kids Tee Black',
    description:
      'This 100% cotton YouTube short sleeve t-shirt is perfect for kids to wear to school or while playing.',
    features:
      '<p>100% cotton</p>\n<p>Short sleeves</p>\n<p>Crew neck design</p>',
    price: '19.99',
    keywords:
      'YouTube Kids Tee Black, YouTube Tee, YouTube Kids Tee, YouTube Black Tee, Kids Tee Black, Black Kids Tee, YouTube Kids Tee Black',
    url: 'YouTube+Kids+Tee+Black',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEYXXX0897',
    name: 'YouTube Kids Onesie White',
    description:
      'This 100% cotton YouTube Onesie for your baby will keep them comfortable with non-binding sleeves for full freedom of movement.',
    features:
      '<p>100% cotton</p>\n<p>Snaps at crotch</p>\n<p>Non-binding sleeves and neck</p>',
    price: '25.99',
    keywords:
      'YouTube Kids Onesie White, YouTube Kids White, YouTube Onesie White, YouTube Onesie, kids onesie white, youtube',
    url: 'YouTube+Kids+Onesie+White',
    category: 'apparel',
    subcategory: "kid's"
  },
  {
    id: 'GGOEAKDH019899',
    name: 'Windup Android',
    description:
      'Go ahead and wind up in true Android fashion with this fun windup toy!',
    features:
      '<p>Cool android shape</p>\n<p>Wind up and watch it walk forward</p>\n<p>Has over-wind protection</p>\n<p>Fun wind-up robot for ages 3 and above</p>',
    price: '3.99',
    keywords:
      'Windup Android, android toy, android windup toy, windup android toy, Windup Android toy, Google Windup Android Toy, google android toy, google, Google, Google Android Toy, Google android toy, android toy',
    url: 'Windup+Android',
    category: 'accessories',
    subcategory: 'lifestyle'
  },
  {
    id: 'GGOEGAAX0037',
    name: 'Google Sunglasses',
    description:
      'Although these are no Google glasses, they will still make your day fun at the beach!',
    features:
      '<p>Made of Polycarbonate Material</p>\n<p>UV400 Lenses Provide 100% UVA And UVB Protection</p>\n<p>Come in the following colors: Red, Green, Blue</p>',
    price: '3.50',
    keywords:
      'Malibu Sunglasses, sunglasses, apparel, fun, Malibu sunglasses, sunglass, sun, weather glasses, weather, Weather, Google, g, google, google malibu sunglasses, Google Malibu sunglasses',
    url: 'Malibu+Sunglasses',
    category: 'accessories',
    subcategory: 'lifestyle'
  },
  {
    id: 'GGOEGFSR022099',
    name: 'Google Mini Kick Ball',
    description:
      'Kick this Google Mini Kick Ball around to take a break from the hustle and bustle. Fun for all ages!',
    features:
      '<p>Classic hacky sack type ball</p>\n<p>Google Logo printed on the front</p>\n<p>2 inch diameter</p>',
    price: '1.99',
    keywords:
      'Kick Ball, Full Color Digital, Full color digital kick ball, kick ball, Kick Ball, Google Kick Ball, Google Kick Balls, kick balls, fitness, Fitness, Google kick ball, google, google kick ball, google Kick Ball, Google Kick Ball, Google Mini Kick Ball, mini kick, mini ball',
    url: 'Google+Kick+Ball',
    category: 'accessories',
    subcategory: 'lifestyle'
  },
  {
    id: 'GGOEGPJC019099',
    name: '7 inch Dog Frisbee',
    description:
      'Take your furry friend to the park and play the day away with this 7 inch Dog Safe Flyer!',
    features:
      '<p>Dog-safe &amp; Child safe Flyer</p>\n<p>Molded from soft, durable polyethylene</p>\n<p>Made in the USA FDA Compliant</p>',
    price: '1.50',
    keywords:
      '7 inch Dog Safe Flyer, flyer, flyers, dog flyer, dog toys, dog, pet toy, google pet toy, Google pet toy, google pet toy, pet safe flyer, flyers',
    url: '7+inch+Dog+Safe+Flyer+bl',
    category: 'accessories',
    subcategory: 'lifestyle'
  },
  {
    id: 'GGOEAOCB092799',
    name: 'Android Large Trace Journal Black',
    description:
      'This Android Large Trace Journal provides an escape and a chance to write down your latest inspirations!',
    features:
      '<p>Smooth Hardcover</p>\n<p>192 White, College Ruled Pages</p>\n<p>Elastic Band Closure</p>\n<p>Ribbon Marker</p>\n<p>Gusseted Back Pocket</p>\n<p>Size: Medium, 5.5 x 8.25 inch</p>',
    price: '15.99',
    keywords:
      'Android Large Trace Journal Black, android large journals, large trace journals, android large journals, android black journals, android large journals',
    url: 'Android+Large+Trace+Journal+Black',
    category: 'office',
    subcategory: 'notebooks & Journals'
  },
  {
    id: 'GGOEAOCB092899',
    name: 'Android Small Trace Journal Black',
    description:
      'This Android Small Trace Journal provides an escape and a chance to write down your latest inspirations!',
    features:
      '<p>Smooth Hardcover</p>\n<p>192 White, College Ruled Pages</p>\n<p>Elastic Band Closure</p>\n<p>Ribbon Marker</p>\n<p>Gusseted Back Pocket</p>\n<p>Size: Small, 4 x 6 inch</p>',
    price: '12.99',
    keywords:
      'Android Small Trace Journal Black, android small journals, small trace journals, android small journals, android black journals, android small journals',
    url: 'Android+Small+Trace+Journal+Bl',
    category: 'office',
    subcategory: 'notebooks & Journals'
  },
  {
    id: 'GGOEGOCL092999',
    name: 'Google Small Standard Journal Navy',
    description:
      'This Google Small Standard Journal is perfect to keep on your desk for those great ideas that pop into your head.',
    features:
      '<p>Smooth Hardcover</p>\n<p>192 White, College Ruled Pages</p>\n<p>Elastic Band Closure</p>\n<p>Ribbon Marker</p>\n<p>Gusseted Back Pocket</p>\n<p>Size: Small, 4 x 6 inch</p>',
    price: '12.99',
    keywords:
      'Google small standard Journal navy, small journal navy, google journals, google navy journals, google standard journal navy, standard navy journals',
    url: 'Google+Small+Standard+Journal+Navy',
    category: 'office',
    subcategory: 'notebooks & Journals'
  },
  {
    id: 'GGOEYOCB092699',
    name: 'YouTube Transmission Journal Black',
    description:
      'This YouTube Transmission Journal is a convenient tool to collect your thoughts and doodles throughout the day.',
    features:
      '<p>Smooth Hardcover</p>\n<p>192 White, College Ruled Pages</p>\n<p>Elastic Band Closure</p>\n<p>Ribbon Marker</p>\n<p>Gusseted Back Pocket</p>',
    price: '15.99',
    keywords:
      'YouTube Transmission Journal Black, black youtube journal, transmission youtube journals, black youtube transmission journals, youtube journals,',
    url: 'YouTube+Transmission+Journal+Black',
    category: 'office',
    subcategory: 'notebooks & Journals'
  },
  {
    id: 'GGOEGFKQ020399',
    name: 'Google Laptop and Cell Phone Stickers',
    description:
      'Show your Google support by posting these stickers on your belongings!',
    features:
      '<p>Google Stickers</p>\n<p>White Colored Sticker Sheet</p>\n<p>8.5 x 11 inch Sticker Sheet</p>',
    price: '2.99',
    keywords:
      'Google Laptop and Cell Phone Stickers, stickers, Sticker, Google Stickers, Google Sticker, google stickers, cell phone stickers, cell phone, cell, phone, phones, Phone, Phone, Google cell phone, google cell phone, Google Cell phones, google cell phones, Google, google, Google, g, google cell phone accessories, accessory',
    url: 'Google+Laptop+and+Cell+Phone+Stickers',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEGGOA017399',
    name: 'Maze Pen',
    description:
      'Attending a meeting will never be the same! This fun-filled maze pen features two small metal balls that move through the maze.',
    features:
      '<p>Contains two metal balls that move through the maze</p>\n<p>Medium point black refill</p>',
    price: '0.99',
    keywords:
      'Pen, Pens, pen, pens, Maze Pen, Maze Pens, pack of pens, pack of Maze Pens, pack of maze pens, writing utensil, writing utensils, ink pen, ink pens, Ink pen, Ink Pens, Pen writes in ink, fun pen, office, Office, offices, Offices, Google Maze Pens, Google maze pen, Google Maze Pens',
    url: 'Maze+Pen',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEGOAB086399',
    name: 'Google Tri Pen Black',
    description:
      'Switch between blue ink, black ink, pencil or even write on your tablet using the stylus with this 5-in-1 Tri Pen.',
    features:
      '<p>Brass barrel pen</p>\n<p>Continuous twist technology</p>\n<p>Black ballpoint</p>\n<p>Blue ballpoint</p>\n<p>0.5mm mechanical pencil</p>\n<p>Touch stylus</p>\n<p>Eraser</p>',
    price: '15.99',
    keywords:
      'Pixel Pen — Black, pens, pixel pen, black pixel pen, Black Pixel Pens,  Google Pixel Pen Black, Google Tri Pen Black, ',
    url: 'Pixel+Pen+Black',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEGOAJ086399',
    name: 'Google Tri Pen Silver',
    description:
      'You multitask like a boss. Now your writing instrument can keep up. This 5-in-1 Tri Pen is a great multi functional pen.',
    features:
      '<p>Brass barrel pen</p>\n<p><span>Continuous</span> twist technology</p>\n<p>Black ballpoint</p>\n<p>Blue ballpoint</p>\n<p>0.5mm mechanical pencil</p>\n<p>Touch stylus</p>\n<p>Eraser</p>',
    price: '15.99',
    keywords:
      'Pixel Pen — Silver, pen silver, silver pixel, silver pens, pixel, google pens, google pixel pens Google Pixel Pen Silver, Google Tri Pen Silver',
    url: 'Pixel+Pen+Silver',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEGOAR013099',
    name: 'Google Stylus Pen w/ LED Light',
    description:
      'Get yourself a great multitasking tool! Write a note, sign a tablet, and shine a light with this Google Stylus Pen w/LED Light!',
    features:
      '<p>Aluminum cap off ballpoint pen</p>\n<p>LED light</p>\n<p>Stylus that works with touch screen devices</p>\n<p>Three mercury-free AG3/LR41 batteries included</p>',
    price: '5.50',
    keywords:
      'Ballpoint Pen/Stylus/LED Light, LED Light, Pen, pens, Pens, Google Ballpoint Pen/LED Light, ballpoint pen, Google Ballpoint Pen/Stylus/LED Light, stylus, Stylus, LED Light, LED lights, led, LED',
    url: 'Google+Stylus+Pen+w+LED+Light',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEGOCJ093999',
    name: 'Google Large Standard Journal Grey',
    description:
      'Use all 192 pages to store anything from meeting notes to that next big idea in this Google hard cover notebook.',
    features:
      '<p>Hard Cover</p>\n<p>Elastic Band Closure with Ribbon Page Marker</p>\n<p>192 White, College Ruled Pages</p>\n<p>Size: 5.5 x 8.5 inch</p>',
    price: '15.99',
    keywords:
      'Google Large Standard Journal Grey, google journal, google large standard journal, google large grey journal, google grey journal Google Large Standard Journal Grey',
    url: 'Google+Large+Standard+Journal+Grey',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEGOCL087799',
    name: 'Google Large Standard Journal Navy',
    description:
      'Use all 192 pages to store anything from meeting notes to that next big idea in this Google hard cover notebook.',
    features:
      '<p>Hard Cover</p>\n<p>Elastic Band Closure with Ribbon Page Marker</p>\n<p>192 White, College Ruled Pages</p>\n<p>Size: 5.5 x 8.5 inch</p>',
    price: '15.99',
    keywords:
      'Google Large Standard Journal Navy, google journal, google large standard journal, google large navy journal, google navy journal',
    url: 'Google+Large+Standard+Journal+Navy',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEGOLC014299',
    name: 'Google Metallic Notebook Set',
    description: 'A stunning notebook set that will inspire all writers!',
    features:
      '<p>Spiral bound 70-page lined notebook with 2.0 mm thick solid metallic textured cover</p>\n<p>Elastic pen strap, includes color coordinating</p>\n<p>Economy Stylus with black ink and capacitive touch stylus</p>',
    price: '5.99',
    keywords:
      'Blue Metallic Textured Spiral Notebook Set , Mercury Notebook Sets, notebook, notebooks, journal, journals, google mercury notebook set, mercury notebooks, office, office supplies',
    url: 'Google+Metallic+Notebook+Set',
    category: 'office',
    subcategory: 'office'
  },
  {
    id: 'GGOEWFKA082999',
    name: 'Waze Baby on Board Window Decal',
    description:
      "Get on board with the Waze wave and let everyone know you're carrying precious cargo with this new Waze inchBaby on Board inch decal.",
    features: '<p>Vinyl decal</p>\n<p>6 inch size inch</p>',
    price: '2.99',
    keywords:
      'Waze Baby on Board Window Decal, Waze Decals, waze baby on board window decal, waze baby decals',
    url: 'Waze+Baby+on+Board+Window+Decal',
    category: 'shop by brand',
    subcategory: 'waze'
  },
  {
    id: 'GGOEWFKA083099',
    name: 'Waze Mood Happy Window Decal',
    description:
      "If you're happy and you know it, show it off with this Waze happy mood window decal.",
    features: '<p>Vinyl decal</p>\n<p>4 inch size inch</p>',
    price: '1.99',
    keywords:
      'Waze Mood Happy Window Decal, Waze Decals, Waze Happy Window Decals, waze decal, waze decals',
    url: 'Waze+Mood+Happy+Window+Decal',
    category: 'shop by brand',
    subcategory: 'waze'
  },
  {
    id: 'GGOEWFKA083199',
    name: 'Waze Mood Original Window Decal',
    description:
      "You're an original. Let everyone know with this original Waze mood window decal.",
    features: '<p>Vinyl decal</p>\n<p>4 inch size inch</p>',
    price: '1.99',
    keywords:
      'Waze Mood Original Window Decal, Waze Decals, Waze Decal, waze mood original window decal, waze mood original window decals',
    url: 'Waze+Mood+Original+Window+Decal',
    category: 'shop by brand',
    subcategory: 'waze'
  },
  {
    id: 'GGOEWFKA083299',
    name: 'Waze Mood Ninja Window Decal',
    description:
      "You're a master of stealth. So let everyone know! Get this Waze ninja mood window decal and advertise your commitment to the secret ninja ways!",
    features: '<p>Vinyl decal</p>\n<p>4 inch size inch</p>',
    price: '1.99',
    keywords:
      'Waze Mood Ninja Window Decal, Waze Decals, Waze Decal, waze mood ninja window decal, waze mood ninja window decals',
    url: 'Waze+Mood+Ninja+Window+Decal',
    category: 'shop by brand',
    subcategory: 'waze'
  },
  {
    id: 'GGOEWXXX0834',
    name: "Waze Women's Typography Short Sleeve Tee",
    description:
      'Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.',
    features:
      '<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>',
    price: '18.99',
    keywords:
      "Waze Women's Typography Short Sleeve Tee, Waze Women's Tees, Waze Typography Tees, Waze Short Sleeve Tees, Waze Tees, Waze tee, waze women's typography short sleeve tee, waze short sleeve tees women's, women's waze tees,",
    url: 'Waze+Womens+Typography+Short+Sleeve+Tee',
    category: 'shop by brand',
    subcategory: 'waze'
  },
  {
    id: 'GGOEWXXX0835',
    name: "Waze Men's Typography Short Sleeve Tee",
    description:
      'Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.',
    features:
      '<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>',
    price: '18.99',
    keywords:
      "Waze Men's Typography Short Sleeve Tee, Waze Men's Tees, Waze Typography Tees, Waze Short Sleeve Tees, Waze Tees, Waze tee, waze men's typography short sleeve tee, waze short sleeve tees men's, men's waze tees,",
    url: 'Waze+Mens+Typography+Short+Sleeve+Tee',
    category: 'shop by brand',
    subcategory: 'waze'
  },
  {
    id: 'GGOEGXXX0903',
    name: 'Google Tee White',
    description:
      '100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex sizing.',
    features:
      '<p>Unisex sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>',
    price: '21.99',
    keywords:
      'Google Tee White, google white, google tees, tee white, white tees, Google Tee White',
    url: 'Google+Tee+White',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0904',
    name: 'Google Tee Red',
    description:
      '100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex Sizing.',
    features:
      '<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>',
    price: '21.99',
    keywords:
      'Google Tee Red, google red, google tees, tee red, red tees, Google Tee Red',
    url: 'Google+Tee+Red',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0905',
    name: 'Google Tee Yellow',
    description:
      '100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the Google logo across the chest. Unisex Sizing.',
    features:
      '<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>',
    price: '21.99',
    keywords:
      'Google Tee Yellow, google yellow, google tees, tee yellow, yellow tees, Google Tee Yellow',
    url: 'Google+Tee+Yellow',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0906',
    name: 'Google Tee Green',
    description:
      '100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the google logo across the chest. Unisex sizing.',
    features:
      '<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>',
    price: '21.99',
    keywords:
      'Google Tee Green, google green, google tees, tee green, green tees, Google Tee Green',
    url: 'Google+Tee+Green',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0907',
    name: 'Google Tee Blue',
    description:
      '100% cotton jersey fabric sets this Google t-shirt above the crowd. Features the google logo across the chest. Unisex sizing.',
    features:
      '<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>',
    price: '21.99',
    keywords:
      'Google Tee Blue, google blue, google tees, tee blue, blue tees, Google Tee Blue',
    url: 'Google+Tee+Blue',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0908',
    name: 'Google Bike Tee Navy',
    description:
      'Go for a ride around campus or town with this comfortable Google Bike Tee. Unisex Sizing.',
    features:
      '<p>Unisex Sizing</p>\n<p>50% polyester. 25% cotton. 25% rayon.</p>\n<p>Short sleeve tri-blend crew neck tee</p>\n<p>3.8 oz.</p>',
    price: '21.99',
    keywords:
      'Google Bike Tee Navy, Google Bike Navy, Google Bike Tee, Bike Tee Navy,',
    url: 'Google+Bike+Tee+Navy',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0909',
    name: 'Google Braille Tee Black',
    description:
      'Made of soft tri-blend material, this Google Braille Tee is perfect for all of those sunny days. Unisex sizing.',
    features:
      '<p>Unisex sizing</p>\n<p>50% polyester. 25% cotton. 25% rayon.</p>\n<p>Short sleeve tri-blend crew neck tee</p>\n<p>3.8 oz.</p>',
    price: '21.99',
    keywords:
      'Google Braille Tee Black, Google Braille Tee, Google Tee Black, Braille Tee Black Tee, Google Tee, Black Tee, Google Braille Tee',
    url: 'Google+Braille+Tee+Black',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0910',
    name: "Google Women's Tee Grey",
    description:
      "Stay comfortable and relaxed while coding in this Google Women's Tee made of soft tri-blend material.",
    features:
      '<p>50% polyester. 25% cotton. 25% rayon.</p>\n<p>Short sleeve tri-blend crew neck tee</p>\n<p>3.8 oz.</p>',
    price: '21.99',
    keywords:
      "Google Tee Grey, and google tri, Grey T sheets, tee grey, google grey, Grey T Shirts, Google Grey Google Women's Tee Grey",
    url: 'Google+Womens+Grey+Tee+Grey',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0916',
    name: 'Android Matrix Tee White',
    description:
      'The unique design and soft tri-blend material make for a perfect combination for this Android Matrix Tee. Unisex sizing.',
    features:
      '<p>Unisex Sizing</p>\n<p>50% polyester</p>\n<p>25% cotton</p>\n<p>25% rayon</p>\n<p>3.8 oz.</p>',
    price: '21.99',
    keywords:
      'Android Matrix Tee White, android matrix, android tee white, android white tee, matrix tee white',
    url: 'Android+Matrix+Tee+White',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGXXX0918',
    name: 'YouTube Tee Black',
    description:
      'Keep it simple with the new logo wearing this YouTube tee. Unisex sizing.',
    features:
      '<p>Unisex Sizing</p>\n<p>100% cotton</p>\n<p>Short sleeve crew neck tee</p>\n<p>4.2 oz.</p>',
    price: '21.99',
    keywords:
      'YouTube Tee Black, youtube black tee, black tee, youtube black, youtube tee, youtube tee black, tee black, black tees,',
    url: 'YouTube+Tee+Black',
    category: 'apparel',
    subcategory: "women's-T-Shirts"
  },
  {
    id: 'GGOEGOAC089999',
    name: 'Google Light Pen Blue',
    description:
      'Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!',
    features:
      '<p>Sliding-click ballpoint pen</p>\n<p>Stylus that works with touch screen devices</p>\n<p>Illuminated logo</p>',
    price: '2.99',
    keywords:
      'Google Light Up Pen, Google pen, light up pen, google pens, google light ups, light up google pens, Google Light Pen Blue',
    url: 'Google+Light+Up+Pen+Blue',
    category: 'office',
    subcategory: 'writing Instruments'
  },
  {
    id: 'GGOEGOAH090199',
    name: 'Google Light Pen Green',
    description:
      'Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!',
    features:
      '<p>Sliding-click ballpoint pen</p>\n<p>Stylus that works with touch screen devices</p>\n<p>Illuminated logo</p>',
    price: '2.99',
    keywords:
      'Google Light Up Pen, Google pen, light up pen, google pens, google light ups, light up google pens, Google Light Pen Green',
    url: 'Google+Light+Up+Pen+Green',
    category: 'office',
    subcategory: 'writing Instruments'
  },
  {
    id: 'GGOEGOAR090099',
    name: 'Google Light Pen Red',
    description:
      'Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!',
    features:
      '<p>Sliding-click ballpoint pen</p>\n<p>Stylus that works with touch screen devices</p>\n<p>Illuminated logo</p>',
    price: '2.99',
    keywords:
      'Google Light Up Pen, Google pen, light up pen, google pens, google light ups, light up google pens, Google Light Pen Red',
    url: 'Google+Light+Up+Pen+Red',
    category: 'office',
    subcategory: 'writing Instruments'
  },
  {
    id: 'GGOEGOAT090299',
    name: 'Google Light Pen Yellow',
    description:
      'Get yourself a great multitasking tool! Write a note, sign a tablet, and light up with this Google Light Pen!',
    features:
      '<p>Sliding-click ballpoint pen</p>\n<p>Stylus that works with touch screen devices</p>\n<p>Illuminated logo</p>',
    price: '2.99',
    keywords:
      'Google Light Up Pen, Google pen, light up pen, google pens, google light ups, light up google pens, Google Light Pen Yellow',
    url: 'Google+Light+Up+Pen+Yellow',
    category: 'office',
    subcategory: 'writing Instruments'
  },
  {
    id: 'GGOEADHB098899',
    name: 'Android 16 oz Tumbler Black',
    description:
      'Insulated to keep contents hot or cold for hours, take that perfect cup of coffee with you on the go whether you like hot or iced coffee.',
    features:
      '<p>16 oz.</p> \n<p>Stainless steel</p>\n<p>Copper vacuum insulations</p>\n<p>Threaded 360 drink-thru lid</p>',
    price: '21.99',
    keywords: 'Android 16 oz Tumbler, Android 16 oz Tumbler Black, tumbler',
    url: 'Android+16oz+Tumbler+Black',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEADHQ098399',
    name: 'Android 25 oz Gear Cap Bottle White',
    description:
      'Take your favorite hot or cold drink anywhere with this Android 25oz Gear Cap Bottle. The carrying handle lid makes it convenient to take with you to your next meeting or workout.',
    features:
      '<p>25 oz. Powder coated</p>\n<p>Stainless steel</p>\n<p>Copper vacuum insulation</p>\n<p>Threaded gear-shaped insulated lid</p>\n<p>Carrying handle</p>',
    price: '26.99',
    keywords:
      'Android 25 oz Gear Cap Bottle, Android 25 oz Gear Cap Bottle White, bottle',
    url: 'Android+Gear+Cap+Bottle+White',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEAHBB102099',
    name: 'Android Twill Cap Black',
    description: 'Show your Android pride by wearing this Android Twill Cap.',
    features:
      '<p>Chino washed cotton twill</p>\n<p>Self fabric closure with deluxe ring buckle</p>\n<p>One size fits most</p></p>\n<p>/div>',
    price: '12.99',
    keywords: 'Android Twill Cap Black, cap',
    url: 'Android+Twill+Cap+Black',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEGDHC098799',
    name: 'Google 16 oz Tumbler Blue',
    description:
      'A geometric inner liner gives this Google 16oz Tumbler a unique look to help you stand out in a crowd of bottles and tumbler.',
    features:
      '<p>16 oz. Double wall acrylic tumbler</p>\n<p>Clear outer wall</p>\n<p>Push-on dual-purpose swivel lid</p>\n<p>Matching soft straw</p>',
    price: '12.99',
    keywords: 'Google 16 oz Tumbler Blue, tumbler',
    url: 'Google+16oz+Tumbler+Blue',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEGHBL101999',
    name: 'Google Twill Sandwich Cap Navy',
    description:
      'This Google Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.',
    features:
      '<p>Low profile</p>\n<p>Color sandwich bill</p>\n<p>Adjustable velcro closure</p>\n<p>One size fits most</p>',
    price: '12.99',
    keywords: 'Google Twill Sandwich Cap Navy, cap',
    url: 'Google+Twill+Sandwich+Cap+Navy',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEYDHB098499',
    name: 'YouTube 25 oz Gear Cap Bottle Black',
    description:
      'Take your favorite hot or cold drink anywhere with this YouTube 25oz Gear Cap Bottle. The carrying handle lid makes it convenient to take with you to your next meeting or workout.',
    features:
      '<p>25 oz. Powder coated</p>\n<p>Stainless Steel</p>\n<p>Copper vacuum insulation</p>\n<p>Threaded gear-shaped insulated lid</p>\n<p>Carrying handle</p>',
    price: '26.99',
    keywords: 'YouTube 25 oz Gear Cap Bottle Black, bottle',
    url: 'YouTube+25oz+Gear+Cap+Bottle+Black',
    category: 'drinkware',
    subcategory: 'drinkware'
  },
  {
    id: 'GGOEYHBB102199',
    name: 'YouTube Twill Sandwich Cap Black',
    description:
      'This YouTube Twill Sandwich Cap will not only keep the sun out of your eyes but will also keep you looking stylish.',
    features:
      '<p>Low profile</p>\n<p>Color sandwich bill</p>\n<p>Adjustable velcro closure</p>\n<p>One size fits most</p>',
    price: '12.99',
    keywords: 'YouTube Twill Sandwich Cap Black, cap',
    url: 'YouTube+Twill+Sandwich+Cap+Black',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEYXXX0938',
    name: 'YouTube Icon Pullover Black',
    description:
      'This YouTube pullover hoodie will keep you warm while looking stylish with the tone on tone logo.',
    features:
      '<p>8oz. 52% Cotton. 48% Polyester. Fleece</p>\n<p>Kangaroo pocket</p>\n<p>Matching drawcords</p>\n<p>',
    price: '59.99',
    keywords: 'YouTube Icon Pullover Black, pullover, hoodie',
    url: 'YouTube+Icon+Pullover+Black',
    category: 'apparel',
    subcategory: 'apparel'
  },
  {
    id: 'GGOEYXXX0937',
    name: 'YouTube Wordmark Crew Grey',
    description:
      'Kick back and relax in this comfortable YouTube sweatshirt. Unisex sizing.',
    features:
      '<p>Unisex sizing</p>\n<p>Raglan sleeves</p>\n<p>1x1 ribbed cuffs and waistband inch</p>',
    price: '51.99',
    keywords: 'YouTube Wordmark Crew Grey, YouTube, sweatshirt',
    url: 'YouTube+Wordmark+Crew+Grey',
    category: 'apparel',
    subcategory: 'apparel'
  }
]

export { products }
// module.exports = products
