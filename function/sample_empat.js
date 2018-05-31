const dataBarang = [
  {
    type: "Uncharted4",
    category: "Games",
    price: 500000,
    city: "Jakarta"
  },
  {
    type: "Adidas Jogger Pants",
    category: "Sport",
    price: 400000,
    city: "Tangerang"
  },
  {
    type: "Nike Superfly",
    category: "Running",
    price: 750000,
    city: "Bogor"
  },
  {
    type: "Man Shirt With Mandarin Collar",
    category: "Fashion",
    price: 350000,
    city: "Bandung"
  },
  {
    type: "Rise of Tomb Raider",
    category: "Games",
    price: 750000,
    city: "Jakarta"
  }
];

const hitungPajak = harga => {
  const totalHarga = harga * 0.15;
  return totalHarga;
};

const hitungOngkir = city => {
  let ongkir;
  if (city === "Jakarta") {
    ongkir = 10000;
  } else if (city === "Tangerang") {
    ongkir = 15000;
  } else if (city === "Bandung") {
    ongkir = 20000;
  } else if (city === "Bogor") {
    ongkir = 17000;
  }
  return ongkir;
};

const hitungDiskon = harga => {
  const totalDiscount = harga * 0.1;
  return totalDiscount;
};

const hitungTotalHargaBarang = (
  originalPrice,
  taxAja,
  shippingAja,
  discountFeeAja
) => {
  const totalHargaPembayaran =
    originalPrice + taxAja + shippingAja - discountFeeAja;
  return totalHargaPembayaran;
};

dataBarang.map((item,idx)=>{
    const namaBarang = item.type;
    const priceBarang = item.price;
    const city = item.city;
    const pajakSaja = hitungPajak(priceBarang);
    const discountSaja = hitungDiskon(priceBarang);
    const ongkirSaja = hitungOngkir(city);
    const totalHarga = hitungTotalHargaBarang(
      priceBarang,
      pajakSaja,
      ongkirSaja,
      discountSaja
    );

    console.log(`${namaBarang} total harganya ${totalHarga}`)
})
