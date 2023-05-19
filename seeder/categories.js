const categories = [
  {
    name: "Smart Watches",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    image: "http://dummyimage.com/140x100.png/5fa2dd/ffffff",
    attrs: [
      { key: "color", value: ["black", "silver", "rose gold"] },
      { key: "heart_rate_monitor", value: ["Yes", "No"] },
      { key: "sleep_tracker", value: ["Yes", "No"] },
    ],
  },
  {
    name: "Speakers",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    image: "http://dummyimage.com/241x100.png/5fa2dd/ffffff",
    attrs: [
      { key: "color", value: ["black", "white", "red"] },
      { key: "power_output", value: ["10W", "20W", "30W"] },
    ],
  },
  {
    name: "Tablets",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    image: "http://dummyimage.com/206x100.png/cc0000/ffffff",
    attrs: [
      { key: "color", value: ["black", "silver", "gold"] },
      { key: "screen_size", value: ["7-inch", "10-inch", "12-inch"] },
    ],
  },
  {
    name: "Headphones",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    image: "http://dummyimage.com/164x100.png/cc0000/ffffff",
    attrs: [
      { key:"color", value: ["black", "white", "blue"] },
      { key: "type", value: ["over-ear", "in-ear", "on-ear"] },
      { key: "wireless", value: ["Yes", "No"] },
    ],
  },
  {
    name: "Watches",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    attrs: [
      { key: "color", value: ["silver", "black", "rose gold"] },
      { key: "material", value: ["stainless steel", "leather", "silicone"] },
      { key: "water_resistant", value: ["Yes", "No"] },
    ],
  },
  {
    name: "Printers",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    image: "http://dummyimage.com/141x100.png/dddddd/000000",
    attrs: [
      { key: "color", value: ["white", "black"] },
      { key: "type", value: ["laser", "inkjet"] },
      { key: "print_speed", value: ["10ppm", "20ppm", "30ppm"] },
    ],
  },
  {
    name: "Cameras",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    image: "http://dummyimage.com/155x100.png/5fa2dd/ffffff",
    attrs: [
      { key: "color", value: ["black", "silver"] },
      { key: "megapixels", value: ["16MP", "20MP", "24MP"] },
    ],
  },
  {
    name: "Tabs",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    image: "http://dummyimage.com/155x100.png/5fa2dd/ffffff",
    attrs: [
      { key: "color", value: ["gray", "white", "rose gold"] },
      { key: "storage", value: ["32GB", "64GB", "128GB"] },
    ],
  },
  {
    name: "Phones",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: "http://dummyimage.com/245x100.png/cc0000/ffffff",
    attrs: [
      { key: "color", value: ["red", "blue", "green"] },
      { key: "ram", value: ["1TB", "2TB", "4TB"] },
    ],
  },
  {
    name: "Laptops",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    image: "http://dummyimage.com/197x100.png/5fa2dd/ffffff",
    attrs: [
      {key: "color", value: ["black", "silver", "gold"] },
      { key: "storage", value: ["64GB", "128GB", "256GB"] },
    ],
  },
];

module.exports = categories