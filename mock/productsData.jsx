 const productsData = [
    {
        "id":1,
        "title": "شیر پرچرب مدت دار هراز",
        "category":"لبنیات",
        "quantity":"1 لیتر",
        "brand": "هراز",
        "seller":"هایپراستار",
        "tags":["پرچرب"],
        "price":23000,
        "discount":20,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/608d5a9c5c61b.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608d5a9c5c61b.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20220906-358016-20.jpg"]
    },
    {
        "id":2,
        "title": "شیر کم چرب مدت دار هراز",
        "category":"لبنیات",
        "quantity":"1 لیتر",
        "brand": "هراز",
        "seller":"هایپراستار",
        "tags":["کم چرب"],
        "price":25600,
        "discount":15,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/608d397d8e2f6.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608d397d8e2f6.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608d397d8e2f6.jpg"]
    },
    {
        "id":3,
        "title": "شیر نیم چرب تازه رامک",
        "category":"لبنیات",
        "quantity":"1 لیتر",
        "brand": "رامک",
        "seller":"هایپراستار",
        "tags":["کم چرب","ساده"],
        "price":27000,
        "discount":13,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/60cf38586ebf8.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/60cf38586ebf8.jpg"]
       
    },
    {
        "id":4,
        "title": "سوپر شیر کم چرب مدت دار حاوی ویتامین D و A روزانه ۱ لیتری",
        "category":"لبنیات",
        "quantity":"946 میلی لیتر",
        "brand": "روزانه",
        "seller":"هایپراستار",
        "tags":["کم چرب","ساده"],
        "price":32000,
        "discount":15,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/338326.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/338326.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20220906-338326-20.jpg"]
    },
    {
        "id":5,
        "title": "شیر کاکائو کم چرب مدت دار حاوی ویتامین D و E کاله ۲۰۰ میلی لیتری",
        "category":"لبنیات",
        "quantity":"1 لیتر",
        "brand": "کاله",
        "seller":"هایپراستار",
        "tags":["کاکائو"],
        "price":25000,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/hph-106673-a.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/hph-106673-a.jpg"]
       
    },
    {
        "id":6,
        "title": "نوشابه کولا پپسی ۱.۵ لیتری",
        "category":"نوشیدنی",
        "brand": "پپسی",
        "seller":"هایپراستار",
        "tags":["کولا","بطری","خانواده"],
        "price":21000,
        "discount":10,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/35860-20000.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6321dc5fe1341.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20220914-35860-20.jpg"]
    },
    {
        "id":7,
        "title": "ماءالشعیر کلاسیک شمس ۱ لیتری",
        "category":"نوشیدنی",
        "brand": "شمس",
        "seller":"هایپراستار",
        "tags":["لیمو","بطری","خانواده"],
        "price":18000,

        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/5e5cf73c5bc8d.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/608d5a9c5c61b.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20220906-358016-20.jpg"]
    },
    {
        "id":8,
        "title": "نکتار آناناس سن ایچ ۲۰۰ میلی لیتری",
        "category":"نوشیدنی",
        "brand": "سن ایچ",
        "seller":"هایپراستار",
        "tags":["اناناس","کوچک","پاکتی"],
        "price":10000,
        "discount":19,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/6315e606a989f.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/6315e606a989f.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20220906-37791-20.jpg"]
    },
    {
        "id":9,
        "title": "چای سیاه سیلان عطری گلستان ۵۰۰ گرمی",
        "category":"نوشیدنی",
        "brand": "گلستان",
        "seller":"هایپراستار",
        "tags":["دمی","معطر"],
        "price":148000,
        "discount":15,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/20210912-33130-1.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210912-33130-1.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/20210912-33130-2.jpg"]
    },
    {
        "id":10,
        "title": "نوشیدنی انرژی زا X RAY عالیس ۲۵۰ میلی لیتری",
        "category":"نوشیدنی",
        "brand": "عالیس",
        "seller":"هایپراستار",
        "price":20000,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/381380-1.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/381380-1.jpg"]
    },
    {
        "id":11,
        "title": "آب گازدار لیمویی لاکی یو کاله ۱.۵ لیتری",
        "category":"نوشیدنی",
        "brand": "کاله",
        "seller":"هایپراستار",
        "price":16000,
        "discount":30,
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/63957da632e0f.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/63957da632e0f.jpg","https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/63957da632e0f.jpg"]
    },
    {
        "id":12,
        "title": "سیب فوجی",
        "category":"میوه و سبزیجات",
        "quantity":"1 کیلوگرم",
        "brand": "بدون برند",
        "seller":"هایپراستار",
        "tags":["تازه"],
        "price":54000,
        
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/329388.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/329388.jpg"]
    },
    {
        "id":13,
        "title": "خیار درختی ۱ کیلوگرمی",
        "category":"میوه و سبزیجات",
        "quantity":"1 کیلوگرم",
        "brand": "بدون برند",
        "seller":"هایپراستار",
        "tags":["تازه"],
        "price":22000,
        
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/5c0697871cd0a.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5c0697871cd0a.jpg"]
    },
    {
        "id":14,
        "title": "پرتقال خونی (تعداد تقریبی ۶ عدد)",
        "category":"میوه و سبزیجات",
        "quantity":"1 کیلوگرم",
        "brand": "بدون برند",
        "seller":"هایپراستار",
        "tags":["تازه"],
        "price":21000,
        
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/20230304-19146-20000.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/5e3a77512929a.jpg"]
    },
    {
        "id":15,
        "title": "موز (تعداد تقریبی ۶ عدد)",
        "category":"میوه و سبزیجات",
        "quantity":"1 کیلوگرم",
        "brand": "بدون برند",
        "seller":"هایپراستار",
        "tags":["تازه"],
        "price":79000,
        
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/617e744a20ca3.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/617e744a20ca3.jpg"]
    },
    {
        "id":16,
        "title": "پرتقال تامسون شمال (تعداد تقریبی ۳ عدد)",
        "category":"میوه و سبزیجات",
        "quantity":"1 کیلوگرم",
        "brand": "بدون برند",
        "seller":"هایپراستار",
        "tags":["تازه"],
        "price":20000,
    
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/20230304-107552-20000.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/617e87505b644.jpg"]
    },
    {
        "id":17,
        "title": "لیمو سنگی ۳۰۰ گرمی",
        "category":"میوه و سبزیجات",
        "quantity":"1 کیلوگرم",
        "brand": "بدون برند",
        "seller":"هایپراستار",
        "tags":["تازه"],
        "price":9720,
    
        "thumbnail":"https://api.snapp.market/media/cache/product_variation_transparent_image/62ad7dcd86620.png",
        "images":["https://api.snapp.market/media/cache/product-variation_image2/uploads/images/vendors/users/app/62ad7dcd86620.jpg"]
    },
    
]

export default productsData