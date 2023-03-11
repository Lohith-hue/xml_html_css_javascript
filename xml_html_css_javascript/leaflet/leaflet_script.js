//map
var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'shadow1.png',
        iconSize:     [20, 40],
        shadowSize:   [20, 40],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
    
var cokeIcon =  new LeafIcon({iconUrl: 'coke.png'}),
    asahiIcon = new LeafIcon({iconUrl: 'Asahi.png'}),
    dydoIcon = new LeafIcon({iconUrl: 'DyDo.png'}),
    ito_enIcon = new LeafIcon({iconUrl: 'ITO_EN.png'}),
    kirinIcon = new LeafIcon({iconUrl: 'Kirin.png'}),
    pokka_sapporoIcon = new LeafIcon({iconUrl: 'Pokka_Sapporo.png'}),
    suntoryIcon = new LeafIcon({iconUrl: 'Suntory.png'});

var myLayer = L.geoJSON().addTo(map);
myLayer.addData(geojsonFeature); 


var geojsonFeature = 
    
    {
        "type": "FeatureCollection",
        "generator": "JOSM",
        "bbox": [
            -180.00000000000,
            -90.00000000000,
            180.00000000000,
            90.00000000000
        ],
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "category": "Prep School",
                    "name": "Ochanomizu Seminar",
                    "name:ja": "お茶の水ゼミナール"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70308340000,
                        35.66111010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "Interlink"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69659830000,
                        35.65928540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Paint Store",
                    "name": "Sanwa Kenso"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70967200000,
                        35.65391110000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya Station",
                    "name:ja": "渋谷駅"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70029940000,
                        35.65768680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Minami Aoyama 7-chome green space",
                    "name:ja": "南青山七丁目緑地"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71479910000,
                        35.65819410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "STAND By HAIR & Coffee"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70944610000,
                        35.65046370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Office Building",
                    "name": "Kyoei Sangyo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68904850000,
                        35.65971750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "coin park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71091840000,
                        35.65559240000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "Convenience Store",
                    "name": "NATURAL LAWSON"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69279000000,
                        35.65497900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:postcode": "153-0043",
                    "addr:street": "Higashiyama",
                    "category": "Grocery Store",
                    "name": "食品　となみや"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69216580000,
                        35.64854450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Restaurant Bakar"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69246230000,
                        35.65865720000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Hikawa Pharmaceutical"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70931600000,
                        35.65392960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Japan Map Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68997860000,
                        35.65360540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Nippon Photography Institute",
                    "name:ja": "日本写真芸術専門学校"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70406500000,
                        35.65453900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park Station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70768050000,
                        35.65006380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "Shapes Girl"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69588280000,
                        35.65561490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya, tokyo",
                    "addr:housenumber": "7-12",
                    "addr:postcode": "150-0044",
                    "addr:street": "maruyama-cho",
                    "category": "Restaurant",
                    "name": "Ajikura",
                    "name:ja": "あじくら"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69441030000,
                        35.65820200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "P24H"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70861990000,
                        35.65946740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "MHL"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70833230000,
                        35.66125660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "Trip Hair Lounge"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71172590000,
                        35.64905790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya Infoss Tower",
                    "name:ja": "渋谷インフォスタワー"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70116910000,
                        35.65508310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69788610000,
                        35.66237440000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "School",
                    "name": "Nishino style breathing method Tokyo headquarters"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68987060000,
                        35.65940040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Print Shop",
                    "name": "Chiba Printing"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69367470000,
                        35.65607960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Osakaue",
                    "name:ja": "大坂上"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69255680000,
                        35.65351130000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Repark"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71080770000,
                        35.66482030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Sporting Good Store",
                    "name": "Stormy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70119160000,
                        35.66309030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Parking Lot",
                    "name": "Peace Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70495670000,
                        35.66034290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hospital",
                    "name": "SHIBUYA DOG & CAT Hospital"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69377320000,
                        35.66409220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Hammock"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70043180000,
                        35.66185090000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Re made in tokyo japan"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70442700000,
                        35.65328720000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Shibuya Midori Pharmacy",
                    "name:ja": "渋谷みどり薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70386160000,
                        35.65550620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Book Store",
                    "name": "Taiseido Bookstore",
                    "name:ja": "大盛堂書店"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70012150000,
                        35.65974490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71139190000,
                        35.66337180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Sakuragaoka nursery school",
                    "name:ja": "桜丘保育園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70171700000,
                        35.65437800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Merbeille Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70977130000,
                        35.64949490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Drugstore",
                    "name": "Zenkodo Pharmacy",
                    "name:ja": "善光堂薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71341340000,
                        35.66578440000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Studio",
                    "name": "YAR"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69120900000,
                        35.64901980000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "153-0044",
                    "addr:street": "Ohashi",
                    "category": "Restaurant",
                    "name": "Sugahara Pho"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68862740000,
                        35.65531850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Private Aoyama Gakuin Middle School",
                    "name:ja": "私立青山学院中等部"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71131390000,
                        35.65947930000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Sato",
                    "name:ja": "サトウ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69368230000,
                        35.65825880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fitness Centre",
                    "name": "Avity Daikanyama store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70375510000,
                        35.65233260000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "GARDE COLLECTIVE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70514310000,
                        35.64924480000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Music Center",
                    "name": "GLOCAL RECORDS"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70478170000,
                        35.66467240000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "APA Hotel"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69503990000,
                        35.65630030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70210490000,
                        35.66073960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Studio",
                    "name": "Recofan"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69765340000,
                        35.66143870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Shibuya CLUB QUATTRO"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69739150000,
                        35.66096290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park Field Shibuya 3-chome Daiichi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70568090000,
                        35.65663640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Cafe",
                    "name": "Cafe Takagi Klavier"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69361700000,
                        35.65913290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Clinton St. Baking Company"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71450430000,
                        35.66097560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Amara Clinic Omotesando",
                    "name:ja": "アマラクリニック表参道"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71459430000,
                        35.66631380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:full": "東京都渋谷区道玄坂2-11-4",
                    "addr:housenumber": "東京都渋谷区道玄坂２－１１－３",
                    "addr:postcode": "150-0043",
                    "addr:street": "道玄坂",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69607360000,
                        35.65765160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "107-0062",
                    "addr:street": "Minamiaoyama",
                    "category": "School",
                    "name": "Laurus International School of Science"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71489640000,
                        35.65928000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Intimissimi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70279550000,
                        35.64998530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Teshima no Ie",
                    "name:ja": "てしまのいえ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70073850000,
                        35.65027340000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Dentist",
                    "name": "KOHCHI DENTAL CLINIC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69928760000,
                        35.65570000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Department Store",
                    "name": "PARCO"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69848720000,
                        35.66222250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Convenience Store",
                    "name": "7-Eleven"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70764160000,
                        35.65954750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Wholesaler",
                    "name": "Lazio"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69196980000,
                        35.65595530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Nonbei Yokocho",
                    "name:ja": "のんべい横丁"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70154230000,
                        35.65998800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Convenience Store",
                    "name": "LAWSON"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70573990000,
                        35.65576530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Hide"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69438210000,
                        35.65754910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "2 Chome-17-2 Dogenzaka",
                    "category": "Restaurant",
                    "name": "Rough"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69660970000,
                        35.65863050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Gnoble",
                    "name:ja": "グノーブル"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70534430000,
                        35.66087140000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "KAI Ballet Academy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70697100000,
                        35.65226290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0045",
                    "addr:street": "17 Shinsenchō",
                    "category": "Parking Lot",
                    "name": "Town Park Shinsen 1 2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69231210000,
                        35.65803450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Peoples Bureau of The Great Socialist Peoples Libyan Arab Jamahirya Tokyo",
                    "name:ja": "リビア大使館"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70464530000,
                        35.65096300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500031",
                    "addr:street": "Sakuragaokacho",
                    "category": "Drugstore",
                    "name": "Shibuya Ekimae Genki Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70070980000,
                        35.65700880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Hair Salon",
                    "name": "GALA SHIBUYA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70433580000,
                        35.66062510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bicycle Repair Station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69806420000,
                        35.66223700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Sugekari Park",
                    "name:ja": "菅刈公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69415010000,
                        35.65009100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "parking lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69008650000,
                        35.65608450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "31",
                    "addr:city": "渋谷区",
                    "addr:full": "東京都渋谷区宇田川町31-2",
                    "addr:housenumber": "2",
                    "addr:postcode": "150-0042",
                    "addr:province": "東京都",
                    "category": "Theater",
                    "name": "Yoshimoto ∞ Hall",
                    "name:ja": "ヨシモト∞ホール"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69742860000,
                        35.66136090000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70969340000,
                        35.66535180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Deli",
                    "name": "CARROT"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69923740000,
                        35.66388960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Azusa Daiichi High School Shibuya Campus"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70382680000,
                        35.65435030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Restaurant",
                    "name": "Akamu Shinowa"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69341780000,
                        35.65929800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Nail Salon",
                    "name": "CORAZON celeb de nail"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69304770000,
                        35.66466620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Fukushoan"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70289140000,
                        35.64985560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times parking lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69476030000,
                        35.64914620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Nonbei yokocho alley",
                    "name:ja": "Nonbei yokocho alley"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70245820000,
                        35.65978900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Veterinary",
                    "name": "Friends Animal Hospital",
                    "name:ja": "フレンズ動物病院"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70481780000,
                        35.65689570000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Daikanyama nursery school",
                    "name:ja": "代官山保育園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70502300000,
                        35.65076700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "The Contemporary Fix"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70966770000,
                        35.66358580000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Hiroo Kindergarten",
                    "name:ja": "広尾幼稚園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71207800000,
                        35.65179500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Ekokai Komaba Kindergarten",
                    "name:ja": "枝光会駒場幼稚園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68974600000,
                        35.65726600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "JR East Travel Service Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70136120000,
                        35.65788030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Department Store",
                    "name": "Shibuya Niku Yokocho"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69850340000,
                        35.66109430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ナチュラルローソン",
                    "category": "Convenience Store",
                    "name": "Natural Lawson",
                    "name:ja": "ナチュラルローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70445910000,
                        35.66107650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "brand": "Bio C' Bon",
                    "category": "Super Market",
                    "name": "Bio C' Bon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71246890000,
                        35.66204900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500042",
                    "addr:street": "Udagawacho",
                    "category": "Clothing Store",
                    "name": "G-Star RAW Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70024210000,
                        35.66262080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Chaseco"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69651040000,
                        35.66014300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区道玄坂1-10-5",
                    "addr:postcode": "150-0043",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69911920000,
                        35.65704310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "School",
                    "name": "Jewellery School"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70509450000,
                        35.66048690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Tokiwamatsu Park",
                    "name:ja": "常磐松公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70894920000,
                        35.65595700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Hotel",
                    "name": "Shimane Inn Aoyama",
                    "name:ja": "島根イン 青山"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71315600000,
                        35.65848700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500034",
                    "addr:street": "Daikanyamacho",
                    "category": "Drugstore",
                    "name": "Welcia"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70304830000,
                        35.64869830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "1 Chome−16−15",
                    "category": "Studio",
                    "name": "STUDIO HIPPO"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69762820000,
                        35.65679550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69881900000,
                        35.66362900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区桜丘町26-1",
                    "addr:postcode": "150-0031",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69905720000,
                        35.65637650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Aoyama Drafting College Building No. 5"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70210280000,
                        35.65373950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69434450000,
                        35.65997460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Convenience Store",
                    "name": "Lawson"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71308920000,
                        35.65203190000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Shibuya Ward Office Parking Lot Pedestrian Entrance 7",
                    "name:ja": "渋谷区役所前駐車場 歩行者出入口7"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69906010000,
                        35.66499800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Saigo Compound Building B"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69299270000,
                        35.65276740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Margaret Howell Cafe"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70032320000,
                        35.66323470000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "Family Mart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70439470000,
                        35.65789530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Saigoyama park",
                    "name:ja": "西郷山公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69587900000,
                        35.65043300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Fish storehouse"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69853620000,
                        35.65845020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "category": "Cafe",
                    "city": "shibuya",
                    "name": "Komeda's Coffee"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69512910000,
                        35.65620440000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:full": "東京都渋谷区円山町1-19",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69523070000,
                        35.65981810000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Supermarket",
                    "name": "Starry Japan Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70654590000,
                        35.66110670000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Kamiyamachō",
                    "category": "Convenience Store",
                    "name": "Archivando"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69244550000,
                        35.66529790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "MAX PARKING Shoto 2-Chome Part 2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69229940000,
                        35.65854610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "Family Mart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70317750000,
                        35.66416740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "4 Shinsenchō",
                    "category": "Parking Lot",
                    "name": "P24H"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69343330000,
                        35.65763460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Parking Lot",
                    "name": "Eye Do Bike Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69424560000,
                        35.66244340000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya-ku, tokyo",
                    "addr:housenumber": "2-7-4",
                    "addr:postcode": "150-0043",
                    "addr:street": "dogenzaka",
                    "category": "Restaurant",
                    "name": "morimoto",
                    "name:ja": "森本"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69860800000,
                        35.65853490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Itariya-honsha",
                    "name:ja": "伊太利屋本社"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69618210000,
                        35.65196630000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "Clothing Store",
                    "name": "Billy's"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70226580000,
                        35.66458690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区富ヶ谷1-19-4",
                    "addr:postcode": "151-0063",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69208460000,
                        35.66586760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "weapark"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69237410000,
                        35.65531850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:street": "Shibuya Center-Gai",
                    "category": "Restaurant",
                    "name": "Salasa"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69869860000,
                        35.66047710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Shopping Mall",
                    "name": "Tobi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70214640000,
                        35.65971310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Repark"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70917030000,
                        35.66451680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500012",
                    "addr:street": "Hiroo",
                    "category": "Drugstore",
                    "name": "Himawari Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71168040000,
                        35.64893920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "P/man&Hi P/man"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70415610000,
                        35.65690940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Mr.Friendly Cafe"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70524820000,
                        35.64961490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "Jonathan's",
                    "category": "Restaurant",
                    "name": "Jonathan's",
                    "name:ja": "ジョナサン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70051380000,
                        35.65582840000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "5-6",
                    "addr:city": "渋谷区",
                    "addr:housenumber": "渋谷酒販会館B1F",
                    "addr:neighbourhood": "5丁目",
                    "addr:postcode": "150-0047",
                    "addr:province": "東京都",
                    "addr:street": "Kamiyamacho",
                    "category": "Bar",
                    "name": "Gallery mu-Bar mu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69411700000,
                        35.66523800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Fish house"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70813780000,
                        35.64907860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya station square (west exit)",
                    "name:ja": "渋谷駅前(西口)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70055750000,
                        35.65769340000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Real Estate Agent",
                    "name": "Bond"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69564880000,
                        35.65552390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "One day Omotesando"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70729160000,
                        35.66458530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park 100"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70185470000,
                        35.65490330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Daikanyama Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70341440000,
                        35.64868520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "JBS Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69674020000,
                        35.65703740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Ace"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68966680000,
                        35.65014330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "brand": "NATURAL LAWSON",
                    "category": "Convenience Store",
                    "name": "Natural Lawson",
                    "name:ja": "ナチュラルローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69722910000,
                        35.65756080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71326950000,
                        35.66190870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "brand": "My Basket",
                    "category": "Supermarket",
                    "name": "My Basket",
                    "name:ja": "まいばすけっと"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69386380000,
                        35.65759990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Car Dealer",
                    "name": "Saeki Aoyama Showroom"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71396760000,
                        35.65863930000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70399790000,
                        35.65754350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Coin Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69392340000,
                        35.65624800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Gourmet Town",
                    "name:ja": "グルメタウン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69951500000,
                        35.65973010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Hospital",
                    "name": "Dr.Stretch"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70542610000,
                        35.66022280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "General Store",
                    "name": "Aoyama Diamond Hall"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71196800000,
                        35.66548400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "18th Miyaba Mansion"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69413330000,
                        35.65542250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Sumida School Beauty Specialist"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70368060000,
                        35.66340090000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Studio",
                    "name": "Plug In Studio"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70107490000,
                        35.66002200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Snack Mini"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68938380000,
                        35.65225740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Office Building",
                    "name": "Midori-sō"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69336420000,
                        35.65124620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fast Food",
                    "name": "MOS Burger",
                    "name:ja": "モスバーガー"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69781670000,
                        35.65918790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "107-0062",
                    "addr:street": "Minamiaoyama",
                    "category": "Bar",
                    "name": "Planet Minami Aoyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71590880000,
                        35.65928650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "MOANI' Hiroo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70894310000,
                        35.65558440000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Bar Sakura"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70160330000,
                        35.66006290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Toritake Nichome-ten",
                    "name:ja": "鳥竹 二丁目店"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69929300000,
                        35.65901000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "Drugstore",
                    "name": "Scarecrow Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69215280000,
                        35.65585920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500041",
                    "addr:street": "Jinnan",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70097400000,
                        35.66118740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Oreryu Shio Ramen"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69789380000,
                        35.66112040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Aoyama Gakuin Kindergarten",
                    "name:ja": "青山学院幼稚園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71174090000,
                        35.66102810000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:full": "東京都渋谷区代官山町14-23",
                    "addr:postcode": "150-0034",
                    "addr:street": "Daikanyamacho",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70328050000,
                        35.65054960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Maison De Ville"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69221220000,
                        35.65558540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Sanzenri Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70003070000,
                        35.65972580000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Clinic",
                    "name": "RYOUSEIIN"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70901640000,
                        35.65297340000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "Freshness Burger",
                    "category": "Fast Food",
                    "name": "Freshness Burger",
                    "name:ja": "フレッシュネスバーガー"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69656810000,
                        35.65823010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "kamiyamacho",
                    "category": "Restaurant",
                    "name": "Mongenbo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69398650000,
                        35.66356050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "The Atelier Co., Ltd"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69535440000,
                        35.66169460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bicycle Parking",
                    "name": "Konnozaka Chuo No. 2",
                    "name:ja": "金王坂中央第二"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70459170000,
                        35.65884050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "2 Chome-18-5 Dogenzaka",
                    "category": "Cafe",
                    "name": "Back Town Cafe"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69612150000,
                        35.65876950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fuel",
                    "name": "ENEOS Daikanyama Service Station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70441160000,
                        35.65183900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "STELLA TOKYO"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70142160000,
                        35.65638530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Fitness Centre",
                    "name": "Anytime Fitness"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71309920000,
                        35.65204390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Convenience Store",
                    "name": "Family Mart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71229930000,
                        35.66375720000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Riche Komaba Todai-mae",
                    "name:ja": "リシェ駒場東大前"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68896270000,
                        35.65743140000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Watch Store",
                    "name": "COMMON TIME"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69998890000,
                        35.66172070000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Studio Autograph Shinsen"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68970030000,
                        35.65586660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "SUGAR MOUNTAIN"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70621270000,
                        35.65176380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Parking Lot",
                    "name": "Bb Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69665190000,
                        35.66162380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Drugstore",
                    "name": "animate"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69772750000,
                        35.66158730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Tsukumo Ramen Ebisu Honten"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71202860000,
                        35.64985250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Residential Building",
                    "name": "MORIO SA Omotesando"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71685430000,
                        35.65946850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:housenumber": "東京都渋谷区円山町５－３",
                    "addr:postcode": "150-0044",
                    "brand": "Cafe de CRIE",
                    "category": "Cafe",
                    "name": "Cafe de CRIE",
                    "name:ja": "カフェ・ド・クリエ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69556060000,
                        35.65696040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Restaurant",
                    "name": "TOKYO FAMILY RESTAURANT"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70807750000,
                        35.65749240000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Variety Store",
                    "name": "Rainbow"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70525530000,
                        35.66578200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Ohira Clinic",
                    "name:ja": "大平医院"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69970460000,
                        35.65563430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "GRANDBEL HOTEL"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70204250000,
                        35.65619460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Carboots"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70381140000,
                        35.65046700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "18",
                    "addr:city": "渋谷区",
                    "addr:neighbourhood": "37",
                    "addr:postcode": "150-0042",
                    "addr:province": "東京都",
                    "category": "Restaurant",
                    "name": "Gagana Ramen Goku Shibuya",
                    "name:ja": "ガガナラーメン極 渋谷店"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69480590000,
                        35.66290820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Liquor Store",
                    "name": "Aoyama Mikawaya",
                    "name:ja": "青山三河屋"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71115610000,
                        35.66402250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0041",
                    "addr:street": "Jinnan",
                    "category": "Toilet",
                    "name": "Kawaya-Do of Toilet Diagnosis Expert"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69943070000,
                        35.66501950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Art Center",
                    "name": "DDD Aoyama Cross Theater"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70633270000,
                        35.66202200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Tomo Parking Service"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70840200000,
                        35.65590040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Corporate Office",
                    "name": "Luup"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70977130000,
                        35.65528470000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Liquor Store",
                    "name": "Iqos"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69434590000,
                        35.65930290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "College",
                    "name": "Melurix",
                    "name:ja": "医歯専門学校 メルリックス学園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70335130000,
                        35.65413790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Park Forest",
                    "name:ja": "パク森"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69653280000,
                        35.65816790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "Levi's",
                    "category": "Clothing Store",
                    "name": "Levi's"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69921930000,
                        35.66076980000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Hikawa Mikan Park",
                    "name:ja": "氷川みかん公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70996710000,
                        35.65331010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Convenience Store",
                    "name": "7-Eleven"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69687520000,
                        35.66250140000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500033",
                    "addr:street": "sarugakucho",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69924630000,
                        35.64912660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho, 5−14",
                    "category": "Cafe",
                    "name": "Shisha Lilac"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69487240000,
                        35.65709860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Aoyama Gakuin High School"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70919350000,
                        35.65913380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:full": "東京都港区南青山3-15-6",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71563580000,
                        35.66510070000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Pit Design"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69571920000,
                        35.65918410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:postcode": "150-0043",
                    "addr:street": "2 Chome-10-13 Dogenzaka",
                    "category": "Restaurant",
                    "name": "steak lodge"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69777040000,
                        35.65880600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Adachi Kogyo Co., Ltd. Tokyo Branch"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69017640000,
                        35.65150910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:full": "東京都渋谷区渋谷3-13-5",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70636580000,
                        35.65575900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Anyway Restaurant"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69815190000,
                        35.65858860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "Family Mart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70722320000,
                        35.66070910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0001",
                    "addr:street": "6 Chome-18-10 Jingumae",
                    "category": "Clothing Store",
                    "name": "SY32 by sweet years"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70267880000,
                        35.66456400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Udagawacho"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69933680000,
                        35.66081640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Horse meat"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70663850000,
                        35.65551790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "category": "Tobacco",
                    "name": "tobacco"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69395290000,
                        35.65599630000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Dogenzaka",
                    "name:ja": "道玄坂上"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69474860000,
                        35.65524790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ロッテリア",
                    "category": "Fast Food",
                    "name": "Lotteria",
                    "name:ja": "ロッテリア"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69832670000,
                        35.65905160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "YOKOTA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69953480000,
                        35.66056860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "Line Cube Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69849930000,
                        35.66424910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "KLASSE14"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70245390000,
                        35.66328590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "Frangipani Omotesando"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71567280000,
                        35.66587700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500041",
                    "addr:street": "Jinnan",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70006440000,
                        35.66405410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Calzedonia"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69903510000,
                        35.65959540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:full": "東京都目黒区青葉台3-1-19",
                    "addr:postcode": "153-0042",
                    "addr:street": "Aobadai",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69275540000,
                        35.65344960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamacho",
                    "category": "Convenience Store",
                    "name": "My Basket Supermarket"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69501250000,
                        35.66323320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Takahashi Dental Clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70465380000,
                        35.66043570000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Five Estate Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70819480000,
                        35.64925790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Tokyu-hyakkaten-honten-mae",
                    "name:ja": "東急百貨店本店前"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69623890000,
                        35.66030460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "Clothing Store",
                    "name": "Universal Overall"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70332930000,
                        35.66411730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "Convenience Store",
                    "name": "Family Mart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70915570000,
                        35.66269100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Residential Building",
                    "name": "Shizunan House"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69390470000,
                        35.65828540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park Japan Jingumae No. 1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70465030000,
                        35.66372940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Place of Worship",
                    "name": "Tokyo Baptist Church",
                    "name:ja": "東京バプテスト教会"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69755460000,
                        35.65042420000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "I A Prep School Hiraoka"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70369340000,
                        35.65450390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya-ku, tokyo",
                    "addr:housenumber": "5-17-13",
                    "addr:postcode": "150-0001",
                    "addr:street": "jingumae",
                    "category": "Restaurant",
                    "name": "Smoke House",
                    "name:ja": "スモークハウス"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70502630000,
                        35.66542590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Naganuma School for Japanese Language",
                    "name:ja": "ながぬま日本語学校"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69449800000,
                        35.65494150000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Yamau Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68920340000,
                        35.65048820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Amusement Media Sogogakuin"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70759470000,
                        35.65163300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Nippon Designer Institute",
                    "name:ja": "日本デザイナー学院"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70405010000,
                        35.65456730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Jingu-dori Park",
                    "name:ja": "神宮通公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70202240000,
                        35.66506090000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Drugstore",
                    "name": "Quall Pharmacy",
                    "name:ja": "クオール薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70687650000,
                        35.66047500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500032",
                    "addr:street": "Uguisudanicho",
                    "category": "Supermarket",
                    "name": "Maruetsu petit",
                    "name:ja": "マルエツプチ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70144770000,
                        35.65406950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Kazeyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69157380000,
                        35.64874300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Love Hug"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70958960000,
                        35.64961830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500012",
                    "addr:street": "Hiroo",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71283970000,
                        35.65010930000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "WHEAT AND SILVER"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70685240000,
                        35.66409440000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "TINUN Dining Shibuya Dogenzaka"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69939110000,
                        35.65796860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Language School",
                    "name": "INTERNATIONAL CREATIVE KIDS WORLD"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69558640000,
                        35.66212500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "School",
                    "name": "iDear Human Support Academy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70454360000,
                        35.65713820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Borracho"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68909410000,
                        35.65536260000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Kokyo Bicycle"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69818010000,
                        35.66450850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Residential Building",
                    "name": "HULIC Aoyama Building",
                    "name:ja": "ヒューリック青山ビル"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71190090000,
                        35.66505650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "107-0062",
                    "addr:street": "Minamiaoyama",
                    "category": "Beauty Salon",
                    "name": "Zua"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71065670000,
                        35.66275170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Police Station",
                    "name": "Dogenzaka Top Police Box",
                    "name:ja": "道玄坂上交番"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69589350000,
                        35.65737990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Theater",
                    "name": "LIQUIDROOM"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71088770000,
                        35.64910640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "渋谷区",
                    "addr:full": "東京都渋谷区渋谷1-11-6 渋谷１１１ビル",
                    "addr:postcode": "150-0002",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70453730000,
                        35.66081610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:postcode": "153-0044",
                    "addr:street": "Aobadai",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69048550000,
                        35.65048880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Money Transfer",
                    "name": "Money Exchange"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69927910000,
                        35.65989130000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya, tokyo",
                    "addr:housenumber": "20-25",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "Restaurant",
                    "name": "nagahide",
                    "name:ja": "永秀"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69133510000,
                        35.65732880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Uchida Design Institute"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71523760000,
                        35.64938760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Quore Aobadai"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69070880000,
                        35.65591970000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "マツモトキヨシ",
                    "category": "Drugstore",
                    "name": "Matsukiyo",
                    "name:ja": "マツモトキヨシ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69979070000,
                        35.65970530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Matsumizaka Pharmacy",
                    "name:ja": "松見坂薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68975520000,
                        35.65482710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69999250000,
                        35.65678310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya, tokyo",
                    "addr:housenumber": "20-23",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "Restaurant",
                    "name": "Kamizumi Ichinoya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69139810000,
                        35.65716050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Ayung Teras"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70040680000,
                        35.65508640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Meguro Heights"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69150880000,
                        35.64946930000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bicycle Parking",
                    "name": "Konnozakajo",
                    "name:ja": "金王坂上"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70546850000,
                        35.65974620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:housenumber": "2-22-2",
                    "addr:postcode": "150-0043",
                    "addr:street": "道玄坂",
                    "category": "Restaurant",
                    "name": "Chibakara",
                    "name:ja": "ちばから 渋谷道玄坂店"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69556480000,
                        35.65961050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Convenience Store",
                    "name": "Family Mart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71231100000,
                        35.66558350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Parking Lot",
                    "name": "Park japan"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70414270000,
                        35.66117970000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Residential Building",
                    "name": "Kosugi Building Aobadai"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69548850000,
                        35.65170060000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "p24h"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69003020000,
                        35.65656400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fast Food",
                    "name": "Ramen Nagi Niboshioh",
                    "name:ja": "ラーメン 凪 煮干王"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70462100000,
                        35.65789900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Kurita Osteopathic Clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70714410000,
                        35.64968070000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Yours Parking Shibuya 3-Chome"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70782330000,
                        35.65747390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "N E U"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71063830000,
                        35.65025610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Shibuya Ward Office Parking Lot Pedestrian Entrance 9",
                    "name:ja": "渋谷区役所前駐車場 歩行者出入口9"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69961830000,
                        35.66552370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Sato Mansion"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69108430000,
                        35.65055530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Kazuki"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68938110000,
                        35.65129470000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya, tokyo",
                    "addr:housenumber": "22-14",
                    "addr:postcode": "150-0044",
                    "addr:street": "maruyama-cho",
                    "category": "Restaurant",
                    "name": "totogen",
                    "name:ja": "魚魚権"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69416700000,
                        35.65655870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "category": "Clinic",
                    "name": "Yoshida Clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69369210000,
                        35.65839950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "5-5",
                    "addr:city": "渋谷区",
                    "addr:neighbourhood": "5丁目",
                    "addr:postcode": "150-0047",
                    "addr:province": "東京都",
                    "category": "School",
                    "name": "NHK Global Media Service Co., Ltd. Bilingual Center International Training Office",
                    "name:ja": "株式会社NHKグローバルメディアサービス バイリンガルセンター 国際研修室"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69389840000,
                        35.66533610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Liquor Store",
                    "name": "Kakuya liquor store",
                    "name:ja": "角屋酒店"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69776760000,
                        35.65933400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Shibuya Ward Nabeshima Shoto Park",
                    "name:ja": "渋谷区立鍋島松涛公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69119970000,
                        35.65984170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Keiyu Orthopedic Surgery Shibuya",
                    "name:ja": "慶友整形外科渋谷"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70384960000,
                        35.65578760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "School",
                    "name": "Yamazakidobutsusenmon School"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69042850000,
                        35.65806010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "153-0001",
                    "addr:street": "5Chome-28-7",
                    "category": "Cafe",
                    "name": "PIZZANISTA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70344800000,
                        35.66440930000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "2",
                    "addr:city": "Shibuya City",
                    "addr:housenumber": "5",
                    "addr:neighbourhood": "2丁目",
                    "addr:postcode": "150-0002",
                    "addr:province": "東京都",
                    "addr:street": "2 Chome",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70865680000,
                        35.66027940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0001",
                    "addr:street": "Jingumae",
                    "category": "Sporting Goods Store",
                    "name": "ARKTZ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70279820000,
                        35.66426280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69655810000,
                        35.66106120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "SON OF THE CHEESE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70629510000,
                        35.65449080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Sanyo uniform"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69496680000,
                        35.65537400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Dog Park",
                    "name": "Dog Garden"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70021900000,
                        35.64949400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Uguisudani Children's Playground",
                    "name:ja": "鶯谷児童遊園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70317710000,
                        35.65365230000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69521020000,
                        35.65726360000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "2 Chome−18−5",
                    "category": "Bar",
                    "name": "Plan-Bar Goodies"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69601690000,
                        35.65880430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho 5-14",
                    "category": "Beauty Salon",
                    "name": "Yu House"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69469320000,
                        35.65701840000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Paraca"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69563540000,
                        35.65975550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Musical Instrument Store",
                    "name": "Ishibashi musical instrument",
                    "name:ja": "イシバシ楽器"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69769170000,
                        35.66145850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro City",
                    "addr:postcode": "153-0041",
                    "addr:street": "3 Chome 2",
                    "category": "Parking Lot",
                    "name": "Times"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68998600000,
                        35.65769400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "SHANTi Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69736340000,
                        35.65850030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Concombre"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70363540000,
                        35.66021130000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Corporate Office",
                    "name": "Studio Autograph Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70875340000,
                        35.65258980000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Apple Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69160060000,
                        35.66252000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Reno Deuce"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70882850000,
                        35.66017510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Quall Pharmacy",
                    "name:ja": "クオール薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70636450000,
                        35.66069760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:full": "東京都渋谷区南平台町16-28",
                    "addr:postcode": "150-0036",
                    "addr:street": "Maruyamacho",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7 ELEVEN",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69474420000,
                        35.65499070000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "Hospital",
                    "name": "Meiseikai Central Hospital Branch",
                    "name:ja": "明生会セントラル病院分院"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69069000000,
                        35.65765500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69156260000,
                        35.65372140000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Parking J Uguisudanimachi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69937030000,
                        35.65313360000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:full": "東京都渋谷区桜丘町4-14",
                    "addr:postcode": "150-0031",
                    "addr:street": "1 Chome",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70419340000,
                        35.65448950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Loop"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70132430000,
                        35.66408600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "Daikanyama Terrace"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70141690000,
                        35.64943500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Trimble"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70122580000,
                        35.66316990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Nob"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69543220000,
                        35.65977630000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "天下一品",
                    "category": "Restaurant",
                    "name": "Tenkaippin",
                    "name:ja": "天下一品"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69794600000,
                        35.66073690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "VERMEIL par iena Aoyama store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71396690000,
                        35.66298200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Kaihin Shokudo",
                    "name:ja": "海浜食堂"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70122750000,
                        35.65632410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Drugstore",
                    "name": "Yuhido Pharmacy Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70500630000,
                        35.65725050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Sansui",
                    "category": "Fishing Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70390930000,
                        35.65839570000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Dry Cleaning",
                    "name": "Pony cleaning Ebisu Nishi 2-chome"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70783070000,
                        35.64957390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "ジョン・ウェスレー像"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70883110000,
                        35.66169910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:postcode": "150-0002",
                    "brand": "トモズ",
                    "category": "Drugstore",
                    "name": "Tomod's",
                    "name:ja": "トモズ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70513560000,
                        35.65669290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "brand": "Ministop",
                    "category": "Convenience Store",
                    "name": "Ministop",
                    "name:ja": "ミニストップ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69851690000,
                        35.65872750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Car Dealer",
                    "name": "Car Beauty Pro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70636620000,
                        35.66556430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Pout"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70125260000,
                        35.65133060000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "School",
                    "name": "YES International School"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71308250000,
                        35.65510430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "Ministop",
                    "category": "Convenience Store",
                    "name": "Ministop",
                    "name:ja": "ミニストップ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70296330000,
                        35.65432600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Super Market",
                    "name": "ABC market"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70099230000,
                        35.66254870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Dentist",
                    "name": "Takumi Dental Clinic",
                    "name:ja": "匠デンタルクリニック"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70500870000,
                        35.65794520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Real Estate Agent",
                    "name": "Jingo Construction"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68959300000,
                        35.64979460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Cafe and Dining and People"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69721460000,
                        35.66273790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "Clothing Store",
                    "name": "TBalance"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70219000000,
                        35.66481570000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Ebisu nursery school",
                    "name:ja": "恵比寿保育園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70733000000,
                        35.65007110000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "Beverages",
                    "name": "LIQUORS"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71015350000,
                        35.66310480000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Jingudori Park",
                    "name:ja": "神宮通公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70189090000,
                        35.66414560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Department Store",
                    "name": "IKEA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69972300000,
                        35.66044520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500002",
                    "addr:street": "Shibuya",
                    "category": "Convenience Store",
                    "name": "Lawson"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71262450000,
                        35.65896560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bag Store",
                    "name": "aniary"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70855690000,
                        35.66385960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "bar caol ila bar caol ila Shibuya store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69873130000,
                        35.65748290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Tomigaya",
                    "category": "Super Market",
                    "name": "Maruetsu",
                    "name:ja": "マルエツ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69217270000,
                        35.66603160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70491510000,
                        35.66080600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0036",
                    "addr:street": "Nanpeidaicho",
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "LAWSON",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69813410000,
                        35.65481490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Zabuton"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69660970000,
                        35.65716330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Jingumae 5-chome Children's Amusement Park",
                    "name:ja": "神宮前五丁目児童遊園地"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70596390000,
                        35.66343850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70936930000,
                        35.64872390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Toritsu Ichi Sho",
                    "name:ja": "都立一商前"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69918590000,
                        35.65102160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "PRONTO",
                    "name:ja": "Marvel"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69946830000,
                        35.66074510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70627270000,
                        35.66063330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500002",
                    "category": "Drugstore",
                    "name": "Akiyama Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70315760000,
                        35.66334150000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bank",
                    "name": "Sumitomo Mitsui Bank Shibuya Customer Loan Promotion office"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69801780000,
                        35.66022630000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:postcode": "153-0044",
                    "addr:street": "Ohashi",
                    "category": "School",
                    "name": "Kids House Ikejiriohashi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68940130000,
                        35.65380380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:full": "東京都渋谷区渋谷2-12-12",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70828700000,
                        35.65865500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Eruti"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69148030000,
                        35.65594230000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Mikimoto Armor Main Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69254880000,
                        35.64993410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bicycle Parking",
                    "name": "Eco Station 21",
                    "name:ja": "エコステーション２１"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70116340000,
                        35.65552150000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Parking Lot",
                    "name": "Navi Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70386500000,
                        35.66095420000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Variety Store",
                    "name": "Mirokudo Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69637970000,
                        35.65687940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Drugstore",
                    "name": "Hikawa Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70952850000,
                        35.65493050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0001",
                    "addr:street": "6 Chome−19−13",
                    "category": "Furniture Store",
                    "name": "Journal Standard Furniture"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70236970000,
                        35.66307570000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Paraco Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70457180000,
                        35.66062890000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times No B Hiroo 1- chome Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71225970000,
                        35.64901000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Saigobashi",
                    "name:ja": "西郷橋"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69661110000,
                        35.65109430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Restaurant",
                    "name": "Sake Fun zokkon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69576080000,
                        35.66260220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Fitness Center",
                    "name": "KONAMI SPORTS CLUB"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69118220000,
                        35.65779370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "21",
                    "addr:housenumber": "3",
                    "addr:neighbourhood": "1",
                    "addr:postcode": "150-0041",
                    "addr:province": "東京都",
                    "category": "Hobby Store",
                    "name": "Tokyo Anime Center in DNP Plaza Shibuya",
                    "name:ja": "東京アニメセンター in DNP PLAZA SHIBUYA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70044120000,
                        35.66157960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都港区南青山7-3-1",
                    "addr:postcode": "107-0062",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71568450000,
                        35.65877150000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Second Matsushima Heights"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69202040000,
                        35.65084190000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:full": "東京都港区南青山3丁目18-7",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71391780000,
                        35.66493020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Dog Park",
                    "name": "Green dog"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70049900000,
                        35.64946300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69683040000,
                        35.66232420000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70538510000,
                        35.65865490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Birch"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70579890000,
                        35.65159710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Corporate Office",
                    "name": "Hanabishi Real Estate Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70807080000,
                        35.65802520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "Pelican"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69465570000,
                        35.65745320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "brand": "マツモトキヨシ",
                    "category": "Drugstore",
                    "name": "Matsukiyo",
                    "name:ja": "マツモトキヨシ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71039890000,
                        35.66330230000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Cafe Facon Roaster Atelier"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70468780000,
                        35.65046970000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Southward treatment room"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69149600000,
                        35.65766130000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "max parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69781530000,
                        35.64866990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Andzen Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70536840000,
                        35.65421240000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hospital",
                    "name": "Shibuyasuminama Clinics"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70824240000,
                        35.65357600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "School",
                    "name": "Kronos Academy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70441760000,
                        35.66032330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Coin Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70722180000,
                        35.65725480000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "De'fons"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69178100000,
                        35.65810640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya Station",
                    "name:ja": "渋谷駅"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70105800000,
                        35.65784090000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Sarugakucho Park",
                    "name:ja": "猿楽町住居跡公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70236300000,
                        35.65119600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500012",
                    "addr:street": "Tokyo",
                    "category": "Supermarket",
                    "name": "Tomisho"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71377720000,
                        35.65372420000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "1 Chome−28−11",
                    "category": "Restaurant",
                    "name": "WE ARE THE FARM"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69397910000,
                        35.65955950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:full": "東京都渋谷区宇田川町37-11",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69553210000,
                        35.66222240000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "渋谷区公共施設案内"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70812720000,
                        35.66173450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70060810000,
                        35.65418090000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Ecolo Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69768660000,
                        35.65855810000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区東1-26-22",
                    "addr:postcode": "150-0011",
                    "brand": "ライフ",
                    "category": "Supermarket",
                    "name": "Life",
                    "name:ja": "ライフ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70746570000,
                        35.65476200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "paraca"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70966620000,
                        35.66431910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "mixnack"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69566290000,
                        35.65786510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Shibuya Sb Orthopedic Clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70327160000,
                        35.65545960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Variety Store",
                    "name": "Uppercase Letter",
                    "name:ja": "大文字"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70930520000,
                        35.66369180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "707 Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70313650000,
                        35.66001710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Mitsuino Repark Ebisunishi 2-chome"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70713870000,
                        35.64901590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Iris"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69884060000,
                        35.65861370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Dogenzaka",
                    "name:ja": "道玄坂上"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69605730000,
                        35.65606300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Art Supply Store",
                    "name": "Masakodo",
                    "name:ja": "雅光堂"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69462740000,
                        35.64852720000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "Family Mart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71601570000,
                        35.66065390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Convenience Store",
                    "name": "Kartell"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71545490000,
                        35.66489630000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "New Domain Co. Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70764090000,
                        35.64899690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "winebar LE HACO"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70535570000,
                        35.65000820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Adenia"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69872790000,
                        35.65336460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69532840000,
                        35.66006960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:postcode": "150-0044",
                    "addr:street": "Nanpeidai",
                    "category": "Cafe",
                    "city": "shibuya",
                    "name": "Nanpeidai Lounge"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69622340000,
                        35.65538280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "20",
                    "addr:city": "渋谷区",
                    "addr:housenumber": "11",
                    "addr:neighbourhood": "2丁目",
                    "addr:postcode": "150-0002",
                    "addr:province": "東京都",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70311390000,
                        35.65945490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Verita"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71073420000,
                        35.65032150000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "School",
                    "name": "RIZAP ENGLISH"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70751020000,
                        35.65714590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "6",
                    "addr:city": "渋谷区",
                    "addr:full": "東京都渋谷区渋谷四丁目6番3号",
                    "addr:housenumber": "3",
                    "addr:neighbourhood": "4丁目",
                    "addr:postcode": "150-0002",
                    "addr:province": "東京都",
                    "category": "Corporate Office",
                    "name": "Coca-Cola Japan",
                    "name:ja": "日本コカ・コーラ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71229610000,
                        35.65835280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Taiei Park Shibuya Shinsen"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69346140000,
                        35.65505640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "os drug",
                    "name:ja": "os drug"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69969520000,
                        35.65939120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "Hotel Chez Nous"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69521560000,
                        35.65755780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "No.2 Longing House"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70992820000,
                        35.66436570000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Ohara School of Ikebana",
                    "name:ja": "小原流会館"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71280690000,
                        35.66229520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tobacco",
                    "name": "masuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69598640000,
                        35.65751940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Creative Communications Co., Ltd. Reman Palette1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70512840000,
                        35.66296020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Clip Plus"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70868160000,
                        35.65919820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Drugstore",
                    "name": "Keyaki Yakkyoku",
                    "name:ja": "けやき薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69583640000,
                        35.66341220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "107-0062",
                    "addr:street": "Minamiaoyama",
                    "category": "Studio",
                    "name": "Motoyama rice shop"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71404700000,
                        35.65979350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "suitselect"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70250360000,
                        35.66112550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0041",
                    "addr:street": "1 Chome-19-3 Jinnan",
                    "category": "Parking Lot",
                    "name": "High Manten Jinnan Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69992620000,
                        35.66242350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Tokyu Lifia Daikanyama Coin Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70610200000,
                        35.65179540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Nanamica Tokyo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70101120000,
                        35.65140640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "松岡薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69910930000,
                        35.65792870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Ebisu Daigantei"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70716080000,
                        35.64922790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Wakasa"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69204860000,
                        35.64858820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Furniture Store",
                    "name": "Jias Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70478240000,
                        35.65537400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Neighbourhood",
                    "name": "Aobadai 4-chome",
                    "name:ja": "青葉台四丁目"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69112120000,
                        35.65478830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Paraca"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70633270000,
                        35.64892930000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Hair Salon",
                    "name": "Aube"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70372160000,
                        35.65727390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Tomigaya",
                    "category": "Studio",
                    "name": "CHILDSEAT LAB"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69276880000,
                        35.66644350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Red pond",
                    "name:ja": "紅池"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69944750000,
                        35.65576330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Shibuya Nombee Yokocho",
                    "name:ja": "渋谷のんべえ横町"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70153350000,
                        35.65985410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Stone flower",
                    "name:ja": "石花"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70347480000,
                        35.65271580000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Maruhachi Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69727420000,
                        35.65884300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park Japan"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70960360000,
                        35.65410180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "14",
                    "addr:city": "Shibuya",
                    "addr:neighbourhood": "3丁目",
                    "addr:postcode": "150-0011",
                    "addr:street": "3 Chome",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70855350000,
                        35.65027900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "U Share Minami Aoyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71676510000,
                        35.65838050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:housenumber": "道玄坂2-16-8",
                    "addr:street": "ビジネスヴィップ渋谷道玄坂",
                    "category": "Restaurant",
                    "name": "カレー屋 パクパクもりもり"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69651350000,
                        35.65814040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Brown Rice Cafe"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70991000000,
                        35.66556550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Convenience Store",
                    "name": "Yamazaki Daily Store",
                    "name:ja": "ヤマザキデイリーストア"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69841400000,
                        35.66144170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Super Market",
                    "name": "Picard"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71168760000,
                        35.66270650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Load parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69523300000,
                        35.65225900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Taco Bell"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69770330000,
                        35.65992450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya-ku, tokyo",
                    "addr:housenumber": "2-6-7",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "category": "Restaurant",
                    "name": "Jiroumaru",
                    "name:ja": "治郎丸"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69905050000,
                        35.65872590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:postcode": "153-0044",
                    "addr:street": "Ohashi",
                    "category": "Supermarket",
                    "name": "LAWSON"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68928720000,
                        35.65317830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Ryowa Palace Shibuya West"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69147740000,
                        35.65628350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Rukuma Tokyo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70798090000,
                        35.65005830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Oakley"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70588000000,
                        35.66622120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Convenience Store",
                    "name": "Kakuyasu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69542410000,
                        35.66229770000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "marinate"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70976190000,
                        35.66386560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69737770000,
                        35.66112250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "Family Mart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71196280000,
                        35.66129310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "WIRED SHIBUYA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70485610000,
                        35.65599630000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Osakaue",
                    "name:ja": "大坂上"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69225380000,
                        35.65375110000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:postcode": "1500042",
                    "category": "Clothing Store",
                    "name": "FREAK'S STORE Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70031110000,
                        35.66283050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Drugstore",
                    "name:ja": "日本調剤宮益坂薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70473820000,
                        35.66005690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Miyamasuzaka School of Ballet"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70526780000,
                        35.66122660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Sachi Home Management"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71159380000,
                        35.64906120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Car Dealer",
                    "name": "Nippon Rent A car"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70279480000,
                        35.66124510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Restaurant",
                    "name": "Pipal"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69536850000,
                        35.66288990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya station",
                    "name:ja": "渋谷駅"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70122580000,
                        35.65773580000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Oti"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69003560000,
                        35.65091160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "14",
                    "addr:city": "渋谷区",
                    "addr:neighbourhood": "１丁目",
                    "addr:postcode": "150-0047",
                    "addr:province": "東京都",
                    "category": "Studio",
                    "name": "Matsubo Studio",
                    "name:ja": "松濤スタジオ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69287300000,
                        35.66611100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Matsumura kindergarten",
                    "name:ja": "松村幼稚園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68880200000,
                        35.66215400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500032",
                    "addr:street": "Uguisudanicho",
                    "category": "Convenience Store",
                    "name": "Jingu Saito rice grain"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70008050000,
                        35.65411220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "HOTEL ZERO",
                    "name:ja": "ホテル・ゼロ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69445320000,
                        35.65870950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "brand": "ツルハドラッグ",
                    "category": "Drugstore",
                    "name": "Tsuruha",
                    "name:ja": "ツルハドラッグ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69672700000,
                        35.66125490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "THE CENTRAL hair salon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69180450000,
                        35.65920750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Botan"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70461740000,
                        35.65039120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "153-0042",
                    "addr:street": "2 Chome-16-6 Aobadai",
                    "category": "Cafe",
                    "name": "Streamer Coffee"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69458830000,
                        35.64878900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamacho",
                    "category": "Liquor Store",
                    "name": "Marukiya Shoten"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69391610000,
                        35.66384330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Tobu Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70498490000,
                        35.65443470000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Goodpatch Inc."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70404740000,
                        35.65426910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Book Store",
                    "name": "HMV"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69738600000,
                        35.66202380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500012",
                    "addr:street": "Hiroo",
                    "category": "Hair Salon",
                    "name": "HOT and HOT"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71313340000,
                        35.65156760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Kamiyamachō",
                    "category": "Beauty Salon",
                    "name": "ORLANE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69258230000,
                        35.66553850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "daikanyama SOU Daikanyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70256280000,
                        35.65086470000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "School",
                    "name": "Montessori"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70307040000,
                        35.66466370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Omotesando Internal Medicine Ophthalmology Clinic",
                    "name:ja": "表参道内科眼科クリニック"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71178490000,
                        35.66482390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0036",
                    "addr:street": "Nanpeidaicho",
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "LAWSON",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69668560000,
                        35.65501820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "21",
                    "addr:housenumber": "13",
                    "addr:neighbourhood": "2",
                    "addr:postcode": "150-0011",
                    "addr:province": "東京都",
                    "addr:unit": "102",
                    "category": "Corporate Office",
                    "name": "Studio Suuu",
                    "name:ja": "スタジオSuuuu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70888080000,
                        35.65397920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Mitsui's Repark Jingumae 5-chome 9th"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70707160000,
                        35.66446810000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Kamiyama",
                    "name:ja": "神山"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69311150000,
                        35.66474590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "Net Room 1.st"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69729500000,
                        35.65930340000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0011",
                    "addr:street": "1 Chome",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70427540000,
                        35.65598620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Clothing Store",
                    "name": "Kostay"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69513310000,
                        35.66255370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70393080000,
                        35.66081360000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Natural Gourmet Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70444040000,
                        35.66535780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beverages",
                    "name": "Nadaya Sohonten",
                    "name:ja": "灘屋総本店"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70919930000,
                        35.66373430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Supreme"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69984680000,
                        35.66269450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Quarter",
                    "name": "Sarugakucho",
                    "name:ja": "猿楽町"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70113190000,
                        35.65010190000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Coin Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69363240000,
                        35.64909390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Department Store",
                    "name": "Shibuya 109 women"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69996030000,
                        35.65979690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "RB Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71389020000,
                        35.66073250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Ritz Daikanyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70297590000,
                        35.64955160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Super Market",
                    "name": "Smail Seeds Market"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71611460000,
                        35.66592400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "Convenience Store",
                    "name": "Hiranoya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69232920000,
                        35.65575680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Kewpie Corporation"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70492050000,
                        35.66135520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Umeyama Barber Shop"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69227050000,
                        35.65593910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Prison Hospital Restaurant Alcatraz E.R"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69564540000,
                        35.65836550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "Nidi Gallery"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70762680000,
                        35.65198830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Restaurant",
                    "name": "Chuka Ichiban Li"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70435460000,
                        35.66055100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Convenience Store",
                    "name": "Family Mart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70744240000,
                        35.65986950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Shibuya Infoss Tower",
                    "name:ja": "渋谷インフォスタワー"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70099370000,
                        35.65525740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500042",
                    "addr:street": "Udagawacho",
                    "category": "Clothing Store",
                    "name": "JUMBLE STORE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70024430000,
                        35.66264470000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamacho",
                    "category": "Bag Store",
                    "name": "HECKEL"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69442500000,
                        35.66312520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "Gap",
                    "category": "Clothing Store",
                    "name": "Gap"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69937160000,
                        35.66187240000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Parking Lot",
                    "name": "Times Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69502780000,
                        35.66201980000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Residential Building",
                    "name": "Grand Terrace Higashiyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68992160000,
                        35.64878870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Aobadai 4-chome",
                    "name:ja": "青葉台四丁目"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69207400000,
                        35.65485500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Clarence International School"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71583000000,
                        35.66587010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "D&A Music"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69171600000,
                        35.65272280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Nagakawa nursery school",
                    "name:ja": "永川保育園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70910600000,
                        35.65365600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Clinic attached to Toyo Medical Research Institute",
                    "name:ja": "東洋医学研究所付属 クリニック"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69916670000,
                        35.65568120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "School",
                    "name": "Yamaha Piana"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70774960000,
                        35.65700860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Condominium complex",
                    "name": "Izumi Heights"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68975530000,
                        35.66477870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "青山学院 青山キャンパス 案内図"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70891510000,
                        35.66175550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69697100000,
                        35.65916740000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "INC Cocktails"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70608210000,
                        35.66103900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Komaba",
                    "addr:postcode": "150-0041",
                    "addr:street": "3 Chome−4−14",
                    "category": "Studio",
                    "name": "Espacio de la CREAción"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68897340000,
                        35.65725870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Oreryu Gyoza Sakaba"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69639780000,
                        35.66024350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Shibuya Friendship Pharmacy",
                    "name:ja": "渋谷友好薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69669950000,
                        35.65835170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Shelter",
                    "name": "Aioi Nissay Dowa Insurance",
                    "name:ja": "あいおいニッセイ同和損保"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70618780000,
                        35.65982210000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500033",
                    "addr:street": "sarugakucho",
                    "category": "Drugstore",
                    "name": "Welcia"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70269290000,
                        35.65029700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "1 Chome 13-7",
                    "category": "Parking Lot",
                    "name": "P24H parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69856900000,
                        35.65748590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Ecolo Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69358480000,
                        35.65961230000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "Salon de Rendezvous"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69071080000,
                        35.65441350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70112980000,
                        35.65689560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Fugetsu",
                    "name:ja": "風月"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70277760000,
                        35.66048410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Social Facility",
                    "name": "Shibuya Clinic",
                    "name:ja": "国土数値情報（公共施設データ）平成19年　国土交通省"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70593900000,
                        35.65768300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Drugstore",
                    "name": "Kotobuki Pharmacy",
                    "name:ja": "ことぶき薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70995370000,
                        35.66372290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Gift Shop",
                    "name": "Naomi Disco"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70182860000,
                        35.64867210000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Drugstore",
                    "name": "Ikoma Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70615770000,
                        35.66112310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70088810000,
                        35.65697640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Post Office",
                    "name": "Shibuyabashi Post Office",
                    "name:ja": "渋谷橋郵便局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71288310000,
                        35.64867310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "NPC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70588940000,
                        35.65928050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "2 Chome-10 Shoto",
                    "category": "Parking Lot",
                    "name": "P24H Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69100860000,
                        35.65938460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Nanpeidaicho",
                    "name:ja": "南平台町"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69637020000,
                        35.65515180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Restaurant",
                    "name": "Yakiniku Seikoen Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69533560000,
                        35.66256850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Ethosens",
                    "name:ja": "エトセンス"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70347160000,
                        35.65428290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "daylight kitchen"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69994970000,
                        35.65597180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Print Shop",
                    "name": "YM print tower"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69375380000,
                        35.65603660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ABC-MART",
                    "category": "Shoe Store",
                    "name": "ABC MART",
                    "name:ja": "ABC MART"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69860850000,
                        35.66028690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Kitchen Tatekichi",
                    "name:ja": "キッチン立吉"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70974980000,
                        35.66338180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "Minato City Area Map",
                    "name:ja": "港区エリアマップ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71222540000,
                        35.66545900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Store",
                    "name": "Bloom Omotesando store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70948390000,
                        35.66588620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Shoe Store",
                    "name": "ABC-MART"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70099920000,
                        35.66255690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Toilet",
                    "name": "Jingu-dori Park",
                    "name:ja": "神宮通公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70205570000,
                        35.66419290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500032",
                    "addr:street": "Uguisudanicho",
                    "category": "Convenience Store",
                    "name": "7-Eleven"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69901090000,
                        35.65358960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Frontier International Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70693750000,
                        35.65698350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Drugstore",
                    "name": "Tokiwado Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70767920000,
                        35.65396610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Jewellery Shop",
                    "name": "Kikuya Jewelery Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70505430000,
                        35.66036280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "kisa fata"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70848110000,
                        35.64919300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Confectionery shop",
                    "name": "Qingfengtang"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70494930000,
                        35.65346380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Corporate Office",
                    "name": "RecoChoku Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70531080000,
                        35.65970660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Hair Salon",
                    "name": "SENSE MEN'S HAIR SALON"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69814660000,
                        35.66134350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Restaurant",
                    "name": "Yakiniku restaurant"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69738480000,
                        35.66258260000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Quilt Studio Clothwork"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71170450000,
                        35.65253480000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "SHIBUYA FLAG PARKING"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69754640000,
                        35.66060330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69386850000,
                        35.65695510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Lions Plaza Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70997040000,
                        35.64868850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Sante Million Meguro Higashiyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69010260000,
                        35.65016730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times Car Rental"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69623680000,
                        35.65365990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Residential Building",
                    "name": "Proud Flat Shibuya Sakuragaoka",
                    "name:ja": "プラウドフラット渋谷桜丘"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70047790000,
                        35.65448030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park Station"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69436730000,
                        35.65634170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Tomigaya",
                    "category": "Drugstore",
                    "name": "Hello Pharmacy",
                    "name:ja": "ハロー薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69202960000,
                        35.66599520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "KollaBo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69647020000,
                        35.66105960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Liquor Store",
                    "name": "Sansei Liquor Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70333630000,
                        35.65068490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "School",
                    "name": "Omukai Nursery"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69286800000,
                        35.65885170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Sushi Yanonakamura"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69138340000,
                        35.65088050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Hiko Mizuno Jewelry College",
                    "name:ja": "ヒコ・みづの　ジュエリーカレッジ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70340110000,
                        35.66438580000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park Japan Shibuya Higashi 13th"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71122440000,
                        35.65241550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Parkside Clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70241330000,
                        35.64928350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Studio",
                    "name": "Blue-G"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70766310000,
                        35.65983190000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:postcode": "153-0042",
                    "addr:street": "Aobadai",
                    "category": "Supermarket",
                    "name": "Don Quijote Nakameguro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69273660000,
                        35.64873530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Tokyo Environmental Engineering Science Garden",
                    "name:ja": "東京環境工科学園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71093500000,
                        35.65542300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区渋谷3-6-1",
                    "addr:postcode": "150-0002",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70482200000,
                        35.65793200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Print Shop",
                    "name": "Harada Printing Co. Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69204640000,
                        35.65590650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "School",
                    "name": "International Cultural Barber Beauty College"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69337890000,
                        35.65695570000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69629320000,
                        35.65789990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamacho",
                    "category": "Commercial Building",
                    "name": "News service Nikkei Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69389600000,
                        35.66289100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Sporting Goods Store",
                    "name": "Japan Fencing Study Club"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69448500000,
                        35.65763510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "ecolo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69469930000,
                        35.65648930000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Wine Store",
                    "name": "JOLLYS"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71003010000,
                        35.64992180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Reno Deuce"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70877680000,
                        35.66014730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "School",
                    "name": "Jissen Joshi Gakuen Junior High School & High School"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71061350000,
                        35.65679280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Hotel",
                    "name": "HOTEL WONS INN"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70436390000,
                        35.66078530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500043",
                    "addr:street": "Dogenzaka",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69961240000,
                        35.65767560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Sports Center",
                    "name": "Sarugaku Training Gym",
                    "name:ja": "猿楽トレーニングジム"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70180240000,
                        35.65048550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Laundry",
                    "name": "Lavoir"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68922290000,
                        35.65562030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Beauty Salon",
                    "name": "NAIL SALON LUX BOX"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69751260000,
                        35.66189860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "2",
                    "addr:neighbourhood": "宇田川町31",
                    "addr:postcode": "150-0042",
                    "addr:province": "東京都",
                    "brand": "アニメイト",
                    "category": "Hobby Store",
                    "name": "Animate",
                    "name:ja": "アニメイト"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69758120000,
                        35.66134760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Restaurant",
                    "name": "Fuji Soba"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69675180000,
                        35.66151920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Orion Jingumae"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70438750000,
                        35.66368680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "brand": "ドトールコーヒーショップ",
                    "category": "Cafe",
                    "name": "Doutor Coffee Shop",
                    "name:ja": "ドトールコーヒーショップ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69754250000,
                        35.66184490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Confectionery shop",
                    "name": "Parisian"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70170590000,
                        35.65505800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Ice Cream Shop",
                    "name": "Glaciel Omotesando"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71132660000,
                        35.66459480000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "ORB"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68986860000,
                        35.65525850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0045",
                    "addr:street": "Shinsencho",
                    "category": "Cafe",
                    "name": "Cafe de la Fontaine"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69382070000,
                        35.65710140000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Yodaka",
                    "name:ja": "ヨダカ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70494230000,
                        35.66625320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clinic",
                    "name": "Oshida Ladies Clinic",
                    "name:ja": "押田レディースクリニック"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69942010000,
                        35.65523540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "Family Mart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70559450000,
                        35.65633030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "Family Mart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70328410000,
                        35.66534910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "Shibuya Mark City East",
                    "name:ja": "渋谷マークシティEAST"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69956810000,
                        35.65859730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Dear Pharmacy",
                    "name:ja": "ディアファーマシー"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70210740000,
                        35.66085170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "category": "Drugstore",
                    "name": "Suzuran Pharmacy",
                    "name:ja": "すずらん薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69674010000,
                        35.65728900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Dogenzaka-ue",
                    "name:ja": "道玄坂上"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69582060000,
                        35.65702020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Drugstore",
                    "name": "Mayumi Pharmacy Shoto"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69517560000,
                        35.66000260000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Repark Shibuya Uguisudani #2"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70388110000,
                        35.65317610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0041",
                    "addr:street": "Jinnan",
                    "category": "Clothing Store",
                    "name": "Ichi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69978810000,
                        35.66496360000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70958750000,
                        35.64880940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Drugstore",
                    "name": "Kitamura's"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71239600000,
                        35.66465780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区東1-25-2",
                    "addr:postcode": "150-0011",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70846230000,
                        35.65463490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Snack Japanese"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69490580000,
                        35.65877820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Dentist",
                    "name": "Sakuragaoka Dental Clinic",
                    "name:ja": "桜丘歯科クリニック"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70279960000,
                        35.65416170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Drugstore",
                    "name": "Friend pharmacy",
                    "name:ja": "フレンド薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71096290000,
                        35.66429590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区道玄坂1-3-11",
                    "addr:postcode": "150-0043",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69980490000,
                        35.65831690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Hikawanomori Park",
                    "name:ja": "氷川の杜公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71014010000,
                        35.65473440000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "107-0062",
                    "addr:street": "Minamiaoyama",
                    "category": "Studio",
                    "name": "Wirrow"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71540010000,
                        35.66521120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Galu Agency"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69484980000,
                        35.65965210000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "153-0041",
                    "addr:street": "Komaba",
                    "category": "Clothing Store",
                    "name": "R for D"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69003630000,
                        35.65552820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Yakitori Toribonbon Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70908730000,
                        35.65097210000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "School",
                    "name": "MUGAN RYA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70794600000,
                        35.65785200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Drugstore",
                    "name": "Aoyama Daishido Pharmacy",
                    "name:ja": "青山大師堂薬局"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71203680000,
                        35.66393610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Unimat Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69444510000,
                        35.66002370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Orlando"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69243820000,
                        35.65324800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "Neo Cosmo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69486890000,
                        35.65685170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Loop"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70128980000,
                        35.66335560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "iris cafe and bar"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69849390000,
                        35.65870950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Paraca Shoto #1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69188230000,
                        35.66164390000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Super Market",
                    "name": "Kinokuniya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71093270000,
                        35.66387000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Nikka Blender’s bar"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71380100000,
                        35.66164600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Shibuyahigashiguchi Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70520820000,
                        35.65745040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "artwork_type": "sculpture",
                    "category": "Tourism"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70028140000,
                        35.65965370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya-ekimae (Higashiguchi)",
                    "name:ja": "渋谷駅前(東口)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70195910000,
                        35.65917230000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Liquor Store",
                    "name": "Y Shop Shibuya Agi Liquor Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70729690000,
                        35.65421900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Restaurant",
                    "name": "Jail House"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70848850000,
                        35.65876020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Hachiyama Park",
                    "name:ja": "鉢山公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69889630000,
                        35.65299080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Book Store",
                    "name": "Manhattan Records"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69699730000,
                        35.66248750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Cafe HOOTHOOT"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69275770000,
                        35.65568050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "P24H"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69159390000,
                        35.65071220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Studio",
                    "name": "BIC"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70213800000,
                        35.65972350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Sushizanmai"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69672470000,
                        35.66115050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "6",
                    "addr:neighbourhood": "3丁目",
                    "category": "Tourism",
                    "name": "港区エリアマップ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71078380000,
                        35.66588730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500002",
                    "category": "Convenience Store",
                    "name": "7-Eleven"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70294240000,
                        35.66050250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70811640000,
                        35.64867100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "kirin city"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69789790000,
                        35.66135250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Convenience Store",
                    "name": "7-Eleven"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71372350000,
                        35.65572060000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "SAN PARK Shibuya 3"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69363240000,
                        35.65887790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "Laulea Omotesando store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70789510000,
                        35.66427530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Bar",
                    "name": "Bar B"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69748780000,
                        35.66261990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68949710000,
                        35.66199590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Iwate cow",
                    "name:ja": "いわて牛"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70531490000,
                        35.66562840000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Hair Salon",
                    "name": "People Omotesando"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71265440000,
                        35.66561760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Electronic Store",
                    "name": "Yanagizu Electric.co"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68924160000,
                        35.65024140000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "BLOOM"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70617380000,
                        35.65488200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Load parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69781300000,
                        35.64982800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "KOiBUMi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69483670000,
                        35.66257500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Deli",
                    "name": "Kyoka",
                    "name:ja": "京香"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70110350000,
                        35.65416360000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fast Food",
                    "name": "Buon dé Crepe"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69810930000,
                        35.66136920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Josenji",
                    "name:ja": "乗泉寺"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70131160000,
                        35.65336370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tyre Shop",
                    "name": "Bridgestone"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69052370000,
                        35.65539040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Ebisu Tamakiya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70964590000,
                        35.64930960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Repark"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70717760000,
                        35.66409880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Wendy's Burger"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69907190000,
                        35.66014620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "Kodomo no Ki (Tree of Children)"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70792970000,
                        35.66169710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Railway Station",
                    "name": "Shinsen",
                    "name:ja": "神泉"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69333740000,
                        35.65721340000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "NALU"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70091220000,
                        35.65632340000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Car Dealer",
                    "name": "ＢＡＮＤＥ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68890910000,
                        35.65223840000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "P24H"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69358950000,
                        35.66411020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "17",
                    "addr:housenumber": "4",
                    "addr:neighbourhood": "1",
                    "addr:postcode": "150-0002",
                    "addr:province": "東京都",
                    "category": "Corporate Office",
                    "name": "Crunchyroll",
                    "name:ja": "クランチロール"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70370280000,
                        35.66131590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Office Building",
                    "name": "La Collezione building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71629440000,
                        35.66255920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "category": "Convenience Store",
                    "name": "7-Eleven"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69758730000,
                        35.65876080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0011",
                    "addr:street": "3 Chome",
                    "brand": "NATURAL LAWSON",
                    "category": "Convenience Store",
                    "name": "Natural Lawson",
                    "name:ja": "ナチュラルローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70373810000,
                        35.65136870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:full": "東京都渋谷区恵比寿1-7-9",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70915880000,
                        35.65080040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Supermarket",
                    "name": "Spiral"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71160190000,
                        35.66370540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500002",
                    "addr:street": "Shibuya",
                    "category": "School",
                    "name": "Moanas"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70870410000,
                        35.65915680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Pub",
                    "name": "Popular tavern stupid son eldest son"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69690570000,
                        35.66145010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:full": "東京都渋谷区渋谷2-10-13",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70649170000,
                        35.66018770000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Kidoan Shibuya store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69207020000,
                        35.65580170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Aoyama Technical College",
                    "name:ja": "青山製図専門学校"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70372540000,
                        35.65491480000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "0831 yummy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70540730000,
                        35.64863430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Liquor Store",
                    "name": "Aoyama KONISHI"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71637100000,
                        35.66581100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Convenience Store",
                    "name": "Tsuruha Drug Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69679080000,
                        35.66118820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Liquor Store",
                    "name": "Deguchiya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69178710000,
                        35.64882800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "DANCE WORKS"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70211090000,
                        35.65409200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bicycle Parking",
                    "name": "Konnozaka Chuo Daiichi",
                    "name:ja": "金王坂中央第一"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70484430000,
                        35.65867150000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "Air BnB"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69289060000,
                        35.65860430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "The Park Habio Shinsen"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69051570000,
                        35.65660100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:postcode": "153-0044",
                    "addr:street": "Ohashi",
                    "brand": "業務スーパー",
                    "category": "Supermarket",
                    "name": "Gyōmu sūpā",
                    "name:ja": "業務スーパー"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68934160000,
                        35.65092810000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Real Estate Agent",
                    "name": "Tamatakumi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68896140000,
                        35.65649860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Spa",
                    "name": "Olivespa Hiroo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71349020000,
                        35.65453330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Q's Seikatsu Kobo Hiroo store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71245010000,
                        35.65097430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "2 Chome",
                    "category": "Bar",
                    "name": "BAR hamon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70857900000,
                        35.65962270000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Parking Lot",
                    "name": "Times Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69731610000,
                        35.66159540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Jinnan-itchome",
                    "name:ja": "神南一丁目"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70014000000,
                        35.66152400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Shibuya Ward Office Parking Lot Pedestrian Entrance 6",
                    "name:ja": "渋谷区役所前駐車場 歩行者出入口6"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69897680000,
                        35.66473780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Sushi Yanonakamura"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69103340000,
                        35.65105000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0012",
                    "addr:street": "Hiroo",
                    "category": "Photography Studio",
                    "name": "DIGICAPSULE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71382020000,
                        35.65383000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "SCANDAL OFFICIAL SHOP"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70138470000,
                        35.66508700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "12",
                    "addr:city": "渋谷区",
                    "addr:housenumber": "13",
                    "addr:neighbourhood": "1丁目",
                    "addr:postcode": "150-0002",
                    "addr:province": "東京都",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70412120000,
                        35.65995890000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fitness Centre",
                    "name": "IMAOKA BOXING GYM"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70368270000,
                        35.66002090000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Parking lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69531100000,
                        35.65192100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "２７－１０",
                    "addr:city": "渋谷区",
                    "addr:housenumber": "東海ビル１階",
                    "addr:neighbourhood": "1丁目",
                    "addr:postcode": "150-0011",
                    "addr:province": "東京都",
                    "category": "Clinic",
                    "name": "Shibuya Dermatology Clinic（Pediatric dermatology,Cosmetic dermatology）",
                    "name:ja": "渋谷国際皮膚科医院（一般皮膚科、小児皮膚科、美容皮膚科）"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70760580000,
                        35.65403280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Yotsuya Otsuka",
                    "name:ja": "四谷大塚"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70067070000,
                        35.65589520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "LAWSON",
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69532000000,
                        35.65852200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "Shibuya Mark City West",
                    "name:ja": "渋谷マークシティWEST"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69791320000,
                        35.65794350000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Kyogo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70432970000,
                        35.64906880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500032",
                    "addr:street": "Uguisudanicho",
                    "category": "Convenience Store",
                    "name": "Fukui Shinseido Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70140880000,
                        35.65349430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Toei Bus Shibuya Office"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70755040000,
                        35.65323600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Pet Grooming",
                    "name": "Dog-Salon Groom"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70970890000,
                        35.65521490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "BYRONBAY TOKYO"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69436000000,
                        35.65954860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69908090000,
                        35.66030190000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Namikibashi Children's Amusement Park",
                    "name:ja": "並木橋児童遊園地"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70596660000,
                        35.65474750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Drugstore",
                    "name": "Cocokara Fine Alps Pharmacy Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69856940000,
                        35.66271450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0031",
                    "addr:street": "Sakuragaokacho",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69808150000,
                        35.65611940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区渋谷1-24-16",
                    "addr:postcode": "150-0002",
                    "brand": "みずほ銀行",
                    "category": "Bank",
                    "name": "Mizuho",
                    "name:ja": "みずほ銀行"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70177750000,
                        35.65968020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Hanoi no Hoi-san",
                    "name:ja": "ハノイのホイさん"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70084750000,
                        35.65619040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Steak Eiji"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69614300000,
                        35.65895800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "2 Chome-9-2 Dogenzaka",
                    "category": "Restaurant",
                    "name": "Jutei"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69835580000,
                        35.65864030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Parking Lot",
                    "name": "Azuma 2 Chomedai 1 Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70973710000,
                        35.65505640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Duffer Japan"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70501030000,
                        35.66570780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tailor Shop",
                    "name": "Wardrobe Treatment"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69022670000,
                        35.65131320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Convenience Store",
                    "name": "FamilyMart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70429690000,
                        35.65675790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "Piyanee Thai Tea and Street Food"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69683280000,
                        35.66083010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Sora To Mugi To"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70648960000,
                        35.64899910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "Clarks",
                    "category": "Shoe Store",
                    "name": "Clarks"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70137130000,
                        35.66354540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70516820000,
                        35.65789280000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Supermarket",
                    "name": "Maguro & Deli Kadohachi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70311130000,
                        35.64836970000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Arts Centre",
                    "name": "Ebisu East Gallery"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70939780000,
                        35.64893310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500043",
                    "addr:street": "Dogenzaka",
                    "category": "Supermarket",
                    "name": "フレッシュ大和田"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70001660000,
                        35.65843030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Kamiyamachō",
                    "category": "Bag Store",
                    "name": "T-BOARD"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69238050000,
                        35.66559970000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Liquor Store",
                    "name": "Amanuma Liquor Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70633070000,
                        35.65181560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "RAIN FROG"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69936730000,
                        35.65511660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Dogenzaka",
                    "name:ja": "道玄坂上"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69430330000,
                        35.65466160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "ACQUOLINA",
                    "name:ja": "アクオリーナ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69955210000,
                        35.65566650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "東京都渋谷区",
                    "addr:housenumber": "代官山町9-10　Sodacco３階",
                    "addr:postcode": "150-0034",
                    "category": "Corporate Office",
                    "name": "Asuhana Sensei",
                    "name:ja": "あすはな先生　代官山教室"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70469290000,
                        35.65167780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hotel",
                    "name": "Shibuya Tobu Hotel"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69855160000,
                        35.66297650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "イオンマーケット株式会社",
                    "category": "Supermarket",
                    "name": "Peacock",
                    "name:ja": "ピーコックストア"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70316000000,
                        35.64895400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "SHAZBOY"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69901330000,
                        35.66081020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Ichigonanpeidai Bldg. Gekkyoku Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69717760000,
                        35.65559310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71165420000,
                        35.66453310000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "General Store",
                    "name": "GALLUP"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69064510000,
                        35.65020050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Studio",
                    "name": "Yanagiya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69676390000,
                        35.65909690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Store",
                    "name": "Lark Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70043180000,
                        35.65676290000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Shibuya Junior High School",
                    "name:ja": "私立渋谷教育学園渋谷中学校"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70320070000,
                        35.66387750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Hospital",
                    "name": "Medical Scanning Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70880760000,
                        35.65177780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70815390000,
                        35.65173650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "4",
                    "addr:city": "渋谷区",
                    "addr:housenumber": "25",
                    "addr:neighbourhood": "4丁目",
                    "addr:postcode": "150-8366",
                    "addr:province": "東京都",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70958910000,
                        35.66139990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Fun"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70594780000,
                        35.65941890000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Sporting Goods Store",
                    "name": "Stage"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70808820000,
                        35.64962080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Studio",
                    "name": "OPENBASE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69821230000,
                        35.66219640000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "brand": "セブン-イレブン",
                    "brand:en": "7-Eleven",
                    "brand:ja": "セブン-イレブン",
                    "brand:wikidata": "Q259340",
                    "brand:wikipedia": "en:7-Eleven",
                    "category": "Convenience Store",
                    "internet_access": "wlan",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン",
                    "official_name:en": "Seven-Eleven",
                    "opening_hours": "24/7",
                    "website": "http://www.sej.co.jp"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71098970000,
                        35.66636990000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:full": "東京都港区北青山3-8-9",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71036150000,
                        35.66491700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Shoto Kindergarten",
                    "name:ja": "松涛幼稚園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69307900000,
                        35.66076600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "目黒区",
                    "addr:province": "東京都",
                    "category": "Bicycle Rental",
                    "name": "Sugekari Park",
                    "name:ja": "J1-04.菅刈公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69290100000,
                        35.65031530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Electronic Store",
                    "name": "Panasonic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69690840000,
                        35.65542010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500012",
                    "addr:street": "Hiroo",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71133180000,
                        35.64867730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Pocket Park Jingumae Parking Lot"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70395830000,
                        35.66601420000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Technical Park Hachiyamacho"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70065810000,
                        35.65167610000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0001",
                    "addr:street": "Jingumae",
                    "category": "Clothing Store",
                    "name": "BLUE LABEL CRESTBRIDGE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70363710000,
                        35.66568520000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Computer Store",
                    "name": "System Location Co.Ltd"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68959970000,
                        35.64943820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Sugekari nursery school",
                    "name:ja": "菅刈保育園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69521800000,
                        35.65004500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "渋谷区",
                    "addr:housenumber": "2-3-11",
                    "addr:postcode": "150-0012",
                    "category": "Hospital",
                    "name": "Bouldering manipulative clinic",
                    "name:ja": "ボルダリングの整体院"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71422100000,
                        35.65177880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "category": "Hotel",
                    "name": "Hotel Dormy IN"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70216320000,
                        35.66557080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Kitadani Park",
                    "name:ja": "北谷公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69963520000,
                        35.66407370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "3",
                    "addr:city": "Shibuya City",
                    "addr:housenumber": "10",
                    "addr:neighbourhood": "1丁目",
                    "addr:postcode": "150-0002",
                    "addr:province": "東京都",
                    "addr:street": "2 Chome",
                    "brand": "ローソン",
                    "category": "Convenience Store",
                    "name": "Lawson",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70799660000,
                        35.65735840000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Sports Center",
                    "name": "Kyokushin hand",
                    "name:ja": "極真空手"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68992290000,
                        35.65038410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Restaurant",
                    "name": "RESIDIA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69508890000,
                        35.66261200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Hakuritabai Hanbey Shibuya Dogenzaka"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69889630000,
                        35.65779200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500041",
                    "addr:street": "Jinnan",
                    "category": "School",
                    "name": "Kuwasawa"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69995840000,
                        35.66544330000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Animal Rights Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69832830000,
                        35.66187110000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Real Estate Agent",
                    "name": "Matsushita Construction"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68917190000,
                        35.65443800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Dentist",
                    "name": "Taina Clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70386770000,
                        35.65964230000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Office Building",
                    "name": "Los Gatos"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70371620000,
                        35.66497810000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Beauty Salon",
                    "name": "SOMEDAY PREMIUM"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71097830000,
                        35.64905030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "category": "Drugstore",
                    "name": "Aoyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71220670000,
                        35.66424910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Time Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69480590000,
                        35.65854940000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Domeal Aobadai"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69123450000,
                        35.65628880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70268580000,
                        35.66319880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Convenience Store",
                    "name": "LAWSON STORE 100",
                    "name:ja": "ローソン100"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70889770000,
                        35.65333890000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Palace Studio Nakameguro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69132840000,
                        35.64967250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69909800000,
                        35.66296600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "School",
                    "name": "Houten Sect Tokyo Betsuin"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70427950000,
                        35.66104790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500043",
                    "addr:street": "Dogenzaka",
                    "category": "Drugstore",
                    "name": "Kenbido Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69869640000,
                        35.65853250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Kailas"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69619330000,
                        35.65740900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya Station",
                    "name:ja": "渋谷駅"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70097140000,
                        35.65774100000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Musical Instrument Store",
                    "name": "Ishibashi",
                    "name:ja": "イシバシ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69757880000,
                        35.66129020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Bubble Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70773010000,
                        35.64923770000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "P24H"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70798090000,
                        35.65928710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "NOA Dance Academy Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71179160000,
                        35.64859860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Hachiyamacho-koban",
                    "name:ja": "鉢山町交番"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69738450000,
                        35.65199710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Parking Lot",
                    "name": "GS Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69640980000,
                        35.66316170000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Pierce Meguro Aobadai"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69242880000,
                        35.65081840000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Furniture Store",
                    "name": "Minotti"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71558560000,
                        35.66334700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Department Store",
                    "name": "Shibuya Stream"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70296040000,
                        35.65731950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "College",
                    "name": "Aoyama Technical College",
                    "name:ja": "青山製図専門学校"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70176670000,
                        35.65395010000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70099750000,
                        35.66264680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Motto"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70482530000,
                        35.65056830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Le Parc Daikanyama #1"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70397640000,
                        35.65159320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0021",
                    "addr:street": "2 Chome",
                    "category": "Convenience Store",
                    "name": "LAWSON"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70754240000,
                        35.65057490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "2nd Oba Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69442570000,
                        35.65565680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "Nichido Nanpeidai Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69537720000,
                        35.65508420000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Office Building",
                    "name": "Cirulo Daikanyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70625760000,
                        35.65160800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "Convenience Store",
                    "name": "7-Eleven"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70861320000,
                        35.66416850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "1 Chome−15−6",
                    "category": "Commercial Building",
                    "name": "Beans"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69772410000,
                        35.65701400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "1-chōme-20",
                    "category": "Restaurant",
                    "name": "OYSTER BAR"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69670890000,
                        35.65668220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Ralph Lauren Denim"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70478050000,
                        35.66557910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Tokyu Lifia Parking"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69544360000,
                        35.66140040000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "東京都渋谷区",
                    "addr:housenumber": "19-1",
                    "addr:postcode": "150-0044",
                    "addr:street": "円山町",
                    "brand": "LAWSON",
                    "category": "Convenience Store",
                    "name": "LAWSON",
                    "name:ja": "ローソン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69518510000,
                        35.65643380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Hair Salon",
                    "name": "Hair Studio Ray"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70438670000,
                        35.65668880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Park-O Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69607590000,
                        35.65823120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Toy Store",
                    "name": "Toys McCoy Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70864410000,
                        35.65084730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "School",
                    "name": "Gnoble"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70611880000,
                        35.66050530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "Kaleido Shibuya Miyamasuzaka"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70312740000,
                        35.66018870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0044",
                    "addr:street": "Maruyamacho",
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69491260000,
                        35.65602380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Optician",
                    "name": "G room"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70697710000,
                        35.64928730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "Pronto",
                    "category": "Cafe",
                    "name": "Pronto",
                    "name:ja": "プロント"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70258250000,
                        35.66155050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Maruzen Pharmaceuticals Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70712660000,
                        35.65111320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0046",
                    "addr:street": "Shoto",
                    "category": "Hospital",
                    "name": "CENTRAL HOSPITAL",
                    "name:ja": "明生会セントラル病院分院"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68960900000,
                        35.65887500000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "HAC Drug",
                    "name:ja": "ハックドラッグ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70317000000,
                        35.64867400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Sonaya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70204850000,
                        35.65504660000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "150-0036",
                    "addr:street": "Nanpeidaicho",
                    "category": "Clothing Store",
                    "name": "fiko"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69486090000,
                        35.65326220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Zeo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71534760000,
                        35.64976900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "JOURNAL STANDARD"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70452930000,
                        35.66548680000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69252960000,
                        35.65259380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Hospital",
                    "name": "Ebisu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70918790000,
                        35.65179430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "CLAN"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70067050000,
                        35.66234890000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamacho",
                    "category": "Convenience Store",
                    "name": "Family Mart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69419660000,
                        35.66469160000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69951160000,
                        35.66017980000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamachō",
                    "category": "Clinic",
                    "name": "Mami Acupuncture Salon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69319150000,
                        35.66449540000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Dogen"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69579190000,
                        35.65945980000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Todaimae",
                    "name:ja": "東大前"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69029200000,
                        35.65832900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Cafe",
                    "name": "PELLS coffee&bar"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70408770000,
                        35.65397600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500002",
                    "category": "Drugstore",
                    "name": "Pfercos Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70203510000,
                        35.66077710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070062",
                    "addr:street": "Minamiaoyama",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71197210000,
                        35.66276730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Uguisudani Sakura Kindergarten"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70196700000,
                        35.65212800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "サンクス",
                    "category": "Convenience Store",
                    "name": "Sunkus",
                    "name:ja": "サンクス"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69889650000,
                        35.66064130000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Office Building",
                    "name": "Ichigo Shibuya Dogenzaka Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69436060000,
                        35.65605400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "Family Mart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70916810000,
                        35.65249900000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500001",
                    "addr:street": "Jingumae",
                    "category": "Clothing Store",
                    "name": "Balllaholic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70224770000,
                        35.66512240000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Moe Greene Co ltd"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69710320000,
                        35.65237950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区道玄坂2-25-15",
                    "addr:postcode": "150-0043",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69765800000,
                        35.65979050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Dentist",
                    "name": "Taira Dental Clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71314460000,
                        35.66375670000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Grocery Store",
                    "name": "Groovy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69194830000,
                        35.64855030000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Active Woman Study Abroad Center"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70506670000,
                        35.65543720000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区桜丘町18-6",
                    "addr:postcode": "150-0031",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70076710000,
                        35.65588690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "Pro Shop Tower"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70111240000,
                        35.65680260000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区宇田川町23-3",
                    "addr:postcode": "150-0042",
                    "atm": "yes",
                    "branch": "渋谷中央支店",
                    "brand": "みずほ銀行",
                    "brand:en": "Mizuho Bank",
                    "brand:ja": "みずほ銀行",
                    "brand:wikidata": "Q2882956",
                    "category": "Bank",
                    "name": "Mizuho Bank",
                    "name:ja": "みずほ銀行",
                    "opening_hours": "Mo-Fr 09:00-15:00",
                    "operator": "みずほ銀行",
                    "phone": "+81-3-34620311",
                    "ref": "162",
                    "website": "https://www.mizuhobank.co.jp/",
                    "wheelchair": "yes"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69965880000,
                        35.65978400000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Aroma"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69669750000,
                        35.66100920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Mitake Park",
                    "name:ja": "美竹公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70314890000,
                        35.66183460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Han No Daidokoro"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69781130000,
                        35.65970000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Sans Déconner"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69144240000,
                        35.65917750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bank",
                    "name": "The Tokyo Tomin Bank",
                    "name:ja": "東京都民銀行"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69668350000,
                        35.66057560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Ryowa Palace Shibuya West"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69167410000,
                        35.65591780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bar",
                    "name": "Alcatraz"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69562750000,
                        35.65840360000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Tomigaya",
                    "category": "Clothing Store",
                    "name": "etihw._.white"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69182260000,
                        35.66627960000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Fast Food",
                    "name": "KOMORO SOBA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70462480000,
                        35.65653430000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:full": "東京都渋谷区東4-8-1",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "brand": "セブン-イレブン",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71360630000,
                        35.65552210000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Best hair"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70776100000,
                        35.65043860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Trophy Clothing"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70813780000,
                        35.65409250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourist Attraction",
                    "name": "Daikanyama neighborhood"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70158740000,
                        35.64879830000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Domino's"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70853480000,
                        35.66006780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Japanese Izakaya MARU"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69536980000,
                        35.65716710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Sagawa"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70664780000,
                        35.65978120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Hair Salon",
                    "name": "UNiTE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70398310000,
                        35.66111870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "information": "guidepost"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70051850000,
                        35.65975070000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500042",
                    "addr:street": "Udagawacho",
                    "category": "Optician",
                    "name": "Globe Specs"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69931270000,
                        35.66421700000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Drugstore",
                    "name": "Fujido Chinese Medicine Pharmacy Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70516190000,
                        35.66094550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "19",
                    "addr:city": "渋谷区",
                    "addr:housenumber": "9",
                    "addr:neighbourhood": "1丁目",
                    "addr:postcode": "150-0043",
                    "addr:province": "東京都",
                    "addr:street": "Dogenzaka",
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69580530000,
                        35.65673920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Hiroo Office Building"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71243340000,
                        35.64877890000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Restaurant",
                    "name": "Meets"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69500970000,
                        35.66294190000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500011",
                    "addr:street": "Shibuya",
                    "category": "Cafe",
                    "name": "TEgg.42_shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70938910000,
                        35.65827530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "University",
                    "name": "Sanno University Management School",
                    "name:ja": "産業能率大学マネジメントスクール"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69744200000,
                        35.64981300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Rinkawa Kindergarten",
                    "name:ja": "臨川幼稚園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71633770000,
                        35.64888810000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fitness Center",
                    "name": "Anytime Fitness"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69026890000,
                        35.65059450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69785200000,
                        35.66097510000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Shinkosha",
                    "name:ja": "真興社"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70068330000,
                        35.64929590000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Omukai Nursery",
                    "name:ja": "大向保育園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69609390000,
                        35.66198650000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Broadcast Center West Exit",
                    "name:ja": "放送センター西口"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69480090000,
                        35.66471760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1500011",
                    "addr:street": "Higashi",
                    "category": "Drugstore",
                    "name": "Matsuojujido Pharmacy"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71045390000,
                        35.64870920000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Maruyama Children's Amusement Park",
                    "name:ja": "円山児童遊園地"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69442370000,
                        35.65862020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Shokkan",
                    "name:ja": "食幹"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70699500000,
                        35.65799300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Hair Salon",
                    "name": "Viemo Beauty Salon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70897670000,
                        35.65527600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Century House Shoto"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69072620000,
                        35.65901250000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70111420000,
                        35.66369760000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "渋谷区",
                    "category": "Corporate Office",
                    "name": "Office Amano Co., Ltd.",
                    "name:ja": "株式会社オフィス天野"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69509890000,
                        35.66383710000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Tourism",
                    "name": "ホープさん"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70223660000,
                        35.65985870000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "KF-Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70527460000,
                        35.65440420000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "International Cultural Barber Beauty College Shibuya School",
                    "name:ja": "国際文化理容美容専門学校渋谷校"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69352780000,
                        35.65861730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0011",
                    "addr:street": "1 Chome",
                    "category": "Convenience Store",
                    "name": "7 ELEVEN"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70600950000,
                        35.65390180000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "MFPR Shibuya Building Parking Lot Entrance / Exit",
                    "name:ja": "MFPR渋谷ビル駐車場出入口"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70665570000,
                        35.66152020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "PORT of CALL Daikanyama"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70480780000,
                        35.65384080000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "10zen"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69802140000,
                        35.65732780000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "151-0063",
                    "addr:street": "Kamiyamachō",
                    "category": "Tobacco",
                    "name": "TAKEZAWA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69269650000,
                        35.66546490000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Shibuya Station",
                    "name:ja": "渋谷駅"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70036850000,
                        35.65754860000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Car Dealer",
                    "name": "Daihatsu"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69181520000,
                        35.65676560000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Max"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70928840000,
                        35.66594890000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Car Rental Services",
                    "name": "Toyota Rent-A-Car"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69669010000,
                        35.66270360000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Parking lot in front of Shibuya Ward Office",
                    "name:ja": "渋谷区役所前駐車場"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69905140000,
                        35.66388480000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Office Building",
                    "name": "Ebisu Prime Square",
                    "name:ja": "恵比寿プライムスクエア"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71259030000,
                        35.65010630000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "渋谷4-2-9Shibuya, Tokyo",
                    "category": "Restaurant",
                    "name": "Museum 1999 Leau a la Bouche",
                    "name:ja": "ミュージアム 1999 ロアラブッシュ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71280630000,
                        35.65922720000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "category": "Drugstore",
                    "name": "Wing Pharmacy Sibuya Dogenzaka"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69566310000,
                        35.65997460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "1 Chome−17−7",
                    "category": "Hair Salon",
                    "name": "C crew"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69714880000,
                        35.65682880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0043",
                    "addr:street": "Dogenzaka",
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69806080000,
                        35.65923750000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "School",
                    "name": "Aoyama Gakuin Primary School",
                    "name:ja": "私立青山学院初等部"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71136490000,
                        35.65813380000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Hanamaru Udon"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70019850000,
                        35.65813970000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Repark"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70981620000,
                        35.66402410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Coin Park"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69472010000,
                        35.65885450000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Sakura Uenomiya Nursery",
                    "name:ja": "桜上宮保育園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69965050000,
                        35.65526260000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Commercial Building",
                    "name": "First"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70296110000,
                        35.66001820000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "3 Chome",
                    "category": "Handicraft",
                    "name": "Wada Tableware Co., Ltd."
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70667370000,
                        35.65713880000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "brand": "薬ヒグチ",
                    "category": "Drugstore",
                    "name": "Higuchi",
                    "name:ja": "薬ヒグチ"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70630930000,
                        35.66065320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Han no Daidokoro Kadochika"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69702810000,
                        35.65787690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "WIND AND SEA"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68955810000,
                        35.65070020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Kindergarten",
                    "name": "Shibuya Kindergarten",
                    "name:ja": "渋谷幼稚園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70307800000,
                        35.66379300000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Meguro",
                    "addr:postcode": "153-0042",
                    "addr:street": "Aobadai",
                    "brand": "ファミリーマート",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69289770000,
                        35.65412050000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "107-0062",
                    "addr:street": "Minamiaoyama",
                    "category": "Bakery",
                    "name": "Aoyama Kimuraya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71477920000,
                        35.66116120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamacho",
                    "category": "Convenience Store",
                    "operator": "LAWSON"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69450300000,
                        35.66283790000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Hokuriku x Italian Baruccia"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69914270000,
                        35.65757770000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Yono mori"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70700930000,
                        35.65452730000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:full": "東京都渋谷区道玄坂2-16-4",
                    "addr:postcode": "150-0043",
                    "brand": "7-Eleven",
                    "category": "Convenience Store",
                    "name": "7-Eleven",
                    "name:ja": "セブン-イレブン"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69695150000,
                        35.65868460000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Tamoiyanse Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69251180000,
                        35.65513910000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Jojoen",
                    "name:ja": "叙々苑"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69440270000,
                        35.65275320000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Fitness Centre",
                    "name": "rie dance collection yoga"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70440650000,
                        35.65619800000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0047",
                    "addr:street": "Kamiyamachō",
                    "category": "Convenience Store",
                    "name": "Family Mart"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69340380000,
                        35.66443550000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Legato"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69600520000,
                        35.65736410000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Bus Stop",
                    "name": "Udagawacho",
                    "name:ja": "宇田川町"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69640640000,
                        35.66272020000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "1500002",
                    "addr:street": "Hiroo",
                    "category": "Supermarket",
                    "name": "Itakura Food Store"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71361430000,
                        35.65285620000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Clothing Store",
                    "name": "Fridmer Brazilian Bikini"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70561120000,
                        35.66532950000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "TESORO Shibuya"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70734790000,
                        35.65267370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "shibuya",
                    "addr:postcode": "1500031",
                    "addr:street": "sakuragaokacho",
                    "category": "Convenience Store",
                    "name": "Ippudo"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70148060000,
                        35.65657220000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Park",
                    "name": "Shibuya Ward Sakuraoka Park",
                    "name:ja": "渋谷区立桜丘公園"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69866560000,
                        35.65584370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Flats Ohashi"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68889560000,
                        35.65048120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "brand": "FamilyMart",
                    "category": "Convenience Store",
                    "name": "FamilyMart",
                    "name:ja": "ファミリーマート"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69886700000,
                        35.65993140000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Parking Lot",
                    "name": "Times Nanpeidai No. 5"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69584990000,
                        35.65194690000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya",
                    "addr:postcode": "150-0042",
                    "addr:street": "Udagawacho",
                    "category": "Book Store",
                    "name": "AIBI BOOK STORE"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69486360000,
                        35.66274120000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Shibuya City",
                    "addr:postcode": "150-0002",
                    "addr:street": "1 Chome",
                    "category": "Restaurant",
                    "name": "Hagare"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70414760000,
                        35.66059600000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Corporate Office",
                    "name": "Loop"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.69548990000,
                        35.66003530000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Apartment Building",
                    "name": "Yoyogi Park Residence"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.68974190000,
                        35.66545200000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:housenumber": "東京都渋谷区神南１−１２−１",
                    "addr:postcode": "150-8334",
                    "addr:street": "コルネット通り",
                    "category": "Government Office",
                    "name": "Shibuya Pension Office",
                    "name:ja": "渋谷年金事務所"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70086110000,
                        35.66400850000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:block_number": "16",
                    "addr:housenumber": "3",
                    "addr:neighbourhood": "3",
                    "addr:postcode": "150-0011",
                    "category": "Travel Agency",
                    "name": "ICC Consultants",
                    "name:ja": "ICC コンサルタント"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71025690000,
                        35.64951370000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "addr:city": "Minato",
                    "addr:postcode": "1070061",
                    "addr:street": "Kitaaoyama",
                    "category": "Dentist",
                    "name": "I.S dental clinic"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.71242000000,
                        35.66558000000
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "category": "Restaurant",
                    "name": "Fujisoba Restaurant"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        139.70046020000,
                        35.65701780000
                    ]
                }
            }
        ]
    }


var myLines = [{
                    "type": "LineString",
                    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
                }, {
                    "type": "LineString",
                    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
                }];



