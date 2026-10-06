const PAYMENT_CONFIG = window.NEXACART_PAYMENT || {
  merchantUpiId: 'YOUR_NEXACART_UPI_ID@upi',
  merchantName: 'NexaCart',
  razorpayKeyId: '',
  razorpayOrderEndpoint: '/api/payment/create-order',
  currency: 'INR'
};

const seed=[
{id:1,name:'Fresh Avocado',category:'Groceries',price:149,stock:24,emoji:'🥑',rating:4.8,desc:'Fresh and creamy Hass avocados.',discount:0,image:'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=900&q=85'},
{id:2,name:'Wireless Headphones',category:'Electronics',price:1299,stock:12,emoji:'🎧',rating:4.6,desc:'Comfortable wireless headphones for everyday listening.',discount:10,image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85'},
{id:3,name:'Classic Cotton Tee',category:'Fashion',price:599,stock:31,emoji:'👕',rating:4.7,desc:'Soft everyday cotton T-shirt.',discount:15,image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85'},
{id:4,name:'Ceramic Coffee Mug',category:'Home',price:299,stock:18,emoji:'☕',rating:4.5,desc:'Minimal ceramic mug for coffee and tea.',discount:0,image:'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=85'},
{id:5,name:'Organic Bananas',category:'Groceries',price:79,stock:42,emoji:'🍌',rating:4.9,desc:'Naturally sweet bananas.',discount:0,image:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85'},
{id:6,name:'Smart LED Bulb',category:'Electronics',price:449,stock:20,emoji:'💡',rating:4.4,desc:'Energy-efficient smart LED bulb.',discount:10,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85'},
{id:7,name:'Everyday Backpack',category:'Fashion',price:899,stock:15,emoji:'🎒',rating:4.7,desc:'Lightweight backpack for work and travel.',discount:20,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85'},
{id:8,name:'Desk Plant Pot',category:'Home',price:349,stock:27,emoji:'🪴',rating:4.6,desc:'Simple planter for your desk.',discount:0,image:'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85'},
{id:9,name:'Premium Basmati Rice',category:'Groceries',price:499,stock:40,emoji:'🍚',rating:4.8,desc:'Long-grain premium basmati rice.',discount:5,image:'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85'},
{id:10,name:'Organic Sugar',category:'Groceries',price:79,stock:60,emoji:'🍬',rating:4.7,desc:'Fine organic sugar.',discount:0,image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85'},
{id:11,name:'Whole Wheat Atta',category:'Groceries',price:289,stock:35,emoji:'🌾',rating:4.8,desc:'Whole wheat flour for everyday cooking.',discount:0,image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85'},
{id:12,name:'Cold Pressed Groundnut Oil',category:'Groceries',price:399,stock:28,emoji:'🫗',rating:4.6,desc:'Cold pressed cooking oil.',discount:8,image:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85'},
{id:13,name:'Almonds 500g',category:'Groceries',price:425,stock:22,emoji:'🌰',rating:4.9,desc:'Premium crunchy almonds.',discount:5,image:'https://images.unsplash.com/photo-1508061253366-f7da1bb60c0a?auto=format&fit=crop&w=900&q=85'},
{id:14,name:'Green Tea Bags',category:'Groceries',price:199,stock:45,emoji:'🍵',rating:4.5,desc:'Refreshing green tea bags.',discount:0,image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85'},
{id:15,name:'Tomato Ketchup',category:'Groceries',price:129,stock:38,emoji:'🍅',rating:4.4,desc:'Classic tomato ketchup.',discount:0,image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85'},
{id:16,name:'Peanut Butter',category:'Groceries',price:249,stock:26,emoji:'🥜',rating:4.7,desc:'Creamy peanut butter.',discount:10,image:'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=900&q=85'},
{id:17,name:'Wireless Mouse',category:'Electronics',price:699,stock:25,emoji:'🖱️',rating:4.6,desc:'Smooth wireless mouse.',discount:0,image:'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85'},
{id:18,name:'Bluetooth Speaker',category:'Electronics',price:899,stock:19,emoji:'🔊',rating:4.7,desc:'Portable Bluetooth speaker.',discount:15,image:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85'},
{id:19,name:'USB-C Fast Charger',category:'Electronics',price:799,stock:30,emoji:'🔌',rating:4.8,desc:'Fast USB-C charging adapter.',discount:10,image:'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=85'},
{id:20,name:'Mechanical Keyboard',category:'Electronics',price:2199,stock:14,emoji:'⌨️',rating:4.6,desc:'Tactile mechanical keyboard.',discount:12,image:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85'},
{id:21,name:'Smart Fitness Band',category:'Electronics',price:1599,stock:16,emoji:'⌚',rating:4.5,desc:'Track steps and daily activity.',discount:10,image:'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=900&q=85'},
{id:22,name:'Power Bank 10000mAh',category:'Electronics',price:1099,stock:21,emoji:'🔋',rating:4.7,desc:'Portable 10000mAh power bank.',discount:8,image:'https://images.unsplash.com/photo-1609592424840-4a6f1a6f7f7f?auto=format&fit=crop&w=900&q=85'},
{id:23,name:'HD Webcam',category:'Electronics',price:1499,stock:11,emoji:'📷',rating:4.4,desc:'HD webcam for meetings and classes.',discount:15,image:'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=85'},
{id:24,name:'Laptop Stand',category:'Electronics',price:999,stock:18,emoji:'💻',rating:4.8,desc:'Ergonomic laptop stand.',discount:5,image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85'},
{id:25,name:'Phone Tripod',category:'Electronics',price:649,stock:23,emoji:'📱',rating:4.5,desc:'Flexible tripod for phones.',discount:0,image:'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=85'},
{id:26,name:'Noise Cancelling Earbuds',category:'Electronics',price:1899,stock:13,emoji:'🎶',rating:4.7,desc:'Compact noise cancelling earbuds.',discount:10,image:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85'},
{id:27,name:'Portable SSD 500GB',category:'Electronics',price:4299,stock:9,emoji:'💾',rating:4.8,desc:'Fast portable SSD storage.',discount:12,image:'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=85'},
{id:28,name:'Mini Wi-Fi Router',category:'Electronics',price:1799,stock:10,emoji:'📡',rating:4.3,desc:'Compact Wi-Fi router.',discount:0,image:'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=900&q=85'},
{id:29,name:'Denim Jeans',category:'Fashion',price:1199,stock:20,emoji:'👖',rating:4.6,desc:'Classic denim jeans.',discount:10,image:'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85'},
{id:30,name:'Casual Sneakers',category:'Fashion',price:1499,stock:17,emoji:'👟',rating:4.8,desc:'Comfortable everyday sneakers.',discount:15,image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85'},
{id:31,name:'Hoodie Sweatshirt',category:'Fashion',price:999,stock:25,emoji:'🧥',rating:4.7,desc:'Warm casual hoodie.',discount:20,image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85'},
{id:32,name:'Canvas Cap',category:'Fashion',price:399,stock:32,emoji:'🧢',rating:4.5,desc:'Classic canvas cap.',discount:0,image:'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85'},
{id:33,name:'Running Shorts',category:'Fashion',price:649,stock:21,emoji:'🩳',rating:4.6,desc:'Lightweight running shorts.',discount:10,image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85'},
{id:34,name:'Cotton Socks Pack',category:'Fashion',price:299,stock:40,emoji:'🧦',rating:4.7,desc:'Comfortable cotton socks.',discount:0,image:'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=900&q=85'},
{id:35,name:'Slim Fit Shirt',category:'Fashion',price:899,stock:18,emoji:'👔',rating:4.6,desc:'Smart slim-fit shirt.',discount:12,image:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85'},
{id:36,name:'Sports Track Pants',category:'Fashion',price:1099,stock:16,emoji:'🏃',rating:4.5,desc:'Comfortable track pants.',discount:15,image:'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85'},
{id:37,name:'Crossbody Sling Bag',category:'Fashion',price:749,stock:24,emoji:'👜',rating:4.7,desc:'Compact sling bag.',discount:8,image:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85'},
{id:38,name:'Winter Scarf',category:'Fashion',price:499,stock:14,emoji:'🧣',rating:4.4,desc:'Soft winter scarf.',discount:0,image:'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=85'},
{id:39,name:'Classic Wrist Watch',category:'Fashion',price:1299,stock:12,emoji:'⌚',rating:4.6,desc:'Minimal wrist watch.',discount:10,image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85'},
{id:40,name:'Minimal Wall Clock',category:'Home',price:799,stock:15,emoji:'🕒',rating:4.5,desc:'Clean minimal wall clock.',discount:0,image:'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=85'},
{id:41,name:'Stainless Steel Bottle',category:'Home',price:449,stock:34,emoji:'🥤',rating:4.8,desc:'Reusable steel bottle.',discount:5,image:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85'},
{id:42,name:'LED Study Lamp',category:'Home',price:699,stock:22,emoji:'🛋️',rating:4.7,desc:'Bright adjustable study lamp.',discount:10,image:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85'},
{id:43,name:'Soft Cushion Set',category:'Home',price:599,stock:19,emoji:'🛏️',rating:4.6,desc:'Soft cushion set for your home.',discount:12,image:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85'},
{id:44,name:'Kitchen Storage Jars',category:'Home',price:499,stock:28,emoji:'🫙',rating:4.7,desc:'Airtight kitchen storage jars.',discount:0,image:'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=900&q=85'},
{id:45,name:'Non-Stick Fry Pan',category:'Home',price:899,stock:17,emoji:'🍳',rating:4.8,desc:'Easy-clean non-stick fry pan.',discount:10,image:'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85'},
{id:46,name:'Cotton Bedsheet',category:'Home',price:1299,stock:13,emoji:'🛌',rating:4.6,desc:'Soft cotton bedsheet.',discount:15,image:'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85'},
{id:47,name:'Bamboo Serving Tray',category:'Home',price:649,stock:20,emoji:'🪵',rating:4.5,desc:'Natural bamboo serving tray.',discount:0,image:'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=85'},
{id:48,name:'Bathroom Organizer',category:'Home',price:399,stock:26,emoji:'🧺',rating:4.4,desc:'Keep bathroom essentials organized.',discount:5,image:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=85'},
{id:49,name:'Scented Candle Set',category:'Home',price:549,stock:18,emoji:'🕯️',rating:4.7,desc:'Relaxing scented candle set.',discount:10,image:'https://images.unsplash.com/photo-1602874801006-e26b8f6f3c48?auto=format&fit=crop&w=900&q=85'},
{id:50,name:'Microfiber Cleaning Cloths',category:'Home',price:199,stock:50,emoji:'🧽',rating:4.6,desc:'Reusable microfiber cloths.',discount:0,image:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85'},
{id:51,name:'Electric Kettle',category:'Home',price:1199,stock:16,emoji:'🫖',rating:4.8,desc:'Fast-boil electric kettle.',discount:8,image:'https://images.unsplash.com/photo-1594213114663-d94db9b171e0?auto=format&fit=crop&w=900&q=85'},
{id:52,name:'Lunch Box Set',category:'Home',price:599,stock:24,emoji:'🍱',rating:4.7,desc:'Multi-container lunch box set.',discount:5,image:'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=85'},
{id:53,name:'Notebook Set',category:'Stationery',price:149,stock:80,emoji:'📓',rating:4.6,desc:'Set of ruled notebooks.',discount:0,image:'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85'},
{id:54,name:'Gel Pen Pack',category:'Stationery',price:99,stock:100,emoji:'🖊️',rating:4.7,desc:'Smooth-writing gel pens.',discount:0,image:'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=85'},
{id:55,name:'A4 Spiral Notebook',category:'Stationery',price:129,stock:65,emoji:'📒',rating:4.5,desc:'A4 spiral notebook.',discount:0,image:'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85'},
{id:56,name:'Desk Organizer',category:'Stationery',price:249,stock:35,emoji:'🗂️',rating:4.6,desc:'Organize your study desk.',discount:5,image:'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85'},
{id:57,name:'Highlighter Set',category:'Stationery',price:179,stock:44,emoji:'🖍️',rating:4.8,desc:'Bright highlighter set.',discount:10,image:'https://images.unsplash.com/photo-1455885666463-2c0f7d6f5d0e?auto=format&fit=crop&w=900&q=85'},
{id:58,name:'Sticky Notes Pack',category:'Stationery',price:89,stock:75,emoji:'🗒️',rating:4.5,desc:'Colorful sticky notes.',discount:0,image:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85'},
{id:59,name:'Geometry Box',category:'Stationery',price:199,stock:29,emoji:'📐',rating:4.7,desc:'Student geometry box.',discount:0,image:'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85'},
{id:60,name:'Ball Pen Pack',category:'Stationery',price:79,stock:90,emoji:'✏️',rating:4.6,desc:'Smooth ball pen pack.',discount:0,image:'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=85'}
];

// NexaCart mega-catalog: every marketplace section contains exactly 100 products.
const catalogImages={
  Groceries:[
    'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1508061253366-f7da1bb60c0a?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85'
  ],
  Electronics:[
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=900&q=85'
  ],
  Fashion:[
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85'
  ],
  Home:[
    'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85'
  ],
  Stationery:[
    'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1455885666463-2c0f7d6f5d0e?auto=format&fit=crop&w=900&q=85'
  ],
  Rice:[
    'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85'
  ],
  Mobiles:[
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85'
  ]
};
const catalogBases={
  Groceries:['Basmati Rice','Toor Dal','Moong Dal','Chana Dal','Wheat Atta','Sugar','Salt','Groundnut Oil','Sunflower Oil','Olive Oil','Tea','Coffee','Green Tea','Corn Flakes','Oats','Peanut Butter','Honey','Ketchup','Pasta','Cooking Masala'],
  Electronics:['Wireless Headphones','Bluetooth Speaker','Wireless Mouse','Mechanical Keyboard','USB-C Charger','Power Bank','HD Webcam','Laptop Stand','Phone Tripod','Smart LED Bulb','Fitness Band','Portable SSD','Wi-Fi Router','Gaming Mouse','Smart Plug','Tablet Stand','USB Hub','Desk Fan','Mini Projector','Smart Watch'],
  Fashion:['Cotton T-Shirt','Denim Jeans','Casual Sneakers','Hoodie','Canvas Cap','Running Shorts','Cotton Socks','Slim Fit Shirt','Track Pants','Sling Bag','Winter Scarf','Wrist Watch','Polo T-Shirt','Cargo Pants','Sports Shoes','Kurta','Leggings','Formal Trousers','Jacket','Travel Backpack'],
  Home:['Coffee Mug','Plant Pot','Wall Clock','Steel Bottle','Study Lamp','Cushion Set','Storage Jars','Fry Pan','Bedsheet Set','Table Lamp','Bath Towel','Curtain Set','Laundry Basket','Kitchen Rack','Water Bottle','Dinner Plate Set','Pillow Set','Floor Mat','Storage Box','Serving Tray'],
  Stationery:['Notebook','Gel Pen','A4 Spiral Notebook','Desk Organizer','Highlighter Set','Sticky Notes','Geometry Box','Ball Pen Pack','Sketch Pen Set','Pencil Box','Marker Set','Drawing Book','Diary','File Folder','Stapler Set','Calculator','Glue Stick Pack','Scissors','Eraser Pack','Ruler Set'],
  Rice:['Premium Basmati Rice','Classic Sona Masoori Rice','Ponni Boiled Rice','Idli Rice','Raw Rice','Brown Rice','Jeera Samba Rice','Seeraga Samba Rice','Matta Rice','Kolam Rice','HMT Rice','Pulao Rice','Long Grain Rice','Short Grain Rice','Organic Brown Rice','Organic White Rice','Steam Rice','Parboiled Rice','Red Rice','Black Rice'],
  Mobiles:['Nexa One 5G','Nexa Pro 5G','Nexa Air 5G','Nexa Max 5G','Nexa Lite 5G','Orbit One','Orbit Pro','Orbit Ultra','PixelWave A1','PixelWave X1','Nova Note','Nova Note Pro','Spark 5G','Spark Plus','Zen Mobile Z1','Zen Mobile Z1 Pro','Astra A5','Astra A5 Pro','Pulse M1','Pulse M1 Ultra']
};
const catalogVariants={
  Groceries:['250g','500g','1kg','2kg','5kg'], Electronics:['Black','White','Silver','Blue','Pro Edition'], Fashion:['S','M','L','XL','XXL'], Home:['Set 1','Set 2','Set 3','Set 4','Premium'], Stationery:['Pack 1','Pack 2','Pack 3','Pack 4','Premium'], Rice:['500g','1kg','2kg','5kg','10kg'], Mobiles:['4GB/64GB','6GB/128GB','8GB/128GB','8GB/256GB','12GB/256GB']
};
const catalogEmoji={Groceries:'🛒',Electronics:'🎧',Fashion:'👕',Home:'🏠',Stationery:'📓',Rice:'🍚',Mobiles:'📱'};
const categoryTargets={Groceries:100,Electronics:100,Fashion:100,Home:100,Stationery:100,Rice:100,Mobiles:100};
let nextCatalogId=Math.max(...seed.map(p=>p.id))+1;
for(const [category,target] of Object.entries(categoryTargets)){
  let existing=seed.filter(p=>p.category===category).length;
  let n=0;
  for(let i=0;existing+n<target;i++){
    const base=catalogBases[category][i%catalogBases[category].length];
    const variant=catalogVariants[category][Math.floor(i/catalogBases[category].length)%catalogVariants[category].length];
    const name=`${base} ${variant}`;
    seed.push({id:nextCatalogId++,name,category,price:category==='Mobiles'?6999+(i%20)*500:category==='Rice'?89+(i%20)*35:149+(i%30)*50,stock:12+(i%60),emoji:catalogEmoji[category],rating:+(4.2+(i%8)/10).toFixed(1),desc:`Quality ${category.toLowerCase()} product from NexaCart.`,discount:i%5===0?10:i%7===0?5:0,image:catalogImages[category][i%catalogImages[category].length]});
    n++;
  }
}
// Fresh catalog version prevents an older browser localStorage seed from hiding the new 700-item catalog.
let products=JSON.parse(localStorage.getItem('nexacart_products_v7')||'null')||seed;

let cart=JSON.parse(localStorage.getItem('mm_cart_v4')||'[]');
let orders=JSON.parse(localStorage.getItem('mm_orders_v4')||'[]');
let wishlist=JSON.parse(localStorage.getItem('mm_wishlist_v4')||'[]');
let compare=JSON.parse(localStorage.getItem('mm_compare_v4')||'[]');
let addresses=JSON.parse(localStorage.getItem('mm_addresses_v4')||'[]');
let reviews=JSON.parse(localStorage.getItem('mm_reviews_v4')||'{}');
let returns=JSON.parse(localStorage.getItem('mm_returns_v4')||'[]');
let notifications=JSON.parse(localStorage.getItem('mm_notifications_v4')||'[]');
let audit=JSON.parse(localStorage.getItem('mm_audit_v4')||'[]');
let coupons=JSON.parse(localStorage.getItem('mm_coupons_v4')||'null')||{NEXA10:{type:'percent',value:10,label:'10% off'},WELCOME50:{type:'flat',value:50,label:'₹50 off'},SAVE100:{type:'flat',value:100,label:'₹100 off'},FREESHIP:{type:'ship',value:0,label:'Free delivery'}};
let currentCoupon=null,selectedProduct=null,checkoutAddress=null;
const money=n=>'₹'+Number(n||0).toLocaleString('en-IN');
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
function save(){localStorage.setItem('nexacart_products_v7',JSON.stringify(products));localStorage.setItem('mm_cart_v4',JSON.stringify(cart));localStorage.setItem('mm_orders_v4',JSON.stringify(orders));localStorage.setItem('mm_wishlist_v4',JSON.stringify(wishlist));localStorage.setItem('mm_compare_v4',JSON.stringify(compare));localStorage.setItem('mm_addresses_v4',JSON.stringify(addresses));localStorage.setItem('mm_reviews_v4',JSON.stringify(reviews));localStorage.setItem('mm_returns_v4',JSON.stringify(returns));localStorage.setItem('mm_notifications_v4',JSON.stringify(notifications));localStorage.setItem('mm_audit_v4',JSON.stringify(audit));updateCart();}
function discounted(p){return Math.round(p.price*(1-(p.discount||0)/100));}
function stars(r){return '★'.repeat(Math.round(r||0))+'☆'.repeat(5-Math.round(r||0));}
function showPage(id){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.getElementById(id)?.classList.add('active');({shop:renderProducts,cart:renderCart,orders:renderOrders,seller:renderSeller,admin:renderAdmin,account:renderAccount,wishlist:renderWishlist,compare:renderCompare,notifications:renderNotifications,returns:renderReturns}[id]||(()=>{}))();window.scrollTo({top:0,behavior:'smooth'});}
function updateCart(){document.getElementById('cartCount').textContent=cart.reduce((a,x)=>a+x.qty,0);document.getElementById('wishCount').textContent=wishlist.length;document.getElementById('notifCount').textContent=notifications.filter(x=>!x.read).length;document.getElementById('accountOrders')?.replaceChildren(document.createTextNode(orders.length));document.getElementById('accountWish')?.replaceChildren(document.createTextNode(wishlist.length));}
function card(p){const inWish=wishlist.includes(p.id),inCompare=compare.includes(p.id),final=discounted(p);return `<article class="product"><div class="pic"><button class="like ${inWish?'liked':''}" onclick="toggleWish(${p.id})">${inWish?'♥':'♡'}</button>${p.discount?`<span class="discount">-${p.discount}%</span>`:''}<img class="product-image" src="${esc(p.image||'')}" alt="${esc(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="product-emoji" style="display:none">${p.emoji||'📦'}</span></div><div class="product-body"><span class="meta">${esc(p.category)} · ${stars(p.rating)}</span><h3>${esc(p.name)}</h3><p class="meta">${p.stock<=5?'⚠ Low stock':p.stock<12?'Only '+p.stock+' left':'In stock'} · Seller verified</p><div class="product-foot"><b>${money(final)} ${p.discount?`<del>${money(p.price)}</del>`:''}</b><div><button class="line-btn" onclick="toggleCompare(${p.id})">${inCompare?'✓':'⇄'}</button> <button class="add" onclick="add(${p.id})">Add</button></div></div></div></article>`;}
function renderProducts(){const q=(document.getElementById('searchInput')?.value||'').toLowerCase();const c=document.getElementById('categoryFilter')?.value||'All';const pf=document.getElementById('priceFilter')?.value||'all';let arr=products.filter(p=>(c==='All'||p.category===c)&&(!q||p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q))&&(pf==='all'||discounted(p)<=+pf));const s=document.getElementById('sortFilter')?.value||'featured';arr.sort((a,b)=>s==='rating'?b.rating-a.rating:s==='low'?discounted(a)-discounted(b):s==='high'?discounted(b)-discounted(a):s==='new'?b.id-a.id:s==='discount'?(b.discount||0)-(a.discount||0):b.rating-a.rating);document.getElementById('resultCount').textContent=arr.length+' products';document.getElementById('productGrid').innerHTML=arr.map(card).join('')||'<div class="white-panel empty full"><h2>No products found</h2><p>Try another search or category.</p></div>';}
function renderHome(){document.getElementById('homeProducts').innerHTML=[...products].sort((a,b)=>b.rating-a.rating).slice(0,8).map(card).join('');}
function add(id){const p=products.find(x=>x.id===id);if(!p||p.stock<1)return toast('Out of stock');const x=cart.find(i=>i.id===id);if(x)x.qty=Math.min(x.qty+1,p.stock);else cart.push({id,qty:1});save();toast(p.name+' added to bag');}
function toggleWish(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];const p=products.find(x=>x.id===id);if(p&&!wishlist.includes(id))pushNotification('Removed '+p.name+' from wishlist','wishlist');else if(p)pushNotification(p.name+' saved to wishlist','wishlist');save();renderWishlist();renderProducts();renderHome();}
function renderWishlist(){const el=document.getElementById('wishlistView');const ps=products.filter(p=>wishlist.includes(p.id));el.innerHTML=ps.length?ps.map(card).join(''):'<div class="white-panel empty full"><h2>Your wishlist is empty</h2><button class="black-btn" onclick="showPage(\'shop\')">Explore products</button></div>';}
function moveWishlistToCart(){products.filter(p=>wishlist.includes(p.id)&&p.stock>0).forEach(p=>{if(!cart.find(x=>x.id===p.id))cart.push({id:p.id,qty:1});});save();showPage('cart');toast('Available wishlist items added');}
function clearWishlist(){wishlist=[];save();renderWishlist();updateCart();}
function toggleCompare(id){if(compare.includes(id))compare=compare.filter(x=>x!==id);else if(compare.length<4)compare.push(id);else return toast('Compare up to 4 products');save();renderCompare();renderProducts();toast(compare.includes(id)?'Added to comparison':'Removed from comparison');}
function renderCompare(){const ps=compare.map(id=>products.find(p=>p.id===id)).filter(Boolean),el=document.getElementById('compareView');if(!ps.length){el.innerHTML='<div class="white-panel empty"><h2>No products selected</h2><p>Open Marketplace and use ⇄ to compare products.</p></div>';return}el.innerHTML=`<div class="compare-grid">${ps.map(p=>`<div class="compare-card"><div class="pic">${p.emoji}</div><h3>${esc(p.name)}</h3><b>${money(discounted(p))}</b><p>${stars(p.rating)}</p><button class="line-btn" onclick="toggleCompare(${p.id})">Remove</button></div>`).join('')}</div><div class="white-panel" style="margin-top:15px">${[['Price','money'],['Rating','rating'],['Discount','discount'],['Stock','stock'],['Category','category']].map(r=>`<div class="compare-row"><b>${r[0]}</b>${ps.map(p=>`<span>${r[1]==='money'?money(discounted(p)):r[1]==='rating'?stars(p.rating):r[1]==='discount'?(p.discount||0)+'%':r[1]==='stock'?p.stock:p.category}</span>`).join('')}</div>`).join('')}</div>`;}
function openProduct(id){selectedProduct=products.find(p=>p.id===id);if(!selectedProduct)return;const p=selectedProduct,rv=reviews[p.id]||[];document.getElementById('productDetail').innerHTML=`<div class="detail-media"><img src="${esc(p.image||'')}" alt="${esc(p.name)}" onerror="this.style.display='none'"></div><div class="detail-copy"><button class="close" onclick="closeProduct()">×</button><span class="tag">${esc(p.category)}</span><h2>${esc(p.name)}</h2><div class="rating-big">${stars(p.rating)} ${p.rating}</div><div class="detail-price">${money(discounted(p))} ${p.discount?`<del>${money(p.price)}</del>`:''}</div><p>${esc(p.desc)}</p><p class="stock-line">${p.stock<=5?'⚠ Only '+p.stock+' left':'✓ In stock'} · Verified seller</p><div class="detail-actions"><button class="black-btn" onclick="add(${p.id});closeProduct()">Add to cart</button><button class="line-btn" onclick="toggleWish(${p.id})">♡ Wishlist</button></div><h3>Reviews</h3>${rv.length?rv.map(r=>`<div class="review"><b>${stars(r.rating)}</b> ${esc(r.text)}<small> · ${esc(r.name||'Verified buyer')}</small></div>`).join(''):'<p class="muted">No reviews yet.</p>'}<form onsubmit="writeReview(event,${p.id})"><input id="reviewName" placeholder="Your name" required><select id="reviewRating"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select><input id="reviewText" placeholder="Write a review" required><button class="line-btn">Submit review</button></form></div>`;document.getElementById('productDetailModal').classList.add('open');}
function closeProduct(){document.getElementById('productDetailModal').classList.remove('open');}
function writeReview(e,id){e.preventDefault();(reviews[id] ||= []).push({name:reviewName.value,rating:+reviewRating.value,text:reviewText.value});save();openProduct(id);toast('Review added');}
function renderCart(){const el=document.getElementById('cartView');if(!cart.length){el.innerHTML='<div class="white-panel empty"><h2>Your bag is empty</h2><button class="black-btn" onclick="showPage(\'shop\')">Start shopping</button></div>';return}const sub=cart.reduce((a,i)=>{const p=products.find(x=>x.id===i.id);return a+(p?discounted(p)*i.qty:0)},0),ship=sub>=999?0:49,discount=currentCoupon?couponDiscount(sub,ship):0,total=Math.max(0,sub+ship-discount);el.innerHTML=`<div class="cart-layout"><div class="white-panel"><div class="panel-head"><h3>Bag items</h3><span>${cart.reduce((a,x)=>a+x.qty,0)} items</span></div>${cart.map(i=>{const p=products.find(x=>x.id===i.id);return p?`<div class="cart-item"><div class="cart-thumb">${p.emoji}</div><div class="grow"><b>${esc(p.name)}</b><small>${money(discounted(p))} each</small></div><div class="qty"><button onclick="qty(${p.id},-1)">−</button><b>${i.qty}</b><button onclick="qty(${p.id},1)">+</button></div><button class="remove" onclick="removeItem(${p.id})">Remove</button></div>`:''}).join('')}</div><aside class="white-panel summary"><h3>Summary</h3><div class="summary-row"><span>Subtotal</span><b>${money(sub)}</b></div><div class="summary-row"><span>Delivery</span><b>${ship?'₹49':'FREE'}</b></div>${discount?`<div class="summary-row success"><span>Coupon</span><b>-₹${discount}</b></div>`:''}<div class="coupon-row"><input id="couponInput" placeholder="Coupon code"><button onclick="applyCoupon()">Apply</button></div><small class="hint">Try NEXA10, WELCOME50, SAVE100 or FREESHIP</small><hr><div class="summary-row total"><span>Total</span><b>${money(total)}</b></div><button class="black-btn full" onclick="openCheckout()">Proceed to checkout</button></aside></div>`;}
function qty(id,d){const x=cart.find(i=>i.id===id),p=products.find(p=>p.id===id);if(!x)return;x.qty=Math.max(1,Math.min(p.stock,x.qty+d));save();renderCart();}
function removeItem(id){cart=cart.filter(x=>x.id!==id);save();renderCart();}
function couponDiscount(sub,ship){if(!currentCoupon)return 0;const c=coupons[currentCoupon];if(c.type==='percent')return Math.round(sub*c.value/100);if(c.type==='flat')return Math.min(c.value,sub);return ship;}
function applyCoupon(){const code=(document.getElementById('couponInput')?.value||'').trim().toUpperCase();if(!coupons[code])return toast('Invalid coupon');currentCoupon=code;renderCart();toast(coupons[code].label+' applied');}
function openCheckout(){if(!cart.length)return toast('Your bag is empty');checkoutAddress=addresses[0]||null;renderCheckout();document.getElementById('checkoutModal').classList.add('open');}
function renderCheckout(){const sub=cart.reduce((a,i)=>a+discounted(products.find(p=>p.id===i.id))*i.qty,0),ship=sub>=999?0:49,discount=couponDiscount(sub,ship),total=Math.max(0,sub+ship-discount);const merchant=PAYMENT_CONFIG.merchantUpiId;document.getElementById('checkoutBody').innerHTML=`<button class="close" onclick="closeCheckout()">×</button><span class="tag">SECURE CHECKOUT</span><div class="checkout-heading"><div><h2>Complete your order</h2><p class="muted">Encrypted checkout · UPI intent · Gateway-ready payments</p></div><span class="secure-pill">🔒 SECURE</span></div><div class="checkout-grid"><div><h3>Delivery address</h3>${addresses.length?addresses.map((a,i)=>`<label class="address-option"><input type="radio" name="addr" ${checkoutAddress?.id===a.id?'checked':''} onchange="checkoutAddress=addresses[${i}]"><span><b>${esc(a.name)}</b><small>${esc(a.phone)}<br>${esc(a.line)}, ${esc(a.city)} - ${esc(a.pin)}</small></span></label>`).join(''):'<p class="muted">No saved address. Add one from My Account.</p>'}<button class="line-btn" onclick="closeCheckout();showPage('account')">＋ Add address</button><h3>Delivery</h3><p class="muted">📍 Estimated delivery: 2–4 business days · Free over ₹999</p><h3>Payment method</h3><div class="payment-methods"><label class="payment-option premium-pay"><input type="radio" name="pay" value="UPI" checked onchange="togglePay()"><span><b>📱 UPI / QR</b><small>GPay · PhonePe · Paytm · BHIM</small></span><em>FAST</em></label><label class="payment-option premium-pay"><input type="radio" name="pay" value="GATEWAY" onchange="togglePay()"><span><b>💳 Card / NetBanking</b><small>Secure Razorpay gateway</small></span><em>SECURE</em></label><label class="payment-option premium-pay"><input type="radio" name="pay" value="CASH" onchange="togglePay()"><span><b>💵 Cash on Delivery</b><small>Pay when delivered</small></span></label></div><div id="payExtra" class="pay-extra"><div class="upi-pay-card"><div><span class="mini-tag">PAY EXACTLY</span><strong id="upiAmount">${money(total)}</strong><small>To <b>${esc(merchant)}</b></small></div><div id="qrBox" class="qr-box"><div class="qr-placeholder">Generating secure QR…</div></div></div><div class="upi-actions"><button class="black-btn" onclick="payWithUPI(${total})">Open UPI app ↗</button><button class="line-btn" onclick="refreshUPIQR(${total})">Refresh QR</button></div><small class="payment-note">Scan with your UPI app. The QR above is the supplied merchant QR. Enter the checkout amount in your UPI app; the Open UPI app button sends the exact order amount.</small></div><div id="gatewayExtra" class="pay-extra gateway-extra" style="display:none"><div class="gateway-card"><div class="gateway-logo">R</div><div><b>Razorpay Secure Checkout</b><small>Cards · UPI · NetBanking · Wallets</small></div></div><button class="black-btn full" onclick="startRazorpay(${total})">Continue to secure payment</button><small class="payment-note">Gateway checkout activates when your Razorpay Key ID and backend order endpoint are configured.</small></div></div><aside class="checkout-summary"><h3>Order summary</h3>${cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="summary-row"><span>${esc(p.name)} × ${i.qty}</span><b>${money(discounted(p)*i.qty)}</b></div>`}).join('')}<hr><div class="summary-row"><span>Delivery</span><b>${ship?'₹49':'FREE'}</b></div>${discount?`<div class="summary-row success"><span>Coupon</span><b>-₹${discount}</b></div>`:''}<div class="summary-row total"><span>Total</span><b>${money(total)}</b></div><div class="trust-row"><span>✓ SSL-style secure UI</span><span>✓ No card data stored</span></div></aside></div>`;setTimeout(()=>refreshUPIQR(total),0);}
function togglePay(){const m=document.querySelector('input[name=pay]:checked')?.value;const upi=document.getElementById('payExtra'),gateway=document.getElementById('gatewayExtra');if(upi)upi.style.display=m==='UPI'?'block':'none';if(gateway)gateway.style.display=m==='GATEWAY'?'block':'none';if(m==='UPI')setTimeout(()=>refreshUPIQR(),0);}
function buildUPILink(amount){const pa=PAYMENT_CONFIG.merchantUpiId;const pn=PAYMENT_CONFIG.merchantName;const tn='NexaCart order payment';return `upi://pay?pa=${encodeURIComponent(pa)}&pn=${encodeURIComponent(pn)}&am=${encodeURIComponent(Number(amount).toFixed(2))}&cu=${PAYMENT_CONFIG.currency}&tn=${encodeURIComponent(tn)}`;}
function refreshUPIQR(amount){const box=document.getElementById('qrBox');if(!box)return;const total=amount||getCheckoutTotal();box.innerHTML=`<div class="qr-placeholder">Merchant QR not configured</div>`;const amountLabel=document.createElement('small');amountLabel.className='qr-amount-note';amountLabel.textContent='Amount to pay: '+money(total);box.appendChild(amountLabel);}
function getCheckoutTotal(){const sub=cart.reduce((a,i)=>a+discounted(products.find(p=>p.id===i.id))*i.qty,0),ship=sub>=999?0:49,discount=couponDiscount(sub,ship);return Math.max(0,sub+ship-discount);}
function payWithUPI(total){const pa=PAYMENT_CONFIG.merchantUpiId||'';if(!pa||pa.includes('YOUR_'))return toast('Merchant UPI ID is not configured');window.location.href=buildUPILink(total);}
function startRazorpay(total){if(!PAYMENT_CONFIG.razorpayKeyId)return toast('Add your Razorpay Key ID + backend order endpoint to activate gateway payment');if(!window.Razorpay)return toast('Razorpay checkout library is not loaded');const options={key:PAYMENT_CONFIG.razorpayKeyId,amount:Math.round(Number(total)*100),currency:PAYMENT_CONFIG.currency,name:PAYMENT_CONFIG.merchantName,description:'NexaCart order payment',theme:{color:'#111318'},handler:function(response){toast('Payment received by gateway. Verify the signature on your server before confirming the order.');console.log('Razorpay payment:',response);}};new Razorpay(options).open();}
function closeCheckout(){document.getElementById('checkoutModal').classList.remove('open');}
function placeOrder(total){if(!checkoutAddress&&addresses.length)return toast('Select a delivery address');if(!checkoutAddress)return toast('Add a delivery address first');const method=document.querySelector('input[name=pay]:checked')?.value||'UPI';if(method==='UPI'){return toast('Complete the UPI payment in your app, then confirm it from your real gateway/backend.')}if(method==='GATEWAY'){return toast('Complete the gateway payment before placing the order.')}const id='MM-'+String(Date.now()).slice(-6),now=new Date();orders.unshift({id,date:now.toLocaleDateString('en-IN'),status:'CONFIRMED',paymentMethod:'CASH',total,points:Math.floor(total/10),address:checkoutAddress,timeline:[['Confirmed',now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}),'Order confirmed']],items:cart.map(i=>{const p=products.find(x=>x.id===i.id);p.stock=Math.max(0,p.stock-i.qty);return {id:p.id,name:p.name,qty:i.qty}})});cart=[];currentCoupon=null;audit.unshift({date:now.toLocaleString('en-IN'),action:'Order placed',ref:id});pushNotification('Order '+id+' confirmed','order');save();closeCheckout();showPage('orders');toast('Cash-on-delivery order '+id+' confirmed');}
function renderOrders(){const el=document.getElementById('ordersView');if(!orders.length){el.innerHTML='<div class="white-panel empty"><h2>No orders yet</h2><button class="black-btn" onclick="showPage(\'shop\')">Start shopping</button></div>';return}el.innerHTML=orders.map((o,i)=>`<div class="white-panel order-card"><div class="panel-head"><b>#${o.id}</b><span>${o.status} · ${o.date} · ${o.paymentMethod}</span></div><div class="order-items">${o.items.map(x=>`<span>${esc(x.name)} × ${x.qty}</span>`).join('')}</div><div class="tracking"><div class="step done"><i>✓</i><span>Confirmed</span></div><div class="step ${['SHIPPED','OUT_FOR_DELIVERY','DELIVERED'].includes(o.status)?'done':''}"><i>2</i><span>Shipped</span></div><div class="step ${o.status==='OUT_FOR_DELIVERY'||o.status==='DELIVERED'?'done':''}"><i>3</i><span>Out for delivery</span></div><div class="step ${o.status==='DELIVERED'?'done':''}"><i>4</i><span>Delivered</span></div></div><div class="order-bottom"><b>${money(o.total)}</b><div><button class="line-btn" onclick="downloadInvoice(${i})">Invoice</button>${o.status==='CONFIRMED'?`<button class="line-btn" onclick="cancelOrder(${i})">Cancel</button>`:''}${o.status==='DELIVERED'?`<button class="line-btn" onclick="requestReturn(${i})">Return</button>`:''}<button class="line-btn" onclick="reorder(${i})">Re-order</button></div></div></div>`).join('');}
function cancelOrder(i){if(!confirm('Cancel this order?'))return;orders[i].status='CANCELLED';audit.unshift({date:new Date().toLocaleString('en-IN'),action:'Order cancelled',ref:orders[i].id});pushNotification('Order '+orders[i].id+' cancelled','order');save();renderOrders();toast('Order cancelled');}
function reorder(i){orders[i].items.forEach(x=>{const p=products.find(p=>p.id===x.id)||products.find(p=>p.name===x.name);if(p&&p.stock)cart.push({id:p.id,qty:Math.min(x.qty,p.stock)});});save();showPage('cart');toast('Items added to bag');}
function requestReturn(i){const o=orders[i];if(returns.some(r=>r.orderId===o.id))return toast('Return already requested');returns.unshift({id:'RET-'+String(Date.now()).slice(-6),orderId:o.id,status:'REQUESTED',reason:'Changed my mind',date:new Date().toLocaleDateString('en-IN'),refund:o.total});pushNotification('Return request created for '+o.id,'return');save();showPage('returns');toast('Return request created');}
function renderReturns(){const el=document.getElementById('returnView');if(!returns.length){el.innerHTML='<div class="white-panel empty"><h2>No return requests</h2><p>Delivered orders can be returned from the Orders page.</p></div>';return}el.innerHTML=returns.map(r=>`<div class="return-card"><div class="panel-head"><b>${r.id}</b><span>${r.status}</span></div><p>Order <b>#${r.orderId}</b> · Reason: ${esc(r.reason)}</p><p>Refund amount: <b>${money(r.refund)}</b></p><small>${r.date}</small></div>`).join('');}
function downloadInvoice(i){const o=orders[i],text=`NexaCart Invoice\nOrder: #${o.id}\nDate: ${o.date}\nPayment: ${o.paymentMethod}\n\n${o.items.map(x=>x.name+' x '+x.qty).join('\n')}\n\nTotal: ${money(o.total)}\nPoints earned: ${o.points||0}\nThank you for shopping with NexaCart.`;const a=document.createElement('a');a.href='data:text/plain;charset=utf-8,'+encodeURIComponent(text);a.download=`NexaCart-${o.id}.txt`;a.click();}
function renderSeller(){const low=products.filter(p=>p.stock<=5).length,revenue=orders.reduce((a,o)=>a+Number(o.total||0),0);document.getElementById('sellerProductCount').textContent=products.length;document.getElementById('lowStock').textContent=low;document.getElementById('sellerOrders').textContent=orders.length;document.getElementById('sellerRevenue').textContent=money(revenue);document.getElementById('sellerView').innerHTML=products.map(p=>`<div class="seller-row"><div class="mini">${p.emoji}</div><div><b>${esc(p.name)}</b><small>${p.category}</small></div><span>${money(discounted(p))}</span><span class="${p.stock<=5?'danger':''}">${p.stock} stock</span><button class="line-btn" onclick="del(${p.id})">Delete</button></div>`).join('');renderBars('sellerChart');}
function renderBars(id){const el=document.getElementById(id);if(!el)return;const vals=[32,55,48,72,64,88,70];el.innerHTML=vals.map((v,i)=>`<div class="bar" style="height:${v}%"><span>${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</span></div>`).join('');}
function openProductForm(){document.getElementById('productModal').classList.add('open')}
function closeProductForm(){document.getElementById('productModal').classList.remove('open')}
function addProduct(e){e.preventDefault();products.unshift({id:Date.now(),name:newName.value,category:newCategory.value,price:+newPrice.value,stock:+newStock.value,image:newImage.value,emoji:newEmoji.value||'📦',rating:4.5,desc:newDesc.value||'New NexaCart listing',discount:+newDiscount.value||0});audit.unshift({date:new Date().toLocaleString('en-IN'),action:'Product added',ref:newName.value});save();renderSeller();renderHome();renderProducts();closeProductForm();e.target.reset();toast('Listing published');}
function del(id){if(!confirm('Remove this listing?'))return;products=products.filter(p=>p.id!==id);audit.unshift({date:new Date().toLocaleString('en-IN'),action:'Product removed',ref:id});save();renderSeller();renderHome();renderProducts();toast('Listing removed');}
function renderAdmin(){const revenue=orders.reduce((a,o)=>a+Number(o.total||0),0);document.getElementById('adminProducts').textContent=products.length;document.getElementById('adminOrders').textContent=orders.length;document.getElementById('adminRevenue').textContent=money(revenue);document.getElementById('adminReturns').textContent=returns.length;document.getElementById('adminUsers').textContent=128;document.getElementById('adminSellers').textContent=27;document.getElementById('adminRecent').innerHTML=orders.slice(0,6).map(o=>`<div class="tr"><span>#${o.id}</span><span>Demo buyer</span><span>${money(o.total)}</span><em>${o.status}</em></div>`).join('')||'<div class="empty">No orders yet.</div>';renderBars('adminChart');}
function showCouponManager(){openGeneric('<span class="tag">COUPONS</span><h2>NexaCart offers</h2>'+Object.entries(coupons).map(([k,v])=>`<div class="notification"><b>${k}</b> — ${v.label}</div>`).join(''))}
function showAuditLog(){openGeneric('<span class="tag">SECURITY</span><h2>Audit log</h2>'+((audit.length?audit.slice(0,20).map(x=>`<div class="notification"><b>${esc(x.action)}</b><br><small>${esc(x.date)} · ${esc(x.ref)}</small></div>`).join(''):'<p>No audit events yet.</p>')));}
function showSupport(){openGeneric('<span class="tag">CUSTOMER SUPPORT</span><h2>Support center</h2><p>Demo ticket system for NexaCart.</p><form class="return-form" onsubmit="createTicket(event)"><input id="ticketSubject" placeholder="Issue subject" required><textarea id="ticketBody" placeholder="Describe your issue" required></textarea><button class="black-btn">Create support ticket</button></form><div class="notification">FAQ: Delivery usually takes 2–4 business days. Returns are available after delivery.</div>');}
function createTicket(e){e.preventDefault();audit.unshift({date:new Date().toLocaleString('en-IN'),action:'Support ticket created',ref:ticketSubject.value});save();closeGeneric();toast('Support ticket created');}
function renderAccount(){const points=orders.reduce((a,o)=>a+(o.points||0),0);document.getElementById('pointsValue').textContent=points;document.getElementById('tierValue').textContent=points>=1000?'Platinum':points>=500?'Gold':points>=200?'Silver':'Bronze';document.getElementById('addressView').innerHTML=addresses.length?addresses.map(a=>`<div class="address-card"><b>${esc(a.name)}</b><span>${esc(a.phone)}</span><p>${esc(a.line)}, ${esc(a.city)} - ${esc(a.pin)}</p><button class="line-btn" onclick="removeAddress(${a.id})">Remove</button></div>`).join(''):'<p class="muted">No saved addresses.</p>';updateCart();}
function addAddress(e){e.preventDefault();addresses.push({id:Date.now(),name:addrName.value,phone:addrPhone.value,line:addrLine.value,city:addrCity.value,pin:addrPin.value});save();e.target.reset();renderAccount();toast('Address saved');}
function removeAddress(id){addresses=addresses.filter(a=>a.id!==id);save();renderAccount();}
function loginDemo(){localStorage.setItem('mm_user','buyer@nexacart.local');toast('Welcome back to NexaCart');}
function registerDemo(e){e.preventDefault();localStorage.setItem('mm_user',regEmail.value);toast('Local account created');e.target.reset();}
function pushNotification(text,type='info'){notifications.unshift({id:Date.now(),text,type,date:new Date().toLocaleString('en-IN'),read:false});notifications=notifications.slice(0,30);}
function renderNotifications(){const el=document.getElementById('notificationView');el.innerHTML=notifications.length?notifications.map(n=>`<div class="notification ${n.read?'':'unread'}"><b>${esc(n.text)}</b><small> · ${esc(n.date)}</small></div>`).join(''):'<div class="white-panel empty"><h2>No notifications</h2></div>';notifications.forEach(n=>n.read=true);save();}
function toggleTheme(){document.body.classList.toggle('dark');localStorage.setItem('mm_dark',document.body.classList.contains('dark'));}
function toggleChat(){document.getElementById('chatPanel').classList.toggle('open');}
function sendChat(e){e.preventDefault();const x=chatInput.value.trim();if(!x)return;msg(x,true);chatInput.value='';setTimeout(()=>msg(reply(x),false),250)}
function msg(t,u){const d=document.createElement('div');d.className=u?'user':'bot';d.textContent=t;chatLog.appendChild(d);chatLog.scrollTop=chatLog.scrollHeight;}
function reply(x){x=x.toLowerCase();if((x.includes('under')||x.includes('budget'))&&x.match(/\d+/)){const n=+x.match(/\d+/)[0],p=products.filter(p=>discounted(p)<=n).sort((a,b)=>b.rating-a.rating).slice(0,3);return p.length?'Try: '+p.map(p=>p.name+' '+money(discounted(p))).join(', '):'No products found in that budget.';}if(x.includes('offer')||x.includes('coupon'))return 'Try NEXA10, WELCOME50, SAVE100 or FREESHIP.';if(x.includes('order')||x.includes('track'))return orders.length?'Your latest order is #'+orders[0].id+' — '+orders[0].status+'.':'You have no orders yet.';if(x.includes('return')||x.includes('refund'))return 'Delivered orders can be returned from Orders. I can open the Return Desk for you.';if(x.includes('cart')||x.includes('bag'))return 'Open Bag to update quantities and checkout.';if(x.includes('seller'))return 'Seller Studio includes listings, stock, revenue and sales analytics.';if(x.includes('compare'))return 'Use ⇄ on products to compare up to four items.';if(x.includes('point')||x.includes('reward'))return 'Nexa Points: 10 points for every ₹100 spent.';if(x.includes('pay'))return 'NexaCart supports demo UPI, Card and Cash on Delivery checkout.';return 'I can help with products, budgets, offers, cart, orders, tracking, returns, rewards and selling.';}
function searchFromHeader(){showPage('shop');document.getElementById('searchInput').value=document.getElementById('globalSearch').value;renderProducts();}
function shopCategory(c){showPage('shop');document.getElementById('categoryFilter').value=c;renderProducts();}
function shopDeals(){showPage('shop');document.getElementById('sortFilter').value='discount';renderProducts();}
function openGeneric(html){document.getElementById('genericBody').innerHTML='<button class="close" onclick="closeGeneric()">×</button>'+html;document.getElementById('genericModal').classList.add('open');}
function closeGeneric(){document.getElementById('genericModal').classList.remove('open');}
function toast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200);}

function switchAuth(mode){
  const login=document.getElementById('loginForm'), reg=document.getElementById('registerForm');
  const lt=document.getElementById('loginTab'), rt=document.getElementById('registerTab');
  if(!login||!reg)return;
  const isLogin=mode==='login'; login.classList.toggle('hidden',!isLogin); reg.classList.toggle('hidden',isLogin);
  lt.classList.toggle('active',isLogin); rt.classList.toggle('active',!isLogin);
}
function togglePassword(id){
  const input=document.getElementById(id); if(!input)return;
  input.type=input.type==='password'?'text':'password';
}
function openMarketplace(){
  document.body.classList.remove('locked');
  document.getElementById('loginScreen')?.classList.add('hidden');
  window.scrollTo({top:0,behavior:'instant'});
}
function handleLogin(e){
  e.preventDefault();
  const email=document.getElementById('loginEmail').value.trim().toLowerCase();
  const password=document.getElementById('loginPassword').value;
  if(password.length<6){toast('Please enter a valid password');return;}
  localStorage.setItem('mm_user_v5',JSON.stringify({email,name:email.split('@')[0],loggedIn:true}));
  openMarketplace(); toast('Welcome back to NexaCart');
}
function handleRegister(e){
  e.preventDefault();
  const name=document.getElementById('signupName').value.trim();
  const email=document.getElementById('signupEmail').value.trim().toLowerCase();
  localStorage.setItem('mm_user_v5',JSON.stringify({email,name,loggedIn:true}));
  openMarketplace(); toast('Account created successfully');
}
function logoutNexaCart(){
  localStorage.removeItem('mm_user_v5');
  document.body.classList.add('locked');
  document.getElementById('loginScreen')?.classList.remove('hidden');
  switchAuth('login');
  toast('Logged out');
}

function initLoginParticles(){const field=document.getElementById('particleField');if(!field)return;for(let i=0;i<42;i++){const dot=document.createElement('span');dot.style.setProperty('--x',Math.random()*100+'%');dot.style.setProperty('--y',Math.random()*100+'%');dot.style.setProperty('--d',(3+Math.random()*6)+'s');dot.style.setProperty('--s',(1+Math.random()*3)+'px');dot.style.setProperty('--delay',(Math.random()*-8)+'s');field.appendChild(dot);}}
initLoginParticles();
if(localStorage.getItem('mm_dark')==='true')document.body.classList.add('dark');
if(!notifications.length)pushNotification('Welcome to NexaCart! Explore today’s deals.','welcome');
updateCart();renderHome();renderProducts();renderSeller();renderAccount();renderWishlist();renderCompare();renderNotifications();renderReturns();

if(localStorage.getItem('mm_user_v5')) openMarketplace();
