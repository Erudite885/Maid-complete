export const DUMMY_DATA = [
  {
    services: [
      {
        id: 7,
        name: "1 Bedroom",
        price: 120.0,
        extras: [
          {
            id: 10,
            name: "deep cleaning",
            price: 59.0,
          },
          {
            id: 1,
            name: "inside fridge",
            price: 25.0,           
          },
          {
            id: 2,
            name: "inside oven",
            price: 25.0,
          },
          {
            id: 11,
            name: "we have pets",
            price: 10.0,
          },
          {
            id: 18,
            name: "clean inside windows",
            price: 30.0,
            
          },
          {
            id: 7,
            name: "clean inside kitchen cabinets",
            price: 30.0,
          },
          {
            id: 5,
            name: "finished basement",
            price: 60.0,
          },
          {
            id: 6,
            name: "move-in/out",
            price: 59.0,
          },
        ],
        pricing_parameters: [
          {
            id: 1,
            type: "flat",
            name: "Bathrooms",
            price: 15.0,
            quantity_minimum: 1,
            quantity_maximum: 8,
            ordering: 0,
          },
        ],

      },
      {
        id: 8,
        name: "2 Bedrooms",
        price: 130.0,
        
        extras: [
          {
            id: 10,
            name: "deep cleaning",
            price: 59.0,
           
          },
          {
            id: 1,
            name: "inside fridge",
            price: 25.0,
            
          },
          {
            id: 2,
            name: "inside oven",
            price: 25.0,
            
          },
          {
            id: 11,
            name: "we have pets",
            price: 10.0,
            
          },
          {
            id: 4,
            name: "clean inside windows",
            price: 60.0,
            
          },
          {
            id: 7,
            name: "clean inside kitchen cabinets",
            price: 30.0,
            
          },
          {
            id: 5,
            name: "finished basement",
            price: 60.0,
            
          },
          {
            id: 13,
            name: "move-in/out",
            price: 69.0,
           
          },
        ],
        pricing_parameters: [
          {
            id: 1,
            type: "flat",
            name: "Bathrooms",
            price: 15.0,
            quantity_minimum: 1,
            quantity_maximum: 8,
            ordering: 0,
          },
        ],
       
      },
      {
        id: 3,
        name: "3 Bedrooms",
        price: 140.0,
        
        extras: [
          {
            id: 12,
            name: "deep cleaning",
            price: 69.0,
            
          },
          {
            id: 1,
            name: "inside fridge",
            price: 25.0,
            
          },
          {
            id: 2,
            name: "inside oven",
            price: 25.0,
            
          },
          {
            id: 19,
            name: "we have pets",
            price: 15.0,
            
          },
          {
            id: 4,
            name: "clean inside windows",
            price: 60.0,
            
          },
          {
            id: 16,
            name: "clean inside kitchen cabinets",
            price: 40.0,
          
          },
          {
            id: 5,
            name: "finished basement",
            price: 60.0,
            quantity_based: false,
            
          },
          {
            id: 14,
            name: "move-in/out",
            price: 79.0,
            
          },
        ],
        pricing_parameters: [
          {
            id: 1,
            type: "flat",
            name: "Bathrooms",
            price: 15.0,
            quantity_minimum: 1,
            quantity_maximum: 8,
            ordering: 0,
          },
        ],
  
      },
      {
        id: 16,
        name: "4+ Bedrooms",
        price: 0.0,
        
        extras: [
          {
            id: 8,
            name: "deep cleaning",
            price: 99.0,
            
          },
          {
            id: 1,
            name: "inside fridge",
            price: 25.0,
            
          },
          {
            id: 2,
            name: "inside oven",
            price: 25.0,
            
          },
          {
            id: 20,
            name: "we have pets",
            price: 20.0,
            
          },
          {
            id: 4,
            name: "clean inside windows",
            price: 60.0,
           
          },
          {
            id: 17,
            name: "clean inside kitchen cabinets",
            price: 60.0,
           
          },
          {
            id: 15,
            name: "move-in/out",
            price: 119.0,
            
          },
        ],
        pricing_parameters: [
          {
            id: 2,
            type: "flat",
            name: "Square Footage",
            price: 0.09,
            quantity_minimum: 1500,
            quantity_maximum: 9000,
            ordering: 1,
          },
        ],
      },
    ],
  },
];

console.log(DUMMY_DATA);